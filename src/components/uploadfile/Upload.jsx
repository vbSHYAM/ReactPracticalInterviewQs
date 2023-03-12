import React from "react";
import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    e.preventDefault();
    console.log(file);
  };

  let handleFileRemove = (e) => {
    e.preventDefault();
    setFile(null);
    alert("file removed")
  };

  let handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <br />

      <button onClick={handleFileUpload}>Upload</button>
      <br />

      <button onClick={handleFileRemove}>Remove</button>
    </div>
  );
};

export default Upload;
