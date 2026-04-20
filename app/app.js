/*
 * ============================================
 * 📝 To-Do App - JavaScript
 * ============================================
 * Diese Datei steuert die Logik unserer To-Do-Liste.
 * Sie findet HTML-Elemente, reagiert auf Klicks
 * und fügt neue Einträge zur Liste hinzu.
 * ============================================
 */

// Wir warten, bis die gesamte Seite geladen ist,
// bevor wir mit JavaScript arbeiten.
document.addEventListener('DOMContentLoaded', function() {

    // --- Schritt 1: HTML-Elemente finden ---
    // Wir suchen die wichtigen Teile unserer Seite
    // und speichern sie in Variablen, damit wir sie
    // später einfach wiederfinden.

    // Das Eingabefeld, in das der Nutzer Text tippt
    const todoInput = document.getElementById('todoInput');

    // Der Button, auf den der Nutzer klickt, um einen Eintrag hinzuzufügen
    const addBtn = document.getElementById('addBtn');

    // Die Liste (ul), in die die neuen Einträge kommen
    const todoList = document.getElementById('todoList');

    // --- Schritt 2: Funktion definieren ---
    // Diese Funktion fügt einen neuen Eintrag zur Liste hinzu.
    function addTodo() {
        // Den Text aus dem Eingabefeld holen
        const text = todoInput.value.trim();

        // Prüfen, ob das Eingabefeld leer ist
        if (text === '') {
            alert('Bitte gib zuerst einen Text ein!');
            return;
        }

        // Ein neues Listen-Element (li) erstellen
        const li = document.createElement('li');
        li.textContent = text;

        // Einen kleinen Lösch-Button für diesen Eintrag erstellen
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Löschen';
        deleteBtn.className = 'delete-item';

        // Wenn auf den Lösch-Button geklickt wird,
        // soll das Listenelement verschwinden
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        // Den Lösch-Button an das Listenelement hängen
        li.appendChild(deleteBtn);

        // Das fertige Listenelement an die Liste hängen
        todoList.appendChild(li);

        // Das Eingabefeld wieder leeren
        todoInput.value = '';

        // Den Cursor zurück ins Eingabefeld setzen
        todoInput.focus();
    }

    // --- Schritt 3: Auf Klicks reagieren ---

    // Wenn der Nutzer auf den "Hinzufügen"-Button klickt...
    addBtn.addEventListener('click', addTodo);

    // Wenn der Nutzer im Eingabefeld die Enter-Taste drückt...
    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodo();
        }
    });

    // ============================================
    // 🐛 BUG-ALARM (Story 1): Hier stimmt etwas nicht mit dem Namen!
    // Der nächste Befehl sucht nach dem Element mit der ID "todoList".
    // IDs in JavaScript sind case-sensitive (Groß-/Kleinschreibung zählt!).
    // ============================================
    const checkElement = document.getElementByID('todoList');
    console.log('Element gefunden:', checkElement);

});


// ============================================
// 🚀 FEATURE (Story 3): Entferne die Kommentarzeichen hier und im HTML,
//    um den "Alle löschen"-Button zu aktivieren!
// ============================================
// document.addEventListener('DOMContentLoaded', function() {
//     const clearAllBtn = document.getElementById('clearAllBtn');
//     const todoList = document.getElementById('todoList');
//
//     clearAllBtn.addEventListener('click', function() {
//         // Alle Kinder-Elemente der Liste entfernen
//         while (todoList.firstChild) {
//             todoList.removeChild(todoList.firstChild);
//         }
//     });
// });
