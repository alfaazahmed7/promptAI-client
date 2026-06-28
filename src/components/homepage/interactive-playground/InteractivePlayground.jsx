'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiSliders, FiTerminal, FiCopy, FiCheck, FiLayers } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { SiOpenai } from 'react-icons/si';
import { GiCrystalBall } from 'react-icons/gi';
import { LuPyramid } from 'react-icons/lu';

const PlaygroundData = {
    midjourney: {
        tool: "Midjourney v6.0",
        icon: <LuPyramid className="text-amber-400" />,
        basePrompt: "A hyper-realistic cinematic portrait of [Subject], shot on 85mm lens, dramatic chiaroscuro lighting, volumetric smoke, cyberpunk atmosphere",
        modifiers: [
            { label: "Aspect Ratio 16:9", value: " --ar 16:9" },
            { label: "Photorealistic Raw", value: " --style raw" },
            { label: "Ultra Detail (Aesthetic)", value: " --stylize 750" }
        ],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    chatgpt: {
        tool: "ChatGPT (GPT-4o)",
        icon: <SiOpenai className="text-emerald-400" />,
        basePrompt: "Act as an expert Senior Full-Stack Next.js Developer. Write a secure, scalable API route handler in TypeScript designed to",
        modifiers: [
            { label: "Include Error Handling", value: " wrap logic in robust try/catch blocks with structural error classification" },
            { label: "Optimize for Performance", value: " leverage Redis edge-caching and minimize runtime execution overhead" },
            { label: "Add Validation Layer", value: " enforce request body filtering utilizing Zod schema validation streams" }
        ],
        image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80"
    },
    stablediffusion: {
        tool: "Stable Diffusion 3",
        icon: <GiCrystalBall className="text-purple-400" />,
        basePrompt: "Ethereal dark fantasy landscape, mystical neon obsidian monolith shattering, intricate cosmic nebula rendering, digital painting masterpiece",
        modifiers: [
            { label: "Masterpiece (4K)", value: " trending on artstation, sharp focus, breathtaking masterpiece composition" },
            { label: "Vibrant Color Grade", value: " highly saturated secondary tones, cinematic global illumination accent" },
            { label: "Unreal Engine 5 Render", value: " raytraced micro-occlusion details, dynamic atmospheric lighting shadows" }
        ],
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80"
    }
};

const InteractivePlayground = () => {
    const [activeTab, setActiveTab] = useState('midjourney');
    const [selectedMods, setSelectedMods] = useState([]);
    const [copied, setCopied] = useState(false);

    const currentModel = PlaygroundData[activeTab];

    // Toggle active parameter modifiers
    const handleModToggle = (val) => {
        if (selectedMods.includes(val)) {
            setSelectedMods(selectedMods.filter(m => m !== val));
        } else {
            setSelectedMods([...selectedMods, val]);
        }
    };

    // Reset parameters when switching core models
    const handleTabChange = (tabKey) => {
        setActiveTab(tabKey);
        setSelectedMods([]);
    };

    // Calculate dynamic live prompt structure string
    const fullyCompiledPrompt = `${currentModel.basePrompt}${selectedMods.join(activeTab === 'chatgpt' ? ',' : '')}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(fullyCompiledPrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="bg-[#0B1220] text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Container */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <HiOutlineSparkles className="text-sm animate-pulse" />
                        Live Blueprint Engine
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                        Interactive <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Prompt Playground</span>
                    </h2>
                    <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
                        Test variables live on our homepage framework. Adjust model parameters, append structural engineering variables, and inspect raw output changes.
                    </p>
                </div>

                {/* Core Multi-Model Switcher Tabs */}
                <div className="flex justify-center gap-2 mb-10 max-w-xl mx-auto bg-[#131c2e]/60 p-1.5 rounded-2xl border border-slate-800/80">
                    {Object.keys(PlaygroundData).map((key) => (
                        <button
                            key={key}
                            onClick={() => handleTabChange(key)}
                            className={`flex items-center justify-center gap-2 flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === key
                                    ? 'bg-[#131c2e] text-white border border-slate-700 shadow-xl'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#131c2e]/30'
                                }`}
                        >
                            {PlaygroundData[key].icon}
                            <span className="hidden sm:inline">{PlaygroundData[key].tool.split(' ')[0]}</span>
                        </button>
                    ))}
                </div>

                {/* Split Screen Application Interface Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left: Interactive Control Inputs (Column Span 5) */}
                    <div className="lg:col-span-5 rounded-2xl bg-[#131c2e] p-6 sm:p-8 border border-slate-800/60 flex flex-col justify-between shadow-xl">
                        <div>
                            <div className="flex items-center gap-2 text-sm font-bold text-white mb-6 tracking-wide pb-3 border-b border-slate-800/80">
                                <FiSliders className="text-indigo-400 text-base" />
                                <span>Engine Modification Panel</span>
                            </div>

                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">
                                1. Base Structure Context
                            </p>
                            <div className="bg-[#0B1220] text-slate-300 rounded-xl p-4 text-xs leading-relaxed border border-slate-800/50 font-mono mb-6 select-text">
                                {currentModel.basePrompt}
                            </div>

                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">
                                2. Append Optimization Modifiers
                            </p>
                            <div className="space-y-2.5">
                                {currentModel.modifiers.map((mod, index) => {
                                    const active = selectedMods.includes(mod.value);
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleModToggle(mod.value)}
                                            className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-xl border text-xs font-semibold transition-all duration-200 ${active
                                                    ? 'bg-indigo-600/10 border-indigo-500 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                                                    : 'bg-[#0B1220] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                                                }`}
                                        >
                                            <span>{mod.label}</span>
                                            <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${active ? 'bg-indigo-500 border-indigo-400 text-white' : 'border-slate-700 bg-slate-900'
                                                }`}>
                                                {active && <FiCheck className="text-[10px]" />}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Summary Descriptor Tag */}
                        <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-[11px] font-medium text-slate-500">
                            <FiLayers className="text-slate-600" />
                            <span>Variables change output matrix in real-time.</span>
                        </div>
                    </div>

                    {/* Right: Compiled Code Window & AI Frame (Column Span 7) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">

                        {/* Prompt Output Terminal String Component */}
                        <div className="rounded-2xl bg-[#131c2e] border border-slate-800/60 flex flex-col overflow-hidden shadow-xl flex-1">
                            <div className="flex items-center justify-between px-5 py-3 bg-slate-900/60 border-b border-slate-800/80">
                                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                                    <FiTerminal className="text-indigo-400 text-sm" />
                                    <span>compiled_string_stream.bin</span>
                                </div>
                                <button
                                    onClick={handleCopy}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#0B1220] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 active:scale-95 transition-all"
                                >
                                    {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                                    <span>{copied ? 'Copied' : 'Copy'}</span>
                                </button>
                            </div>
                            <div className="p-5 flex-1 font-mono text-xs sm:text-sm text-indigo-300 bg-slate-950/40 leading-relaxed select-text whitespace-pre-wrap break-all">
                                {fullyCompiledPrompt}
                                <span className="animate-ping ml-1 text-white opacity-80">|</span>
                            </div>
                        </div>

                        {/* Interactive Visual AI Render Canvas Frame */}
                        <div className="relative rounded-2xl aspect-[21/9] lg:h-48 overflow-hidden bg-slate-900 border border-slate-800/60 shadow-xl group">
                            <Image
                                src={currentModel.image}
                                alt="Live Sample Model Output Rendering"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 saturate-[0.85]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                                <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase rounded bg-slate-950/90 text-slate-400 border border-slate-800 backdrop-blur-sm">
                                    Target Model Canvas
                                </span>
                                <span className="text-[10px] text-slate-400 font-medium tracking-wide drop-shadow-md">
                                    Simulated Generation Output
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default InteractivePlayground;