function useDelivery() {
  const deliverySlots = [1800, 1830, 1845, 1900];
  const getAvailable = async () => {
    return new Promise((res, rej) => setTimeout(() => res(deliverySlots), 200));
  };
  return { getAvailable };
}

export default useDelivery;
