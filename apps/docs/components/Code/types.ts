import { SyntheticEvent } from "react";

export enum CODE_TYPE {
  primary = "primary",
  secondary = "secondary",
}

export interface CodeProps {
  type?: CODE_TYPE.primary | CODE_TYPE.secondary;
  copyable?: boolean;
  onClick?: (event: SyntheticEvent, text: string) => void;
}
