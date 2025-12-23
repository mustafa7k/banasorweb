"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DownloadSection() {
    return (
        <section id="download" className="relative w-full py-24 bg-stitch-navy overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-bansor-orange/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 w-full px-6 md:px-12 flex flex-col items-center text-center space-y-8"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Hemen Başla, <br />
                    <span className="bg-gradient-to-r from-bansor-orange to-bansor-purple text-transparent bg-clip-text">
                        Potansiyelini Keşfet
                    </span>
                </h2>

                <p className="text-gray-400 max-w-xl text-lg">
                    Binlerce öğrenci BanaSor ile hedeflerine ulaştı. Sen de aramıza katıl, çalışmanı şansa bırakma.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a 
                        href="https://apps.apple.com/tr/app/banasor/id6753589180?l=tr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
                    >
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-xs font-medium text-gray-600">App Store'dan</span>
                            <span className="text-lg">İndir</span>
                        </div>
                    </a>

                    <a 
                        href="https://play.google.com/store/apps/details?id=com.banasor.app&hl=tr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
                    >
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                            <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="url(#paint0_linear)" />
                            <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="url(#paint1_linear)" />
                            <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z" fill="url(#paint2_linear)" />
                            <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="url(#paint3_linear)" />
                            <defs>
                                <linearGradient id="paint0_linear" x1="3" y1="2.15" x2="13.69" y2="12" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00D6FF"/>
                                    <stop offset="1" stopColor="#007DFF"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="6.05" y1="21.34" x2="16.81" y2="15.12" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFCE00"/>
                                    <stop offset="1" stopColor="#FFEA00"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear" x1="15.39" y1="12" x2="20.75" y2="12" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF4E00"/>
                                    <stop offset="1" stopColor="#FC0"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear" x1="6.05" y1="2.66" x2="16.81" y2="8.88" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00F076"/>
                                    <stop offset="1" stopColor="#00D448"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-xs font-medium text-gray-400">Google Play'den</span>
                            <span className="text-lg">İndir</span>
                        </div>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
