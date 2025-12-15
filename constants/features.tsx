import React from "react";
import { Utensils, Smartphone, Leaf, BarChart2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const features = [
    {
        title: "Full Control = Consistent Quality",
        description: "We own our kitchens, ensuring standardized recipes, hygiene, and taste every day.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/10 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-white/[0.02]" />

                {/* Sophisticated Quality Control Dashboard */}
                <div className="relative w-full h-full flex items-center justify-center p-6">
                    {/* Central Kitchen Icon with Glow */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Outer glow ring */}
                            <motion.div
                                className="absolute inset-0 -m-4 rounded-full bg-orange-500/5 blur-xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Main icon container */}
                            <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center backdrop-blur-sm shadow-[0_8px_32px_rgba(249,115,22,0.15)]">
                                <Utensils className="h-6 w-6 text-orange-400" />

                                {/* Quality badge */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-background flex items-center justify-center"
                                >
                                    <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Quality Metrics - Top Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute left-4 top-4 space-y-1"
                    >
                        <div className="flex items-center gap-1.5">
                            <div className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
                            <span className="text-[9px] font-medium text-orange-400/80">Hygiene</span>
                            <span className="text-[9px] font-mono text-orange-500">100%</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
                            <span className="text-[9px] font-medium text-orange-400/80">Recipe</span>
                            <span className="text-[9px] font-mono text-orange-500">100%</span>
                        </div>
                    </motion.div>

                    {/* Live Monitoring Bars - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-0.5 items-end h-10"
                    >
                        {[0.6, 0.8, 0.5, 0.9, 0.7, 0.85, 0.75].map((height, i) => (
                            <motion.div
                                key={i}
                                className="w-1 bg-gradient-to-t from-orange-500/40 to-orange-400/60 rounded-t-sm"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${height * 100}%` }}
                                transition={{
                                    delay: 0.5 + i * 0.05,
                                    duration: 0.4,
                                    ease: "easeOut"
                                }}
                                animate={{
                                    opacity: [0.4, 1, 0.4]
                                }}
                                style={{
                                    animationDelay: `${i * 0.1}s`
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* Bottom Status Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="absolute bottom-3 left-4 right-4"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[8px] font-medium text-orange-400/60">Quality Control</span>
                            <span className="text-[8px] font-mono text-orange-500/80">Active</span>
                        </div>
                        <div className="h-0.5 w-full bg-orange-500/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                }}
                                style={{
                                    backgroundSize: "200% 100%"
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Floating particles for premium feel */}
                    {[-30, 20, -10].map((xOffset, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-orange-500/20"
                            initial={{
                                x: xOffset,
                                y: [15, 25, 35][i],
                                opacity: 0
                            }}
                            animate={{
                                y: [null, -20, -40],
                                opacity: [0, 0.6, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.8,
                                ease: "easeOut"
                            }}
                            style={{
                                left: '50%',
                                top: '50%'
                            }}
                        />
                    ))}

                    {/* Corner accent lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                        <motion.path
                            d="M 10 10 L 30 10 M 10 10 L 10 30"
                            stroke="rgba(249, 115, 22, 0.2)"
                            strokeWidth="1"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        />
                        <motion.path
                            d="M 90% 10 L 100% 10 L 100% 30"
                            stroke="rgba(249, 115, 22, 0.2)"
                            strokeWidth="1"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                        />
                    </svg>
                </div>
            </div>
        ),
        icon: <Utensils className="h-4 w-4 text-orange-500" />,
        className: "md:col-span-2",
    },
    {
        title: "Tech-Led Platform",
        description: "HR defines subsidies, employees order via app, and billing is automated.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/10 flex items-center justify-center relative overflow-hidden">
                {/* Floating UI Layers */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-24 h-16 perspective-1000"
                >
                    <motion.div
                        animate={{ rotateX: 12, translateY: 16, scale: 0.9 }}
                        className="absolute inset-0 bg-blue-500/5 border border-blue-500/10 rounded-lg"
                    />
                    <motion.div
                        animate={{ rotateX: 12, translateY: 8, scale: 0.95 }}
                        className="absolute inset-0 bg-blue-500/10 border border-blue-500/20 rounded-lg backdrop-blur-[1px]"
                    />
                    <motion.div
                        animate={{ rotateX: 12 }}
                        className="absolute inset-0 bg-background/90 border border-blue-500/30 rounded-lg flex flex-col gap-1.5 p-2 shadow-2xl"
                    >
                        <motion.div
                            animate={{ width: ["40%", "60%", "40%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="h-1 bg-blue-500/40 rounded-full"
                        />
                        <div className="w-full h-1 bg-blue-500/20 rounded-full" />
                        <div className="w-3/4 h-1 bg-blue-500/20 rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        ),
        icon: <Smartphone className="h-4 w-4 text-blue-500" />,
        className: "md:col-span-1",
    },
    {
        title: "Dietitian-Curated Menus",
        description: "Balanced, low-oil, high-protein meals designed for productivity.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/10 flex items-center justify-center relative overflow-hidden">
                {/* Macro Nutrient Visualization */}
                <div className="relative w-full h-full flex items-center justify-center gap-4 p-4">
                    {/* Protein Ring */}
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90">
                            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-green-500/10" />
                            <motion.circle
                                cx="32" cy="32" r="28"
                                stroke="currentColor" strokeWidth="4" fill="none"
                                className="text-green-500"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 0.75 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                strokeDasharray="175.9"
                                strokeDashoffset="0"
                            />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-[10px] font-bold text-green-500">Protein</span>
                            <span className="text-[8px] text-green-500/60">High</span>
                        </div>
                    </div>

                    {/* Nutrient Bars */}
                    <div className="flex flex-col gap-2 flex-1 max-w-[100px]">
                        {/* Fiber Bar */}
                        <div className="space-y-0.5">
                            <div className="flex justify-between text-[8px] text-emerald-500/60 font-medium">
                                <span>Fiber</span>
                                <span>High</span>
                            </div>
                            <div className="h-1.5 w-full bg-emerald-500/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "80%" }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                />
                            </div>
                        </div>

                        {/* Vitamins Bar */}
                        <div className="space-y-0.5">
                            <div className="flex justify-between text-[8px] text-green-500/60 font-medium">
                                <span>Vitamins</span>
                                <span>Med</span>
                            </div>
                            <div className="h-1.5 w-full bg-green-500/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-green-400 to-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "60%" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </div>

                        {/* Low Oil Indicator */}
                        <div className="space-y-0.5">
                            <div className="flex justify-between text-[8px] text-teal-500/60 font-medium">
                                <span>Oil</span>
                                <span>Low</span>
                            </div>
                            <div className="h-1.5 w-full bg-teal-500/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-teal-400 to-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.4)]"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "5%" }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        icon: <Leaf className="h-4 w-4 text-green-500" />,
        className: "md:col-span-1",
    },
    {
        title: "Data-Driven Insights",
        description: "Predictive demand planning to reduce waste and optimize menus.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10 flex items-end justify-center p-4 relative overflow-hidden">
                {/* Smooth Curve Graph */}
                <div className="w-full h-16 relative">
                    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <motion.path
                            d="M0,40 L0,30 C20,30 20,10 40,15 C60,20 60,5 80,10 C90,12 95,5 100,0 L100,40 Z"
                            fill="url(#graphGradient)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        <motion.path
                            d="M0,30 C20,30 20,10 40,15 C60,20 60,5 80,10 C90,12 95,5 100,0"
                            fill="none"
                            stroke="rgb(168, 85, 247)"
                            strokeWidth="1.5"
                            className="drop-shadow-[0_0_4px_rgba(168,85,247,0.5)]"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </svg>
                    {/* Glowing Dot at end */}
                    <motion.div
                        className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                        style={{ transform: 'translate(50%, -50%)' }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.3 }}
                        animate={{ scale: [1, 1.5, 1] }}
                    />
                </div>
            </div>
        ),
        icon: <BarChart2 className="h-4 w-4 text-purple-500" />,
        className: "md:col-span-2",
    },
    {
        title: "Eco-Friendly",
        description: "Biodegradable packaging and sustainable practices.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-teal-500/5 to-green-500/5 border border-teal-500/10 flex items-center justify-center relative overflow-hidden">
                {/* Recycling/Cycle Abstract */}
                <div className="relative w-16 h-16">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-2 border-teal-500/20 border-t-teal-500/60"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 rounded-full border-2 border-teal-500/10 border-b-teal-500/40"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Leaf className="h-5 w-5 text-teal-500/80" />
                        </motion.div>
                    </div>
                </div>
            </div>
        ),
        icon: <Leaf className="h-4 w-4 text-teal-500" />,
        className: "md:col-span-1",
    },
    {
        title: "Real-Time Feedback",
        description: "3-minute feedback loop for continuous improvement.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-500/5 to-amber-500/5 border border-yellow-500/10 flex items-center justify-center relative overflow-hidden">
                {/* Pulse/Signal Abstract */}
                <div className="flex gap-1 items-end h-8">
                    {[0.4, 0.7, 1, 0.6, 0.8].map((h, i) => (
                        <motion.div
                            key={i}
                            className="w-1.5 bg-yellow-500/60 rounded-t-sm"
                            initial={{ height: "20%" }}
                            animate={{ height: [`${h * 50}%`, `${h * 100}%`, `${h * 50}%`] }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-2 right-2 text-[10px] font-mono text-yellow-500/60"
                >
                    LIVE
                </motion.div>
            </div>
        ),
        icon: <ShieldCheck className="h-4 w-4 text-yellow-500" />,
        className: "md:col-span-2",
    },
];
