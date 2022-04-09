//// copy events

/// right-click, copy events

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('oi!!! my content is copyright');

});


/// a response to the mouse moving around a box:

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {    
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos - ${e.offsetX};   y pos - ${e.offsetY}`;
});



//// a wheel (mouse wheel) event: scrolling down a webpage/
const wheel = document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);

});

//// Event types: https://developer.mozilla.org/en-US/docs/Web/Events#Mouse_events 




//// making a popup: 
