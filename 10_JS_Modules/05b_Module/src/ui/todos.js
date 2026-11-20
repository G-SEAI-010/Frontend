const ulEl = document.querySelector('ul');

function renderTodo(taskObj) {
  const newLi = document.createElement('li');
  const newP = document.createElement('p');
  const deleteBtn = document.createElement('button');

  newLi.classList.add('flex', 'gap-4', 'items-baseline', 'px-4', 'justify-between');

  newLi.dataset.id = taskObj.id;

  newP.textContent = taskObj.content;

  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('mt-5', 'px-4', 'py-2', 'bg-red-500', 'hover:bg-red-400', 'text-white', 'rounded');

  newLi.appendChild(newP);
  newLi.appendChild(deleteBtn);

  ulEl.appendChild(newLi);
}

export { renderTodo };
