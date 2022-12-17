import React, { useState } from "react";
import theList from "./List";
import theList2 from "./List2";
import Divider from "./Divider";
import RightOrNot from "./RightOrNot";

function Main() {
  let x = -1;
  let y = -1;

  const [startGame, setStartGame] = useState(false);
  let guesses = 0;
  let guess1 = "1st guess.";
  let guess2 = "2nd guess.";
  //   const findTheMatch = (divClr) => {
  //     document.getElementsByClassName(`.${divClr}`)[0].style.backgroundColor =
  //       "lime";
  //     document.getElementsByClassName(`.${divClr}`)[1].style.backgroundColor =
  //       "lime";
  //   };

  let shuffledArray = theList.sort((a, b) => 0.5 - Math.random());
  let shuffledArray2 = theList2.sort((a, b) => 0.5 - Math.random());

  const buttonClickHandler = (e) => {
    e.target.parentNode.classList.toggle("hidden2");
    let c = document.getElementById("attemptsDiv");
    c.innerHTML = parseInt(c.textContent) + 1;
  };

  const clickHandler = (eParam) => {
    if (guesses == 0) {
      guesses = guesses + 1;
      guess1 = eParam.target.style.backgroundColor;
    } else if (guesses == 1) {
      guess2 = eParam.target.style.backgroundColor;
      guesses = guesses + 1;
      if (guess1 == guess2) {
        guesses = 0;
        guess1 = "1st guess.";
        guess2 = "2nd guess.";
        document.getElementById("bigDivRight").classList.toggle("hidden2");
        let targetId = eParam.target.id;
        let guessNum1 = document.getElementsByClassName(targetId)[0];
        guessNum1.classList.toggle("hidden");
        let guessNum2 = document.getElementsByClassName(targetId)[1];
        guessNum2.classList.toggle("hidden");
      } else if (guesses == 2) {
        guesses = 0;
        guess1 = "1st guess.";
        guess2 = "2nd guess.";
        document.getElementById("bigDivWrong").classList.toggle("hidden2");
      }
      // let guessNum2 = eParam.currentTarget.id;
    }
  };
  return (
    <>
      {" "}
      <div>Attempts:</div>
      <div id="attemptsDiv">0</div>
      <Divider />{" "}
      <div className="bigDiv hidden2" id="bigDivRight">
        <div className="resultsIn resultCorrect ">CORRECT</div>
        <button
          id="continueGameButton"
          onClick={(e) => {
            buttonClickHandler(e);
          }}
        >
          Next Round
        </button>{" "}
      </div>
      <div className="bigDiv hidden2" id="bigDivWrong">
        <div className="resultsIn resultWrong">WRONG</div>
        <button
          id="continueGameButton"
          onClick={(e) => {
            buttonClickHandler(e);
          }}
        >
          Next Round
        </button>{" "}
      </div>
      <div className="mainGrid">
        {shuffledArray.map((each) => {
          x++;
          return (
            <div
              className="wrapperSquare"
              onClick={(e) => {
                e.currentTarget.style.outline = "solid red";
              }}
              onMouseEnter={(e) => {
                if (e.currentTarget.classList.contains("wrapperSquare")) {
                  e.currentTarget.classList.add("hovered");
                }
              }}
              onMouseLeave={(e) => {
                if (e.currentTarget.classList.contains("wrapperSquare")) {
                  e.currentTarget.classList.remove("hovered");
                }
              }}
            >
              <section
                id={each.color}
                key={x}
                style={{ backgroundColor: each.color }}
                className={`square ${x} ${each.color}`}
                onClick={(e) => {
                  clickHandler(e);
                }}
              ></section>
            </div>
          );
        })}
        {shuffledArray2.map((each) => {
          y++;
          return (
            <div
              className="wrapperSquare"
              onClick={(e) => {
                e.currentTarget.style.outline = "solid red";
              }}
              onMouseEnter={(e) => {
                if (e.currentTarget.classList.contains("wrapperSquare")) {
                  e.currentTarget.classList.add("hovered");
                }
              }}
              onMouseLeave={(e) => {
                if (e.currentTarget.classList.contains("wrapperSquare")) {
                  e.currentTarget.classList.remove("hovered");
                }
              }}
            >
              <section
                id={each.color}
                key={y}
                style={{ backgroundColor: each.color }}
                className={`square ${y} ${each.color}`}
                onClick={(e) => {
                  clickHandler(e);
                }}
              ></section>
            </div>
          );
        })}
      </div>
      <Divider />
      <div>Guesses: {guesses}</div>
      <div>Guess 1: {guess1}</div>
      <div>Guess 2: {guess2}</div>
    </>
  );
}
export default Main;
