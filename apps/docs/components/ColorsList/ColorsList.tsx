// @ts-ignore
import colors from "@te/tailwind-config/colors";

const ColorsList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 mb-8">
      {Object.keys(colors).map((color, colorIdx) => (
        <div key={colorIdx} className="flex space-y-0 space-x-4">
          <div className="w-12">
            <p className="text-base font-medium capitalize">{color}</p>
          </div>
          <div className="flex-1 grid grid-cols-5 gap-x-4 gap-y-3">
            {Object.keys(colors[color]).map((tint, tintIdx) => (
              <div key={tintIdx} className="relative cursor-pointer">
                <div
                  className="h-10 w-full rounded"
                  style={{ backgroundColor: colors[color][tint] }}
                />
                <div className="flex justify-between mt-3">
                  <span className="text-sm text-gray-80">{tint}</span>
                  <span className="text-sm text-gray-60">
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
