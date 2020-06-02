import styled from "styled-components";
import ChowButton from "./ChowButton";
export const CheckoutButton = styled(ChowButton)`
  position: fixed;
  bottom: ${({ theme }) => theme.pd900};
  right: ${({ theme }) => theme.pd900};
  font-size: ${({ theme }) => theme.fz400};
  padding: ${({ theme }) => theme.pd600};
  backdrop-filter: blur(2px);
  z-index: 10;
  opacity: 0.9;
`;
