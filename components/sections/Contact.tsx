"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg(null);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    company: data.company,
                    companySize: data.size, // Mapped to match schema
                    location: data.location,
                    message: data.message,
                    currentSetup: data.currentSetup,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to submit form');
            }

            setIsSuccess(true);
            toast.success("Message sent successfully! We'll be in touch soon.");
        } catch (error: unknown) {
            console.error("Error submitting form:", error);
            const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
            setErrorMsg(message);
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    }

    if (isSuccess) {
        return (
            <section id="contact" className="py-24 bg-[#08090a] flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-[#d5d5d5]/10 rounded-full flex items-center justify-center mx-auto">
                        <Send className="h-8 w-8 text-[#d5d5d5]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#d5d5d5]">Message Sent!</h2>
                    <p className="text-[#d5d5d5]/70">We&apos;ll get back to you within 24 hours.</p>
                    <Button
                        variant="outline"
                        onClick={() => setIsSuccess(false)}
                        className="mt-4 border-[#d5d5d5]/20 text-[#d5d5d5] hover:bg-[#d5d5d5]/10"
                    >
                        Send Another Message
                    </Button>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 bg-[#08090a]">
            <div className="container mx-auto px-4 md:px-6 max-w-xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#d5d5d5] mb-4">
                        Get Started with Folksmeal
                    </h2>
                    <p className="text-[#d5d5d5]/70">
                        Fill out the form below and we&apos;ll be in touch shortly.
                    </p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-[#d5d5d5]/5 p-8 rounded-2xl border border-[#d5d5d5]/10 backdrop-blur-sm"
                >
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-[#d5d5d5]/80">
                            Full Name
                        </label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="bg-[#08090a]/50 border-[#d5d5d5]/20 focus:ring-[#d5d5d5] text-[#d5d5d5] placeholder:text-[#d5d5d5]/30"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-[#d5d5d5]/80">
                                Work Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@company.com"
                                required
                                className="bg-[#08090a]/50 border-[#d5d5d5]/20 focus:ring-[#d5d5d5] text-[#d5d5d5] placeholder:text-[#d5d5d5]/30"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-[#d5d5d5]/80">
                                Phone Number
                            </label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+91 98765 43210"
                                required
                                className="bg-[#08090a]/50 border-[#d5d5d5]/20 focus:ring-[#d5d5d5] text-[#d5d5d5] placeholder:text-[#d5d5d5]/30"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium text-[#d5d5d5]/80">
                                Company Name
                            </label>
                            <Input
                                id="company"
                                name="company"
                                placeholder="Acme Inc."
                                required
                                className="bg-[#08090a]/50 border-[#d5d5d5]/20 focus:ring-[#d5d5d5] text-[#d5d5d5] placeholder:text-[#d5d5d5]/30"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="size" className="text-sm font-medium text-[#d5d5d5]/80">
                                Team Size
                            </label>
                            <Input
                                id="size"
                                name="size"
                                type="number"
                                placeholder="50"
                                required
                                className="bg-[#08090a]/50 border-[#d5d5d5]/20 focus:ring-[#d5d5d5] text-[#d5d5d5] placeholder:text-[#d5d5d5]/30"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-medium text-[#d5d5d5]/80">
                            Location
                        </label>
                        <Input
                            id="location"
                            name="location"
                            placeholder="e.g. Gurugram, Cyber City"
                            required
                            className="bg-[#08090a]/50 border-[#d5d5d5]/20 focus:ring-[#d5d5d5] text-[#d5d5d5] placeholder:text-[#d5d5d5]/30"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="currentSetup" className="text-sm font-medium text-[#d5d5d5]/80">
                            Current Meal Setup <span className="text-[#d5d5d5]/40 font-normal">(Optional)</span>
                        </label>
                        <Input
                            id="currentSetup"
                            name="currentSetup"
                            placeholder="e.g. In-house pantry, Zomato, Local Caterer"
                            className="bg-[#08090a]/50 border-[#d5d5d5]/20 focus:ring-[#d5d5d5] text-[#d5d5d5] placeholder:text-[#d5d5d5]/30"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-[#d5d5d5]/80">
                            Message
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your requirements..."
                            className="bg-[#08090a]/50 border-[#d5d5d5]/20 focus:ring-[#d5d5d5] min-h-[100px] text-[#d5d5d5] placeholder:text-[#d5d5d5]/30"
                        />
                    </div>

                    {errorMsg && (
                        <p className="text-red-400 text-sm">{errorMsg}</p>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-[#d5d5d5] hover:bg-white text-[#08090a]"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Request Quote"
                        )}
                    </Button>
                </motion.form>
            </div>
        </section>
    );
}
