import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { StructuredData } from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: "Folksmeal | Managed Office Meal Programs & Employee Food Solutions",
    template: "%s | Folksmeal"
  },
  description: "Folksmeal delivers healthy and hygienic meals to workplaces through self-operated kitchens. Our managed meal program ensures seamless delivery, empowering businesses to prioritize employee wellbeing with minimal effort.",
  keywords: [
    "corporate meal subscriptions",
    "managed meal program",
    "self-operated kitchens",
    "healthy office meals",
    "employee food solution",
    "office lunch delivery",
    "B2B food service",
    "workplace dining",
    "dietitian-curated meals",
    "employee wellness platform",
    "office food delivery",
    "corporate food service"
  ],
  authors: [{ name: "Folksmeal" }],
  creator: "Folksmeal",
  publisher: "Folksmeal",

  // Verification & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.folksmeal.com",
    siteName: "Folksmeal",
    title: "Folksmeal | Managed Office Meal Programs & Employee Food Solutions",
    description: "Transform corporate wellness with dietitian-curated office meals. ISO-certified kitchen, real-time analytics, zero admin hassle. Trusted by leading companies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Folksmeal - Corporate Meal Subscriptions",
        type: "image/png",
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@folksmeal",
    creator: "@folksmeal",
    title: "Folksmeal | Managed Office Meal Programs & Employee Food Solutions",
    description: "Transform corporate wellness with dietitian-curated office meals. ISO-certified kitchen, real-time analytics, zero admin hassle.",
    images: ["/og-image.png"],
  },

  // Icons & Favicons
  icons: {
    icon: [
      { url: "/logo-small.png", sizes: "any" },
      { url: "/logo-small.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo-small.png",
      },
    ],
  },

  // Manifest
  manifest: "/manifest.json",

  // Additional Metadata
  metadataBase: new URL("https://www.folksmeal.com"),
  alternates: {
    canonical: "/",
  },

  // App-specific
  applicationName: "Folksmeal",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Folksmeal",
  },

  // Format Detection
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // Category
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <StructuredData />
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
