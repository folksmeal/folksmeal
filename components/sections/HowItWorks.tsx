"use client";

import { motion } from "framer-motion";
import { howItWorksSteps } from "@/constants/howItWorks";

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 sm:py-20 md:py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
                    >
                        How It <span className="text-primary">Works</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Seamless integration into your office routine in 8 simple steps.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {howItWorksSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative cursor-pointer h-full p-6 sm:p-8 bg-white border border-primary/20 hover:shadow-md transition-[border-color,box-shadow] duration-500 overflow-hidden flex flex-col rounded-3xl"
                        >
                            {/* Number Watermark */}
                            <div className="absolute right-0 -top-2 sm:-top-4 text-7xl sm:text-8xl md:text-9xl font-bold text-slate-100 group-hover:text-secondary transition-colors duration-500 select-none pr-2">
                                {index + 1}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                                    <step.icon className="h-7 w-7 text-primary" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed grow transition-colors">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
