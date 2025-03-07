import { useContext } from "react";
import {
  AppInteractionContext,
  AppInteractionContextType,
} from "./appInteractionContext";

export const useAppInteraction = (): AppInteractionContextType => {
  const context = useContext(AppInteractionContext);

  if (!context) {
    throw new Error(
      "useAppInteraction must be used within a AppInteractionProvider"
    );
  }
  return context;
};
