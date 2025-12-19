"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const meals = [
    {
        src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop",
        alt: "Indian Thali",
        title: "Homestyle Indian Meals",
        desc: "Comforting, balanced, and perfectly portioned."
    },
    {
        src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
        alt: "Healthy Grain Bowl",
        title: "Nutrient-Dense Bowls",
        desc: "Packed with fiber, protein, and fresh veggies."
    },
    {
        src: "/3.jpg",
        alt: "Gourmet Indian Thali",
        title: "Gourmet Indian Thalis",
        desc: "Authentic Indian flavors and balanced."
    },
    {
        src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
        alt: "Fresh Salad",
        title: "Fresh & Crisp Salads",
        desc: "Seasonal ingredients sourced responsibly."
    }
];

export function MealShowcase() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-4"
                    >
                        Culinary Excellence, <span className="text-primary">Delivered Daily</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        From authentic regional cuisines to global favorites, our menus are crafted by expert chefs to ensure variety, nutrition, and taste in every bite.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {meals.map((meal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden aspect-4/5 cursor-pointer shadow-sm hover:shadow-md border border-primary/20"
                        >
                            <Image
                                src={meal.src}
                                alt={meal.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-3 sm:bottom-4 left-2 right-2 translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-300">
                                <div className="bg-white/10 backdrop-blur-md rounded-xl px-3 sm:px-4 py-2 sm:py-3 border border-white/20">
                                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-1.5 leading-none">{meal.title}</h3>
                                    <p className="text-xs sm:text-sm text-white/90">{meal.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
