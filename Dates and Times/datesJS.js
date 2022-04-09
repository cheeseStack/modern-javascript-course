// dates and times
// using Constructors in OOP

// const now = new Date();
// console.log(now);
// console.log(typeof now);

// // Year, months, days, times

// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth());
// console.log('getDate:' , now.getDate());
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// //timestamps 
// console.log('timestamp:', now.getTime());

// // date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());



// time stamps, section 83: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31493868
// eeg, saying a blog or article was written 23 days ago, etc

// getTime() shows the number of muilliseconds that have passed since Jan 1st 1970;
const before = new Date('February 1 2019 7:30:59');

const now = new Date();

// the difference in ms between beforedate and now date:
const diff = now.getTime() - before.getTime();
console.log(diff);

const minsDiff = Math.round(diff / 1000 / 60);
console.log(minsDiff);

const hoursDiff = Math.round(minsDiff / 60);
console.log(hoursDiff);

const daysDiff = Math.round(hoursDiff / 24);
console.log(daysDiff);

console.log(`the blog was written ${daysDiff} days ago`);

// converting time stamps into date objects
const timestamp = 1675938474990;

console.log(new Date(timestamp));



/// Dates and times library at date-fns.org: https://date-fns.org/
// Formatting dates: https://date-fns.org/v2.28.0/docs/format
