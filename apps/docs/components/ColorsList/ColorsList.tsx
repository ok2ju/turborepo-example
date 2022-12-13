// @ts-ignore
import colors from "@te/tailwind-config/colors";

const ColorsList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 mb-8">
      {Object.keys(colors).map((color, colorIdx) => (
        <div key={colorIdx} className="relative">
          <div className="mb-5">
            <p className="text-base font-medium capitalize">{color}</p>
          </div>
          <div className="flex-1 grid grid-cols-5 gap-x-6 gap-y-6">
            {Object.keys(colors[color]).map((tint, tintIdx) => (
              <div key={tintIdx} className="relative cursor-pointer">
                <div
                  className="h-9 w-full rounded"
                  style={{ backgroundColor: colors[color][tint] }}
                />
                <div className="flex flex-col mt-3">
                  <span className="text-heading-1-short text-gray-80">
                    {color}-{tint}
                  </span>
                  <span className="text-body1-short text-gray-50 uppercase">
                    {colors[color][tint]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorsList;
