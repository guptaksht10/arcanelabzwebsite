import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Assuming you have the logo in your assets folder
import arcaneLogo from "../assets/images/Frame50.png";

// Animation variants for the main text
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <footer className="relative w-full bg-white text-black px-4 py-20 overflow-hidden">
      {/* Background Logo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 max-w-xl opacity-5 z-0 bg-black min-h-3.5"><img
        src={arcaneLogo}
        alt="Arcane Labz Logo"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 max-w-xl opacity-5 z-0 "
      /></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Top Section: "We don't just design..." */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto">
            We don't just design and build. We challenge the ordinary.
          </h2>
        </motion.div>

        {/* Bottom Section: Copyright and Links */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between text-sm text-gray-400 font-dm-sans">
          <p className="order-2 md:order-1 mt-4 md:mt-0">&copy; 2024 Arcane Labz. All Right Reserved.</p>
          <div className="flex gap-4 order-1 md:order-2">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}