// Eine CSS-Datei pro Komponente hält Styles und Komponente zusammen.
// Achtung: Die Styles gelten trotzdem global für die ganze Seite.
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        {/* Zwei Unterschiede zu HTML:
            1. style bekommt ein JavaScript-Objekt statt eines Strings. Die äußeren {} öffnen JavaScript,
               die inneren {} sind das Objekt. CSS-Eigenschaften schreibt man in camelCase (listStyle statt list-style).
            2. className statt class, weil "class" in JavaScript ein reserviertes Wort ist. */}
        <ul
          style={{
            listStyle: 'none',
            backgroundColor: 'blue',
          }}
          className='nav-list'
        >
          <li>
            <a href='#'> Home </a>
          </li>
          <li>
            <a href='#'> About </a>
          </li>
          <li>
            <a href='#'> Contact </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
