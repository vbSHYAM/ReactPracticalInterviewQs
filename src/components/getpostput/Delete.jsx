import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AxiosInstance from "./AxiosInstance";

const Delete = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    let data = async () => {
      let fetchdata = await AxiosInstance.get("products/7");
      console.log(fetchdata.data);
      setData(fetchdata.data);
    };
    data();
  }, []);

  let Delete = () => {
    AxiosInstance.delete("products/7");
  };

  return (
    <div>
      <h1>{data.brand}</h1>
      <button onClick={Delete}>DELETE</button>
    </div>
  );
};

export default Delete;
