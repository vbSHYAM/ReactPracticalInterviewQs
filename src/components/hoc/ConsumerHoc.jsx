import React from "react";
import cool from "./ProviderHoc";

const ConsumerHoc = (props) => {
  return (
    <div>
      <h1>
        i am the <i>{props.value}</i>
      </h1>
    </div>
  );
};

export default cool(ConsumerHoc);
