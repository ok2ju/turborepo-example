import { useState, createContext, PropsWithChildren } from "react";

interface KnobsType {
  [key: string]: any;
}

export interface ContextValues {
  knobs: KnobsType;
  setKnobs: (knobs: KnobsType) => void;
}

export const PlaygroundContext = createContext<ContextValues | {}>({});

export const PlaygroundContextProvider = ({ children }: PropsWithChildren) => {
  const [knobs, setKnobs] = useState({});

  return (
    <PlaygroundContext.Provider value={{ knobs, setKnobs }}>
      {children}
    </PlaygroundContext.Provider>
  );
};
