console.log('localStorage');

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

function renderTodo(userInput) {
  const newLi = document.createElement('li');
  newLi.textContent = userInput;
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

  //

  // let tasks = localStorage.getItem('tasks');

  // if (tasks === null) {
  //   tasks = [];
  // } else {
  //   tasks = JSON.parse(tasks);
  // }

  let tasks = getFromLocalStorage('tasks');

  tasks.push(userInput);

  writeToLocalStorage('tasks', tasks);

  renderTodo(userInput);
}

function renderStorage() {
  const tasks = getFromLocalStorage('tasks');
  tasks.forEach((t) => renderTodo(t));
}

function main() {
  // EventListener setzen
  formEl.addEventListener('submit', handleSubmit);
  renderStorage();
}

// main loop starten
document.addEventListener('DOMContentLoaded', main);
