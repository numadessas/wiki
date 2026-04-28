// vite-plugin-og.js
// Generates a static index.html with correct OG/Twitter meta tags for each wiki article.
// Runs after the build and creates dist/wiki/[slug]/index.html for every section.

import fs from 'fs'
import path from 'path'
import { wikiSections as wikiSectionsEN } from './src/content/en/wiki.js'
import { wikiSections as wikiSectionsPT } from './src/content/pt/wiki.js'

const BASE_URL = 'https://numadessas.com.br/wiki'
const OG_IMAGE_DEFAULT = `${BASE_URL}/images/og-default.png`

function buildHtml(title, description, url, image = OG_IMAGE_DEFAULT) {
  const safeTitle = title.replace(/"/g, '&quot;')
  const safeDesc = description.replace(/"/g, '&quot;')
  const siteTitle = `${safeTitle} — numawiki`

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${siteTitle}</title>
  <meta name="description" content="${safeDesc}" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="numawiki" />
  <meta property="og:title" content="${siteTitle}" />
  <meta property="og:description" content="${safeDesc}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter / X Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${siteTitle}" />
  <meta name="twitter:description" content="${safeDesc}" />
  <meta name="twitter:image" content="${image}" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" rel="stylesheet">
  <script>
    // Redirect to SPA with correct path preserved
    sessionStorage.redirect = location.href;
    location.replace('${BASE_URL}/');
  </script>
</head>
<body></body>
</html>`
}

export default function ogPlugin() {
  return {
    name: 'vite-plugin-og',
    closeBundle() {
      const distDir = path.resolve('dist')
      const sections = [...wikiSectionsEN]

      // Deduplicate by slug (EN is enough — PT shares same slugs)
      const seen = new Set()
      for (const section of sections) {
        if (seen.has(section.slug)) continue
        seen.add(section.slug)

        const slug = section.slug
        const title = section.title
        const description = section.description || `${title} — numawiki`
        const url = `${BASE_URL}/wiki/${slug}`

        // Check if there's a dedicated OG image for this article
        const ogImagePath = path.join(distDir, 'images', `og-${slug}.png`)
        const image = fs.existsSync(ogImagePath)
          ? `${BASE_URL}/images/og-${slug}.png`
          : OG_IMAGE_DEFAULT

        const html = buildHtml(title, description, url, image)

        const dir = path.join(distDir, 'wiki', slug)
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), html)
        console.log(`[og] ✓ /wiki/${slug}/`)
      }

      console.log(`[og] Generated ${seen.size} article pages.`)
    }
  }
}
