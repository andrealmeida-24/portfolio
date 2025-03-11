import { FC, ReactNode } from "react";
import { useAppInteraction } from "../../../contexts";

import { GradientText } from "../GradientText";
import { AnimatedSquaresBackground } from "../Backgrounds";

type SectionProps = {
  id: string;
  children: ReactNode;
  title?: string;
  className?: string;
  animatedBg?: boolean;
};

export const Section: FC<SectionProps> = ({
  id,
  children,
  title,
  className,
  animatedBg,
}) => {
  const { isAppReadyForInteraction } = useAppInteraction();

  if (!isAppReadyForInteraction) {
    return null;
  }

  return (
    <section id={id} className={`section ${className}`}>
      {animatedBg && <AnimatedSquaresBackground />}
      {title && <GradientText>{title}</GradientText>}
      {children}
    </section>
  );
};
