import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleMen = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleMen}>-1</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

CounterApp.proTypes = {
  value: PropTypes.number.isRequired,
};
