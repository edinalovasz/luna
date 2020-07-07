import { rem } from "polished";
import styled from "styled-components";

export const PageContainer = styled.div`
  height: 87.5vh;
`;

export const StarContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: center;
  grid-column-gap: ${rem("2px")};
  align-items: center;
  color: #f8e71c;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-row-gap: ${rem("10px")};
  align-items: center;
`;

export const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: ${rem("270px")};
  // height: ${rem("410px")};
  border: 1px solid #ebebeb;
  border-radius: 3px;
  border-top: 8px solid #e47d31;
`;

export const UserCard = styled(BaseCard)`
  height: ${rem("192px")};
`;

export const UserCardProfile = styled.div`
  height: ${rem("70px")};
  display: flex;
  border-bottom: 1px solid #ebebeb;
  overflow: hidden;

  img {
    width: ${rem("70px")};
    height: ${rem("70px")};
  }
  div {
    padding: ${rem("10px")} 0 0 ${rem("8px")};
  }
  h1 {
    color: #e47d31;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
  }
  p {
    color: #4c4c4c;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    padding-top: 5px;
  }
`;

export const ReviewCardText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: ${rem("340px")};
  padding: ${rem("14px")} ${rem("11px")} ${rem("22px")} ${rem("11px")};
  h1 {
    color: #e47d31;
    font-weight: bold;
    font-size: ${rem("20px")};
    line-height: ${rem("23px")};
  }
  h2 {
    font-style: normal;
    font-weight: 300;
    font-size: ${rem("20px")};
    line-height: ${rem("23px")};
  }
  h3 {
    font-weight: bold;
    font-size: ${rem("14px")};
    line-height: ${rem("16px")};
    color: #e47d31;
  }
  p:first-child {
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

export const WideReviewCard = styled(BaseCard)`
  border-top: none;
  width: ${rem("650px")};
  height: 200px;
`;

export const WideUserCardProfile = styled.div`
  height: ${rem("70px")};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
  overflow: hidden;

  img {
    width: ${rem("70px")};
    height: ${rem("70px")};
  }
  div:nth-child(1) {
    display: flex;
  }
  div:nth-child(2) {
    padding: ${rem("10px")} 0 0 ${rem("8px")};
  }
  > div:nth-child(2) {
    margin-right: 10px;
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
    }
  }
  div:nth-child(3) {
    display: flex;
    margin-left: 20px;
  }
  div:nth-child(4) {
    justify-content: flex-end;
    margin-right: 10px;
  }
  h1 {
    color: #e47d31;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
  }
  p {
    color: #4c4c4c;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    padding-top: 5px;
  }
`;

export const WideReviewCardText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: ${rem("118px")};
  padding: ${rem("10px")} ${rem("10px")} ${rem("22px")} ${rem("10px")};
  p {
    display: inline;
    font-size: ${rem("16px")};
    line-height: ${rem("16px")};
    color: #4c4c4c;
    padding-bottom: 10px;
  }
  a {
    font-size: 16px;
    line-height: 18px;
    text-align: right;

    color: #e47d31;
    cursor: pointer;
    :hover {
      color: #cb641a;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PostComment = styled.div`
  display: flex;
`;
