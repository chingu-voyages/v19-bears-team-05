import React, { useContext } from "react";
import BoxContainer from "../../../../shared_components/BoxContainer";
// import useBasket from "../../../../hooks/useBasket";
import { MenuContext } from "../../../../state/MenuContext";
import styled from "styled-components";

export default function BasketSummary() {
  const { state } = useContext(MenuContext);
  const basketItems = state.basketItems;
  return (
    <BasketList title="basket" active={basketItems.length > 0}>
      {basketItems.length > 0 ? (
        <ul>
          {basketItems.map((v, i) => (
            <li key={i}>
              {v.quantity} x {v.name}
            </li>
          ))}
        </ul>
      ) : (
        "no items... yet"
      )}
    </BasketList>
  );
}

const BasketList = styled(BoxContainer)`
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
    font-size: ${({ theme }) => theme.fz300};
  }
`;
