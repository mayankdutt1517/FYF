import { useState, useEffect } from "react";
import React from "react";
import "../Css/Cart.css";
import { useContext } from "react";
import { WebContext } from "../Componenets/Context";

const Cart = ({ removeItem }) => {
  const [SubTotal, setSubTotal] = useState(0);
  const { currcart } = useContext(WebContext);
  let Total = 0;
  currcart.map((itm) => (Total += itm.Price));
  useEffect(() => {
    return setSubTotal(Total);
  }, [currcart]);

  return (
    <div className="Cartmain">
      <div className="incartcontainer">
        {currcart.map((obj) => (
          <div className="incart">
            <img src={obj.Image} alt="" />
            <strong>{obj.Name}</strong>
            <strong>₹{obj.Price}</strong>
            <button onClick={() => removeItem(obj)}>Remove</button>
          </div>
        ))}
      </div>
      <strong className="CartText">
        {" "}
        {currcart.length === 0
          ? "Nothing to see in Cart"
          : ` Subtotal ₹${SubTotal}`}
      </strong>
    </div>
  );
};

export default Cart;
