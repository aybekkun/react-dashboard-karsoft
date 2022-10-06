import React from "react";
import "./designerstable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Rating } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Имя", width: 130 },
  { field: "lastName", headerName: "Фамилия", width: 130 },
  {
    field: "rating",
    headerName: "Рейтинг",
    width:200,
    filterable: false ,
    renderCell: (params) => {
      return  (
        <div className="rating">
            <Rating name="read-only" value={params.row.rating} precision={0.1} readOnly />
            <p>{params.row.rating}</p>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", rating: 5 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", rating: 3.2 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", rating: 5 },
  { id: 4, lastName: "Stark", firstName: "Arya", rating: 3.4 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", rating: 5 },
  { id: 6, lastName: "Melisandre", firstName: null, rating: 4.5 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", rating: 5 },
  { id: 8, lastName: "Frances", firstName: "Rossini", rating: 1.2 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", rating: 4.9 },
  { id: 10, lastName: "John", firstName: "Doe", rating: 5 },
];
const DesignersTable = () => {
  return (
    <div className="designerstable">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        autoHeight={true}
        keepNonExistentRowsSelected={false}
        disableColumnSelector
      
      />
    </div>
  );
};

export default DesignersTable;
