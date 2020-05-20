import React from "react";
import ChowButton from "../../shared_components/ChowButton.js";
import { Link } from "react-router-dom";

const DeliverySelector = (props) => {
  return (
    <div className="delivery-selector">
      <h3>delivery</h3>
      <div className="delivery-display">
        <span className="day-describer">today</span>
        <span className="time">15:30</span>
      </div>
      <Link to={(location) => location.pathname + "?deliverySelect=true"}>
        <ChowButton title="change this" />
      </Link>
    </div>
  );
};

export default DeliverySelector;
