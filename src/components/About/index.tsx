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
    <section
      id="about"
      className="min-h-dvh w-full py-8 px-10 overflow-hidden flex flex-col items-center justify-evenly gap-8 bg-primaryDark"
    >
      <GradientText>About Me</GradientText>
      <AboutMeTextInfo />
      <AboutMeCards />
    </section>
  );
};
