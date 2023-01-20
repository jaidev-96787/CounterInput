import React, { useState } from "react";
import "./CounterInput.css";

const CounterInput = (props) => {
  const onChangeInput = (event) => {
    props.onChangeHandler(parseInt(event.target.value));
  };

  return (
    <div className="container">
      <p>Enter your Number</p>
      <input type="number" onChange={onChangeInput} name="CounterInput" />
    </div>
  );
};
export default CounterInput;
