import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import defaultProfilePic from "../../assets/images/default-profile-pic.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { UserCardProfile, ReviewCardText } from "../../style/GlobalWrappers";

import {
  LikeButton,
  CommentButton,
  SplitButton,
} from "../../style/GlobalButtons";

import { BaseCard } from "../../style/GlobalWrappers";
import Spinner from "../GenericSpinner";
import { Link } from "react-router-dom";

export const ReviewCard = styled(BaseCard)``;

const MAX_REVIEW_LENGTH = 133;
const MAX_COMMENT_LENGTH = 27;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
`;

const StyledLinkMore = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
`;

const GenericReviewCard = (props) => {
  const {
    review: {
      content,
      restaurant: { name, id },
      author: { first_name, last_name, amount_of_reviews, id: authorID },
      amount_of_likes,
      amount_of_comments,
      top_2_comments,
      avatar,
    },
  } = props;
  return (
    <ReviewCard>
      <UserCardProfile>
        <StyledLink to={`/users/${authorID}`}>
          <img src={avatar ? avatar : defaultProfilePic}></img>
        </StyledLink>

        <div>
          <StyledLink to={`/users/${authorID}`}>
            {first_name + " " + last_name}{" "}
          </StyledLink>
          <p>{amount_of_reviews} Reviews in Total</p>
        </div>
      </UserCardProfile>
      <ReviewCardText>
        {content.length > MAX_REVIEW_LENGTH ? (
          <div>
            <StyledLink to={`/restaurants/${id}`}>{name}</StyledLink>

            <p>{`${content.substring(0, MAX_REVIEW_LENGTH)}...`}</p>
            <StyledLinkMore to={`/restaurants/${id}`}>Read more</StyledLinkMore>
          </div>
        ) : (
          <div>
            <StyledLink to={`/restaurants/${id}`}>{name}</StyledLink>
            <p>{content}</p>{" "}
          </div>
        )}
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
                <div key={index}>
                  <h3>
                    {comment.author.first_name + " " + comment.author.last_name}
                  </h3>
                  <p>
                    {comment.content.length > MAX_COMMENT_LENGTH
                      ? `${comment.content.substring(0, MAX_COMMENT_LENGTH)}...`
                      : `${comment.content.substring(0, MAX_COMMENT_LENGTH)}`}
                  </p>
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
