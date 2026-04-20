> **Rolle:** Handle als erfahrener IT-Ausbilder und Frontend-Entwickler. 
> 
> **Kontext:** Du agierst hier als meine VS Code Extension. Bitte generiere nicht nur Textausgaben, sondern **erstelle die beschriebene Ordnerstruktur und die Dateien direkt hier in meinem aktuellen Workspace**.
> 
> **Ziel:** Erstelle das komplette "Scrum-Schnupper-Repo" für Jugendliche (15-18 Jahre, kein Vorwissen). Sie sollen lernen, wie man User Stories umsetzt und wie ein professioneller Git-Workflow aussieht (Feature Branches und `--no-ff` Merges für einen schönen, nachvollziehbaren Git-Graph).
> 
> **Struktur:**
> - `/index.html` (Das Scrum-Portal/Backlog, als GitHub Page gedacht)
> - `/README.md` (Die Anleitung für den Git-Workflow)
> - `/app/index.html` (Die Web-App)
> - `/app/style.css` (Das Styling der App)
> - `/app/app.js` (Die Logik der App)
> 
> **Bitte implementiere folgende Dateien mit diesem exakten Inhalt:**
> 
> **1. `README.md` (Git & Workflow Guide)**
> Eine motivierende Anleitung für die Schnupperlehrlinge.
> - **Die eiserne Regel:** Für jede Aufgabe wird ein eigener Branch erstellt!
> - Erkläre den Workflow und zeige die genauen Terminal-Befehle, die sie abtippen müssen:
>   1. `git checkout -b feature/name-der-story` (Branch erstellen)
>   2. *Code ändern & lokal testen*
>   3. `git add .` und `git commit -m "Fix/Feature: was gemacht wurde"`
>   4. `git checkout main` (Zurück zum Hauptzweig)
>   5. `git merge --no-ff feature/name-der-story` (Der Merge)
> - **Erklärung zu `--no-ff`:** Erkläre kurz und kindgerecht, warum wir `--no-ff` (No Fast-Forward) nutzen: "Das erzwingt einen Merge-Commit. So entsteht im Git-Graph ein wunderschöner Bogen, der genau zeigt, wo unser Feature gestartet und wo es ins Hauptprojekt integriert wurde – perfekt, um Teamarbeit sichtbar zu machen!"
> 
> **2. `index.html` (Das Scrum-Portal / Root)**
> Erstelle eine moderne Landingpage mit Tailwind CSS (via CDN). 
> - Titel: "🚀 Dein erster Sprint".
> - Ein motivierender Einleitungstext zur heutigen Mission und dem Git-Workflow.
> - Ein Kanban-Board (Spalten: To Do, In Progress, Done) mit 3 User Story Karten unter "To Do":
>   - **Story 1: Bugfix.** "Der 'Hinzufügen'-Button ist kaputt. Finde den Tippfehler in `app/app.js` (Zeile XY). Branch-Name: `feature/bugfix-button`."
>   - **Story 2: Design.** "Unser Kunde möchte mehr Farbe. Ändere die Button-Farbe in der `app/style.css` auf ein cooles Grün (#28a745). Branch-Name: `feature/design-update`."
>   - **Story 3: Neues Feature.** "Baue den 'Alle löschen'-Button ein. Entkommentiere das HTML und die vorbereitete JS-Logik. Branch-Name: `feature/delete-all`."
> 
> **3. `app/index.html` (Die Web-App)**
> Ein sauberes, einfaches HTML-Gerüst für eine To-Do-Liste. Input-Feld, "Hinzufügen"-Button und ein auskommentierter HTML-Block für den "Alle löschen"-Button.
> 
> **4. `app/style.css` (Das Styling)**
> Modernes, simples CSS. Füge ganz oben Variablen ein, z.B.:
> `:root { --button-color: #808080; }`
> Schreibe dazu einen klaren Kommentar: `/* 🎨 STORY 2: Ändere diesen Farbwert zu #28a745 für das Kunden-Feature! */`.
> 
> **5. `app/app.js` (Die Logik)**
> Die JavaScript-Logik. Code muss extrem simpel sein. Nutze ausführliche, motivierende Kommentare auf Deutsch (z.B. `// SCHRITT 1: Hier holen wir uns den Button...`).
> - **Für Story 1:** Baue absichtlich einen Fehler ein (z.B. `document.getElementByID` statt `ById`). Markiere die Stelle darüber großflächig: `// 🐛 BUG-ALARM (Story 1): Hier stimmt etwas nicht mit dem Namen!`.
> - **Für Story 3:** Erstelle ganz unten einen auskommentierten Code-Block für die Löschen-Funktion mit: `// 🚀 FEATURE (Story 3): Entferne die Kommentarzeichen hier und im HTML, um den Button zu aktivieren!`.
> 
> **Aktion:** Generiere diese Dateien nun direkt in diesem Repo in dem du dich befindest.