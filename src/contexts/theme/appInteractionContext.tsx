import { createContext } from "react";

export type AppInteractionContextType = {
  isAppReadyForInteraction: boolean;
  toggleIsAppReadyForInteraction: () => void;
};

export const AppInteractionContext = createContext<
  AppInteractionContextType | undefined
>(undefined);
