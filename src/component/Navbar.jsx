import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/nav.css";
import { MdOutlineDarkMode } from "react-icons/md";
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
            className={`nav-item nav-link  ${isActive("/Portfolio")}`}>
            Home
          </Link>
          <Link
            to="/Portfolio/project"
            relative="path"
            className={`nav-item nav-link  ${isActive("/Portfolio/project")}`}>
            Project
          </Link>
          <Link
            to="/Portfolio/contact"
            relative="path"
            className={`nav-item nav-link  ${isActive("/Portfolio/contact")}`}>
            {" "}
            Contact
          </Link>
          <Link
            to="/Portfolio/about"
            relative="path"
            className={`nav-item nav-link  ${isActive("/Portfolio/about")}`}>
            {" "}
            About
          </Link>
          <Link
            to="/Portfolio/skills"
            relative="path"
            className={`nav-item nav-link  ${isActive("/Portfolio/skills")}`}>
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
              className="nav-item nav-link text-white">
              <MdOutlineDarkMode size={26} />
            </Link>{" "}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
