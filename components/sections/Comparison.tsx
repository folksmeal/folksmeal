"use client";

import { motion } from "framer-motion";
import { MovingBorderContainer } from "../ui/moving-border";
import { comparisonFeatures, type ComparisonFeature } from "@/constants/comparison";

const ComparisonCard = ({ feature, index }: { feature: ComparisonFeature; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full bg-[#0a0b0c]/50 backdrop-blur-sm p-6 border border-foreground/10 hover:border-foreground/20 transition-colors duration-300 flex flex-col cursor-pointer rounded-2xl"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Header */}
            <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center text-foreground border border-foreground/20">
                    {feature.icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{feature.category}</h3>
                    <p className="text-sm text-foreground/60">{feature.description}</p>
                </div>
            </div>

            {/* Comparison Grid */}
            <div className="space-y-4 relative z-10 flex-grow">
                {/* Traditional */}
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-32 text-xs font-medium text-foreground/40 uppercase tracking-wider pt-1">
                        Traditional
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-foreground/50 leading-relaxed">{feature.traditional}</p>
                    </div>
                </div>

                {/* Aggregators */}
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-32 text-xs font-medium text-foreground/40 uppercase tracking-wider pt-1">
                        Aggregators
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-foreground/50 leading-relaxed">{feature.aggregators}</p>
                    </div>
                </div>

                {/* Folksmeal - Highlighted */}
                <div className="flex items-center gap-3 pt-3 border-t border-foreground/10">
                    <div className="flex-shrink-0 w-32 text-xs font-bold text-foreground uppercase tracking-wider pt-1">
                        Folksmeal
                    </div>
                    <div className="flex-1">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-foreground/10 to-transparent rounded-lg blur-sm" />
                            <p className="relative text-sm text-foreground font-medium leading-relaxed bg-foreground/5 px-3 py-2 rounded-lg border border-foreground/20">
                                {feature.folksmeal}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export function Comparison() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Sophisticated background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.015]" />
            </div>

            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/[0.02] rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-foreground/[0.02] rounded-full blur-3xl" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-6">
                        <div className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                        <span className="text-sm text-foreground/70 font-medium leading-relaxed">Competitive Analysis</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tighter">
                        The Folksmeal Advantage
                    </h2>

                    <p className="text-lg text-foreground/70 leading-relaxed">
                        Built from the ground up for corporate wellness. See how we deliver what traditional solutions can't.
                    </p>
                </motion.div>

                {/* Comparison Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                    {comparisonFeatures.map((feature, index) => (
                        <ComparisonCard key={index} feature={feature} index={index} />
                    ))}
                </div>

                {/* Bottom Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 rounded-2xl blur-xl" />
                        <MovingBorderContainer
                            borderRadius="1rem"
                            duration={30000}
                            className="bg-gradient-to-br from-[#0a0b0c] to-background p-8 text-center border-4 border-foreground/7"
                            borderClassName="bg-[radial-gradient(var(--foreground)_40%,transparent_60%)]"
                        >
                            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
                                <span className="font-semibold text-foreground">Folksmeal isn't just another food service.</span> We're a complete corporate wellness platform that combines nutrition science, technology, and operational excellence to transform how companies feed their teams.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
                                    <span className="leading-relaxed">ISO Certified Kitchen</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
                                    <span className="leading-relaxed">Dietitian-Curated Menus</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
                                    <span className="leading-relaxed">Real-Time Analytics</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
                                    <span className="leading-relaxed">Zero Admin Hassle</span>
                                </div>
                            </div>
                        </MovingBorderContainer>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

