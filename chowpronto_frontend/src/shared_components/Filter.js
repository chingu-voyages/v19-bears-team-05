import React from "react";

const Filter = (props) => {
  const mockFilter = ["vegetarian", "gluten-free", "kids", "desert"];
  return (
    <div className="filter">
      <fieldset>
        <ul>
          {mockFilter.map((v, i) => (
            <li key={v}>
              <input type="checkbox" name={v} id={v} />
              <label htmlFor={v}>{v}</label>
            </li>
          ))}
          <li>more options</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Filter;
