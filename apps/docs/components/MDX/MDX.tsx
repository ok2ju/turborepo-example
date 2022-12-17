import { PropsWithChildren, ReactElement } from "react";
import Link from "next/link";
import { DocCodeBlock, Langs } from "../DocCodeBlock";
import Table from "../Table";
import SpacingTable from "../SpacingTable";
import ColorsList from "../ColorsList";
import ColorTokensTable from "../ColorTokensTable";
import Playground from "../Playground";
import * as Demos from "../demos";

interface HeadingProps {
  id: string;
}

export const MDXComponents = {
  h1: ({ id, children }: PropsWithChildren<HeadingProps>) => (
    <Link href={`#${id}`}>
      <h1 id={id} className="text-heading-6 text-primary mb-6">
        {children}
      </h1>
    </Link>
  ),
  h2: ({ id, children }: PropsWithChildren<HeadingProps>) => (
    <Link href={`#${id}`}>
      <h2 id={id} className="text-heading-5 text-primary mt-9 mb-4">
        {children}
      </h2>
    </Link>
  ),
  h3: ({ id, children }: PropsWithChildren<HeadingProps>) => (
    <Link href={`#${id}`}>
      <h3 id={id} className="text-heading-4 text-primary mt-9 mb-6">
        {children}
      </h3>
    </Link>
  ),
  h4: ({ id, children }: PropsWithChildren<HeadingProps>) => (
    <Link href={`#${id}`}>
      <h4 id={id} className="text-heading-3 text-primary mt-9 mb-5">
        {children}
      </h4>
    </Link>
  ),
  h5: ({ id, children }: PropsWithChildren<HeadingProps>) => (
    <Link href={`#${id}`}>
      <h5 id={id} className="text-heading-2 text-primary mt-9 mb-5">
        {children}
      </h5>
    </Link>
  ),
  h6: ({ id, children }: PropsWithChildren<HeadingProps>) => (
    <Link href={`#${id}`}>
      <h6 id={id} className="text-heading-1 text-primary mt-9 mb-4">
        {children}
      </h6>
    </Link>
  ),
  p: ({ children }: PropsWithChildren) => (
    <p className="text-body-2 text-primary mb-4">{children}</p>
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
        className="text-code-1 p-1 bg-[#fbfaff] text-[#5746af] rounded-sm"
      />
    );
  },
  a: (props: any) => (
    <a {...props} className="text-body-2 text-blue-70 hover:underline" />
  ),
  li: (props: any) => <li {...props} className="text-body-2 [&_ul]:ml-6" />,
  CodeBlock: DocCodeBlock,
  Description: ({
    children,
  }: {
    children: ReactElement<{ children: any }>;
  }) => {
    const childText =
      typeof children === "string" ? children : children.props.children;
    return <p className="text-body-2 text-gray-60 mt-4 mb-9">{childText}</p>;
  },
  Table,
  SpacingTable,
  ColorsList,
  ColorTokensTable,
  Playground,
  ...Demos,
};
