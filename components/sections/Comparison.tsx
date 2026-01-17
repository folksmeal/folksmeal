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
            className="group relative h-full bg-white p-6 border border-primary/20 hover:border-primary/20 hover:shadow-md transition-[border-color,box-shadow] duration-500 flex flex-col cursor-pointer rounded-2xl"
        >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    {feature.icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{feature.category}</h3>
                    <p className="text-sm text-slate-500">{feature.description}</p>
                </div>
            </div>

            {/* Comparison Grid */}
            <div className="space-y-4 relative z-10 grow">
                {/* Caterers */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                    <div className="shrink-0 w-full sm:w-32 text-xs font-bold text-slate-400 uppercase tracking-wider pt-1">
                        Caterers
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-slate-500 leading-relaxed">{feature.Caterers}</p>
                    </div>
                </div>

                {/* Aggregators */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                    <div className="shrink-0 w-full sm:w-32 text-xs font-bold text-slate-400 uppercase tracking-wider pt-1">
                        Aggregators
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-slate-500 leading-relaxed">{feature.aggregators}</p>
                    </div>
                </div>

                {/* Folksmeal - Highlighted */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 pt-3 border-t border-primary/20">
                    <div className="shrink-0 w-full sm:w-32 text-xs font-bold text-primary uppercase tracking-wider pt-1">
                        Folksmeal
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative">
                            <p className="relative text-sm text-slate-900 font-bold leading-relaxed bg-primary/5 px-3 py-2 rounded-lg border border-primary/20">
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
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Ambient background blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm text-primary font-bold tracking-wide uppercase">Competitive Analysis</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        The Folksmeal <span className="text-primary">Advantage</span>
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed">
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
                        <MovingBorderContainer
                            borderRadius="1.5rem"
                            duration={30000}
                            className="bg-white p-6 text-center border-4 border-primary/20 shadow-lg"
                            borderClassName="bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
                        >
                            <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                <span className="font-bold text-slate-900">Folksmeal isn't just another food service.</span> We're a complete corporate wellness partner that combines nutrition science, technology, and operational excellence to transform how companies feed their teams.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm">
                                {[
                                    "FSSAI Certified Kitchen",
                                    "Dietitian-Curated Menus",
                                    "Real-Time Analytics",
                                    "Zero Admin Hassle"
                                ].map((tag) => (
                                    <div key={tag} className="flex items-center gap-2 py-2 px-5 rounded-full bg-slate-50 border border-primary/20 text-slate-600 font-medium">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </MovingBorderContainer>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
