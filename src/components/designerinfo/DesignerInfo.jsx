import {
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDesigner } from "../../redux/slices/designersSlice";
import "./designerinfo.scss";
const DesignerInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.designers);
  React.useEffect(() => {
    dispatch(fetchDesigner(id));
  }, [id]);

  return (
    <Paper>
      <div className="designerinfo">
        <h2>Информация о дизайнере:</h2>
        <p>{info.name}</p>
        <hr />
        <h3>Оценили дизайнера:</h3>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Имя</TableCell>
                <TableCell align="left">Рейтинг</TableCell>
                <TableCell align="left">Телефон</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {info.ratings.map((item, i) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell align="left">{item.lead_name}</TableCell>
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
                  <TableCell component="th" scope="row">
                    {item.lead_phone}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
  );
};

export default DesignerInfo;
