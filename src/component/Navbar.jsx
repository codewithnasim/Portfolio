import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/nav.css";
// import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

const Navbar = (props) => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav className="sticky">
        <div className="topnav " id="myTopnav">
          <Link
            to="/Portfolio"
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
          <Link to="#" relative="path" className="icon" onClick={myFunction}>
            <i className="fa fa-bars"></i>
          </Link>
          <div className="topnav" id="togbtn">
            <Link
              onClick={ColorHandler}
              relative="path"
              className="nav-item nav-link text-white items-end">
              Change Mode
            </Link>{" "}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
