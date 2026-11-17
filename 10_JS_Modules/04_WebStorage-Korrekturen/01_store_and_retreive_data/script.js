console.log('localStorage');

// Elemente selektieren

const formEl = document.querySelector('body > div > div > form');
const userInputEl = document.getElementById('userInput');
const ulEl = document.querySelector('ul');

// Funktionen

// localStorage speichert nur Strings → JSON.parse macht daraus wieder ein Array.
// Gibt es den Key noch nicht, liefert getItem null – ?? setzt dann [] als Startwert
function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) ?? [];
}

// JSON.stringify wandelt Array/Objekt in einen String um, damit localStorage ihn speichern kann
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

  // Lange Version ohne Hilfsfunktion:
  // let tasks = localStorage.getItem('tasks');

  // if (tasks === null) {
  //   tasks = [];
  // } else {
  //   tasks = JSON.parse(tasks);
  // }

  // Ablauf: lesen → im Array ändern → komplett zurückschreiben (localStorage kann nichts "anhängen")
  let tasks = getFromLocalStorage('tasks');

  tasks.push(userInput);

  writeToLocalStorage('tasks', tasks);

  renderTodo(userInput);
}

// Beim Laden der Seite die gespeicherten Tasks anzeigen – so überleben sie einen Reload
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
