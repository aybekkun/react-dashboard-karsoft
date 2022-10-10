import { CircularProgress } from "@mui/material";
import React from "react";
import "./spinner.scss";
const Spinner = () => {
  return (
    <div className="spinner">
      <CircularProgress className="icon" color="primary" />
    </div>
  );
};

export default Spinner;
