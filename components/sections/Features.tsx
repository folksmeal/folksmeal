"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { features } from "@/constants/features";



export function Features() {
    return (
        <section id="features" className="py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tighter">
                            Redefining Corporate Dining
                        </h2>
                        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
                            Our unique approach to solving the corporate food crisis.
                        </p>
                    </motion.div>
                </div>

                <BentoGrid className="max-w-7xl mx-auto">
                    {features.map((item, i) => {
                        const borderColors = [
                            "bg-[radial-gradient(#f97316_40%,transparent_60%)]",
                            "bg-[radial-gradient(#3b82f6_40%,transparent_60%)]",
                            "bg-[radial-gradient(#22c55e_40%,transparent_60%)]",
                            "bg-[radial-gradient(#a855f7_40%,transparent_60%)]",
                            "bg-[radial-gradient(#eab308_40%,transparent_60%)]",
                            "bg-[radial-gradient(#14b8a6_40%,transparent_60%)]",
                        ];

                        const durations = [20000, 24000, 30000, 22000, 26000, 28000];

                        return (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                className={item.className}
                                contentClassName="border-foreground/10 cursor-pointer"
                                borderClassName={borderColors[i] || borderColors[0]}
                                duration={durations[i] || 10000}
                            />
                        );
                    })}
                </BentoGrid>
            </div>
        </section>
    );
}
