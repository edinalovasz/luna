import React from "react";
import Fade from "react-reveal/Fade";
import { rem } from "polished";
import styled from "styled-components";
import placeHolderRestaurant from "../../assets/images/restaurant.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BaseCard, StarContainer } from "../../style/GlobalWrappers";
import StarRatingFix from "../StarRatingFix";
import { Link } from "react-router-dom";

const RestaurantCard = styled(BaseCard)``;

const RestaurantCardContent = styled.div`
  padding: ${rem("8px")} ${rem("13px")} ${rem("13px")} ${rem("13px")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 33%;
  div {
    display: flex;
    justify-content: space-between;
    padding-top: ${rem("6px")};
  }
  h2 {
    font-weight: normal;
    font-size: ${rem("20px")};
  }
  h2:nth-child(2) {
    font-weight: 300;
  }
  > p:first-child {
    font-size: ${rem("18px")};
  }
`;

const RestaurantCardImg = styled.div`
  overflow: hidden;
  width: ${rem("270px")};
  height: ${rem("270px")};
  img {
    object-fit: contain;
    flex-shrink: 0;
    max-height: 270px;
    width: auto;
  }
`;

const placeholderImage = "https://picsum.photos/200/200";

const GenericRestaurantCard = (props) => {
  const {
    restaurant: { id, name, city, avg_rating, no_of_ratings, image },
  } = props;
  return (
    <Fade right cascade>
      <RestaurantCard>
        <RestaurantCardContent>
          <h2>{name}</h2>
          <p>{city}</p>
          <div>
            <StarRatingFix avg_rating={parseInt(avg_rating)} />
            <h2>{no_of_ratings}</h2>
          </div>
        </RestaurantCardContent>
        <RestaurantCardImg>
          <Link to={`/restaurants/${id}`}>
            <img
              alt={"restaurant picture"}
              src={image ? image : placeholderImage}
            />
          </Link>
        </RestaurantCardImg>
      </RestaurantCard>
    </Fade>
  );
};

export default GenericRestaurantCard;
