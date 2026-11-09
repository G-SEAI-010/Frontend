// ==========================================
// OBJEKT-LITERALE (OBJECT LITERALS)
// ==========================================
console.group("OBJEKT-LITERALE (OBJECT LITERALS)");

// 1. Erstelle ein Objekt namens 'book' mit der Objekt-Literal-Syntax.
// PYTHON-VERGLEICH: In Python wäre das ein Dictionary. In JS können Objekte aber eigene Methoden haben!

// 2. Das 'book'-Objekt soll folgende Eigenschaften haben:
// title: ein String (Titel des Buches).
// author: ein String (Autor des Buches).
// pages: eine Number (Gesamtzahl der Seiten).
// isRead: ein Boolean (zeigt an, ob das Buch gelesen wurde).

// 3. Füge dem 'book'-Objekt eine Methode namens 'summary' hinzu.
// PYTHON-VERGLEICH: 'this' verhält sich hier wie 'self' in einer Python-Klasse.
// Diese Methode soll einen String zurückgeben, der die Buchdetails in diesem Format zusammenfasst:
// "Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]".

const book = {
  title: "The Two Towers",
  author: "J.R.R. Tolkien",
  pages: 352,
  isRead: true,
  summary() {
    // PYTHON-FALLE: Der ternäre Operator in JS ist "Bedingung ? Wahr : Falsch"
    // In Python schreibst du denselben Ablauf so: "Yes" if self.isRead else "No"
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
      this.pages
    }, Read: ${this.isRead ? "Yes" : "No"}`;
  },
};

console.log(book.summary());

console.groupEnd();

// ==========================================
// DESTRUKTURIERUNG (DESTRUCTURING)
// ==========================================
console.group("DESTRUKTURIERUNG (DESTRUCTURING)");
/*
  PYTHON-VERGLEICH: Das Entpacken (Unpacking) von Arrays ist genau wie Pythons Tuple/List-Unpacking.
  Das Entpacken von Objekten gibt es in Python in dieser Form NICHT!
*/

// Ausgangs-Array
const fruits = ["apple", "banana", "cherry", "date"];

// Aufgabe 1: Einfache Array-Destrukturierung
// Python-Äquivalent: fruit1, fruit2, *_ = fruits
// Hinweis: Im Gegensatz zu Python ignoriert JS überschüssige Elemente automatisch, ohne Fehler zu werfen!
const [fruit1, fruit2] = fruits;
console.log(fruit1); // "apple"
console.log(fruit2); // "banana"

// Aufgabe 2: Elemente bei der Array-Destrukturierung überspringen
// Python-Äquivalent: fruit1, _, fruit3, *_ = fruits
// const [fruit1, , fruit3] = fruits;
// console.log(fruit1); // "apple"
// console.log(fruit3); // "cherry"

// ------------------------------------------------

// Ausgangs-Objekt
const person = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// Aufgabe 3: Einfache Objekt-Destrukturierung
// Es gibt kein direktes Python-Äquivalent. In Python müsstest du name = person["name"] schreiben.
// JS gleicht die Variablennamen automatisch mit den Schlüsseln ab!
const { name, age } = person;
console.log(name); // "John Doe"
console.log(age); // 30

// Aufgabe 4: Verschachtelte Objekt-Destrukturierung (Nested Destructuring)
const {
  address: { city },
} = person;

// Alternativer Ansatz zur verschachtelten Destrukturierung:
// const { city } = person.address;

console.log(city); // "New York"

// Ohne Destrukturierung (zum Vergleich):
// Python: print(person["address"]["city"])
// console.log(person.address.city);

// ------------------------------------------------

// Ausgangs-Funktion
// function displayPerson(person) {
//     console.log(`Name: ${person.name}, Age: ${person.age}`);
// }

// Aufgabe 5: Destrukturierung in Funktionsparametern
// Das wird in modernen JS-Frameworks (wie React) extrem oft verwendet!
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayPerson(person);

console.groupEnd();
