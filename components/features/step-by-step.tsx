"use client";

import { motion } from "framer-motion";
import { RefreshCw, Archive, BrainCircuit } from "lucide-react";


const steps = [
    {
        id: "01",
        title: "Soru Çözümü",
        desc: "Yapamadığın sorunun fotoğrafını çek. BanaSor sana, adım adım çözüm ve konu anlatımını anında sunsun.",
        icon: BrainCircuit,
        color: "text-bansor-orange",
        bg: "bg-bansor-orange/10",
        border: "border-bansor-orange/20",
        shadow: "shadow-bansor-orange/10"
    },
    {
        id: "02",
        title: "Akıllı Arşiv",
        desc: "Çözemediğin veya yanlış yaptığın her soru, 'Hata Kutusu'na otomatik olarak kaydedilir ve analiz edilir.",
        icon: Archive,
        color: "text-bansor-purple",
        bg: "bg-bansor-purple/10",
        border: "border-bansor-purple/20",
        shadow: "shadow-bansor-purple/10"
    },
    {
        id: "03",
        title: "Döngüsel Tekrar",
        desc: "Unutmayı engellemek için, arşivdeki bu sorular belirli aralıklarla haftalık karma testlerde tekrar karşına çıkar.",
        icon: RefreshCw,
        color: "text-bansor-turquoise",
        bg: "bg-bansor-turquoise/10",
        border: "border-bansor-turquoise/20 text-bansor-turquoise",
        shadow: "shadow-bansor-turquoise/10"
    }
];

export default function StepByStep() {
    return (
        <section className="py-24 bg-stitch-blue relative z-10 flex items-center justify-center">
            <div className="w-full px-6 lg:px-8">
                <div className="mb-16 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            <span className="text-white">Tam Öğrenme İçin</span>{" "}
                            <span className="text-bansor-turquoise">Döngüsel Sistem</span>
                        </h2>
                        <p className="text-gray-400">
                            Sadece çözüm değil, kalıcı öğrenme. Çözemediğin soruları arşivliyoruz ve öğrenene kadar haftalık karma testlerle tekrar karşına çıkarıyoruz.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-8 relative cursor-default">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`p-6 lg:p-8 rounded-3xl border ${step.border} ${step.bg} backdrop-blur-sm relative group hover:scale-[1.02] transition-transform duration-300`}
                        >
                            <div className="flex items-start gap-6 lg:gap-8">
                                <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl ${step.bg} flex shrink-0 items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className={`w-6 h-6 lg:w-7 lg:h-7 ${step.color}`} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3">{step.title}</h3>
                                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
