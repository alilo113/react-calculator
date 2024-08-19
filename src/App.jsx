import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="max-w-xs mx-auto my-8 bg-gray-200 p-4 rounded-lg">
      <input
        type="text"
        className="bg-white p-2 text-right rounded-lg mb-4"
        value={input}
        disabled
      />
      <div className="grid grid-cols-4 gap-2">
        <button
          className="col-span-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("C")}
        >
          C
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("C")}
        >
          C
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("=")}
        >
          =
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("+")}
        >
          +
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("-")}
        >
          -
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("*")}
        >
          *
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => handleClick("/")}
        >
          /
        </button>
      </div>
    </div>
  );
}

export default App;
