import React, { useState, useEffect } from "react";

import AxiosInstance from "./AxiosInstance";

const Axios = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    AxiosInstance.get("/posts")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Axios;
