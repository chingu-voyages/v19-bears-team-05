import React, { useContext } from "react";
import BoxContainer from "../../../../shared_components/BoxContainer";
import { MenuContext } from "../../../../state/MenuContext";
import styled from "styled-components";
import parseMoney from "../../../../helpers/parseMoney";

export default function BasketSummary() {
  const { state } = useContext(MenuContext);
  const basketItems = state.basketItems;
  const totalPrice = state.basketItems.reduce(
    (acc, val) => val.unitPrice * val.quantity + acc,
    0
  );
  console.log("totalPrice", totalPrice);
  return (
    <BasketList title="basket" active={basketItems.length > 0}>
      {basketItems.length > 0 ? (
        <React.Fragment>
          <ul>
            {basketItems.map((v, i) => (
              <li key={i}>
                {v.quantity} x {v.name}
              </li>
            ))}
          </ul>
          <p>
            <strong>total ..... {parseMoney(totalPrice)}</strong>
          </p>
        </React.Fragment>
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
  display: flex;
  flex-direction: column;
  p {
    align-self: flex-end;
  }
`;
