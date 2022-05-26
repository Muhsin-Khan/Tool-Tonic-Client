import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import "./Purchase.css";
import { toast } from 'react-toastify';

const Purchase = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id, product]);

  // Handle Deliver Button......
  const handleDecreaseQuantity = () => {
    const quaNtity = product.quantity - 1;
    if (quaNtity <= product.MOQ) {
      return alert("Hey...! You have to buy a minimum quantity.");
    }
    const newQuantity = { quaNtity };

    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  };

  // Handle Purchase Order.......................
  const handlePurchaseOrder = (event) => {
    event.preventDefault();
    console.log("button clicked");
    

    const quantityNumber = event.target.number.value;
    if (quantityNumber <= product.MOQ) {
      return alert("Please! input a valid number. You have to purchase a minimum quantity.");
    }
    if (quantityNumber > product.AQ ) {
      return alert("Please! input a valid number. You can not buy more than available quantity");
    }
    
    const purchaseOrder = {
      productName: product.name,
      productId: id,
      productQuantity: quantityNumber,
      customerEmail: user?.email
    }

    // console.log(purchaseOrder)

    fetch('http://localhost:5000/order',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(purchaseOrder)
    })

    .then(res => res.json())
    .then(data => {
      console.log(data);
      toast("Your order has been placed!!")
         
      
    })

    
    // console.log("checking...", quantityNumber);
    // const quaNtity = parseInt(product.quantity) + parseInt(quantityNumber);
    // const newQuantity = { quaNtity };
    // console.log(newQuantity);

    // fetch(`http://localhost:5000/product/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newQuantity),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProduct(data);
    //     console.log("checking-2", newQuantity);
    //   });
    event.target.reset();
  };

  return (
    <div className="container">
      <div className="update-product d-flex w-50 mx-auto m-5">
        {/* informatiosn side or left side */}

        <div className="ms-4 mt-3 mb-3 pe-4 w-50">
          <h4 className="text-lg font-bold">{product.name}</h4>
          <img className="w-50 mt-2 ps-2 mb-3" src={product.img} alt="" />
          <h5 className="font-semibold mb-2">Minimum Order Quantity: {product.MOQ}</h5>
          <h5 className="font-semibold mb-2">Available Quantity: {product.AQ}</h5>
          <h4 className="text-xl font-semibold my-3">Price: ${product.price}<small className="small"> /Unit</small> </h4>
          <h6>product Id: {id}</h6>
        </div>

        {/* Input side or right side */}

        <div className="me-4 mt-3 pt-5 justify-content-center align-items-center ">
          <br />
          {/* <button
            className="decrease-btn mb-5"
            onClick={handleDecreaseQuantity}
          >
            Decrease Product Quantity
          </button>
          <br /> */}
          <div className="update-product-form mb-5">
            <form className="" onSubmit={handlePurchaseOrder}>
              <h5 className="mb-3 font-bold text-center text-green-700">Input Order Details</h5>
              <input
                className="mb-2 mt-2 input input-bordered w-100 font-bold text-xs "
                disabled
                placeholder="Name"
                value={product?.name}
                type="text"
                name="name"
              />
              <input
                className="mb-2 mt-2 input input-bordered w-100"
                disabled
                placeholder="Name"
                value={id}
                type="text"
                name="name"
              />
              <input
                className="mb-2 mt-2 input input-bordered w-100"
                placeholder="Quantity"
                type="number"
                name="number"
              />
              
              <input
                className="mb-2 mt-2 input input-bordered w-100"
                disabled
                value={user?.email}
                type="email"
                name="email"
              />
              
              <br />
              <input
                className="mb-2 mt-2  px-5 update-quantity-btn w-100"
                type="submit"
                value={"Place Order"}
              />
            </form>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Purchase;