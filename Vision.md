 **Rolle:** Handle als erfahrener IT-Ausbilder und Frontend-Entwickler. Du agierst hier als meine VS Code Extension in einem bereits existierenden Repository.
 
 **Ziel:** Richte die Dateien für unser "Scrum-Schnupper-Repo" für Jugendliche (15-18 Jahre) im aktuellen Workspace (WebWork) ein. 
 
 **Das Konzept:** Das Root-Verzeichnis (`/index.html`) wird als GitHub Pages gehostet und dient als interaktives Scrum-Board (die Dokumentation für die Lernenden). Die eigentliche App, an der gearbeitet wird, liegt im Ordner `/app`. 
 
 **Wichtig für den Workflow:** Die Lernenden fassen Git nicht an! Sie ändern nur den Code. Die Git-Historie verwalte ich gemeinsam mit dir (Kimi) im Hintergrund. Wir nutzen Feature-Branches und `--no-ff` Merges, um am Ende einen visuell schönen Git-Graph für die Jugendlichen zu generieren.
 
 **Bitte erstelle oder überschreibe die folgenden Dateien in meinem aktuellen Workspace (WebWork) mit dem kompletten Code:**
 
 **1. `index.html` (Das Scrum-Portal im Root / gehostet via GitHub Pages)**
 Eine moderne Landingpage mit Tailwind CSS (via CDN).
 - **Titel:** "🚀 Dein erster Sprint".
 - **Einleitung:** Ein motivierender Text ("Willkommen im Dev-Team! Du liest hier deine User Stories und passt den Code in VS Code an. Die Versionierung übernimmt die KI im Hintergrund.").
 - **Die User Stories (als Kanban-Board in der 'To Do' Spalte):**
   - **Story 1: Bugfix.** "Der 'Hinzufügen'-Button reagiert nicht. Finde den Tippfehler in `app/app.js` (Tipp: Schau dir die Stelle mit dem Bug-Alarm an)."
   - **Story 2: Design-Update.** "Der Kunde möchte den Button in einem coolen Grün (#28a745). Passe den Wert in der `app/style.css` an."
   - **Story 3: Neues Feature.** "Die Liste wird zu lang. Aktiviere den 'Alle löschen'-Button. Entferne die Kommentarzeichen im HTML (`app/index.html`) und im JavaScript (`app/app.js`)."
 
 **2. `README.md` (Das Kimi-Logbuch für mich als Ausbilder)**
 - Eine kurze Erklärung des Repos.
 - Schreibe hier als Gedankenstütze für mich die Prompts auf, die ich dir (Kimi) nach jeder gelösten Story geben werde. Zum Beispiel: 
   *Prompt-Vorlage für Kimi:* "Kimi, die Lernenden haben Story 1 gelöst. Bitte erstelle den Branch `feature/bugfix`, commite die Änderungen mit einer passenden Message und mache einen Merge in den `main` Branch mit `--no-ff`. Lösche den Branch danach nicht."
 
 **3. `app/index.html` (Die Web-App)**
 Ein sauberes, funktionierendes HTML-Gerüst für eine To-Do-Liste. Input-Feld, "Hinzufügen"-Button und ein auskommentierter HTML-Block für den "Alle löschen"-Button (für Story 3).
 
 **4. `app/style.css` (Das Styling)**
 Modernes, simples CSS. Füge ganz oben Variablen ein:
 `:root { --button-color: #808080; }`
 Schreibe dazu einen klaren Kommentar: `/* 🎨 STORY 2: Ändere diesen Farbwert zu #28a745 */`.
 
 **5. `app/app.js` (Die Logik)**
 Die JavaScript-Logik. Extrem simpler Code mit ausführlichen deutschen Kommentaren, damit Jugendliche ihn verstehen.
 - **Für Story 1:** Baue absichtlich einen Fehler ein (z.B. schreibe `document.getElementByID` statt `getElementById`). Markiere die Stelle darüber großflächig: `// 🐛 BUG-ALARM (Story 1): Hier stimmt etwas nicht mit dem Namen!`.
 - **Für Story 3:** Erstelle ganz unten einen auskommentierten Code-Block für die Löschen-Funktion mit: `// 🚀 FEATURE (Story 3): Entferne die Kommentarzeichen hier und im HTML, um den Button zu aktivieren!`.
 
 **Aktion:** Setze dieses Setup jetzt in meinem Workspace um.