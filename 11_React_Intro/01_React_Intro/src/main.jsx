// main.jsx ist der Einstiegspunkt: Hier wird React mit der HTML-Seite verbunden.
import { StrictMode } from 'react'
// react-dom ist der Teil von React, der unsere Komponenten in den Browser (das DOM) bringt
import { createRoot } from 'react-dom/client'
// CSS kann man in Vite direkt importieren – es gilt dann für die ganze Seite
import './index.css'
// Unsere Haupt-Komponente, in der alle anderen Komponenten stecken
import App from './App.jsx'

// 1. createRoot() sucht das <div id="root"> aus der index.html und macht es zum React-Container.
// 2. .render() zeichnet die <App /> Komponente in diesen Container.
// Ab hier übernimmt React die Kontrolle über alles innerhalb von #root.
createRoot(document.getElementById('root')).render(
  // StrictMode zeigt nichts an, sondern hilft beim Entwickeln: Es warnt vor typischen Fehlern.
  // Nebenwirkung: Komponenten werden im Dev-Modus doppelt ausgeführt (deshalb erscheinen console.logs zweimal).
  <StrictMode>
    <App />
  </StrictMode>,
)
