import { useEffect, useState, useContext } from "react";
import UserContext from "../state/UserContext";

function usePreviousOrders() {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    fetchPreviousOrders(user.token, user.patron._id)
      .then((data) => setOrders(data))
      .catch((err) =>
        err.json().then((json) => {
          console.log(json.errorMsg);
        })
      );
  }, [user.token, user.patron._id]);
  return orders;
}

function fetchPreviousOrders(token, _id) {
  return fetch(`/api/orders/patron/${_id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw res;
    }
  });
}

export default usePreviousOrders;
