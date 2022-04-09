// rest parameter: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31538982
const double = (...nums) => {
    console.log(nums);
    return nums.map(num =>  num *2);
}
const result = double(1,3,44,67,12,343,3454);
console.log(result);


// spread syntax (Arrays)
// takes an array and spreads out into single elements
const people =['shaun','ryu', 'crystal'];
console.log(people);
console.log(...people);

const members =['mario', 'chun-li', ...people];
console.log(members);


// spread syntax with objects and
const person = {
    name: 'shaun',
    age: 30,
    job: 'net ninja'
};

const personClone ={...person, location: 'brighton'};
console.log(personClone);



// sets: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31538970
// new data structure to store a list of unique values, with only unique values

const namesArray = ['ryu', 'shaun', 'ryu', 'keith'];
console.log(namesArray);

// const namesSet = new Set(['ryu', 'shaun', 'ryu', 'keith']);
// const namesSet = new Set(namesArray);
// console.log(namesSet);

// const uniqueNames =[...namesSet];
// console.log(uniqueNames);

// above code in 1 line
const uniqueNames = [... new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(200).add(25);
ages.delete(20);
console.log(ages, ages.size);
console.log(ages.has(200));
console.log(ages.has(20));


ages.clear();
console.log(ages);


const ninjas = new Set([
    { name: 'shaun', age: 30},
    { name: 'crystal', age: 29},
    { name: 'chun-li', age: 32}
]);

ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age);
});

//symbols: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31538976
// symbols can be used as keys or property names in objects to ensure they are unique
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');
console.log(symbolOne, typeof symbolOne, symbolTwo);
console.log(symbolOne === symbolTwo);


