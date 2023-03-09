import React from "react";
import { useState } from "react";
import products from "../products/products.json";
const SearchFilter = () => {
  let [search, setSearch] = useState("");
  return (
    <section>
      <article>
        <input
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </article>

      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>price</th>
              <th>description</th>
              <th>title</th>
              <th>category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((val, key) => {
              if (
                val.category.toLowerCase().includes(search) ||
                val.id.toString().includes(search) ||
                val.title.toLowerCase().includes(search) ||
                val.price.toString().includes(search)
              ) {
                return (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.price}</td>
                    <td>{val.description}</td>
                    <td>{val.title}</td>
                    <td>{val.category}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SearchFilter;
