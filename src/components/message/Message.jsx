import React from "react";
import "./message.css";
import { format } from "date-fns";

function Message({ text }) {
  function float(belongs) {
    let cl;
    belongs === "sender" ? (cl = "float-left") : (cl = "float-right");
    return cl;
  }

  return (
    <div className={float(text.belongs) + " message"}>
      <span>{text.value}</span>
      <p className="dateMess">{format(new Date(text.created_at), "PP")}</p>
    </div>
  );
}
export default Message;
