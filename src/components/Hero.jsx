import { HeroImg } from "../constants";

const Hero = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-12">
                {/* Text Section */}
                <div className="flex-1 text-left">
                    <h2 className="font-raleway text-body font-bold mb-2">
                        ARCANE LABZ
                    </h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-dm-sans font-semibold mb-4">
                        Innovate. Escape Mediocrity
                    </h1>
                    <p className="text-base text-gray-700 dark:text-gray-300 max-w-xl font-dm-sans mb-6">
                        We design and engineer digital solutions that challenge
                        the norm — bold ideas turned into scalable apps,
                        websites, and cloud systems.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-btn-gradient-start to-btn-gradient-end text-white font-raleway font-bold"
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Image */}
                <div className="flex-1 w-full max-w-xl mx-auto md:mx-0">
                    <div className="rounded-3xl overflow-hidden shadow-md shadow-btn-gradient-end">
                        <img
                            className="w-full h-auto object-cover"
                            src={HeroImg}
                            alt="Hero Section"
                        />
                    </div>
                </div>
            </section>

            {/* Bottom paragraph */}
            <p className="text-center font-raleway text-base text-gray-800 dark:text-gray-300 px-4 max-w-3xl mx-auto">
                At Arcane Labz, we don't just build apps — we craft digital
                experiences that disrupt convention and elevate user engagement.
            </p>
        </>
    );
};

export default Hero;
