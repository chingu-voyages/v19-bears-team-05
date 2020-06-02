import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useDelivery from "../../hooks/useDelivery";

const DeliverySelect = (props) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const { getAvailable } = useDelivery();
  useEffect(() => {
    getAvailable().then((data) => setAvailableSlots(data));
  }, []);
  return (
    <div className="delivery-select modal-page">
      <div className="modal-message">
        <Link to={(location) => console.log("location", location)}>
          <button>close</button>
        </Link>
        <h1>Select Delivery Slot</h1>
        <div className="time-select">
          {availableSlots.map((v) => (
            <div
              role="button"
              className="slot"
              key={v}
              onClick={() => {
                console.log("changed delivery slot");
              }}
            >
              {v}
            </div>
          ))}
          <button>okay</button>
          <button>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeliverySelect;
