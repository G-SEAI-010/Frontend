function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) ?? [];
}

function writeToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getFromLocalStorage, writeToLocalStorage };
