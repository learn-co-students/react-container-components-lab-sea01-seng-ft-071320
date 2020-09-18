// Code MovieReviews Here
import React from "react";

function MovieReviews(props) {
  return (
    <div className="review-list">
      {props.reviews.map((review) => {
        return (
          <div key={review.display_title} className="review">
            <p>{review.display_title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MovieReviews;
