import React from "react";
import { Link } from "react-router-dom";
import TextDisplayBox from "../../shared_components/TextDisplayBox";

const DeliverySelector = (props) => {
  return (
    <TextDisplayBox
      title="delivery time"
      value="Today 17:30"
      onChange={props.onChange}
    />
    // <div className="delivery-selector">
    //   <h3>delivery</h3>
    //   <div className="delivery-display">
    //     <span className="day-describer">today</span>
    //     <span className="time">15:30</span>
    //   </div>
    //   <Link to={(location) => location.pathname + "?deliverySelect=true"}>
    //     <ChowButton title="change this" />
    //   </Link>
    // </div>
  );
};

export default DeliverySelector;
