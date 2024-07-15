import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Project from "./routes/Project.jsx";
import Home from "./routes/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import Skills from "./routes/Skills.jsx";
//text utils
import TextUtils from "./project/TextUtils.jsx";
//news dekho

import Business from "./project/newsdekho/Business.jsx";
import Entertainment from "./project/newsdekho/Entertainment.jsx";
import News from "./project/newsdekho/News.jsx";
import Science from "./project/newsdekho/Science.jsx";
import Sports from "./project/newsdekho/Sports.jsx";
import Technology from "./project/newsdekho/Technology.jsx";

import Passgenerator from "./project/passgenerator/passwordGen.jsx";
import CurrencyConvert from "./project/currencyConverter/CurrencyConvert.jsx";
import Tictactoe from "./project/TicTacToe/Tictactoe.jsx";

function App() {
  return (
    <>
      {/* <button onClick={ColorHandler}> Change mode</button> */}
      <Navbar> </Navbar>

      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/Portfolio/about" element={<About />} />
        <Route path="/Portfolio/project" element={<Project />} />
        <Route path="/Portfolio/contact" element={<Contact />} />
        <Route path="/Portfolio/skills" element={<Skills />} />
        <Route path="/Portfolio/textutils" element={<TextUtils />} />
        //news dekho
        <Route path="project/newsdekho" element={<News />} />
        <Route path="project/newsdekho" element={<News />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/business" element={<Business />} />
        <Route path="/science" element={<Science />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/Portfolio/passgenerator" element={<Passgenerator />} />
        <Route
          path="/Portfolio/cureencyconverter"
          element={<CurrencyConvert />}
        />
        <Route path="/Portfolio/tictactoe" element={<Tictactoe />} />
      </Routes>
    </>
  );
}

export default App;
