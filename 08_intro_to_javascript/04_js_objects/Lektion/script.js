/**
 * JAVASCRIPT OBJEKTE (Pythons "Dictionaries")
 * ===========================================
 *
 * In JavaScript sind Objekte im Grunde das, was Dictionaries in Python sind:
 * Sammlungen von Schlüssel-Wert-Paaren (Key-Value-Pairs).
 *
 * Hauptunterschiede zu Python:
 * 1. Schlüssel (Keys) brauchen keine Anführungszeichen, wenn sie gültige Namen sind.
 * 2. Man greift meistens mit einem Punkt (.) auf Werte zu, nicht mit eckigen Klammern.
 * 3. Objekte können Methoden (Funktionen) enthalten. JS nutzt 'this' anstelle von Pythons 'self'.
 */

// ==========================================
// ABSCHNITT 1: OBJEKT-LITERALE
// ==========================================
console.group("ABSCHNITT 1: OBJEKT-LITERALE");

// Ein Objekt erstellen (Vergleiche mit: user = {"first_name": "John", ...})
const user = {
  firstName: "John",
  "last-name": "Doe",
  age: 20,
  hobbies: ["football", "gaming", "sleeping"],
  sayHi() {
    // Methode (Funktion innerhalb eines Objekts)
    // PYTHON-VERGLEICH: In Python verwendest du 'self.firstName', in JS 'this.firstName'
    return `Hello, my name is ${this.firstName}, I'm ${this.age} years old!`;
  },
};

console.groupEnd();

// ==========================================
// ABSCHNITT 2: AUF OBJEKT-EIGENSCHAFTEN ZUGREIFEN
// ==========================================
console.group("ABSCHNITT 2: AUF OBJEKT-EIGENSCHAFTEN ZUGREIFEN");
/*
  Es gibt zwei Wege, auf Eigenschaften zuzugreifen:
  1. Punkt-Notation (Dot notation): object.property (DER JS-STANDARD)
  2. Klammer-Notation (Bracket notation): object["property"] (DER PYTHON-WEG)
  
  Wann nutzt man die Klammer-Notation in JS?
  - Wenn der Eigenschaftsname Leerzeichen oder Sonderzeichen enthält.
  - Wenn der Eigenschaftsname in einer Variablen gespeichert ist.
*/

console.log("Ganzes Objekt:", user);

console.log("Punkt-Notation:", user.firstName);
console.log("Klammer-Notation:", user["last-name"]);
console.log("Hobby:", user.hobbies[0]);

// Variablen in der Klammer-Notation verwenden
const selectedValue = "firstName";
console.log("Gewählter Wert:", selectedValue);
console.log("Zugriff über Variable:", user[selectedValue]);

// Eine Objekt-Methode aufrufen
console.log(user.sayHi());

console.groupEnd();

// ==========================================
// ABSCHNITT 3: OBJEKTE VERÄNDERN
// ==========================================
console.group("ABSCHNITT 3: OBJEKTE VERÄNDERN");
/*
  Objekte sind mutierbar (veränderbar), wir können:
  - Vorhandene Werte ändern
  - Neue Eigenschaften hinzufügen
  - Eigenschaften löschen
*/

user.age = 30; // Vorhandene Eigenschaft ändern
user.job = "Web Developer"; // Neue Eigenschaft hinzufügen (Python: user["job"] = "...")

// Eigenschaft löschen (Python: del user["job"])
// delete user.job;

console.log("Verändertes Objekt:", user);

console.groupEnd();

// ==========================================
// ABSCHNITT 4: OBJEKT-DESTRUKTURIERUNG (Destructuring)
// ==========================================
console.group("ABSCHNITT 4: OBJEKT-DESTRUKTURIERUNG (Destructuring)");
/*
  Destrukturierung ist ein sehr wichtiges JS-Konzept ohne direktes Python-Äquivalent.
  Es erlaubt uns, mehrere Eigenschaften aus einem Objekt "herauszuziehen" und in 
  einzelnen Variablen zu speichern.
*/

// Einfache Destrukturierung
// Anstatt: const firstName = user.firstName; const age = user.age;
const { firstName, age: year } = user;
console.log("Destrukturiert:", firstName, year);

// Destrukturierung in Funktionsparametern
function greet({ firstName, age }) {
  console.log(`Hello, my name is ${firstName} and I am ${age} years old.`);
}

// Wir übergeben das GANZE Objekt, aber die Funktion "zieht" sich nur firstName und age heraus.
greet(user);

console.groupEnd();

// ==========================================
// ABSCHNITT 5: ÜBER OBJEKTE ITERIEREN (Schleifen)
// ==========================================
console.group("ABSCHNITT 5: ÜBER OBJEKTE ITERIEREN");
/*
  PYTHON-VERGLEICH:
  Python: dict.keys()   -> JS: Object.keys(obj)
  Python: dict.values() -> JS: Object.values(obj)
  Python: dict.items()  -> JS: Object.entries(obj)
*/

// Nur die Schlüssel (Keys)
const keys = Object.keys(user);
console.log("Alle Keys:", keys);

// Nur die Werte (Values)
const values = Object.values(user);
console.log("Alle Werte:", values);

// Alle Schlüssel/Wert Paare (Key/Value Pairs)
const entries = Object.entries(user);
console.log("Alle Werte:", entries);

// Schlüssel und Werte gleichzeitig iterieren (wie for key, value in dict.items():)
// Wir kombinieren hier Object.entries mit Array-Destrukturierung [key, value]
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

console.groupEnd();

// ==========================================
// ABSCHNITT 6: FEHLENDE SCHLÜSSEL & OPTIONAL CHAINING
// ==========================================
console.group("ABSCHNITT 6: FEHLENDE SCHLÜSSEL & OPTIONAL CHAINING");
/*
  PYTHON-FALLE: 
  Greifst du in Python auf einen fehlenden Key zu (z.B. user["address"]), 
  stürzt das Programm mit einem KeyError ab. 
  
  In JS stürzt nichts ab, du bekommst stattdessen einfach 'undefined'.
*/

// Ohne Fragezeichen bekommen wir ein undefined (ohne Error):
console.log("Nicht existierender Key:", user.address);

/*
  Das Problem: Wenn wir nun versuchen, von 'undefined' weiterzulesen, stürzt JS ab!
  Python-Lösung war: user.get("address", {}).get("city")
  JS-Lösung: Optional Chaining (?.)
*/

// Mit dem Fragezeichen (Optional Chaining) stoppt JS sicher und gibt undefined zurück (statt einem Error):
console.log("Sicherer Zugriff (Optional Chaining):", user.address?.city);

// Wenn wir einen Standardwert wollen (wie bei Python .get("key", "Standard")):
// Der Nullish Coalescing Operator (??) greift ein, wenn links null oder undefined steht.
const city = user.address?.city ?? "Unbekannte Stadt";
console.log("Mit Standardwert:", city);

console.groupEnd();
