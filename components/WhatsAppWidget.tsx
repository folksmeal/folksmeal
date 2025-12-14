"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WhatsAppWidget() {
    const phoneNumber = "919650796929";
    const message = encodeURIComponent(
        "Hi Folksmeal, I’m interested in corporate meal subscriptions. Please share pricing and next steps."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full shadow-lg focus:outline-none focus:ring-none"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
        >
            <Image src="/whatsapp.png" alt="WhatsApp" width={80} height={80} />
        </motion.a>
    );
}
