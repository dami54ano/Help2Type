# ￿ ICTSheldon – Projektdokumentation

Diese Dokumentation beschreibt Aufbau, Entwicklung, Deployment und
Wartung des Projekts **ICTSheldon** , ein intelligenter Assistent für die
IPA-Vorbereitung.

## ￿ 1. Systemübersicht

```
Architekturdiagramm
Frontend (HTML/CSS/JS) ￿ ￿ Backend (Node.js)
Technologie-Stack
Bereich Technologie
Frontend HTML, CSS, JavaScript (GSAP Animationen)
Hosting Render
Authentifizierung Benutzerprüfung via JS-Datei (users.js)
```
## ￿ 2. Infrastruktur & Deployment

```
Hosting-Umgebung
```
- **Frontend** über Render
- Kein dedizierter Server oder Container erforderlich.
- CDN-optimiert, HTTPS automatisch aktiviert.
**CI/CD & Deployment-Prozess**
1.Änderungen in Git pushen.
2.Automatisches Deployment durch Render.
3.Bei Problemen: Rollback auf vorherige Version möglich.

## ￿ 3. Installations- & Setup-Anleitung

```
Lokales Setup
Voraussetzungen:
```
- Node.js (ab v18)
- Git


**Installation:
Wichtig** : Berechtigung Anfragen
gitclone https://github.com/miguellllllllllllllllll/DaMa.git
cdDaMa

**Lokaler Start**

- Doppelclick auf dasindex.htmlFile

## 4. Konfigurationen

**Security & Caching**

- CORS: nur eigene Domain erlaubt
- HSTS: aktiv über Hosting-Provider
- CSP: restriktive Content Security Policy empfohlen

## ￿ 6. Sicherheitsaspekte

**Datenschutz (DSGVO / CH-DSG)**
Keine Speicherung sensibler Daten.
Kein Tracking oder Logging persönlicher Informationen.

**Schutz vor Angriffen (OWASP Top 10)**

- Eingabevalidierung auf Client-Seite.
- Keine direkten DB-Zugriffe (users.js).
- HTTPS und Content Security Policy.
- Regelmässige Schwachstellenprüfung.

**Virenschutz**

- Kein Datei-Upload → kein Risiko durch Schadsoftware.

## ￿ 7. Wartung & Betrieb

**Frontend-Anpassungen**

- Texte, Farben, Layout:
    **-** index.html
    **-** auswahl.html
    **-** login-detail.html-login-ipa.html.


- Schriftart:
    **-** index.css.
- Responsives Verhalten:
    **-** Media Queries. (Alle.htmlFiles)
**Backend-Anpassungen**
- Neue Benutzer inusers.jshinzufügen:
**const** USERS =[
{ username:"Marcel",password: "IPA2026"},
{ username:"Lara", password:"DEV2025"},
];


