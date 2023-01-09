import { PropsWithChildren } from "react";
import cx from "clsx";
import { CODE_TYPE, CodeProps } from "./types";

const types = {
  [CODE_TYPE.primary]: "bg-steelGray-10",
  [CODE_TYPE.secondary]: "bg-steelGray-30",
};

const Block = ({
  type = CODE_TYPE.primary,
  copyable = true,
  children,
}: PropsWithChildren<CodeProps>) => {
  return (
    <code
      className={cx(
        `text-body1 text-primary px-3 py-2 rounded-[3px] whitespace-nowrap ${types[type]}`,
        {
          "cursor-pointer": copyable,
        }
      )}
    >
      {children}
    </code>
  );
};

export default Block;
