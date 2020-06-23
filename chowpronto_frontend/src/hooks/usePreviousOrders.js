import { useEffect, useState, useContext } from "react";
import UserContext from "../state/UserContext";
import fetchPreviousOrders from "../api/fetchPreviousOrders";

function usePreviousOrders(setErrMsg) {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState(null);
  const patronId =
    user && user.patron && user.patron._id ? user.patron._id : null;
  const token = user && user.token ? user.token : null;

  useEffect(() => {
    if (token && patronId) {
      fetchPreviousOrders(token, patronId)
        .then((data) => setOrders(data))
        .catch((err) =>
          setErrMsg("Can't retrieve info about previous orders from server")
        );
    }
  }, [patronId, token, setErrMsg]);
  return orders;
}

export default usePreviousOrders;
