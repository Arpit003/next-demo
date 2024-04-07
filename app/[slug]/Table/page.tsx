import React from "react";

const createData = (dataLength: number) => {
  let data = [];
  for (let i = 0; i < dataLength; i++) {
    data.push(i);
  }
  return data;
};

let data: Array<number> = createData(12);

const Table: React.FC = () => {
  return (
    <div className="table-container">
      <div className="grid-container">
        {data.map((item: number, index: number) => (
          <React.Fragment key={index}>
            <div className="cell">
              {`Row ${item + 1}`}
              <span className="tooltip">Tooltip {item + 1}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Table;
