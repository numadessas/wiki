# numawiki

> An authorial, curated knowledge space about Blockchain, Web3, NFTs, and digital art communities.  
> Computadores Fazem Arte — by [Numa](https://numadessas.com.br) · Research project UFPE / CNPq

---

## Overview

This is the source code for **numawiki** — the educational wiki for Computadores Fazem Arte, a modular, production-ready React application built to live at [numadessas.com.br](https://numadessas.com.br).

It's designed to feel like an **artist-researcher's knowledge space**: editorial, critical, and accessible — not a generic documentation site.

---

## Features

- **11 wiki sections** covering Blockchain, Web3, NFTs, Security, Communities, Marketing, and more
- **17 glossary terms** with expandable accordion + copy-to-clipboard
- **Full-text search** (local, keyboard-navigable, `⌘K` shortcut)
- **Dark mode + Light mode** with localStorage persistence
- **EN / PT language toggle** for UI strings
- **Reading progress indicator**
- **Table of contents** (per-page, scroll-tracked)
- **Related articles** with smart linking
- **Prev / Next navigation** between sections
- **Tag system** with filtering on homepage
- **Breadcrumb navigation**
- **Responsive** (mobile-first, sidebar collapses on small screens)
- **Smooth page transitions**
- **Web3-ready architecture** — abstraction layer for future Tezos/IPFS integration

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Styling | Tailwind CSS + custom CSS variables |
| Markdown | react-markdown + remark-gfm |
| Icons | lucide-react |
| Fonts | Instrument Sans · Space Mono · DM Sans |

---

## Project Structure

```
computadores-fazem-arte/
│
├── index.html                  # Entry HTML
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
│
└── src/
    ├── App.jsx                 # Root with router
    ├── main.jsx                # React DOM render
    │
    ├── styles/
    │   └── globals.css         # Design tokens, prose styles, utilities
    │
    ├── content/
    │   ├── en/
    │   │   ├── wiki.js         # All wiki content + glossary (English)
    │   │   └── ui.js           # UI strings (English)
    │   └── pt/
    │       └── ui.js           # UI strings (Portuguese)
    │
    ├── utils/
    │   ├── contentAdapter.js   # Abstraction layer (local → IPFS/Tezos)
    │   ├── LanguageContext.jsx # i18n provider
    │   └── ThemeContext.jsx    # Dark/light mode provider
    │
    ├── hooks/
    │   └── useReadingProgress.js
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Header.jsx      # Sticky header w/ search, lang, theme
    │   │   ├── Sidebar.jsx     # Wiki navigation
    │   │   └── Layout.jsx      # Wrapper, sidebar toggle
    │   │
    │   ├── wiki/
    │   │   ├── MarkdownRenderer.jsx   # MD → HTML w/ anchor headings
    │   │   ├── GlossaryList.jsx       # Filterable accordion glossary
    │   │   ├── TableOfContents.jsx    # Auto-extracted TOC w/ scroll spy
    │   │   ├── RelatedArticles.jsx    # Linked related sections
    │   │   ├── SearchModal.jsx        # Full-text search overlay
    │   │   └── Callout.jsx            # Info/concept/warning blocks
    │   │
    │   └── ui/
    │       ├── Breadcrumb.jsx
    │       └── TagPill.jsx
    │
    └── pages/
        ├── HomePage.jsx        # Landing with grid of sections
        ├── WikiPage.jsx        # Dynamic wiki article renderer
        └── NotFound.jsx        # 404
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone or unzip the project
cd computadores-fazem-arte

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Adding a New Wiki Section

1. **Open** `src/content/en/wiki.js`
2. **Add** a new object to the `wikiSections` array:

```js
{
  id: 'my-new-section',          // unique identifier
  slug: 'my-new-section',        // URL slug: /wiki/my-new-section
  title: 'My New Section',
  subtitle: 'Short descriptor',
  tags: ['web3', 'art'],
  description: 'One-line description for the card.',
  related: ['blockchain', 'nfts'],  // slugs of related sections
  content: `
# My New Section

Your markdown content here...
  `
}
```

3. **Add a translation** in `src/content/pt/ui.js` under `sections`:

```js
sections: {
  // ...existing
  'my-new-section': 'Minha Nova Seção',
}
```

4. **Optionally add an icon** in `src/components/layout/Sidebar.jsx`:

```js
const sectionIcons = {
  // ...existing
  'my-new-section': '◈',
}
```

That's it — the section will appear in the sidebar, homepage grid, and search automatically.

---

## Adding Glossary Terms

In `src/content/en/wiki.js`, find the `glossary` section and add to its `glossaryTerms` array:

```js
{ term: 'DAO', definition: 'Decentralized Autonomous Organization — an organization represented by rules encoded as a computer program that is transparent and controlled by its members.' }
```

---

## Using Callout Blocks in Content

In your markdown content, you can use blockquotes with emoji prefixes for visual callouts. For more control, you can render React callout components directly in the page's JSX:

```jsx
import Callout from '../components/wiki/Callout.jsx'

<Callout type="info">This is an informational note.</Callout>
<Callout type="concept" title="Smart Contract">A self-executing program on the blockchain.</Callout>
<Callout type="warning">Be careful with this.</Callout>
```

---

## Deploying to GitHub Pages

1. **Add** the deploy workflow (already included at `.github/workflows/deploy.yml`)
2. **Update** `vite.config.js` base if deploying to a subfolder:

```js
// For https://username.github.io/repo-name/
base: '/repo-name/'

// For a custom domain (numadessas.com.br)
base: '/'
```

3. **Push** to `main` — GitHub Actions will build and deploy automatically.

4. In your GitHub repo settings → Pages → set source to `gh-pages` branch.

---

## Web3 / Blockchain Future Integration

The project is structured for a future on-chain upgrade. See `src/utils/contentAdapter.js`.

### Architecture intent

```
Current:    Content → Local JS files → React
Future:     Content → IPFS (CIDs stored in Tezos contract) → React
```

### When you're ready to connect Tezos:

1. Install `@taquito/taquito` and `@airgap/beacon-sdk`
2. In `contentAdapter.js`, set `CONFIG.source = 'tezos'`
3. Implement `fetchSection()` to read from the smart contract
4. Activate `walletAdapter` functions
5. Build a content submission flow using `toIPFSMetadata()` format

---

## Design System

| Token | Value |
|-------|-------|
| `--orange` | `#ee6f22` |
| `--green` | `#93FF78` |
| `--purple` | `#734578` |
| `--black` | `#0a0a0a` |
| Title font | Instrument Sans (uppercase) |
| Mono font | Space Mono (labels, tags, UI) |
| Body font | DM Sans |

---

## License

Content: free for distribution with attribution to Numa / UFPE / CNPq.  
Code: MIT.

---

*This wiki is part of master's research in Digital Artifact Design at UFPE.*  
*Contact: contato@numadessas.com.br · [@numadessas](https://twitter.com/numadessas)*
