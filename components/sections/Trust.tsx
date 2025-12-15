"use client";

import { trustStats } from "@/constants/trust";

export function Trust() {
    return (
        <section className="py-12 bg-background border-y border-[#d5d5d5]/10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {trustStats.map((stat) => (
                        <div key={stat.label}>
                            <div className="text-3xl md:text-4xl font-bold text-[#d5d5d5] mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[#d5d5d5]/50 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
