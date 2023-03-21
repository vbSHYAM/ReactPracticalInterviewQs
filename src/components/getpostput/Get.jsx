import React from "react";
import { useState, useEffect } from "react";
import AxiosInstance from "./AxiosInstance";

const Get = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    let Data = async () => {
      try {
        let FinalData = await AxiosInstance.get("products");
        console.log(FinalData.data.products);
        setData(FinalData.data.products);
      } catch (error) {
        console.log(error.code);
      }
    };
    Data();
  }, []);

  return (
    <section>
      {data.map((val, id) => {
        return (
          <div key={id}>
            <h1>{id}</h1>
            {/* <input type="text" name="" id="" value={val.category} /> */}
            <p>{val.category}</p>
            <p>{val.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Get;
