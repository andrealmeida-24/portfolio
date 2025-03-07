import { FC, ReactNode } from "react";
import { useAppInteraction } from "../../../contexts";
import { SectionTitleProps } from "./SectionTitle";
import { GradientText } from "../GradientText";

type SectionProps = {
  id: string;
  children: ReactNode;
  backgroundMode: "light" | "dark";
  svg?: JSX.Element;
} & SectionTitleProps;

export const Section: FC<SectionProps> = ({
  id,
  children,
  backgroundMode,
  title,
  svg,
}) => {
  const { isAppReadyForInteraction } = useAppInteraction();

  if (!isAppReadyForInteraction) {
    return null;
  }

  return (
    <section
      id={id}
      className={`min-h-dvh w-full py-8 px-10 overflow-hidden relative flex flex-col items-center justify-evenly gap-8 ${
        backgroundMode === "light" ? "bg-primaryLight" : "bg-primaryDark"
      }`}
    >
      {svg}
      <GradientText>{title}</GradientText>
      {/* <SectionTitle title={title} /> */}
      {children}
    </section>
  );
};
