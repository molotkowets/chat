import React, { useState } from "react";
import "./sidebar.css";
import avatar from "../../asset/img/avatar.svg";
import search from "../../asset/icon/search.svg";
import UserItem from "../user-item/UserItem";
import { useContext } from "react";
import UserContext from "../context";

function Sidebar({ userId, setUserId }) {
  const { users } = useContext(UserContext);
  const [filterValue, setFilterValue] = useState("");

  function changeText(event) {
    setFilterValue(event.target.value);
  }

  let filteredUsers = users;

  if (filterValue.length) {
    filteredUsers = filteredUsers.filter((u) =>
      u.username.toLowerCase().startsWith(filterValue.toLowerCase())
    );
  }

  filteredUsers = filteredUsers.sort((a, b) => {
    const { created_at: aCreatedAt } = a.messages.at(-1);
    const { created_at: bCreatedAt } = b.messages.at(-1);

    return new Date(aCreatedAt) > new Date(bCreatedAt) ? -1 : 1;
  });

  return (
    <div className="sidebar">
      <div className="header-sidebar contain-box">
        <img className="avatar" src={avatar} alt="avatar" />
        <div className="search">
          <img src={search} alt="search" />
          <input
            type="text"
            placeholder="Search or start new chat"
            onChange={changeText}
          ></input>
        </div>
      </div>
      <div className="chats ">
        <h3>Chats</h3>
        <ul>
          {filteredUsers.map((user, key) => (
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
