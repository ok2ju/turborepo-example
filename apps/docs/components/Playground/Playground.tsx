import { useState, ReactNode } from "react";
import { DocCodeBlock, Langs } from "../DocCodeBlock";

export interface PlaygroundProps {
  code?: string;
  children: ReactNode;
}

const Playground = ({ code, children }: PlaygroundProps) => {
  const [open, toggleOpen] = useState(false);

  const handleOpenCode = () => {
    toggleOpen(!open);
  };

  return (
    <div className="mb-8">
      <div className="w-full mb-4 relative">
        <div className="absolute inset-0 bg-[url('/grid-cell.svg')] [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] border border-border rounded-md" />
        <div className="relative flex items-center justify-center p-10 z-10">
          {children}
        </div>
        {code && (
          <div className="relative flex justify-end px-4 py-4 z-10">
            <button
              onClick={handleOpenCode}
              className="text-primary text-label-1"
            >
              {open ? "Hide" : "Show"} code
            </button>
          </div>
        )}
      </div>
      {code && open && <DocCodeBlock code={code} language={Langs.jsx} />}
    </div>
  );
};

export default Playground;
