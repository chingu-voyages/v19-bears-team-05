import React, { useContext } from "react";
import { MenuContext } from "../../../state/MenuContext";
import { Link, useHistory, useLocation } from "react-router-dom";
import formatEuro from "../../../helpers/parseMoney";
import styled from "styled-components";
import SimpleAddIcon from "../../../shared_components/SimpleAddIcon";
import SimpleMinusIcon from "../../../shared_components/SimpleMinusIcon";
import SimpleTrashIcon from "../../../shared_components/SimpleTrashIcon";
import { PageLayout } from "../../components/PageLayout";
import MenuSidebar from "../menu/components/MenuSidebar";
import { StyledPageMain } from "../../components/StyledPageMain";

const BasketPage = (props) => {
  const { state, dispatch } = useContext(MenuContext);
  console.log("state", state);
  const location = useLocation();
  return (
    <PageLayout>
      <MenuSidebar {...location} />
      <StyledPageMain>
        <h1>basket</h1>
        <ul>
          {state.basketItems.map((val) => (
            <BasketPageItem key={val._id}>
              <span>
                {val.quantity} x {val.name} @ {formatEuro(val.unitPrice)} ={" "}
                {formatEuro(val.unitPrice * val.quantity)}
              </span>
              <SimpleAddIcon
                onClick={() =>
                  dispatch({ type: "add_item_to_basket", item: val })
                }
              />
              <SimpleMinusIcon
                onClick={() => {
                  dispatch({
                    type: "remove_single_item_from_basket",
                    item: val,
                  });
                }}
              />
              <SimpleTrashIcon
                onClick={() => {
                  dispatch({ type: "remove_line_from_basket", item: val });
                }}
              />
            </BasketPageItem>
          ))}
        </ul>
        <Link to="/menu"> ← back to menu</Link>
      </StyledPageMain>
    </PageLayout>
  );
};

const BasketPageItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  span:first-child {
    flex: 10;
  }
  div {
    flex: 1;
  }
`;

export default BasketPage;
