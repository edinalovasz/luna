import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import defaultProfilePic from "../../assets/images/default-profile-pic.jpg";

import { UserCard, UserCardProfile } from "../../style/GlobalWrappers";
import { Link } from "react-router-dom";

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
    user: { id, first_name, last_name, amount_of_reviews, about_me, avatar },
  } = props;
  return (
    <UserCard>
      <UserCardProfile>
        <Link to={`/users/${id}`}>
          <img src={avatar ? avatar : defaultProfilePic}></img>
        </Link>
        <div>
          <Link to={`/users/${id}`}>{first_name + " " + last_name} </Link>
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
