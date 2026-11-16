console.log('web storage');

// localStorage speichert Schlüssel-Wert-Paare im Browser. Sie bleiben auch nach
// einem Neuladen oder Schließen des Tabs erhalten (DevTools → Application → Local Storage).
// Achtung: Jeder Wert wird als STRING gespeichert, aus 42 wird also "42".
localStorage.setItem('mein-schluessel', 42);

// getItem liefert den gespeicherten String zurück (oder null, wenn der Schlüssel fehlt).
const data = localStorage.getItem('mein-schluessel');

// Um wieder mit einer Zahl zu rechnen, müssen wir den String selbst umwandeln.
const parsedData = Number.parseInt(data);

// Vergleiche die Ausgaben: "42" (String) vs. 42 (Zahl). Die Console färbt sie unterschiedlich.
console.log(data);
console.log(42);
console.log(parsedData);

// Objekte kann localStorage nicht direkt speichern.
const userSettings = {
  theme: 'dark',
  timestamp: 1738457634534,
  favIceCream: ['choco', 'stracciatella'],
  isPremium: true,

  myMethod() {
    return this.isPremium;
  },
};

// JSON.stringify wandelt das Objekt in einen JSON-String um.
// Methoden wie myMethod gehen dabei verloren, denn JSON kennt keine Funktionen.
console.log(userSettings);
console.log(JSON.stringify(userSettings));

localStorage.setItem('settings', JSON.stringify(userSettings));

const userSettingsFromStorage = localStorage.getItem('settings');

// Aus dem Storage kommt wieder nur ein String ...
console.log(userSettingsFromStorage);
console.log(typeof userSettingsFromStorage);

// ... und JSON.parse macht daraus wieder ein echtes Objekt.
const parsedSettings = JSON.parse(userSettingsFromStorage);

console.log(parsedSettings);

// Timer + Storage: Alle 3 Sekunden hängen wir eine Zahl an ein gespeichertes Array an.
// Lade die Seite zwischendurch neu: Das Array im Storage wächst einfach weiter.
let count = 0;
const intervalID = setInterval(() => {
  // 1. Lesen: den aktuellen Stand als String aus dem Storage holen
  const stored = localStorage.getItem('numbers');

  console.log(stored);

  let numbers;

  // 2. Umwandeln: Beim allerersten Mal gibt es noch nichts (null), dann starten wir leer.
  // Sonst machen wir aus dem JSON-String wieder ein Array.
  if (stored === null) {
    numbers = [];
  } else {
    numbers = JSON.parse(stored);
  }

  // 3. Updaten: neuen Wert anhängen
  numbers.push(count);
  count++;

  // 4. Zurückschreiben: das Array wieder als JSON-String speichern
  localStorage.setItem('numbers', JSON.stringify(numbers));

  // Bei 100 Einträgen stoppen wir das Interval.
  if (numbers.length >= 100) {
    clearInterval(intervalID);
  }
}, 3000);
