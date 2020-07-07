import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import placeHolderProfilePic from "../../assets/images/small-user-image.png";

import { UserCard, UserCardProfile } from "../../style/GlobalWrappers";

const UserCardText = styled.div`
  height: ${rem("115px")};
  padding: ${rem("14px")} ${rem("11px")} ${rem("22px")} ${rem("11px")};
  p {
    display: inline;
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
const GenericUserCard = (props) => {
  return (
    <UserCard>
      <UserCardProfile>
        <img src={placeHolderProfilePic}></img>
        <div>
          <h1>Name</h1>
          <p>6 Reviews in Total</p>
        </div>
      </UserCardProfile>
      <UserCardText>
        <p>
          Im professional photographer with an eye for details in every thing I
          do in my live. Every time a pass by a nice restaurant i have to stop
          and take notes...
        </p>
        <a>read more</a>
      </UserCardText>
    </UserCard>
  );
};

export default GenericUserCard;
