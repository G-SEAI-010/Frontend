import { useState } from 'react';

export default function StateUndObjekte() {
  // Der aktuelle Text im Eingabefeld
  const [newName, setNewName] = useState('');
  // Ein Array als State
  const [names, setNames] = useState(['Lennart', 'Kübra', 'Aleksandra']);

  function handleSubmit(e) {
    // Verhindert, dass der Browser beim Absenden des Formulars die Seite neu lädt
    e.preventDefault();

    // Arrays und Objekte im State nie direkt verändern (names.push(...) funktioniert nicht!):
    // React vergleicht nur, ob es ein NEUES Array ist. Darum kopieren wir mit dem Spread-Operator
    // und hängen den neuen Namen an.
    // const newNamesArr = [...names, newName];
    // setNames(newNamesArr);

    // Dasselbe mit Updater-Funktion: n ist der neueste Stand des Arrays
    setNames((n) => [...n, newName]);
    // Eingabefeld nach dem Hinzufügen leeren
    setNewName('');
  }

  return (
    <div>
      {/* Enter im Eingabefeld sendet das Formular ab und löst handleSubmit aus */}
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setNewName(e.target.value)} value={newName} />
      </form>
      <ul>
        {/* Aus jedem Namen im State-Array wird ein <li>; key hilft React, die Einträge auseinanderzuhalten */}
        {names.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
