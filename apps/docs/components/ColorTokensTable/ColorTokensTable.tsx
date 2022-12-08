// @ts-ignore
import colors from "@te/tailwind-config/colors";

const header = [
  {
    key: "token",
    title: "Token",
  },
  {
    key: "usage",
    title: "Usage",
  },
  {
    key: "value",
    title: "Value",
  },
  {
    key: "preview",
    title: "Preview",
  },
];

export interface ColorTokensTableProps {
  data: Array<{ [key: string]: string }>;
}

const ColorTokensTable = ({ data }: ColorTokensTableProps) => {
  const getPreviewColorValue = (token: string) => {
    const [color, tint] = token.split("-");
    return colors[color][tint];
  };

  return (
    <table className="border-collapse table-auto w-full mt-5 mb-5">
      <thead>
        <tr>
          {header.map((hcell, idx) => (
            <th
              key={idx}
              className="border-b border-gray-30 font-medium p-4 pb-3 text-gray-80 text-left"
            >
              {hcell.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={rowIdx}>
            <td className="w-[220px] border-b border-gray-30 p-4 text-gray-60">
              <span className="text-sm px-3 py-2 bg-gray-30 rounded">
                {row.token}
              </span>
            </td>
            <td className="w-[320px] border-b border-gray-30 p-4 text-gray-60">
              {row.usage}
            </td>
            <td className="border-b border-gray-30 p-4 text-gray-60">
              <p>{row.value}</p>
              <p>{getPreviewColorValue(row.value)}</p>
            </td>
            <td className="border-b border-gray-30 p-4 text-gray-60">
              <div
                className="w-[50px] h-[50px] rounded-full"
                style={{ backgroundColor: getPreviewColorValue(row.value) }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ColorTokensTable;
