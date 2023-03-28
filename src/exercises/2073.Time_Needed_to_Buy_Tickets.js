/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let time = 0;
  let len = parseInt(tickets?.length, 10);
  // let min = parseInt(Math.min(...tickets), 10);
  // console.log('min', min);
  // tickets = tickets?.map((ticket) => {
  //   return parseInt(ticket, 10) - min;
  // });
  // time += min * len;
  // if (tickets[k] === 0) return time;
  let trackingIndex = k;
  while (tickets[trackingIndex] !== 0) {
    if (tickets[0] === 0) {
      tickets.shift();
      tickets.push(0);
      trackingIndex--;
      continue;
    }
    if (tickets[0] !== 0) {
      time += 1;
      let firstTicket = tickets.shift();
      tickets.push(firstTicket - 1);
      if (trackingIndex === 0) trackingIndex = len - 1;
      else trackingIndex--;
      continue;
    }
  }
  console.log('tickets:', tickets);
  console.log('time:', time);

  return time;
};
export { timeRequiredToBuy };
