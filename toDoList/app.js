const form = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');

loadEventListeners();

// Event listeners
function loadEventListeners() {
  // DOM load
  document.addEventListener('DOMContentLoaded', getTasks);

  // Add task
  form.addEventListener('submit', addTask);

  // Remove task
  taskList.addEventListener('click', removeTask);

  // Remove all tasks
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks
  filter.addEventListener('keyup', filterTasks);
}

function deleteConfirmation() {
  return confirm('Are U sure ?');
}

function addTask(e) {
  if (taskInput.value === '') {
    alert('!!!add task!!!');
  }

  // Create/Add task
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);
  taskList.appendChild(li);

  // Add task into localStorage
  storeTaskInLovcalStorage(taskInput.value);

  // Cleare input
  taskInput.value = '';

  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (deleteConfirmation()) {
      e.target.parentElement.parentElement.remove();

      removeTaskFromLocalstorage(e.target.parentElement.parentElement);
    }
  }
}

function clearTasks() {
  if (deleteConfirmation()) {
    //   taskList.innerHTML = '';
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }

  localStorage.clear();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    item.toLowerCase().indexOf(text) != -1
      ? (task.style.display = 'block')
      : (task.style.display = 'none');
  });
}

function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    // Create/Add task
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);
    taskList.appendChild(li);
  });
}

function storeTaskInLovcalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalstorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
