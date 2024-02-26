import logo from "../assts/FYF_logo.png";
import "../Css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { WebContext } from "./Context";
import { useContext, useEffect, useState } from "react";
const Navbar = ({ setSearchItem, auth, setauth }) => {
  let loctaion = useLocation();
  const { currcart, present, setpresent } = useContext(WebContext);

  const details = JSON.parse(localStorage.getItem("USER"));

  useEffect(() => {
    setpresent(localStorage.getItem("TOKEN"));
  }, [auth]);
  const handleOnLogout = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USER");

    setpresent(null);
    setauth(false);
  };

  return (
    <div className="Navbarcontainer">
      <div className="leftnavbar">
        <img src={logo} alt="" />
        <p className="appname">FindYourFab</p>
      </div>
      <div className="navcontain">
        <ul className="centernavbar">
          <li>
            <Link
              className={`links ${location.pathname === "/" ? "on" : ""}`}
              to="/"
            >
              <strong className="li">Home</strong>
            </Link>
          </li>
          <li>
            <Link
              className={`links ${
                location.pathname === "/TopRated" ? "on" : ""
              }`}
              to="/TopRated"
            >
              <strong className="li">Top Rated</strong>
            </Link>
          </li>
          <li>
            <Link
              className={` links ${location.pathname === "/Mens" ? "on" : ""}`}
              to="/Mens"
            >
              <strong className="li">Mens</strong>
            </Link>
          </li>
          <li>
            <Link
              className={` links ${
                location.pathname === "/Womens" ? "on" : ""
              }`}
              to="/Womens"
            >
              <strong className="li">Womens</strong>
            </Link>
          </li>
          <li>
            <Link
              className={` links ${location.pathname === "/Kids" ? "on" : ""}`}
              to="/Kids"
            >
              <strong className="li">Kids</strong>
            </Link>
          </li>
          {details?.role === "Admin" && (
            <li>
              <Link
                className={` links ${
                  location.pathname === "/admin-panel" ? "on" : ""
                }`}
                to="/admin-panel"
              >
                <strong className="li">Admin</strong>
              </Link>
            </li>
          )}
        </ul>
        <div className="search ">
          <Link to="/search" className="links">
            <input
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
              type="text"
              placeholder="Search..."
            />
          </Link>
        </div>
      </div>
      <div className="rightnavbar">
        {present !== null ? (
          <button onClick={handleOnLogout} className="logout-btn">
            <p className="logout ">Logout</p>
          </button>
        ) : (
          <button className="loginbtn">
            <Link className="links" to="/login">
              <p className="login ">Login</p>
            </Link>
          </button>
        )}

        <Link className="links" to="/cart">
          <TiShoppingCart className="cartttt " />
          <div className="cartnum">{currcart.length}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
