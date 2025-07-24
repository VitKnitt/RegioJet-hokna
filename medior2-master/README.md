# Medior Next.js test

Test pro mediora na Next.js

## Zadání
- forkněte si tento repozitář
- nezapomeňte, že vytváříte první veřejnou verzi, takže se snažte o co nejlepší kód
- upravte i CHANGELOG.md a přidejte si do něj své jméno
- používejte Typescript
- používejte CSS moduly s Tailwindem (viz komponenta `Home`)
- pro komponenty používejte atomický design (nepoužívejte atoms, molecules, organisms, templates, pages, použijte spíše složky ui, shared a components).
- subkomponenty vkládejte do složky `components` (např. `UserList/components/UserCard/UserCard.tsx`) atp.
- všechny karty budou mít hover efekt podle `/taskImages/hover.png`
- Vytvořte a přidejte na hlavní stránku webu:
  - komponentu `MainText`, ve které bude markdown text ([viz. níže](#markdown-text)). Použijte nainstalovaný balík pro generování markdownu (`markdown-to-jsx`).
    - je potřeba, aby odkazy byly generovány jako značka `<span>`, která bude tučným tmavě zeleným písmem.
    - je třeba, aby byl markdown text generován správně (tj. ve výsledném kódu budou jen značky `<h2>`, `<span>` a `<p>`)
- vytvořte komponentu `UserList` která bude zobrazovat seznam uživatelů na hlavní stránce
  - seznam bude SSR
  - seznam uživatelů bude načtený z API `usersUrl` (viz. `/next.config.js` a `/src/utils/config.ts`)
  - vzhled seznamu podle `/taskImages/userList.png`.
  - kliknutí na odkaz *Show on map* povede na Mapy.cz, kde se podle GPS souřadnic zobrazí pozice uživatele (např. `https://mapy.cz/turisticka?source=coor&id=15.424045866210946%2C50.18830352887631&x=15.4280048&y=50.1874036&z=16`)
  - Kliknutí na tlačítko *Read articles* povede na stránku `/articles/[userId]`, kde bude seznam článků
- vytvořte komponentu `ArticleList` která bude zobrazovat seznam článků konkrétního uživatele na stránce `/articles/[userId]`
  - seznam bude SSR
  - seznam článků bude načtený z API `articlesUrl` (viz. `/next.config.js` a `/src/utils/config.ts`)
  - jméno autora může být načteno z API `userUrl` (viz. `/next.config.js` a `/src/utils/config.ts`) a to v případě, že se na stránku přistoupí přímo (např. `/articles/1`). Pokud se půjde přes hlavní stránku, tak se jméno autora načte z kontextu (*React.createContext*).
  - vzhled seznamu podle `/taskImages/articlesList.png`.
- funkční aplikaci nahrejte na svůj GitHub / Gitlab a do **sedmi dnů od obdržení zadání** pošlete odkaz na repozitář na e-mail <vilem.lipold@studentagency.cz>
- v případě problémů a dotazů volejte na +420 606 753 180 (8.00 – 21.00).

### Markdown text

```markdown
## How to use this application

You see navigation on this page. You can use it to navigate to other pages. Other pages are [Article list](./articles/1) only. You can use it to see articles of any user.

We are using best map web application in the world. You can see it on [Mapy.cz](https://mapy.cz). You can use it to see where is user from.

This page is build with [Next.js](https://nextjs.org/), [React](https://react.dev/) and [Typescript](https://www.typescriptlang.org/). You can use it to build your own application too.
```

## Instalation

```bash
git clone git@github.com:Vylda/medior2.git
cd medior2
npm install
```

## Development

### Development server

```bash
npm run devOpen
```

or

```bash
npm run dev
```

### Linting
- automatic before commit and push
- manual

```bash
npm run eslint
npm run stylelint
npm run ts
```

### Endpoints
saved in `.env` files.

You can use it in your code like this:

```typescript
import publicRuntimeConfig from '@/utils/config';
…
const { usersUrl } = publicRuntimeConfig;
```

## Deployment

```bash
npm run build
npm start
```
