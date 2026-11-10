/*==========================================================================
 * 1. ZUGRIFF AUF DAS DOCUMENT OBJECT
 *==========================================================================*/
console.group("1. ZUGRIFF AUF DAS DOCUMENT OBJECT");
// Das 'document' Objekt gibt uns Zugriff auf die gesamte HTML-Struktur

console.dir(document); // Das gesamte document-Objekt
console.dir(document.body); // Das body-Element
console.dir(document.firstChild); // Das erste Kind-Element des Dokuments (meist DOCTYPE)

console.groupEnd();

/*==========================================================================
 * 2. ELEMENTE AUSWÄHLEN (SELECTING)
 *==========================================================================*/
console.group("2. ELEMENTE AUSWÄHLEN (SELECTING)");

// 2.1 Mit querySelector (gibt das ERSTE übereinstimmende Element zurück)
console.dir(document.querySelector("body")); // Element-Selektor
console.dir(document.querySelector("#outer-container")); // ID-Selektor
console.dir(document.querySelector(".bodyClass")); // Klassen-Selektor

// 2.2 Mit getElementsByClassName (gibt eine HTMLCollection aller Treffer zurück)
// HINWEIS: Gibt eine LIVE-Collection zurück, die sich bei DOM-Änderungen automatisch aktualisiert
console.dir(document.getElementsByClassName("bodyClass"));

// 2.3 Mit getElementById (bevorzugt für IDs - schneller und spezifischer)
console.dir(document.getElementById("click-button"));

// 2.4 Mit querySelectorAll (gibt eine NodeList aller Treffer zurück)
// HINWEIS: Gibt eine STATISCHE NodeList zurück, die sich bei DOM-Änderungen NICHT aktualisiert
const allDivs = document.querySelectorAll("div");
console.log("Alle Divs:", allDivs);

console.groupEnd();

/*==========================================================================
 * 3. ELEMENTE IN VARIABLEN SPEICHERN
 *==========================================================================*/
console.group("3. ELEMENTE IN VARIABLEN SPEICHERN");
// Best Practice: Speichere Elemente, die du mehrfach nutzt, in Variablen

const clickButton = document.getElementById("click-button");
const outerContainer = document.getElementById("outer-container");

console.dir(clickButton);
console.dir(outerContainer);

console.groupEnd();

/*==========================================================================
 * 4. ZUGRIFF AUF ELEMENTINHALTE
 *==========================================================================*/
console.group("4. ZUGRIFF AUF ELEMENTINHALTE");

const h1 = document.getElementById("main-heading");

console.dir(h1);
console.dir(h1.innerText); // Nur der sichtbare Textinhalt (beachtet CSS-Styling)
console.dir(h1.textContent); // Der gesamte Textinhalt, unabhängig von der Sichtbarkeit
console.dir(h1.innerHTML); // HTML-Inhalt inklusive Tags (Sicherheitsrisiko bei Nutzereingaben!)

console.groupEnd();

/*==========================================================================
 * 5. ELEMENTE VERÄNDERN
 *==========================================================================*/
console.group("5. ELEMENTE VERÄNDERN");

// 5.1 Textinhalt ändern
h1.innerText = "DOM-Manipulation macht Spaß!";

// 5.2 Tailwind-Klassen verändern (überschreibt bestehende Klassen)
h1.className = "text-4xl font-bold text-blue-600 mb-4 text-center";

// 5.3 Alternativ (überschreibt nicht die bestehenden Klassen)
h1.classList.remove("text-blue-600");
h1.classList.add("text-green-500");
h1.classList.add("underline");
// h1.classList.toggle("underline"); // Würde eine Klasse hinzufügen (wenn sie fehlt) oder entfernen (wenn sie da ist)

// 5.4 Styles mit Vanilla CSS ändern
// Direkte Änderung von Inline-Styles über das .style Attribut
h1.style.color = "red";
h1.style.backgroundColor = "yellow";
h1.style.fontSize = "20px";

// 5.5 Einfaches Beispiel: Button-Klick
// Wenn der Button geklickt wird, ändere seinen Text und füge eine neue Klasse hinzu
clickButton.addEventListener("click", () => {
  // Button-Text ändern
  clickButton.innerText = "Geklickt!";

  // Eine einfache Farb-Klasse hinzufügen
  clickButton.classList.add("bg-green-500");

  // Den Text der Überschrift ebenfalls ändern
  h1.innerText = "Button wurde geklickt!";
});

// 5.6 Ein echter Schalter (Toggle)
// Perfekt für Dinge wie Dark-Mode, Menüs auf/zuklappen, etc.
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", () => {
  // toggle() schaltet die Klasse bei jedem Klick an und wieder aus
  toggleButton.classList.toggle("bg-gray-800");
  toggleButton.classList.toggle("text-white");
});

// 5.7 Attribute setzen und abrufen
// clickButton.setAttribute("disabled", "true"); // Deaktiviert den Button
console.dir(clickButton.getAttribute("id")); // Gibt "click-button" aus

// 5.8 Elemente aus dem DOM entfernen
// h1.remove(); // Auskommentiert, damit der restliche Code nicht abstürzt, da h1 fehlt

console.groupEnd();

/*==========================================================================
 * 6. ELEMENTE ERSTELLEN UND HINZUFÜGEN
 *==========================================================================*/
console.group("6. ELEMENTE ERSTELLEN UND HINZUFÜGEN");

// Ein neues Paragraph-Element (Absatz) erstellen
const newParagraph = document.createElement("p");

// Inhalt und Attribute hinzufügen
newParagraph.innerText = "Dieser Absatz wurde dynamisch erstellt!";
newParagraph.className = "text-purple-500 mt-4 text-center";
newParagraph.id = "dynamic-paragraph";

// Dem DOM hinzufügen
outerContainer.appendChild(newParagraph);

console.groupEnd();

/*==========================================================================
 * 7. EVENT HANDLING (EREIGNISBEHANDLUNG)
 *==========================================================================*/
console.group("7. EVENT HANDLING (EREIGNISBEHANDLUNG)");
// Es gibt mehrere Wege, Event Listener hinzuzufügen:

// Methode 1: addEventListener (bevorzugt - erlaubt mehrere Listener am selben Element)
clickButton.addEventListener("mouseover", () => {
  clickButton.classList.add("scale-110");
});

clickButton.addEventListener("mouseout", () => {
  clickButton.classList.remove("scale-110");
});

// Methode 2: onclick Eigenschaft (erlaubt nur EINEN Listener, überschreibt vorherige)
clickButton.onclick = () => alert("Button geklickt!");

console.groupEnd();

/*==========================================================================
 * 8. WICHTIGE HINWEISE & BEST PRACTICES
 *==========================================================================*/
// 1. Nutze das 'defer'-Attribut im <script>-Tag, um sicherzustellen, dass das DOM geladen ist, bevor das Skript läuft
// 2. innerText gibt nur sichtbaren Text zurück und beachtet CSS-Styling (z.B. display: none)
// 3. textContent gibt den gesamten Text zurück, inklusive versteckter Elemente, und behält Leerzeichen bei
// 4. innerHTML kann ein Sicherheitsrisiko (XSS) darstellen, wenn es mit unbereinigten Nutzereingaben verwendet wird
// 5. Aus Performance-Gründen ist getElementById schneller als querySelector für IDs
// 6. HTMLCollection (von getElementsBy*) ist LIVE, NodeList (von querySelectorAll) ist STATISCH
// 7. Speichere häufig genutzte DOM-Elemente in Variablen, um die Performance zu verbessern
