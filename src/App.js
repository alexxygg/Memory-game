import "./App.css";

import Intro from "./components/Intro";
import Main from "./components/Main";
import Score from "./components/Score";
import { React, useState } from "react";

function App() {
  return (
    <div className="App">
      <Intro />
      <Main />
      <Score />
    </div>
  );
}

export default App;
