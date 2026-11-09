// =============================================
// 0. VORAUSSETZUNG: FIRST-CLASS CITIZENS
// =============================================
console.group("0. VORAUSSETZUNG: FIRST-CLASS CITIZENS");
// In JavaScript (wie auch in Python) sind Funktionen sogenannte "First-Class Citizens" (Bürger erster Klasse).
// Das bedeutet: In JavaScript werden Funktionen als vollwertige Datentypen behandelt. Technisch gesehen handelt es sich um spezielle Objekte, die sich im Code exakt so referenzieren und zuweisen lassen wie Strings, Zahlen oder Arrays.

// Weil sie ganz normale Werte sind, können wir mit ihnen alles machen, was wir auch mit anderen Werten tun:
// 1. Sie in Variablen speichern: const myFunc = () => {}
// 2. Sie als Argumente (Parameter) an andere Funktionen übergeben.
// 3. Sie als Ergebnis aus anderen Funktionen zurückgeben.

// Diese "First-Class"-Eigenschaft ist die zwingende Voraussetzung dafür,
// dass Higher Order Functions in einer Programmiersprache überhaupt existieren können.

console.groupEnd();

// =============================================
// 1. HIGHER ORDER FUNCTIONS ALS FUNKTIONS-KONSUMENTEN
// =============================================
console.group("1. HIGHER ORDER FUNCTIONS ALS FUNKTIONS-KONSUMENTEN");
// Higher Order Functions (Funktionen höherer Ordnung) können eine oder mehrere Funktionen als Argumente entgegennehmen.

const sayWelcome = () => "Welcome, ";
const sayGoodbye = () => "Goodbye, ";

const personalMessage = (message, name) => {
  // Hier wird die übergebene Funktion (message) ausgeführt, indem wir () anhängen
  console.log(message() + name);
};

// PYTHON-VERGLEICH: Da Python und JS Funktionen als Werte behandeln, übergeben wir hier
// nur den NAMEN der Funktion (z.B. 'sayWelcome') OHNE die Klammern '()'.
// WARUM OHNE KLAMMERN?
// - sayWelcome() MIT Klammern führt die Funktion SOFORT an dieser Stelle aus. Es würde nur das Ergebnis (der String "Welcome, ") übergeben werden.
// - sayWelcome OHNE Klammern übergibt die Funktion SELBST als Bauplan. So überlassen wir der 'personalMessage'-Funktion die Kontrolle darüber, WANN sie ausgeführt wird.

let userName = "John Doe!";

personalMessage(sayWelcome, userName);
personalMessage(sayGoodbye, "John Doe!");

console.groupEnd();

// =============================================
// 2. HIGHER ORDER FUNCTIONS ALS FUNKTIONS-FABRIKEN
// =============================================
console.group("2. HIGHER ORDER FUNCTIONS ALS FUNKTIONS-FABRIKEN");
// Higher Order Functions können als Ergebnis eine andere Funktion zurückgeben.

// PYTHON-VERGLEICH: In Python machst du das, indem du ein verschachteltes 'def' innerhalb
// einer Funktion definierst und zurückgibst, oder indem du eine 'lambda'-Funktion zurückgibst.

const sayHello = (name) => {
  return () => {
    console.log(`Hallo, ${name}!`);
  };
};

const helloJohn = sayHello("John");
const helloAlice = sayHello("Alice");

helloJohn();
helloAlice();

// Eine Funktion, die:
// - eine andere Funktion als Argument entgegennimmt, ODER
// - eine Funktion zurückgibt,
// nennt man eine Higher Order Function.

console.groupEnd();

// =============================================
// 3. HÄUFIGE HIGHER ORDER FUNCTIONS IN JAVASCRIPT
// =============================================
console.group("3. HÄUFIGE HIGHER ORDER FUNCTIONS IN JAVASCRIPT");

// 1. forEach - Führt eine übergebene Funktion einmal für jedes Array-Element aus
// PYTHON-VERGLEICH: Python hat hierfür kein direktes Äquivalent,
// man würde einfach eine Standard `for item in iterable:` Schleife nutzen.
console.log("\nforEach Beispiel:");
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
  console.log(`${index + 1}: ${fruit}`);
});
// Erwartete Ausgabe:
// 1: apple
// 2: banana
// 3: cherry

// 2. map - Erstellt ein neues Array mit den Ergebnissen des Funktionsaufrufs für jedes Array-Element
// PYTHON-VERGLEICH: Python hat map(func, iterable), aber meistens würde
// man eine List Comprehension nutzen: [number * 2 for number in numbers]
console.log("\nmap Beispiel:");
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);
console.log(numbers);
// Erwartete Ausgabe: [2, 4, 6, 8, 10]

