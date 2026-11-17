// console.log('Schedule fetch');

// Variante 1: setInterval + fetch mit .then()-Kette
// let counter = 1;

// const intervalID = setInterval(() => {
//   // console.log('Fetching pokemon', counter);

//   fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
//     .then((res) => res.json())
//     .then((data) => console.log(data.name));

//   counter++;

//   if (counter > 15) {
//     clearInterval(intervalID);
//   }
// }, 1000);

// Variante 2: async-Callback mit await.

// const path = 'https://pokeapi.co/api/v2/pokemon';
// let counter = 1;

// const intervalID = setInterval(async () => {
//   const currentID = counter;
//   counter++;

//   if (currentID > 5) {
//     clearInterval(intervalID);
//     return;
//   }

//   const res = await fetch(`${path}/${currentID}`);

//   const data = await res.json();

//   const { name, id } = data;

//   console.log({ name, id });
// }, 1000);

//
//

// Variante 3: fetch-Logik in eine eigene async-Funktion auslagern 
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
let counter = 1;

// async-Funktion: gibt immer ein Promise zurück und erlaubt await im Inneren
async function fetchPokemon(id) {
  try {
    // await wartet auf die Antwort des Servers. res ist das Response-Objekt, noch nicht die Daten
    const res = await fetch(`${BASE_URL}/${id}`);
    //  fetch wirft bei 400/500 Status Codes keinen Fehler – deshalb res.ok selbst prüfen
    if (!res.ok) throw new Error(`Fetching failed for id: ${id}`);

    // .json() liest den Body und wandelt ihn in ein JS-Objekt um – liefert ebenfalls ein Promise
    const data = await res.json();

    return { id: data.id, name: data.name };
    // Nur die Felder zurückgeben, die wir wirklich brauchen
  } catch (error) {
    // Netzwerkfehler und unser throw landen hier. Fallback-Objekt, damit der Aufrufer weiterlaufen kann
    console.log(error);
    return { id: null, name: null };
  }
}

// setInterval ruft den Callback alle 1000 ms auf und gibt eine ID zurück
const intervalID = setInterval(async () => {
  const { id, name } = await fetchPokemon(counter);
  console.log({ id, name });
  counter++;
  // Mit der ID stoppen wir das Interval
  if (counter >= 15) clearInterval(intervalID);
}, 1000);
