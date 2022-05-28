import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import "./ManageAllProducts.css";

const ManageAllProducts = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete the product?"
    );
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((p) => p._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="container">
      <h2 className="mb-3 mt-4 text-center text-xl font-bold">Manage All Products</h2>
      <div className="d-flex justify-content-center align-items-center">
        <Link to="/dashboard/addaproduct">
          <button className="add-product-button">Add New Product</button>
        </Link>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <h4 className="font-semibold">Total Products: {products.length} </h4>
      </div>

      <div className="mt-2 mb-5 ms-5 me-5 manage-product">
        {products.map((p) => (
          <dev className="manage-product-child m-3" key={p._id}>
            <img className="w-50 mt-2 ps-2 mb-3" src={p.img} alt="" />
            <h4 className="pb-3 font-bold">{p.name}</h4>
            <br />
            <h6>Available Quantitiy: {p.AQ} </h6>
            <h6>Minimum Order Quantity: {p.MOQ} </h6>
            <h5>Price: ${p.price} /Unit </h5>
            <button
              style={{ width: "" }}
              className="bg-danger mt-4 delete-product-button "
              onClick={() => handleDelete(p._id)}
            >
              Delete Item
            </button>
          </dev>
        ))}
      </div>
    </div>
  );
};

export default ManageAllProducts;
