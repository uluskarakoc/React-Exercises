import React from "react";
import "./style.css";
import { useState } from "react";

function App() {
  const [moveBox, setMoveBox] = useState(400);
  const move = () => {
    setMoveBox(moveBox-10);
  };

  return (
    <div className="App">
      <h1>Move the Box Up!</h1>
      <button onClick={move}>Move Up</button>

      <div
        className="box"
        style={{
          transform: `translateY(${moveBox}px)`,
          transition: "transform 1s ease",
        }}
      ></div>
    </div>
  );
}


export default App;
