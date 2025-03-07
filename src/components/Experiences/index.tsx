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
    <section
      id="experiences"
      className="min-h-dvh w-full py-8 px-10 overflow-hidden flex flex-col items-center justify-evenly gap-8 bg-primaryDark"
    >
      <GradientText>Experiences</GradientText>
      <ExperiencesTextInfo />
      <CardsStack />
    </section>
  );
};
