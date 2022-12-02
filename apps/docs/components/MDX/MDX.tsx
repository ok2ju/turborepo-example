import { ReactNode } from "react";

interface MDXComponentProps {
  children: ReactNode;
}

export const MDXComponents = {
  h1: ({ children }: MDXComponentProps) => (
    <h1 className="text-6xl text-gray-90 mb-2">{children}</h1>
  ),
  h2: ({ children }: MDXComponentProps) => (
    <h2 className="text-5xl text-gray-90 mb-2">{children}</h2>
  ),
  h3: ({ children }: MDXComponentProps) => (
    <h3 className="text-4xl text-gray-90 mb-2">{children}</h3>
  ),
  h4: ({ children }: MDXComponentProps) => (
    <h4 className="text-3xl text-gray-90 mb-2">{children}</h4>
  ),
  h5: ({ children }: MDXComponentProps) => (
    <h5 className="text-2xl text-gray-90 mb-2">{children}</h5>
  ),
  h6: ({ children }: MDXComponentProps) => (
    <h6 className="text-xl text-gray-90 mb-2">{children}</h6>
  ),
  p: ({ children }: MDXComponentProps) => (
    <p className="text-base text-gray-80 mb-2">{children}</p>
  ),
};
