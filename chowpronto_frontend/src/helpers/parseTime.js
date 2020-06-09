import days from "./days";

function parseTime(date) {
  function msToDay(ms) {
    return Math.floor(ms / 1000 / 60 / 60 / 24);
  }
  const currentDate = new Date();
  const elapsed = msToDay(+date) - msToDay(+currentDate);
  return `${
    elapsed === 0 ? "today" : elapsed === 1 ? "tomorrow" : days[date.getDay()]
  } @ ${date.getHours()}:${
    date.getMinutes() < 10 ? "0" : ""
  }${date.getMinutes()}`;
}

export default parseTime;
