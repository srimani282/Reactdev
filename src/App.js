import React from "react";
import "./App.css";

function App() {
  let name = "Sri Mani B";
  let num = 92928347587467389;

  return (
    <div className="App">
      <h1>Heading</h1>
      <h1>{name}</h1>
      {true ? <h3>{num}</h3> : <h3>No number</h3>}
    </div>
  );
}

export default App;
