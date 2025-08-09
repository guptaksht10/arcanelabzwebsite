import { HeroImg } from "../constants";

const Hero = () => {
    return (
        <>
            <section className="flex justify-center items-center gap-10 py-12 bg-[url('/src/assets/images/herobg.png')] bg-cover bg-center min-h-screen px-6">
                {/* Text Section */}
                <div className="flex-1 mx-5 flex flex-col items-center text-center">
                        <div className="flex gap-2 flex-col  text-white leading-tight font-dm-sans font-semibold mb-4 justify-center">
                            <span className="text-8xl">Innovate. Escape</span>
                            <span className="text-8xl">Mediocrity</span>
                        </div>
                        <p className="text-white dark:text-gray-300 font-dm-sans mb-6 font-semibold text-2xl">
                            We build digital experience that elevate your business.
                        </p>

                    <a
                        href="#contact"
                        className="inline-block px-5 py-1 rounded-xl bg-white  text-black font-raleway font-bold text-2xl"
                    >
                        Get In Touch
                    </a>
                </div>
            </section>
        </>
    );
};

export default Hero;
