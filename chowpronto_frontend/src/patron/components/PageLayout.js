import styled from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
  & > div:nth-child(1) {
    flex: 1.5;
    height: 100%;
  }
  & > div:nth-child(2) {
    border-left: ${({ theme }) => theme.bd200u};
  }
  @media screen and (max-width: 700px) {
    & > div:nth-child(1) {
      border: solid red 2px;
      flex: 1.5;
      height: 100%;
      min-width: 300px;
      display: none;
    }
  }
`;
