"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-stitch-navy">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-bansor-purple/20 rounded-full blur-[100px]" />
            </div>

            <div className="w-full px-6 lg:px-8 relative z-10">

                {/* Content Only */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 max-w-xl"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-bansor-orange text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-bansor-orange mr-2 animate-pulse"></span>
                        Yapay Zeka Destekli Öğrenme
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        Sadece Çözmez, <br />
                        <span className="bg-gradient-to-r from-bansor-turquoise to-bansor-blue text-transparent bg-clip-text">
                            Öğretir.
                        </span>
                    </h1>

                    <p className="text-lg text-gray-300 leading-relaxed">
                        BanaSor, sadece soru çözdüren bir uygulama değil, senin kişisel eğitim koçun. Hedeflerine ulaşmak artık daha sistemli ve eğlenceli.
                    </p>

                    <div className="pt-4">
                        <Link href="#download" className="inline-block">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-bansor-orange via-[#ffb74d] to-bansor-orange bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 rounded-2xl font-bold text-white shadow-xl shadow-bansor-orange/30 flex items-center justify-center gap-3 text-lg border border-white/10"
                            >
                                <span className="relative z-10">Hemen İndir</span>
                                <ArrowRight className="w-6 h-6 relative z-10" />
                            </motion.button>
                        </Link>
                    </div>

                    <div className="flex items-center gap-8 pt-8 text-sm text-gray-400 border-t border-white/5 w-fit pr-10">
                        <div className="flex items-center gap-3 group cursor-default">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/5 border border-green-500/20 text-green-400 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-white text-xl tracking-tight flex items-center">
                                    +1K
                                </span>
                                <span className="text-xs font-medium text-gray-400 group-hover:text-green-400 transition-colors">İndirme</span>
                            </div>
                        </div>

                        <div className="w-px h-10 bg-white/10 mx-2"></div>

                        <div className="flex items-center gap-3 group cursor-default">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/5 border border-yellow-500/20 text-yellow-400 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-white text-xl tracking-tight">5.0</span>
                                <span className="text-xs font-medium text-gray-400 group-hover:text-yellow-400 transition-colors">App Store Puanı</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
