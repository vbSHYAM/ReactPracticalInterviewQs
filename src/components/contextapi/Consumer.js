import React, { useContext } from "react";
import { Mycontext } from "./Provider";

const Consumer = () => {
  let result = useContext(Mycontext);
  console.log(result);
  return (
    <div>
      <h1>CONSUMER</h1>
      {/* <Mycontext.Consumer>
        {(value) => {
          return (
            <div>
              <h1>{value.count}</h1>
              <button onClick={value.INCR}>INCREMENT</button>
              <button onClick={value.DECR}>DECREMENT</button>
              <button onClick={value.REST}>RESET</button>
            </div>
          );
        }}
      </Mycontext.Consumer> */}

      {/* ------------------------------------------------- */}

      <h1>{result.count}</h1>
      <button onClick={result.INCR}>increment</button>
      <button onClick={result.DECR}>decrement</button>
      <button onClick={result.REST}>reset</button>
    </div>
  );
};

export default Consumer;
