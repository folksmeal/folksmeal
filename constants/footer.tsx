import React from "react";
import { MapPin, Mail } from "lucide-react";
import { CONTACT_ADDRESS, CONTACT_EMAIL } from "./contact";

export const footerContactInfo = [
    {
        icon: <MapPin className="w-4 h-4" />,
        label: "Address",
        value: CONTACT_ADDRESS
    },
    {
        icon: <Mail className="w-4 h-4" />,
        label: "Email",
        value: CONTACT_EMAIL,
        href: `mailto:${CONTACT_EMAIL}`
    }
];

export const footerQuickLinks = [
    { name: "About Us", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" }
];
