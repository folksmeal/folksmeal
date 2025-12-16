"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { footerContactInfo, footerQuickLinks } from "@/constants/footer";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-[#d5d5d5]/10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/bg.svg"
                    alt="Footer Background"
                    fill
                    className="object-cover opacity-50"
                />
            </div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Main Footer Content */}
                <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-6">
                            <Image
                                src="/logo-large.png"
                                alt="Folksmeal Logo"
                                width={150}
                                height={40}
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <p className="text-[#d5d5d5]/70 leading-relaxed mb-6 max-w-md">
                            Transforming corporate wellness through healthy, dietitian-curated meals.
                            We help organizations improve employee productivity and well-being with zero admin hassle.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-sm font-bold text-[#d5d5d5] uppercase tracking-wider mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {footerQuickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-[#d5d5d5]/60 hover:text-[#d5d5d5] transition-colors duration-200 text-sm inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-[#d5d5d5] transition-all duration-200 mr-0 group-hover:mr-2" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-sm font-bold text-[#d5d5d5] uppercase tracking-wider mb-6">Contact</h4>
                        <ul className="space-y-4">
                            {footerContactInfo.map((info, index) => (
                                <li key={index} className="flex items-center gap-3 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#d5d5d5]/5 border border-[#d5d5d5]/10 flex items-center justify-center text-[#d5d5d5]/70 group-hover:bg-[#d5d5d5]/10 group-hover:border-[#d5d5d5]/20 transition-all duration-300">
                                        {info.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-[#d5d5d5]/40 uppercase tracking-wider mb-1">{info.label}</p>
                                        {info.href ? (
                                            <Link
                                                href={info.href}
                                                className="text-sm text-[#d5d5d5]/70 hover:text-[#d5d5d5] transition-colors duration-200"
                                            >
                                                {info.value}
                                            </Link>
                                        ) : (
                                            <p className="text-sm text-[#d5d5d5]/70 leading-relaxed">{info.value}</p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="border-t border-[#d5d5d5]/10 py-4"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-[#d5d5d5]/50">
                            © {currentYear} Folksmeal. All rights reserved.
                        </p>

                        <div className="flex gap-6 text-sm text-[#d5d5d5]/50">
                            <Link href="/privacy-policy" className="hover:text-[#d5d5d5] transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-[#d5d5d5] transition-colors duration-200">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
