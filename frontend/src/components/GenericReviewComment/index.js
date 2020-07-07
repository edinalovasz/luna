import React from "react";
import { rem } from "polished";
import styled from "styled-components";

const WideReviewCardComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ebebeb;
  padding: ${rem("10px")} ${rem("10px")} ${rem("22px")} ${rem("10px")};
  h3 {
    font-weight: bold;
    font-size: ${rem("15px")};
    line-height: ${rem("16px")};
    color: #e47d31;
  }
  p {
    font-weight: 300;
    font-size: ${rem("14px")};
  }
  p:first-child {
    font-size: ${rem("14px")};
    line-height: ${rem("16px")};
    color: #4c4c4c;
  }
`;

const Content = styled.p`
  white-space: pre-line;
`;

const GenericReviewComment = (props) => {
  return (
    <WideReviewCardComment>
      <div>
        <h3>Colin Wirz</h3>
        <Content>Actually you have no taste!</Content>
      </div>
      <div>
        <p>01.01.2018 15:22</p>
      </div>
    </WideReviewCardComment>
  );
};

export default GenericReviewComment;
