import React, { useState, createContext } from "react";

export let Mycontext = createContext();

const Provider = ({ children }) => {
  let [count, setCount] = useState(0);

  let INCR = () => {
    setCount(count + 1);
  };

  let DECR = () => {
    setCount(count - 1);
  };
  let REST = () => {
    setCount((count = 0));
  };
  return (
    <div>
      <Mycontext.Provider
        value={{
          count: count,
          INCR: INCR,
          DECR: DECR,
          REST: REST,
        }}
      >
        {children}
      </Mycontext.Provider>
    </div>
  );
};

export default Provider;
