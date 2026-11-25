import { useState } from 'react';

export default function MultiCounter() {
  const [count, setCount] = useState(42);

  const handleDblClick = () => {
    // Würden wir hier dreimal setCount(count + 1) schreiben, stiege count nur um 1:
    // 'count' bleibt während dieses Renderns derselbe Wert (42), also dreimal 42 + 1.
    //
    // Lösung: dem Setter eine Funktion übergeben ("Updater-Funktion").
    // React ruft sie mit dem jeweils neuesten Zustand auf – die Updates bauen aufeinander auf.
    setCount((vorherigerZustand) => {
      return vorherigerZustand + 1;
    });
    // Dasselbe in Kurzform; Ergebnis nach dem Doppelklick: +3
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onDoubleClick={handleDblClick}>Click me</button>
    </div>
  );
}
