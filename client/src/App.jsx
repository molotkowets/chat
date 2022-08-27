import "./App.css";
import Chat from "./components/chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import React, { useContext } from "react";
import UserContext from "./components/context";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const { users, setUsers } = useContext(UserContext);

  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const usersExist = JSON.parse(localStorage.getItem("items"))[0]
      .defaultValue;
    if (usersExist) {
      const parsedUsers = JSON.parse(localStorage.getItem("items"));
      setUsers(parsedUsers);
      if (!userId) {
        setUserId(parsedUsers[0].id);
      }
    } else {
      localStorage.setItem("items", JSON.stringify(users));
    }
  }, [setUsers, userId]);

  console.log(users);
  return (
    <div className="app">
      {!!userId && (
        <div className="container">
          <Sidebar userId={userId} setUserId={setUserId} />
          <Chat userId={userId} />
        </div>
      )}
    </div>
  );
}

export default App;
