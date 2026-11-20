import { getFromLocalStorage, writeToLocalStorage } from '../utils/storage.js';

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

export { handleListClick };
