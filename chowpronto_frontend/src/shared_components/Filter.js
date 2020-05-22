import React from "react";
import OptionListBox from "./OptionListBox";

const Filter = (props) => {
  const mockFilter = ["vegetarian", "gluten-free", "kids", "desert"];
  return (
    <div className="filter">
      {/* <fieldset>
        <ul>
          {mockFilter.map((v, i) => (
            <li key={v}>
              <input type="checkbox" name={v} id={v} />
              <label htmlFor={v}>{v}</label>
            </li>
          ))}
          <li>more options</li>
        </ul>
      </fieldset> */}
      <OptionListBox
        title="filter"
        onChange={(e) => console.log("e", e)}
        allFilters={mockFilter}
      />
    </div>
  );
};

export default Filter;
