import React from "react";
import ChowButton from "../../shared_components/ChowButton.js";

const DeliverySelector = (props) => {
  return (
    <div className="delivery-selector">
      <h3>delivery</h3>
      <div className="delivery-display">
        <span className="day-describer">today</span>
        <span className="time">15:30</span>
      </div>
      <ChowButton />
    </div>
  );
};

export default DeliverySelector;
