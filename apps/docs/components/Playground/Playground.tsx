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
      <div className="w-full mb-4 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="flex items-center justify-center p-10">{children}</div>
        {code && (
          <div className="flex justify-end px-4 py-4">
            <button onClick={handleOpenCode} className="text-white text-xs">
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
