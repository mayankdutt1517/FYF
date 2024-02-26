import React from "react";
import Object from "./ob";
import "../Css/Home.css";
import { Link } from "react-router-dom";
import { WebContext } from "./Context";
import { useContext } from "react";
const Home = () => {
  const { cartOnClick, itemPage } = useContext(WebContext);
  return (
    <div className="Homecontain">
      {Object.map((obj) => (
        <div onClick={() => itemPage(obj)} className="objectcontain">
          <div className="center">
            <div className="image">
              <img src={obj.Image} alt="" />
            </div>
            <Link to="/item" className="links">
              <div className="infoname">
                <strong>{obj.Name}</strong>
              </div>
            </Link>
            <div className="infoprice">
              <p> Price : ₹{obj.Price}</p>
            </div>
            <p>Rating : {obj.Rating}/5</p>
            <button onClick={() => cartOnClick(obj)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
