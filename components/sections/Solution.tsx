"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { solutionFeatures, solutionMenu } from "@/constants/solution";

export function Solution() {
    return (
        <section id="solution" className="py-24 bg-background relative overflow-hidden">
            {/* Ambient background blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT */}
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
                            Folksmeal is not just a caterer. We are an end-to-end brand that combines food production, technology,
                            and analytics to bring consistency and personalization to your office.
                        </p>

                        <div className="space-y-4">
                            {solutionFeatures.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#d5d5d5]/5 transition-colors transition-transform hover:scale-[1.02] cursor-pointer ease-in-out duration-500"
                                >
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                                    </div>
                                    <span className="text-foreground/90 font-medium">{item}</span>
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
                                <Button className="group">
                                    Request a Quote{" "}
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-4 transition-all duration-300 ease-in-out" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT - PREMIUM DASHBOARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        {/* outer soft glow */}
                        <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 rounded-[2.25rem] blur-2xl" />

                        {/* gradient border frame */}
                        <div className="relative rounded-[2rem] p-[1px] bg-gradient-to-br from-[#d5d5d5]/12 via-[#d5d5d5]/6 to-transparent">
                            {/* glass card */}
                            <div
                                className={[
                                    "relative aspect-square rounded-[2rem] overflow-hidden",
                                    "bg-[#0b0b0b]/35 backdrop-blur-xl",
                                    "border border-[#d5d5d5]/10",
                                    "shadow-[0_0_24px_6px_rgba(255,255,255,0.06),0_0_90px_28px_rgba(16,185,129,0.08)]",
                                    "p-6 flex flex-col gap-5",
                                ].join(" ")}
                            >
                                {/* subtle top highlight */}
                                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[260px] bg-gradient-to-b from-[#d5d5d5]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                                {/* HEADER */}
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <div className="text-xs tracking-[0.18em] uppercase text-[#d5d5d5]/45">
                                            Folksmeal Ops
                                        </div>
                                        <div className="text-base font-semibold text-[#d5d5d5] leading-tight">
                                            Central Kitchen Dashboard
                                        </div>
                                        <div className="text-xs text-[#d5d5d5]/50">Bangalore • Live feed</div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                            <span className="text-[11px] font-medium text-emerald-400">Operational</span>
                                        </span>
                                    </div>
                                </div>

                                {/* KPI ROW */}
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="rounded-2xl bg-[#d5d5d5]/[0.04] border border-[#d5d5d5]/10 p-3">
                                        <div className="text-[11px] text-[#d5d5d5]/55">Meals prepared</div>
                                        <div className="mt-1 text-xl font-bold text-[#d5d5d5]">1,240</div>
                                        <div className="mt-2 h-1.5 rounded-full bg-[#d5d5d5]/10 overflow-hidden">
                                            <div className="h-full w-[82%] rounded-full bg-emerald-500/80" />
                                        </div>
                                    </div>

                                    <div className="rounded-2xl bg-[#d5d5d5]/[0.04] border border-[#d5d5d5]/10 p-3">
                                        <div className="text-[11px] text-[#d5d5d5]/55">On-time</div>
                                        <div className="mt-1 text-xl font-bold text-[#d5d5d5]">99.8%</div>
                                        <div className="mt-2 h-1.5 rounded-full bg-[#d5d5d5]/10 overflow-hidden">
                                            <div className="h-full w-[99%] rounded-full bg-blue-500/80" />
                                        </div>
                                    </div>

                                    <div className="rounded-2xl bg-[#d5d5d5]/[0.04] border border-[#d5d5d5]/10 p-3">
                                        <div className="text-[11px] text-[#d5d5d5]/55">SLA risk</div>
                                        <div className="mt-1 text-xl font-bold text-[#d5d5d5]">Low</div>
                                        <div className="mt-2 flex items-center gap-2">
                                            <div className="h-1.5 flex-1 rounded-full bg-[#d5d5d5]/10 overflow-hidden">
                                                <div className="h-full w-[18%] rounded-full bg-emerald-500/70" />
                                            </div>
                                            <div className="text-[10px] text-[#d5d5d5]/50">18%</div>
                                        </div>
                                    </div>
                                </div>

                                {/* MAIN GRID */}
                                <div className="grid grid-cols-2 gap-3 flex-1">
                                    {/* DELIVERY / ROUTE PANEL */}
                                    <div className="rounded-2xl bg-[#d5d5d5]/[0.035] border border-[#d5d5d5]/10 p-3 flex flex-col">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-xs font-medium text-[#d5d5d5]/75">Fleet & routes</div>
                                            <div className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/15 px-2 py-0.5 rounded-full">
                                                Active • 7
                                            </div>
                                        </div>

                                        {/* route canvas */}
                                        <div className="relative flex-1 rounded-xl bg-[#d5d5d5]/[0.03] border border-[#d5d5d5]/10 overflow-hidden">
                                            {/* subtle grid */}
                                            <div className="absolute inset-0 opacity-[0.08]">
                                                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(213,213,213,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(213,213,213,0.5)_1px,transparent_1px)] bg-[size:24px_24px]" />
                                            </div>

                                            {/* route lines */}
                                            <div className="absolute inset-0">
                                                <div className="absolute left-[18%] top-[22%] w-[58%] h-[1px] bg-[#d5d5d5]/20 rotate-[18deg]" />
                                                <div className="absolute left-[30%] top-[52%] w-[44%] h-[1px] bg-[#d5d5d5]/20 rotate-[-14deg]" />
                                                <div className="absolute left-[22%] top-[30%] w-[1px] h-[46%] bg-[#d5d5d5]/15" />
                                            </div>

                                            {/* nodes */}
                                            <div className="absolute left-[18%] top-[26%] w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_14px_4px_rgba(59,130,246,0.18)]" />
                                            <div className="absolute left-[62%] top-[36%] w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_14px_4px_rgba(16,185,129,0.18)]" />
                                            <div className="absolute left-[55%] top-[68%] w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_14px_4px_rgba(168,85,247,0.14)]" />

                                            {/* label */}
                                            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                                                <div className="text-[10px] text-[#d5d5d5]/55">Avg ETA</div>
                                                <div className="text-[10px] text-[#d5d5d5]/75 font-medium">18–24 min</div>
                                            </div>
                                        </div>

                                        {/* mini list */}
                                        <div className="mt-3 space-y-2">
                                            <div className="flex items-center justify-between rounded-xl bg-[#d5d5d5]/[0.03] border border-[#d5d5d5]/10 px-2.5 py-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                    <span className="text-[11px] text-[#d5d5d5]/80">Koramangala</span>
                                                </div>
                                                <span className="text-[10px] text-[#d5d5d5]/55">ETA 12m</span>
                                            </div>

                                            <div className="flex items-center justify-between rounded-xl bg-[#d5d5d5]/[0.03] border border-[#d5d5d5]/10 px-2.5 py-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                    <span className="text-[11px] text-[#d5d5d5]/80">Whitefield</span>
                                                </div>
                                                <span className="text-[10px] text-[#d5d5d5]/55">ETA 21m</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* MENU / ANALYTICS PANEL */}
                                    <div className="rounded-2xl bg-[#d5d5d5]/[0.035] border border-[#d5d5d5]/10 p-3 flex flex-col">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-xs font-medium text-[#d5d5d5]/75">Next week menu</div>
                                            <div className="text-[10px] text-[#d5d5d5]/55">Preferences applied</div>
                                        </div>

                                        {/* mini demand chart */}
                                        <div className="rounded-xl bg-[#d5d5d5]/[0.03] border border-[#d5d5d5]/10 p-3">
                                            <div className="flex items-center justify-between">
                                                <div className="text-[11px] text-[#d5d5d5]/55">Predicted demand</div>
                                                <div className="text-[11px] text-[#d5d5d5]/75 font-medium">+6.2%</div>
                                            </div>
                                            <div className="mt-2 flex items-end gap-1.5 h-12">
                                                {[
                                                    "h-[40%]",
                                                    "h-[55%]",
                                                    "h-[52%]",
                                                    "h-[68%]",
                                                    "h-[60%]",
                                                    "h-[78%]",
                                                    "h-[72%]",
                                                ].map((h, i) => (
                                                    <div
                                                        key={i}
                                                        className={[
                                                            "flex-1 rounded-md",
                                                            "bg-[#d5d5d5]/10",
                                                            "overflow-hidden",
                                                        ].join(" ")}
                                                    >
                                                        <div className={[h, "w-full rounded-md bg-emerald-500/70"].join(" ")} />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-2 flex items-center justify-between text-[10px] text-[#d5d5d5]/45">
                                                <span>Mon</span>
                                                <span>Wed</span>
                                                <span>Fri</span>
                                                <span>Sun</span>
                                            </div>
                                        </div>

                                        {/* menu list */}
                                        <div className="mt-3 space-y-2 flex-1 overflow-hidden">
                                            {solutionMenu.slice(0, 5).map((item) => (
                                                <div
                                                    key={item.day}
                                                    className="rounded-xl bg-[#d5d5d5]/[0.03] border border-[#d5d5d5]/10 p-2.5"
                                                >
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-[10px] tracking-[0.14em] uppercase text-[#d5d5d5]/45 font-semibold">
                                                            {item.day}
                                                        </span>
                                                        <span className="text-[10px] bg-[#d5d5d5]/10 text-[#d5d5d5]/70 px-2 py-0.5 rounded-full border border-[#d5d5d5]/10">
                                                            {item.tag}
                                                        </span>
                                                    </div>
                                                    <div className="text-[12px] text-[#d5d5d5]/90 font-medium truncate">
                                                        {item.meal}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* footer micro copy */}
                                        <div className="mt-2 flex items-center justify-between text-[10px] text-[#d5d5d5]/45">
                                            <span>Auto substitutions enabled</span>
                                            <span className="text-emerald-400/80">View details</span>
                                        </div>
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
