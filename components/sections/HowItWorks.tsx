"use client";

import { motion } from "framer-motion";
import { ChefHat, Building2, Smartphone, PieChart } from "lucide-react";

const steps = [
    {
        icon: ChefHat,
        title: "In-House Kitchens",
        description: "We cook all meals in Folksmeal-operated kitchens, ensuring hygiene, freshness, and consistency.",
    },
    {
        icon: Building2,
        title: "Corporate Partnerships",
        description: "Companies subscribe to Folksmeal plans. We handle delivery, quality, and reporting.",
    },
    {
        icon: Smartphone,
        title: "Employee App",
        description: "Employees pre-book or order lunch via our app, with subsidies auto-applied by HR.",
    },
    {
        icon: PieChart,
        title: "Analytics Dashboard",
        description: "Companies track meal usage, cost, and feedback in real-time. No manual billing.",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-[#08090a] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d5d5d5]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d5d5d5]/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#d5d5d5] mb-6 tracking-tighter">
                        How It Works
                    </h2>
                    <p className="text-[#d5d5d5]/70 max-w-2xl mx-auto text-lg">
                        Seamless integration into your office routine in 4 simple steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative p-8 rounded-3xl bg-[#d5d5d5]/5 border border-[#d5d5d5]/10 hover:bg-[#d5d5d5]/10 hover:border-[#d5d5d5]/30 transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            {/* Number Watermark */}
                            <div className="absolute right-0 -top-4 text-9xl font-bold text-[#d5d5d5]/5 group-hover:text-[#d5d5d5]/10 transition-colors select-none pr-2">
                                {index + 1}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-[#d5d5d5]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#d5d5d5]/10">
                                    <step.icon className="h-7 w-7 text-[#d5d5d5]" />
                                </div>

                                <h3 className="text-xl font-bold text-[#d5d5d5] mb-3 group-hover:text-white transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-[#d5d5d5]/60 text-sm leading-relaxed flex-grow group-hover:text-[#d5d5d5]/80 transition-colors">
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
