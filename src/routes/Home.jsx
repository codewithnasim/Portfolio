import React from "react";
import { FiDownload } from "react-icons/fi";
import cv from "../assets/Resume.pdf";
// import jsPDF from "jspdf";

import "../css/style.css";
import bgImage from "../assets/bg.jpg";
import prImage from "../assets/nas.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="relative w-full ">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-6xl tracking-tight md:text-6xl lg:text-6xl font-semibold font-serif">
              Hi,
              <br />I am <h1 className="text-blue-600 inline-block">Nasim</h1>
            </h1>
            <p className="mt-8  text-5xl text-rose-900 animate-bounce ">
              Full Stack Web Developer
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <Link to={cv}>
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Download CV
                  </button>
                </Link>
              </div>
              <div>
                <Link to={"/contact"}>
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Contact
                  </button>
                </Link>
              </div>
            </form>
            <p className="mt-20"></p>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className=" object-cover  p-3 rounded-3xl mt-10 h-3/5"
              src={prImage}
              alt=""
            />
          </div>
=======
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
>>>>>>> bd6a03dbe189eee9a1d7cee4d802954b69036eb4
        </div>
      </div>
    </>
  );
};
export default Home;
