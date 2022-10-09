import Search from "../search/Search";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import "./userstable.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads } from "../../redux/slices/leadsSlice";
import { CircularProgress } from "@mui/material";

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
    type: "date",
    flex: 2,
    sortable: false,
    renderCell: (params) => {
      return (
        <div>
          {new Date(params.row.created_at).toLocaleString("ru-RU", {
            timeZone: "UTC",
          })}
        </div>
      );
    },
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
  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.leads);

  React.useEffect(() => {
    dispatch(fetchLeads());
  }, []);

  if (status === "loading") {
    return (
      <div className="usertable">
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <div className="userstable">
      <Search />

      <DataGrid
        rows={items}
        columns={columns}
        pageSize={10}
        autoHeight={true}
        disableColumnMenu
      />
    </div>
  );
};

export default UsersTable;
