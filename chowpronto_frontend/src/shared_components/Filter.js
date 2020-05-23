import React, { useState } from "react";
import OptionListBox from "./OptionListBox";

const Filter = (props) => {
  const mockFilter = ["vegetarian", "gluten-free", "kids", "desert"];
  const [filters, setFilters] = useState([]);
  console.log("filters", filters);
  return (
    <div className="filter">
      <OptionListBox
        title="filter"
        onChange={(e) => {
          let newArray;
          const foundIndex = filters.findIndex((item) => item === e);
          if (foundIndex >= 0) {
            newArray = filters.filter((val, ind) => ind !== foundIndex);
          } else {
            newArray = [...filters, e];
          }
          setFilters(newArray);
        }}
        allListItem={mockFilter}
        selectedListItem={filters}
      />
    </div>
  );
};

export default Filter;
