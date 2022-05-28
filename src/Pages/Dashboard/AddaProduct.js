import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";


const AddaProduct = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Product has been added successfully!");
      });
  };
  console.log(user);
  return (
    <div className="w-50 mx-auto">
      <h4 className="text-center p-3 font-bold">Add New Product</h4>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2 input input-bordered input-primary w-full"
          placeholder="Product name"
          {...register("name")}
        />
        <textarea
          className="mb-2 input input-bordered input-primary w-full"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <input
          className="mb-2 input input-bordered input-primary w-full"
          placeholder="Available Quantity"
          type="number"
          {...register("AQ")}
        />
        <input
          className="mb-2 input input-bordered input-primary w-full"
          placeholder="Minimum Order Quantity"
          type="text"
          {...register("MOQ")}
        />
        <input
          className="mb-2 input input-bordered input-primary w-full"
          placeholder="Admin's Email"
          type="email"
          setValue={user?.email}
        //   disabled
          {...register("email")}
        />
        <input
          className="mb-2 input input-bordered input-primary w-full"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2 input input-bordered input-primary w-full"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input className="mb-2 btn btn-primary w-full w-full" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddaProduct;