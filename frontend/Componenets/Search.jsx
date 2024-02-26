import React, { useState, useEffect, useContext } from "react";
import "../Css/Search.css";
import Object from "./ob";
import { WebContext } from "./Context";
import { Link } from "react-router-dom";

const Search = ({ SearchItem }) => {
  const [SearchArr, setSearchArr] = useState([]);
  const { itemPage, cartOnClick } = useContext(WebContext);
  useEffect(() => {
    setSearchArr(
      Object.filter((currelem) =>
        currelem.Name.toLocaleLowerCase().includes(SearchItem)
      )
    );
  }, [SearchItem]);

  return (
    <div>
      {SearchItem.length === 0 ? (
        <h3 className="Search-head">Please Search....</h3>
      ) : (
        <div className="Homecontain">
          {SearchArr.map((obj) => (
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
      )}
    </div>
  );
};

export default Search;
