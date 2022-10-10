import { Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/authSlice";
import { Navigate } from 'react-router-dom';
import "./login.scss";
const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("phone", phone);
    fd.append("password", password);

    const data = await dispatch(fetchAuth(fd));
    console.log("data");
    if (!data.payload) {
      return alert("Не удалось авторизоваться!");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login">
      <h2>Войти в систему</h2>
      <form onSubmit={onLogin}>
        <TextField
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input"
          type="text"
          required
          label="Phone"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          label="Password"
          type="password"
          autoComplete="current-password"
          required
        />
        <Button type="submit" variant="outlined">
          Войти
        </Button>
      </form>
    </div>
  );
};

export default Login;
