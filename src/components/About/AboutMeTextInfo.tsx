import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { IN_VIEW_TRIGGER_ANIMATION_AMOUNT } from "../../utils";

export const AboutMeTextInfo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(containerRef, {
    amount: IN_VIEW_TRIGGER_ANIMATION_AMOUNT,
    once: false,
  });

  return (
    <motion.div
      ref={containerRef}
      id="aboutContainer"
      className="section-text"
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
