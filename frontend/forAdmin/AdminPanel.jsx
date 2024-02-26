import React from "react";
import "./admin.css";
import Object from "../Componenets/ob";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "../Css/Home.css";
const AdminPanel = () => {
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
            <div className="buttonsED">
              <FaEdit className="fabtn" />
              <MdDelete className="fabtn" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
