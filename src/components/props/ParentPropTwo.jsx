import React, { useState } from "react";
import ChildPropTwo from "./ChildPropTwo";

const ParentPropTwo = () => {
  let [data, setData] = useState({
    type: "bad",
    rel: "dad",
  });

  return (
    <div>
      <h1>
        <ChildPropTwo value={data} />
      </h1>
    </div>
  );
};

export default ParentPropTwo;
