import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import WhatweDo from "./components/WhatweDo";
import OurWork from "./components/OurWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get("scrollTo");

        if (section) {
            // A more reliable way to scroll after the DOM is ready
            const target = document.getElementById(section);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <AnimatePresence mode="wait">
            <main className="bg-black">
                <Navbar />
                <Hero />
                <WhyUs />
                <WhatweDo />
                <OurWork />
                <Contact />
                <Footer />
                {/* <SpeedInsights /> */}
            </main>
        </AnimatePresence>
    );
};

export default App;