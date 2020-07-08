import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import { StarContainer } from "../../../style/GlobalWrappers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileReviewCard = styled.div`
  border-bottom: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
  padding: ${rem("26px")} 0 ${rem("22px")} 0;
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

const GenericProfileReview = (props) => {
  return (
    <ProfileReviewCard>
      <div>
        <h2>Läderach Chocolatier Suisse</h2>
        <p>01.01.2018 15:22</p>
      </div>
      <StarContainer>
        <FontAwesomeIcon icon={["fas", "star"]} />
        <FontAwesomeIcon icon={["fas", "star"]} />
        <FontAwesomeIcon icon={["fas", "star"]} />
        <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
        <FontAwesomeIcon icon={["far", "star"]} />
      </StarContainer>
      <div>
        <Content>
          This location at the Bahnhofstrasse is quite friendly and easily
          located across the street from the train station. The people there
          seem to be quite good and helpful in their service.
        </Content>
      </div>
    </ProfileReviewCard>
  );
};

export default GenericProfileReview;
