// import { HeroImg } from "../constants";

// const Hero = () => {
//     return (
//         <>
//             <section className="flex justify-center items-center gap-10 py-12 bg-[url('/src/assets/images/herobg.png')] bg-cover bg-center min-h-screen px-6">
//                 {/* Text Section */}
//                 <div className="flex-1 mx-5 flex flex-col items-center text-center">
//                         <div className="flex gap-2 flex-col  text-white leading-tight font-dm-sans font-semibold mb-4 justify-center">
//                             <span className="text-8xl">Innovate. Escape</span>
//                             <span className="text-8xl">Mediocrity</span>
//                         </div>
//                         <p className="text-white dark:text-gray-300 font-dm-sans mb-6 font-semibold text-2xl">
//                             We build digital experience that elevate your business.
//                         </p>

//                     <a
//                         href="#contact"
//                         className="inline-block px-5 py-1 rounded-xl bg-white  text-black font-raleway font-bold text-2xl"
//                     >
//                         Get In Touch
//                     </a>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Hero;

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

// Import all the image frames
import frame2 from "../assets/images/Property 1=Variant2.png";
import frame3 from "../assets/images/Property 1=Variant3.png";
import frame4 from "../assets/images/Property 1=Variant4.png";
import frame5 from "../assets/images/Property 1=Variant5.png";
import frame6 from "../assets/images/Property 1=Variant6.png";
import frame7 from "../assets/images/Property 1=Variant7.png";
import frame8 from "../assets/images/Property 1=Variant8.png";
import frame9 from "../assets/images/Property 1=Variant9.png";
import frame10 from "../assets/images/Property 1=Variant10.png";

const frames = [
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  frame8,
  frame9,
  frame10,
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Hero = () => {
  const controls = useAnimation();
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useEffect(() => {
    // Function to animate the background
    const animateBackground = async () => {
      await controls.start({
        backgroundImage: `url(${frames[currentFrameIndex]})`,
        transition: { duration: 0.5, ease: "easeIn" }, // Quick, linear transition
      });
      // Move to the next frame and loop
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    };

    // We can use a simple interval to trigger the animation sequence
    const intervalId = setInterval(animateBackground, 1000);

    return () => clearInterval(intervalId);
  }, [currentFrameIndex, controls]); // Re-run effect when currentFrameIndex changes

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background container for the animated frames */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        animate={controls}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Content Section */}
      <motion.div
        className="relative flex-1 flex flex-col items-center justify-center text-center h-full z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex gap-2 flex-col text-white leading-tight font-semibold mb-4 justify-center">
          <motion.span 
            className="text-5xl md:text-8xl font-dm-sans"
            variants={itemVariants}
          >
            Innovate. Escape
          </motion.span>
          <motion.span 
            className="text-5xl md:text-8xl font-dm-sans"
            variants={itemVariants}
          >
            Mediocrity
          </motion.span>
        </div>
        <motion.p 
          className="text-white dark:text-gray-300 font-semibold mb-6 text-xl md:text-2xl font-dm-sans"
          variants={itemVariants}
        >
          We build digital experience that elevate your business.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block px-8 py-3 rounded-lg border border-white text-white font-bold text-xl md:text-2xl hover:bg-white hover:text-black transition-colors font-raleway"
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;