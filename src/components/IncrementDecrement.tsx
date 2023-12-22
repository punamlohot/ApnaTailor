import React, { useState } from "react";

const IncrementDecrement = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      className="d-flex"
      style={{
        width: "100px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <button
        style={{ border: "none", width: "40px" }}
        onClick={decrement}
        disabled={count === 0}
      >
        -
      </button>
      <h6>{count}</h6>
      <button style={{ border: "none", width: "40px" }} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default IncrementDecrement;
