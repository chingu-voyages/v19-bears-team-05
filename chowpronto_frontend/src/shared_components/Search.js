import React from "react";
import TextInputBox from "./TextInputBox";
import styled from "styled-components";

const Search = (props) => {
  return (
    <TextInputBox
      title="search"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Search;
