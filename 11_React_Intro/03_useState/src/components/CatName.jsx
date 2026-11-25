import { useState } from 'react';

// color und setColor kommen als Props aus App – der State selbst "wohnt" in App
export default function CatName({ color, setColor }) {
  // Eigener, lokaler State dieser Komponente mit Startwert 'Minka'
  const [catName, setCatName] = useState('Minka');

  return (
    <div>
      {/* "Controlled Input": value kommt aus dem State, jede Eingabe aktualisiert den State.
          So ist der State immer die einzige Quelle der Wahrheit für den angezeigten Text. */}
      <input
        type='text'
        name='catName'
        id='catName'
        value={catName}
        onChange={(e) => {
          console.log(e.target.value);
          setCatName(e.target.value);
          // Ändert den State in App (über die Prop) – Farbnamen wie "red" färben den Text
          setColor(e.target.value);
        }}
      />
      <p
        style={{
          color: color,
          textShadow: '1px 1px black',
        }}
      >
        Katzenname: {catName}
      </p>
    </div>
  );
}
