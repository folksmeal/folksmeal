"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const contactInfo = [
        {
            icon: <MapPin className="w-4 h-4" />,
            label: "Address",
            value: "Building No 439, 1st Floor, Aghapur, Sector 41, Near HP Petrol Pump, Noida 201303"
        },
        {
            icon: <Mail className="w-4 h-4" />,
            label: "Email",
            value: "support@folksmeal.com",
            href: "mailto:support@folksmeal.com"
        }
    ];

    const quickLinks = [
        { name: "About Us", href: "#about" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Features", href: "#features" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <footer className="bg-[#08090a] border-t border-[#d5d5d5]/10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#d5d5d5]/[0.02] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d5d5d5]/[0.02] rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <h3 className="text-2xl font-bold text-[#d5d5d5] mb-4">Folksmeal</h3>
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
                            {quickLinks.map((link, index) => (
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
                            {contactInfo.map((info, index) => (
                                <li key={index} className="flex items-start gap-3 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#d5d5d5]/5 border border-[#d5d5d5]/10 flex items-center justify-center text-[#d5d5d5]/70 group-hover:bg-[#d5d5d5]/10 group-hover:border-[#d5d5d5]/20 transition-all duration-300">
                                        {info.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-[#d5d5d5]/40 uppercase tracking-wider mb-1">{info.label}</p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-sm text-[#d5d5d5]/70 hover:text-[#d5d5d5] transition-colors duration-200"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm text-[#d5d5d5]/70">{info.value}</p>
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
                    className="border-t border-[#d5d5d5]/10 py-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-[#d5d5d5]/50">
                            © {currentYear} Folksmeal. All rights reserved.
                        </p>

                        <div className="flex gap-6 text-sm text-[#d5d5d5]/50">
                            <Link href="#" className="hover:text-[#d5d5d5] transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-[#d5d5d5] transition-colors duration-200">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
