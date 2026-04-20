# 🚀 Scrum-Schnupper-Repo

Ein interaktives Repository für Jugendliche (15–18 Jahre), um die Grundlagen von Scrum, Frontendentwicklung und Versionskontrolle spielerisch zu erleben.

## 📁 Struktur

| Pfad | Zweck |
|------|-------|
| `index.html` | Das Scrum-Portal (Kanban-Board). Wird über GitHub Pages gehostet. |
| `app/index.html` | Die To-Do-App, an der die Lernenden arbeiten. |
| `app/style.css` | Das Styling der App. |
| `app/app.js` | Die JavaScript-Logik der App. |

## 🧑‍🏫 Workflow für den Ausbilder

1. Die Jugendlichen bearbeiten die drei Stories in VS Code.
2. Du (der Ausbilder) gibst Kimi nach jeder gelösten Story einen Prompt.
3. Kimi erstellt einen Feature-Branch, committet die Änderungen und merged sie sauber in `master` (mit `--no-ff`).
4. Am Ende entsteht ein schöner Git-Graph, den du mit den Jugendlichen besprechen kannst.

> **Hinweis:** Der Standard-Branch dieses Repos heißt **`master`**. Falls du bei dir `main` nutzt, passe die Prompts unten entsprechend an.

---

## 🤖 Prompt-Vorlagen für Kimi

> Kopiere einfach den jeweiligen Prompt, wenn die Lernenden eine Story abgeschlossen haben.

### Story 1 abgeschlossen (Bugfix)

```
Kimi, die Lernenden haben Story 1 gelöst.
Bitte erstelle den Branch feature/bugfix,
commite die Änderungen mit einer passenden Message
und mache einen Merge in den master Branch mit --no-ff.
Lösche den Branch danach nicht.
```

### Story 2 abgeschlossen (Design-Update)

```
Kimi, die Lernenden haben Story 2 gelöst.
Bitte erstelle den Branch feature/design-update,
commite die Änderungen mit einer passenden Message
und mache einen Merge in den master Branch mit --no-ff.
Lösche den Branch danach nicht.
```

### Story 3 abgeschlossen (Neues Feature)

```
Kimi, die Lernenden haben Story 3 gelöst.
Bitte erstelle den Branch feature/clear-all,
commite die Änderungen mit einer passenden Message
und mache einen Merge in den master Branch mit --no-ff.
Lösche den Branch danach nicht.
```

---

## 🌿 Tipp: Git-Graph anzeigen

Zeige den entstandenen Graph mit:

```bash
git log --oneline --graph --all --decorate
```

Oder installiere die VS Code Extension **"Git Graph"** für eine visuelle Darstellung.
