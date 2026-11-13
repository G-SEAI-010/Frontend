// Referenz auf das DOM-Element holen, in dem die Todos angezeigt werden
const todoListElement = document.getElementById("todo-list");

/**
 * Holt Todos von der JSON Placeholder API
 * Beinhaltet Fehlerbehandlung für fehlgeschlagene Anfragen
 */
const fetchTodos = async () => {
  try {
    // Daten von der API mit einem Limit von 10 Todos abrufen
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
    );

    // Prüfen, ob die Antwort erfolgreich war
    if (!response.ok) {
      throw new Error(`Etwas ist schiefgelaufen. Status: ${response.status}`);
    }

    // Die JSON-Antwort entpacken (parsen)
    const todos = await response.json();

    // Die Todos im DOM anzeigen
    displayTodos(todos);
  } catch (error) {
    // Jegliche Fehler in der Konsole ausgeben
    console.error(error);
  }
};

// Zeigt die Todo-Elemente im DOM an
const displayTodos = (todos) => {
  // Durch die Todos iterieren und für jedes ein Listenelement erstellen
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo.title;
    todoItem.classList.add("mb-2");

    // Styling basierend auf dem Erledigungsstatus hinzufügen
    if (todo.completed) {
      todoItem.classList.add("line-through", "text-gray-300");
    } else {
      todoItem.classList.add("text-green-300");
    }

    todoListElement.appendChild(todoItem);
  });
};

// Todos beim Laden der Seite abrufen und anzeigen
fetchTodos();
