import { FC } from "react";

export type SectionTitleProps = {
  title: string;
};

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
  <h1 className="relative font-displayBold text-5xl md:text-6xl z-100 text-primary text-center">
    {title}
  </h1>
);
