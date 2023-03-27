import React, { useState } from "react";

const CheckboxForm = () => {
  const [languages, setLanguages] = useState({
    kannada: false,
    telugu: false,
    tamil: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setLanguages((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(languages);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Kannada:
          <input
            type="checkbox"
            name="kannada"
            checked={languages.kannada}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
      <div>
        <label>
          Telugu:
          <input
            type="checkbox"
            name="telugu"
            checked={languages.telugu}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
      <div>
        <label>
          Tamil:
          <input
            type="checkbox"
            name="tamil"
            checked={languages.tamil}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckboxForm;
