// variables and block scope

let age = 30;
let name = 'keith';
if(true){
    let age = 40;
    
    console.log('inside 1st code block: ', age, name);
}

console.log('age outside of code block: ', age,name);