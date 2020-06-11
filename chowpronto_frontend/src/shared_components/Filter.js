import React, { useContext, useState, useEffect } from "react";
import OptionListBox from "./OptionListBox";
import { MenuContext } from "../state/MenuContext";
import useError from "../hooks/useError";

const Filter = (props) => {
  const { state, dispatch } = useContext(MenuContext);
  const [tags, setTags] = useState([]);
  const error = useError();
  console.log("error.get", error.get);
  useEffect(() => {
    function getTags() {
      fetch(`/api/tags`)
        .then((res) => res.json())
        .then((data) => setTags(data.map((v) => v.name)))
        .catch((err) => {
          const errMsg =
            err && err.statusText ? err.statusText : "Something went wrong";
          error.push(errMsg);
        });
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
        allListItem={tags}
        selectedListItem={state.tags}
      />
    </div>
  );
};

export default Filter;
