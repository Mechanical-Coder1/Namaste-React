import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const handleLogin = () => login === "Login" ? setLogin("Logout") : setLogin("Login")

  const onlineStatus = useOnlineStatus()

  return (
    <div className="header-container">
      <div>
        <img className="logo" src={LOGO_URL}></img>
      </div>
     
     <h1 className="Cname">piGGy</h1>

      <div className="nav-items">
        <ul>
            <li>Online Status:{onlineStatus?"✅":"🔴"}</li>
            <li><Link className="link-without-underline" to='/'>Home</Link></li>
            <li>  <Link className="link-without-underline" to='/about'>About</Link></li>
            <li> <Link className="link-without-underline" to='/contact'>Contact</Link></li>
            <li><Link className="link-without-underline" to='/cart'>Cart</Link></li>
          
            <button className="login-btn" onClick={handleLogin }> {login} </button>

        </ul>
      </div>
    </div>
  );
};

export default Header;
