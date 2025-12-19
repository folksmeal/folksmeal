"use client";

import { motion } from "framer-motion";
import { problems } from "@/constants/problem";

export function Problem() {
    return (
        <section id="problem" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-4"
                    >
                        The Hidden Cost of <span className="text-primary">Unmanaged Meals</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Inefficient meal programs lead to more than just hungry employees, they impact your bottom line through lost productivity and health risks.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-slate-50 border border-primary/20 hover:bg-white hover:shadow-md transition-[background-color,border-color,box-shadow] duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <problem.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
