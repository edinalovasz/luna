import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import placeHolderProfilePic from "../../assets/images/small-user-image.png";

import { UserCard, UserCardProfile } from "../../style/GlobalWrappers";

const UserCardText = styled.div`
  height: ${rem("115px")};
  padding: ${rem("14px")} ${rem("11px")} ${rem("22px")} ${rem("11px")};
  p {
    /* display: inline; */
    font-weight: bold;
    font-size: ${rem("14px")};
    line-height: ${rem("16px")};
    color: #4c4c4c;
  }
  a {
    padding-left: ${rem("6px")};
    color: #e47d31;
    font-weight: bold;
    cursor: pointer;
    :hover {
      color: #cb641a;
    }
  }
`;

const MAX_TEXT_LENGTH = 132;

const GenericUserCard = (props) => {
  const {
    user: { first_name, last_name, amount_of_reviews, about_me },
  } = props;
  return (
    <UserCard>
      <UserCardProfile>
        <img src={placeHolderProfilePic}></img>
        <div>
          <h1>{first_name + " " + last_name}</h1>
          <p>{amount_of_reviews} Reviews in Total</p>
        </div>
      </UserCardProfile>
      <UserCardText>
        {about_me.length > MAX_TEXT_LENGTH ? (
          <div>
            <p>{`${about_me.substring(0, MAX_TEXT_LENGTH)}...`}</p>
            <a href="#">Read more</a>
          </div>
        ) : (
          <p>{about_me}</p>
        )}
      </UserCardText>
    </UserCard>
  );
};

export default GenericUserCard;
