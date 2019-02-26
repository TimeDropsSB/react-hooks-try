import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter initialValue={-5} />
      <Counter initialValue={5} />
    </div>
  );
};

export default App;
