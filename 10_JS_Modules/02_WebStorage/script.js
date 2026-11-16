console.log('web storage');

localStorage.setItem('mein-schluessel', 42);

const data = localStorage.getItem('mein-schluessel');

const parsedData = Number.parseInt(data);

console.log(data);
console.log(42);
console.log(parsedData);

// const userSettings = {
//   theme: 'dark',
//   timestamp: 1738457634534,
//   favIceCream: ['choco', 'stracciatella'],
//   isPremium: true,

//   myMethod() {
//     return this.isPremium;
//   },
// };

// console.log(userSettings);
// console.log(JSON.stringify(userSettings));

// localStorage.setItem('settings', JSON.stringify(userSettings));

// try {
//   const userSettingsFromStorage = localStorage.getItem('settings');
// } catch (error) {}

// console.log(userSettingsFromStorage);
// console.log(typeof userSettingsFromStorage);

// const parsedSettings = JSON.parse(userSettingsFromStorage);

// console.log(parsedSettings);

// const numbers = [1];

// localStorage.setItem('numbers', JSON.stringify(numbers));

let count = 0;
const intervalID = setInterval(() => {
  const stored = localStorage.getItem('numbers');

  console.log(stored);

  let numbers;

  if (stored === null) {
    numbers = [];
  } else {
    numbers = JSON.parse(stored);
  }

  numbers.push(count);
  count++;

  localStorage.setItem('numbers', JSON.stringify(numbers));

  if (numbers.length >= 100) {
    clearInterval(intervalID);
  }
}, 3000);
