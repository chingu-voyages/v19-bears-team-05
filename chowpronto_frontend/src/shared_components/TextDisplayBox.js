import styled from "styled-components";
import React, { useState } from "react";
import PropTypes from "prop-types";
import BoxContainer from "./BoxContainer";
import { AdditionalActionButton } from "./AdditionalActionButton";

export default function InputBox(props) {
  const [active, setActive] = useState(false);
  return (
    <BoxContainer active={active} title={props.title}>
      <TextInput
        type="text"
        {...props}
        readOnly
        placeholder={props.placeholder || props.title}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <AdditionalActionButton onClick={() => props.additionalAction()}>
        change
      </AdditionalActionButton>
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

InputBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  additionalAction: PropTypes.func,
  placeholder: PropTypes.string,
};
