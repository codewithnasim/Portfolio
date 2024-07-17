import React from "react";
import { FiDownload } from "react-icons/fi";
import cv from "../assets/Resume.pdf";
// import jsPDF from "jspdf";

import "../css/style.css";
import bgImage from "../assets/bg.jpg";
import prImage from "../assets/nas.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">
            Hi,
            <br />
            I'am <span className="home__title-color">Nasim</span>
            <br /> Web Developer
          </h1>
          <Link to="/Portfolio/contact" relative="path" className="button">
            Contact
          </Link>
        </div>
        <div>
          <Link to={cv}>
            <button className="border-2 border-black rounded-lg p-2 w-40 flex gap-2 items-center uppercase">
              <span>Dowload CV</span>
              <FiDownload />
            </button>
          </Link>
        </div>

        <div className="home__img">
          <svg className="home__blob" viewBox="0 0 479 467">
            <mask id="mask0" mask-type="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              <image className="home__blob-img w-11/12" href={prImage} />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};
export default Home;
