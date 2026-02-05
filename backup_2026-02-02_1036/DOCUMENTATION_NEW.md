# Help2Type - Projektdokumentation

**WICHTIG:** Diese Datei nicht ins Repository hochladen (enthält Zugangsdaten).

---

## 1. Systemübersicht



### 1.2 Technologie-Stack

| Komponente | Technologie | Version/Details |
|------------|-------------|-----------------|
| Frontend | HTML5, CSS3, JavaScript | Vanilla JS (keine Frameworks) |
| Styling | CSS Custom Properties | style.css |
| Versionskontrolle | Git / GitHub | Repository: dami54ano/Help2Type |
| Hosting | Render | Statisches Hosting |
| Domain | help2type.ch | HTTPS aktiviert |

### 1.3 Mehrsprachigkeit

Die Website unterstützt drei Sprachen:
- Deutsch (de/)
- Englisch (en/)
- Französisch (fr/)

Jede Sprachversion enthält identische Seiten mit übersetzten Inhalten.

---

## 2. Infrastruktur & Deployment

### 2.1 GitHub Repository

**Repository:** https://github.com/dami54ano/Help2Type
**Branch:** main
**Zugangsdaten:** Account dami54ano (Für Zukunft eigener Github acc erstellen)

### 2.2 Hosting (Render)

**Plattform:** Render Static Site
**Dashboard:** https://dashboard.render.com/static/srv-d5p40lur433s73croo6g
**Zugangsdaten:**
- E-Mail: Help2Type4u@gmail.com
- Passwort: MEx1co:)hoh0

**Live-URL:** https://www.help2type.ch

### 2.3 Deployment-Prozess

1. Lokale Änderungen durchführen in Vs Code
2. Änderungen committen und pushen:
   ```bash
   git add .
   git commit -m "Beschreibung der Änderung"
   git push
   ```
3. Render Dashboard öffnen
4. "Manual Deploy" Button klicken
5. Deployment dauert ca. 1-2 Minuten
6. Website mit Strg+F5 neu laden

**Hinweis:** Render deployed NICHT automatisch. Jeder Push erfordert einen manuellen Deploy über das Render Dashboard.

---

## 3. Installations- & Setup-Anleitung

### 3.1 Voraussetzungen

- Visual Studio Code (oder anderer Code-Editor)
- GitHub-Account (für zukünftige Entwickler: Repository forken)
- Render-Account Zugang (siehe 2.2)

### 3.2 Lokales Setup

1. Repository klonen:
   ```bash
   git clone https://github.com/dami54ano/Help2Type.git
   cd Help2Type
   ```

2. Visual Studio Code öffnen:
   ```bash
   code .
   ```

3. HTML-Dateien direkt im Browser öffnen zum Testen
   - Rechtsklick auf .html Datei
   - "Open with Live Server" (bei installierter Live Server Extension)
   - Oder: Datei direkt im Browser öffnen

### 3.3 Dateistruktur

```
Help2Type/
├── de/                          # Deutsche Seiten
│   ├── index.html               # Startseite
│   ├── produkte.html            # Produkte
│   ├── blog.html                # Blog
│   ├── blog-page2.html          # Blog Seite 2
│   ├── tutorials.html           # Tutorials
│   ├── unternehmen.html         # Über uns
│   ├── datenschutz.html         # Datenschutzerklärung
│   ├── impressum.html           # Impressum
│   └── agb.html                 # AGB
├── en/                          # Englische Seiten (gleiche Struktur)
├── fr/                          # Französische Seiten (gleiche Struktur)
├── css/
│   ├── style.css                # Haupt-Stylesheet
│   ├── shop.css                 # Shop-spezifische Styles
│   └── site.css                 # Zusätzliche Styles
├── js/
│   ├── script.js                # Hauptfunktionen
│   ├── shop.js                  # Shop-Funktionen
│   └── site.js                  # Zusatzfunktionen
├── images/                      # Alle Bilder
│   ├── bike.jpg
│   ├── zelte.jpg
│   ├── reise.jpg
│   └── ...
├── favicon.png                  # Browser-Tab Icon
├── AGB_help2type_DE2025DS.pdf   # AGB Deutsch
├── AGB_help2type_EN2025DS.pdf   # AGB Englisch
├── AGB_help2type_FR2025DS.pdf   # AGB Französisch
├── h2t_Impressum_de2026.docx    # Impressum Deutsch
├── h2t_Impressum_en2026.docx    # Impressum Englisch
├── h2t_Impressum_fr2026.docx    # Impressum Französisch
└── DOCUMENTATION_NEW.md             # Diese Datei
```

---

## 4. Konfigurationen

### 4.1 Design & Farben

Die Website verwendet CSS Custom Properties für konsistente Farben:

```css
:root {
    --primary-color: #084259;      /* Dunkelblau - Hauptfarbe */
    --secondary-color: #165c78;    /* Hellblau - Akzente */
    --accent-color: #ed7560;       /* Orange/Coral - Highlights */
    --text-color: #333;            /* Dunkelgrau - Text */
    --background-color: #ffffff;   /* Weiß - Hintergründe */
}
```

Definiert in: `css/style.css`

### 4.2 Impressum-Anzeige

Das Impressum wird als DOCX-Datei über Microsoft Office Online Viewer angezeigt:

```html
<iframe src="https://view.officeapps.live.com/op/view.aspx?src=https://www.help2type.ch/h2t_Impressum_de2026.docx"></iframe>
```

**Download-Button:** Zusätzlich vorhanden für direkten DOCX-Download

### 4.3 AGB-Verlinkung

