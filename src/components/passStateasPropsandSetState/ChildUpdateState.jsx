import React, { useState } from "react";

const ChildUpdateState = ({ prop, UpdateState }) => {
  let [name, SetUpdateName] = useState(prop.Name);
  let [aka, setAka] = useState(prop.Aka);

  let HandleSubmit = (e) => {
    e.preventDefault();
    UpdateState(name, aka );
  };

  return (
    <form onSubmit={HandleSubmit}>
      <label htmlFor="">Name:</label> <br /> <br />
      <input
        type="text"
        name="name"
        onChange={(e) => SetUpdateName(e.target.value)}
      />
      <br /> <br />
      {/* ----------------------------- */}
      <label htmlFor="">AKA:</label>
      <input type="text" name="aka" onChange={(e) => setAka(e.target.value)} />
      <br /> <br />
      {/* ------------ */}
      <button>Submit</button>
    </form>
  );
};

export default ChildUpdateState;
