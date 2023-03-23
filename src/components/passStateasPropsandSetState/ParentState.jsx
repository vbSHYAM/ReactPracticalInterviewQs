import React, { useState } from "react";
import ChildStateAsProp from "./ChildStateAsProp";
import ChildUpdateState from "./ChildUpdateState";

const ParentState = () => {
  let [data, setData] = useState({
    Name: "Dhoni",
    Aka: "Mr.Cool",
  });

  let HandleUserChange = (Name, Aka) => {
    setData({ Name, Aka });
  };
  return (
    <div>
      {/* {<ChildStateAsProp prop={data} />} */}
      <h1> Parent Name - {data.Name}</h1>
      <h1>Parent Aka - {data.Aka}</h1>
      {<ChildUpdateState prop={data} UpdateState={HandleUserChange} />}
    </div>
  );
};

export default ParentState;
