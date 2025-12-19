"use client";

import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

type HeroImg = { src: string; alt: string };

function RightEdgeOrbit({ images }: { images: HeroImg[] }) {
    const reduceMotion = useReducedMotion();
    const n = Math.max(1, images.length);

    const STAGE = 550;
    const RADIUS = 550;
    const IMG = 550;
    const HOLD_S = 3.5;
    const MOVE_S = 1.3;

    const cx = STAGE;
    const cy = (STAGE / 2);

    const windowLeft = cx - RADIUS - IMG / 2;
    const windowTop = cy - IMG / 2;

    const { rotateKeyframes, times, duration } = useMemo(() => {
        const step = 360 / n;
        const kf: number[] = [0];
        const t: number[] = [0];

        const total = n * (HOLD_S + MOVE_S);
        let acc = 0;

        for (let i = 0; i < n; i++) {
            acc += HOLD_S;
            kf.push(i * step);
            t.push(acc / total);

            acc += MOVE_S;
            kf.push((i + 1) * step);
            t.push(acc / total);
        }

        kf[kf.length - 1] = 360;
        t[t.length - 1] = 1;

        return {
            rotateKeyframes: kf,
            times: t,
            duration: total,
        };
    }, [n, HOLD_S, MOVE_S]);

    return (
        <div
            className="relative pointer-events-none select-none"
            style={{ width: STAGE, height: STAGE }}
            aria-hidden="true"
        >
            <motion.div
                className="absolute"
                style={{
                    width: STAGE,
                    height: STAGE,
                    left: -windowLeft,
                    top: -windowTop,
                    transformOrigin: `${cx}px ${cy}px`,
                }}
                animate={
                    reduceMotion
                        ? { rotate: 0 }
                        : { rotate: rotateKeyframes }
                }
                transition={
                    reduceMotion
                        ? { duration: 0 }
                        : {
                            duration,
                            times,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }
                }
            >
                {images.map((img, i) => {
                    const angleDeg = (i * 360) / n;

                    return (
                        <div
                            key={`${img.src}-${i}`}
                            className="absolute"
                            style={{
                                left: cx,
                                top: cy,
                                width: IMG,
                                height: IMG,
                                transform: `translate(-50%, -50%) rotate(${angleDeg}deg) translateX(-${RADIUS}px)`,
                            }}
                        >
                            <div
                                className="relative w-full h-full rounded-full overflow-hidden"
                                style={{ transform: `rotate(${-angleDeg}deg)` }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    sizes={`${IMG}px`}
                                    priority={i === 0}
                                />
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}

export function Hero() {
    const heroImages = useMemo<HeroImg[]>(
        () => [
            { src: "/hero-bowl.png", alt: "Corporate meal bowl" },
            { src: "/hero-bowl.png", alt: "Corporate meal bowl" },
            { src: "/hero-bowl.png", alt: "Corporate meal bowl" },
            { src: "/hero-bowl.png", alt: "Corporate meal bowl" },
        ],
        []
    );

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
            </div>

            <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px] pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-left"
                    >
                        <h1 className="text-5xl md:text-[5.25rem] font-bold tracking-tighter mb-8 text-slate-900 leading-[1.1]">
                            Redefining Corporate Meals for{" "}
                            <span className="text-primary">India&apos;s Workforce</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-normal">
                            Healthy, hygienic, and dietitian-curated meals delivered fresh daily. We help organizations
                            improve employee productivity and wellness.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <Link href="#contact">
                                <Button className="group" size="lg">
                                    Request a Quote{" "}
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-4 transition-all duration-300 ease-in-out" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        className="relative w-full hidden lg:flex items-center justify-end"
                    >
                        {/* Absolute feel: axis is on the right edge of this stage */}
                        <div className="relative h-[520px] w-full">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2">
                                <RightEdgeOrbit images={heroImages} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
