import React, { useContext } from "react";
import TextInputBox from "./TextInputBox";
import styled from "styled-components";
import { MenuContext } from "../state/MenuContext";

const Search = (props) => {
  const { state, dispatch } = useContext(MenuContext);
  return (
    <TextInputBox
      title="search"
      value={state.search}
      onChange={(e) => {
        dispatch({ type: "set_search", search: e });
      }}
    />
  );
};

export default Search;
