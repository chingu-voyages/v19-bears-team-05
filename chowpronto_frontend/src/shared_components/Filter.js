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
        onChange={(e) => setFilters([...filters, e])}
        allListItem={mockFilter}
        selectedListItem={filters}
      />
    </div>
  );
};

export default Filter;
