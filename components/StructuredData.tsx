import Script from 'next/script';

export function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Folksmeal",
        "url": "https://folksmeal.com",
        "logo": "https://folksmeal.com/logo-large.svg",
        "description": "Transform corporate wellness with Folksmeal's dietitian-curated office meals. ISO-certified kitchen, real-time analytics, zero admin hassle.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi",
            "addressRegion": "NCR",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales",
            "email": "support@folksmeal.com"
        },
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
        "areaServed": {
            "@type": "Place",
            "name": "Delhi NCR"
        },
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
        "url": "https://folksmeal.com",
        "description": "Transform corporate wellness with Folksmeal's dietitian-curated office meals. ISO-certified kitchen, real-time analytics, zero admin hassle."
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}
