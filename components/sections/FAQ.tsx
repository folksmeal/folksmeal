"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdAdd, MdRemove } from "react-icons/md";
import { faqs } from "@/constants/faq";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Everything you need to know about Folksmeal and our corporate meal programs.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="border border-primary/20 rounded-2xl bg-white overflow-hidden transition-[background-color] hover:bg-hover-bg"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between px-5 py-3 text-left cursor-pointer group"
                            >
                                <span className={`text-base font-bold transition-colors ${openIndex === index ? "text-primary" : "text-foreground"}`}>
                                    {faq.question}
                                </span>
                                <div className={`ml-6 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? "bg-primary text-white rotate-180" : "bg-primary/10 text-primary"}`}>
                                    {openIndex === index ? <MdRemove className="w-4 h-4" /> : <MdAdd className="w-4 h-4" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-5 pb-4 text-muted-foreground leading-relaxed text-sm">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
