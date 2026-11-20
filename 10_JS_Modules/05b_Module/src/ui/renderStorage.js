import { getFromLocalStorage } from '../utils/storage.js';
import { renderTodo } from './todos.js';

function renderStorage() {
  const tasks = getFromLocalStorage('tasks');
  tasks.forEach((t) => renderTodo(t));
}

export { renderStorage };
