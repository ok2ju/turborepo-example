import { useContext, ChangeEvent } from "react";
import { Checkbox, RadioGroup, RadioItem } from "@te/core";
import { PlaygroundContext, ContextValues } from "./Context";

const useDefaultProps = (componentPropsRegex: RegExp, code?: string) => {
  const match = code?.match(componentPropsRegex) || [];

  if (match !== null) {
    return match[1];
  }

  return "";
};

export interface KnobProps {
  initialCode?: string;
  code?: string;
  setCode: (code: string) => void;
  component: string;
  name: string;
  definition: any;
}

const Knob = ({
  initialCode,
  code,
  setCode,
  component,
  name,
  definition,
}: KnobProps) => {
  const { knobs, setKnobs } = useContext(PlaygroundContext) as ContextValues;
  const componentPropsRegex = new RegExp(`<${component}(\\s?>|\\s[\\s\\S]*?>)`);
  const globalComponentPropsRegex = new RegExp(componentPropsRegex.source, "g");

  const defaultKnobProps = useDefaultProps(
    componentPropsRegex,
    initialCode
  ).slice(0, -1);

  const handleChange = (value: string | boolean) => {
    const isSelfClosingTag =
      defaultKnobProps.charAt(defaultKnobProps.length - 1) === "/";

    const parsedKnobProps = isSelfClosingTag
      ? defaultKnobProps.slice(0, -2)
      : defaultKnobProps;

    const newKnobs = {
      ...knobs,
      [component]: {
        ...(knobs as any)[component],
        ...{ [name]: value },
      },
    };

    const propString = parsedKnobProps.concat(
      Object.entries((newKnobs as any)[component]).reduce(
        (acc, [prop, value]) => {
          if (value === undefined) {
            return acc;
          }

          if (typeof value === "boolean") {
            return `${acc} ${prop}={${value}}`;
          }

          return `${acc} ${prop}="${value}"`;
        },
        ""
      )
    );

    setKnobs(newKnobs);

    if (isSelfClosingTag) {
      setCode(
        code?.replace(
          globalComponentPropsRegex,
          `<${component}${propString} />`
        ) || ""
      );
    } else {
      setCode(
        code?.replace(
          globalComponentPropsRegex,
          `<${component}${propString}>`
        ) || ""
      );
    }
  };

  if (definition.type.name === "boolean") {
    let checked = false;

    if (definition.defaultValue && definition.defaultValue.value) {
      if (definition.defaultValue.value === "true") {
        checked = true;
      } else if (typeof definition.defaultValue.value === "boolean") {
        checked = definition.defaultValue.value;
      }
    }

    return (
      <div className="my-3">
        <Checkbox
          label={name}
          defaultChecked={checked}
          onCheckedChange={handleChange}
        />
      </div>
    );
  }

  if (definition.type.name === "enum") {
    const values: Array<{ value: string }> = definition.type.value;
    const defaultValue = definition?.defaultValue?.value || undefined;

    return (
      <div className="my-3">
        <RadioGroup
          label={name}
          defaultValue={defaultValue}
          onValueChange={handleChange}
        >
          {values.map((val, idx) => (
            <RadioItem key={idx} label={val.value} value={val.value} />
          ))}
        </RadioGroup>
      </div>
    );
  }

  return (
    <div className="my-3">
      <p className="text-body1-short text-secondary">{name}</p>
      <p className="text-body1">Unkown type</p>
    </div>
  );
};

export default Knob;
