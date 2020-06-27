import React, { useState } from "react";
import OptionsSvg from "../../../assets/svgs/settingsPage/index";
import {
  Title,
  BorderedContainer,
  InnerTitle,
  Grid,
} from "./components/styledComponents";
import formatEuro from "../../../helpers/parseMoney";
import { formatDate } from "../../../helpers/formatDate";
import usePreviousOrders from "../../../hooks/usePreviousOrders";

export default function PreviousOrders() {
  const [errMsg, setErrMsg] = useState(null);
  const orders = usePreviousOrders(setErrMsg);
  return errMsg ? (
    <p>{errMsg}</p>
  ) : !orders ? (
    <></>
  ) : orders.length === 0 ? (
    <Title>You don't have any previous orders</Title>
  ) : (
    <article>
      <Title>See your order history</Title>
      <BorderedContainer>
        <InnerTitle>Previous Orders</InnerTitle>
        <OrdersList orders={orders} />
      </BorderedContainer>
    </article>
  );
}

function OrdersList({ orders }) {
  return orders.map(({ date, total }, index) => (
    <Grid key={index}>
      <div style={{ justifySelf: "flex-start" }}>{formatDate(date)}</div>
      <div style={{ justifySelf: "flex-start", padding: "1em 1.2em" }}>
        {formatEuro(total)}
      </div>
      <div>
        <img src={OptionsSvg.src} alt={OptionsSvg.alt} />
      </div>
    </Grid>
  ));
}
