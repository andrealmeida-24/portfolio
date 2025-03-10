import React, { FC } from "react";

import {
  AppInteractionContext,
  AppInteractionContextType,
} from "./theme/appInteractionContext";

type RenderWithContextProps = {
  children: React.ReactNode;
  contextValue: AppInteractionContextType;
};

export const RenderWithContext: FC<RenderWithContextProps> = ({
  children,
  contextValue,
}) => {
  return (
    <AppInteractionContext.Provider value={contextValue}>
      {children}
    </AppInteractionContext.Provider>
  );
};
