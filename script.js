const taskForm = document.getElementById('task-form');
const titleInput = document.getElementById('task-title');
const priorityInput = document.getElementById('task-priority');
const taskCount = document.getElementById('task-count');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function (event) {
    const title = titleInput.value.trim();
    const priority = priorityInput.value;
    event.preventDefault();
    console.log(title);
    console.log(priority);
});  