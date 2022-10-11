import React from "react";
import "./submenu.scss"
const SubMenu = ({ name, description, count }) => {
  return (
    <li className="submenu">
      <div className="submenu__item">
        <h4>{name}</h4>
        <h5>Использовали {count} людей</h5>
        <p>Описание услуги:</p>
        <p className="description">{description}</p>
      </div>
    </li>
  );
};

export default SubMenu;
