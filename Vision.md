> **Rolle:** Handle als erfahrener IT-Ausbilder und Frontend-Entwickler. 
> 
> **Ziel:** Erstelle die kompletten Dateien für ein "Scrum-Schnupper-Repo". Jugendliche (15-18 Jahre, kein Vorwissen) sollen anhand einer To-Do-App lernen, wie man User Stories liest und einfache Anpassungen (Bugfix, Design, Feature) im Code macht.
> 
> **Rahmenbedingungen:** > - Das Root-Verzeichnis (`/`) dient als GitHub Pages Portal (Das Scrum-Board/Backlog).
> - Der Ordner `/app` enthält die eigentliche To-Do-App, an der gearbeitet wird.
> - Der Code muss extrem simpel sein. Nutze ausführliche, motivierende Kommentare auf Deutsch (z.B. `// SCHRITT 1: Hier holen wir uns den Button...`).
> 
> Bitte generiere mir den vollständigen Code für folgende 5 Dateien:
> 
> **1. `README.md`**
> Eine kurze Anleitung für die Lehrlinge: Wie navigieren sie zum Code? (Tipp: Erwähne den GitHub Web-Editor durch Drücken der `.`-Taste) und wie testen sie ihre Änderungen.
> 
> **2. `index.html` (Das Scrum-Portal / Root)**
> Erstelle eine moderne Landingpage mit Tailwind CSS (via CDN). 
> - Titel: "🚀 Dein erster Sprint".
> - Ein motivierender Einleitungstext zur heutigen Mission.
> - Ein optisch ansprechendes Kanban-Board (Spalten: To Do, In Progress, Done) mit 3 User Story Karten in der "To Do"-Spalte:
>   - **Story 1: Bugfix.** "Der 'Hinzufügen'-Button ist kaputt. Finde den Tippfehler in der `app.js` (Zeile XY)."
>   - **Story 2: Design.** "Unser Kunde möchte mehr Farbe. Ändere die Button-Farbe in der `style.css` auf ein cooles Grün (#28a745)."
>   - **Story 3: Neues Feature.** "Die Liste wird zu lang. Baue den 'Alle löschen'-Button ein. Der HTML-Code ist schon da, aber in `app.js` fehlt die Logik (Kopiere den vorbereiteten Block)."
> 
> **3. `app/index.html` (Die Web-App)**
> Ein sauberes, einfaches HTML-Gerüst für eine To-Do-Liste. Beinhaltet ein Textfeld, einen "Hinzufügen"-Button und einen auskommentierten HTML-Block für den "Alle löschen"-Button (für Story 3).
> 
> **4. `app/style.css` (Das Styling)**
> Modernes, simples CSS ohne Frameworks. Füge ganz oben Variablen ein (z.B. `--button-color: #808080;`), damit die Lernenden bei Story 2 nur diese eine Zeile ändern müssen, um ein Erfolgserlebnis zu haben.
> 
> **5. `app/app.js` (Die Logik)**
> Die JavaScript-Logik der To-Do-App. 
> - **Für Story 1:** Baue absichtlich einen einfachen Fehler ein (z.B. `document.getElementByID` statt `ById` oder einen falschen ID-Namen). Kommentiere die Stelle darüber großflächig: `// 🐛 BUG-ALARM: Hier stimmt etwas nicht mit dem Namen!`.
> - **Für Story 3:** Erstelle ganz unten einen auskommentierten Code-Block für die "Löschen"-Funktion mit der Anweisung `// 🚀 FEATURE: Entferne die Kommentarzeichen, um den Löschen-Button zu aktivieren!`.
> 
> Gib mir die Codes in sauberen Code-Blöcken aus, damit ich sie direkt via Copy & Paste in mein GitHub-Repository übertragen kann.