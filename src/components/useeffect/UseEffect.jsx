import React, { useState, useEffect } from "react";

const UseEffect = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    window
      .fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
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

export default UseEffect;
