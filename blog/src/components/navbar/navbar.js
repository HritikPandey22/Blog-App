import { Link } from "react-router-dom";
import { useContext } from "react";
import "./navbar.css";
import { Context } from "../../context/Context";


export default function Navbar() {
  const PF = "http://localhost:5000/images/";
  const { user , dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="nav">
      <div className="navLeft">
        <i class="leftIcons fab fa-facebook"></i>
        <i class="leftIcons fab fa-twitter"></i>
        <i class="leftIcons fab fa-pinterest-square"></i>
        <i class="leftIcons fab fa-instagram-square"></i>
      </div>

      <div className="navCenter">
        <ul className="centerItems">
          <li className="navCenterItems">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navCenterItems">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="navCenterItems">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="navCenterItems">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navCenterItems" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="navRight">
        {user ? (
          <Link to="/settings">
            <img className="navbarImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="centerItems">
            <li className="navCenterItems">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navCenterItems">
              <Link className="link" to="/register">
                LOGOUT
              </Link>
            </li>
          </ul>
        )}
        <i class="searchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

