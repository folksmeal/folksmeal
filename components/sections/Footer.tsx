"use client";

import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { footerContactInfo, footerQuickLinks } from "@/constants/footer";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 border-t border-primary/20 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Main Footer Content */}
                <div className="pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <Link href="/">
                            <Image
                                src="/logo-large.png"
                                alt="Folksmeal Logo"
                                width={150}
                                height={40}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-slate-600 leading-relaxed max-w-md text-lg mt-2">
                            Transforming corporate wellness through healthy, dietitian-curated meals.
                            We help organizations improve employee productivity and well-being with zero admin hassle.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <Link
                                href="https://linkedin.com/company/folksmeal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary hover:bg-hover-bg hover:border-primary hover:shadow-md transition-all duration-300"
                            >
                                <FaLinkedinIn className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 text-center md:text-left">Quick Links</h4>
                        <ul className="space-y-4">
                            {footerQuickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-500 hover:text-primary transition-colors duration-200 text-base font-medium inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-0.5 bg-primary transition-all duration-200 mr-0 group-hover:mr-2" />
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
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 text-center md:text-left">Contact</h4>
                        <ul className="space-y-6">
                            {footerContactInfo.map((info, index) => (
                                <li key={index} className="flex items-start gap-4 group">
                                    <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-primary/20 flex items-center justify-center text-primary group-hover:border-primary group-hover:shadow-sm transition-all duration-300">
                                        {info.icon}
                                    </div>
                                    <div className="flex-1 pt-0.5">
                                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">{info.label}</p>
                                        {info.href ? (
                                            <Link
                                                href={info.href}
                                                className="text-sm text-slate-700 hover:text-primary transition-colors duration-200 font-bold"
                                            >
                                                {info.value}
                                            </Link>
                                        ) : (
                                            <p className="text-sm text-slate-700 leading-relaxed font-bold">{info.value}</p>
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
                    className="border-t border-primary/20 py-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm text-slate-500 font-medium">
                            © {currentYear} Folksmeal. All rights reserved.
                        </p>

                        <div className="flex gap-8 text-sm text-slate-500 font-medium">
                            <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-primary transition-colors duration-200">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
