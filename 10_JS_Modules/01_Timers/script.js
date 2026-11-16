console.log('Timer');

// Auch diese APIs arbeiten asynchron: Der Browser ruft unseren Code später auf.
// fetch("example.com")

// document.addEventListener()

// setTimeout(callback, ms) führt die Funktion einmalig nach _frühestens_ 1234 ms aus.
// Der restliche Code wartet nicht darauf, sondern läuft sofort weiter.
setTimeout(() => {
  console.log('logging aus dem Timer');
}, 1234);

// Erscheint in der Console _vor_ der Timer-Ausgabe, weil setTimeout nicht blockiert.
console.log('log direkt nach Timer');

function doSomething() {
  console.log('DONE');
}

// Statt einer Arrow Function können wir auch einen Funktionsnamen übergeben (ohne Klammern!).
// setTimeout gibt eine ID zurück, mit der wir den Timer später wieder stoppen können.
const timerID = setTimeout(doSomething, 3000);

// clearTimeout bricht den Timer ab, bevor er feuert: 'DONE' wird nie geloggt.
clearTimeout(timerID);

// Timer können allerlei Aufgaben übernehmen:
// - CSS-Klassen nach einer Animation entfernen
// - Popups ein/ausblenden
// - Userinput _debouncen_ und damit z.B. eine Suchabfrage erst dann abschicken, wenn der User aufgehört hat, zu tippen

// Nach 4 Sekunden wird der <p>-Absatz ("Notiz") aus der Seite entfernt.
setTimeout(() => {
  document.querySelector('p').remove();
}, 4000);

//

let counter = 0;

// setInterval führt die Funktion wiederholt aus, hier jede Sekunde,
// so lange, bis wir es mit clearInterval stoppen.
const intervalID = setInterval(() => {
  console.log('Grüße aus dem Interval');

  counter++;

  // Nach dem 6. Durchlauf stoppen wir das Interval. Ohne clearInterval würde es endlos laufen.
  if (counter > 5) {
    clearInterval(intervalID);
  }
}, 1000);
