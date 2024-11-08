// Select elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const clearTasksButton = document.getElementById('clear-tasks');

// Load tasks from localStorage
const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task.text, task.completed));
};

// Save tasks to localStorage
const saveTasks = () => {
    const tasks = [];
    document.querySelectorAll('li').forEach(task => {
        tasks.push({
            text: task.querySelector('span').textContent,
            completed: task.querySelector('input[type="checkbox"]').checked
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Add task to the DOM
const addTaskToDOM = (taskText, completed = false) => {
    const listItem = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.addEventListener('change', () => {
        listItem.classList.toggle('completed', checkbox.checked);
        saveTasks();
    });
    
    const span = document.createElement('span');
    span.textContent = taskText;
    if (completed) span.classList.add('completed');
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        listItem.remove();
        saveTasks();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
};

// Add new task
const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTaskToDOM(taskText);
        taskInput.value = '';
        saveTasks();
    }
};

// Clear all tasks
const clearTasks = () => {
    taskList.innerHTML = '';
    localStorage.removeItem('tasks');
};

// Event listeners
addTaskButton.addEventListener('click', addTask);
clearTasksButton.addEventListener('click', clearTasks);
window.addEventListener('load', loadTasks);
