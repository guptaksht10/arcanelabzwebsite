import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Assuming you have this constant file with your service data
import { workspaceData } from "../constants";

// Animation variants for the text content
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Animation variants for the image
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const WhatweDo = () => {
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
    <section id="whatwedo" className="bg-white w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Column - Sticky Title */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start p-12 md:sticky md:top-0 md:h-screen">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <h2 className="text-black text-6xl md:text-8xl font-bold leading-tight font-dm-sans">
            What We <br /> Do?
          </h2>
          <motion.p className="text-gray-700 mt-4 max-w-lg">
            From pixels to pipelines — we deliver complete digital solutions.
          </motion.p>
        </motion.div>
      </div>

      {/* Right Column - Scrollable content */}
      <div className="w-full md:w-1/2 overflow-y-auto h-screen pr-6 py-12 md:py-20">
        <div className="flex flex-col gap-20">
          {workspaceData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full rounded-xl"
                variants={imageVariants}
              />
              <span className="text-blue-600 text-lg font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-black text-4xl font-bold leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatweDo;