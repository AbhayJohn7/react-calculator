import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    // Prevent multiple operators in a row
    const lastChar = input.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(value)) {
      return;
    }
    setInput(input + value);
  };

  const calculate = () => {
    try {
      const result = eval(input).toString(); // Calculate result
      setInput(result); // Display the result
    } catch (error) {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
      </div>
      <div className="keypad">
        <button onClick={clear} className="clear">
          C
        </button>
        <button onClick={() => handleClick("/")}>&divide;</button>
        <button onClick={() => handleClick("*")}>&times;</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>&ndash;</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculate} className="equals">
          =
        </button>
        <button onClick={() => handleClick("0")} className="zero">
          0
        </button>
      </div>
    </div>
  );
};

export default App;
