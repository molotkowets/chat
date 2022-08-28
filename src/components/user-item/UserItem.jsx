import React from "react";
import "./user-item.css";

function UserItem({ setUserId, user, currentUserId }) {
  const isActive = user.id === currentUserId;

  return (
    <li
      onClick={() => setUserId(user.id)}
      className={`${isActive ? "active" : ""} item`}
    >
      <div className="user-block">
        <img className="avatar-item" src={user.avatar} alt="" />

        <span>
          <p className="username">{user.username}</p>
          <p className="user-massage">{user.messages.at(-1).value}</p>
        </span>
      </div>
      <p className="date">Feb 18, 2017</p>
    </li>
  );
}

export default UserItem;
