"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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
    return (
        <section id="faq" className="py-24 bg-[#08090a]">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#d5d5d5] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#d5d5d5]/70">
                        Everything you need to know about Folksmeal.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-[#d5d5d5]/10">
                            <AccordionTrigger className="text-[#d5d5d5] hover:text-white text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#d5d5d5]/70">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
