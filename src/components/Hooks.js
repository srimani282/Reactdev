import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Hooks(props) {
  const [num, setNum] = useState(3);

  useEffect(() => {
    setNum(num + 1);
  }, []);

  const handleClick = () => {
    setNum(num + 1);
  };

  return (
    <div className="container">
      <h1>Hooks Explained</h1>
      <h2>Number</h2>
      <h3>{num}</h3>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

Hooks.propTypes = {};

export default Hooks;
