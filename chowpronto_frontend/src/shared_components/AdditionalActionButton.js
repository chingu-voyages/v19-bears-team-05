import styled from "styled-components";
export const AdditionalActionButton = styled.button`
  border: none;
  outline: none;
  font-family: inherit;
  padding: 0;
  background-color: transparent;
  &:active {
    color: ${({ theme }) => theme.colors.active};
  }
  cursor: pointer;
  text-align: right;
`;
