import { useState, useEffect } from "react";

function useMenuItems(filterObject = {}) {
  // takes an object with filters as key value pairs
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    fetch("/api/menuitems")
      .then((res) => res.json())
      .then((data) => setFetchData(data))
      .catch();
  }, []);
  return fetchData;
}

export default useMenuItems;
