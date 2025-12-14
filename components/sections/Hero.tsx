"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#08090a] pt-20">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#08090a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-[#d5d5d5]">
                        Redefining Corporate Meals for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#d5d5d5] to-[#d5d5d5]/40">
                            India&apos;s Workforce
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[#d5d5d5]/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Healthy, hygienic, and dietitian-curated meals delivered fresh daily. We help organizations improve employee productivity and wellness.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#contact">
                            <Button size="lg" className="h-12 px-8 text-lg bg-[#d5d5d5] text-[#08090a] hover:bg-white font-medium tracking-tight cursor-pointer">
                                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
