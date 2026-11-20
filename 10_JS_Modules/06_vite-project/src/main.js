import './style.css';

import { handleSubmit } from './handlers/sumbitHandler.js';
import { handleListClick } from './handlers/listClickHandler.js';
import { renderStorage } from './ui/renderStorage.js';

// Elemente selektieren

const formEl = document.querySelector('body > div > div > form');
const ulEl = document.querySelector('ul');

function main() {
  // EventListener setzen
  formEl.addEventListener('submit', handleSubmit);
  // Event Delegation
  ulEl.addEventListener('click', handleListClick);

  renderStorage();
}

// main loop starten
document.addEventListener('DOMContentLoaded', main);
