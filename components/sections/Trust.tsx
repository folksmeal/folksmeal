"use client";

export function Trust() {
    return (
        <section className="py-12 bg-[#08090a] border-y border-[#d5d5d5]/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: "Corporate Clients", value: "50+" },
                        { label: "Daily Meals", value: "2,000+" },
                        { label: "Retention Rate", value: "98%" },
                        { label: "Cities", value: "Delhi NCR" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div className="text-3xl md:text-4xl font-bold text-[#d5d5d5] mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[#d5d5d5]/50 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
