import { rem } from "polished";
import styled from "styled-components";

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

export const BaseModal = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #ffffff;
  width: ${rem("270px")};
  height: ${rem("410px")};
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: 3px;
  border-top: 8px solid #e47d31;
`;

export const RestaurantCard = styled(BaseModal)``;

export const RestaurantCardContent = styled.div`
  padding: ${rem("8px")} ${rem("13px")} ${rem("13px")} ${rem("13px")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 33%;
  div {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-weight: normal;
    font-size: ${rem("20px")};
  }
  h2:nth-child(2) {
    font-weight: 300;
  }
  > p:first-child {
    font-size: ${rem("18px")};
  }
`;

export const RestaurantCardImg = styled.div`
  overflow: hidden;
  img {
    width: ${rem("270px")};
    height: ${rem("270px")};
  }
`;

export const UserCard = styled(BaseModal)`
  height: ${rem("192px")};
`;

export const UserCardProfile = styled.div`
  height: 38%;
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

export const UserCardText = styled.div`
  height: 62%;
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
      color: #e47d31;
    }
  }
`;
