import { useAppInteraction } from "../../contexts";
import { GradientText } from "../UI";
import { AboutMeCards } from "./AboutMeCards";

import { AboutMeTextInfo } from "./AboutMeTextInfo";

export const About = () => {
  const { isAppReadyForInteraction } = useAppInteraction();

  if (!isAppReadyForInteraction) {
    return null;
  }

  return (
    <section id="about" className="section">
      <GradientText>About Me</GradientText>
      <AboutMeTextInfo />
      <AboutMeCards />
    </section>
  );
};
