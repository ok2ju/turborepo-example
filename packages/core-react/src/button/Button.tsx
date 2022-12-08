import { SyntheticEvent } from "react";

export enum SIZE {
  small = "small",
  default = "default",
  medium = "medium",
  big = "big",
}

const sizes = {
  [SIZE.small]: "text-xs px-5 py-2",
  [SIZE.default]: "text-sm px-5 py-2",
  [SIZE.medium]: "text-base px-5 py-3",
  [SIZE.big]: "text-base px-5 py-3",
};

export enum TYPE {
  primary = "primary",
  secondary = "secondary",
  danger = "danger",
}

const types = {
  [TYPE.primary]: "bg-blue-60 hover:bg-blue-70 text-white",
  [TYPE.secondary]: "bg-blue-60 hover:bg-blue-70 text-white",
  [TYPE.danger]: "bg-red-50 hover:bg-red-60 text-white",
};

interface ButtonProps {
  title: string;
  size?: SIZE;
  type?: TYPE;
  disabled?: boolean;
  onClick?: (event: SyntheticEvent) => void;
}

export const Button = ({
  title,
  size = SIZE.default,
  type = TYPE.primary,
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
