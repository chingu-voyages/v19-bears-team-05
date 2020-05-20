import React from "react";
import useBasket from "../../../../hooks/useBasket";

const MenuItem = (props) => {
  const [basketState, updateBasket] = useBasket();
  return (
    <div className="menu-item">
      <h3>{props.name}</h3>
      <h5>{props.vendor}</h5>
      <h5>{props.description}</h5>
      <h3>{props.price}</h3>
      <button onClick={() => updateBasket({type: "add_item", })}>Add</button>
      <button>More from this Resturant</button>
    </div>
  );
};

export default MenuItem;
