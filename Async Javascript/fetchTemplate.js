// // Fetch API, s98, https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31515765
// // Quicker and modern method instead of XMLHttprequest();

// // with fetch(), a rejection is obtained if there is a server or network error, BUT can still check for 200 status

// // 3 Steps: 
// // 1.fetch(), gets the data (local or from a server),
// // 2. take the response then return the response of the JSON data, to return a Promise: a resolve, reject function
// // 3. Fire a function where we have access to the data, catching any errors at the end.

fetch('todos/luigi.json').then((response) => {
    console.log('resolved:', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected:', err);
});


// async & await feature, section 97, https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31515757
// // async infront of the parameter brackets always returns a Promise 
const getTodos = async() => {

    const response = await fetch('todos/keith.json');
    const data = await response.json();

    return data;
};

// // Fire the getTodos Promise function then get the data printed to the console.
getTodos()
.then(data => console.log('resolved:', data));
