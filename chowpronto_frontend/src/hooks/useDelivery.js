function useDelivery() {
  const deliverySlots = [1420, 1430, 1440, 1450, 1500, 1510, 1520, 1800];
  const getAvailable = async () => {
    return new Promise((res, rej) => setTimeout(() => res(deliverySlots), 200));
  };
  return { getAvailable };
}

export default useDelivery;
