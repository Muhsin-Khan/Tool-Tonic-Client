import React, { useEffect, useState } from "react";
import "./Reviews.css";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://lit-brook-67654.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container">
      <h1 className="products-title pt-4 pb-1 mt-3 mb-4  text-4xl font-semibold ">
        {" "}
        Reviews{" "}
      </h1>
      <div className="reviews">
        {reviews.slice(0, 3).map((r) => (
          <Review key={r._id} r={r}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
