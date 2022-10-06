import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import Comments from "./pages/comments/Comments";
import Designers from "./pages/designers/Designers";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import Users from "./pages/users/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="designers" element={<Designers/>}/>
          <Route path="comments" element={<Comments/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
