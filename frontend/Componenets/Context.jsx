import { createContext, useState, useEffect } from "react";
import object from "./ob";

export const WebContext = createContext(null);

export const ContextProvider = (props) => {
  const [currcart, setcart] = useState([]);
  const [singleItem, setSingleItem] = useState(object[30]);
  const [present, setpresent] = useState(null);
  const [notify, setnotify] = useState(false);
  const [Message, setMessage] = useState("");
  const [noticlass, setnoticlass] = useState("notiContainer");

  if (notify) {
    setTimeout(() => {
      setnotify(false);
    }, 2000);
  }

  const itemPage = (obj) => {
    setSingleItem(obj);
  };

  const cartOnClick = (obj) => {
    setnotify(true);
    setMessage("Added to Cart");
    setnoticlass("notiContainer");
    setcart([...currcart, obj]);
  };
  return (
    <WebContext.Provider
      value={{
        currcart,
        setcart,
        cartOnClick,
        itemPage,
        singleItem,
        present,
        setpresent,
        setnotify,
        notify,
        Message,
        setMessage,
        setnoticlass,
        noticlass,
      }}
    >
      {props.children}
    </WebContext.Provider>
  );
};
