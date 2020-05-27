function parseTime(date) {
  function msToDay(ms) {
    return Math.floor(ms / 1000 / 60 / 60 / 24);
  }
  const currentDate = new Date();
  const elapsed = msToDay(+date) - msToDay(+currentDate);
  return `${
    elapsed === 0 ? "today" : elapsed === 1 ? "tomorrow" : date.toDateString()
  } @ ${date.toLocaleTimeString()}`;
}

export default parseTime;
