import React from "react";
import { servicesData } from "../constants";

const Services = () => {
    return (
        <section id="services" className="px-4 py-20">
            <div className="text-center mb-12">
                <h2 className="text-h2 font-dm-sans font-semibold">
                    Our Services
                </h2>
                <p className="mt-4 font-dm-sans text-body text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                    From bold ideas to finished products — we build software
                    that performs, scales, and inspires.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
                {servicesData.map((service, idx) => (
                    <div
                        key={idx}
                        className="group h-full min-h-[280px] flex flex-col justify-between text-center rounded-2xl border border-blue-200 hover:border-blue-500 transition duration-200 p-6 shadow-sm bg-white dark:bg-gray-900 hover:shadow-md"
                    >
                        <div className="flex-grow flex flex-col items-center">
                            <img
                                src={service.icon}
                                alt={service.title}
                                className="w-12 h-12 mb-4 group-hover:scale-110 transition duration-200 filter invert-0 dark:invert-100"
                            />
                            <h3 className="font-semibold text-h3 leading-8 font-dm-sans mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 font-dm-sans dark:text-gray-300 text-body">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
