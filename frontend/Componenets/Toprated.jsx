import React from "react";
import Object from "./ob";
import { useState, useEffect } from "react";
import "../Css/Home.css";
import { Link } from "react-router-dom";
import { WebContext } from "./Context";
import { useContext } from "react";

const Toprated = () => {
  const [currtoprate, setToprate] = useState([]);
  let toprated;
  const { cartOnClick, itemPage } = useContext(WebContext);

  useEffect(() => {
    toprated = Object.filter((obj) => {
      return obj.Rating >= 4.5;
    });
    setToprate(toprated);
  }, []);

  return (
    <div className="Homecontain">
      {currtoprate.map((element) => (
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

export default Toprated;
