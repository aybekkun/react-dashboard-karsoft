import React from "react";
import Widget from "../../components/widget/Widget";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="items">
        <Widget />
        <Widget />
        <Widget />
        <Widget />
        <Widget />
        <Widget />
      </div>
    </div>
  );
};

export default Home;
