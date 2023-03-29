import React, { useRef } from "react";
import ChildForwardRef from "./ChildForwardRef";

const ParentForwardRef = () => {
  let Fref = useRef();
  let HandleFunc = () => {
    // Fref.current.value++;
    Fref.current.style.background = "yellow";
    Fref.current.style.color = "red";
    Fref.current.style.padding = "15px";
  };

  return (
    <div>
      <ChildForwardRef Func={HandleFunc} ref={Fref} />
    </div>
  );
};

export default ParentForwardRef;
