import React, { useEffect, useState } from "react";
import "./Reviews.css";
import Review from "./Review";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
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
        {reviews.map((r) => (
          <Review 
          key={r._id} r={r}>

          </Review>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
