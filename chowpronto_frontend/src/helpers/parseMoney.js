const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

function formatEuro(cents) {
  return formatter.format(cents / 100);
}

export default formatEuro;
