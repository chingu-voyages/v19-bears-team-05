import React from "react";
import styled from "styled-components";
export function LandingInput(props) {
  return (
    <React.Fragment>
      <InputParentContainer>
        <Input
          placeholder={props.label}
          type={props.type}
          onChange={props.onChange}
          value={props.value}
        />
        {props.children}
      </InputParentContainer>
    </React.Fragment>
  );
}

// Styled Components

const InputParentContainer = styled.div`
  border: 2px solid #545e97;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  padding: 10px;
  height: 67px;
  position: relative;
  @media screen and (max-width: 530px) {
    background: white;
    box-shadow: none;
    margin: 20px;
  }
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex: 3;
  font-family: inherit;
  font-size: inherit;
  text-align: left;
  margin-left: 10px;
`;
