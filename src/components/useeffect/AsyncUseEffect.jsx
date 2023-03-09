import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const AsyncUseEffect = () => {
  let [data, setData] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <div>
      {data ? (
        <div>
          {data.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>loading.......................</div>
      )}
    </div>
  );
};

export default AsyncUseEffect;
