import styled from "styled-components";
export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  border-right: ${({ theme }) => theme.bd200u};
  padding: ${({ theme }) => theme.pd900};
`;
