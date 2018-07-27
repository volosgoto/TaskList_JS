// Set user vars
let form = document.querySelector('#task-form');
let taskList = document.querySelector('.collection');
let clearBtn = document.querySelector('.cleart-tasks');
let filter = document.querySelector('#filter');
let taskInput = document.querySelector('#task');

// Load all event listeners
loadAllEventListeners()

// Load all event listeners
function loadAllEventListeners() {
    // add task event
    form.addEventListener('submit', addTask)
    
}

// add task
function addTask(e) {
    if (taskInput.value === ''){
        alert('Add a task')
    }
    // Create li element
    let li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create a textNode and apped to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link elenemt
    e.preventDefault()
}