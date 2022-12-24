// @ts-ignore
import colors from "@te/tailwind-config/colors";
import Copyable from "../Copyable";

const ColorsList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 mb-10">
      {Object.keys(colors)
        .filter((c) => c !== "white" && c !== "black")
        .map((color, colorIdx) => (
          <div key={colorIdx} className="relative">
            <div className="mb-5">
              <h5 className="text-heading-2 text-h5rimary capitalize">
                {color}
              </h5>
            </div>
            <div className="flex-1 grid grid-cols-5 gap-x-6 gap-y-6">
              {Object.keys(colors[color]).map((tint, tintIdx) => (
                <Copyable key={tintIdx} text={`${color}-${tint}`}>
                  <div className="relative cursor-pointer">
                    <div
                      className="h-9 w-full rounded-sm"
                      style={{ backgroundColor: colors[color][tint] }}
                    />
                    <div className="flex flex-col mt-3">
                      <span className="text-heading-1-short text-primary mb-2">
                        {color}-{tint}
                      </span>
                      <span className="text-body1-short text-secondary uppercase">
                        {colors[color][tint]}
                      </span>
                    </div>
                  </div>
                </Copyable>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ColorsList;
