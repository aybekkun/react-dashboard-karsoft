import React from "react";
import "./designerstable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Rating } from "@mui/material";
import { Link , Outlet} from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 50, sortable:false },
  { field: "firstName", headerName: "Имя", width: 120, sortable:false },
  { field: "lastName", headerName: "Фамилия", width: 120, sortable:false },
  {
    field: "rating",
    headerName: "Рейтинг",
    width: 200,
    filterable: false,
    renderCell: (params) => {
      return (
        <div className="rating">
          <Rating
            name="read-only"
            value={params.row.rating}
            precision={0.1}
            readOnly
          />
          <p>{params.row.rating}</p>
        </div>
      );
    },
  },
  {
    field: "view",
    headerName: "Все оценки",
    flex:1,
    filterable: false,
    sortable: false,
    renderCell: (params) => {
      return (
        <Link to={`/designers/${params.row.id}`} className="designerstable-view">
          Посмотреть
        </Link>
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
      <div className="designerstable-box">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          autoHeight={true}
          disableColumnMenu
        />
      </div>
      <div className="designerstable-box">
        <Outlet/>
      </div>
    </div>
  );
};

export default DesignersTable;
