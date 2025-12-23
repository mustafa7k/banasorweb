"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Trophy } from "lucide-react";

export default function SmartPlanner() {
    return (
        <section className="py-24 bg-stitch-navy relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-bansor-orange/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full px-6 lg:px-8 relative z-10">

                {/* Left: Text Content Only */}
                <div className="space-y-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                            <span className="text-white">Senin Ritmin,</span> <br />
                            <span className="bg-gradient-to-r from-bansor-orange via-bansor-purple to-bansor-turquoise bg-clip-text text-transparent animate-gradient-x">Akıllı Planlama Asistanı</span>
                        </h2>
                        <p className="text-lg text-gray-300">
                            Eve varış saatinize ve hedef konularınıza göre en verimli haftalık planı BanaSor hazırlasın. Banasor akıllı planlama asistanı biten konularına ve sınava kalan süreyi analiz eder ve haftalık olarak en verimli programı yapar.Sınav maratonunda stratejin cebinde.
                        </p>
                    </motion.div>

                    {/* Modern Bento Grid Cards instead of simple list */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                            className="p-6 lg:p-7 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md flex flex-col gap-3 group transition-colors"
                        >
                            <Clock className="w-8 h-8 text-bansor-orange group-hover:scale-110 transition-transform" />
                            <div>
                                <h4 className="font-bold text-white">Eve Varış Saati</h4>
                                <p className="text-sm text-gray-400">Okul/Kurs çıkışına göre dinamik program.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                            className="p-6 lg:p-7 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md flex flex-col gap-3 group transition-colors"
                        >
                            <Calendar className="w-8 h-8 text-bansor-purple group-hover:scale-110 transition-transform" />
                            <div>
                                <h4 className="font-bold text-white">Hedef Odaklı</h4>
                                <p className="text-sm text-gray-400">Eksik konularına öncelik veren akıllı dağılım.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                            className="p-6 lg:p-7 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md flex flex-col gap-3 md:col-span-2 group transition-colors"
                        >
                            <Trophy className="w-8 h-8 text-bansor-turquoise group-hover:scale-110 transition-transform" />
                            <div>
                                <h4 className="font-bold text-white">Sınav Stratejisi</h4>
                                <p className="text-sm text-gray-400">YKS/LGS maratonunda tükenmeden, verimli ilerle.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
