"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { solutionFeatures, solutionMenu } from "@/constants/solution";

export function Solution() {
    return (
        <section id="solution" className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradients - Cool tones for 'Solution' */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-[#d5d5d5] tracking-tighter leading-tight">
                            A Comprehensive Corporate <br />
                            <span className="text-emerald-500">Meal Partner</span>
                        </h2>
                        <p className="text-lg text-[#d5d5d5]/70 leading-relaxed">
                            Folksmeal is not just a caterer. We are an end-to-end brand that combines food production, technology, and analytics to bring consistency and personalization to your office.
                        </p>

                        <div className="space-y-4">
                            {solutionFeatures.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#d5d5d5]/5 transition-colors hover:scale-105 cursor-pointer transition-transform ease-in-out duration-500"
                                >
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                                    </div>
                                    <span className="text-[#d5d5d5]/90 font-medium h-6">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="pt-4"
                        >
                            <Link href="#contact" className="rounded-xl">
                                <Button className="group py-5 border-b-4 border-r-4 border-transparent hover:border-b-4 hover:border-r-4 hover:border-emerald-500/80 transition-all duration-300 ease-in-out">
                                    Request a Quote <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-4 transition-all duration-300 ease-in-out" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
                        <div className="relative aspect-square rounded-3xl bg-[#d5d5d5]/5 border border-[#d5d5d5]/10 backdrop-blur-sm p-6 flex flex-col gap-4 overflow-hidden group">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                            {/* Dashboard Mockup Header */}
                            <div className="flex items-center justify-between border-b border-[#d5d5d5]/10 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-[#d5d5d5]">Live Kitchen Status</div>
                                        <div className="text-xs text-[#d5d5d5]/50">Central Kitchen • Bangalore</div>
                                    </div>
                                </div>
                                <div className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-500 text-xs font-medium">
                                    Operational
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 rounded-xl bg-background/40 border border-[#d5d5d5]/5">
                                    <div className="text-xs text-[#d5d5d5]/50 mb-1">Meals Prepared</div>
                                    <div className="text-xl font-bold text-[#d5d5d5]">1,240</div>
                                    <div className="w-full h-1 bg-[#d5d5d5]/10 rounded-full mt-2">
                                        <div className="w-[80%] h-full bg-emerald-500 rounded-full" />
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-background/40 border border-[#d5d5d5]/5">
                                    <div className="text-xs text-[#d5d5d5]/50 mb-1">On-Time Delivery</div>
                                    <div className="text-xl font-bold text-[#d5d5d5]">99.8%</div>
                                    <div className="w-full h-1 bg-[#d5d5d5]/10 rounded-full mt-2">
                                        <div className="w-[99%] h-full bg-blue-500 rounded-full" />
                                    </div>
                                </div>
                            </div>

                            {/* Live Delivery Map & Menu Grid */}
                            <div className="grid grid-cols-2 gap-3 flex-1">
                                {/* Live Map Mockup */}
                                <div className="bg-background/40 rounded-xl p-3 border border-[#d5d5d5]/5 flex flex-col">
                                    <div className="text-xs font-medium text-[#d5d5d5]/70 mb-2 flex items-center justify-between">
                                        <span>Live Fleet</span>
                                        <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">Active</span>
                                    </div>
                                    <div className="flex-1 rounded-lg bg-[#d5d5d5]/5 relative overflow-hidden">
                                        {/* Map Grid Lines */}
                                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-[1px] opacity-10">
                                            {Array.from({ length: 16 }).map((_, i) => (
                                                <div key={i} className="bg-[#d5d5d5]" />
                                            ))}
                                        </div>
                                        {/* Moving Dots */}
                                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full" />

                                        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-emerald-500 rounded-full animate-ping delay-300" />
                                        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-emerald-500 rounded-full delay-300" />

                                        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-700" />
                                        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full delay-700" />
                                    </div>
                                </div>

                                {/* Menu Calendar Mockup */}
                                <div className="bg-background/40 rounded-xl p-3 border border-[#d5d5d5]/5 flex flex-col">
                                    <div className="text-xs font-medium text-[#d5d5d5]/70 mb-2">Next Week&apos;s Menu</div>
                                    <div className="space-y-2">
                                        {solutionMenu.map((item) => (
                                            <div key={item.day} className="bg-[#d5d5d5]/5 rounded-lg p-2">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-[10px] text-[#d5d5d5]/40 font-bold">{item.day}</span>
                                                    <span className="text-[8px] bg-[#d5d5d5]/10 text-[#d5d5d5]/60 px-1 rounded">{item.tag}</span>
                                                </div>
                                                <div className="text-[10px] text-[#d5d5d5]/90 font-medium truncate">{item.meal}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
