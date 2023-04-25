export default function refactorDate(date) {
  const month = date.slice(5, 7);

  const year = date.slice(2, 4);
  return `${month} / ${year}`;
}
