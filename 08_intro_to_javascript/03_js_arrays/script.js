/**
 * JAVASCRIPT ARRAYS (Pythons "Listen")
 * ====================================
 *
 * Arrays in JS sind genau wie Listen in Python.
 * Sie sind dynamische, geordnete Sammlungen, die gemischte Datentypen aufnehmen können.
 *
 * Haupteigenschaften:
 * - Nullbasiert (zero-indexed, das erste Element ist an Position 0)
 * - Dynamische Größe (können wachsen oder schrumpfen)
 * - Mutierende vs. nicht-mutierende Methoden (Entscheidender Unterschied!)
 */

// ==========================================
// ARRAYS ERSTELLEN
// ==========================================
console.group("=== ARRAYS ERSTELLEN ===");

// Python: fruits = ["apple", "banana", "orange"]
const fruits = ["apple", "banana", "orange"];

// Hinweis: Obwohl wir 'const' verwenden, KÖNNEN wir den Inhalt des Arrays ändern.
// 'const' bedeutet nur, dass wir der Variable 'fruits' kein komplett neues Array zuweisen können.

const mixedArray = [
  1,
  "word",
  true,
  ["a", "b", "c"],
  { name: "John", age: 30 },
];

console.log(mixedArray);

console.groupEnd();

// ==========================================
// AUF ELEMENTE ZUGREIFEN
// ==========================================
console.group("\n=== AUF ELEMENTE ZUGREIFEN ===");

console.log("Erstes Element:", mixedArray[0]);

// PYTHON-FALLE: In Python verwendet man fruits[-1], um das letzte Element zu erhalten.
// In JS gibt fruits[-1] 'undefined' zurück!
console.log("Letztes Element:", mixedArray[mixedArray.length - 1]);

// Verwende .at() für python-ähnliche negative Indizes!
console.log("Python-ähnlicher Weg:", mixedArray.at(-1));

console.groupEnd();

// ==========================================
// ELEMENTE HINZUFÜGEN & ENTFERNEN
// ========================================
// Alle Methoden in diesem Abschnitt
// MUTIEREN (verändern) das ursprüngliche Array
// ==========================================
console.group("\n=== ELEMENTE HINZUFÜGEN & ENTFERNEN ===");

// push() - Python-Äquivalent: list.append()
const pushArray = ["apple", "banana"];
pushArray.push("grape");
console.log("Nach push():", pushArray);

// pop() - Python-Äquivalent: list.pop()
const popArray = ["apple", "banana", "grape"];
popArray.pop();
console.log("Nach pop():", popArray);

// shift() - Python-Äquivalent: list.pop(0)
const shiftArray = ["mango", "apple", "banana"];
shiftArray.shift();
console.log("Nach shift():", shiftArray);

// unshift() - Python-Äquivalent: list.insert(0, item)
const unshiftArray = ["apple", "banana"];
unshiftArray.unshift("mango");
console.log("Nach unshift():", unshiftArray);

console.groupEnd();

// ========================================
// ARRAYS MODIFIZIEREN (MUTIEREND VS NICHT-MUTIEREND)
// ========================================
console.group("\n=== ARRAYS MODIFIZIEREN ===");

console.log("\n ---- Mutierende Methoden + nicht-mutierende Varianten ----");

console.log("\nMUTIEREND:");

// reverse() vs toReversed()
// Python-Äquivalent: list.reverse() (mutierend) vs reversed(list) (nicht-mutierend)
const arrayReverse = ["apple", "banana", "orange"];
arrayReverse.reverse();
console.log("Nach reverse() (Original ist verändert!):", arrayReverse);

console.log("\nNICHT-MUTIEREND:");

const arrayToReversed = ["apple", "banana", "orange"];
const reversedArray = arrayToReversed.toReversed();
console.log("Neu mit toReversed():", reversedArray);
console.log("Original bleibt unverändert:", arrayToReversed);

console.log("\nMUTIEREND:");

// splice() vs toSpliced()
// Kein direktes Python-Äquivalent; ähnlich wie Slice-Zuweisung: list[1:2] = ["kiwi", "pear"]
const arrayToSplice = ["apple", "banana", "orange", "grape"];
arrayToSplice.splice(1, 1, "kiwi", "pear");
console.log("Nach splice() (Original ist verändert!):", arrayToSplice);

console.log("\nNICHT-MUTIEREND:");

const arrayToSpliced = ["apple", "banana", "orange", "grape"];
const splicedArray = arrayToSpliced.toSpliced(1, 1, "kiwi", "pear");
console.log("Neu mit toSpliced():", splicedArray);
console.log("Original bleibt unverändert:", arrayToSpliced);

console.log("\n ------- Grundsätzlich nicht-mutierende Methoden ------- ");

// slice() - Python-Äquivalent: list[1:3]
// Slice ist IMMER nicht-mutierend. Es braucht keine "to"-Version.
const sliceArray = ["apple", "banana", "orange", "grape", "kiwi"];
const sliceResult = sliceArray.slice(1, 3); // Extrahiert Index 1 bis (aber nicht inkl.) 3
console.log("\nNach slice():", sliceResult);
console.log("Original nach slice() (unverändert):", sliceArray);

// join() - Python-Äquivalent: ", ".join(list)
// PYTHON-FALLE: In Python ist join eine String-Methode. In JS ist es eine Array-Methode!
// Ist ebenfalls IMMER nicht-mutierend.
const joinArray = ["apple", "banana", "orange"];
const joinResult = joinArray.join(", ");
console.log('join(", "):\n', joinResult);

console.log("\n ------- Sort ------- ");

// sort() vs toSorted()
// In Python sortiert list.sort() Zahlen numerisch.
// In JS wandelt .sort() standardmäßig alles in Strings um und sortiert alphabetisch!

const arraySort = [10, 2, 1, 21];
arraySort.sort();
console.log("Alphabetisch sortiert:", arraySort);

// Korrekte numerische Sortierung, aber NICHT-MUTIEREND mit toSorted():
const numbersToSorted = [10, 2, 1, 21];
const sortedNumbers = numbersToSorted.toSorted((a, b) => a - b);
console.log("\nNumerisch sortiert:", sortedNumbers);
console.log("Original bleibt unverändert:", numbersToSorted);

console.groupEnd();

// ========================================
// ÜBER ARRAYS ITERIEREN (SCHLEIFEN)
// ========================================
console.group("\n=== ÜBER ARRAYS ITERIEREN ===");

const fruits2 = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits2.length; i++) {
  console.log(`Element an Index-Position ${i} ist ${fruits2[i]}`);
}

// PYTHON-FALLE: VERWENDE NICHT "for...in" für JS-Arrays!
// "for...in" iteriert über Indizes/Schlüssel, nicht über die tatsächlichen Werte.

// Verwendung der for...of Schleife - Python-Äquivalent: for item in list:
console.log("\nVerwendung einer for...of Schleife:");

for (const fruit of fruits2) {
  console.log(`Aktuelle Frucht: ${fruit}`);
}

console.groupEnd();
