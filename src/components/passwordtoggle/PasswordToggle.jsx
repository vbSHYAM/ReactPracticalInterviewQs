import React, { useState } from "react";

const PasswordToggle = () => {
  let [password, setPassword] = useState("");
  let [showPassword, setShowPassword] = useState(false);
  let [confirmpassword, setConfirmPassword] = useState("");
  let [match, setMatch] = useState(null);

  let ShowPassword = () => {
    if (password === "") {
      alert("enter password");
    } else {
      setShowPassword(!showPassword);
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmpassword) {
      //   alert("password matched");
      setMatch(true);
    } else {
      //   alert("bsdk");
      setMatch(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Password:</label> &nbsp; &nbsp;
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span onClick={ShowPassword}>{showPassword ? "👁️" : "👁️‍🗨️"}</span>
        <br /> <br />
        <label htmlFor="">Confirm Password:</label> &nbsp; &nbsp;
        <input
          type="password"
          name="confirmpassword"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {match===true && (<mark>password correct</mark>)}
        {match===false && (<h1>in correct</h1>)}
      </div>
      <br /> <br />
      <button>Submit</button>
    </form>
  );
};

export default PasswordToggle;
