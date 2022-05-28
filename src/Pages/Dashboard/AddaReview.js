import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddaReview = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://lit-brook-67654.herokuapp.com/review`;
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
        toast.success("Review has been added successfully!");
      });
  };
  console.log(user);
  return (
    <div className="w-50 mx-auto">
      <h4 className="text-center p-3 font-bold">Add a Review</h4>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="mb-2 input input-bordered input-primary w-full"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <input
          className="mb-2 input input-bordered input-primary w-full"
          placeholder="Rating"
          type="number"
          {...register("AQ")}
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
          className="mb-2 btn btn-primary w-full"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddaReview;