// 3. find - Gibt das erste Element im Array zurück, das die übergebene Funktion (Bedingung) erfüllt
// PYTHON-VERGLEICH: Pythons Äquivalent mit Generatoren ist etwas sperrig:
// next((person for person in people if person['age'] == 30), None)
console.log("\nfind Beispiel:");
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 35 },
];

const person30 = people.find((person) => person.age === 30);
console.log(person30);
// Erwartete Ausgabe: { name: 'Jane', age: 30 }

// 4. filter - Erstellt ein neues Array mit allen Elementen, die den Test der übergebenen Funktion bestehen
// PYTHON-VERGLEICH: Python hat filter(func, iterable) oder List Comprehensions:
// [word for word in words if len(word) > 6]
console.log("\nfilter Beispiel:");
const words = ["random", "words", "balcony", "dog", "bootcamp"];

const longWords = words.filter((word) => word.length > 6);
console.log(longWords);
// Erwartete Ausgabe: ["balcony", "bootcamp"]

// 5. reduce - Führt eine Reducer-Funktion für jedes Element aus und gibt einen einzigen Wert zurück
// PYTHON-VERGLEICH: Genaues Äquivalent zu Pythons `functools.reduce(func, iterable, initializer)`
console.log("\nreduce Beispiel:");

const numbers2 = [1, 2, 3, 4, 5];

let result = 0;

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  result,
);

console.log(sum);
// Erwartete Ausgabe: 15 (0 + 1 + 2 + 3 + 4 + 5)

// 6. some - Prüft, ob mindestens ein Element im Array den Test besteht
// PYTHON-VERGLEICH: Funktioniert exakt wie Pythons `any(len(word) > 6 for word in words)`
console.log("\nsome Beispiel:");
// const words = ["random", "words", "balcony", "dog", "bootcamp"];

const hasLongWords = words.some((word) => word.length > 6);

console.log(hasLongWords);
// Erwartete Ausgabe: true

// 7. every - Prüft, ob alle Elemente im Array den Test bestehen
// PYTHON-VERGLEICH: Funktioniert exakt wie Pythons `all(len(word) > 6 for word in words)`
console.log("\nevery Beispiel:");
// const words = ["random", "words", "balcony", "dog", "bootcamp"];

const allLongWords = words.every((word) => word.length > 6);
console.log(allLongWords);
// Erwartete Ausgabe: false

// All diese Methoden sind Higher Order Function, weil sie eine Funktion als Argument entgegennehmen.
// Die Funktionen, die ihnen übergeben werden, nennt man Callback-Funktionen.

// =============================================
// 4. BEISPIEL: EIGENE FILTER-FUNKTION BAUEN
// =============================================

// Vorbereitetes Array mit Zahlen
// const numbers = [1, 2, 3, 4, 5];

// Beispiel für eine benutzerdefinierte Filter-Funktion, die dasselbe tut wie die Array-Methode 'filter':
// PYTHON-VERGLEICH: Beachte, wie 'testFn' genau wie eine normale Funktion innerhalb der if-Anweisung aufgerufen wird.
const filterNumbers = (array, testFn) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (testFn(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

const isEven = (number) => number % 2 === 0;

// Die Filter-Funktion auf das vorbereitete Array anwenden:
console.log("\nEigener Filter + filter() Array-Methode im Vergleich:");
console.log(filterNumbers(numbers, isEven));

// Zum Vergleich: Verwende die eingebaute Array-Methode 'filter', um gerade Zahlen zu filtern:
const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Diese Funktion gibt true für gerade Zahlen zurück (also Zahlen, die durch 2 teilbar sind),
// was bedeutet, dass nur gerade Zahlen in das neue Array aufgenommen werden.

// Ergebnis: Das evenNumbers Array enthält nur die geraden Zahlen aus dem ursprünglichen numbers Array
// und erreicht somit genau dasselbe Ergebnis wie unsere benutzerdefinierte Funktion.

console.log(evenNumbers);
// Erwartete Ausgabe: [ 2, 4 ]

// =============================================
// 5. CALLBACK-FUNKTIONEN
// =============================================
// Eine Callback-Funktion ist eine Funktion, die als Argument an eine andere Funktion übergeben wird.
// Sie wird dann innerhalb der äußeren Funktion aufgerufen, um eine bestimmte Routine oder Aktion abzuschließen. - MDN

// PYTHON-VERGLEICH: In JavaScript verwenden wir für Callbacks fast immer Arrow-Funktionen (Pfeilfunktionen).
// Eine Arrow-Funktion `(number) => number % 2 === 0` ist das exakte Äquivalent
// zu einer Python Lambda-Funktion: `lambda number: number % 2 == 0`.

// Im obigen Beispiel: Die Arrow-Funktion `number => number % 2 === 0` wird als Argument an .filter() übergeben.
