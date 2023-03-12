import React, { useState } from "react";

const ControlledFormComp = () => {
  let [data, setData] = useState({
    Name: "",
    Gender: "",
    Language: "",
  });
  let { Name, Gender, Language } = data;

  let [addfield, SetAddfield] = useState([""]);

  let handleAddChange = (val, i) => {
    let Field = addfield.map((a, b) => {
      return b === i ? val : a;
    });
    SetAddfield(Field);
  };

  let handleAddField = () => {
    SetAddfield([...addfield, ""]);
  };

  let handleRemoveField = (i) => {
    let remove = [...addfield];
    remove.splice(i, 1);
    SetAddfield(remove);
  };

  //   --------------------------------------------

  let disableButton = () => {
    setData(!data);
  };

  let handleChange = (e) => { 
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log({ Name, Gender, Language });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name:</label> &nbsp; &nbsp;
          {/* <input
            type="text"
            name="Name"
            onClick={disableButton}
            value={Name}
            onChange={handleChange}
          /> */}
          {addfield.map((a, b) => {
            return (
              <>
                <input
                  type="text"
                  name="Name"
                  onClick={disableButton}
                  value={a}
                  onChange={(d) => handleAddChange(d.target.value, b)}
                />

                {addfield.length - 1 === b && (
                  <button
                    onClick={handleAddField}
                    disabled={addfield.length > 3 ? true : false}
                  >
                    AddField
                  </button>
                )}

                {addfield.length !== 1 && (
                  <button onClick={(c) => handleRemoveField(b)}>
                    RemoveField
                  </button>
                )}
                <br />
              </>
            );
          })}
        </div>
        <br />
        {/* ---------------Radio----------------- */}
        <div value={Gender} onChange={handleChange}>
          <label htmlFor="Gender">Gender:</label> &nbsp; &nbsp;
          <input type="radio" name="Gender" value="Male" />
          Male; &nbsp; &nbsp;
          <input type="radio" name="Gender" value="Female" />
          Female
        </div>{" "}
        <br />
        {/* --------checkbox---------------- */}
        <div value={Language} onChange={handleChange}>
          <label htmlFor="Language">Language:</label> &nbsp; &nbsp;
          <input type="checkbox" name="Language" value="Kannada" />
          Kannada
          <input type="checkbox" name="Language" value="Telugu" />
          Telugu
          <input type="checkbox" name="Language" value="Tamil" />
          Tamil
        </div>{" "}
        <br />
        {/* -------------------------- */}
        <button disabled={data ? true : false}>Submit</button>
      </form>
    </section>
  );
};

export default ControlledFormComp;
