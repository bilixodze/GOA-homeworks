// app.js

import { addTask, toggleTaskCompletion, removeTask, loadTasks } from './tasks.js';

document.addEventListener('DOMContentLoaded', () => {
    // Load tasks from localStorage when the page loads
    loadTasks();

    // Get references to DOM elements
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Render tasks on the page
    function renderTasks() {
        taskList.innerHTML = ''; // Clear the current list
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.text;

            // Toggle completion when the task is clicked
            if (task.completed) {
                taskItem.style.textDecoration = 'line-through';
            }
            taskItem.addEventListener('click', () => {
                toggleTaskCompletion(index);
                renderTasks();
            });

            // Add a remove button to each task
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent triggering the toggle task
                removeTask(index);
                renderTasks();
            });

            taskItem.appendChild(removeBtn);
            taskList.appendChild(taskItem);
        });
    }

    // Add a new task when the "Add Task" button is clicked
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = ''; // Clear input field
            renderTasks(); // Re-render tasks
        }
    });

    // Initial render of tasks
    renderTasks();
});
