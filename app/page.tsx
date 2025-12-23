"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/hero";
import StepByStep from "@/components/features/step-by-step";
import SmartPlanner from "@/components/features/smart-planner";
import Analytics from "@/components/features/analytics";
import Footer from "@/components/footer";
import PhoneShowcase from "@/components/phone-showcase";
import Header from "@/components/header";
import Pricing from "@/components/pricing";
import DownloadSection from "@/components/download";

const screens = ["home", "solver", "planner", "analytics"];

export default function Home() {
    const [activeScreenIndex, setActiveScreenIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveScreenIndex((prev) => (prev + 1) % screens.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="relative bg-stitch-navy min-h-screen text-white overflow-x-hidden selection:bg-bansor-orange/30">

            {/* Navigation Bar */}
            <Header />

            {/* Global Background Elements if needed */}

            {/* Main Container - Centered and Optimized */}
            <div className="w-full max-w-[1500px] mx-auto relative px-4 lg:px-6">

                <div className="flex flex-col lg:flex-row w-full relative justify-center">

                    {/* LEFT: Scrollable Content */}
                    <div className="w-full lg:w-[70%] flex flex-col relative z-20 order-2 lg:order-1 bg-stitch-navy">
                        {/* Content Wrapper */}
                        <div className="flex flex-col gap-0 pb-20">
                            {/* Sections - Removed extra padding to fit screen better */}
                            <div className="w-full">
                                <Hero />
                            </div>

                            <div id="features" className="w-full">
                                <StepByStep />
                                <SmartPlanner />
                                <Analytics />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Sticky Phone Container */}
                    <div className="hidden lg:flex lg:w-[30%] sticky top-0 h-screen items-center justify-center order-1 lg:order-2 z-50 pointer-events-none">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <PhoneShowcase currentScreen={screens[activeScreenIndex]} />
                        </div>
                    </div>

                </div>
            </div>

            {/* Full-Width Sections - Outside of 60/40 layout */}
            <div className="w-full relative z-30">
                <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8">
                    <Pricing />
                    <DownloadSection />
                </div>
            </div>

            {/* Footer - Full Width Section */}
            <div className="w-full relative z-30">
                <Footer />
            </div>

        </main >
    );
}
