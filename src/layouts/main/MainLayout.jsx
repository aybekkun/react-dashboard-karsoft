import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./mainlayout.scss"
const MainLayout = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="mainContainer">
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  );
};

export default MainLayout;
