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
        <h2 className="section-title">Project</h2>
        <p className="p-4 text-center">
          Here some project that is made by HTML,CSS, Java Script and React .
        </p>

        <div className="work__container bd-gride">
          <Link to="/textutils" relative="path" className="work__img">
            <img src={im} alt="" />
            <p className="p-3 ">
              This is text utilization project. Here you can change your text to
              uppercase and lowercase as per your need. you can also remove
              extra space, and copy text etc. you can also check how much word
              and alphabet in your text.
            </p>
          </Link>
          <Link to="/newsdekho" relative="path" className="work__img">
            <img src={newsphoto} alt="" />
            <p className="p-3 ">
              It is a news app. here you can read everyday news. But this app
              only work in localhost . Its not working in the server . Becouse
              api is not free for server. Thats why its not working in another
              server.
            </p>
          </Link>
          <Link to="/passgenerator" relative="path" className="work__img">
            <img src={pass} alt="" />
            <p className="p-3 ">
              It is a Password generator app. Here you can generate password as
              per your need. Password can be character or with some number or
              with some special character and both.
            </p>
          </Link>

          <Link to="/cureencyconverter" relative="path" className="work__img">
            <img src={currency} alt="" />
            <p className="p-3">
              This is a currency conerter app. You can compare the price of your
              currency to any others country currency.
            </p>
          </Link>
          <Link to="/tictactoe" relative="path" className="work__img">
            <img src={tictac} alt="" />
            <p className="p-3">
              This is a TicTacToe game . Here you can play game . But this game
              only one player can play and select the boxes.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
};
export default Project;
