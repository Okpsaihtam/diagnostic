const taskForm = document.getElementById('task-form');
const titleInput = document.getElementById('task-title');
const priorityInput = document.getElementById('task-priority');
const taskCount = document.getElementById('task-count');
const taskList = document.getElementById('task-list');


taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const title = titleInput.value.trim();
    const priority = priorityInput.value;
    const taskItem = document.createElement('li');
    taskItem.textContent = title;
    taskList.append(taskItem);
    taskForm.reset();
    titleInput.focus();
    const count = taskList.children.length;
    let label = "tâche";
    if (count > 1) {
        label = "tâches";
    }
    taskCount.textContent = count + " " + label;
});  