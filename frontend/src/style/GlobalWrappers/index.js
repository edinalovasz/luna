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
