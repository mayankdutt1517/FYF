import React from "react";
import { useState, useEffect } from "react";
import Object from "./ob";
import "../Css/Home.css";
import { Link } from "react-router-dom";
import { WebContext } from "./Context";
import { useContext } from "react";

const Womens = () => {
  const [currWomens, setWomens] = useState([]);
  const { cartOnClick, itemPage } = useContext(WebContext);
  let womens;
  useEffect(() => {
    womens = Object.filter((obj) => {
      return obj.Category === "women";
    });
    setWomens(womens);
  }, []);

  return (
    <div className="Homecontain">
      {currWomens.map((element) => (
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

export default Womens;
