"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
            </div>

            <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px] pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-left"
                    >
                        <h1 className="text-5xl md:text-[5.25rem] font-bold tracking-tighter mb-8 text-slate-900 leading-[1.1]">
                            Redefining Corporate Meals for <span className="text-primary">India's Workforce</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-normal">
                            Healthy, hygienic, and dietitian-curated meals delivered fresh daily. We help organizations improve employee productivity and wellness.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <Link href="#contact">
                                <Button className="group" size="lg">
                                    Request a Quote <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-4 transition-all duration-300 ease-in-out" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px] w-full hidden lg:block"
                    >
                        <div className="relative h-full w-full flex items-center justify-center drop-shadow-[0_10px_30px_rgba(76,175,80,0.1)] rotate-10 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/hero-bowl.png"
                                alt="Meal Bowl"
                                fill
                                className="object-contain cursor-pointer"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
