import React, { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  let [num, setNum] = useState(0);
  let [multiplier, setMultiplier] = useState(1);
  let [dark, setDark] = useState(false);
  let multiplication = useMemo(() => {
    console.log("number is multiplying");
    return num * multiplier;
  }, [num, multiplier]);

  let themeStyle = useMemo(() => {
    return {
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyle]);
  return (
    <div style={themeStyle}>
      <button onClick={() => setDark(!dark)}>change theme</button>
      <h1>number-{num}</h1>
      <h1>multiplier-{multiplier}</h1>
      <h1>result-{multiplication}</h1>
      <button onClick={() => setNum(num + 1)}> inc num</button>
      <button onClick={() => setMultiplier(multiplier + 1)}>
        inc multiplier
      </button>
    </div>
  );
};

export default UseMemo;
