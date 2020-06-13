import React, { useContext, useState, useEffect } from "react";
import OptionListBox from "./OptionListBox";
import { MenuContext } from "../state/MenuContext";

const Filter = (props) => {
  const { state, dispatch } = useContext(MenuContext);
  const [tags, setTags] = useState([]);
  const [minimised, setMinimised] = useState(true);
  useEffect(() => {
    function getTags() {
      fetch(`/api/tags`)
        .then((res) => res.json())
        .then((data) => setTags(data.map((v) => v.name)));
    }
    getTags();
  }, []);
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
        allListItem={minimised ? tags.filter((v, i) => i < 5) : tags}
        selectedListItem={state.tags}
        additionalAction={() => setMinimised(false)}
      />
    </div>
  );
};

export default Filter;
