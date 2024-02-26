import "./App.css";
import Navbar from "../Componenets/Navbar";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Componenets/Login";
import Home from "../Componenets/Home";
import Mens from "../Componenets/Mens";
import Womens from "../Componenets/Womens";
import Cart from "../Componenets/Cart";
import Kids from "../Componenets/Kids";
import Toprated from "../Componenets/Toprated";
import Register from "../Componenets/Register";
import SingleItem from "../Componenets/SingleItem";
import Search from "../Componenets/Search";
import PrivateRoute from "../Componenets/PrivateRoute";
import AdminPanel from "../forAdmin/AdminPanel";
import { useContext } from "react";
import { WebContext } from "../Componenets/Context";
import Notify from "../Componenets/Notify";
function App() {
  const [auth, setauth] = useState(false);
  const [SearchItem, setSearchItem] = useState("");
  const { currcart, setcart, notify } = useContext(WebContext);

  const removeItem = (obj) => {
    let UpdatedCart = currcart.filter((elem) => {
      return elem.Name !== obj.Name;
    });
    setcart(UpdatedCart);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          setSearchItem={setSearchItem}
          auth={auth}
          setauth={setauth}
        ></Navbar>
        {notify && <Notify className="notii"></Notify>}
        <div className="main">
          <Routes>
            <Route path="/login" element={<Login setauth={setauth}></Login>} />
            <Route path="/" element={<Home />} />
            <Route path="/TopRated" element={<Toprated />} />
            <Route path="/Mens" element={<Mens />} />
            <Route path="/Womens" element={<Womens />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/sign" element={<Register />} />
            <Route path="/cart" element={<Cart removeItem={removeItem} />} />
            <Route path="/item" element={<SingleItem />} />
            <Route
              path="/search"
              element={<Search SearchItem={SearchItem} />}
            />
            <Route element={<PrivateRoute />}>
              <Route path="/admin-panel" element={<AdminPanel />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
