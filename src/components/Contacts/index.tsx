import { motion, useMotionValue, useTransform } from "motion/react";

import { Card } from "./Card";
import { Links } from "./Links";

import { Section } from "../UI";
import { MouseEvent } from "react";
import { TrademarkText } from "./TrademarkText";

export const Contacts = () => {
  const x = useMotionValue(100);
  const y = useMotionValue(100);

  const rotateX = useTransform(y, [0, 400], [25, -25]);
  const rotateY = useTransform(x, [0, 400], [-25, 25]);

  const handleMouseMovement = (event: MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <Section id="contacts" title="Contacts" animatedBg className="relative">
      <motion.div onMouseMove={handleMouseMovement}>
        <Card rotationX={rotateX} rotationY={rotateY} />
        <Links />
        <TrademarkText />
      </motion.div>
    </Section>
  );
};
