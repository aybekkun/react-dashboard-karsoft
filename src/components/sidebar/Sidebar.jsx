import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
const Sidebar = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    if (window.confirm("Вы точно хотите выйти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Админ</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">Главная</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Меню</span>
            </li>
          </Link>
          <p className="title">Группа</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Люди</span>
            </li>
          </Link>
          <Link to="/designers" style={{ textDecoration: "none" }}>
            <li>
              <BrushOutlinedIcon className="icon" />
              <span>Дизайнеры</span>
            </li>
          </Link>
          <p className="title">Связь</p>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <BookmarkBorderOutlinedIcon className="icon" />
              <span>Заказы</span>
            </li>
          </Link>
          <Link to="/comments" style={{ textDecoration: "none" }}>
            <li>
              <ChatBubbleOutlineOutlinedIcon className="icon" />
              <span>Отзывы</span>
            </li>
          </Link>
    {/*       <Link to="/message" style={{ textDecoration: "none" }}>
            <li>
              <MailOutlineIcon className="icon" />
              <span>Написать письмо</span>
            </li>
          </Link> */}
          <p className="title">Профиль</p>
          <Link onClick={onLogout} to="/" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Выйти</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <span>Made By Karsoft.uz</span>
      </div>
    </div>
  );
};

export default Sidebar;
