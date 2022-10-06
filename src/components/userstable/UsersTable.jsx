import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import "./userstable.scss";

const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "tg_id",
    headerName: "Телеграм ID",
    flex: 1,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  { field: "name", headerName: "Имя", flex: 1, sortable: false },
  { field: "surname", headerName: "Фамилия", flex: 1, sortable: false },
  {
    field: "phone",
    headerName: "Телефон номер",
    width: 180,
    sortable: false,
    filterable: true,
  },
  { field: "company", headerName: "Компания", flex: 1, sortable: false },
  {
    field: "status",
    headerName: "Статус",
    width: 130,
    sortable: false,
    type: "singleSelect",
    valueOptions: ["start", "signed", "joined"],
    renderCell: (params) => {
      return (
        <div className={`status ${params.row.status}`}>{params.row.status}</div>
      );
    },
  },
  {
    field: "created_at",
    headerName: "Создан",
    type: "dateTime",
    flex: 2,
    sortable: false,
  
  },
];

const rows = [
  {
    id: 1,
    tg_id: 12341,
    phone: "+998913808080",
    company: "Intuza LTC",
    name: "Snow",
    surname: "Jon",
    status: "start",
    created_at: "20.12.2021",
  },
  {
    id: 2,
    tg_id: 12341,
    phone: "+998913808080",
    company: "Intuza LTC",
    name: "Lannister",
    surname: "Cersei",
    status: "signed",
    created_at: "20.10.2022",
  },
  {
    id: 3,
    tg_id: 12341,
    phone: "+998913808080",
    company: "Intuza LTC",
    name: "Lannister",
    surname: "Jaime",
    status: "joined",
    created_at: "20.12.2020",
  },
  {
    id: 4,
    tg_id: 12341,
    phone: "+998913808080",
    company: "Intuza LTC",
    name: "Stark",
    surname: "Arya",
    status: "signed",
    created_at: "01.12.2010",
  },
  {
    id: 5,
    tg_id: 12341,
    phone: "+998913808080",
    company: "Targaryen LTC",
    name: "Targaryen",
    surname: "Daenerys",
    status: "start",
    created_at: "01.12.2012",
  },
  {
    id: 6,
    tg_id: 12341,
    phone: "+998913808080",
    company: "Melisandre LTC",
    name: "Melisandre",
    surname: null,
    status: "start",
    created_at: "01.02.2014",
  },
  {
    id: 7,
    tg_id: 12341,
    phone: "+998913808080",
    company: "Clifford LTC",
    name: "Clifford",
    surname: "Ferrara",
    status: "signed",
    created_at: "10.02.2020",
  },
  {
    id: 8,
    tg_id: 12341,
    phone: "+998913808080",
    company: "IntuFrancesza LTC",
    name: "Frances",
    surname: "Rossini",
    status: "joined",
    created_at: "10.02.2020",
  },
  {
    id: 9,
    tg_id: 12341,
    phone: "+998913108080",
    company: "Arisla LTC",
    name: "Roxie",
    surname: "Harvey",
    status: "joined",
    created_at: "10.02.2020",
  },
  {
    id: 10,
    tg_id: 12341,
    phone: "+998913808080",
    company: "Lonadn LTC",
    name: "John",
    surname: "Doe",
    status: "joined",
    created_at: "10.02.2020",
  },
];

const UsersTable = () => {
  return (
    <div className="userstable">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        autoHeight={true}
        keepNonExistentRowsSelected={false}
        disableColumnSelector
      />
    </div>
  );
};

export default UsersTable;
