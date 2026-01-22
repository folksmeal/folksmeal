import { CONTACT_EMAIL, CONTACT_PHONE } from "@/constants/contact";
import { faqs } from "@/constants/faq";

const BASE_URL = "https://www.folksmeal.com";

export function StructuredData() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#organization`,
        name: "Folksmeal",
        url: BASE_URL,
        logo: `${BASE_URL}/logo-large.png`,
        image: `${BASE_URL}/og-image.png`,
        description:
            "FolksMeal is a managed corporate meal brand that helps companies manage everyday office food seamlessly.",
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        address: {
            "@type": "PostalAddress",
            streetAddress:
                "Building No 439, 1st Floor, Aghapur, Sector 41, Near HP Petrol Pump",
            addressLocality: "Noida",
            addressRegion: "Uttar Pradesh",
            postalCode: "201303",
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 28.5667,
            longitude: 77.35,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
                opens: "08:00",
                closes: "20:00",
            },
        ],
        sameAs: [
            "https://www.linkedin.com/company/folksmeal",
            "https://x.com/FolksMealIndia",
            "https://www.instagram.com/folksmealindia",
        ],
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Folksmeal",
        description:
            "FolksMeal is a managed corporate meal brand that helps companies manage everyday office food seamlessly.",
        publisher: {
            "@id": `${BASE_URL}/#organization`,
        },
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${BASE_URL}/#service`,
        serviceType: "Corporate Meal Subscriptions",
        provider: {
            "@id": `${BASE_URL}/#organization`,
        },
        areaServed: [
            {
                "@type": "City",
                name: "Noida",
            },
            {
                "@type": "City",
                name: "Gurugram",
            },
            {
                "@type": "City",
                name: "Delhi",
            },
        ],
        description:
            "FolksMeal is a managed corporate meal brand that helps companies manage everyday office food seamlessly.",
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            url: `${BASE_URL}/contact`,
        },
    };

    const faqSchema =
        faqs?.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "@id": `${BASE_URL}/#faq`,
                mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            }
            : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                />
            )}
        </>
    );
}
