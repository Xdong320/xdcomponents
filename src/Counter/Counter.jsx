import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button data-testid="increment-btn" onClick={increment}>
        Increment
      </button>
      <button data-testid="decrement-btn" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
