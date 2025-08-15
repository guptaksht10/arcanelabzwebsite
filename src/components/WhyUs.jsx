import React, { useEffect } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FaHammer, FaBoxOpen, FaHeart } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Data for the cards
const cards = [
  {
    icon: <FaHammer className="text-3xl text-white" />,
    title: "Build From Scratch. Scaled to Dominate",
    text: "No templates. No shortcuts. We engineer custom solutions that grow as fast as you do."
  },
  {
    icon: <GiSparkles className="text-3xl text-white" />,
    title: "Designs That Command Attention",
    text: "Our UI/UX doesn’t just look good — it drives action, builds trust, and leaves a lasting impression."
  },
  {
    icon: <FaBoxOpen className="text-3xl text-white" />,
    title: "Everything You Need. All in One Place",
    text: "From brand identity to full-stack infra — we own every pixel, every line of code, end-to-end."
  },
  {
    icon: <FaHeart className="text-3xl text-white" />,
    title: "We Don’t Work For You. We Work With You",
    text: "Think of us as your extended tech team — proactive, invested, and always pushing forward."
  }
];

// Animation variants for the main heading
const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Animation variants for the card container
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of the child cards
      delayChildren: 0.3 // Delay the cards' animation after the heading
    },
  },
};

// Animation variants for the individual cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const WhyUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjusted threshold to a smaller value for earlier trigger
  });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="whyus" className="relative w-full max-w-screen-xl mx-auto py-20 px-6">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
      >
        {/* Heading with a subtle underline */}
        <motion.h2 
          className="text-6xl md:text-8xl font-extrabold font-dm-sans text-white mb-12 relative inline-block text-left"
          variants={headingVariants}
        >
          Why Us?
          <span className="block h-1 w-full bg-white absolute -bottom-2 left-0 scale-x-0 origin-left"></span>
        </motion.h2>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10"
          variants={cardContainerVariants}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 shadow-lg p-6 rounded-2xl relative overflow-hidden transition-transform border border-gray-800"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }} // Corrected scale value for a more subtle effect
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-10">
                {card.icon}
                <HiOutlineArrowUpRight className="text-white text-3xl" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-6">{card.title}</h3>
              <p className="text-gray-400 text-lg">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyUs;