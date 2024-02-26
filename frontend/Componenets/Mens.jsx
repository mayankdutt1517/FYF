import React from "react";
import Object from "./ob";
import { useState, useEffect } from "react";
import "../Css/Home.css";
import { Link } from "react-router-dom";
import { WebContext } from "./Context";
import { useContext } from "react";
const Mens = () => {
  const [currMens, setMens] = useState([]);
  const { cartOnClick, itemPage } = useContext(WebContext);
  let mens;
  useEffect(() => {
    mens = Object.filter((obj) => {
      return obj.Category === "men";
    });
    setMens(mens);
  }, []);

  return (
    <div className="Homecontain">
      {currMens.map((element) => (
        <div onClick={() => itemPage(element)} className="objectcontain">
          <div className="center">
            <div className="image">
              <img src={element.Image} alt="" />
            </div>
            <Link to="/item" className="links">
              <div className="infoname">
                <strong>{element.Name}</strong>
              </div>
            </Link>
            <div className="infoprice">
              <p> Price : ₹{element.Price}</p>
            </div>
            <p>Rating : {element.Rating}/5</p>
            <button onClick={() => cartOnClick(element)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mens;
