import React from "react";
import "../../css/tictac.css";
import "./Game.js";
export default function Tictactoe() {
  return (
    <>
      <div className="text-center bg-teal-800 ">
        <div class="msg-container hide">
          <p id="msg">Winner</p>
          <button id="new-btn">New Game</button>
        </div>
        <main>
          <h1 className="text-3xl text-orange-200">Tic Tac Toe</h1>
          <div class="cointainergame">
            <div class="game">
              <button class="box"></button>
              <button class="box"></button>
              <button class="box"></button>
              <button class="box"></button>
              <button class="box"></button>
              <button class="box"></button>
              <button class="box"></button>
              <button class="box"></button>
              <button class="box"></button>
            </div>
          </div>
          <button class="reset-btn">Reset</button>
        </main>
      </div>
    </>
  );
}
