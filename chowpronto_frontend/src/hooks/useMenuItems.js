import { useState, useEffect } from "react";
import useError from "./useError";

//filterObject looks like:
// { tags: string[], search: string}
function useMenuItems(filterObject = {}) {
  // takes an object with filters as key value pairs
  const [menuItems, setMenuItems] = useState([]);
  const error = useError();
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
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((data) => {
        setMenuItems(data);
      })
      .catch((err) => {
        const errMsg =
          err && err.statusText ? err.statusText : "Something went wrong";
        error.push(errMsg);
      });
  }

  useEffect(() => {
    doFetch(filterObject);
  }, [filterObject]);
  return { menuItems, doFetch };
}

export default useMenuItems;
