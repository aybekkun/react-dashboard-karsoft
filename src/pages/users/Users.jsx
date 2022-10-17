import React from "react";
import Search from "../../components/search/Search";
import UsersTable from "../../components/userstable/UsersTable";
import "./users.scss";
const Users = () => {
  return (
    <div className="users">
      <Search />
      <UsersTable />
    </div>
  );
};

export default Users;
