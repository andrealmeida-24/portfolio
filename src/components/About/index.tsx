import { Section } from "../UI";
import { AboutMeCards } from "./AboutMeCards";

import { AboutMeTextInfo } from "./AboutMeTextInfo";

export const About = () => {
  return (
    <Section id="about" title="About Me">
      <AboutMeTextInfo />
      <AboutMeCards />
    </Section>
  );
};
