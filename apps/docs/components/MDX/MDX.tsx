import { PropsWithChildren, ReactElement } from "react";

export const MDXComponents = {
  h1: ({ children }: PropsWithChildren) => (
    <h1 className="text-4xl font-medium text-gray-90 mb-2">{children}</h1>
  ),
  h2: ({ children }: PropsWithChildren) => (
    <h2 className="text-3xl font-medium text-gray-90 mb-2">{children}</h2>
  ),
  h3: ({ children }: PropsWithChildren) => (
    <h3 className="text-2xl font-medium text-gray-90 mb-2">{children}</h3>
  ),
  h4: ({ children }: PropsWithChildren) => (
    <h4 className="text-xl font-medium text-gray-90 mb-2">{children}</h4>
  ),
  h5: ({ children }: PropsWithChildren) => (
    <h5 className="text-lg font-medium text-gray-90 mb-2">{children}</h5>
  ),
  h6: ({ children }: PropsWithChildren) => (
    <h6 className="text-base font-medium text-gray-90 mb-2">{children}</h6>
  ),
  p: ({ children }: PropsWithChildren) => (
    <p className="text-lg font-light text-gray-80 mb-2">{children}</p>
  ),
  Description: ({
    children,
  }: {
    children: ReactElement<{ children: any }>;
  }) => {
    const childText =
      typeof children === "string" ? children : children.props.children;
    return (
      <p className="text-xl font-light text-gray-60 mt-2 mb-12">{childText}</p>
    );
  },
};
