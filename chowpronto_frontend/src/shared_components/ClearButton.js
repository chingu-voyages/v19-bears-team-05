import styled from "styled-components";
export const ClearButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  position: absolute;
  right: ${({ theme }) => theme.pd600};
  bottom: ${({ theme }) => theme.pd600};
`;
