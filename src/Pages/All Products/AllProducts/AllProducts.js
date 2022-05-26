import React, { useEffect, useState } from "react";
import Product from "../AllProduct/AllProduct";
import "./AllProducts.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container" >
      <h1 className="products-title pt-4 pb-1 mt-3 mb-4 text-4xl font-semibold"> All Tools </h1>
      <div className="products">
      {
        products.map(p => (
        
          <Product
          key={p._id}
          p={p}
          >
          </Product>
         ))
      }
      </div>
    </div>
  );
};

export default AllProducts;