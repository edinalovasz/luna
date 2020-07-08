import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRatingFix = ({ number = 3 }) => {
  const [rating, setRating] = useState(number);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <FontAwesomeIcon
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
