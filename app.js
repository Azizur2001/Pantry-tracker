// // script.js

const { TextField } = require("@mui/material");

// // Get references to HTML elements
// const inputField = document.getElementById('todo-input');
// const addButton = document.getElementById('add-button');
// const todoList = document.getElementById('todo-list');

// // Add a new to-do item
// addButton.addEventListener('click', () => {
//     const taskText = inputField.value;

//     if (taskText !== '') {
//         // Create a new list item
//         const listItem = document.createElement('li');
        
//         // Add task text to the list item
//         listItem.textContent = taskText;

//         // Create a delete button
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
        
//         // Append the delete button to the list item
//         listItem.appendChild(deleteButton);

//         // Add the list item to the to-do list
//         todoList.appendChild(listItem);

//         // Clear the input field
//         inputField.value = '';

//         // Delete a task
//         deleteButton.addEventListener('click', () => {
//             todoList.removeChild(listItem);
//         });
//     }
// });



// const link = document.querySelector('a');
// link.textContent = "Mozilla Developer Network";
// link.href = "https://developer.mozilla.org";
// const sect = document.querySelector('section');
// const para = document.createElement('p');
// para.textContent = "We hope you enjoyed the ride.";
// sect.appendChild(para);

// const text = document.createTextNode(
//     " - the premier source for web development knowledge",
// );

// const linkPara = document.querySelector("p");
// linkPara.appendChild(text);



const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';


    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listButton);
    listText.textContent = 'Delete';
    list.appendChild(listItem);

    listButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    input.focus();
});