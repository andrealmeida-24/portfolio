import { FC, ReactNode, useState } from "react";
import { AppInteractionContext } from "./appInteractionContext";

export const AppInteractionProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAppReadyForInteraction, setIsAppReadyForInteraction] =
    useState<boolean>(false);

  const toggleIsAppReadyForInteraction = () => {
    setIsAppReadyForInteraction(!isAppReadyForInteraction);
  };

  return (
    <AppInteractionContext.Provider
      value={{ isAppReadyForInteraction, toggleIsAppReadyForInteraction }}
    >
      {children}
    </AppInteractionContext.Provider>
  );
};
