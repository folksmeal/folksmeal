import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6 md:px-12 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>

                <div className="space-y-8 text-foreground/80 leading-relaxed">
                    <p className="text-lg">
                        Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
                        <p>
                            Welcome to Folksmeal ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and corporate meal services.
                        </p>
                        <p>
                            By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this policy, please do not access the site or use our services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
                        <p>We collect information that you provide directly to us, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Personal Information:</strong> Name, email address, phone number, and company details when you request a quote or sign up for our services.</li>
                            <li><strong>Dietary Preferences:</strong> Information about your food preferences and dietary restrictions (e.g., Veg, Non-Veg, Jain, Keto) to provide customized meal options.</li>
                            <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide, operate, and maintain our corporate meal services.</li>
                            <li>Process and deliver your orders efficiently.</li>
                            <li>Communicate with you, including sending booking reminders, updates, and promotional materials.</li>
                            <li>Improve our website and services based on user feedback and usage patterns.</li>
                            <li>Comply with legal obligations and enforce our terms of service.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">4. Data Sharing and Disclosure</h2>
                        <p>
                            We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf, such as payment processing, data analysis, and delivery logistics.</li>
                            <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
                            <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">6. Your Rights</h2>
                        <p>
                            Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us at support@folksmeal.com.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">7. Changes to This Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">8. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <ul className="list-none space-y-2">
                            <li>By email: support@folksmeal.com</li>
                            <li>By visiting this page on our website: <a href="/#contact" className="text-emerald-400 hover:underline">Contact Us</a></li>
                        </ul>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
