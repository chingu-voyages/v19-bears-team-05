import styled from "styled-components";
import ChowButton from "./ChowButton";
import { theme } from "../style/global";
export const CheckoutButton = styled(ChowButton)`
  position: fixed;
  bottom: ${({ theme }) => theme.pd900};
  right: ${({ theme }) => theme.pd900};
  font-size: ${({ theme }) => theme.fz400};
  padding: ${({ theme }) => theme.pd600};
  backdrop-filter: blur(2px);
  z-index: 10;
  transform: translateX(${(props) => (props.disabled ? "150%" : "0")});
  transition: transform 0.3s ease-out;
`;
