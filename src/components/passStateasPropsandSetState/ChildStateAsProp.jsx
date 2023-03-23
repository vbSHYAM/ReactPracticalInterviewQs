import React from "react";

const ChildStateAsProp = (props) => {
  console.log(props.prop);
  return (
    <div>
      <h1>
        I am <mark>{props.prop.Name}</mark> by name {props.prop.Aka} by nature
      </h1>
    </div>
  );
};

export default ChildStateAsProp;
