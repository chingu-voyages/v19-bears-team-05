import React, { useState, useEffect } from "react";
import useDelivery from "../../hooks/useDelivery";
import useBasket from "../../hooks/useBasket";

const DeliverySelect = (props) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const { getAvailable } = useDelivery();
  useEffect(() => {
    getAvailable().then((data) => setAvailableSlots(data));
  }, []);
  const [basket, updateBasket] = useBasket();
  return (
    <div className="delivery-select modal-page">
      <div className="modal-message">
        <h1>Select Delivery Slot</h1>
        <div className="time-select">
          {availableSlots.map((v) => (
            <div
              role="button"
              className="slot"
              key={v}
              onClick={() => {
                updateBasket({ action: "set_delivery_time", time: v });
              }}
            >
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliverySelect;
