"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { navLinks } from "@/constants/navbar";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-300 py-4 border-b border-transparent",
                isScrolled
                    ? "bg-white/70 backdrop-blur-md border-black/5"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <div className="relative h-10 w-auto">
                        <Image
                            src="/logo-large.png"
                            alt="Folksmeal Logo"
                            width={150}
                            height={40}
                            className="h-full w-auto object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/#contact">
                        <Button>
                            Get Pricing
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground cursor-pointer p-2 hover:bg-hover-bg rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <MdClose className="text-primary" /> : <MdMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-black/5 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-foreground/70 hover:text-primary py-2 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/#contact" className="mt-2">
                                <Button className="w-full">Get Pricing</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
