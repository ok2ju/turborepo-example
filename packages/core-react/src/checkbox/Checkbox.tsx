import { useId } from "react";
import { Root, Indicator, CheckboxProps } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export interface TeCheckboxProps extends CheckboxProps {
  label: string;
}

export const Checkbox = ({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled,
  required,
  onCheckedChange,
}: TeCheckboxProps) => {
  const id = useId();

  return (
    <div className="flex items-center">
      <Root
        id={id}
        className="bg-white w-[18px] h-[18px] rounded-sm flex items-center justify-center border border-base"
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        onCheckedChange={onCheckedChange}
      >
        <Indicator className="text-steelGray-80">
          <CheckIcon />
        </Indicator>
      </Root>
      <label
        htmlFor={id}
        className="pl-3 text-steelGray-90 text-body1-short cursor-pointer select-none"
      >
        {label}
      </label>
    </div>
  );
};
