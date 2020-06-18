function saveOrder(token, patronId, formObject, basketItemsArray) {
  const cart = basketItemsArray.map(({ _id, quantity, unitPrice }) => ({
    _id,
    quantity,
    unitPrice,
  }));
  const { name, phone, address, postcode, deliveryDate, email } = formObject;
  return fetch("/api/orders/order", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart,
      deliveryDetails: {
        name,
        phone,
        address,
        postcode,
        deliveryDate,
        email,
      },
      patronId,
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
