import React from "react";
import "./designers.scss";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import DesignersTable from "../../components/designerstable/DesignersTable";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import { fetchGeneral } from "../../redux/slices/designersSlice";
const Designers = () => {
  const dispatch  = useDispatch();
  const { disignersCount, middleOverall } = useSelector(
    (state) => state.designers
  );
  React.useEffect(() => {
    dispatch(fetchGeneral());
  }, []);

  return (
    <div className="designers">
      <div className="items">
        <div className="item">
          <PeopleAltOutlinedIcon sx={{ color: "#0C53B7" }} className="icon" />
          <h3>{disignersCount}</h3>
          <h6>Количество Дизайнеров</h6>
        </div>
        <div className="item">
          <StarBorderOutlinedIcon sx={{ color: "#F7E92D" }} className="icon" />
          <h3>{middleOverall.toFixed(1) }</h3>
          <h6>Cредняя оценка</h6>
        </div>
        {/*       <div className="item">
          <LocalFireDepartmentOutlinedIcon
            sx={{ color: "#cd5740" }}
            className="icon"
          />
          <h3>{bestDesigner}</h3>
          <h6>Самый лучший</h6>
        </div> */}
      </div>
      <DesignersTable />
    </div>
  );
};

export default Designers;
