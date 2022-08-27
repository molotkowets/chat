import React from "react";
import "./sidebar.css";
import avatar from "../../asset/img/avatar.svg";
import search from "../../asset/icon/search.svg";
import UserItem from "../user-item/UserItem";
import { useContext } from "react";
import UserContext from "../context";

function Sidebar({ userId, setUserId }) {
  const { users } = useContext(UserContext);

  return (
    <div className="sidebar">
      <div className="header-sidebar contain-box">
        <img className="avatar" src={avatar} alt="avatar" />
        <div className="search">
          <img src={search} alt="search" />
          <input type="text" placeholder="Search or start new chat"></input>
        </div>
      </div>
      <div className="chats ">
        <h3>Chats</h3>
        <ul>
          {users.map((user, key) => (
            <UserItem
              setUserId={setUserId}
              user={user}
              key={key}
              currentUserId={userId}
            />
          ))}
        </ul>
        <div className="chater"></div>
      </div>
    </div>
  );
}

export default Sidebar;
