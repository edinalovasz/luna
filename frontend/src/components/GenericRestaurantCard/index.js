import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import placeHolderRestaurant from "../../assets/images/restaurant.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BaseCard, StarContainer } from "../../style/GlobalWrappers";

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
  img {
    width: ${rem("270px")};
    height: ${rem("270px")};
  }
`;

const GenericRestaurantCard = (props) => {
  return (
    <RestaurantCard>
      <RestaurantCardContent>
        <h2>Restaurant Name</h2>
        <p>Address</p>
        <div>
          <StarContainer>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
            <FontAwesomeIcon icon={["far", "star"]} />
          </StarContainer>
          <h2>11</h2>
        </div>
      </RestaurantCardContent>
      <RestaurantCardImg>
        <img src={placeHolderRestaurant}></img>
      </RestaurantCardImg>
    </RestaurantCard>
  );
};

export default GenericRestaurantCard;
