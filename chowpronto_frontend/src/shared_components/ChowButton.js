import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ChowButton = (props) => {
  const { title, onClick, primary, secondary, tertiary, elevated } = props;
  return (
    <StyledButton
      onClick={onClick}
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
    >
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  text-transform: uppercase;
  font-family: roboto;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fz300};
  padding: ${({ theme }) => theme.pd300};
  border-radius: ${({ theme }) => theme.br100};
  border: none;
  border: ${({ secondary, theme }) => secondary && theme.bd200f};
  background: ${({ primary, theme }) =>
    primary ? theme.primary.bg : "translucent"};
  color: ${({ primary, theme }) => (primary ? "white" : theme.primary.bg)};
  box-shadow: ${({ elevated, theme }) => elevated && theme.sh400};
`;

export default ChowButton;

ChowButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  elevated: PropTypes.bool,
};
