console.log('Timer');

// fetch("example.com")

// document.addEventListener()

setTimeout(() => {
  console.log('logging aus dem Timer');
}, 1234);

console.log('log direkt nach Timer');

function doSomething() {
  console.log('DONE');
}

const timerID = setTimeout(doSomething, 3000);

clearTimeout(timerID);

setTimeout(() => {
  document.querySelector('p').remove();
}, 4000);

//

let counter = 0;

const intervalID = setInterval(() => {
  console.log('Grüße aus dem Interval');

  counter++;

  if (counter > 5) {
    clearInterval(intervalID);
  }
}, 1000);
