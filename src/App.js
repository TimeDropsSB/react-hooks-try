import React from "react";
import Counter from "./Counter";
import CatImage from "./CatImage";

const App = () => {
  return (
    <main>
      <section>
        <h2>Counters</h2>
        <Counter initialValue={-5} />
        <Counter initialValue={5} />
      </section>
      <section>
        <h2>Random Cat Image</h2>
        <CatImage />
      </section>
    </main>
  );
};

export default App;
