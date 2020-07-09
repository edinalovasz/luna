import React from "react";
import {rem} from "polished";
import styled from "styled-components";
import {StarContainer} from "../../../style/GlobalWrappers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import StarRating from "../../StarRatingFix";

const ProfileRestaurantCard = styled.div`
  border-bottom: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
  padding: ${rem("12px")} 0 ${rem("22px")} 0;
  h2 {
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #4c4c4c;
  }
  p:first-child {
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    text-align: justify;
    color: #303030;
  }
  p {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: #303030;
  }
  div {
    margin-bottom: 14px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const Content = styled.p`
  white-space: pre-line;
`;

const GenericProfileRestaurant = (props) => {
    const {
        restaurant: {
            description,
            id,
            name,
            avg_rating,
        },
    } = props
    return (
        <ProfileRestaurantCard>
            <div>
                <h2>{name}</h2>
            </div>
            <span>
        <StarRating avg_rating={avg_rating}/>
      </span>
            <div>
                <Content>
                    {description}
                </Content>
            </div>
        </ProfileRestaurantCard>
    );
};

export default GenericProfileRestaurant;
