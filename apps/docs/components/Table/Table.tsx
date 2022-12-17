export interface HeaderCell {
  key: string;
  title: string;
}

export interface TableProps {
  header: Array<HeaderCell>;
  data: Array<{ [key: string]: string }>;
}

const Table = ({ header, data }: TableProps) => {
  return (
    <table className="border-collapse table-auto w-full mt-5 mb-5">
      <thead>
        <tr>
          {header.map((hcell, idx) => (
            <th
              key={idx}
              className="text-heading-1-short border-b border-border px-5 py-4 text-primary text-left"
            >
              {hcell.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={rowIdx} className="group">
            {Object.keys(row).map((key, cellIdx) => (
              <td
                key={cellIdx}
                className="border-b border-border px-5 py-[14px] text-body1 text-primary group-last:border-0"
              >
                {row[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
