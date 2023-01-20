import React from "react";
import "./CounterDisplay.css";

const CounterDisplay = (props) => {
  return (
    <div className="DisplayValue">
      <p>Updated value is: {props.counter}</p>
    </div>
  );
};
export default CounterDisplay;
