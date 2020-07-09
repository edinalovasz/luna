import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRatingFix = ({ avg_rating }) => {
console.log("avg rating", avg_rating)
  const [rating, setRating] = useState(avg_rating);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <FontAwesomeIcon
              key={i}
            icon={["fas", "star"]}
            color={ratingValue <= rating ? "#f8e71c" : "#e4e5e9"}
            className="star"
          />
        );
      })}
    </div>
  );
};

export default StarRatingFix;
