"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, CONTACT_ADDRESS_SHORT } from "@/constants/contact";

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
                    companySize: data.size,
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

    return (
        <section id="contact" className="py-24 bg-slate-50 relative overflow-x-clip overflow-y-visible">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Contact Info */}
                    <div className="space-y-8 lg:sticky lg:top-24 self-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tighter">
                                Get Started with <span className="text-primary">Folksmeal</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Transform your office dining experience today. Fill out the form, and our team will get back to you with a customized plan within 24 hours.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 border border-primary/20 p-4 rounded-3xl bg-white hover:border-primary/20 hover:shadow-md transition-[border-color,box-shadow] duration-500">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-slate-900 font-bold mb-0.5">Email Us</h3>
                                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-500 hover:text-primary transition-colors font-medium">
                                            {CONTACT_EMAIL}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 border border-primary/20 p-4 rounded-3xl bg-white hover:border-primary/20 hover:shadow-md transition-[border-color,box-shadow] duration-500">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-slate-900 font-bold mb-0.5">Call Us</h3>
                                        <a href={`tel:${CONTACT_PHONE_HREF}`} className="text-slate-500 hover:text-primary transition-colors font-medium">
                                            {CONTACT_PHONE}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 border border-primary/20 p-4 rounded-3xl bg-white hover:border-primary/20 hover:shadow-md transition-[border-color,box-shadow] duration-500">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-slate-900 font-bold mb-0.5">Visit Us</h3>
                                        <p className="text-slate-500 font-medium">
                                            {CONTACT_ADDRESS_SHORT}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative bg-white border border-primary/20 rounded-2xl p-4 md:p-8">
                            {isSuccess ? (
                                <div className="text-center py-12 space-y-6">
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle2 className="h-10 w-10 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                        <p className="text-slate-600">
                                            Thank you for reaching out. We'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsSuccess(false)}
                                        className="border-primary/20 text-primary hover:bg-primary/5"
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">
                                                Full Name <span className="text-primary">*</span>
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                className="bg-slate-50/50 border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl transition-all duration-300"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">
                                                Work Email <span className="text-primary">*</span>
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@company.com"
                                                required
                                                className="bg-white border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl transition-all duration-300 shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-1">
                                                Phone Number <span className="text-primary">*</span>
                                            </label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                required
                                                className="bg-white border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl transition-all duration-300 shadow-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="company" className="text-sm font-bold text-slate-700 ml-1">
                                                Company Name <span className="text-primary">*</span>
                                            </label>
                                            <Input
                                                id="company"
                                                name="company"
                                                placeholder="Acme Inc."
                                                required
                                                className="bg-white border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl transition-all duration-300 shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="size" className="text-sm font-bold text-slate-700 ml-1">
                                                Team Size <span className="text-primary">*</span>
                                            </label>
                                            <Input
                                                id="size"
                                                name="size"
                                                type="number"
                                                placeholder="e.g. 50"
                                                required
                                                className="bg-white border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl transition-all duration-300 shadow-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="location" className="text-sm font-bold text-slate-700 ml-1">
                                                Office Location <span className="text-primary">*</span>
                                            </label>
                                            <Input
                                                id="location"
                                                name="location"
                                                placeholder="e.g. Gurugram"
                                                required
                                                className="bg-white border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 text-slate-900 placeholder:text-slate-400 h-12 rounded-xl transition-all duration-300 shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">
                                            Message <span className="text-slate-400 font-normal">(Optional)</span>
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your specific requirements..."
                                            className="bg-white border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 text-slate-900 placeholder:text-slate-400 min-h-[120px] resize-none rounded-xl p-4 transition-all duration-300 shadow-sm"
                                        />
                                    </div>

                                    {errorMsg && (
                                        <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
                                            {errorMsg}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isLoading}
                                        size="lg"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                                                Sending Request...
                                            </>
                                        ) : (
                                            <>
                                                Request Quote <Send className="ml-2 h-5 w-5" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
