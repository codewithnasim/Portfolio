import React, { Component, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import {useState} from "react"
import "../../css/newsNav.css";
const NavbarNews = () => {
  const location = useLocation();

  // Determine the active link based on the current pathname
  const isActive = (pathname) => {
    return location.pathname === pathname ? "active" : "";
  };
  return (
    <>
      <nav className="fixed z-1 top-10 bg-slate-300 ">
        <div className="navComponent" id="mynavComponent">
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
        </div>
      </nav>
    </>
  );
};
export default NavbarNews;
