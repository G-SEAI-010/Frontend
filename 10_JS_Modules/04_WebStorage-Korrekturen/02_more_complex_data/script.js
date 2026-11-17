console.log('more complex');

// Elemente selektieren

const formEl = document.querySelector('body > div > div > form');
const userInputEl = document.getElementById('userInput');
const ulEl = document.querySelector('ul');

// Funktionen

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) ?? [];
}

function writeToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function renderTodo(taskObj) {
  const newLi = document.createElement('li');
  const newP = document.createElement('p');
  const deleteBtn = document.createElement('button');

  newLi.classList.add('flex', 'gap-4', 'items-baseline', 'px-4', 'justify-between');

  newLi.dataset.id = taskObj.id;

  newP.textContent = taskObj.content;

  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('mt-5', 'px-4', 'py-2', 'bg-red-500', 'hover:bg-red-400', 'text-white', 'rounded');

  // deleteBtn.addEventListener('click', () => {
  //   const tasks = getFromLocalStorage('tasks');

  //   const filteredTasks = tasks.filter((entry) => entry.id !== taskObj.id);

  //   writeToLocalStorage('tasks', filteredTasks);

  //   newLi.remove();
  // });

  newLi.appendChild(newP);
  newLi.appendChild(deleteBtn);

  ulEl.appendChild(newLi);
}

function handleSubmit(event) {
  event.preventDefault();
  // const userInput = event.target.elements.userInput.value.trim();
  const userInput = userInputEl.value.trim();

  console.log(userInput);

  if (!userInput) {
    alert('Cannot submit empty note'); // eigenes Modal!
    return;
  }

  const newTask = {
    content: userInput,
    // id: Date.now()
    id: crypto.randomUUID(),
  };

  console.log(newTask);

  let tasks = getFromLocalStorage('tasks');

  tasks.push(newTask);

  writeToLocalStorage('tasks', tasks);

  renderTodo(newTask);

  formEl.reset();
}

function handleListClick(event) {
  const target = event.target;

  const btn = target.closest('button');
  if (!btn) {
    return;
  }

  const liEl = target.closest('li');
  const taskId = liEl.dataset.id;
  console.log(taskId);

  const tasks = getFromLocalStorage('tasks');
  const filteredTasks = tasks.filter((entry) => entry.id !== taskId);
  writeToLocalStorage('tasks', filteredTasks);
  liEl.remove();
}

function renderStorage() {
  const tasks = getFromLocalStorage('tasks');
  tasks.forEach((t) => renderTodo(t));
}

function main() {
  // EventListener setzen
  formEl.addEventListener('submit', handleSubmit);
  renderStorage();

  // Event Delegation
  ulEl.addEventListener('click', handleListClick);
}

// main loop starten
document.addEventListener('DOMContentLoaded', main);
