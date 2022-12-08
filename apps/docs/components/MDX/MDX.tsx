import { PropsWithChildren, ReactElement } from "react";
import Link from "next/link";
import { DocCodeBlock, Langs } from "../DocCodeBlock";
import Table from "../Table";
import SpacingTable from "../SpacingTable";
import ColorsList from "../ColorsList";
import ColorTokensTable from "../ColorTokensTable";

interface HeadingProps {
  id: string;
}

export const MDXComponents = {
  h1: ({ id, children }: PropsWithChildren<HeadingProps>) => (
    <Link href={`#${id}`}>
      <h1 id={id} className="text-4xl font-medium text-gray-90 mb-3">
        {children}
      </h1>
    </Link>
  ),
  h2: ({ id, children }: PropsWithChildren<HeadingProps>) => (
    <Link href={`#${id}`}>
      <h2 id={id} className="text-3xl font-medium text-gray-90 mt-9 mb-3">
        {children}
      </h2>
    </Link>
  ),
  h3: ({ id, children }: PropsWithChildren<HeadingProps>) => (
    <Link href={`#${id}`}>
      <h3 id={id} className="text-2xl font-medium text-gray-90 mt-9 mb-3">
        {children}
      </h3>
    </Link>
  ),
  h4: ({ id, children }: PropsWithChildren<HeadingProps>) => (
    <Link href={`#${id}`}>
      <h4 id={id} className="text-xl font-medium text-gray-90 mt-9 mb-3">
        {children}
      </h4>
    </Link>
  ),
  h5: ({ id, children }: PropsWithChildren<HeadingProps>) => (
    <Link href={`#${id}`}>
      <h5 id={id} className="text-lg font-medium text-gray-90 mt-9 mb-3">
        {children}
      </h5>
    </Link>
  ),
  h6: ({ id, children }: PropsWithChildren<HeadingProps>) => (
    <Link href={`#${id}`}>
      <h6 id={id} className="text-base font-medium text-gray-90 mt-9 mb-3">
        {children}
      </h6>
    </Link>
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
  a: (props: any) => <a {...props} className="text-blue-70 hover:underline" />,
  li: (props: any) => <li {...props} className="[&_ul]:ml-6" />,
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
  ColorTokensTable,
};
