const taskForm = document.getElementById('task-form');
const titleInput = document.getElementById('task-title');
const priorityInput = document.getElementById('task-priority');
const taskCount = document.getElementById('task-count');
const taskList = document.getElementById('task-list');
const priorityLabels = {
    low : "Basse",
    medium : "Moyenne",
    high : "Haute",
};


taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const title = titleInput.value.trim();
    const priority = priorityInput.value;
    const taskItem = document.createElement('li');
    taskItem.textContent = title;
    const taskPriority = document.createElement('span');
    taskPriority.textContent = priorityLabels[priority];
    taskPriority.classList.add('priority');
    taskPriority.classList.add('priority-' + priority);
    taskItem.append(taskPriority);
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