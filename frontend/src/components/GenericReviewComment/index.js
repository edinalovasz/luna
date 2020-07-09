import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import DayJS from "react-dayjs";

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
  const {
    comment: {
      content,
      author: { first_name, last_name },
      created,
    },
  } = props;
  return (
    <WideReviewCardComment>
      <div>
        <h3>{first_name + " " + last_name}</h3>
        <Content>{content}</Content>
      </div>
      <div>
        <p>
          <DayJS format="MM.DD.YYYY HH:mm">{created}</DayJS>
        </p>
      </div>
    </WideReviewCardComment>
  );
};

export default GenericReviewComment;
