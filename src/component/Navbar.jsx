import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";

const Navbar = (props) => {
  const location = useLocation();

  // Determine the active link based on the current pathname
  const isActive = (pathname) => {
    return location.pathname === pathname ? "active" : "";
  };

  const [colors, setColors] = useState("white");
  const ColorHandler = () => {
    setColors("white");
    if (colors == "white") {
      setColors("black");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setColors("white");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      //
    }
  };

  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
      <nav className="sticky">
        <div className="topnav" id="myTopnav">
          <Link
            to="/"
            relative="path"
            className={`nav-item nav-link  ${isActive("/")}`}>
            Home
          </Link>

          <Link
            to="/project"
            relative="path"
            className={`nav-item nav-link  ${isActive("/project")}`}>
            Project
          </Link>
          <Link
            to="/contact"
            relative="path"
            className={`nav-item nav-link  ${isActive("/contact")}`}>
            {" "}
            Contact
          </Link>
          <Link
            to="/about"
            relative="path"
            className={`nav-item nav-link  ${isActive("/about")}`}>
            {" "}
            About
          </Link>
          <Link
            to="/skills"
            relative="path"
            className={`nav-item nav-link  ${isActive("/skills")}`}>
            {" "}
            Skills
          </Link>

          <div className="topnav" id="togbtn">
            <Link
              onClick={ColorHandler}
              relative="path"
              className="nav-item nav-link text-white">
              <MdOutlineDarkMode size={20} />
            </Link>{" "}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
