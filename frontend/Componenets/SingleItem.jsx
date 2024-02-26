import React from "react";
import "../Css/Item.css";
import { WebContext } from "./Context";
import { useContext } from "react";

const SingleItem = () => {
  const { cartOnClick, singleItem } = useContext(WebContext);
  return (
    <div className="itemmain">
      <div className="itemcotanier">
        <div className="imagefotitem">
          <img src={singleItem.Image} alt="" className="imgitem" />
        </div>
        <div className="iteminfo">
          <strong>{singleItem.Name}</strong>
          <strong>Price : ₹ {singleItem.Price}</strong>
          <strong>Rating : {singleItem.Rating}/5</strong>

          <strong>
            Tags :
            {singleItem.Keywords.map((tag) => (
              <strong className="tags">{` ${tag.toUpperCase()} , `}</strong>
            ))}
          </strong>
        </div>
        <div className="buttonitem">
          <button>Buy Now</button>
          <button onClick={() => cartOnClick(singleItem)}>Add To cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
