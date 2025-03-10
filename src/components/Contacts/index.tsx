import { motion, useMotionValue, useTransform } from "motion/react";

import { Card } from "./Card";
import { Links } from "./Links";

import { useAppInteraction } from "../../contexts";
import { GradientText, AnimatedSquaresBackground } from "../UI";
import { MouseEvent } from "react";

export const Contacts = () => {
  const { isAppReadyForInteraction } = useAppInteraction();

  const x = useMotionValue(100);
  const y = useMotionValue(100);

  const rotateX = useTransform(y, [0, 400], [25, -25]);
  const rotateY = useTransform(x, [0, 400], [-25, 25]);

  const handleMouseMovement = (event: MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  if (!isAppReadyForInteraction) {
    return null;
  }

  return (
    <motion.section
      id="contacts"
      className="min-h-dvh w-full py-8 px-10 overflow-hidden relative flex flex-col items-center justify-evenly gap-8 bg-primaryDark"
      onMouseMove={handleMouseMovement}
    >
      <AnimatedSquaresBackground />
      <GradientText>Contacts</GradientText>
      <Card rotationX={rotateX} rotationY={rotateY} />
      <Links />
      <span className="text-center font-displayRegular text-primaryLight text-sm md:text-lg">
        © André Almeida, All rights reserved.
      </span>
    </motion.section>
  );
};
