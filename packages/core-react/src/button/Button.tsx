import { SyntheticEvent } from "react";
import cx from "clsx";

export enum BUTTON_SIZE {
  sm = "sm",
  md = "md",
  lg = "lg",
}

const sizes = {
  [BUTTON_SIZE.sm]: "text-label-1 font-semibold px-4 h-[32px]",
  [BUTTON_SIZE.md]: "text-label-2 font-semibold px-5 h-[40px]",
  [BUTTON_SIZE.lg]: "text-label-2 font-semibold px-6 h-[48px]",
};

export enum BUTTON_TYPE {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  ghost = "ghost",
  danger = "danger",
}

const types = {
  [BUTTON_TYPE.primary]: cx(
    "text-white",
    "bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active",
    "border-2 border-transparent",
    "focus:border-focus focus:shadow-[inset_0_0_0_2px] focus:shadow-white",
    "disabled:text-on-color-disabled disabled:bg-button-disabled"
  ),
  [BUTTON_TYPE.secondary]: cx(
    "text-primary",
    "bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-active",
    "border-2 border-transparent",
    "focus:border-focus focus:shadow-[inset_0_0_0_2px] focus:shadow-white",
    "disabled:text-on-color-disabled disabled:bg-button-disabled"
  ),
  [BUTTON_TYPE.tertiary]: cx(
    "text-primary hover:text-on-color active:text-on-color focus:text-primary",
    "bg-white hover:bg-button-tertiary-hover active:bg-button-tertiary-active focus:bg-white",
    "border-[1px] border-focus",
    "disabled:text-on-color-disabled disabled:bg-button-disabled disabled:border-transparent"
  ),
  [BUTTON_TYPE.ghost]: cx(
    "text-primary",
    "hover:bg-button-secondary-hover",
    "disabled:text-on-color-disabled disabled:bg-transparent"
  ),
  [BUTTON_TYPE.danger]: cx(
    "text-on-color",
    "bg-button-danger-primary hover:bg-button-danger-hover active:bg-button-danger-active",
    "border-2 border-transparent",
    "focus:border-focus focus:shadow-[inset_0_0_0_2px] focus:shadow-white",
    "disabled:text-on-color-disabled disabled:bg-button-disabled"
  ),
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
  size = BUTTON_SIZE.md,
  type = BUTTON_TYPE.primary,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cx(
        sizes[size],
        types[type],
        "rounded-sm whitespace-nowrap",
        "disabled:cursor-not-allowed"
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
