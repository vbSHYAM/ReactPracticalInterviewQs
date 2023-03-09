import React from "react";
import cool from "./ProviderHoc";

const ConsumerHoc = (props) => {
  return (
    <div>
      <h1>
        i am the <mark><del>{props.value}</del></mark>
      </h1>
    </div>
  );
};

export default cool(ConsumerHoc);
