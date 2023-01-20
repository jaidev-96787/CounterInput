import React, { useState } from "react";
import "./App.css";
import CounterInput from "./CounterInput/CounterInput";
import CounterButton from "./CounterButton/CounterButton";
import CounterDisplay from "./CounterDisplay/CounterDisplay";

function App() {
  const [getdata, setdata] = useState(0);

  const onChangeHandler = (input) => {
    setdata(input);
  };

  const Increment = () => {
    setdata(getdata + 1);
  };
  const Decrement = () => {
    setdata(getdata - 1);
  };

  return (
    <div className="App">
      <CounterInput onChangeHandler={onChangeHandler} />
      <CounterButton Increment={Increment} Decrement={Decrement} />
      <CounterDisplay counter={getdata} />
    </div>
  );
}

export default App;
