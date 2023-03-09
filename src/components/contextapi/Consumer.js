import React from "react";
import { Mycontext } from "./Provider";

const Consumer = () => {
  return (
    <div>
      <h1>CONSUMER</h1>
      <Mycontext.Consumer>
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
      </Mycontext.Consumer>
    </div>
  );
};

export default Consumer;