AGB sind als PDF-Dateien direkt verlinkt:

```html
<a href="../AGB_help2type_DE2025DS.pdf" target="_blank">AGB</a>
```

---

## 5. Sicherheitsaspekte

### 5.1 HTTPS & Verschlüsselung

- HTTPS ist über Render automatisch aktiviert
- SSL-Zertifikate werden von Render verwaltet
- Alle Verbindungen sind verschlüsselt

### 5.2 Datenschutz

- DSGVO-konforme Datenschutzerklärung vorhanden (datenschutz.html)
- Keine Speicherung personenbezogener Daten auf der Website
- Keine Cookies ausser technisch notwendige

### 5.3 Statische Website

- Keine Backend-Logik = kein Angriffspunkt für Serverseite-Exploits
- Keine Datenbank = keine SQL-Injection-Risiken
- Keine Benutzereingaben = minimales XSS-Risiko

### 5.4 Zugangsdaten

**WICHTIG:** DOCUMENTATION.md enthält Zugangsdaten und darf NICHT ins Repository gepusht werden.

Überprüfen vor jedem Commit:
```bash
git status
```

Falls versehentlich hinzugefügt:
```bash
git reset HEAD DOCUMENTATION.md
```

---

## 6. Wartung & Betrieb

### 6.1 Texte ändern

1. Entsprechende HTML-Datei in VS Code öffnen
2. Text suchen
3. Änderung durchführen
4. Datei speichern (Strg+S)
5. In ALLEN drei Sprachversionen wiederholen

**Beispiel:**
- `de/index.html` ändern
- `en/index.html` ändern
- `fr/index.html` ändern

### 6.2 Bilder austauschen

1. Neues Bild in den `images/` Ordner kopieren
2. Dateinamen notieren (z.B. `neues_bild.jpg`)
3. HTML-Datei öffnen
4. Bildpfad ändern:
   ```html
   <!-- Alt -->
   <img src="../images/altes_bild.jpg">
   <!-- Neu -->
   <img src="../images/neues_bild.jpg">
   ```
5. Speichern und testen

### 6.3 Neue Seite hinzufügen

1. Bestehende HTML-Datei als Vorlage kopieren
2. Datei umbenennen (z.B. `neue_seite.html`)
3. Inhalt anpassen
4. Navigation in ALLEN Dateien aktualisieren
5. In allen drei Sprachen wiederholen

### 6.4 CSS-Anpassungen

**Farbe ändern:**
```css
/* In css/style.css */
:root {
    --primary-color: #084259; /* Diesen Wert ändern */
}
```

**Schriftgröße ändern:**
```css
body {
    font-size: 16px; /* Wert anpassen */
}
```

### 6.5 JavaScript-Anpassungen

**Bildwechsel-Intervall ändern:**

In `de/index.html` (und en, fr):
```javascript
setInterval(rotateImage, 4000); // Wert in Millisekunden (4000 = 4 Sekunden)
```

### 6.6 Rechtliche Dokumente aktualisieren

**AGB aktualisieren:**
1. Neue PDF-Datei erstellen
2. Datei umbenennen (z.B. `AGB_help2type_DE2026DS.pdf`)
3. In Root-Verzeichnis hochladen
4. Links in allen HTML-Dateien aktualisieren

**Impressum aktualisieren:**
1. Neue DOCX-Datei erstellen
2. Datei umbenennen (z.B. `h2t_Impressum_de2027.docx`)
3. In Root-Verzeichnis hochladen
4. iframe-Links in impressum.html aktualisieren
5. Download-Button-Links aktualisieren

### 6.7 Häufige Probleme

**Problem: Änderungen werden nicht angezeigt**

Lösung:
1. Browser-Cache leeren (Strg+F5)
2. Prüfen ob Render-Deployment erfolgreich war
3. Prüfen ob git push erfolgreich war

**Problem: Bilder werden nicht angezeigt**

Lösung:
1. Bildpfad prüfen (relativ: `../images/bild.jpg`)
2. Dateinamen auf Groß-/Kleinschreibung prüfen
3. Bildformat prüfen (.jpg, .png, .svg)

**Problem: Layout ist kaputt**

Lösung:
1. CSS-Datei auf Syntaxfehler prüfen
2. Browser-Konsole öffnen (F12) für Fehlermeldungen
3. Letzten funktionierenden Commit wiederherstellen:
   ```bash
   git log
   git checkout <commit-hash>
   ```

### 6.8 Deployment-Checkliste

Vor jedem Deployment:

- [ ] Änderungen in allen drei Sprachen durchgeführt
- [ ] Lokale Dateien im Browser getestet
- [ ] Links auf Funktionalität geprüft
- [ ] Bilder laden korrekt
- [ ] Responsive Design auf verschiedenen Bildschirmgrößen getestet
- [ ] DOCUMENTATION.md NICHT im git add enthalten
- [ ] Commit-Message ist aussagekräftig
- [ ] Git push erfolgreich
- [ ] Manual Deploy auf Render durchgeführt
- [ ] Live-Website nach Deploy getestet

---

## 7. Kontakte & Ressourcen

### 7.1 Wichtige Links

- Live-Website: https://www.help2type.ch
- Shop: https://www.help2type-shop.ch
- GitHub Repository: https://github.com/dami54ano/Help2Type
- Render Dashboard: https://dashboard.render.com

### 7.2 Support-Kontakte

Bei Fragen zum Hosting:
- Render Support: https://render.com/docs

Bei technischen Problemen:
- GitHub Issues: Im Repository Issues erstellen

---

**Letzte Aktualisierung:** Januar 2025
**Version:** 2.0
