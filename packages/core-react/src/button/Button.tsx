import { SyntheticEvent } from "react";

export enum BUTTON_SIZE {
  small = "small",
  default = "default",
  big = "big",
}

const sizes = {
  [BUTTON_SIZE.small]: "text-label-1 px-4 py-3",
  [BUTTON_SIZE.default]: "text-label-1 px-5 py-4",
  [BUTTON_SIZE.big]: "text-label-1 px-6 py-4",
};

export enum BUTTON_TYPE {
  primary = "primary",
  secondary = "secondary",
  danger = "danger",
}

const types = {
  [BUTTON_TYPE.primary]: "bg-gray-100 hover:bg-gray-80 text-white",
  [BUTTON_TYPE.secondary]: "bg-gray-20 hover:bg-gray-30 text-black",
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
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-sm disabled:text-gray-50 disabled:bg-gray-30 disabled:cursor-not-allowed ${sizes[size]} ${types[type]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
