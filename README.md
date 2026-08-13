# Magos Radar — Landing Page

Egyszerű, egyoldalas, magyar nyelvű landing page a Magos radaralapú perimeter védelmi megoldásához. Statikus HTML/CSS/JS, GitHub Pages-re optimalizálva, backend nélkül.

## Mappastruktúra

```
├── index.html          # a teljes oldal
├── css/
│   └── style.css       # design rendszer + reszponzív layout
├── js/
│   └── script.js        # mobil menü, footer évszám, űrlap visszajelzés
├── assets/
│   └── img/
│       ├── favicon.svg  # radar ikon (favicon)
│       └── logo.svg     # ideiglenes szöveges logó — cseréld a valódi Magos logóra
├── robots.txt
├── sitemap.xml
└── README.md
```

## 1. Élesítés GitHub Pages-en

1. Hozz létre egy publikus GitHub repót (pl. `magos-radar-landing`).
2. Töltsd fel ennek a mappának a **teljes tartalmát** a repó gyökerébe (nem almappába).
3. GitHubon: **Settings → Pages → Build and deployment → Source: „Deploy from a branch”**, branch: `main`, mappa: `/ (root)`.
4. Néhány percen belül elérhető lesz: `https://<felhasznalonev>.github.io/<repo-nev>/`
5. Ha saját domaint használsz (pl. `magosradar.hu`), add hozzá a **Custom domain** mezőben, és hozz létre egy `CNAME` fájlt a repó gyökerében a domain nevével.

## 2. Amit cserélned kell éles indulás előtt

- **Logó**: cseréld le az `assets/img/logo.svg` és `favicon.svg` fájlokat a valódi Magos márkaeszközökre (a jelenlegi egy egyszerű, radar-motívumú ideiglenes jelölés).
- **URL-ek**: az `index.html`-ben és a `sitemap.xml` / `robots.txt` fájlokban cseréld le a `https://example.com` helyőrzőt a végleges domainre.
- **Kapcsolati adatok**: az `index.html` `#kapcsolat` szekciójában cseréld a névre/telefonra/e-mailre szánt helyőrzőket a valós elérhetőségekre.
- **OG kép**: adj hozzá egy `assets/img/og-cover.jpg` képet (ajánlott méret: 1200×630 px) a közösségimédia-megosztási előnézethez — ezt hivatkozza az `og:image` / `twitter:image` tag.

## 3. Kapcsolatfelvételi űrlap

GitHub Pages statikus tárhely, nincs szerveroldali feldolgozás, ezért az űrlapot egy külső űrlap-backendhez kell kötni. Alapértelmezésként a [Formspree](https://formspree.io) van előkészítve (ingyenes csomaggal is működik):

1. Regisztrálj a Formspree-n, hozz létre egy űrlapot, és másold ki a saját form-azonosítódat.
2. Az `index.html`-ben cseréld le:
   ```html
   <form ... action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   a `YOUR_FORM_ID` részt a sajátodra.
3. Ennyi — a Formspree e-mailben továbbítja a beérkező üzeneteket.

**Alternatívák**, ha nem Formspree-t szeretnél:
- **EmailJS** — kliensoldali JS-ből küld e-mailt, nincs szükség saját backendre.
- **Netlify Forms** — csak akkor működik, ha a Netlify hosztolja az oldalt (GitHub Pages helyett).
- Saját backend / szerverless funkció (pl. Cloudflare Worker), amely fogadja a POST kérést.

## 4. SEO ellenőrzőlista (már beállítva)

- Egyedi `<title>` és `meta description`
- Open Graph + Twitter Card metaadatok
- `Organization` JSON-LD strukturált adat
- `robots.txt` és `sitemap.xml`
- Szemantikus HTML (`header`, `main`, `section`, `footer`), egy `<h1>` per oldal
- `lang="hu"` attribútum, magyar nyelvű, kulcsszó-releváns szövegezés
- Reszponzív, mobilbarát elrendezés

## 5. Testreszabás

A design tokenek (színek, betűtípusok, térközök) a `css/style.css` tetején, a `:root` blokkban vannak definiálva — innen módosítható a teljes márkapaletta egy helyen.

---

**Megjegyzés a márkaarculatról:** mivel a valódi Magos Systems logófájl és pontos márka-színkód nem állt rendelkezésre, ez a design egy radar/HUD-esztétikájú, sötét navy + jelzés-türkiz (`#39D9A0`) palettát használ, amely illeszkedik a radaros biztonságtechnikai szegmenshez. Cseréld a fenti 2. pont szerint a hivatalos Magos márkaelemekre, ha azok rendelkezésre állnak.
