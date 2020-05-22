import React from "react";
import BoxContainer from "../../../../shared_components/BoxContainer";
import useBasket from "../../../../hooks/useBasket";

export default function BasketSummary() {
  const [{ basketItems }, _] = useBasket();
  return (
    <BoxContainer title="basket" active>
      {basketItems.length > 0 ? (
        <ul>
          {basketItems.map((v) => (
            <li>
              {v.quantity}x {v.name}
            </li>
          ))}
        </ul>
      ) : (
        "no items... yet"
      )}
    </BoxContainer>
  );
}
