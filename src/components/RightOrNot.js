import { useState } from "react";

function RightOrNot(props) {
  const right = () => {
    props.resultsIn = 0;
    return <div className="resultsIn resultCorrect">CORRECT</div>;
  };

  const wrong = () => {
    props.resultsIn = 0;
    return <div className="resultsIn resultWrong">WRONG</div>;
  };
  return (
    <div className="bigDiv hidden2" id="rightOrNot">
      {props.resultsIn - 2 == 0 ? right : wrong}

      <button id="continueGameButton">Next Round</button>
      <div>hi</div>
    </div>
  );
}

export default RightOrNot;
