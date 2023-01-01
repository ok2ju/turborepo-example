import { useState, PropsWithChildren } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import * as TeComponents from "@te/core";
import { PlaygroundContextProvider } from "./Context";
import Knobs from "./Knobs";
import { ScrollArea } from "../ScrollArea";

export interface PlaygroundProps {
  knobs: { [key: string]: Array<string> };
}

// Used to reset default `LiveEditor` styles
const liveEditorTheme = { plain: {}, styles: [] };

const Playground = ({
  knobs,
  children,
}: PropsWithChildren<PlaygroundProps>) => {
  const [code, setCode] = useState(children?.toString());
  const [initialCode] = useState(code);

  return (
    <PlaygroundContextProvider>
      <LiveProvider
        code={code}
        noInline={false}
        scope={{ ...TeComponents }}
        theme={liveEditorTheme}
      >
        <div className="w-full flex border border-base mb-5">
          <div className="relative flex flex-1 items-center justify-center">
            <div className="absolute inset-0 bg-[url('/grid-cell.svg')] [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
            <div className="relative flex items-center justify-center p-10 z-10">
              <LivePreview />
            </div>
          </div>
          <div className="w-[240px] p-5 border-l border-base">
            <Knobs
              initialCode={initialCode}
              code={code}
              setCode={setCode}
              knobs={knobs}
            />
          </div>
        </div>
        <ScrollArea
          style={{
            maxHeight: "80vh",
          }}
        >
          <LiveEditor onChange={(updatedCode) => setCode(updatedCode)} />
        </ScrollArea>
        <LiveError />
      </LiveProvider>
    </PlaygroundContextProvider>
  );
};

export default Playground;
