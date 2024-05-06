import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppButton from "./components/atoms/AppButton";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <h1>React State Example</h1>
        {/* Example variables in HTML */}
        <p>{"Current button size: " + counter}</p>
        {/* Example component based */}
        <AppButton
          clickHandler={() => (counter < 100 ? setCounter(counter + 1) : null)}
        ></AppButton>
        <span id="state" style={{ width: `${counter}%` }}></span>
        {/* Example conditional rendering */}
        {counter >= 100 && <p>Button is at maximum size!</p>}
      </main>
    </div>
  );
}

export default App;
