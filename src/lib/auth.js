import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('prompt-ai');

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },

    plugins: [
        jwt({
            jwt: {
                expirationTime: '1h',

                definePayload: ({ user }) => ({
                    id: user.id,
                    email: user.email,
                    role: user.role
                }),
            },

            jwks: {
                rotationInterval: 60 * 60 * 24 * 30,
                gracePeriod: 60 * 60 * 24 * 30,
            },
        }),
    ],

    user: {
        additionalFields: {
            role: {
                type: "string",
                required: false,
                defaultValue: "user",
                input: false,
            },
            plan: {
                type: "string",
                required: false,
                defaultValue: "free",
                input: false,
            },
        },
    },
});