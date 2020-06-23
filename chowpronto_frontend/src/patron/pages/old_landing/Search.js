import React, { useContext, Fragment } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MenuContext } from "../../../state/MenuContext";
import { SearchSVG } from "./SearchSVG";
import { ElevatedContainer } from "./ElevatedContainer";

export function Search({ input, onChange }) {
  const history = useHistory();
  const { state, dispatch } = useContext(MenuContext);
  return (
    // <ElevatedContainer>
    <Fragment>
      <Flex>
        <InputParent>
          <Input placeholder="Location" value={input} onChange={onChange} />
          <Label>Location</Label>
        </InputParent>
        <Grid>
          <SearchSVG />
          <SearchButton
            onClick={() => {
              dispatch({ type: "set_delivery_postcode", postcode: input });
              history.push({
                pathname: "/menu",
              });
            }}
          >
            Search
          </SearchButton>
        </Grid>
      </Flex>
      <div
        style={{
          gridRow: "3",
          alignSelf: "center",
          justifySelf: "flex-start",
          paddingLeft: "1.54em",
        }}
      >
        Are you in{" "}
        <span
          style={{
            color: "#3949AB",
            letterSpacing: "0.02em",
            fontWeight: 500,
            fontSize: 17,
            cursor: "pointer",
          }}
        >
          Berlin?
        </span>
      </div>
    </Fragment>
    // </ElevatedContainer>
  );
}

// OverLays button and SVG on same level with grid-area: 1 / 1;
export const Grid = styled.div`
  display: grid;
  > * {
    grid-area: 1 / 1;
  }
`;

// Aligns button and input
export const Flex = styled.div`
  grid-row: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const SearchButton = styled.div`
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  background: #3949ab;
  border-radius: 3px;
  padding: 0.71em 2em;
  color: white;
  cursor: pointer;
`;

export const InputParent = styled.div`
  width: 340px;
  height: 72px;
  border: 2px solid #545e97;
  box-sizing: border-box;
  border-radius: 4px;
  display: grid;
  > * {
    grid-area: 1 / 1;
  }
`;

// Location TextInput
export const Input = styled.input`
  display: block;
  border: none;
  color: #111739;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  width: 100%;
  padding: 20px 16px 5px;
  box-sizing: border-box;
  &:focus {
    & + label {
      transform: translateY(-55%);
      transition: transform 0.18s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
  &:not(:placeholder-shown) {
    & + label {
      transform: translateY(-55%);
    }
  }
  ::placeholder {
    visibility: hidden;
  }
  ::-moz-placeholder {
    opacity: 0;
  }
`;

export const Label = styled.label`
  display: block;
  color: #545e97;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  width: 100%;
  align-self: center;
  padding: 20px 16px 5px;
  pointer-events: none;
  box-sizing: border-box;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
