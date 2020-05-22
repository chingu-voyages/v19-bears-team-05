import styled from "styled-components";
import React, { useState } from "react";
import PropTypes from "prop-types";
import BoxContainer from "./BoxContainer";

export default function InputBox(props) {
  const [active, setActive] = useState(false);
  return (
    <BoxContainer active={active} title={props.title}>
      <TextInput
        type="text"
        name={props.title}
        id={props.title}
        value={props.value}
        readOnly
        onChange={(e) => props.onChange}
        placeholder={props.placeholder || props.title}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <ChangeButton>change</ChangeButton>
    </BoxContainer>
  );
}

const TextInput = styled.input`
  font-size: ${({ theme }) => theme.fz600};
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  background: transparent;
  font-family: inherit;
`;

const ChangeButton = styled.button`
  border: none;
  outline: none;
  font-family: inherit;
  padding: 0;
  &:active {
    color: ${({ theme }) => theme.colors.active};
  }
`;

InputBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
