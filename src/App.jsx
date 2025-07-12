import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OurWork from "./components/OurWork";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
        <main className="bg-white dark:bg-bg-dark">
            <Navbar />
            <div className="max-w-7xl mx-auto pt-5 px-6 dark:text-white">
                <Hero />
                <About />
                <OurWork />
                <Services />
                <Contact />
            </div>
            <Footer />
        </main>
    );
};

export default App;
