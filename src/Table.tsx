interface Columns extends Record<string, unknown> {
  key: string;
  format?(row: any): string;
}

interface TableProps<T> {
  data: T[];
  columns: Columns[];
  onRowSelection?(rowIds: string[]): void;
  selectedRows?: string[];
}

export const Table = <T extends Record<string, string | number>>({
  data,
  columns,
  onRowSelection,
  selectedRows
}: TableProps<T>) => {
  /**
   * @TODO implement row selection state
   */

  return (
    <table>
      {data.map((row) => (
        <tr>
          {columns.map(({ key, format }) => (
            <td>{format ? format(row) : row[key]}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};
