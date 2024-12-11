import React, { useState } from "react";
import "./ButtonStyles.css"

function Calculator() {
  const [input, setInput] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear the input
  const handleClear = () => {
    setInput("");
  };

  // Remove last character
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  // Evaluate the calculation safely
  const handleEqual = () => {
    try {
      // Safely evaluate the input
      const result = Function(`"use strict"; return (${input})`)();
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button className="button" onClick={handleClear}>
          AC
        </button>
        <button className="button" onClick={handleBackspace}>
          Del
        </button>
        <button className="button" onClick={() => handleClick("%")}>
          %
        </button>
        <button className="button" onClick={() => handleClick("/")}>
          /
        </button>

        <button className="button" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="button" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="button" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="button" onClick={() => handleClick("*")}>
          *
        </button>

        <button className="button" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="button" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="button" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="button" onClick={() => handleClick("-")}>
          -
        </button>

        <button className="button" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="button" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="button" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="button" onClick={() => handleClick("+")}>
          +
        </button>

        <button className="button" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="button" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="button equals" onClick={handleEqual}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
