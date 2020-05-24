import { useState, useEffect } from "react";

function useMenuItems(filterObject = mockObject) {
  // takes an object with filters as key value pairs
  let tagString =
    mockObject.tags?.reduce(
      (acc, val, ind) => (ind === 0 ? val : acc + `+${val}`),
      ""
    ) || [];
  let url = `/api/menuitems?tags=${tagString}&search=${
    filterObject.search.split(" ").join("+") || ""
  }`;
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFetchData(data))
      .catch();
  }, []);
  return fetchData;
}

const mockObject = {
  tags: ["veget"],
  search: "smo cre",
};

export default useMenuItems;
