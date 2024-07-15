import React from "react";
import im from "../assets/textutils.png";
import newsphoto from "../assets/news.png";
import { Link } from "react-router-dom";
import pass from "../assets/password.jpeg";
import currency from "../assets/currency.webp";
import tictac from "../assets/tictactoe.avif";

const Project = () => {
  return (
    <>
      <section className="work section" id="work">
        <h2 className="section-title">Work</h2>

        <div className="work__container bd-grid">
          <Link to="/Portfolio/textutils" relative="path" className="work__img">
            <img src={im} alt="" />
          </Link>
          <Link to="/project/newsdekho" relative="path" className="work__img">
            <img src={newsphoto} alt="" />
          </Link>
          <Link
            to="/Portfolio/passgenerator"
            relative="path"
            className="work__img">
            <img src={pass} alt="" />
          </Link>

          <Link
            to="/Portfolio/cureencyconverter"
            relative="path"
            className="work__img">
            <img src={currency} alt="" />
          </Link>
          <Link to="/Portfolio/tictactoe" relative="path" className="work__img">
            <img src={tictac} alt="" />
          </Link>
        </div>
      </section>
    </>
  );
};
export default Project;
