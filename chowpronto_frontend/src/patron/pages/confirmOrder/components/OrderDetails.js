import React, { useContext } from "react";
import styled from "styled-components";
import parseMoney from "../../../../helpers/parseMoney";
import parseTime from "../../../../helpers/parseTime";
import ChowButton from "../../../../shared_components/ChowButton";
import { MenuContext } from "../../../../state/MenuContext";
import { Link } from "react-router-dom";

export default function OrderDetails() {
  const { state } = useContext(MenuContext);
  const { basketItems, formState, deliveryDate } = state;
  const { address, postcode } = formState;
  const delivery = new Date(deliveryDate);
  return (
    <StyledOrderDetails>
      <h3>Order Details</h3>
      {basketItems.map((val) => {
        return (
          <p key={val._id}>
            {val.name} x {val.quantity} {".".repeat()}{" "}
            {parseMoney(val.unitPrice * val.quantity)}
          </p>
        );
      })}
      <p>
        <strong>
          total
          {".".repeat(30)}{" "}
          {parseMoney(
            basketItems.reduce(
              (acc, val) => acc + val.unitPrice * val.quantity,
              0
            )
          )}
        </strong>
      </p>
      <h4>Delivering to:</h4>
      <h4>{address}</h4>
      <h4>{postcode}</h4>
      <h4>{parseTime(delivery)}</h4>
      <br />
      <div className="change-order">
        <div className="label">
          <p>Want to update your order?</p>
        </div>
        <Link to="/menu">
          <ChowButton primary title="update" />
        </Link>
      </div>
    </StyledOrderDetails>
  );
}

const StyledOrderDetails = styled.div`
  text-align: left;
  p {
    font-size: ${({ theme }) => theme.fz300};
  }
  .change-order {
    display: flex;
    justify-content: space-between;
    p {
      max-width: 60%;
      margin: 0;
    }
  }
  flex: 2;
`;
