// These are a collection of strings or things

// let ninjas = ['shaun', 'ryu', 'chun-li'];
// console.log(ninjas);

// to replace values:
// ninjas [1] = 'ken';
// console.log(ninjas);



// using numbers: no quotes

// let ages = [20, 25, 30, 60];
// let random = ['shaun', 30, 'crystal', 39];

// console.log(ages, random);

// console.log(ninjas.length);


// array methods
// joining string items, below with a comma:

// let result = ninjas.join(', ');

// let result = ninjas.indexOf('chun-li');


// concat means concatination: joining things together

// let result = ninjas.concat(['ken', 'crystal']);


    // .push adds on another item at the end and then shows the length. It changes the original value.
// let result = ninjas.push('ken');
// result = ninjas.pop();


// console.log(result);
// console.log(ninjas);



// // _______________________________
// section 71: FILTER array methods

// const scores = [10, 30, 15, 25, 50, 40, 5];

// // // // filtering scores based on a condition:
// // const filteredScores = scores.filter(score => {
// //     return score > 20;
// // });

// // console.log(filteredScores);


// // .// filtering with a table of users:

// const users = [
//     {name: 'shaun', premium: true},
//     {name: 'yoshi', premium: false},
//     {name: 'mario', premium: false},
//     {name: 'chun-li', premium: true},
// ];

// // const premiumUsers = users.filter(user => {
// //     return user.premium;
//     // // the above can be shortened to:
// const premiumUsers = users.filter(user => user.premium);

// console.log(premiumUsers);



// // Section 72: map method: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31466234

// iterates an array and updates them into a new array.

// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// // const salePrices = prices.map((price) => {
// //     return price / 2;
// // });

// // // the above callback function can be shortened to:
// const salePrices = prices.map(price => price / 2);

// console.log(salePrices);




// // using objects in arrays with 2 properties:

// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'msuhroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50},
// ];

// const saleProducts = products.map(product => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price / 2};
//     } else {
//         return product;
//     }
// });

// console.log(saleProducts);



// // Reduce method: s73: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31466231

// const scores = [10, 20, 60, 40, 70, 90, 30];

// // for each value in the array we fire (=>) a callback function
// // // acc = accumumator; curr  = currrent
// const result = scores.reduce((acc, curr) => {
    
//     if(curr > 50){
//         acc++;
//     }
//     return acc,
    
// }, 0);

// console.log(result);



// // using scores data in a game

// const scores = [ 
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30}, 
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60},
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 90}, 
//     {player: 'mario', score: 11110},
//     {player: 'crystal', score: 60},
// ];

// // // add up mario's scores

// const marioTotal = scores.reduce((acc, curr) => {
//     if(curr.player === 'mario'){
//         acc += curr.score;
//     }
//     return acc;
// },0);

// console.log(marioTotal);



//// _______________________________________

// // new array method: FIND method: section 74: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31466230

// const scores = [10, 5, 0, 40, 30, 10, 20, 70];

// // // it will find the first value with a certain condition in the array, return it, then stop.

// const firstHighScore = scores.find(score => score > 50);
// console.log(firstHighScore);






// // sort method, s 75: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31466232
// // sort in alphabetical order or desc or asc numbers.


// // example 1 sorting names:
// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];


// // .sort is a dextructive method
// // names.sort();
// // reverse spins it around, so to put form z-a, instead of a-z:
// names.sort();
// // the sort method only sorts by the first digit, so 40 will come before 5. 
// names.reverse();
// console.log(names);



// // example 2: - sorting numbers:
// const scores = [10, 50, 20, 5, 35, 70, 45];
// scores.sort();
// scores.reverse();
// console.log(scores);


// // example 3: sorting objects:
// const players = [
//     {name: 'mario', score: 20},
//     {name: 'luigi', score: 10},
//     {name: 'chun-li', score: 50},
//     {name: 'yoshi', score: 30},
//     {name: 'shaun', score: 70}
// ];



// // fire a callback function to compare each consecutive pairs of elements. we want the BIGGEST score to come FIRST
// players.sort((a, b) => {
//     // if we want a to come first, we use -1; if b to come first, +1; if they are the same, 0.
//     if(a.score > b.score){
//         return -1;
//     } else if (b.score > a.score){
//         return 1;
//     } else {
//         return 0;
//     }
// });

// console.log(players);

// // a shorter version of the above:
// // if b is a smaller number than a, there will be a negative number, so it appears at the top (on an number line -1 0 +1 is how they appear)
// players.sort((a,b) => b.score - a.score);

// // // to reverse the scores
// // players.reverse();

// console.log(players);




//________________________________________
// section 76: chaining array methods
// BELOW: WITHOUT method chaining:

const products = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50},
];

// // filter products that are not over 20 in price to get a new array:
// const filtered = products.filter(product => product.price > 20);

// // map a new array with a sentence for promo products:
// const promos = filtered.map(product => {
//     return `The ${product.name} is ${product.price / 2} pounds`;
// });
// console.log(promos);

// // BELOW: WITH Method Chaining:
// the chained methods are on separate lines for readability
const promos = products
    .filter(product => product.price > 20)
    .map(product => `The ${product.name} is ${product.price / 2} pounds`);
    
console.log(promos);