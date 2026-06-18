"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSearch, FiArrowRight, FiCpu } from "react-icons/fi";
import { FaFireFlameCurved } from "react-icons/fa6";
import bannerImage from '@/assets/banner.jpg';

const Banner = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const trendingTags = [
        "Midjourney v6 Art",
        "SEO Blog Writer",
        "SaaS Copywriting",
        "Python Automation",
        "UI Design Ideas"
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
    };

    // Stagger parent variant for orchestrating entrance animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    // Upward fade element variant
    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#011627] pt-24 pb-12">

            {/* 1. Optimized Background Image Layout */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bannerImage}
                    alt="AI Creativity Banner Background"
                    fill
                    priority
                    placeholder="blur"
                    className="object-cover object-center opacity-25 select-none pointer-events-none"
                />
                {/* Deep background mesh blends */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#011627] via-transparent to-[#011627]/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#011627]/60 via-transparent to-[#011627]/60" />
            </div>

            {/* Glowing ambient background orbs for depth */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-indigo-500/30 rounded-full blur-[120px] pointer-events-none z-0 hidden md:block"
            />
            <motion.div
                animate={{
                    scale: [1.1, 0.9, 1.1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[130px] pointer-events-none z-0 hidden md:block"
            />

            {/* 2. Main Center Content Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-8"
            >

                {/* Glowing Tech Badge */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                >
                    <FiCpu className="w-4 h-4 animate-spin [animation-duration:4s]" />
                    <span>The Ultimate AI Prompt Marketplace</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl"
                >
                    Ignite Your Creativity with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-[#dc2f02]">
                        Expert AI Prompts
                    </span>
                </motion.h1>

                {/* Subtitle Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Skip the trial and error. Discover high-converting prompts built to supercharge your productivity, automation, and digital art engineering.
                </motion.p>

                {/* 3. Sleek Pill-Shaped Search Input with Input Focus States */}
                <motion.form
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    onSubmit={handleSearch}
                    className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-slate-700/50 p-1.5 rounded-full shadow-2xl flex items-center gap-2 mt-2 transition-all duration-300 focus-within:border-indigo-500/60 focus-within:ring-2 focus-within:ring-indigo-500/10"
                >
                    <div className="flex items-center flex-1 pl-4 text-slate-400">
                        <FiSearch className="w-5 h-5 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Search optimized prompts for Midjourney, ChatGPT, Claude..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border-none outline-none py-2.5 px-3 text-white placeholder-slate-400 text-sm focus:ring-0"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-sm sm:btn-md bg-indigo-600 hover:bg-indigo-500 border-none text-white px-6 rounded-full shadow-lg transition-all duration-200 normal-case"
                    >
                        Search
                    </button>
                </motion.form>

                {/* 4. Trending Filter Tags */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl pt-1"
                >
                    <span className="text-xs sm:text-sm text-slate-400 font-medium flex items-center gap-1 mr-1">
                        <FaFireFlameCurved className="text-[#dc2f02] w-4 h-4" /> Trending:
                    </span>
                    {trendingTags.map((tag, idx) => (
                        <motion.button
                            key={idx}
                            type="button"
                            whileHover={{ y: -2, scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSearchQuery(tag)}
                            className="px-3 py-1 text-xs rounded-full bg-slate-800/40 hover:bg-indigo-600/20 text-slate-300 hover:text-indigo-300 border border-slate-700/40 hover:border-indigo-500/40 transition-all duration-200"
                        >
                            {tag}
                        </motion.button>
                    ))}
                </motion.div>

                {/* 5. Clean Action Call Button Layout */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
                >
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn btn-md bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-none px-8 rounded-xl shadow-xl shadow-indigo-600/20 w-full sm:w-auto group gap-2 normal-case"
                    >
                        Explore Premium Prompts
                        <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn btn-md btn-link text-slate-400 hover:text-white no-underline hover:no-underline px-6 w-full sm:w-auto normal-case transition-colors duration-200"
                    >
                        Sell Your Prompts
                    </motion.button>
                </motion.div>

            </motion.div>

            {/* Aesthetic Fading Footer Gradient Layer */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#011627] to-transparent pointer-events-none" />
        </section>
    );
};

export default Banner;