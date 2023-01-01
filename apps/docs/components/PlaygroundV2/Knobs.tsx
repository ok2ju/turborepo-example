import Knob from "./Knob";
import metadata from "../../data/components.info.json";

interface KnobsProps {
  initialCode?: string;
  code?: string;
  setCode: (code: string) => void;
  knobs: { [key: string]: Array<string> };
}

const Knobs = ({ initialCode, code, setCode, knobs }: KnobsProps) => {
  const requestedKnobs: Array<any> = Object.keys(knobs).map((component) => {
    const definition = (metadata as any)[component];
    const targetProps: { [key: string]: {} } = {};

    if (!definition) {
      return [component, []];
    }

    knobs[component].forEach((knob) => {
      const prop = definition.props[knob];
      if (prop && prop.type) {
        targetProps[knob] = prop;
      }
    });

    return [component, targetProps];
  });

  return (
    <div>
      {requestedKnobs.map(([component, cknobs], idx) => (
        <div key={idx}>
          <h1 className="text-heading-1-short py-3 border-b border-base">
            {component}
          </h1>
          {Object.keys(cknobs).map((k, index) => (
            <Knob
              key={index}
              initialCode={initialCode}
              code={code}
              setCode={setCode}
              component={component}
              name={k}
              definition={cknobs[k]}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Knobs;
