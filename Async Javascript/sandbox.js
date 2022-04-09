// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function fired');
// }, 2000);

// console.log(3);
// console.log(4);

// setTimeout fires here as it is asynchronous  


// // HTTP Requests



// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => { 
//     // console.log(request, request.readyState );
//     // // ready State code guide: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
//     // // Value of 4 means that the operation is complete

//     // use the && for logical AND condition: 
//     // check that the request status = 200 (complete)
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.responseText);
//     } else if(request.readyState === 4) {
//         console.log('could not fetch the data');
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();




// // Response Status codes: S90: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31493865
 
// check status is not 404 before calling back the response text; status 200 means the data is found correctly.
// // making reusable code inside a function: using the above code:

// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => { 
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if(request.readyState === 4) {
//             callback('could not fetch data', undefined);
//         }
//     });
//     // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.open('GET', 'todos.json');
//     request.send();
// };

// getTodos((err, data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });





// // JSON Data: s92: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31515770
// JavaScript Object Notation
// Data transfer format with key value pairs in text string format
// Convert JSON data into a JS array of objects with
// const data = JSON.parse(request.responseText);


// Making callbacks to get JSON data in a certain sequence: 

// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => { 
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if(request.readyState === 4) {
//             callback('could not fetch data', undefined);
//         }
//     });
//     // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.open('GET', resource);
//     request.send();
// };

// getTodos('todos/keith.json',(err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json',(err, data) => {
//         console.log(data);
//         getTodos('todos/luigi.json',(err, data) => {
//             console.log(data);

//         });
//     });
// });

// // S94: Promise Basics: cleaner code without the nested getTodos callback functions

// Promise example
// Using the above main code:

// // MAIN FETCH CODE START // // 
// const getTodos = (resource) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => { 
//                 if(request.readyState === 4 && request.status === 200){
//                     const data = JSON.parse(request.responseText);
//                     resolve(data);
//                 } else if(request.readyState === 4) {
//                     reject('error getting resource');
//                 }
//             });
//             // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//             request.open('GET', resource);
//             request.send();
//     });

// };


// // // Chaining Promises together: s95: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31515753

// getTodos('todos/luigi.json').then(data => {
//     console.log('promise 1 resolved', data);
//     return getTodos('todos/mario.json');
// }).then( data => {
//     console.log('promise 2 resolved:', data);
//     return getTodos('todos/keith.json');
// }).then( data => {
//     console.log('promise 3 resolved:', data);
// }).catch(err => {
//     console.log('promise rejected:', err);
// });

// // MAIN FETCH CODE END // // 


// const getSomething = () => {
// // a Promise either resolves a request once completed, or rejects it if an error is received
// // Promise((resolve, reject)) are built in parameters to the function
//     return new Promise((resolve, reject) => {       
//          // fetch something
//          resolve('some data');
//          reject('an error message');
//     });
// };


// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });


// getSomething(() => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });


// // S95: Chaining Promises: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31515755





// // Fetch API, s98, https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31515765
// // Quicker and modern method instead of XMLHttprequest();

// // with fetch(), a rejection is obtained if there is a server or network error, BUT can still check for 200 status



// fetch('todos/luigi.json').then((response) => {
//     console.log('resolved:', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected:', err);
// });




// async & await feature, section 97, https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31515757
// // async infront of the parameter brackets always returns a Promise 
const getTodos = async() => {

    const response = await fetch('todos/keith.json');


    if(response.status !== 200){
        throw new Error(': cannot fetch the data');
    }

    const data = await response.json();

    return data;
};

// // Fire the getTodos Promise function then get the data printed to the console.
// getTodos()
// .then(data => console.log('resolved:', data));

//// Adding custom errors , s98: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31515775



getTodos()
.then(data => console.log('resolved:', data))
.catch(err => console.log('rejected', err.message));
