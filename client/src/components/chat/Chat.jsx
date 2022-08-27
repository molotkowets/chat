import React, { useContext, useEffect } from "react";
import "./chat.css";
import avatar from "../../asset/img/avatar.svg";
import Message from "../message/Message";
import UserContext from "../context";
import { useState } from "react";

function Chat({ userId }) {
  const [items, setItems] = useState([]);

  function get() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }

  console.log(items);

  const { users, setUsers } = useContext(UserContext);
  const user = users.find((u) => u.id === userId);
  const [message, setMessage] = useState("");
  let time = "2020-01-05 13:42:28.143137";
  function pushMessage() {
    let newList = [];
    newList.push(...users);
    users.map(
      (userMap, key) =>
        userMap.id === userId &&
        newList[key].messages.push({
          belongs: "my",
          created_at: time,
          value: message,
        })
    );
    setUsers(newList);
    setMessage("");
    localStorage.setItem("items", JSON.stringify(newList));
    console.log(newList);
  }

  function changeText(event) {
    setMessage(event.target.value);
  }
  return (
    <div className="chat">
      <div className="header-chat">
        <span className="verification">
          <img className="avatar" src={avatar} alt="" />
        </span>

        <p>Josefina</p>
      </div>
      <div className="input-message">
        <div className="messages">
          {user?.messages.map((text, key) => (
            <Message side={"left"} text={text} key={key} />
          ))}
        </div>

        <div className="chat-footer">
          <div>
            <textarea
              type="text"
              placeholder="Type your massage"
              onChange={changeText}
              value={message}
            />
            <button onClick={pushMessage}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
// onClick={()=>props.setUsers(valueMessage)}
export default Chat;
