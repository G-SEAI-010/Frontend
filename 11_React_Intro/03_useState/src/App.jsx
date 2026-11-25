import { useState } from 'react';
import CatName from './components/CatName.jsx';
import MultiCounter from './components/MultiCounter.jsx';
import StateUndObjekte from './components/StateUndObjekte.jsx';

function App() {
  let count = 0;

  const [wert, setterFunction] = useState(0);
  const [countArray, setCountArray] = useState([3, 5, 8, 0]);

  const [color, setColor] = useState('transparent');

  // setInterval(() => {
  //   setterFunction(wert + 1);
  // }, 2000);

  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <h1>React State</h1>

      <p>Der Zähler steht bei {wert}</p>
      <p>Der Zähler steht bei {wert}</p>
      <p>Der Zähler steht bei {wert}</p>

      <button
        onClick={() => {
          // count++;
          // console.log(count);
          // setterFunction(10); // count = 10 (+ neu rendern der Komponente)

          setterFunction(wert + 1);
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          // count++;
          // console.log(count);
          // setterFunction(10); // count = 10 (+ neu rendern der Komponente)

          setterFunction(wert - 1);
        }}
      >
        Click me
      </button>
      <br />
      <CatName color={color} setColor={setColor} />
      <br />
      <input
        type='color'
        name=''
        id=''
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <MultiCounter />

      <StateUndObjekte />
    </div>
  );
}

export default App;
