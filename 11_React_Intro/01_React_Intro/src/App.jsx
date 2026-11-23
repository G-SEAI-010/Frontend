// Eigene Komponenten importieren wir wie normale JavaScript-Module
import Greeting from './components/Greeting.jsx';
import Header from './components/Header.jsx';
import StudentsList from './components/StudentsList.jsx';

// Eine Komponente ist einfach eine Funktion, die JSX zurückgibt.
// Wichtig: Der Name muss mit einem Großbuchstaben beginnen, sonst hält React sie für ein HTML-Tag.
function App() {
  // Vor dem return können wir ganz normales JavaScript schreiben
  const date = new Date();
  const year = date.getFullYear();

  console.log(year);

  const student = 'Manuel';

  const names = ['Aleksandra', 'Kübra', 'Lennart', 'Manuel', 'Matis', 'Alexander'];

  // JSX - JavaScript Extended
  // Sieht aus wie HTML, ist aber JavaScript. Vite übersetzt es in Funktionsaufrufe (React.createElement).
  // Regel: Eine Komponente darf nur ein Eltern-Element zurückgeben – hier das <div>.
  return (
    <div>
      {/* Eigene Komponenten benutzen wir wie selbstgebaute HTML-Tags */}
      <Header />

      <h1>Hallo, React - Dies ist die App</h1>

      <main>
        {/* Props: Wir geben der Komponente Daten mit, ähnlich wie Attribute in HTML.
            Dieselbe Komponente kann so mit unterschiedlichen Werten wiederverwendet werden. */}
        <Greeting word='Salut' />
        <Greeting word='Hallo' />
        <Greeting word='Hi' />

        {/* Props können jeden JavaScript-Wert enthalten – mit {} übergeben wir hier ein Array */}
        <StudentsList names={names} />

        {/* Bedingtes Rendern mit &&: Ist die Bedingung true, wird das <p> angezeigt, sonst nichts */}
        {year === 2026 && <p>Es ist 2026</p>}

        {/* Bedingtes Rendern mit dem Ternary-Operator: Bedingung ? wenn-true : wenn-false */}
        {year === 2026 ? <p>Es ist 2026</p> : <span>🏃‍➡️</span>}

        {/* Events werden in JSX in camelCase geschrieben (onClick statt onclick).
            Wir übergeben eine Funktion – sie wird erst beim Klick ausgeführt, nicht beim Rendern. */}
        <button onClick={() => console.log('geklickt!')}>Click Me</button>
      </main>

      {/* Mit {} können wir JavaScript-Werte direkt im JSX ausgeben */}
      <footer>&copy; {year}</footer>
    </div>
  );
}

// Default-Export, damit main.jsx die Komponente importieren kann
export default App;
