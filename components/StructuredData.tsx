import { CONTACT_EMAIL, CONTACT_PHONE } from "@/constants/contact";
import { faqs } from "@/constants/faq";
import { LocalBusiness, WebSite, Service, FAQPage, BreadcrumbList, WithContext } from "schema-dts";
import { JsonLd } from "./JsonLd";

const BASE_URL = "https://www.folksmeal.com";

export function StructuredData() {
    const localBusinessSchema: WithContext<LocalBusiness> = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#organization`,
        name: "Folksmeal",
        url: BASE_URL,
        logo: `${BASE_URL}/logo-large.png`,
        image: [
            `${BASE_URL}/og-image.png`,
            `${BASE_URL}/logo-large.png`
        ],
        priceRange: "$$",
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

    const websiteSchema: WithContext<WebSite> = {
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

    const serviceSchema: WithContext<Service> = {
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

    const faqSchema: WithContext<FAQPage> | null =
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

    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: BASE_URL,
            },
        ],
    };

    return (
        <>
            <JsonLd schema={localBusinessSchema} />
            <JsonLd schema={websiteSchema} />
            <JsonLd schema={serviceSchema} />
            {faqSchema && <JsonLd schema={faqSchema} />}
            <JsonLd schema={breadcrumbSchema} />
        </>
    );
}
