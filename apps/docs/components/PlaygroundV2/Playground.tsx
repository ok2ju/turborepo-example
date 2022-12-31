import { useState, PropsWithChildren } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import * as TeComponents from "@te/core";
import { PlaygroundContextProvider } from "./Context";
import Knobs from "./Knobs";

export interface PlaygroundProps {
  knobs: { [key: string]: Array<string> };
}

const Playground = ({
  knobs,
  children,
}: PropsWithChildren<PlaygroundProps>) => {
  const [code, setCode] = useState(children?.toString());
  const [initialCode] = useState(code);

  return (
    <PlaygroundContextProvider>
      <LiveProvider code={code} noInline={false} scope={{ ...TeComponents }}>
        <div className="w-full flex border border-base rounded-md">
          <div className="relative flex-1">
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
        <LiveEditor onChange={(updatedCode) => setCode(updatedCode)} />
        <LiveError />
      </LiveProvider>
    </PlaygroundContextProvider>
  );
};

export default Playground;
