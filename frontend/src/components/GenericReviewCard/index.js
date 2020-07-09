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
import Spinner from "../GenericSpinner";

export const ReviewCard = styled(BaseCard)``;

const MAX_REVIEW_LENGTH = 133;
const MAX_COMMENT_LENGTH = 27;

const GenericReviewCard = (props) => {
  const {
    review: {
      content,
      restaurant: { name },
      author: { first_name, last_name },
      amount_of_likes,
      amount_of_comments,
      top_2_comments,
    },
  } = props;
  return (
    <ReviewCard>
      <UserCardProfile>
        <img src={placeHolderProfilePic}></img>
        <div>
          <h1>{first_name + " " + last_name}</h1>
          <p>6 Reviews in Total</p>
        </div>
      </UserCardProfile>
      <ReviewCardText>
        <div>
          <h1>{name}</h1>
          {content.length > MAX_REVIEW_LENGTH ? (
            <div>
              {`${content.substring(0, MAX_REVIEW_LENGTH)}...`}
              <a href="#">Read more</a>
            </div>
          ) : (
            <p>{content}</p>
          )}
        </div>
        <SplitButton>
          <LikeButton>
            <FontAwesomeIcon icon={["fa", "thumbs-up"]} />
            Like {amount_of_likes}
          </LikeButton>
          <CommentButton>Comment {amount_of_comments}</CommentButton>
        </SplitButton>
        <div>
          <h2>Latest Comments</h2>
          {top_2_comments ? (
            top_2_comments.map((comment, index) => {
              return (
                <div>
                  <h3>
                    {comment.author.first_name + " " + comment.author.last_name}
                  </h3>
                  <p>{`${comment.content.substring(
                    0,
                    MAX_COMMENT_LENGTH
                  )}...`}</p>
                </div>
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
      </ReviewCardText>
    </ReviewCard>
  );
};

export default GenericReviewCard;
