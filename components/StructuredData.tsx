import { CONTACT_EMAIL, CONTACT_PHONE } from '@/constants/contact';
import { faqs } from '@/constants/faq';

export function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "FoodService",
        "name": "Folksmeal",
        "url": "https://www.folksmeal.com",
        "logo": "https://www.folksmeal.com/logo-large.png",
        "image": "https://www.folksmeal.com/og-image.png",
        "description": "Folksmeal delivers healthy and hygienic meals to workplaces through self-operated kitchens. Our managed meal program ensures seamless delivery, empowering businesses to prioritize employee wellbeing with minimal effort.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Building No 439, 1st Floor, Aghapur, Sector 41, Near HP Petrol Pump",
            "addressLocality": "Noida",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201303",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.5667",
            "longitude": "77.3500"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales",
            "telephone": CONTACT_PHONE,
            "email": CONTACT_EMAIL
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "08:00",
                "closes": "20:00"
            }
        ],
        "sameAs": [
            "https://twitter.com/folksmeal",
            "https://linkedin.com/company/folksmeal"
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Corporate Meal Subscriptions",
        "provider": {
            "@type": "Organization",
            "name": "Folksmeal"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Noida"
            },
            {
                "@type": "City",
                "name": "Gurugram"
            },
            {
                "@type": "City",
                "name": "Delhi"
            }
        ],
        "description": "Healthy, dietitian-curated office meals delivered daily. ISO-certified kitchen with real-time analytics and zero admin hassle.",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Folksmeal",
        "url": "https://www.folksmeal.com",
        "description": "Folksmeal delivers healthy and hygienic meals to workplaces through self-operated kitchens. Our managed meal program ensures seamless delivery, empowering businesses to prioritize employee wellbeing with minimal effort."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
        </>
    );
}
