import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./sidebar.css";
import axios from 'axios';

export default function Sidebar() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>

        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        ></img>

        <p>
        A blog post is any article, news piece, or guide that's published in the blog section of a website.
        </p>
      </div>

      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>

        <ul className='sidebarList'>
        {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className='sidebarItem'>
        <div className="sidebarTitle">Follow Us</div>
        <div>
          <i class="leftIcons fab fa-facebook"></i>
          <i class="leftIcons fab fa-twitter"></i>
          <i class="leftIcons fab fa-pinterest-square"></i>
          <i class="leftIcons fab fa-instagram-square"></i>
        </div>
        
      </div>
    </div>
  );
}
