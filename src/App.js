import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import DesignerInfo from "./components/designerinfo/DesignerInfo";
import Login from "./layouts/login/Login";
import MainLayout from "./layouts/main/MainLayout";
import Comments from "./pages/comments/Comments";
import Designers from "./pages/designers/Designers";
import Home from "./pages/home/Home";
import Message from "./pages/message/Message";
import NotFound from "./pages/notfound/NotFound";
import Orders from "./pages/orders/Orders";
import Users from "./pages/users/Users";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/authSlice";
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  if (!isAuth && !window.localStorage.getItem("token")) {
    return (
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="designers" element={<Designers />}>
            <Route path=":id" element={<DesignerInfo />} />
          </Route>
          <Route path="comments" element={<Comments />} />
          <Route path="message" element={<Message />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
