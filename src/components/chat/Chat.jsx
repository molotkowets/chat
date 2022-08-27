import React, { useContext } from "react";
import "./chat.css";
import avatar from "../../asset/img/avatar.svg";
import Message from "../message/Message";
import UserContext from "../context";
import { useState } from "react";
import send from "../../asset/icon/send.svg";

function Chat({ userId }) {
  // const [items, setItems] = useState([]);

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  async function getJoke() {
    const { value } = await fetch(
      "https://api.chucknorris.io/jokes/random"
    ).then((res) => res.json());
    return new Promise((resolve) => {
      const randMs = getRandomArbitrary(10e3, 15e3);
      setTimeout(() => {
        resolve(value);
      }, randMs);
    });
  }

  async function pushMessage() {
    let newList = [];
    newList.push(...users);

    users.map(
      (userMap, key) =>
        userMap.id === userId &&
        newList[key].messages.push({
          belongs: "my",
          created_at: new Date(),
          value: message,
        })
    );

    pushFakeMassageResult(userId);

    setUsers(newList);
    setMessage("");
    localStorage.setItem("items", JSON.stringify(newList));
  }
  async function pushFakeMassageResult(userId) {
    let newList = [];
    newList.push(...users);
    const joke = await getJoke();

    users.map(
      (userMap, key) =>
        userMap.id === userId &&
        newList[key].messages.push({
          belongs: "sender",
          created_at: new Date(),
          value: joke,
        })
    );

    setUsers(newList);
    setMessage("");
    localStorage.setItem("items", JSON.stringify(newList));
  }
  const { users, setUsers } = useContext(UserContext);
  const user = users.find((u) => u.id === userId);
  const [message, setMessage] = useState("");

  function changeText(event) {
    setMessage(event.target.value);
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      pushMessage();
    }
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
          <div className="containerMessages">
            {user?.messages.map((text, key) => (
              <Message side={"left"} text={text} key={key} />
            ))}
          </div>
        </div>

        <div className="chat-footer">
          <div>
            <textarea
              type="text"
              placeholder="Type your massage"
              onChange={changeText}
              onKeyDown={handleKeyPress}
              value={message}
            />

            {!!message.length && (
              <button className="sendButton" onClick={pushMessage}>
                <img className="send" src={send} alt="send" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chat;
