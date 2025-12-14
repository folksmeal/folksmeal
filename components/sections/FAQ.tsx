"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "How do you ensure hygiene and quality?",
        answer:
            "We own and operate our cloud kitchens, adhering to strict FSSAI standards. Regular audits and temperature checks ensure every meal is safe and fresh.",
    },
    {
        question: "Do you deliver during peak hours in Delhi NCR?",
        answer:
            "Yes. Our logistics network is optimized for NCR traffic patterns. We use advanced route planning to ensure meals arrive on time, every time.",
    },
    {
        question: "Can we customize menus for dietary preferences?",
        answer:
            "Absolutely. Our app allows employees to set preferences (Veg, Non-Veg, Jain, Keto, etc.), and our menus rotate daily to prevent boredom.",
    },
    {
        question: "What is the minimum order size?",
        answer:
            "We typically work with companies having 50+ employees to ensure the best value and service levels.",
    },
    {
        question: "How does the subsidy process work?",
        answer:
            "You set the subsidy rules (e.g., 50% off or fixed amount) in the HR dashboard. It's automatically applied when employees order. We bill the company for the subsidized portion monthly.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-[#08090a]">
            <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#d5d5d5] mb-4 tracking-tighter">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#d5d5d5]/70 text-lg">
                        Everything you need to know about Folksmeal.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[#d5d5d5]/10 rounded-xl bg-white/[0.02] overflow-hidden transition-colors hover:bg-white/[0.04]"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                            >
                                <span className="text-lg font-medium text-[#d5d5d5] group-hover:text-white transition-colors">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="ml-6 flex-shrink-0 text-[#d5d5d5]/70 group-hover:text-white"
                                >
                                    <Plus className="w-5 h-5" />
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-[#d5d5d5]/70 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
