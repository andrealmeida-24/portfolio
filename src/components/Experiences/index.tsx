import { Section } from "../UI";
import { CardsStack } from "./CardsStack";
import { ExperiencesTextInfo } from "./ExperiencesTextInfo";

export const Experiences = () => {
  return (
    <Section id="experiences" title="Experiences">
      <ExperiencesTextInfo />
      <CardsStack />
    </Section>
  );
};
