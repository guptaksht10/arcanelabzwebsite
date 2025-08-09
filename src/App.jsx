import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import WhatweDo from "./components/WhatweDo";
import OurWork from "./components/OurWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useLocation } from "react-router-dom";
import ContactUs from "./components/ContactUs";

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
            <Hero />
            <WhyUs />
            <WhatweDo />
            <OurWork />
            <ContactUs/>
            <SpeedInsights />
        </main>
    );
};

export default App;
