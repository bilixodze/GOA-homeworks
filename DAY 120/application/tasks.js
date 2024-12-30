// tasks.js

export let tasks = [];

// Function to add a new task
export function addTask(taskText) {
    const newTask = {
        text: taskText,
        completed: false
    };
    tasks.push(newTask);
    saveTasks();
}

// Function to toggle the completion status of a task
export function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
}

// Function to remove a task
export function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
}

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
export function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        tasks = savedTasks;
    }
}
