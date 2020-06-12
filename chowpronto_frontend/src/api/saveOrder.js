function saveOrder(token, userId, formObject, basketItemsArray) {
  const { name, phone, address, postcode, deliveryDate, email } = formObject;
  return fetch("/api/orders/order", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart: basketItemsArray,
      deliveryDetails: {
        name,
        phone,
        address,
        postcode,
        deliveryDate,
        email,
      },
      // patronId: user.patron._id,
      patronId: userId,
    }),
  }).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw res;
    }
  });
}

export default saveOrder;
