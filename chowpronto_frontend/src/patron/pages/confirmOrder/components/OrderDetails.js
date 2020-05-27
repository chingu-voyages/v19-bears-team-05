import React from "react";
import styled from "styled-components";
import parseMoney from "../../../../helpers/parseMoney";
import parseTime from "../../../../helpers/parseTime";
import ChowButton from "../../../../shared_components/ChowButton";

export default function OrderDetails() {
  const foodList = [
    { name: "pizza", unitPrice: 955, quantity: 2 },
    { name: "burger", unitPrice: 695, quantity: 1 },
    { name: "diet coke", unitPrice: 295, quantity: 1 },
    { name: "french fries", unitPrice: 595, quantity: 10 },
  ];
  const deliveryAddress = "AB12 3EY";
  const deliveryDate = new Date(2020, 4, 29, 18, 30);
  return (
    <StyledOrderDetails>
      <h3>Order Details</h3>
      {foodList.map((val) => {
        return (
          <p>
            {val.name} x {val.quantity}{" "}
            {".".repeat(
              30 - val.name.length - Math.floor(Math.log10(val.quantity))
            )}{" "}
            {parseMoney(val.unitPrice * val.quantity)}
          </p>
        );
      })}
      <p>
        <strong>
          total
          {".".repeat(30)}{" "}
          {parseMoney(
            foodList.reduce((acc, val) => acc + val.unitPrice * val.quantity, 0)
          )}
        </strong>
      </p>
      <h4>Delivering to: {deliveryAddress}</h4>
      <h4>{parseTime(deliveryDate)}</h4>
      <br />
      <div className="change-order">
        <div className="label">
          <p>Want to update your order?</p>
        </div>
        <ChowButton primary title="update" />
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
