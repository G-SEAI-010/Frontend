import { renderTodo } from '../ui/todos.js';
import { getFromLocalStorage, writeToLocalStorage } from '../utils/storage.js';

const userInputEl = document.getElementById('userInput');

function handleSubmit(event) {
  event.preventDefault();
  const userInput = userInputEl.value.trim();

  console.log(userInput);

  if (!userInput) {
    alert('Cannot submit empty note'); // eigenes Modal!
    return;
  }

  const newTask = {
    content: userInput,
    id: crypto.randomUUID(),
  };

  console.log(newTask);

  let tasks = getFromLocalStorage('tasks');

  tasks.push(newTask);

  writeToLocalStorage('tasks', tasks);

  renderTodo(newTask);
}

export { handleSubmit };
