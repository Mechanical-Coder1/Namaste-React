import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const handleLogin = () =>
    login === "Login" ? setLogin("Logout") : setLogin("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // subscribing to the store with selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg bg-pink-100">
      <div>
        <img className="logo" src={LOGO_URL}></img>
      </div>

      <div className="flex items-center ">
        <ul className="flex m-4 ">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">GROCERY</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>

          <button className="px-4 cursor-pointer " onClick={handleLogin}>
            {login}
          </button>

          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
