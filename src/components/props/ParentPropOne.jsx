import React, { useState } from "react";
import ChildrenPropOne from "./ChildrenPropOne";

const ParentPropOne = () => {
  const Name = "Dhoni";
  const Type = "cool";
  return (
    <div>
      <ChildrenPropOne Name={Name} Type={Type} />
    </div>
  );
};

export default ParentPropOne;
