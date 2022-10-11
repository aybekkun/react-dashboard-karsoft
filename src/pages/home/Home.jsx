import React from "react";
import MenuItem from "../../components/menuitem/MenuItem";
import Widget from "../../components/widget/Widget";
import { fetchMenus } from "../../redux/slices/menusSlice.js";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const { menuItems } = useSelector((state) => state.menus);

  React.useEffect(() => {
    dispatch(fetchMenus());
  }, []);
  console.log(menuItems);
  return (
    <div className="home">
      {menuItems.map((item) => ( <MenuItem key={item.id} {...item} />))}
    </div>
  );
};

export default Home;
