export default function getCleanDate() {
  // return a clean date and time in the form of:
  //    mm dd, YYYY - time
  const currentDate = Date();
  const splitDate = currentDate.split(' ');
  const date1 = splitDate.slice(0, 3).join(' ');
  const date2 = splitDate[3];
  const date3 = splitDate[4];
  const cleanDate = `${date1}, ${date2} - ${date3}`;

  return cleanDate;
}
