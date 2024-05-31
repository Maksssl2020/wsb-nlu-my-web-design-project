export function calcElapsedDays(date) {
  let publicationDate = new Date(Date.parse(date));
  let today = new Date(Date.now());
  let differenceInTime = today.getTime() - publicationDate.getTime();
  let differendeInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  return `${differendeInDays}D AGO`;
}

export function calcSaleEndDate() {
  const now = new Date(Date.now());
  const day = now.getDay() + 7;
  const month = now.getMonth();
  const year = now.getFullYear();

  return `${day} / ${month} / ${year} at 08:00 PM`;
}