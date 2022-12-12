import { SyntheticEvent } from "react";

export enum BUTTON_SIZE {
  small = "small",
  default = "default",
  medium = "medium",
  big = "big",
}

const sizes = {
  [BUTTON_SIZE.small]: "text-xs px-5 py-2",
  [BUTTON_SIZE.default]: "text-sm px-5 py-2",
  [BUTTON_SIZE.medium]: "text-base px-5 py-3",
  [BUTTON_SIZE.big]: "text-base px-5 py-3",
};

export enum BUTTON_TYPE {
  primary = "primary",
  secondary = "secondary",
  danger = "danger",
}

const types = {
  [BUTTON_TYPE.primary]: "bg-blue-60 hover:bg-blue-70 text-white",
  [BUTTON_TYPE.secondary]: "bg-blue-60 hover:bg-blue-70 text-white",
  [BUTTON_TYPE.danger]: "bg-red-50 hover:bg-red-60 text-white",
};

interface ButtonProps {
  title: string;
  size?: BUTTON_SIZE;
  type?: BUTTON_TYPE;
  disabled?: boolean;
  onClick?: (event: SyntheticEvent) => void;
}

export const Button = ({
  title,
  size = BUTTON_SIZE.default,
  type = BUTTON_TYPE.primary,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-lg disabled:text-gray-50 disabled:bg-gray-30 disabled:cursor-not-allowed ${sizes[size]} ${types[type]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
