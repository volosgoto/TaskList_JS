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
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // add task event
    form.addEventListener('submit', addTask);
    // remove task
    taskList.addEventListener('click', removeTask);
    // clear tasks
    clearBtn.addEventListener('click', cleatTasks);
    // filter tasks event
    filter.addEventListener('keyup', filterTasks);
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

    // Store in a local storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';

    e.preventDefault()
}

// GET TASKS FROM LOCAL STORAGE
function getTasks(params) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
        tasks.forEach(function(task) {
            // Create li element
            let li = document.createElement('li');
            // Add class
            li.className = 'collection-item';
            // Create a textNode and apped to li
            li.appendChild(document.createTextNode(task));
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
    });
}


// STORE TASKS
function storeTaskInLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    }
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
}


// REMOVE TASK
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        // console.log(e.target);
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
            // Remove form local storage
            removeTaskFromLocalstorage(e.target.parentElement.parentElement);
        }
    }
}

// REMOVE TASK FROM LOCALSTORAGE
function removeTaskFromLocalstorage(taskItem) {
    //console.log(taskItem);
    let tasks;
	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach((task, index) => taskItem.textContent === task && tasks.splice(index, 1));

	localStorage.setItem('tasks', JSON.stringify(tasks));
}


// CLEAR TASKS
function cleatTasks(e) {
    // taskList.innerHTML = ''; // More fast way thought loop
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
    clearTasksFromLocalStorage();
}

// Clear tasks from local storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}


// FILTER TASKS
function filterTasks(e) {
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {  // NodeList
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) { // is in string
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    }); 
    // console.log(text);
}


