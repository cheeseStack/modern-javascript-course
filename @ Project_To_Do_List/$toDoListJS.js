
// TO DO LIST PROJECT:

//GLOBAL CONATANTS:

// (GC1) query selector to grab the .add tag of the input field for new todo item
const addForm = document.querySelector('.add');

// (GC2) reference to the ul to add a new item created in GF1
const list = document.querySelector('.todos');

// (GC3) Search bar: selects the search bar with class ().search input) to listen to keeyup rather than submit.
const search = document.querySelector('.search input');


// Global Functions => 
// (GF1) reusable function to generate a template for the todo to inject into the DOM.
const generateTemplate = (todo => {

    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    
// add the item to the todo list using GF2
    // list.innerHTML += html;
    // list.innerHTML = list.innerHTML + html;
    
    list.innerHTML += html;

});




// (LF1)event listener to find the .add text field to add new items
addForm.addEventListener('submit', e => {

    e.preventDefault();
    // the .trim() after.value removes any blank spaces before or after the item added.
    const todo = addForm.add.value.trim();

    // check that the todo is not blank: if true, it will call, otherwise it will not add.
    if(todo.length){
        generateTemplate(todo);
    // clear the form of the lst input: reset the input field, with selector const addForm
    addForm.reset();
    }
});


// // Section 80: deleting todos: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31466233

// DELETE TODOS
// we want to reference the whole div container of the list so that when a new todo is addec the delete function will still work, and a todo is not needed for each trashcaan.
//. Use EVENT DELEGATION so that anything clicked inside the child element (trashcan) is then fired to the parent (ul container for the list)/
// the GC2 selects the ul using .todos with const = list

list.addEventListener('click', e => {
    // e.target identifies the item that was clicked
    if(e.target.classList.contains('delete')){
        // identify the parent of the trashcan, and remove the parent element.
        e.target.parentElement.remove();
    }

});



// FILTERING ITEMS: SEARCHING IN THE FORM: section 81: https://netninja.dev/courses/modern-javascript-from-novice-to-ninja/lectures/31493867

// filer todos.
function filterTodos(term) {
    // console.log(term);
    // create an ARRAY from a HTML collection:
    Array.from(list.children)
        // the ! negates the boolean, and so shows items that DO NOT ahve the term inside it.
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
        // the ! negates the boolean, and so shows items that DO NOT ahve the term inside it.
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
};

// keyup event.
// a reference on the input field:
search.addEventListener('keyup', () => { 
    const term = search.value.trim().toLowerCase();

    filterTodos(term);
    });