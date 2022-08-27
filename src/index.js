import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserContext from "./components/context";
import { listUsers } from "./defaultUsers";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Main() {
  const [users, setUsers] = useState(listUsers);
  // const text = "hello";
  return (
    <React.StrictMode>
      <UserContext.Provider value={{ users, setUsers }}>
        <App />
      </UserContext.Provider>
    </React.StrictMode>
  );
}

root.render(<Main />);
