"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { solutionFeatures, solutionMenu } from "@/constants/solution";

export function Solution() {
    return (
        <section
            id="solution"
            className="py-24 bg-background relative overflow-x-clip overflow-y-visible"
        >
            {/* Ambient background blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT (STICKY) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="self-start lg:sticky lg:top-24"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tighter leading-tight mb-4">
                            A Comprehensive Corporate <span className="text-emerald-500">Meal Partner</span>
                        </h2>

                        <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                            Folksmeal is a comprehensive corporate food & wellness ecosystem that blends nutrition science, technology, and operational discipline to deliver consistent, personalized meal programs across large teams.
                        </p>

                        <div className="space-y-4 mb-8">
                            {solutionFeatures.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-foreground/5 transition-colors transition-transform hover:scale-[1.02] cursor-pointer ease-in-out duration-500"
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

                    {/* RIGHT - CORPORATE CLIENT PORTAL (CONNECTED TO STORY) */}
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
                        <div className="relative rounded-[2rem] p-[1px] bg-gradient-to-br from-foreground/12 via-foreground/6 to-transparent">
                            {/* glass card */}
                            <div
                                className={[
                                    "relative h-auto md:aspect-square rounded-[2rem] overflow-hidden",
                                    "bg-[#0b0b0b]/35 backdrop-blur-xl",
                                    "border border-foreground/10",
                                    "shadow-[0_0_24px_6px_rgba(255,255,255,0.06),0_0_90px_28px_rgba(16,185,129,0.08)]",
                                    "p-6 flex flex-col gap-5",
                                ].join(" ")}
                            >
                                {/* subtle top highlight */}
                                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[260px] bg-gradient-to-b from-foreground/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                                {/* HEADER */}
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <div className="text-xs tracking-[0.18em] uppercase text-foreground/45">
                                            Corporate Client Portal
                                        </div>
                                        <div className="text-base font-semibold text-foreground leading-tight">
                                            Lunch Program • Noida Campus
                                        </div>
                                        <div className="text-xs text-foreground/50">
                                            Sector 62 • Delivery window 12:30–1:00 PM
                                        </div>
                                    </div>

                                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        <span className="text-[11px] font-medium text-emerald-400">SLA On Track</span>
                                    </span>
                                </div>

                                {/* KPI ROW */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div className="rounded-2xl bg-foreground/[0.04] border border-foreground/10 p-3">
                                        <div className="text-[11px] text-foreground/55">Headcount confirmed</div>
                                        <div className="mt-1 text-xl font-bold text-foreground">420</div>
                                        <div className="mt-2 text-[10px] text-foreground/50">Auto-locked at 10:45 AM</div>
                                    </div>

                                    <div className="rounded-2xl bg-foreground/[0.04] border border-foreground/10 p-3">
                                        <div className="text-[11px] text-foreground/55">On-time delivery</div>
                                        <div className="mt-1 text-xl font-bold text-foreground">99.8%</div>
                                        <div className="mt-2 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                                            <div className="h-full w-[99%] rounded-full bg-blue-500/80" />
                                        </div>
                                    </div>

                                    <div className="rounded-2xl bg-foreground/[0.04] border border-foreground/10 p-3">
                                        <div className="text-[11px] text-foreground/55">Avg. rating</div>
                                        <div className="mt-1 text-xl font-bold text-foreground">4.7</div>
                                        <div className="mt-2 text-[10px] text-foreground/50">Last 30 days feedback</div>
                                    </div>
                                </div>

                                {/* MAIN GRID */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                                    {/* DIETARY + COMPLIANCE */}
                                    <div className="rounded-2xl bg-foreground/[0.035] border border-foreground/10 p-3 flex flex-col">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-xs font-medium text-foreground/75">Preferences & compliance</div>
                                            <div className="text-[10px] text-foreground/55">Live</div>
                                        </div>

                                        {/* Dietary split */}
                                        <div className="rounded-xl bg-foreground/[0.03] border border-foreground/10 p-3">
                                            <div className="flex items-center justify-between">
                                                <div className="text-[11px] text-foreground/55">Dietary mix</div>
                                                <div className="text-[11px] text-foreground/75 font-medium">Today</div>
                                            </div>

                                            {/* stacked bar */}
                                            <div className="mt-2 h-2.5 rounded-full bg-foreground/10 overflow-hidden flex">
                                                <div className="h-full w-[62%] bg-emerald-500/75" />
                                                <div className="h-full w-[18%] bg-blue-500/70" />
                                                <div className="h-full w-[12%] bg-purple-500/60" />
                                                <div className="h-full w-[8%] bg-foreground/25" />
                                            </div>

                                            <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] text-foreground/55">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                                                    Veg (62%)
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
                                                    Non-veg (18%)
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/80" />
                                                    Jain (12%)
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
                                                    Allergy (8%)
                                                </div>
                                            </div>
                                        </div>

                                        {/* Compliance checks */}
                                        <div className="mt-3 space-y-2">
                                            {[
                                                { label: "Temperature logs recorded", ok: true },
                                                { label: "Allergen labels attached", ok: true },
                                                { label: "Hygiene checklist completed", ok: true },
                                            ].map((x) => (
                                                <div
                                                    key={x.label}
                                                    className="flex items-center justify-between rounded-xl bg-foreground/[0.03] border border-foreground/10 px-2.5 py-2"
                                                >
                                                    <span className="text-[11px] text-foreground/75">{x.label}</span>
                                                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/15 px-2 py-0.5 rounded-full">
                                                        Verified
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-2 flex items-center justify-between text-[10px] text-foreground/45">
                                            <span>Central kitchen + last-mile handled</span>
                                            <span className="text-emerald-400/80">View audit</span>
                                        </div>
                                    </div>

                                    {/* DELIVERY TIMELINE + MENU */}
                                    <div className="rounded-2xl bg-foreground/[0.035] border border-foreground/10 p-3 flex flex-col">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-xs font-medium text-foreground/75">Today’s run</div>
                                            <div className="text-[10px] text-foreground/55">Noida Sector 62</div>
                                        </div>

                                        {/* timeline */}
                                        <div className="rounded-xl bg-foreground/[0.03] border border-foreground/10 p-3">
                                            <div className="text-[11px] text-foreground/55 mb-2">Delivery timeline</div>

                                            <div className="space-y-2">
                                                {[
                                                    { t: "10:30", label: "Prep started", active: true },
                                                    { t: "11:45", label: "Packing + labeling", active: true },
                                                    { t: "12:05", label: "Dispatch to campus", active: true },
                                                    { t: "12:28", label: "Arrived (Dock A)", active: true },
                                                ].map((s, i) => (
                                                    <div key={s.t} className="flex items-center gap-3">
                                                        <div className="flex items-center gap-2 w-[72px] shrink-0">
                                                            <div
                                                                className={[
                                                                    "w-2 h-2 rounded-full",
                                                                    s.active ? "bg-emerald-500" : "bg-foreground/30",
                                                                ].join(" ")}
                                                            />
                                                            <span className="text-[10px] text-foreground/60">{s.t}</span>
                                                        </div>

                                                        <div className="flex-1">
                                                            <div className="text-[11px] text-foreground/80">{s.label}</div>
                                                            {i !== 3 && (
                                                                <div className="mt-1 h-[1px] w-full bg-gradient-to-r from-foreground/25 to-transparent" />
                                                            )}
                                                        </div>

                                                        <span className="text-[10px] text-foreground/50">OK</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-3 flex items-center justify-between text-[10px] text-foreground/45">
                                                <span>Serving counters: 6</span>
                                                <span className="text-blue-400/90">Peak 12:40–1:10</span>
                                            </div>
                                        </div>

                                        {/* menu preview */}
                                        <div className="mt-3">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="text-xs font-medium text-foreground/75">Next week menu</div>
                                                <div className="text-[10px] text-foreground/55">Personalized</div>
                                            </div>

                                            <div className="space-y-2">
                                                {solutionMenu.slice(0, 4).map((item) => (
                                                    <div
                                                        key={item.day}
                                                        className="rounded-xl bg-foreground/[0.03] border border-foreground/10 p-2.5"
                                                    >
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="text-[10px] tracking-[0.14em] uppercase text-foreground/45 font-semibold">
                                                                {item.day}
                                                            </span>
                                                            <span className="text-[12px] text-foreground/90 font-medium truncate">
                                                                {item.meal}
                                                            </span>
                                                        </div>
                                                        <span className="text-[10px] bg-foreground/10 text-foreground/70 px-2 py-0.5 rounded-full border border-foreground/10">
                                                            {item.tag}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-2 flex items-center justify-between text-[10px] text-foreground/45">
                                            <span>Preference-based substitutions enabled</span>
                                            <span className="text-emerald-400/80">Edit menu</span>
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
