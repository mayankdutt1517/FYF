import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { WebContext } from "./Context";
const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { setMessage, setnotify, setnoticlass } = useContext(WebContext);

  const navigate = useNavigate();
  const handleOnRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/user/register", {
        name,
        email,
        password,
      });
      if (!email) {
        setnotify(true);
        setnoticlass("notiContainerneg");
        setMessage("Please enter Email");
      }
      if (!name) {
        setnotify(true);
        setnoticlass("notiContainerneg");
        setMessage("Please enter Name");
      }
      if (!password) {
        setnotify(true);
        setnoticlass("notiContainerneg");
        setMessage("Please enter Password");
      }
      if (res.data.success) {
        navigate("/login");
        setnotify(true);
        setnoticlass("notiContainer");
        setMessage("Registered succesfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="loginmain">
      <div className="Logcontainer">
        <h1>Register</h1>
        <form className="loginform">
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Full Name"
            required
            value={name}
          />
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            required
            value={password}
          />
          <button onClick={handleOnRegister}>Register</button>
        </form>
        <p>
          Already have an Account ?
          <strong>
            <Link to="/login">Login</Link>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Register;
