"use client";

import { motion } from "framer-motion";
import { howItWorksSteps } from "@/constants/howItWorks";

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tighter">
                        How It Works
                    </h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
                        Seamless integration into your office routine in 4 simple steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {howItWorksSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative cursor-pointer h-full p-8 bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-colors duration-300 overflow-hidden flex flex-col rounded-[1.5rem]"
                        >
                            {/* Number Watermark */}
                            <div className="absolute right-0 -top-4 text-9xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors select-none pr-2">
                                {index + 1}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-foreground/10">
                                    <step.icon className="h-7 w-7 text-foreground" />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-foreground/60 text-sm leading-relaxed flex-grow group-hover:text-foreground/80 transition-colors">
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
