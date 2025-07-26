import React from "react";
import {
    ComingSoon_1,
    Workspace,
    ComingSoon_3,
    ComingSoon_4,
} from "../constants";
import { Link } from "react-router-dom";

const OurWork = () => {
    return (
        <section
            id="our-work"
            className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-8 py-10"
        >
            {/* Text Block */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center h-full">
                <h2 className="font-raleway text-sm text-white font-bold mb-2 uppercase">
                    ARCANE LABZ WORKSPACE
                </h2>
                <h1 className="text-3xl sm:text-4xl font-dm-sans text-white font-semibold mb-4 leading-tight">
                    Our Work Speaks
                </h1>
                <p className="text-base sm:text-lg text-white dark:text-gray-300 mb-3 font-dm-sans">
                    We create digital experiences that are beautiful, usable,
                    and deeply functional. Here's a glimpse of our recent work.
                </p>
                <p className="text-base sm:text-lg font-semibold text-white mb-6 font-dm-sans">
                    Got a project you’d like to see here?
                </p>
                <span
                    to="/workspace"
                    className="w-full sm:w-fit px-6 py-3 text-center rounded-xl bg-gray-500 text-white font-raleway font-semibold block cursor-not-allowed"
                >
                    Visit Workspace
                </span>
            </div>

            {/* Workspace Image Grid (Single Image) */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    src={Workspace}
                    alt="Workspace Grid"
                    className="max-w-full h-auto rounded-3xl"
                />
            </div>
        </section>
    );
};

export default OurWork;
