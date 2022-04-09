// 1. What are functions?
// reusable blocks of coode that can interact with webpages and be used as many times as we like by calling it


/* 2. The best functions to use are Expressions: i.e const name = function(){

} */


// function declaration

// function greet(){
//     console.log('Hello, there!');
// }

// function expression. These have a semi-colon at the end of the curly braces };

// const speak = function(){
//     console.log('good day!!')
// };


// greet();
// greet();
// greet();

// speak();
// speak();
// speak();

// hoisting: function declarations can be used anywher in a js file, such as at the bottom , and still be called at the top of the page.
 




// 2. arguments & parameters
// default values can be put into the parameters, such as name = 'luigi' 

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time}, ${name}`);
// };

// speak('mario', 'morning');
// speak();
// speak('shaun', 'day');
// speak('', 'day');

// 4. returning values INSTEAD of printing them out to the console (console.log):
// a value is returned so that it can later be used

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return(area);
// };

// const area = calcArea(5);
// console.log(area);

// // alternatively, a cleaner format of the above:

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log(area);

// // the area const casn then be used in other calculations such as volume:
// const calcVol = function(area){
// };



//// p33: arrow functions: a cleaner, shorter way to write functions => 

// // regular function: 

// const calcArea = function(radius){
//     return 3.14 * radius**2;


    // // arrow function: the arrow REPLACES the return and {} so it can go on just one line.

// const calcArea = (radius) => 3.14 * radius**2;

// const area = calcArea(5);
// console.log(area);


//// regular functions to arrow funstions


//// 1r) regular:
// const greet = function(){
//     return 'Hello, world!';
// };


//// 1a) arrow:
// const greet = () => 'Hello, world!';
// const result = greet();
// console.log(result);


//// 2r: regular
// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
//     console.log(bill([12, 15, 67,20], 0.2));
    
// }

//// 2a: arrow:
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i]*(tax+1);
        // total += products[i] + products[i]* tax;
}
return total;
};

console.log(bill([10, 15, 30], 0.2));