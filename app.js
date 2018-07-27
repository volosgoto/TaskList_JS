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
    form.addEventListener('submit', addTask);
    // remove task
    taskList.addEventListener('click', removeTask);
    
}

// ADD TASK
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
    let link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add item html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    // Clear input
    taskInput.value = '';

    e.preventDefault()
}

// REMOVE TASK
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        // console.log(e.target);
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }

}