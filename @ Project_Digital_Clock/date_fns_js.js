// using date-fns
/// Dates and times library at date-fns.org: https://date-fns.org/
// Formatting dates: https://date-fns.org/v2.28.0/docs/format

const now = new Date();

// check that the time now is now, should return true
console.log(dateFns.isToday(now));


// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));


/// comparing dates
const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));