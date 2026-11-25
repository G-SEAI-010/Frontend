// useState ist ein "Hook": eine Funktion von React, die einer Komponente ein Gedächtnis gibt
import { useState } from 'react';
import CatName from './components/CatName.jsx';
import MultiCounter from './components/MultiCounter.jsx';
import StateUndObjekte from './components/StateUndObjekte.jsx';

function App() {
  // Eine normale Variable: Änderungen lösen _kein_ neues Rendern aus,
  // und bei jedem Rendern startet sie wieder bei 0. Darum brauchen wir State.
  let count = 0;

  // useState(0) liefert ein Array mit genau zwei Einträgen, die wir per Destructuring auspacken:
  // - wert: der aktuelle Zustand (beim ersten Rendern 0)
  // - setterFunction: ändert den Zustand UND sorgt dafür, dass React die Komponente neu rendert
  // Die Namen sind frei wählbar; üblich ist [etwas, setEtwas].
  const [wert, setterFunction] = useState(0);

  // State kann jeden Datentyp halten, z. B. auch ein Array
  const [countArray, setCountArray] = useState([3, 5, 8, 0]);

  const [color, setColor] = useState('transparent');

  // Ein State-Setter kann nicht einfach im Top-Level der Komponente
  // aufgerufen werden. Das führt in einen infinitive Loop.
  // Hier im setInterval klappt es _erstmal_ (bitte nicht nachmachen!)
  // Achtung: setInterval direkt im Komponenten-Körper würde bei jedem Rendern
  // ein weiteres Intervall starten – die Zahl der Intervalle wächst immer weiter.
  // setInterval(() => {
  //   setterFunction(wert + 1);
  // }, 2000);

  return (
    <div
      style={{
        // Der State 'color' steuert die Hintergrundfarbe; ändert er sich, wird neu gerendert
        backgroundColor: color,
      }}
    >
      <h1>React State</h1>

      {/* Alle drei Absätze zeigen denselben State – nach einem Update sind sie automatisch alle aktuell */}
      <p>Der Zähler steht bei {wert}</p>
      <p>Der Zähler steht bei {wert}</p>
      <p>Der Zähler steht bei {wert}</p>

      <button
        onClick={() => {
          // count++;
          // console.log(count);
          // setterFunction(10); // count = 10 (+ neu rendern der Komponente)

          // Neuen Wert aus dem aktuellen berechnen und an React übergeben.
          // Niemals wert++ schreiben: State wird nur über die Setter-Funktion geändert.
          setterFunction(wert + 1);
        }}
      >
        Click me +
      </button>
      <button
        onClick={() => {
          setterFunction(wert - 1);
        }}
      >
        Click me -
      </button>
      <br />
      {/* State und Setter können als Props weitergegeben werden – so kann auch die Kind-Komponente die Farbe ändern */}
      <CatName color={color} setColor={setColor} />
      <br />
      <input
        type='color'
        name=''
        id=''
        onChange={(e) => {
          // e.target.value ist die gewählte Farbe, z. B. "#ff0000"
          setColor(e.target.value);
        }}
      />
      <MultiCounter />

      <StateUndObjekte />
    </div>
  );
}

export default App;
