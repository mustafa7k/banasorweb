"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

    const plans = [
        {
            name: "Temel",
            prices: {
                monthly: "$2.99",
                yearly: "$34.99",
            },
            description: "Başlangıç seviyesi için ideal.",
            questionLimit: 150,
            features: [
                "Sana Özel Ders Programı",
                "Konu Takibi",
                "Detaylı Konu Anlatımı",
                "Deneme Planlama ve Detaylı Analizler",
                "Haftalık Karma Testler",
            ],
            highlighted: false,
        },
        {
            name: "Standart",
            prices: {
                monthly: "$5.99",
                yearly: "$59.99",
            },
            description: "Düzenli çalışma rutini için.",
            questionLimit: 300,
            features: [
                "Sana Özel Ders Programı",
                "Konu Takibi",
                "Detaylı Konu Anlatımı",
                "Deneme Planlama ve Detaylı Analizler",
                "Haftalık Karma Testler",
            ],
            highlighted: true,
        },
        {
            name: "Premium",
            prices: {
                monthly: "$8.99",
                yearly: "$89.99",
            },
            description: "En kapsamlı hazırlık paketi.",
            questionLimit: 500,
            features: [
                "Sana Özel Ders Programı",
                "Konu Takibi",
                "Detaylı Konu Anlatımı",
                "Deneme Planlama ve Detaylı Analizler",
                "Haftalık Karma Testler",
            ],
            highlighted: false,
        },
    ];

    return (
        <section id="pricing" className="relative w-full py-24 bg-stitch-navy">
            {/* Background Glow */}
            <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-bansor-blue/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 w-full px-6 flex flex-col items-center gap-12">

                {/* Header */}
                <div className="text-center space-y-4 max-w-2xl">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-bansor-turquoise/10 border border-bansor-turquoise/20 text-bansor-turquoise text-xs font-semibold tracking-wide uppercase">
                        Fiyatlandırma
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Hedefine Uygun <span className="text-bansor-turquoise">Planı Seç</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Sınav yolculuğunda sana en uygun desteği sunan paketi seç, başarını şansa bırakma.
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex items-center gap-4 bg-white/5 p-1 rounded-xl border border-white/10 relative">
                    <button
                        onClick={() => setBillingPeriod("monthly")}
                        className={`relative z-10 px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${billingPeriod === "monthly" ? "text-white" : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Aylık
                        {billingPeriod === "monthly" && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-bansor-blue rounded-lg -z-10 shadow-lg"
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        )}
                    </button>
                    <button
                        onClick={() => setBillingPeriod("yearly")}
                        className={`relative z-10 px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${billingPeriod === "yearly" ? "text-white" : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Yıllık
                        {billingPeriod === "yearly" && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-bansor-blue rounded-lg -z-10 shadow-lg"
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        )}
                    </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative flex flex-col p-8 rounded-3xl border bg-white/5 border-white/10 hover:border-bansor-turquoise/50 hover:shadow-2xl hover:shadow-bansor-turquoise/10 transition-all duration-300 group`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-bansor-turquoise to-bansor-blue text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/20 z-10">
                                    En Popüler
                                </div>
                            )}

                            <div className="mb-8 text-center md:text-left">
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-bansor-turquoise transition-colors duration-300">{plan.name}</h3>
                                <div className="flex items-baseline justify-center md:justify-start gap-1">
                                    <span className="text-4xl font-bold text-white">
                                        {billingPeriod === "monthly" ? plan.prices.monthly : plan.prices.yearly}
                                    </span>
                                    <span className="text-gray-400 text-sm">
                                        {billingPeriod === "monthly" ? "/ay" : "/yıl"}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 mt-3">{plan.description}</p>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {/* Dynamic Question Limit Feature */}
                                <li className="flex items-start gap-3 text-sm text-white font-medium">
                                    <div className="mt-0.5 p-0.5 rounded-full bg-white/20 text-white group-hover:bg-bansor-turquoise group-hover:text-black transition-all duration-300">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    Aylık {plan.questionLimit} Soru Hakkı
                                </li>

                                {/* Static Features */}
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <div className="mt-0.5 p-0.5 rounded-full bg-white/10 text-white group-hover:bg-bansor-turquoise group-hover:text-black transition-all duration-300">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 rounded-2xl font-bold transition-all duration-300 bg-white/10 text-white hover:bg-gradient-to-r hover:from-bansor-turquoise hover:to-bansor-blue hover:shadow-xl hover:shadow-bansor-turquoise/20 hover:scale-[1.02]">
                                {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
