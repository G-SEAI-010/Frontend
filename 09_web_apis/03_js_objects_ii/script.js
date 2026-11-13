/*==========================================================================
 * OOP GRUNDLAGEN: KLASSEN, VERERBUNG & KAPSELUNG
 *==========================================================================*/

// 1. DER BAUPLAN (Die Basisklasse)
class User {
  // Statische Eigenschaften gehören der Klasse selbst, nicht den Instanzen
  static userCount = 0;

  // Private Eigenschaften (Kapselung), von außen nicht direkt lesbar/änderbar
  #password;

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password; // Privat!

    // Bei jedem neuen Objekt erhöhen wir den Zähler der Klasse
    User.userCount++;
  }

  // Eine normale Methode
  login() {
    console.log(`${this.name} hat sich als normaler User eingeloggt.`);
  }

  // Getter: Kontrollierter Lesezugriff auf eine private Eigenschaft
  get passwordLength() {
    return this.#password.length;
  }

  // Statische Methode: Wird auf dem Bauplan aufgerufen, nicht auf dem Objekt
  static showTotalUsers() {
    console.log(`Es gibt aktuell ${User.userCount} registrierte User.`);
  }
}

// Eine konkrete Objektinstanz erstellen
const user1 = new User("Tom", "tom@web.de", "geheim123");
user1.login();
console.log(`Toms Passwort hat ${user1.passwordLength} Zeichen.`);
// console.log(user1.#password); // FEHLER! Private Felder sind von außen unsichtbar.

/*==========================================================================
 * VERERBUNG (INHERITANCE) & POLYMORPHISMUS
 *==========================================================================*/

// Eine neue Klasse, aufbauend auf einer anderen Klasse
class Admin extends User {
  constructor(name, email, password, adminId) {
    super(name, email, password); // Ruft den Konstruktor der Elternklasse (User) auf
    this.adminId = adminId;
    this.tasks = ["User löschen", "Server rebooten", "Backups erstellen"];
  }

  // Polymorphismus: Wir überschreiben die login() Methode der Elternklasse!
  login() {
    console.log(
      `🛑 WICHTIG: Admin ${this.name} hat sich mit ID ${this.adminId} eingeloggt.`,
    );
  }

  deleteUser(userObj) {
    console.log(`Admin ${this.name} löscht den User ${userObj.name}...`);
  }

  /*==========================================================================
   * DER "THIS" KONTEXT IN JAVASCRIPT (Das klassische Problem)
   *==========================================================================*/

  showTasks() {
    console.log(`Aufgaben für Admin ${this.name}:`);

    // ES5 (Fehlerhaftes Verhalten):
    // this.tasks.forEach(function (task) {
    //   // FEHLER: 'this' ist hier drinnen nicht mehr der Admin!
    //   // 'this.name' ist undefined, da die function ihren eigenen Kontext erstellt.
    //   console.log(`- ${this.name} muss erledigen: ${task}`);
    // });

    // Argument 1: Die Callback-Funktion
    // Argument 2: Das Objekt, das in der Funktion als 'this' dienen soll

    // this.tasks.forEach(function (task) {
    //   // Hier drinnen ist 'this' nun wieder unser Admin-Objekt!
    //   console.log(`- ${this.name} muss erledigen: ${task}`);
    // }, this); // <-- HIER übergeben wir den Kontext von außen nach innen

    // ES6 (Die moderne, korrekte Lösung):
    // Die Arrow Function (=>) erstellt keinen eigenen Kontext,
    // sondern "erbt" das 'this' von der showTasks Methode.
    this.tasks.forEach((task) => {
      console.log(`- ${this.name} erledigt: ${task}`);
    });
  }
}

// Den Admin instanziieren und testen
const admin1 = new Admin("Anna", "anna@web.de", "adminPass", 10);

// Zeigt Polymorphismus (andere Ausgabe als beim normalen User)
admin1.login();

// Zeigt die Interaktion zwischen zwei Objekten
admin1.deleteUser(user1);

// Zeigt, dass der Arrow-Function Kontext funktioniert
admin1.showTasks();

// Statische Methode testen (gehört zu User, zählt aber auch Admins mit, wegen super())
User.showTotalUsers();

/*==========================================================================
 * DIE OOP BEGRIFFS-ANALOGIEN
 *==========================================================================*/

/*
1. INTERFACE (Die Schnittstelle)
Ein Vertrag. Es beschreibt nur, WELCHE Methoden und Eigenschaften ein Objekt haben muss, 
enthält aber keine Logik.
-> Analogie: Die Tasten einer Fernbedienung. Man weiß, was sie tun (z. B. "Lauter"), 
   aber nicht, wie das Signal intern erzeugt und verarbeitet wird.

2. KLASSE (Class)
Ein Bauplan. Sie enthält die tatsächliche Logik und definiert, WIE die Aufgaben 
erledigt werden.
-> Analogie: Der Schaltplan im Inneren der Fernbedienung, der festlegt, wie 
   der Knopfdruck in ein Infrarot-Signal umgewandelt wird.

3. INSTANZ (Object / Instance)
Das fertige Produkt. Das konkrete Objekt, das aus dem Bauplan erstellt wurde, 
im Arbeitsspeicher lebt und mit dem wir arbeiten.
-> Analogie: Die physische Fernbedienung, die du gerade in der Hand hältst.
*/
