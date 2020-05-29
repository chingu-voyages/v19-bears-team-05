import { useState, useEffect } from "react";

//filterObject looks like:
// { tags: string[], search: string}
function useMenuItems(filterObject = {}) {
  // takes an object with filters as key value pairs
  const [menuItems, setMenuItems] = useState([]);
  const [tags, setTags] = useState([]);
  function doFetch(filterObject) {
    let tagString =
      filterObject.tags?.reduce(
        (acc, val, ind) => (ind === 0 ? val : acc + `+${val}`),
        ""
      ) || [];
    let url = `/api/menuitems?tags=${tagString}&search=${
      filterObject?.search?.split(" ").join("+") || ""
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch();
  }

  useEffect(() => {
    doFetch(filterObject);
  }, [filterObject]);
  return { menuItems, doFetch };
}

export default useMenuItems;
