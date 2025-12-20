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
            className="py-24 bg-slate-50 relative overflow-x-clip overflow-y-visible"
        >

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
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight mb-4 text-center lg:text-left">
                            A Comprehensive Corporate <span className="text-primary">Meal Partner</span>
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center lg:text-left">
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
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:scale-[1.02] cursor-pointer border border-primary/20 hover:border-primary/20 transition-[scale] duration-300 ease-in-out"
                                >
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                        <Check className="h-3.5 w-3.5 text-primary" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
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
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >

                        {/* gradient border frame */}
                        <div className="relative rounded-2xl p-[1px">
                            {/* glass card */}
                            <div
                                className={[
                                    "relative h-auto md:aspect-square rounded-[2rem] overflow-hidden",
                                    "bg-primary/1 backdrop-blur-xl",
                                    "border border-primary/20",
                                    "p-6 flex flex-col gap-5",
                                ].join(" ")}
                            >
                                {/* subtle top highlight */}
                                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[260px] bg-linear-to-b from-primary/5 to-transparent rounded-full blur-2xl pointer-events-none" />

                                {/* HEADER */}
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <div className="text-xs tracking-[0.18em] uppercase text-slate-400 font-semibold">
                                            Corporate Client Portal
                                        </div>
                                        <div className="text-base font-bold text-slate-900 leading-tight">
                                            Lunch Program • Noida Campus
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            Sector 62 • Delivery window 12:30–1:00 PM
                                        </div>
                                    </div>

                                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="text-[11px] font-bold text-primary">SLA On Track</span>
                                    </span>
                                </div>

                                {/* KPI ROW */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div className="rounded-2xl bg-slate-50/50 border border-primary/20 hover:border-primary/20 transition-colors duration-300 p-3">
                                        <div className="text-[11px] text-slate-500 font-medium">Headcount confirmed</div>
                                        <div className="mt-1 text-xl font-bold text-slate-900">420</div>
                                        <div className="mt-2 text-[10px] text-slate-400">Auto-locked at 10:45 AM</div>
                                    </div>

                                    <div className="rounded-2xl bg-slate-50/50 border border-primary/20 hover:border-primary/20 transition-colors duration-300 p-3">
                                        <div className="text-[11px] text-slate-500 font-medium">On-time delivery</div>
                                        <div className="mt-1 text-xl font-bold text-slate-900">99.8%</div>
                                        <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                                            <div className="h-full w-[99%] rounded-full bg-primary/80" />
                                        </div>
                                    </div>

                                    <div className="rounded-2xl bg-slate-50/50 border border-primary/20 hover:border-primary/20 transition-colors duration-300 p-3">
                                        <div className="text-[11px] text-slate-500 font-medium">Avg. rating</div>
                                        <div className="mt-1 text-xl font-bold text-slate-900">4.7</div>
                                        <div className="mt-2 text-[10px] text-slate-400">Last 30 days feedback</div>
                                    </div>
                                </div>

                                {/* MAIN GRID */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                                    {/* DIETARY + COMPLIANCE */}
                                    <div className="rounded-2xl bg-slate-50/30 border border-primary/20 hover:border-primary/20 transition-colors duration-300 p-3 flex flex-col">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-xs font-bold text-slate-700">Preferences & compliance</div>
                                            <div className="text-[10px] text-primary font-bold">Live</div>
                                        </div>

                                        {/* Dietary split */}
                                        <div className="rounded-xl bg-white border border-primary/20 p-3 shadow-sm">
                                            <div className="flex items-center justify-between">
                                                <div className="text-[11px] text-slate-500">Dietary mix</div>
                                                <div className="text-[11px] text-slate-700 font-bold">Today</div>
                                            </div>

                                            {/* stacked bar */}
                                            <div className="mt-2 h-2.5 rounded-full bg-slate-100 overflow-hidden flex">
                                                <div className="h-full w-[62%] bg-primary/75" />
                                                <div className="h-full w-[18%] bg-blue-500/70" />
                                                <div className="h-full w-[12%] bg-purple-500/60" />
                                                <div className="h-full w-[8%] bg-slate-300" />
                                            </div>

                                            <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] text-slate-500">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />
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
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
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
                                                    className="flex items-center justify-between rounded-xl bg-white border border-primary/20 px-2.5 py-2 shadow-sm"
                                                >
                                                    <span className="text-[11px] text-slate-700 font-medium">{x.label}</span>
                                                    <span className="text-[10px] text-primary bg-primary/10 border border-primary/15 px-2 py-0.5 rounded-full font-bold">
                                                        Verified
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-2 flex items-center justify-between text-[10px] text-slate-400">
                                            <span>Central kitchen + last-mile handled</span>
                                            <span className="text-primary font-bold">View audit</span>
                                        </div>
                                    </div>

                                    {/* DELIVERY TIMELINE + MENU */}
                                    <div className="rounded-2xl bg-slate-50/30 border border-primary/20 hover:border-primary/20 transition-colors duration-300 p-3 flex flex-col">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-xs font-bold text-slate-700">Today’s run</div>
                                            <div className="text-[10px] text-slate-500">Noida Sector 62</div>
                                        </div>

                                        {/* timeline */}
                                        <div className="rounded-xl bg-white border border-primary/20 p-3 shadow-sm">
                                            <div className="text-[11px] text-slate-500 mb-2 font-medium">Delivery timeline</div>

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
                                                                    s.active ? "bg-primary" : "bg-slate-200",
                                                                ].join(" ")}
                                                            />
                                                            <span className="text-[10px] text-slate-500 font-bold">{s.t}</span>
                                                        </div>

                                                        <div className="flex-1">
                                                            <div className="text-[11px] text-slate-700 font-medium">{s.label}</div>
                                                            {i !== 3 && (
                                                                <div className="mt-1 h-[1px] w-full bg-linear-to-r from-slate-100 to-transparent" />
                                                            )}
                                                        </div>

                                                        <span className="text-[10px] text-primary font-bold">OK</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                                                <span>Serving counters: 6</span>
                                                <span className="text-blue-500 font-bold">Peak 12:40–1:10</span>
                                            </div>
                                        </div>

                                        {/* menu preview */}
                                        <div className="mt-3">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="text-xs font-bold text-slate-700">Next week menu</div>
                                                <div className="text-[10px] text-primary font-bold">Personalized</div>
                                            </div>

                                            <div className="space-y-2">
                                                {solutionMenu.slice(0, 4).map((item) => (
                                                    <div
                                                        key={item.day}
                                                        className="rounded-xl bg-white border border-primary/20 p-2.5 shadow-sm"
                                                    >
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="text-[10px] tracking-[0.14em] uppercase text-slate-400 font-bold">
                                                                {item.day}
                                                            </span>
                                                            <span className="text-[12px] text-slate-900 font-bold truncate">
                                                                {item.meal}
                                                            </span>
                                                        </div>
                                                        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/10 font-bold">
                                                            {item.tag}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-2 flex items-center justify-between text-[10px] text-slate-400">
                                            <span>Preference-based substitutions enabled</span>
                                            <span className="text-primary font-bold">Edit menu</span>
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
