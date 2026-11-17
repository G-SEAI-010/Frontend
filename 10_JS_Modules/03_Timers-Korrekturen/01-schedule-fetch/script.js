// console.log('Schedule fetch');

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

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
let counter = 1;

async function fetchPokemon(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`Fetching failed for id: ${id}`);

    const data = await res.json();

    return { id: data.id, name: data.name };
  } catch (error) {
    console.log(error);
    return { id: null, name: null };
  }
}

const intervalID = setInterval(async () => {
  const { id, name } = await fetchPokemon(counter);
  console.log({ id, name });
  counter++;
  if (counter >= 15) clearInterval(intervalID);
}, 1000);
