import React from "react";
import "./CounterButton.css";

const CounterButton = (props) => {
  return (
    <div className="Counter-Button">
      <button onClick={props.Increment}>Increment</button>
      <button onClick={props.Decrement}>Decrement</button>
    </div>
  );
};
export default CounterButton;
