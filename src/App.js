import React from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
import Children from "./components/Children";

function App(props) {
  return (
    <div>
      <UserDetails
        data={{
          name: "sri",
          cls: "degree",
          course: "react",
        }}
      />
      <Children>
        <h1> reactjs</h1>
        <h2>this is the my another change</h2>
        <h2>i make another changes</h2>
        <h1>this is new change</h1>
        <h1>Child from parent</h1>
        <p>havsdhvsgv</p>
      </Children>
    </div>
  );
}

export default App;
