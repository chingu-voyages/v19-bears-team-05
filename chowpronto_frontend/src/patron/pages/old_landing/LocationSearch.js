import React, { useState } from "react";
import { Search } from "./Search";
export function LocationSearch() {
  // TODO: In the future State will be used for displaying location options.  Otherwise it should live inside <Search />
  const [input, setInput] = useState("");
  // Handle user input
  function handleChange(event) {
    const { value } = event.target;

    setInput(value);
  }
  return (
    <div
      style={{
        height: "20em",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Search input={input} onChange={handleChange} />
    </div>
  );
}
