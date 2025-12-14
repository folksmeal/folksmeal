"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap, Heart, BarChart3, Rocket } from "lucide-react";

interface ComparisonFeature {
    icon: React.ReactNode;
    category: string;
    description: string;
    traditional: string;
    aggregators: string;
    folksmeal: string;
}

const features: ComparisonFeature[] = [
    {
        icon: <Shield className="w-5 h-5" />,
        category: "Quality Control",
        description: "End-to-end food safety and consistency",
        traditional: "Inconsistent quality across vendors",
        aggregators: "No control over restaurant standards",
        folksmeal: "ISO-certified central kitchen with real-time monitoring"
    },
    {
        icon: <Heart className="w-5 h-5" />,
        category: "Nutrition Focus",
        description: "Dietitian-approved balanced meals",
        traditional: "Generic catering menus",
        aggregators: "Restaurant food, no health focus",
        folksmeal: "Dietitian-curated menus with macro tracking"
    },
    {
        icon: <Zap className="w-5 h-5" />,
        category: "Technology",
        description: "Seamless integration and automation",
        traditional: "Manual coordination required",
        aggregators: "Consumer app, not B2B optimized",
        folksmeal: "HRMS integration, analytics dashboard, automated billing"
    },
    {
        icon: <BarChart3 className="w-5 h-5" />,
        category: "Data & Insights",
        description: "Employee wellness and engagement metrics",
        traditional: "No data or reporting",
        aggregators: "Basic order history only",
        folksmeal: "Comprehensive analytics on preferences, nutrition, ROI"
    },
    {
        icon: <TrendingUp className="w-5 h-5" />,
        category: "Business Model",
        description: "Predictable recurring revenue",
        traditional: "Event-based, irregular income",
        aggregators: "Consumer transactions, no B2B focus",
        folksmeal: "Subscription-based B2B with long-term contracts"
    },
    {
        icon: <Rocket className="w-5 h-5" />,
        category: "Scalability",
        description: "Growth without compromising quality",
        traditional: "Limited by vendor capacity",
        aggregators: "High volume but fragmented quality",
        folksmeal: "Centralized operations with consistent brand experience"
    }
];

const ComparisonCard = ({ feature, index }: { feature: ComparisonFeature; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d5d5d5]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-[#0a0b0c]/50 backdrop-blur-sm rounded-2xl border border-[#d5d5d5]/10 p-6 hover:border-[#d5d5d5]/20 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#d5d5d5]/10 to-[#d5d5d5]/5 flex items-center justify-center text-[#d5d5d5] border border-[#d5d5d5]/20">
                        {feature.icon}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#d5d5d5] mb-1">{feature.category}</h3>
                        <p className="text-sm text-[#d5d5d5]/60">{feature.description}</p>
                    </div>
                </div>

                {/* Comparison Grid */}
                <div className="space-y-4">
                    {/* Traditional */}
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-32 text-xs font-medium text-[#d5d5d5]/40 uppercase tracking-wider pt-1">
                            Traditional
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-[#d5d5d5]/50 leading-relaxed">{feature.traditional}</p>
                        </div>
                    </div>

                    {/* Aggregators */}
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-32 text-xs font-medium text-[#d5d5d5]/40 uppercase tracking-wider pt-1">
                            Aggregators
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-[#d5d5d5]/50 leading-relaxed">{feature.aggregators}</p>
                        </div>
                    </div>

                    {/* Folksmeal - Highlighted */}
                    <div className="flex items-center gap-3 pt-3 border-t border-[#d5d5d5]/10">
                        <div className="flex-shrink-0 w-32 text-xs font-bold text-[#d5d5d5] uppercase tracking-wider pt-1">
                            Folksmeal
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#d5d5d5]/10 to-transparent rounded-lg blur-sm" />
                                <p className="relative text-sm text-[#d5d5d5] font-medium leading-relaxed bg-[#d5d5d5]/5 px-3 py-2 rounded-lg border border-[#d5d5d5]/20">
                                    {feature.folksmeal}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export function Comparison() {
    return (
        <section className="py-24 bg-[#08090a] relative overflow-hidden">
            {/* Sophisticated background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#d5d5d5_1px,transparent_1px),linear-gradient(to_bottom,#d5d5d5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.015]" />
            </div>

            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d5d5d5]/[0.02] rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d5d5d5]/[0.02] rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d5d5d5]/5 border border-[#d5d5d5]/10 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#d5d5d5] animate-pulse" />
                        <span className="text-sm text-[#d5d5d5]/70 font-medium">Competitive Analysis</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-[#d5d5d5] mb-4 tracking-tighter">
                        The Folksmeal Advantage
                    </h2>

                    <p className="text-lg text-[#d5d5d5]/70 leading-relaxed">
                        Built from the ground up for corporate wellness. See how we deliver what traditional solutions can't.
                    </p>
                </motion.div>

                {/* Comparison Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                    {features.map((feature, index) => (
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
                        <div className="absolute inset-0 bg-gradient-to-r from-[#d5d5d5]/5 via-[#d5d5d5]/10 to-[#d5d5d5]/5 rounded-2xl blur-xl" />
                        <div className="relative bg-gradient-to-br from-[#0a0b0c] to-[#08090a] rounded-2xl border border-[#d5d5d5]/20 p-8 text-center">
                            <p className="text-[#d5d5d5]/80 text-lg leading-relaxed mb-4">
                                <span className="font-semibold text-[#d5d5d5]">Folksmeal isn't just another food service.</span> We're a complete corporate wellness platform that combines nutrition science, technology, and operational excellence to transform how companies feed their teams.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#d5d5d5]/60">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d5d5d5]/60" />
                                    <span className="leading-relaxed">ISO Certified Kitchen</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d5d5d5]/60" />
                                    <span className="leading-relaxed">Dietitian-Curated Menus</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d5d5d5]/60" />
                                    <span className="leading-relaxed">Real-Time Analytics</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d5d5d5]/60" />
                                    <span className="leading-relaxed">Zero Admin Hassle</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
