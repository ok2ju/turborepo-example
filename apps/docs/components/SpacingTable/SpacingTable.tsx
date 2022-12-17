// @ts-ignore
import spacing from "@te/tailwind-config/spacing";

const headerCellClasses =
  "text-heading-1-short border-b border-border px-5 py-4 text-primary text-left";
const bodyCellClasses =
  "border-b border-border px-5 py-[14px] text-body1 text-primary group-last:border-0";

const SpacingTable = () => {
  return (
    <table className="border-collapse table-auto w-full mt-5 mb-5">
      <thead>
        <tr>
          <th className={headerCellClasses}>Name</th>
          <th className={headerCellClasses}>Size</th>
          <th className={headerCellClasses}>Pixels</th>
          <th className={headerCellClasses}>Preview</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(spacing).map((key, idx) => (
          <tr key={idx} className="group">
            <td className={bodyCellClasses}>{key}</td>
            <td className={bodyCellClasses}>{spacing[key]}</td>
            <td className={bodyCellClasses}>
              {parseFloat(spacing[key]) * 16}px
            </td>
            <td className={bodyCellClasses}>
              <div className="h-5 bg-red-60" style={{ width: spacing[key] }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SpacingTable;
