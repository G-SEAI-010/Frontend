// Jede Komponente bekommt automatisch ein Objekt "props" als ersten Parameter.
// Darin stecken alle Attribute, die beim Aufruf übergeben wurden, z.B. <Greeting word='Hallo' /> → props.word
export default function Greeting(props) {
  // Wird pro <Greeting /> einmal ausgeführt – in der Konsole sieht man so jedes props-Objekt
  console.log(props);
  const batch = 'g-seai-10';

  // Den Wert aus props in eine eigene Variable holen, damit das JSX lesbarer bleibt
  const word = props.word;

  return (
    <section>
      {/* Geschweifte Klammern {} öffnen ein "Fenster" zu JavaScript: Hier werden Variablen eingesetzt */}
      <p>
        {word}, {batch}!
      </p>

      {/* Ohne {} wird der Text genau so angezeigt, wie er dasteht */}
      <p>Hohoho</p>
      {/* In {} darf jeder JavaScript-Ausdruck stehen – auch eine Rechnung. Angezeigt wird 70. */}
      <p>{13 + 57}</p>
    </section>
  );
}
