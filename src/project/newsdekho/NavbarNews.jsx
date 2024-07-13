import React, { Component, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import {useState} from "react"
import "../../css/newsNav.css";
const NavbarNews = () => {
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
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav className="sticky">
        <div className="topnav bg-white center " id="myTopnav">
          <Link
            className={`nav-item nav-link text-black ${isActive("/newsdekho")}`}
            to="/newsdekho">
            Home{" "}
          </Link>
          <Link
            className={`nav-item nav-link nav-item text-black ${isActive(
              "/business"
            )}`}
            to="/business">
            Business
          </Link>
          <Link
            className={`nav-item nav-link nav-item text-black ${isActive(
              "/science"
            )}`}
            to="/science">
            {" "}
            Science
          </Link>
          <Link
            className={`nav-item nav-link nav-item text-black ${isActive(
              "/sports"
            )}`}
            to="/sports">
            {" "}
            Sports
          </Link>
          <Link
            className={`nav-item nav-link nav-item text-black ${isActive(
              "/entertainment"
            )}`}
            to="/entertainment">
            {" "}
            Entertainment
          </Link>
          <Link
            className={`nav-item nav-link nav-item text-black ${isActive(
              "/technology"
            )}`}
            to="/technology">
            {" "}
            Technology
          </Link>
          <Link to="" relative="path" className="icon" onClick={myFunction}>
            <i className="fa fa-bars"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default NavbarNews;
