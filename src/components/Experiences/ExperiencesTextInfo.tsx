import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const ExperiencesTextInfo = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.75, once: false });

  return (
    <motion.div
      ref={containerRef}
      id="aboutContainer"
      className="h-fit w-full md:w-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.p
        id="aboutSubtitle"
        className="text-primaryLight selection:text-primary font-displayRegular text-md md:text-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
        }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        I have worked with some of the best industry leaders to help build the
        most innovative and top-notch products.
      </motion.p>
    </motion.div>
  );
};
