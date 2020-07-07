import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import placeHolderProfilePic from "../../assets/images/small-user-image.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { UserCardProfile, ReviewCardText } from "../../style/GlobalWrappers";

import {
  LikeButton,
  CommentButton,
  SplitButton,
} from "../../style/GlobalButtons";

import { BaseCard } from "../../style/GlobalWrappers";

export const ReviewCard = styled(BaseCard)``;

const GenericReviewCard = (props) => {
  return (
    <ReviewCard>
      <UserCardProfile>
        <img src={placeHolderProfilePic}></img>
        <div>
          <h1>Name</h1>
          <p>6 Reviews in Total</p>
        </div>
      </UserCardProfile>
      <ReviewCardText>
        <div>
          <h1>Colins Bar</h1>
          <div>
            <p>
              Ugh. Don't waste your time. Pizza dough good, thin crust but
              ingredients so so. Side of mixed vegetables very oily and mainly
              bell...
            </p>
            <a>read more</a>
          </div>
        </div>
        <SplitButton>
          <LikeButton>
            <FontAwesomeIcon icon={["fa", "thumbs-up"]} />
            Like 11
          </LikeButton>
          <CommentButton>Comment 22</CommentButton>
        </SplitButton>
        <h2>Latest Comments</h2>
        <div>
          <h3>Colin Wirz</h3>
          <p>Actually you have no taste!</p>
        </div>
        <div>
          <h3>Laurent Meyer</h3>
          <p>Sorry Bro!</p>
        </div>
      </ReviewCardText>
    </ReviewCard>
  );
};

export default GenericReviewCard;
