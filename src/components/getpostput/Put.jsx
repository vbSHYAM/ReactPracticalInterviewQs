import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AxiosInstance from "./AxiosInstance";

const Put = () => {
  let [data, setData] = useState({
    brand: "",
    category: "",
    description: "",
    discountPercentage: "",
  });

  let { brand, category, description, discountPercentage } = data;

  useEffect(() => {
    let Data = async () => {
      let FinalData = await AxiosInstance.get("products/7");
      console.log(FinalData);
      setData(FinalData.data);
    };
    Data();
  }, []);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let Payload = { brand, category, description, discountPercentage };
    AxiosInstance.post("products/add", Payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Brand:</label>
      <input type="text" name="brand" value={brand} onChange={handleChange} />
      <br /> <br />
      {/* ------------------------------ */}
      <label htmlFor="">Category</label>
      <input
        type="text"
        name="category"
        value={category}
        onChange={handleChange}
      />
      <br /> <br />
      {/* --------------------------- */}
      <label htmlFor="">Description</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <br /> <br />
      {/* ------------------------------------ */}
      <label htmlFor="">Discount</label>
      <input
        type="number"
        name="discountPercentage"
        value={discountPercentage}
        onChange={handleChange}
      />{" "}
      <br /> <br />
      {/* ------------------- */}
      <button>SUBMIT</button>
    </form>
  );
};

export default Put;
