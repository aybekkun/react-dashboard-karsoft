import { Rating } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { fetchDesigners } from "../../redux/slices/designersSlice";
import Spinner from "../spinner/Spinner";
import "./designerstable.scss";

const DesignersTable = () => {
  const dispatch = useDispatch();
  const { items, overalls, status } = useSelector((state) => state.designers);
  React.useEffect(() => {
    dispatch(fetchDesigners());
  }, []);
  
  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <div className="designerstable">
      <div className="designerstable-box">
        <TableContainer component={Paper}>
          <Table fullWidth aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Имя</TableCell>
                <TableCell align="left">Рейтинг</TableCell>
                <TableCell align="left">Действие</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, i) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="left">{item.name}</TableCell>
                  <TableCell align="left">
                    <div className="rating">
                      <Rating
                        name="read-only"
                        value={overalls[i].overall}
                        precision={0.1}
                        readOnly
                      />
                      <p>{overalls[i].overall}</p>
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <Link
                      to={`/designers/${item.id}`}
                      className="designerstable-view"
                    >
                      Посмотреть все оценки
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="designerstable-box">
        <Outlet />
      </div>
    </div>
  );
};

export default DesignersTable;
