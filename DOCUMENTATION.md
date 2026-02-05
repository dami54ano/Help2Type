#  Help2Type Website - Einfache Anleitung 

## Willkommen! 

** Wichtig**
DOCUMENTATION.md NICHT ONLINE PUSHEN

Diese Anleitung erklärt dir **Schritt für Schritt**, wie du die help2type Website bearbeiten kannst.

### Was ist das hier?
- Eine **Website** mit 3 Sprachen (Deutsch, Englisch, Französisch)
- Alle Dateien liegen auf deinem Computer **UND** im Internet (bei GitHub)
- Wenn du etwas änderst und "hochlädst", wird es auf der echten Website sichtbar.   
  Nur Möglich auf Dami54ano Acc. Später bei änderungen muss du ein eigener Github acc haben und dieses Github Kopieren und auf Render dein Github link eingeben.

---

##  Wichtige Zugänge & Passwörter

### 1. GitHub (Wo die Website-Dateien gespeichert sind)
- **Was ist das?** Ein Online-Speicher für deine Website-Dateien (wie Dropbox, aber für Programmierer)
- **Website**: https://github.com/dami54ano/Help2Type
- **Wofür brauche ich das?** Um Änderungen hochzuladen

### 2. Deine Live-Website
- **Website-Adresse**: https://www.help2type.ch
- **Hosting-Anbieter**: [Swizzonic]
- **Login-Seite**: Render https://dashboard.render.com/static/srv-d5p40lur433s73croo6g/deploys/dep-d5svfp7fte5s73cm052g
- **Benutzername**: Help2Type4u@gmail.com
- **Passwort**: MEx1co:)hoh0

### 3. Online-Shop
- **Shop-Adresse**: https://www.help2type-shop.ch


---

## � Wo finde ich was? (Datei-Struktur einfach erklärt)

Stell dir die Website wie einen Ordner auf deinem Computer vor:

```
 Help2Type (Haupt-Ordner)
│
├──  DOCUMENTATION.md        ← Diese Anleitung hier
├──  favicon.png             ← Das kleine Logo im Browser-Tab
│
├──  de/                     ← Alle DEUTSCHEN Seiten
│   ├── index.html            ← Startseite auf Deutsch
│   ├── produkte.html         ← Produkte-Seite
│   ├── blog.html             ← Blog
│   ├── impressum.html        ← Impressum
│   └── ...                   ← Weitere Seiten
│
├──  en/                     ← Alle ENGLISCHEN Seiten
│   └── (gleiche Seiten wie de/, nur auf Englisch)
│
├──  fr/                     ← Alle FRANZÖSISCHEN Seiten
│   └── (gleiche Seiten wie de/, nur auf Französisch)
│
├──  css/                    ← Design-Dateien (Farben, Schriften)
│   ├── style.css             ← Haupt-Design
│   └── ...
│
├──  js/                     ← Funktionen (z.B. Bildwechsel)
│   ├── script.js
│   └── ...
│
└──  images/                 ← Alle Bilder der Website
    ├── logo.svg
    ├── bike.jpg
    └── ...
```

###  Was bedeutet das?
- **`.html` Dateien** = Das sind deine Webseiten (Text, Bilder, Links)
- **`.css` Dateien** = Das Design (Farben, Schriftarten, Abstände)
- **`.js` Dateien** = Funktionen (z.B. automatischer Bildwechsel)
- **`.jpg/.png` Dateien** = Bilder

---

##  Farben der Website

Die Website verwendet diese Hauptfarben:

| Farbe | Wo verwendet? | Farbcode |
|-------|---------------|----------|
|  **Dunkelblau** | Hauptfarbe (Navigation, Buttons) | `#084259` |
|  **Hellblau** | Akzente, Hover-Effekte | `#165c78` |
|  **Orange/Coral** | Besondere Buttons | `#ed7560` |
|  **Dunkelgrau** | Texte | `#333` |
|  **Weiß** | Hintergründe | `#ffffff` |

> Wenn du Farben ändern möchtest, findest du das in der Datei `css/style.css`

---

##  Was kann die Website?

### Aktuelle Funktionen:
-  **Mehrsprachig**: Website gibt es auf Deutsch, Englisch und Französisch
-  **Funktioniert auf allen Geräten**: Handy, Tablet, Computer
-  **Automatischer Bildwechsel**: Auf der Startseite wechseln Bilder automatisch (bike → zelte → reise)
-  **3 Punkte zeigen welches Bild aktiv ist**: Klickbar zum direkten Wechseln
-  **Kleines Logo im Browser-Tab**: Das Favicon (kleines help2type Logo)
-  **Download-Buttons**: Impressum kann als Word-Datei heruntergeladen werden
-  **AGB als PDF**: Direkt öffnen und lesen
-  **Sprachumschaltung**: Unten auf jeder Seite kann man die Sprache wechseln
-  **Cookie-Hinweis**: Banner für Cookies (Datenschutz)

---

##  Wie bearbeite ich die Website? (Schritt für Schritt)

###  SCHRITT 1: Programm öffnen (Visual Studio Code)

