import React from "react";
import { listUsers } from "../defaultUsers.js";

// console.log(listUsers, messagesUsers);

const UserContext = React.createContext(listUsers);

export default UserContext;
