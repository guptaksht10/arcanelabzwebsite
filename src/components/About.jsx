import React from "react";
import { AboutImg_3 } from "../constants";

const About = () => {
    return (
        <section
            id="about"
            className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[750px] flex items-center justify-center overflow-hidden rounded-4xl border border-btn-gradient-end mt-15"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${AboutImg_3})` }}
            >
                <div className="absolute inset-0  backdrop-blur-[5px]" />
            </div>

            {/* Centered Content */}
            <div className="relative z-10 px-4 py-12 sm:py-20 text-center text-gray-900 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-dm-sans mb-6 leading-tight">
                    Who We Are?
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed font-dm-sans">
                    We’re a trio of engineers, creatives, and problem-solvers on
                    a mission to help businesses escape mediocrity. Through
                    innovation, intentional design, and sharp engineering, we
                    turn complex challenges into impactful digital products.
                </p>
            </div>
        </section>
    );
};

export default About;

//bg-gradient-to-br from-white/0 via-white/50 to-btn-gradient-end/50
{
    /* <p className="font-dm-sans text-btn w-2/3 mt-1 mb-15">
                    At Arcane Labz, we believe mediocrity is the enemy of
                    innovation. We're a digital innovation studio driven by
                    purpose, precision, and a hunger to build things that
                    matter.
                </p> */
}
{
    /* <a
                    href="#contact"
                    className="px-6 rounded-xl py-2 bg-linear-to-r from-btn-gradient-start to-btn-gradient-end text-white font-raleway text-body font-bold"
                >
                    Learn More
                </a> */
}
