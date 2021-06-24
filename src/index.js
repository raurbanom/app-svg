import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <p>Here we should see a triangle and a circle</p>
      <svg viewBox="0 0 28.3 28.3" className="App-icon">
        <use xlinkHref="/sprite.svg#square" />
      </svg>
      <svg viewBox="0 0 28.3 28.3" className="App-icon">
        <use xlinkHref="/sprite.svg#circle" />
      </svg>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
