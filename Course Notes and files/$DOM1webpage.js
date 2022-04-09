// DOM: Document Object Model

// add, change and delete content

// make a cool pop-up effect

////Querying the DOM

// const para = document.querySelector('p');
// const error = document.querySelector('.error');
// const errordiv = document.querySelector('div.error');

// console.log(para);
// console.log(error);
// console.log(errordiv);

// const paras = document.querySelectorAll('p');
// console.log(paras[0]);

// paras.forEach(para =>{
//     console.log(para);
// });

// const errors = document.querySelectorAll('.error');
// console.log(errors);
// errors.forEach(error => {
//     console.log(error);
// });




////Get an element by ID


// do not need to use the # symbol
// const title = document.getElementById('page-title');
// console.log(title);



// //// get elements by their class name
// // the dot . is not required
// const errors = document.getElementsByName('error');
// console.log(errors);
// console.log(errors[0]);



//// get elements by their tag
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);


//// In general the document.querySelector() is the most versatile.

// const paras = document.querySelector('p');
// console.log(paras.innerText);

// //// to update the text, just give it a new value:

// paras.innerText += ', ninjas are awesome!!'

////changing the Text:
// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
// console.log(para.innerText);
// para.innerText += ', plus SOME new text';
// });


//// Chaning the HTML itself, eg a p tag for a h2:
// const content = document.querySelector('.content');

// console.log(content);
// content.innerHTML = '<h2>This p tag has changed to a h2</h2>';



//// Outputting a HTML template for an array of people.

// const content = document.querySelector('.content');

// const people = ['mario', 'yoshi', 'luigi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });




//// section 49: getting and setting attributes

const link = document.querySelector('a');

console.log(link.getAttribute('href'));

// // set the new attribute using: ('attribute', 'new attribute')
link.setAttribute('href', 'https://www.netninja.dev');
link.innerText = 'The Net Ninja Website';

//// changind an element's class:
const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green;');

mssg.setAttribute('style', 'font-weight: bold; color: green');



///Section 50: adding and removing styles:

const titleh1 = document.querySelector('h1');

//// to update the styles, use: item.style.attribute = 'value in a string';
titleh1.style.margin = '50px';

//// use camelCase instead of hyphenated names like fontSize.

//// to remove styles: use empty quotes '';
titleh1.style.margin = '';








