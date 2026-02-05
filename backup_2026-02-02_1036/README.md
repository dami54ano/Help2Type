# help2type Website

Eine moderne Website für help2type - die erste speziell entwickelte Tastatur für sicheres und einfaches Tippen auf Smartphones.

## Projektstruktur

```
Help2Type/
├── index.html              # Hauptseite
├── css/
│   ├── style.css          # Haupt-Stylesheet
│   └── shop.css           # Shop-Stylesheet
├── js/
│   ├── script.js          # Haupt-JavaScript
│   └── shop.js            # Shop-JavaScript (Warenkorb)
├── images/                # Bilder-Ordner (Bilder werden später hinzugefügt)
└── shop/
    └── index.html         # Shop-Seite
```

## Features

### Hauptseite (index.html)
- ✅ Responsive Navigation mit Mobile Menu
- ✅ Hero Section mit Call-to-Action
- ✅ Zielgruppen-Sections (Blinde, Ältere, Business)
- ✅ Mission Statement
- ✅ Produkt-Information
- ✅ Geschichte/Video Section
- ✅ Vorteile (Funktional & Emotional)
- ✅ Kundenmeinungen/Testimonials
- ✅ Partner & Unterstützer
- ✅ Footer mit Newsletter, Social Links
- ✅ Smooth Scrolling
- ✅ Scroll-Animationen

### Shop (shop/index.html)
- ✅ 4 Produkte mit Preisen:
  - Bundle (CHF 149) - reduziert von CHF 219
  - Tastatur (CHF 129)
  - Schutztasche (CHF 29)
  - Zusatzplatte (CHF 9)
- ✅ Warenkorb-Funktionalität
- ✅ LocalStorage für Warenkorb-Persistenz
- ✅ Produktmerkmale Section
- ✅ Responsive Design

## Bilder die noch hinzugefügt werden müssen

Bitte folgende Bilder im `images/` Ordner platzieren:

### Haupt-Website
- `logo.png` - help2type Logo
- `Tastatur%20auf%20handy_help2type_komp.png` - Hero-Bild
- `blind.jpg` - Bild für blinde/sehbehinderte Zielgruppe
- `elderly.jpg` - Bild für ältere Menschen
- `business.jpg` - Bild für Business-Nutzer
- `partner1.png`, `dhv.png`, `bsv-sachsen.png` - Partner-Logos
- `swiss-innovation.png` - Award Badge
- `band.png` - Band.ch Logo
- `switzerland.png` - Schweizer Flagge

### Shop
- `h2t_HeaderbildShop2v2.png` - Shop Header-Bild
- `bundle.jpg` - Bundle Produkt
- `keyboard.jpg` - Tastatur Produkt
- `case.jpg` - Schutztasche
- `plate.jpg` - Zusatzplatte

## Installation & Start

1. Alle Bilder in den `images/` Ordner kopieren
2. `index.html` in einem Browser öffnen
3. Oder einen lokalen Server starten:
   ```bash
   # Mit Python
   python -m http.server 8000
   
   # Oder mit Node.js
   npx serve
   ```
4. Website im Browser unter `http://localhost:8000` aufrufen

## Design-Details

- **Farben:**
  - Primary: #0066cc (Blau)
  - Secondary: #00a8e8 (Hellblau)
  - Accent: #ff6b35 (Orange)
  
- **Schriftart:** Open Sans (Google Fonts)

- **Responsive Breakpoints:**
  - Desktop: > 968px
  - Tablet: 768px - 968px
  - Mobile: < 768px

## Browser-Kompatibilität

- ✅ Chrome/Edge (neueste Versionen)
- ✅ Firefox (neueste Versionen)
- ✅ Safari (neueste Versionen)
- ✅ Mobile Browser (iOS & Android)

## Kontakt

Roeschs help2type  
Frutigenstrasse 28  
3600 Thun, Switzerland  
info@help2type.com
