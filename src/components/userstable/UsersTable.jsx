import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AppsIcon from "@mui/icons-material/Apps";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLeads,
  setCurrentPage,
  setUserItem,
} from "../../redux/slices/leadsSlice";
import "./userstable.scss";

import Pagination from "../pagination/Pagination";
import Spinner from "../spinner/Spinner";
import { Button } from "@mui/material";
import Widget from "../widget/Widget";
import UserModal from "../usermodal/UserModal";

const UsersTable = () => {
  const dispatch = useDispatch();
  const { items, status, totalPage, currentPage, searchParams } = useSelector(
    (state) => state.leads
  );

  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    dispatch(fetchLeads({ ...searchParams, page: currentPage }));
  }, [currentPage, searchParams]);

  const handlePageClick = (event) => {
    dispatch(setCurrentPage(event.selected + 1));
  };

  const onClickAction = (item) => {
    setOpen(true);
    dispatch(setUserItem(item));
  };

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <div className="userstable">
      <UserModal isOpen={open} onClickClose={() => setOpen(false)} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Телеграм ID</TableCell>
              <TableCell className="table" align="left">
                Имя
              </TableCell>
              <TableCell className="table" align="left">
                Фамилия
              </TableCell>
              <TableCell className="table" align="left">
                Телефон
              </TableCell>
              <TableCell className="table" align="left">
                Компания
              </TableCell>
              <TableCell className="table" align="center">
                Статус
              </TableCell>
              <TableCell className="table" align="center">
                Действие
              </TableCell>
              <TableCell className="table" align="center">
                Создан
              </TableCell>
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
                <TableCell className="table" align="left">
                  {item.name.slice(0, 20)}
                </TableCell>
                <TableCell className="table" align="left">
                  {item.surname.slice(0, 20)}
                </TableCell>
                <TableCell className="table" align="left">
                  {item.phone}
                </TableCell>
                <TableCell className="table" align="left">
                  {item.company}
                </TableCell>

                <TableCell className="table" align="center">
                  <div className={`status ${item.status}`}>
                    {item.status
                      ? item.status === "joined"
                        ? "Подписался"
                        : item.status === "start"
                        ? "Старт"
                        : item.status === "signed"
                        ? "Присоединился"
                        : ""
                      : ""}
                  </div>
                </TableCell>
                <TableCell className="table table-widget" align="center">
                  <Button size="small" onClick={() => onClickAction(item)}>
                    <AppsIcon />
                  </Button>
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
