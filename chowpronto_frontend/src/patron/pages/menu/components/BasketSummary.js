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
  return (
    <BasketList title="basket" active={basketItems.length > 0}>
      {basketItems.length > 0 ? (
        <React.Fragment>
          <ul>
            {basketItems.map((v, i) => (
              <li key={i}>
                <span>{v.quantity} x</span>
                <span>{v.name}</span>
                <span>
                  {" "}
                  {".".repeat(
                    8 - Math.floor(Math.log10(v.quantity * v.unitPrice))
                  )}{" "}
                  {parseMoney(v.quantity * v.unitPrice)}
                </span>
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      white-space: nowrap;
    }
    span:nth-child(2) {
      white-space: normal;
      text-align: left;
      margin-left: 10px;
      margin-right: 10px;
      flex: 2;
    }
    span:nth-child(3) {
      align-self: flex-end;
    }
  }
  * {
    color: black;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    align-self: flex-end;
  }
`;
