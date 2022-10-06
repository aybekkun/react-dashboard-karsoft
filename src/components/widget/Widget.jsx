import React from "react";
import { Link } from "react-router-dom";
import "./widget.scss";

const Widget = () => {
  return (
    <div className="widget">
      <h3>Услуги</h3>
      <p>123</p>
      <Link to="/">
    Посмотреть 
      </Link>
    </div>
  );
};

export default Widget;
