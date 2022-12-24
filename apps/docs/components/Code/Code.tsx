import { PropsWithChildren } from "react";
import Block from "./Block";
import Copyable from "../Copyable";
import { CODE_TYPE, CodeProps } from "./types";

const Code = ({
  type = CODE_TYPE.primary,
  copyable = true,
  children,
}: PropsWithChildren<CodeProps>) => {
  return copyable ? (
    <Copyable text={typeof children === "string" ? children : ""}>
      <Block type={type} copyable={copyable}>
        {children}
      </Block>
    </Copyable>
  ) : (
    <Block type={type} copyable={copyable}>
      {children}
    </Block>
  );
};

export default Code;
