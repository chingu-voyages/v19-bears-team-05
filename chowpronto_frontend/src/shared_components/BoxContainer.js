import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BoxContainer = ({ active, children, title }) => {
  return (
    <StyledBoxContainer active={active}>
      {title && <Title active={active}>{title}</Title>}
      {children}
    </StyledBoxContainer>
  );
};

export default BoxContainer;

export const StyledBoxContainer = styled.div`
  padding: ${({ theme }) => theme.pd600};
  margin-top: ${({ theme }) => theme.mg600};
  margin-bottom: ${({ theme }) => theme.mg600};
  position: relative;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 17.24%;
  box-sizing: content-box;
  display: flex;
  border: ${({ theme, active }) => (active ? theme.bd200f : theme.bd200u)};
  border-radius: ${({ theme }) => theme.br100};
  &:hover {
    background-color: #00000005;
  }
`;

const Title = styled.span`
  background-color: ${({ theme }) => theme.background};
  position: absolute;
  top: calc(1rem * -0.5);
  left: ${({ theme }) => theme.pd300};
  padding-left: ${({ theme }) => theme.pd300};
  padding-right: ${({ theme }) => theme.pd300};
  font-size: ${({ theme }) => theme.fz200};
  color: ${({ theme, active }) =>
    active ? theme.colors.focus : theme.colors.unfocus};
`;

BoxContainer.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string,
  // children: PropTypes.element || PropTypes.node,
};
