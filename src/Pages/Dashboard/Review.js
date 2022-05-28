import React from "react";



const Review = ( props ) => {
  const { description, rating, email } = props.r;
  console.log(props.p)
  return (
    <div>
      <div className="">
        
        <div className="review-info">
         <p>Description: {description}</p>
         <h6 className="my-2 font-semibold">Rating{rating} </h6>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default Review;