import React from "react";
import { useState } from "react";
import { createContext } from "react";

export let MyContextApi = createContext();
const ContextProvider = ({ children }) => {
  let [data, SetData] = useState([{
    Name:"cool",
    Id:"007"
  },{
    city:"banglore",
    role:"developer"
  }]);
  return <MyContextApi.Provider value={data}>{children}</MyContextApi.Provider>;
};

export default ContextProvider;