1. **Öffne VS Code** 
2. **Öffne den Ordner**:
   - Klicke auf "Open Folder" (Ordner öffnen)
   - Wähle: `C:\Users\...\...\Help2Type`
3. **Jetzt siehst du links alle Dateien**

###  SCHRITT 2: Eine Seite bearbeiten

**Beispiel: Text auf der deutschen Startseite ändern**

1. **Datei öffnen**:
   - Klicke links auf den Ordner `de`
   - Klicke auf `index.html`
   - Die Datei öffnet sich rechts

2. **Text suchen**:
   - Drücke `Strg + F` (Suchen)
   - Tippe den Text ein, den du ändern möchtest
   - Zum Beispiel: "Nimm die help2type Tastatur mit"

3. **Text ändern**:
   - Klicke auf den gefundenen Text
   - Ändere ihn wie du möchtest
   - Zum Beispiel: "Nimm die beste Tastatur mit"

4. **Speichern**:
   - Drücke `Strg + S` (Speichern)
   - Oder klicke oben auf "File" → "Save"

###  SCHRITT 3: Änderungen hochladen (auf die echte Website)

> ** Wichtig**: Deine Änderungen sind jetzt nur auf deinem Computer! Um sie auf der echten Website zu haben, musst du sie "hochladen" (= pushen zu GitHub)

**So geht's:**

1. **Terminal öffnen**:
   - Drücke `Strg + Ö` (oder oben im Menü: Terminal → New Terminal)
   - Unten öffnet sich ein schwarzes Fenster

2. **Diese 3 Befehle eingeben** (einer nach dem anderen):

```bash
git add .
```
 Bedeutet: "Alle geänderten Dateien vorbereiten"

Dann Enter drücken, und den nächsten Befehl eingeben:

```bash
git commit -m "Text auf Startseite geändert"
```
 Bedeutet: "Änderungen speichern mit Notiz 'Text auf Startseite geändert'"

Dann Enter drücken, und den letzten Befehl eingeben:

```bash
git push
```
 Bedeutet: "Hochladen zu GitHub und die Website wird aktualisiert"

3. **Fertig!** 
   - Auf Render https://dashboard.render.com/static/srv-d5p40lur433s73croo6g/deploys/dep-d5svfp7fte5s73cm052g Manual Deploy machen um es hochzuladen.
   - Nach 1 Minute ist die Änderung auf https://www.help2type.ch live
   - Eventuell musst du die Seite mit `Strg + F5` neu laden

---

##  Die 3 wichtigsten Regeln

###  Regel 1: IMMER in allen 3 Sprachen ändern!
- Wenn du etwas auf der deutschen Seite änderst...
- ...dann auch auf der englischen Seite!
- ...und auch auf der französischen Seite!
- Sonst haben Besucher unterschiedliche Informationen

###  Regel 2: Immer erst testen, dann hochladen
- Öffne die `.html` Datei 
- Schau ob alles richtig aussieht
- Erst dann mit `git push` hochladen

###  Regel 3: Gute Notizen bei git commit
- Schreibe immer was du geändert hast
- Schlecht: `git commit -m "Änderung"`
- Gut: `git commit -m "Telefonnummer im Impressum aktualisiert"`
- So kannst du später nachvollziehen was du gemacht hast

---

##  Hilfe! Etwas funktioniert nicht!

### Problem: Ich sehe meine Änderungen nicht auf der Website

**Lösung 1 - Browser-Cache leeren**:
1. Öffne die Website
2. Drücke `Strg + F5` (Hard Refresh)
3. Das lädt die Seite komplett neu

**Lösung 2 - Warten**:
- Es kann 1-5 Minuten dauern bis die Änderungen online sind
- Geduld haben 

**Lösung 3 - Überprüfen ob hochgeladen**:
1. Gehe zu https://github.com/dami54ano/Help2Type
2. Siehst du deine Änderung dort? Dann sollte sie bald online sein
3. Wenn nicht: Nochmal `git push` ausführen

---

##  Nützliche Tastenkombinationen

| Tastenkombination | Was macht das? |
|-------------------|----------------|
| `Strg + S` | Datei speichern |
| `Strg + F` | Suchen in Datei |
| `Strg + H` | Suchen & Ersetzen |
| `Strg + Z` | Rückgängig machen |
| `Strg + Ö` | Terminal öffnen |
| `Strg + B` | Seitenleiste ein/ausblenden |
| `Strg + F5` | Seite im Browser neu laden (ohne Cache) |

---

##  Kontakt bei Fragen

**Website-Administrator**: Marcel Roesch
- **E-Mail**: info@help2type.com
- **Telefon**: +41 31 390 88 88
- **Adresse**: Frutigenstrasse 28, 3600 Thun, Schweiz

**Bei technischen Problemen**: Damiano Scarcia
- Wenn etwas nicht funktioniert
- Wenn du nicht weiter weißt
- Wenn die Website "kaputt" ist

---

** Diese Anleitung wurde erstellt am**: 28. Januar 2026
** Letzte Aktualisierung**: 28. Januar 2026
