import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads, setCurrentPage } from "../../redux/slices/leadsSlice";
import Search from "../search/Search";
import "./userstable.scss";

import Pagination from "../pagination/Pagination";
import Spinner from "../spinner/Spinner";

const UsersTable = () => {
  const dispatch = useDispatch();
  const { items, status, totalPage, currentPage } = useSelector(
    (state) => state.leads
  );

  React.useEffect(() => {
    dispatch(fetchLeads({ page: currentPage }));
  }, [currentPage]);

  const handlePageClick = (event) => {
    dispatch(setCurrentPage(event.selected + 1));
  };

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <div className="userstable">
      <Search />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 100 }}>Телеграм ID</TableCell>
              <TableCell align="left">Имя</TableCell>
              <TableCell align="left">Фамилия</TableCell>
              <TableCell align="left">Телефон</TableCell>
              <TableCell align="left">Компания</TableCell>
              <TableCell align="center">Статус</TableCell>
              <TableCell align="center">Создан</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.tg_id}
                </TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.surname}</TableCell>
                <TableCell align="left">{item.phone}</TableCell>
                <TableCell align="left">{item.company}</TableCell>
                <TableCell align="center">
                  <div className={`status ${item.status}`}>{item.status}</div>
                </TableCell>
                <TableCell align="center">
                  {new Date(item.created_at).toLocaleString("ru-RU", {
                    timeZone: "UTC",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        onPageChange={handlePageClick}
        forcePage={currentPage}
        pageCount={totalPage}
      />
    </div>
  );
};

export default UsersTable;
