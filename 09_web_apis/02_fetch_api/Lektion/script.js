// Promises

// const isThereTimeToGame = new Promise((resolve, reject) => {
//   Math.random() > 0.5
//     ? resolve("Ja, es ist noch Zeit!")
//     : reject("Nein, es ist keine Zeit mehr!");
// });

// isThereTimeToGame
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Ich passiere so oder so!"));

/**
 * BEISPIELE FÜR DIE FETCH API
 *
 * Die Fetch API ist ein moderner Weg, um Netzwerkanfragen in JavaScript zu stellen.
 * Sie ermöglicht es dir, Daten von Servern (wie RESTful APIs) abzurufen oder Daten dorthin zu senden.
 * Stell sie dir wie einen Boten vor, der zu einer Webseite geht, Informationen holt
 * und sie zurück in deinen Code bringt und das alles, ohne die Seite neu laden zu müssen!
 */

// BEISPIEL 1: Die ".then" Promise-Chain-Methode
// Das ist der klassische Weg, um mit Promises (Versprechen) in einer Kette von .then() umzugehen.

const fetchFunction = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1") // Gibt ein Promise zurück, das zu einem Response-Objekt aufgelöst wird
    .then((response) => {
      // Das erste .then() verarbeitet das Response-Objekt (die Server-Antwort)
      if (!response.ok) {
        // Prüfe IMMER, ob die Antwort "ok" ist (Statuscode 200-299)
        throw new Error(`Etwas ist schiefgelaufen. Status: ${response.status}`);
      } else {
        return response.json(); // Wandelt die JSON-Antwort um, dies gibt ein weiteres Promise zurück!
      }
    })
    .then((data) => console.log(data)) // Das zweite .then() verarbeitet die fertigen JSON-Daten
    .catch((error) => console.error(error)); // Fängt jegliche Fehler in der gesamten Promise-Kette ab
};

fetchFunction();

// BEISPIEL 2: Async/Await Methode
// Dies ist eine modernere und sauberere Syntax, um mit Promises umzugehen.
// Sie lässt asynchronen Code so aussehen, als wäre er synchron (als würde er Zeile für Zeile durchlaufen).

const fetchFunctionAsync = async () => {
  // try/catch wird bei async/await für die Fehlerbehandlung genutzt
  try {
    // "await" pausiert die Ausführung, bis das Promise abgeschlossen ist
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    if (!response.ok) {
      throw new Error(`Etwas ist schiefgelaufen. Status: ${response.status}`);
    }

    // Ein weiteres "await", um auf das Entpacken der JSON-Antwort zu warten
    const data = await response.json();
    console.log(data);

    // WICHTIG: async/await ist nur "Syntactic Sugar" (eine Vereinfachung) über Promises.
    // Unter der Haube nutzt es immer noch Promises!
  } catch (error) {
    console.error(error);
  }
};

fetchFunctionAsync();

// BEISPIEL 3: Praktische Anwendung - Abgerufene Daten mit DOM-Manipulation nutzen
// Diesmal mit der traditionellen ES5-Funktionsschreibweise statt einer Arrow-Function

async function fetchAndDisplayPost() {
  try {
    // Einen einzelnen Beitrag (mit der ID 1) von der API abrufen
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    if (!response.ok) {
      throw new Error(`Etwas ist schiefgelaufen. Status: ${response.status}`);
    }

    // Die JSON-Antwort entpacken
    const data = await response.json();
    console.log(data);

    // Ein DOM-Element (<div>) erstellen, um die abgerufenen Daten anzuzeigen
    const postDiv = document.createElement("div");

    // Das Element rudimentär stylen
    postDiv.style.padding = "10px";
    postDiv.style.border = "1px solid #ccc";

    // Das Element mit Daten füllen, indem wir Template Literals (Backticks) nutzen
    // SICHERHEITSHINWEIS: innerHTML ist potenziell gefährlich (XSS-Risiko)
    postDiv.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
      `;

    // Das Element der Seite (dem <body>) hinzufügen
    document.body.appendChild(postDiv);
  } catch (error) {
    console.error(error);
  }
}

fetchAndDisplayPost();

// BEISPIEL 4: POST-Request - Daten senden / Eine neue Ressource erstellen

// const createPostAsync = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title: "Neuer Post Titel",
//         body: "Dies ist der Inhalt des neuen Posts.",
//         userId: 1,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP Fehler! Status: ${response.status}`);
//     }

//     const newData = await response.json();
//     console.log("Erstellte Post-Daten:", newData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// createPostAsync();

// BEISPIEL 5: PUT-Request - Eine Ziel-Ressource komplett ersetzen

// PUT-Request
// const updatePostAsync = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1",
//       {
//         method: "PUT",
//         body: JSON.stringify({
//           id: 1,
//           title: "Geänderter Post",
//           body: "adaesdag",
//           userId: 1,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP Fehler! Status: ${response.status}`);
//     }

//     const updatedData = await response.json();
//     console.log("Aktualisierte Daten:", updatedData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// updatePostAsync();

// BEISPIEL 5b: PATCH-Request - Teilweises Aktualisieren

// HINWEIS: Während PUT eine Ressource komplett ersetzt, nutzt man PATCH,
// um nur bestimmte Felder einer Ressource zu ändern (z. B. nur den Titel).
// Die Syntax ist identisch zum PUT-Request, nur dass 'method: "PATCH"'
// verwendet wird und im 'body' nur die zu ändernden Daten stehen.

// BEISPIEL 6: DELETE-Request - Eine Ziel-Ressource löschen

// DELETE-Request
// const deletePostAsync = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1",
//       {
//         method: "DELETE",
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP Fehler! Status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log("Ergebnis:", result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// deletePostAsync();

/**
 * WICHTIGE HINWEISE ZUR FETCH API:
 *
 * 1. fetch() gibt ein Promise zurück, das zu einem "Response"-Objekt aufgelöst wird.
 * 2. Dieses "Response"-Objekt sind noch NICHT die eigentlichen Daten - du musst .json() aufrufen, um die Daten zu extrahieren.
 * 3. .json() gibt ebenfalls ein Promise zurück, das zu dem entpackten JSON aufgelöst wird.
 * 4. Prüfe IMMER "response.ok", bevor du weitermachst (response.ok ist 'true', wenn der Statuscode zwischen 200 und 299 liegt).
 * 5. fetch() lehnt ein Promise NICHT automatisch ab (Reject), wenn ein HTTP-Fehler wie 404 (Not Found) oder 500 (Server Error) auftritt. Du musst response.ok manuell prüfen!
 * 6. fetch() führt nur dann zu einem "Reject", wenn ein echter Netzwerkfehler vorliegt (z. B. kein Internet) oder die Anfrage gar nicht erst gesendet werden konnte.
 * 7. Der GET-Request ist die Standardmethode, wenn du nichts angibst, wird automatisch GET verwendet.
 * 8. Für POST- und PUT-Requests musst du zwingend die Eigenschaften 'method', 'headers' und 'body' angeben.
 * 9. Für DELETE-Requests musst du nur die 'method' angeben.
 */
