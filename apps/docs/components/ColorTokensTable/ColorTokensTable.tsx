// @ts-ignore
import colors from "@te/tailwind-config/colors";
import Code from "../Code";

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

const bodyCellClasses =
  "border-b border-border px-5 py-[10px] text-body1 text-primary group-last:border-0";

const ColorTokensTable = ({ data }: ColorTokensTableProps) => {
  const getPreviewColorValue = (token: string) => {
    const [color, tint] = token.split("-");
    return colors[color][tint];
  };

  return (
    <table className="border-collapse table-auto w-full mt-6 mb-6">
      <thead>
        <tr>
          {header.map((hcell, idx) => (
            <th
              key={idx}
              className="border-b border-border text-heading-1-short px-5 py-4 text-primary text-left"
            >
              {hcell.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={rowIdx} className="group">
            <td className={`w-[220px] ${bodyCellClasses}`}>
              <Code>{row.token}</Code>
            </td>
            <td className={`w-[320px] ${bodyCellClasses}`}>{row.usage}</td>
            <td className={bodyCellClasses}>
              <p className="whitespace-nowrap">{row.value}</p>
            </td>
            <td className={`w-[100px] ${bodyCellClasses}`}>
              <div
                className="w-7 h-7 rounded-full border border-border"
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
