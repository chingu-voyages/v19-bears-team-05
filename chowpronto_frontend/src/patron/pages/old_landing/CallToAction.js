import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export function CallToAction() {
  return (
    <CallToActionContainer>
      <H2>Already a member?</H2>
      <Link to="/login">
        <SignInBtn>Sign in Here</SignInBtn>
      </Link>
    </CallToActionContainer>
  );
}

export const H2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.primary.bg};
    font-size: 36px;
    font-weight: 500;
  `}
`;

export const SignInBtn = styled.button`
  ${({ theme }) => css`
    background: ${theme.primary.bg};
    border: none;
    padding: 0.333em 2em;
    color: ${theme.primary.colorText};
    letter-spacing: 0.01em;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    cursor: pointer;
    &:active {
      transform: translateY(0.1rem);
    }
  `}
`;

const CallToActionContainer = styled.div`
  grid-row: 3;
  grid-column: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
