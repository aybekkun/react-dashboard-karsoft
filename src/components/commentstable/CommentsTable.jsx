import React from "react";
import "./commentstable.scss";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/commentsSlice";
import Pagination from "../../components/pagination/Pagination";
import Spinner from "../spinner/Spinner";
import { fetchComments } from "../../redux/slices/commentsSlice";
const CommentsTable = () => {
  const dispatch = useDispatch();
  const { items, status, currentPage, totalPage } = useSelector(
    (state) => state.comments
  );

  const handlePageClick = (event) => {
    dispatch(setCurrentPage(event.selected + 1));
  };

  React.useEffect(() => {
    const { data } = dispatch(fetchComments({ currentPage }));
    console.log(data);
  }, []);
  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <div className="CommentsTable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 70 }}>ID</TableCell>
              <TableCell sx={{ width: 120 }} align="left">Имя</TableCell>
              <TableCell sx={{ width: 120 }}align="left">Фамилия</TableCell>
              <TableCell align="left">Телефон</TableCell>
              <TableCell align="left">Компания</TableCell>
              <TableCell align="left">Отзыв</TableCell>
              <TableCell align="center">Создан</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, i) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ width: 70 }} component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell sx={{ width: 120 }} align="left">{item.lead[0].name}</TableCell>
                <TableCell sx={{ width: 120 }} align="left">{item.lead[0].surname}</TableCell>
                <TableCell sx={{ width: 120 }} align="left">{item.lead[0].phone}</TableCell>
                <TableCell align="left">{item.lead[0].company}</TableCell>
                <TableCell sx={{ width: 200 }} align="left">{item.review}</TableCell>
                <TableCell align="center">
                  {new Date(item.lead[0].created_at).toLocaleString("ru-RU", {
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

export default CommentsTable;
