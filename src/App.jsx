import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OurWork from "./components/OurWork";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useLocation } from "react-router-dom";

const App = () => {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get("scrollTo");

        if (section) {
            const target = document.getElementById(section);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: "smooth" });
                }, 100); // delay to wait for components to mount
            }
        }
    }, [location]);

    return (
        <main className="bg-bg-dark">
            <Navbar />
            <div className="max-w-7xl mx-auto pt-5 px-6 dark:text-white">
                <Hero />
                <About />
                <OurWork />
                <Services />
                <Contact />
            </div>
            <Footer />
            <SpeedInsights />
        </main>
    );
};

export default App;
