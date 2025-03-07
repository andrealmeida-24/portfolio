import { useState } from "react";
import { Section } from "../UI";
import { AnimatedFocus } from "./AnimatedFocus";
import { SkillCards } from "./SkillCards";
import { SkillsBackground } from "./Background";

export const Skills = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeIndexChangeHandler = (newIndex: number) => {
    setActiveIndex(newIndex);
  };
  return (
    <Section
      id="skills"
      title="Skills"
      backgroundMode="light"
      svg={<SkillsBackground />}
    >
      <AnimatedFocus
        currentIndex={activeIndex}
        changeCurrentIndexHandler={activeIndexChangeHandler}
      />
      <SkillCards activeIndex={activeIndex} />
    </Section>
  );
};
