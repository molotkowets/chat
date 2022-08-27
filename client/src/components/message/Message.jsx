import React from "react";
import "./message.css";

function Message(props) {
  function float(belongs) {
    let cl;
    belongs === "sender" ? (cl = "float-left") : (cl = "float-right");
    return cl;
  }

  return (
    <div className={float(props.text.belongs) + " message"}>
      <span>{props.text.value}</span>
    </div>
  );
}
export default Message;
