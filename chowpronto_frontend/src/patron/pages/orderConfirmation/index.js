import React, { useContext } from "react";
import { MenuContext } from "../../../state/MenuContext";
import { Link } from "react-router-dom";
import formatEuro from "../../../helpers/parseMoney";
import styled from "styled-components";
import { PageLayout } from "../../components/PageLayout";
import { StyledPageMain } from "../../components/StyledPageMain";

const OrderConfirmationPage = (props) => {
  const { state } = useContext(MenuContext);
  return (
    <PageLayout>
      {/* <MenuSidebar {...location} /> */}
      <StyledPageMain>
        <h1>order confirmation</h1>
        <h4>thanks for your order ref: {state.orderId}</h4>
        <h2>order summary:</h2>
        <ul>
          {state.basketItems.map((val) => (
            <BasketPageItem key={val._id}>
              <span>
                {val.quantity} x {val.name} @ {formatEuro(val.unitPrice)} ={" "}
                {formatEuro(val.unitPrice * val.quantity)}
              </span>
            </BasketPageItem>
          ))}
        </ul>
        <h4>you may pay the driver directly by cash or card</h4>
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

export default OrderConfirmationPage;
