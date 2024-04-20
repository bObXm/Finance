import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import { CompanyIncomeStatement } from "../../dtos";
import { CircularProgress } from "@mui/material";

type Props = {
  incomeStatement: CompanyIncomeStatement[] | undefined;
};

const Table: React.FC<Props> = ({ incomeStatement }): JSX.Element => {
  let data = incomeStatement?.map((el, index) => {
    return { id: index, ...el };
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "date", headerName: "Date", type: "number", flex: 1 },
    { field: "revenue", headerName: "Revenue", type: "number", flex: 1 },
    { field: "grossProfit", headerName: "Gross Profit", type: "number", flex: 1},
    { field: "eps", headerName: "EPS", type: "number", flex: 1 },
  ];

  return (
    <div style={{ height: 400, width: "100%", display: "flex" }}>
      {incomeStatement ? (
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{pagination: {paginationModel: { page: 0, pageSize: 5 } }}}
          pageSizeOptions={[5, 10]}
        />
      ) : (
        <CircularProgress color="success" />
      )}
    </div>
  );
};

export default Table;