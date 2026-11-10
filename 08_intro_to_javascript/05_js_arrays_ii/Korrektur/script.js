// ==========================================
// Aufgabe 1: forEach
// ==========================================
console.group("Aufgabe 1: forEach");
/*
  PYTHON-VERGLEICH: In Python würdest du hierfür einfach eine 
  `for item in list:`-Schleife verwenden. `forEach` ist die 
  funktionale JS-Alternative, die keinen neuen Wert zurückgibt.
*/

// 1. Initialisiere ein Array mit Zahlen:
const numbers = [1, 2, 3, 4, 5];

// 2. Verwende die forEach-Methode, um jede Zahl auszugeben:
// Verwende forEach, um über 'numbers' zu iterieren und jede Zahl in der Konsole auszugeben.
numbers.forEach((number) => console.log("Number: ", number));

// 3. Verwende die forEach-Methode, um die Summe der Zahlen zu berechnen:
// Initialisiere eine Variable 'sum' mit 0.
let sum = 0;

// Iteriere mit forEach über 'numbers' und addiere jede Zahl zu 'sum'.
numbers.forEach((num) => (sum += num));

// Gib den Endwert von 'sum' in der Konsole aus.
console.log("\nSum: ", sum);

// 4. Verwende die forEach-Methode, um ein neues Array mit quadrierten Werten zu erstellen:
// Erstelle ein leeres Array namens 'squaredNumbers'.
const squaredNumbers = [];

// Iteriere mit forEach über 'numbers', quadriere jede Zahl
// und füge den quadrierten Wert zu 'squaredNumbers' hinzu.
numbers.forEach((num) => squaredNumbers.push(num ** 2));

// Gib das Array 'squaredNumbers' in der Konsole aus.
console.log("\nSquared Numbers: ", squaredNumbers);

console.groupEnd();

// ==========================================
// Aufgabe 2: map
// ==========================================
console.group("Aufgabe 2: map");
/*
  PYTHON-VERGLEICH: Dies ist das genaue Äquivalent zu Pythons List Comprehensions!
  Python: [num * 2 for num in numbers]
  JS:     numbers.map(num => num * 2)
*/

// 1. Initialisiere ein Array mit Zahlen:
const numbers2 = [1, 2, 3, 4, 5];

// 2. Verwende die map-Methode, um ein neues Array mit verdoppelten Werten zu erstellen:
// Erstelle ein neues Array 'doubledNumbers', bei dem jeder Wert
// das Doppelte des entsprechenden Wertes in 'numbers2' ist.
const doubledNumbers = numbers2.map((num) => num * 2);

// Gib das Array 'doubledNumbers' in der Konsole aus.
console.log("\nDoubled Numbers: ", doubledNumbers);

// 3. Verwende die map-Methode, um ein neues Array aus Strings zu erstellen:
// Erstelle ein neues Array 'stringNumbers', bei dem jeder Wert die
// entsprechende Zahl als String mit dem Präfix "Number: " ist.
const stringNumbers = numbers2.map((number) => `Number: ${number}`);

// Gib das Array 'stringNumbers' in der Konsole aus.
console.log("\nString Numbers: ", stringNumbers);

// 4. Verwende die map-Methode, um ein neues Array aus Objekten zu erstellen:
// Erstelle ein neues Array 'numberObjects', bei dem jeder Wert ein Objekt ist,
// das die Eigenschaften 'original' (die ursprüngliche Zahl) und 'squared' (das Quadrat) hat.

// PYTHON-FALLE: Beachte die runden Klammern ({...}) um das Objekt!
// In JS sagen die runden Klammern der Arrow-Funktion, dass sie ein Objekt
// zurückgibt und nicht etwa einen neuen Codeblock öffnet.
const numberObjects = numbers2.map((number) => ({
  original: number,
  squared: number * number,
}));

// Gib das Array 'numberObjects' in der Konsole aus.
console.log("\nNumber Objects: ", numberObjects);

console.groupEnd();

// ==========================================
// Aufgabe 3: find
// ==========================================
console.group("Aufgabe 3: find");
/*
  PYTHON-VERGLEICH: In Python macht man das oft etwas umständlich mit 
  `next((x for x in list if x > 25), None)`. JS hat dafür eine saubere Methode.
  Wichtig: 'find' gibt nur das ERSTE Element zurück, das die Bedingung erfüllt!
*/

