import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const BaseRatingInputs = styled.input`
  display: none;
`;

const StartRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null)

    return (
      <div>
          {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                  <label>
                    <BaseRatingInputs
                        name="rating"
                        type="radio"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                    ></BaseRatingInputs>
                    <FontAwesomeIcon
                        icon={["fas", "star"]}
                        color={ratingValue <= (hover || rating) ? "#f8e71c" : "#e4e5e9"}
                        onMouseEnter={()=> setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                    />
                  </label>
              );
          })}
      </div>
    )
}

export default StartRating;