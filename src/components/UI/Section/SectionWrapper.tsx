import { FC, ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
};

export const SectionWrapper: FC<SectionWrapperProps> = ({ children }) => {
  return <>{children}</>;
};
