"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { BrainCircuit, HelpCircle, Sigma, Award } from "lucide-react";

type Screen = "home" | "solver" | "planner" | "analytics" | "profile";

interface PhoneShowcaseProps {
    currentScreen: string;
}

const screens: Record<string, string> = {
    home: "/screens/screen-home.png",
    solver: "/screens/screen-solver.png",
    planner: "/screens/screen-planner.png",
    analytics: "/screens/screen-analytics.png",
    profile: "/screens/screen-profile.png",
};

export default function PhoneShowcase({ currentScreen }: PhoneShowcaseProps) {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]); // Increased scale to 1.1 as requested
    const yFloat = useTransform(scrollYProgress, [0, 1], [0, -80]); // Increased parallax movement

    return (
        <div className="w-full h-full flex items-center justify-center relative">

            {/* Dynamic Background Assets (Parallax) */}
            <motion.div style={{ y: yFloat }} className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* Large Glow - Orange to Purple Radial Blur */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[900px] bg-[radial-gradient(circle,rgba(255,107,0,0.15)_0%,rgba(124,58,237,0.1)_50%,transparent_70%)] blur-[100px] rounded-full" />

                {/* Floating Icons - Scattered & Subtle */}
                {/* 1. Question Mark (Top Right) */}
                <motion.div
                    animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-[-30px] text-white/10"
                >
                    <HelpCircle size={120} />
                </motion.div>

                {/* 2. Math Formula/Sigma (Bottom Right) */}
                <motion.div
                    animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-32 right-[-50px] text-bansor-turquoise/10"
                >
                    <Sigma size={140} />
                </motion.div>

                {/* 3. Brain (Top Left) */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 left-[-30px] text-bansor-purple/10"
                >
                    <BrainCircuit size={90} />
                </motion.div>

                {/* 4. Success Badge (Bottom Left) */}
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-20 left-[-20px] text-bansor-orange/10"
                >
                    <Award size={100} />
                </motion.div>
            </motion.div>

            {/* Anti-Gravity Floating Container with Scroll Scale */}
            <motion.div
                style={{ scale }}
                animate={{ y: [-15, 15, -15] }}
                transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] transition-all duration-500 shadow-2xl rounded-[3rem] z-50"
            >

                {/* Frame Border - Realistic Dark Metal */}
                <div className="absolute inset-0 z-30 pointer-events-none rounded-[3rem] border-[14px] border-[#151515] shadow-2xl ring-1 ring-white/10"></div>

                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#151515] z-40 rounded-b-2xl"></div>

                {/* Buttons */}
                <div className="absolute top-28 -left-[7px] w-1.5 h-10 bg-[#202020] rounded-l-md z-20 border-l border-white/5"></div>
                <div className="absolute top-44 -left-[7px] w-1.5 h-16 bg-[#202020] rounded-l-md z-20 border-l border-white/5"></div>
                <div className="absolute top-32 -right-[7px] w-1.5 h-24 bg-[#202020] rounded-r-md z-20 border-r border-white/5"></div>

                {/* Inner Content with Mask for Overflow */}
                {/* 
                   Fix: Physically inset the content div so it's smaller than the outer frame.
                   Frame border is 14px. We inset by 15px to be safe. 
                   Outer radius 3rem (48px). Inner radius approx 2rem (32px).
                */}
                <div className="absolute inset-[15px] rounded-[2rem] overflow-hidden bg-black z-10 transform-gpu backface-hidden" style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}>
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={currentScreen}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={screens[currentScreen] || screens.home}
                                alt={`Screen ${currentScreen}`}
                                fill
                                className="object-cover"
                                priority={true}
                                sizes="(max-width: 768px) 100vw, 350px"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* UI Overlays */}
                    <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none"></div>

                    {/* Status Bar Mockup */}
                    <div className="absolute top-3.5 px-8 w-full flex justify-between items-center z-50 text-white text-[10px] font-medium tracking-wide">
                        <span>9:41</span>
                        <div className="flex gap-1.5 items-center">
                            <div className="w-4 h-2.5 bg-white rounded-[2px]" />
                            <div className="w-0.5 h-1 bg-white/50" />
                        </div>
                    </div>

                    {/* Home Bar */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/80 rounded-full z-50"></div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-16 bg-gradient-to-tr from-bansor-orange/30 via-bansor-purple/20 to-bansor-turquoise/20 rounded-full blur-3xl -z-10 animate-pulse-slow opacity-60"></div>
            </motion.div>
        </div>
    );
}

