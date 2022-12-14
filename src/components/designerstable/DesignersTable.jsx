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
import { fetchDesigners, fetchGeneral } from "../../redux/slices/designersSlice";
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
        <TableContainer sx={{ maxWidth: "100%", minHeight:"300px" }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell  sx={{ width: 120 }}  align="left">Имя</TableCell>
                <TableCell align="left">Рейтинг</TableCell>
                <TableCell align="left">Действие</TableCell>
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
                  <TableCell align="left">{item.employee_name}</TableCell>
                  <TableCell align="left">
                    <div className="rating">
                      <Rating
                        name="read-only"
                        value={item.rating}
                        precision={0.1}
                        readOnly
                      />
                      <p>{item.rating}</p>
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <Link
                      to={`/designers/${item.employee_id}`}
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
