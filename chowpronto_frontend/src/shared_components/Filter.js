import React, { useState, useContext } from "react";
import OptionListBox from "./OptionListBox";
import { MenuContext } from "../state/MenuContext";

const Filter = (props) => {
  const mockFilter = ["veget", "spicy", "kids", "desert"];
  const { state, dispatch } = useContext(MenuContext);
  return (
    <div className="filter">
      <OptionListBox
        title="filter"
        onChange={(e) => {
          let newArray;
          const foundIndex = state.tags.findIndex((item) => item === e);
          if (foundIndex >= 0) {
            newArray = state.tags.filter((val, ind) => ind !== foundIndex);
          } else {
            newArray = [...state.tags, e];
          }
          dispatch({ type: "set_tags", tags: newArray });
        }}
        allListItem={mockFilter}
        selectedListItem={state.tags}
      />
    </div>
  );
};

export default Filter;
