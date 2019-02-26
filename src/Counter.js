import React, { useState } from "react";

const Counter = (props) => {
  const [count, updateCount] = useState(props.initialValue);

  const incrementCount = () => {
    updateCount(count + 1);
  };

  const decrementCount = () => {
    updateCount(count - 1);
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button type="button" onClick={incrementCount}>
          Increase
        </button>
        <button type="button" onClick={decrementCount}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
