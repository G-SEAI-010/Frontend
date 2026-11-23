// Destructuring direkt im Parameter: Statt props.names schreiben wir { names }
// und holen uns so nur die Eigenschaft heraus, die wir brauchen.
export default function StudentsList({ names }) {
  // const { names } = irgendwas;

  // Alternative: Das gemappte Array vorher in einer Variable speichern und dann {mappedNames} ins JSX setzen
  // const mappedNames = names.map((singleName) => {
  //   return <li>{singleName}</li>;
  // });
  return (
    <section>
      <ul>
        {/* .map() macht aus jedem Namen ein <li>-Element. Das Ergebnis ist ein Array von JSX-Elementen,
            und React zeigt Arrays automatisch nacheinander an. So entstehen Listen in React. */}
        {names.map((singleName) => {
          return (
            // key: Jedes Listenelement braucht einen eindeutigen Schlüssel, damit React beim Aktualisieren
            // erkennt, welches Element welches ist. Fehlt er, warnt React in der Konsole.
            // Hier reicht der Name, weil keiner doppelt vorkommt.
            <li key={singleName} onMouseEnter={() => console.log(singleName)}>
              {singleName}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
