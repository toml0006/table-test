import { useState } from "react";
import "./styles.css";

import { Table } from "./Table";

const SHAPES = ["circle", "square", "triangle", "nonagon"];

interface MockRow extends Record<string, string | number> {
  shape: string;
  height: number;
  width: number;
}

const mockData = (size: number = 10) =>
  [...new Array(size)].map(
    (item, index) =>
      ({
        shape: SHAPES[~~((Math.random() * SHAPES.length) % SHAPES.length)],
        height: ~~(Math.random() * 100),
        width: ~~(Math.random() * 100)
      } as MockRow)
  );

export default function App() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  /**
   * @TODO implement shape specific area calculation
   */
  const shapeArea = (row: MockRow) => `calculate ${row.shape} area`;

  const data = mockData();
  const columns = [
    { key: "shape" },
    { key: "height", editable: true },
    { key: "width", editable: true },
    { key: "area", format: shapeArea }
  ];

  const handleRowSelection = (rowIds: string[]) =>
    setSelectedRows(selectedRows);

  return (
    <div className="App">
      <Table<MockRow>
        data={data}
        columns={columns}
        onRowSelection={handleRowSelection}
        selectedRows={selectedRows}
      />
      <hr />
      <button disabled={selectedRows.length === 0}>Save Selection</button>
    </div>
  );
}
