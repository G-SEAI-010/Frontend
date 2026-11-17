console.log('more complex');

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

function renderTodo(taskObj) {
  const newLi = document.createElement('li');
  const newP = document.createElement('p');
  const deleteBtn = document.createElement('button');

  newLi.classList.add('flex', 'gap-4', 'items-baseline', 'px-4', 'justify-between');

  // data-id verknüpft das <li> mit dem Objekt im Storage – brauchen wir später zum Löschen
  newLi.dataset.id = taskObj.id;

  newP.textContent = taskObj.content;

  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('mt-5', 'px-4', 'py-2', 'bg-red-500', 'hover:bg-red-400', 'text-white', 'rounded');

  // Alternative: ein Listener pro Button. Funktioniert, erzeugt aber bei vielen Tasks viele Listener
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

  // Statt nur eines Strings speichern wir ein Objekt – die eindeutige id macht gezieltes Löschen möglich
  const newTask = {
    content: userInput,
    // id: Date.now()
    id: crypto.randomUUID(),
    // crypto.randomUUID() erzeugt eine garantiert eindeutige ID
  };

  console.log(newTask);

  // Ablauf wie in Übung 1: lesen → ändern → zurückschreiben
  let tasks = getFromLocalStorage('tasks');

  tasks.push(newTask);

  writeToLocalStorage('tasks', tasks);

  renderTodo(newTask);

  // Formular leeren für die nächste Eingabe
  formEl.reset();
}

// Event Delegation: einzelner Listener auf der <ul> fängt die Klicks auf alle Kindeelemente ab –
// auch von Tasks, die erst später hinzugefügt werden
function handleListClick(event) {
  const target = event.target;

  // closest() sucht vom geklickten Element aufwärts nach einem <button>.
  // Kein Button → Klick ignorieren
  const btn = target.closest('button');
  if (!btn) {
    // "Guard Clause"
    return;
  }

  // Das zugehörige <li> finden und die id aus data-id auslesen
  const liEl = target.closest('li');
  const taskId = liEl.dataset.id;
  console.log(taskId);

  // filter() behält alle Tasks außer dem gelöschten → zurückschreiben und aus dem DOM entfernen
  const tasks = getFromLocalStorage('tasks');
  const filteredTasks = tasks.filter((entry) => entry.id !== taskId);
  writeToLocalStorage('tasks', filteredTasks);
  liEl.remove();
}

// Beim Laden der Seite die gespeicherten Tasks anzeigen – so überleben sie einen Reload
function renderStorage() {
  const tasks = getFromLocalStorage('tasks');
  tasks.forEach((t) => renderTodo(t));
}

function main() {
  // EventListener setzen
  formEl.addEventListener('submit', handleSubmit);
  // Event Delegation
  ulEl.addEventListener('click', handleListClick);

  renderStorage();
}

// main loop starten
document.addEventListener('DOMContentLoaded', main);
