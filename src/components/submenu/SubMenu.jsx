import { Paper } from "@mui/material";
import React from "react";
import "./submenu.scss";
const SubMenu = ({ name, count }) => {

  return (
    <Paper>
      <div className="submenu">
        <h3>
          {name}
        </h3>
          <span>{count}</span>
      </div>
    </Paper>
  );
};

export default SubMenu;
