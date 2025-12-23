"use client";

import { motion, useInView } from "framer-motion";
import { TrendingUp, Timer, BarChart3 } from "lucide-react";
import { useRef, useState, useEffect } from "react";


// Simple Counter Component
const Counter = ({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) => {
    const [count, setCount] = useState(from);
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (inView) {
            let start = from;
            const end = to;
            const totalFrames = duration * 60;
            const increment = (end - start) / totalFrames;
            let currentFrame = 0;

            const timer = setInterval(() => {
                currentFrame++;
                if (currentFrame >= totalFrames) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(prev => Math.floor(prev + increment));
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [inView, from, to, duration]);

    return <span ref={nodeRef}>{count}</span>;
}

export default function Analytics() {
    return (
        <section className="py-24 bg-stitch-blue relative z-10 min-h-screen flex items-center justify-center">
            <div className="w-full px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 items-center mb-16 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            <span className="text-gradient bg-gradient-to-r from-bansor-turquoise to-white">Gerçekçi Deneme Modu</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Fiziki denemelerini gerçek sınav süreleriyle (TYT/AYT) simüle et.
                            Branş bazlı detaylı analizlerle eksiklerini nokta atışı belirle.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(45, 212, 191, 0.2)" }}
                                className="p-6 lg:p-7 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-md group transition-all"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <Timer className="w-8 h-8 text-bansor-turquoise group-hover:rotate-12 transition-transform" />
                                    <div className="text-xs bg-bansor-turquoise/10 text-bansor-turquoise px-2 py-1 rounded-full font-bold">Simülasyon</div>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1 flex items-baseline gap-1">
                                    <Counter from={0} to={135} duration={1.5} /> <span className="text-lg font-normal text-gray-400">Dk</span>
                                </div>
                                <div className="text-sm text-gray-400">YKS/LGS Gerçek Zamanlı Sınav</div>

                                {/* Timer Progression Decoration */}
                                <div className="w-full bg-white/10 h-1.5 rounded-full mt-6 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "65%" }}
                                        transition={{ duration: 2, ease: "linear" }}
                                        className="h-full bg-bansor-turquoise"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(255, 140, 0, 0.2)" }}
                                className="p-6 lg:p-7 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-md group transition-all"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <BarChart3 className="w-8 h-8 text-bansor-orange group-hover:rotate-12 transition-transform" />
                                    <div className="text-xs bg-bansor-orange/10 text-bansor-orange px-2 py-1 rounded-full font-bold">Analiz</div>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1 flex items-baseline">
                                    %<Counter from={0} to={95} />
                                </div>
                                <div className="text-sm text-gray-400">Doğru Tespit Oranı</div>

                                {/* Bar Chart Decoration */}
                                <div className="flex items-end gap-1 h-8 mt-4 opacity-50 justify-end">
                                    <motion.div initial={{ height: 0 }} whileInView={{ height: "30%" }} transition={{ delay: 0.5 }} className="w-2 bg-bansor-orange rounded-t-sm" />
                                    <motion.div initial={{ height: 0 }} whileInView={{ height: "50%" }} transition={{ delay: 0.6 }} className="w-2 bg-bansor-orange rounded-t-sm" />
                                    <motion.div initial={{ height: 0 }} whileInView={{ height: "90%" }} transition={{ delay: 0.7 }} className="w-2 bg-bansor-orange rounded-t-sm" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
