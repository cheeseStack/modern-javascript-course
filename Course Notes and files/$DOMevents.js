
//// events:const.addEventListener()

//// link to events: https://developer.mozilla.org/en-US/docs/Web/Events


// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//    console.log('You clicked me!'); 

// });


//// DELETING THE li to-do list items once clicked:

// const items = document.querySelectorAll('li');


// the (e) parameter in the arrow function stands for 'events' but it can be called anything.
// items.forEach(item => {
//     item.addEventListener('click', e => {

//         // console.log('item clicked');

//         //// e.target identies the item being clicked in the console.

//         // console.log(e.target);
//         // console.log(item);
//         e.target.style.textDecoration = 'line-through';
//     });
// });


//// Section 54: creating and removing elements

const ul = document.querySelector('ul');

// ul.remove();

const items = document.querySelectorAll('li');

// // the (e) parameter in the arrow function stands for 'events' but it can be called anything.

items.forEach(item => {
    item.addEventListener('click', e => {
        // e.target.removeEventListener();
        // e.remove();0
        e.target.remove();
        
    });
});


//// add new todo items using the button

const button = document.querySelector('button');

button.addEventListener('click', () => {
    //// add a new li item with pre-defined text
    // ul.innerHTML += '<li>Something New</li>';

    //// Create a new element: li tag
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    //// ul.append sends the new item to the bottom
    // ul.append(li);
    //// ul.prepend adds it to the top
    ul.prepend(li);
});



///// Section 55: event delegation and event bubbling

//// event bubbling:
// The event (sucha as a click) starts at the event target then it 'bubbles' up to the parents to check for eventListeners. e.g. li tag, to ul tag, to div, to body. etc.


//// in a child element function use:
    //// e.stopPropagation();




//// event delegation: when a child element is clicked it bubbles up to the parent, so a function created in the parent's name will then identify the child target with e.target();
// a listener event has been added to the whole ul tag, and checks that the li part of the ul has been clicked on before removing.
    ul.addEventListener('click', e => {
        if(e.target.tagName === 'LI'){
            e.target.remove();
        }
    });



    //// section 56: more events

