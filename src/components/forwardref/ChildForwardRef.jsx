import React from "react";

const ChildForwardRef = React.forwardRef((prop, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />

      <button onClick={prop.Func}>Increment</button>
    </div>
  );
});

export default ChildForwardRef;
