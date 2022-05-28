import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ( props ) => {
  const { _id, img, name, description, MOQ, price, AQ } = props.p;
  console.log(props.p)
  return (
    <div>
      <div className="product">
        <img className="w-100" src={img} alt="" />
        <div className="product-info">
          <h4 className="text-lg font-bold my-3">{name}</h4>
          <p>Description: {description}</p>
          <h6 className="mb-2 mt-3 font-semibold">Minimum Oreder Quantity: {MOQ} </h6>
          <h6 className="mb-2 font-semibold">Available Quantity: {AQ} </h6>
          
          <h5 className="font-semibold">Price: ${price} <small className="text-sm">/Unit</small></h5>
          
        </div>
        <Link to={"/purchase/"+_id}>
        <button className="w-100 mx-auto mt-3 mb-0 product-button">Purchase</button>
        </Link>
        
        
      </div>
    </div>
  );
};

export default Product;