import { useAppInteraction } from "../../contexts";
import { GradientText } from "../UI";
import { CardsStack } from "./CardsStack";
import { ExperiencesTextInfo } from "./ExperiencesTextInfo";

export const Experiences = () => {
  const { isAppReadyForInteraction } = useAppInteraction();

  if (!isAppReadyForInteraction) {
    return null;
  }

  return (
    <section id="experiences" className="section">
      <GradientText>Experiences</GradientText>
      <ExperiencesTextInfo />
      <CardsStack />
    </section>
  );
};
