"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import loginImg from '@/assets/promptai-login-image.jpeg';
import toast from "react-hot-toast";

const SignIn = () => {
    // 1. Form Data State
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // 2. Field Errors State
    const [errors, setErrors] = useState({});

    // 3. Password Visibility State
    const [showPassword, setShowPassword] = useState(false);

    // Handle input field changes dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear field error instantly when user types
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    // Client-side form validation handler
    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const { data, error } = await authClient.signIn.email({
                email: formData.email,
                password: formData.password,
            });

            if (data) {
                toast.success("Successfully signed in!");
                redirect("/");
            }
            if (error) {
                toast.error("Authentication failed: " + error.message);
            }
        }
    };

    // Google Sign In Handler
    const handleGoogleSignIn = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (err) {
            toast.error("Unable to start Google sign in.");
        }
    };

    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-[#f7f5ee] p-4 md:p-8">
            {/* Outer Container Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-6xl bg-[#fbf9f1] rounded-[2.5rem] shadow-xl border border-stone-200/60 overflow-hidden flex flex-col lg:flex-row min-h-[680px] relative"
            >
                {/* Left Side: Form Container */}
                <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-14 flex flex-col justify-between z-10">
                    {/* Header Branding */}
                    <div>
                        <Link href="/" className="inline-block px-4 py-1.5 rounded-full border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors">
                            Prompt<span className="text-[#dc2f02] font-extrabold">AI</span>
                        </Link>
                    </div>

                    {/* Form Section */}
                    <div className="my-auto py-8 max-w-md w-full mx-auto">
                        <div className="text-center lg:text-left mb-8">
                            <h1 className="text-3xl font-bold text-stone-800 tracking-tight">Welcome back</h1>
                            <p className="text-stone-500 text-sm mt-1">Sign in to manage your prompt engineering workspace</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email Input Field */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-stone-500 px-1">Email</label>
                                <div className={`flex items-center bg-[#f0eee6] rounded-full border ${errors.email ? 'border-red-400' : 'border-transparent'} px-4 py-3 focus-within:border-stone-400 transition-all`}>
                                    <FiMail className="w-4 h-4 text-stone-400 mr-3 flex-shrink-0" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@company.com"
                                        className="w-full bg-transparent border-none outline-none text-stone-800 placeholder-stone-400 text-sm"
                                    />
                                </div>
                                {errors.email && <p className="text-xs text-red-500 mt-1 pl-3">{errors.email}</p>}
                            </div>

                            {/* Password Input Field */}
                            <div className="space-y-1">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-xs font-medium text-stone-500">Password</label>
                                    <Link href="/forgot-password" className="text-xs text-stone-500 hover:text-stone-800 transition-colors">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className={`flex items-center bg-[#f0eee6] rounded-full border ${errors.password ? 'border-red-400' : 'border-transparent'} px-4 py-3 focus-within:border-stone-400 transition-all`}>
                                    <FiLock className="w-4 h-4 text-stone-400 mr-3 flex-shrink-0" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••••••"
                                        className="w-full bg-transparent border-none outline-none text-stone-800 placeholder-stone-400 text-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-stone-400 hover:text-stone-600 transition-colors focus:outline-none ml-2"
                                    >
                                        {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                                    </button>
                                </div>
                                {errors.password && <p className="text-xs text-red-500 mt-1 pl-3">{errors.password}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#fcd34d] hover:bg-[#fbcfe8]/0 hover:bg-[#fbbf24] text-stone-800 font-semibold py-3.5 rounded-full shadow-sm transition-all duration-200 active:scale-[0.99] mt-6 text-sm"
                            >
                                Sign In
                            </button>
                        </form>

                        {/* Social Login Section */}
                        <div className="mt-6">
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                className="w-full bg-transparent hover:bg-stone-200/50 border border-stone-300 text-stone-700 font-medium py-3 rounded-full text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                            >
                                <FcGoogle className="w-5 h-5 flex-shrink-0" />
                                <span>Continue with Google</span>
                            </button>
                        </div>
                    </div>

                    {/* Footer Redirection */}
                    <div className="flex justify-between items-center text-xs text-stone-500 pt-4 border-t border-stone-200/60">
                        <p>
                            Do not have an account?{" "}
                            <Link href="/sign-up" className="text-stone-800 font-semibold hover:underline">
                                Sign Up
                            </Link>
                        </p>
                        <Link href="/terms" className="hover:underline">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>

                {/* Right Side: Image Banner Container */}
                <div className="w-full lg:w-1/2 p-4 hidden lg:block">
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-stone-200">
                        <Image
                            src={loginImg}
                            alt="PromptAI Preview"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                        {/* Close button icon overlay matching design */}
                        <Link
                            href="/"
                            className="absolute top-4 right-4 bg-white/80 hover:bg-white text-stone-700 rounded-full p-2 backdrop-blur-md transition-colors z-10"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </main>
    );
};

export default SignIn;