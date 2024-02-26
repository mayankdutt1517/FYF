import React from "react";
import "../Css/notify.css";
import { useContext } from "react";
import { WebContext } from "./Context";

const Notify = () => {
  const { Message, noticlass } = useContext(WebContext);
  return (
    <div className={`${noticlass}`}>
      <center>{Message}</center>
    </div>
  );
};

export default Notify;
