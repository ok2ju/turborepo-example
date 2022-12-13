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
              className="text-heading-1-short border-b border-gray-30 p-4 pb-3 text-gray-80 text-left"
            >
              {hcell.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {Object.keys(row).map((key, cellIdx) => (
              <td
                key={cellIdx}
                className="border-b border-gray-30 p-4 text-body2-short text-gray-60"
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
