import React from "react";
import im from "../assets/textutils.png";
import newsphoto from "../assets/news.png";
import { Link } from "react-router-dom";
import pass from "../assets/password.jpeg";

const Project = () => {
  return (
    <>
      <section className="work section" id="work">
        <h2 className="section-title">Work</h2>

        <div className="work__container bd-grid">
          <Link to="/textutils" relative="path" className="work__img">
            <img src={im} alt="" />
          </Link>
          <Link to="/project/newsdekho" relative="path" className="work__img">
            <img src={newsphoto} alt="" />
          </Link>
          <Link to="/passgenerator" relative="path" className="work__img">
            <img src={pass} alt="" />
          </Link>
        </div>
      </section>
    </>
  );
};
export default Project;
