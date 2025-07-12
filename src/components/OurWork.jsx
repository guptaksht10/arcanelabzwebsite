import React from "react";
import { ComingSoon_1, ComingSoon_3, ComingSoon_4 } from "../constants";

const OurWork = () => {
    return (
        <section
            id="our-work"
            className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 mt-15"
        >
            {/* Text Block */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 h-full">
                <h2 className="font-raleway text-sm font-bold mb-2 uppercase">
                    ARCANE LABZ PRODUCTS
                </h2>
                <h1 className="text-3xl sm:text-4xl font-dm-sans font-semibold mb-4 leading-tight">
                    Our Work Speaks
                </h1>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3 font-dm-sans">
                    We create digital experiences that are beautiful, usable,
                    and deeply functional. Here's a glimpse of our recent work.
                </p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-6 font-dm-sans">
                    Got a project you’d like to see here?
                </p>
                <a
                    href="#contact"
                    className="w-full sm:w-fit px-6 py-3 text-center rounded-xl bg-gradient-to-r from-btn-gradient-start to-btn-gradient-end text-white font-raleway font-bold block"
                >
                    Let’s make it happen →
                </a>
            </div>

            {/* Image Grid */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 px-4 sm:px-8">
                {/* Top Image */}
                <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-btn-gradient-end">
                    <img
                        src={ComingSoon_1}
                        alt="Coming Soon"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 backdrop-blur-[3px] flex items-center justify-center">
                        <p className="font-dm-sans text-lg sm:text-xl text-black font-semibold">
                            Coming Soon
                        </p>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row gap-4">
                    {[ComingSoon_4, ComingSoon_3].map((img, idx) => (
                        <div
                            key={idx}
                            className="relative w-full sm:w-1/2 aspect-[16/10] rounded-3xl overflow-hidden border border-btn-gradient-end"
                        >
                            <img
                                src={img}
                                alt={`Coming Soon ${idx + 2}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 backdrop-blur-[3px] flex items-center justify-center">
                                <p className="font-dm-sans text-lg text-black font-semibold">
                                    Coming Soon
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurWork;
