// @ts-ignore
import spacing from "@te/tailwind-config/spacing";

const headerCellClasses =
  "border-b border-gray-30 text-heading-1-short p-4 pb-3 text-gray-80 text-left";
const bodyCellClasses =
  "border-b border-gray-30 p-4 text-body2-short text-gray-60";

const SpacingTable = () => {
  return (
    <table className="border-collapse table-auto w-full mt-5 mb-5">
      <thead>
        <tr>
          <th className={headerCellClasses}>Name</th>
          <th className={`${headerCellClasses} pl-8`}>Size</th>
          <th className={`${headerCellClasses} pl-8`}>Pixels</th>
          <th className={`${headerCellClasses} pl-8`}>Preview</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(spacing).map((key, idx) => (
          <tr key={idx}>
            <td className={bodyCellClasses}>{key}</td>
            <td className={`${bodyCellClasses} pl-8`}>{spacing[key]}</td>
            <td className={`${bodyCellClasses} pl-8`}>
              {parseFloat(spacing[key]) * 16}px
            </td>
            <td className={`${bodyCellClasses} pl-8`}>
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
