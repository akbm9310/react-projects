import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  var [counter, setCounter] = useState(15);

  const addValue = () => {
    counter = counter + 1;
    if (counter > 20) {
      counter = 20;
    }
    setCounter(counter);
    //setCounter(counter+1)
  };
  const removeValue = () => {
    counter = counter - 1;
    if (counter < 0) {
      counter = 0;
    }
    setCounter(counter);
    //setCounter(counter-1)
  };
  return (
    <>
      <h1>AKASH AUR CODING</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
      <br />
      <p>{counter}</p>
    </>
  );
}

export default App;
