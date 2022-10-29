import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, setCurrentPage } from "../../redux/slices/ordersSlice";
import Pagination from "../../components/pagination/Pagination";
import "./orderstable.scss";
import Spinner from "../spinner/Spinner";
const OrdersTable = () => {
  const dispatch = useDispatch();
  const { items, status, currentPage, totalPage } = useSelector(
    (state) => state.orders
  );

  const handlePageClick = (event) => {
    dispatch(setCurrentPage(event.selected + 1));
  };

  React.useEffect(() => {
    const { data } = dispatch(fetchOrders({ currentPage }));
    console.log(data);
  }, []);
  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <div className="orderstable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 100 }}>ID</TableCell>
              <TableCell align="left">Имя</TableCell>
              <TableCell align="left">Фамилия</TableCell>
              <TableCell align="left">Телефон</TableCell>
              <TableCell align="left">Компания</TableCell>
              <TableCell align="left">Имя заказа</TableCell>
              <TableCell align="center">Статус</TableCell>
              <TableCell align="center">Создан</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, i) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="left">{item.lead[0].name.slice(0,20)}</TableCell>
                <TableCell align="left">{item.lead[0].surname.slice(0,20)}</TableCell>
                <TableCell align="left">{item.lead[0].phone}</TableCell>
                <TableCell align="left">{item.lead[0].company}</TableCell>
                <TableCell align="left">{item.menu[0].name}</TableCell>
                <TableCell align="center">
                  <div className={`status ${item.status}`}>
                    {item.status === 0 ? "Не выполнен" : "Выполнин"}
                  </div>
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

export default OrdersTable;
