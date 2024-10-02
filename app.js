// script.js

// Get references to HTML elements
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Add a new to-do item
addButton.addEventListener('click', () => {
    const taskText = inputField.value;

    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        
        // Add task text to the list item
        listItem.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        
        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Add the list item to the to-do list
        todoList.appendChild(listItem);

        // Clear the input field
        inputField.value = '';

        // Delete a task
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });
    }
});
