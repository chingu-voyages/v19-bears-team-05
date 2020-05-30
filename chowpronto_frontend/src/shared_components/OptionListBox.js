import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import BoxContainer from "./BoxContainer";
import { AdditionalActionButton } from "./AdditionalActionButton";

export default function InputBox(props) {
  return (
    <BoxContainer
      title={props.title}
      active={props.selectedListItem.length > 0 || false}
    >
      <form
        action="POST"
        onChange={({ target }) => props.onChange(target.name)}
      >
        <ul style={{ padding: 0 }}>
          {props.allListItem.map((v) => (
            <FilterListItem key={v}>
              <input
                type="checkbox"
                name={v}
                id={v}
                key={v}
                value={v}
                checked={
                  props.selectedListItem.find((item) => item === v) || false
                }
                onChange={(e) => {
                  props.onChange(e.target.value);
                }}
              />
              <label htmlFor={v}>{v}</label>
            </FilterListItem>
          ))}
        </ul>
        <AdditionalActionButton type="button">more...</AdditionalActionButton>
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
  allListItem: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedListItem: PropTypes.arrayOf(PropTypes.string).isRequired,
};
