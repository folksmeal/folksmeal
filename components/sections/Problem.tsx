"use client";

import { motion } from "framer-motion";
import { problems } from "@/constants/problem";

export function Problem() {
    return (
        <section id="problem" className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradients - Warmer tones for 'Problem' */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-[#d5d5d5] mb-6 tracking-tighter">
                            The Corporate Lunch <span className="text-red-500/80">Crisis</span>
                        </h2>
                        <p className="text-[#d5d5d5]/70 max-w-2xl mx-auto text-lg">
                            Why the current state of office dining is broken.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative p-8 rounded-2xl bg-[#d5d5d5]/3 backdrop-blur-sm border border-red-500/10 hover:border-red-500/30 hover:bg-red-500/5 transition-colors duration-300 cursor-pointer"
                        >
                            <div className="relative z-10 flex flex-col items-center text-center h-full">
                                <div className="w-16 h-16 rounded-full bg-red-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-red-500/20">
                                    <problem.icon className="h-8 w-8 text-red-400" />
                                </div>

                                <h3 className="text-xl font-bold text-[#d5d5d5] mb-4 group-hover:text-white transition-colors">
                                    {problem.title}
                                </h3>

                                <p className="text-[#d5d5d5]/60 text-sm leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
