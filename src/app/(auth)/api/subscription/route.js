import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { getUserSession } from '@/lib/core/session';
import { stripe } from '@/lib/stripe';

export async function POST() {
    try {
        const headersList = await headers()
        const origin = headersList.get('origin')

        const PRICE_ID = 'price_1Tkw9TD2YO91UGvS1bnKyAxK';
        const user = await getUserSession();

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            customer_email: user?.email,
            line_items: [
                {
                    // Provide the exact Price ID (for example, price_1234) of the product you want to sell
                    price: PRICE_ID,
                    quantity: 1,
                },
            ],
            metadata: {
                priceId: PRICE_ID,
                userId: user.id,
                userEmail: user.email,
            },
            mode: 'payment',
            success_url: `${origin}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
        });
        return NextResponse.redirect(session.url, 303)
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}