// 1. Initialisiere ein Array mit Zahlen:
const numbers3 = [10, 20, 30, 40, 50];

// 2. Verwende die find-Methode, um eine Zahl größer als 25 zu finden:
// Finde die ERSTE Zahl in 'numbers3', die größer als 25 ist.
const foundNumber = numbers3.find((num) => num > 25);

// Gib die gefundene Zahl in der Konsole aus.
console.log("\nFound Number: ", foundNumber);

// 3. Initialisiere ein Array mit Objekten:
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

// 4. Verwende die find-Methode, um eine Person namens "Charlie" zu finden:
// Finde das erste Objekt in 'people', bei dem die Eigenschaft 'name' "Charlie" ist.
const findCharlie = people.find((person) => person.name === "Charlie");

// Gib das gefundene Objekt in der Konsole aus.
console.log("\nCharlie: ", findCharlie);

console.groupEnd();

// ==========================================
// Aufgabe 4: filter
// ==========================================
console.group("Aufgabe 4: filter");
/*
  PYTHON-VERGLEICH: Auch dies entspricht List Comprehensions mit einer if-Bedingung.
  Python: [num for num in numbers if num > 15]
  JS:     numbers.filter(num => num > 15)
*/

// 1. Initialisiere ein Array mit Zahlen:
const numbers4 = [5, 10, 15, 20, 25, 30];

// 2. Verwende die filter-Methode, um ein neues Array mit Zahlen größer als 15 zu erstellen:
const numbersGreaterThan15 = numbers4.filter((num) => num > 15);

// Gib das Array 'numbersGreaterThan15' in der Konsole aus.
console.log("\nNumbers Greater Than 15: ", numbersGreaterThan15);

// 3. Initialisiere ein Array mit Objekten:
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 88 },
  { name: "Eve", grade: 95 },
];

// 4. Verwende die filter-Methode, um ein neues Array mit Schülern zu erstellen, die mehr als 80 Punkte haben:
const studentsAbove80 = students.filter((student) => student.grade > 80);

// Gib das Array 'studentsAbove80' in der Konsole aus.
console.log("\nStudents Above 80: ", studentsAbove80);

console.groupEnd();

// ==========================================
// Aufgabe 5: some und every
// ==========================================
console.group("Aufgabe 5: some und every");

// 1. Initialisiere ein Array mit Zahlen:
const numbers5 = [4, 8, 15, 16, 23, 42];

// 2. Verwende die some-Methode, um zu prüfen, ob es Zahlen größer als 20 gibt:
// PYTHON-VERGLEICH: Dies entspricht der any() Funktion in Python.
const isAnyGreaterThan20 = numbers5.some((num) => num > 20);

// Gib das Ergebnis in der Konsole aus (sollte true sein).
console.log("\nIs Any Greater Than 20: ", isAnyGreaterThan20);

// 3. Verwende die every-Methode, um zu prüfen, ob alle Zahlen kleiner als 50 sind:
// PYTHON-VERGLEICH: Dies entspricht der all() Funktion in Python.
const allNumbersLessThan50 = numbers5.every((num) => num < 50);

// Gib das Ergebnis in der Konsole aus (sollte true sein).
console.log("\nAll Numbers Less Than 50: ", allNumbersLessThan50);

// 4. Initialisiere ein Array mit Objekten:
const students2 = [
  { name: "Alice", age: 25, passed: true },
  { name: "Bob", age: 22, passed: false },
  { name: "Charlie", age: 27, passed: true },
  { name: "David", age: 20, passed: true },
];

// 5. Verwende die some-Methode, um zu prüfen, ob ein Schüler durchgefallen ist:
// Prüfe, ob es Schüler gibt, bei denen 'passed' auf false gesetzt ist.
const ifAnyFailed = students2.some((student) => !student.passed);

// Gib das Ergebnis in der Konsole aus (sollte true sein).
console.log("\nIf Any Failed: ", ifAnyFailed);

// 6. Verwende die every-Methode, um zu prüfen, ob alle Schüler älter als 18 sind:
const ifAllOlderThan18 = students2.every((student) => student.age > 18);

// Gib das Ergebnis in der Konsole aus (sollte true sein).
console.log("\nIf All Older Than 18: ", ifAllOlderThan18);

console.groupEnd();
