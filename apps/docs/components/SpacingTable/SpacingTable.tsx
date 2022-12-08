// @ts-ignore
import spacing from "@te/tailwind-config/spacing";

const SpacingTable = () => {
  return (
    <table className="border-collapse table-auto w-full mt-5 mb-5">
      <thead>
        <tr>
          <th className="border-b border-gray-30 font-medium p-4 pb-3 text-gray-80 text-left">
            Name
          </th>
          <th className="border-b border-gray-30 font-medium p-4 pl-8 pb-3 text-gray-80 text-left">
            Size
          </th>
          <th className="border-b border-gray-30 font-medium p-4 pl-8 pb-3 text-gray-80 text-left">
            Pixels
          </th>
          <th className="border-b border-gray-30 font-medium p-4 pl-8 pb-3 text-gray-80 text-left">
            Preview
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(spacing).map((key, idx) => (
          <tr key={idx}>
            <td className="border-b border-gray-30 p-4 text-gray-60">{key}</td>
            <td className="border-b border-gray-30 p-4 pl-8 text-gray-60">
              {spacing[key]}
            </td>
            <td className="border-b border-gray-30 p-4 pl-8 text-gray-60">
              {parseFloat(spacing[key]) * 16}px
            </td>
            <td className="border-b border-gray-30 p-4 pl-8 text-gray-60">
              <div className="h-5 bg-blue-60" style={{ width: spacing[key] }} />
            </td>
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
};

export default SpacingTable;
