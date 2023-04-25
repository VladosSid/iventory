export default function currentDate() {
  const addZero = (value) => (value.length === 1 ? "0" + value : value);

  const getWeekDayName = (value) => {
    switch (value) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 0:
        return "Sunday";
      default:
        break;
    }
  };

  const minutes = addZero(`${new Date().getMinutes()}`);
  const hours = addZero(`${new Date().getHours()}`);
  const day = addZero(`${new Date().getDate()}`);
  const month = `${new Date()}`.slice(4, 7);
  const year = `${new Date().getFullYear()}`;
  const weekday = getWeekDayName(new Date().getDay());

  const seconds = addZero(`${new Date().getSeconds()}`);

  return { minutes, hours, day, month, year, weekday, seconds };
}
