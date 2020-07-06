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

export const RestaurantModal = styled(BaseModal)``;

export const RestaurantModalContent = styled.div`
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

export const RestaurantModalImg = styled.div`
  background-color: red;
  overflow: hidden;
  img {
    width: ${rem("270px")};
    height: ${rem("270px")};
  }
`;
