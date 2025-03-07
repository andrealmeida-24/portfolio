import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const AboutMeTextInfo = () => {
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
        className="text-primaryLight font-displayRegular text-md md:text-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
        }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        I'm a <span className="font-displayBold">Fullstack Web Developer</span>{" "}
        based in Lisbon. I specialize in Frontend Engineering, focusing on
        building{" "}
        <span className="font-displayBold">
          high quality digital experiences
        </span>{" "}
        through thoughtful design and{" "}
        <span className="font-displayBold">creative thinking</span>.
      </motion.p>
    </motion.div>
  );
};
