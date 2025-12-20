import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6 md:px-12 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>

                <div className="space-y-8 text-foreground/80 leading-relaxed">
                    <p className="text-lg">
                        Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-900">1. Agreement to Terms</h2>
                        <p>
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Folksmeal ("we," "us," or "our"), concerning your access to and use of the Folksmeal website and services. By accessing the services, you agree that you have read, understood, and bound by all of these Terms of Service.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-900">2. Services Provided</h2>
                        <p>
                            Folksmeal provides corporate meal subscription services, including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Daily meal delivery to corporate offices.</li>
                            <li>Menu customization based on dietary preferences.</li>
                            <li>HR dashboard access for subsidy management and billing.</li>
                        </ul>
                        <p>
                            We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-900">3. User Accounts</h2>
                        <p>
                            To access certain features of the services, you may be required to register for an account. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-900">4. Ordering and Payment</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Orders:</strong> All orders are subject to acceptance and availability. We reserve the right to refuse service to anyone for any reason at any time.</li>
                            <li><strong>Pricing:</strong> Prices for our meals are subject to change without notice. We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of the Service.</li>
                            <li><strong>Billing:</strong> Corporate clients will be billed according to the agreed-upon terms (e.g., monthly invoicing). Individual payments, if applicable, must be made through our approved payment gateways.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-900">5. Cancellation and Refunds</h2>
                        <p>
                            <strong>Corporate Subscriptions:</strong> Cancellation terms are governed by the specific service agreement signed between Folksmeal and the corporate client.
                        </p>
                        <p>
                            <strong>Individual Orders:</strong> Cancellations for daily meals must be made before the cut-off time specified in the app. Refunds for valid cancellations will be processed to the original payment method or as credits to your Folksmeal account.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-900">6. Intellectual Property Rights</h2>
                        <p>
                            Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-900">7. Limitation of Liability</h2>
                        <p>
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or services, even if we have been advised of the possibility of such damages.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-900">8. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and defined following the laws of India. Folksmeal and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-900">9. Contact Us</h2>
                        <p>
                            To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
                        <p className="font-medium text-slate-900">support@folksmeal.com</p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
