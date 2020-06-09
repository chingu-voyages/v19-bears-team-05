import React from "react";
import OptionsSvg from "../../../assets/svgs/settingsPage/index";
import {
  Title,
  BorderedContainer,
  InnerTitle,
  Grid,
} from "./components/styledComponents";

export default function PreviousOrders() {
  // TODO: state will need to live here or go up higher
  // TODO: higher if all state in settings is fetched in one request and fed to children
  // TODO: stays here if we separate concerns by fetching for orders here
  const orders = [
    { id: 0, date: "28/12/2020", price: "$10.95" },
    { id: 1, date: "21/02/2020", price: "$56.95" },
    { id: 2, date: "18/01/2020", price: "$46.95" },
  ];
  return (
    <article>
      <Title>See your previous orders</Title>
      <BorderedContainer>
        <InnerTitle>Previous Orders</InnerTitle>
        <OrdersList orders={orders} />
      </BorderedContainer>
    </article>
  );
}

function OrdersList({ orders }) {
  return (
    <div>
      {orders.map(({ id, date, price }) => (
        <Grid key={id}>
          <div style={{ justifySelf: "flex-start" }}>{date}</div>
          <div style={{ justifySelf: "flex-start", padding: "1em 1.2em" }}>
            {price}
          </div>
          <div>
            <img src={OptionsSvg.src} alt={OptionsSvg.alt} />
          </div>
        </Grid>
      ))}
    </div>
  );
}
