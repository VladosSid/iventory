export function refactorDateOrder(date) {
  const month = date.slice(5, 7);

  const year = date.slice(2, 4);
  return `${month} / ${year}`;
}

export function refactorDateProd(date) {
  return date.slice(0, 10).split("-").reverse().join(" / ");
}

const refactorDate = {
  refactorDateOrder,
  refactorDateProd,
};

export default refactorDate;
