import styled from "styled-components";
import React, { useState } from "react";
import PropTypes from "prop-types";
import BoxContainer from "./BoxContainer";

export default function InputBox(props) {
  const [active, setActive] = useState(false);
  return (
    <BoxContainer active={active} title={props.title}>
      {/* <TextInput
        type="text"
        name={props.title}
        id={props.title}
        value={props.value}
        readOnly
        onChange={(e) => props.onChange}
        placeholder={props.placeholder || props.title}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <ChangeButton>change</ChangeButton> */}
      <form
        action="POST"
        onChange={(event) => console.log(event.target.name)}
        onFocus={() => setActive(true)}
        // todo set focus only when > 0 items are checked
        // todo add/remove item from checked list
        // todo handle calling function.
      >
        <ul style={{ padding: 0 }}>
          {props.allFilters.map((v) => (
            <FilterListItem key={v}>
              <input type="checkbox" name={v} id={v} key={v} />
              <label htmlFor={v}>{v}</label>
            </FilterListItem>
          ))}
        </ul>
        <input type="checkbox" name="Checkety Choo" id="" />
      </form>
    </BoxContainer>
  );
}

const FilterListItem = styled.li`
  font-size: ${({ theme }) => theme.fz400}
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  label {
    padding-left: 20px;
  }
  input[type="checkbox"]:before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.colors.unfocus};
  }
  input[type="checkbox"]:checked:before {
    background: ${({ theme }) => theme.colors.focus};
  }
`;

InputBox.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  allFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};
