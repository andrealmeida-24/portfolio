import { motion } from "framer-motion";
import { GradientText } from "../UI";
import { useAppInteraction } from "../../contexts";

export const HeroText = () => {
  const { isAppReadyForInteraction } = useAppInteraction();

  return (
    <>
      <div className="absolute top-[15vh] w-full flex-col flex-center">
        <motion.h1
          id="hero-title"
          className="uppercase font-displayBold text-3xl md:text-6xl text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: isAppReadyForInteraction ? 0 : 1 }}
          transition={{
            delay: isAppReadyForInteraction ? 0 : 0.25,
            ease: "easeInOut",
            duration: isAppReadyForInteraction ? 0 : 1,
          }}
        >
          Welcome stranger
        </motion.h1>
        <motion.p
          id="hero-subtitle"
          className="font-displayRegular w-[90%] text-sm md:text-lg text-primaryDark"
          initial={{ opacity: 0 }}
          animate={{ opacity: isAppReadyForInteraction ? 0 : 1 }}
          transition={{
            delay: isAppReadyForInteraction ? 0 : 0.5,
            ease: "easeInOut",
            duration: isAppReadyForInteraction ? 0 : 1,
          }}
        >
          Please click on the computer to start the adventure!
        </motion.p>
      </div>

      <motion.div
        className="absolute w-full top-[15vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAppReadyForInteraction ? 1 : 0 }}
        transition={{
          delay: isAppReadyForInteraction ? 0.25 : 0,
          ease: "easeInOut",
          duration: isAppReadyForInteraction ? 0.25 : 0,
        }}
      >
        <motion.h1
          id="hero-title-open"
          className="uppercase font-displayBold text-5xl md:text-6xl text-primaryLight"
        >
          I'm a <GradientText>software engineer</GradientText>
        </motion.h1>
      </motion.div>

      <motion.div
        className="w-full flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAppReadyForInteraction ? 1 : 0 }}
        transition={{
          delay: 0.5,
          ease: "easeInOut",
          duration: 1,
        }}
      >
        <motion.h1
          id="hero-subtitle-open"
          className="absolute bottom-[5vh] w-[90%] uppercase font-displayRegular text-md md:text-2xl text-primaryLight"
        >
          Who designs & creates digital experiences.
        </motion.h1>
      </motion.div>
    </>
  );
};
