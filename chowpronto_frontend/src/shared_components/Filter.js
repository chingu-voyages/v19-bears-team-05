import React from "react";

const Filter = (props) => {
  const mockFilter = ["vegetarian", "gluten-free", "kids", "desert"];
  return (
    <div className="filter">
      <fieldset>
        <ul>
          {mockFilter.map((v) => (
            <li key={v}>
              <label for={v}></label>
              <input type="checkbox" name="v" id="v" />
            </li>
          ))}
          <li>more options</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Filter;
