import React from "react";

const ChildrenPropOne = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
         I am {props.Name} they call me Mr.{props.Type}
      </h1>
    </div>
  );
};

export default ChildrenPropOne;
