import React from "react";
import { useState } from "react";
import AxiosInstance from "./AxiosInstance";

const Post = () => {
  let [data, setData] = useState({
    brand: "",
    category: "",
    description: "",
    discountPercentage: "",
  });

  let { brand, category, description, discountPercentage } = data;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let Payload = { brand, category, description, discountPercentage };
    AxiosInstance.post("products/add", Payload);
    console.log({ data });
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

export default Post;
