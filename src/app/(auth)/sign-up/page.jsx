"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLink, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import loginImg from "@/assets/promptai-login-image.jpeg";

const SignUp = () => {
    // 1. Form Data State (Added role and plan)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        photoURL: "",
        password: "",
        role: "user", // Default option
        plan: "free", // Initially free
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

        if (!formData.name.trim()) newErrors.name = "Full name is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.photoURL.trim()) {
            newErrors.photoURL = "Photo URL is required";
        } else if (!/^https?:\/\/.+/i.test(formData.photoURL)) {
            newErrors.photoURL = "Please enter a valid image URL";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        }
        else if (formData.password.length < 6) {
            newErrors.password = "Must be at least 6 characters";
        }
        else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = "Requires an uppercase letter";
        }
        else if (!/[0-9]/.test(formData.password)) {
            newErrors.password = "Requires a number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const { data, error } = await authClient.signUp.email({
                name: formData.name,
                email: formData.email,
                image: formData.photoURL,
                password: formData.password,
                role: formData.role,
                plan: formData.plan,
            });

            if (data) {
                toast.success(`You have successfully registered to NeoMotors`);
                redirect('/sign-in');
            }
            if (error) {
                toast.error('Error signing up: ' + error.message);
            }
        }
    };

    // Google Sign Up Handler
    const handleGoogleSignUp = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (error) {
            toast.error("Google registration failed");
        }
    };

    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-[#f7f5ee] p-4 md:p-8">
            {/* Outer Container Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-6xl bg-[#fbf9f1] rounded-[2.5rem] shadow-xl border border-stone-200/60 overflow-hidden flex flex-col lg:flex-row min-h-[720px] relative"
            >
                {/* Left Side: Form Container */}
                <div className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-between z-10">
                    {/* Header Branding */}
                    <div>
                        <Link href="/" className="inline-block px-4 py-1.5 rounded-full border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors">
                            Prompt<span className="text-[#dc2f02] font-extrabold">AI</span>
                        </Link>
                    </div>

                    {/* Form Section */}
                    <div className="my-auto py-6 max-w-md w-full mx-auto">
                        <div className="text-center lg:text-left mb-6">
                            <h1 className="text-3xl font-bold text-stone-800 tracking-tight">Create an account</h1>
                            <p className="text-stone-500 text-sm mt-1">Sing up and get 30 day free trial</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            {/* Full Name Input Field */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-stone-500 px-1">Full name</label>
                                <div className={`flex items-center bg-[#f0eee6] rounded-full border ${errors.name ? 'border-red-400' : 'border-transparent'} px-4 py-2.5 focus-within:border-stone-400 transition-all`}>
                                    <FiUser className="w-4 h-4 text-stone-400 mr-3 flex-shrink-0" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Amélie Laurent"
                                        className="w-full bg-transparent border-none outline-none text-stone-800 placeholder-stone-400 text-sm"
                                    />
                                </div>
                                {errors.name && <p className="text-xs text-red-500 mt-0.5 pl-3">{errors.name}</p>}
                            </div>

                            {/* Email Address Input Field */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-stone-500 px-1">Email</label>
                                <div className={`flex items-center bg-[#f0eee6] rounded-full border ${errors.email ? 'border-red-400' : 'border-transparent'} px-4 py-2.5 focus-within:border-stone-400 transition-all`}>
                                    <FiMail className="w-4 h-4 text-stone-400 mr-3 flex-shrink-0" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="amélielaurent7622@gmail.com"
                                        className="w-full bg-transparent border-none outline-none text-stone-800 placeholder-stone-400 text-sm"
                                    />
                                </div>
                                {errors.email && <p className="text-xs text-red-500 mt-0.5 pl-3">{errors.email}</p>}
                            </div>

                            {/* Photo URL Input Field */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-stone-500 px-1">Photo URL</label>
                                <div className={`flex items-center bg-[#f0eee6] rounded-full border ${errors.photoURL ? 'border-red-400' : 'border-transparent'} px-4 py-2.5 focus-within:border-stone-400 transition-all`}>
                                    <FiLink className="w-4 h-4 text-stone-400 mr-3 flex-shrink-0" />
                                    <input
                                        type="text"
                                        name="photoURL"
                                        value={formData.photoURL}
                                        onChange={handleChange}
                                        placeholder="https://example.com/avatar.jpg"
                                        className="w-full bg-transparent border-none outline-none text-stone-800 placeholder-stone-400 text-sm"
                                    />
                                </div>
                                {errors.photoURL && <p className="text-xs text-red-500 mt-0.5 pl-3">{errors.photoURL}</p>}
                            </div>

                            {/* Account Type Radio Selector */}
                            <div className="space-y-1 pt-1">
                                <label className="text-xs font-medium text-stone-500 px-1">Account Type</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {["user", "creator"].map((role) => (
                                        <label
                                            key={role}
                                            className={`flex items-center justify-center py-2 px-3 rounded-full border text-center cursor-pointer transition-all ${formData.role === role
                                                ? "bg-[#fcd34d]/20 border-[#fcd34d] text-stone-800 font-semibold"
                                                : "bg-[#f0eee6] border-transparent text-stone-500 hover:border-stone-300"
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="role"
                                                value={role}
                                                checked={formData.role === role}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <span className="capitalize text-xs">{role}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Password Input Field */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-stone-500 px-1">Password</label>
                                <div className={`flex items-center bg-[#f0eee6] rounded-full border ${errors.password ? 'border-red-400' : 'border-transparent'} px-4 py-2.5 focus-within:border-stone-400 transition-all`}>
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
                                {errors.password && <p className="text-xs text-red-500 mt-0.5 pl-3">{errors.password}</p>}
                            </div>

                            {/* Submit Registration Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#fcd34d] hover:bg-[#fbbf24] text-stone-800 font-semibold py-3.5 rounded-full shadow-sm transition-all duration-200 active:scale-[0.99] mt-4 text-sm"
                            >
                                Submit
                            </button>
                        </form>

                        {/* Social Registration Section */}
                        <div className="mt-4">
                            <button
                                type="button"
                                onClick={handleGoogleSignUp}
                                className="w-full bg-transparent hover:bg-stone-200/50 border border-stone-300 text-stone-700 font-medium py-3 rounded-full text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                            >
                                <FcGoogle className="w-5 h-5 flex-shrink-0" />
                                <span>Google</span>
                            </button>
                        </div>
                    </div>

                    {/* Footer Redirection Layer */}
                    <div className="flex justify-between items-center text-xs text-stone-500 pt-4 border-t border-stone-200/60">
                        <p>
                            Have an account?{" "}
                            <Link href="/sign-in" className="text-stone-800 font-semibold hover:underline">
                                Sign in
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

export default SignUp;