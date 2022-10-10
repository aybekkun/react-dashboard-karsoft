import { Paper } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const DesignerInfo = () => {
  const { id } = useParams();
  
  return (
    <Paper>
      <div className="designerinfo">
        <h2>{id}</h2>
        <p>Smacher</p>
      </div>
    </Paper>
  );
};

export default DesignerInfo;
