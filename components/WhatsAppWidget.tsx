"use client";

import { motion } from "framer-motion";
import { WHATSAPP_PHONE_HREF } from "@/constants/contact";
import Image from "next/image";

export function WhatsAppWidget() {
    const message = encodeURIComponent(
        "Hi FolksMeal, I'm interested in your managed corporate meal services. Please share more details."
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_HREF}?text=${message}`;

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
            <Image src="/whatsapp.png" alt="WhatsApp" width={56} height={56} />
        </motion.a>
    );
}
