//// callback functions and foreEach method / function

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach(function(person){
//     console.log(person);
// });

// /// arrow versuion of the above:

// people.forEach((person, index) => {
//     console.log(index, person)
// });

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}!`);
// }

// people.forEach(logPerson);



//// callback functions in action

const ul = document.querySelector('.people');
//// the bit above will be covered later in the course

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

// people.forEach(function(person){
//     //// create HTML template for each person
//     html += `<li style="color: purple">${person}</li>`;
// });

//// AS AN ARROW FUNCTION

people.forEach((person) =>{
    //create HTML template for each person
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;


