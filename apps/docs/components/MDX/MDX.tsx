import { PropsWithChildren, ReactElement } from "react";
import { DocCodeBlock, Langs } from "../DocCodeBlock";
import Table from "../Table";
import SpacingTable from "../SpacingTable";
import ColorsList from "../ColorsList";

export const MDXComponents = {
  h1: ({ children }: PropsWithChildren) => (
    <h1 className="text-4xl font-medium text-gray-90 mb-3">{children}</h1>
  ),
  h2: ({ children }: PropsWithChildren) => (
    <h2 className="text-3xl font-medium text-gray-90 mt-9 mb-3">{children}</h2>
  ),
  h3: ({ children }: PropsWithChildren) => (
    <h3 className="text-2xl font-medium text-gray-90 mt-9 mb-3">{children}</h3>
  ),
  h4: ({ children }: PropsWithChildren) => (
    <h4 className="text-xl font-medium text-gray-90 mt-9 mb-3">{children}</h4>
  ),
  h5: ({ children }: PropsWithChildren) => (
    <h5 className="text-lg font-medium text-gray-90 mt-9 mb-3">{children}</h5>
  ),
  h6: ({ children }: PropsWithChildren) => (
    <h6 className="text-base font-medium text-gray-90 mt-9 mb-3">{children}</h6>
  ),
  p: ({ children }: PropsWithChildren) => (
    <p className="text-lg font-light text-gray-80 mb-4">{children}</p>
  ),
  code: (props: PropsWithChildren<{ className: string }>) => {
    const { className, children } = props;

    if (className) {
      const lang = className.split("-")[1] as keyof typeof Langs;
      const code = typeof children === "string" ? children : "";
      return <DocCodeBlock language={Langs[lang]} code={code} />;
    }
    return (
      <code
        {...props}
        className="text-sm p-1 bg-[#fbfaff] text-[#5746af] rounded-sm"
      />
    );
  },
  CodeBlock: DocCodeBlock,
  Description: ({
    children,
  }: {
    children: ReactElement<{ children: any }>;
  }) => {
    const childText =
      typeof children === "string" ? children : children.props.children;
    return (
      <p className="text-xl font-light text-gray-60 mt-3 mb-9">{childText}</p>
    );
  },
  Table,
  SpacingTable,
  ColorsList,
};
