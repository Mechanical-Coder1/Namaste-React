import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="header-container">
      <div>
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <h1>LUCKY BAR & RESTAURENT</h1>
      <div className="nav-items">
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li>  <Link to='/about'>About</Link></li>
        <li> <Link to='/contact'>Contact</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
          <button
            className="login-btn"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
