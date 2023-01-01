import { useId } from "react";
import {
  Root,
  Item,
  Indicator,
  RadioGroupProps,
  RadioGroupItemProps,
} from "@radix-ui/react-radio-group";

export interface TeRadioGroupProps extends RadioGroupProps {
  label?: string;
}

export const RadioGroup = ({
  label,
  name,
  required,
  disabled,
  dir,
  orientation,
  loop,
  defaultValue,
  value,
  onValueChange,
  children,
}: TeRadioGroupProps) => (
  <Root
    name={name}
    required={required}
    disabled={disabled}
    dir={dir}
    orientation={orientation}
    loop={loop}
    defaultValue={defaultValue}
    value={value}
    onValueChange={onValueChange}
    className="flex flex-col gap-3"
  >
    {label && <h1>{label}</h1>}
    {children}
  </Root>
);

export interface TeRadioItemProps extends RadioGroupItemProps {
  label: string;
}

export const RadioItem = ({
  label,
  value,
  disabled,
  required,
}: TeRadioItemProps) => {
  const id = useId();

  return (
    <div className="flex items-center">
      <Item
        id={id}
        value={value}
        disabled={disabled}
        required={required}
        className="bg-white border border-base w-[18px] h-[18px] rounded-full"
      >
        <Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-full after:bg-steelGray-80" />
      </Item>
      <label
        htmlFor={id}
        className="pl-3 text-steelGray-90 text-body1-short cursor-pointer select-none"
      >
        {label}
      </label>
    </div>
  );
};
