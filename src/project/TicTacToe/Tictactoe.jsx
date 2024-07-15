import React, { useState } from "react";
import "../../css/tictac.css";

export default function Tictactoe() {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [turnO, setTurnO] = useState(true); // playerX, playerO
  const [count, setCount] = useState(0); // To track draw
  const [msgVisible, setMsgVisible] = useState(false);
  const [msgText, setMsgText] = useState("");

  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const resetGame = () => {
    setBoxes(Array(9).fill(""));
    setTurnO(true);
    setCount(0);
    setMsgVisible(false);
  };

  const handleBoxClick = (index) => {
    if (boxes[index] === "") {
      let newBoxes = [...boxes];
      newBoxes[index] = turnO ? "O" : "X";
      setBoxes(newBoxes);
      setTurnO(!turnO);
      setCount(count + 1);

      if (count === 8) {
        gameDraw();
      } else {
        checkWinner(newBoxes);
      }
    }
  };

  const checkWinner = (currentBoxes) => {
    for (let pattern of winPatterns) {
      let [pos1, pos2, pos3] = pattern;
      if (
        currentBoxes[pos1] !== "" &&
        currentBoxes[pos1] === currentBoxes[pos2] &&
        currentBoxes[pos2] === currentBoxes[pos3]
      ) {
        showWinner(currentBoxes[pos1]);
        return;
      }
    }
  };

  const gameDraw = () => {
    setMsgText("Game was a Draw.");
    setMsgVisible(true);
  };

  const showWinner = (winner) => {
    setMsgText(`Congratulations, Winner is ${winner}`);
    setMsgVisible(true);
  };

  return (
    <div className="text-center bg-teal-800">
      <div className={`msg-container ${msgVisible ? "" : "hide"}`}>
        <p id="msg">{msgText}</p>
        <button id="new-btn" onClick={resetGame}>
          New Game
        </button>
      </div>
      <main>
        <h1 className="text-3xl text-orange-200">Tic Tac Toe</h1>
        <div className="cointainergame">
          <div className="game">
            {boxes.map((value, index) => (
              <button
                key={index}
                className="box"
                onClick={() => handleBoxClick(index)}>
                {value}
              </button>
            ))}
          </div>
        </div>
        <button className="reset-btn" onClick={resetGame}>
          Reset
        </button>
      </main>
    </div>
  );
}
