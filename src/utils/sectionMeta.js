// Visual metadata per section: index code, accent color and illustration.
// Images live in public/images/nw (sourced from numadessas.com.br).

const IMG = '/wiki/images/nw/'

const meta = {
  introduction:           { color: 'orange', img: 'rainbow.webp',     fit: 'cover' },
  glossary:               { color: 'purple', img: 'lampada.webp' },
  'internet-generations': { color: 'green',  img: 'web3-vr.webp',     fit: 'cover' },
  blockchain:             { color: 'orange', img: 'cube-chain.webp' },
  'consensus-mechanisms': { color: 'purple', img: 'globe.webp' },
  cryptography:           { color: 'green',  img: 'lock.webp' },
  'crypto-wallets':       { color: 'orange', img: 'ledger.webp' },
  nfts:                   { color: 'purple', img: 'nft-alien.webp' },
  communities:            { color: 'green',  img: 'emoji-2.webp' },
  platforms:              { color: 'orange', img: 'laptop.webp' },
  communication:          { color: 'purple', img: 'web2-phone.webp',  fit: 'cover' },
  marketing:              { color: 'green',  img: 'grafico.webp' },
  about:                  { color: 'orange', img: 'numa-busto.webp' },
  references:             { color: 'purple', img: 'quadro.webp' },
}

export function getSectionMeta(id, index = 0) {
  const m = meta[id] || { color: ['orange', 'purple', 'green'][index % 3], img: 'phantom.webp' }
  return {
    ...m,
    code: `NW-${String(index + 1).padStart(2, '0')}`,
    src: IMG + m.img,
    accent: `var(--${m.color})`,
  }
}

export const stickers = {
  busto: IMG + 'numa-busto.webp',
  pepe: IMG + 'pepe.webp',
  phantom: IMG + 'phantom.webp',
  shiba: IMG + 'token-shiba.webp',
  bitcoin: IMG + 'bitcoin-hand.webp',
  ledger: IMG + 'ledger.webp',
  emoji: IMG + 'emoji-4.webp',
  cube: IMG + 'cube-chain.webp',
  temple: IMG + 'temple.webp',
  web1: IMG + 'web1-glitch.webp',
}

export const artThumbs = Array.from({ length: 14 }, (_, i) => `${IMG}art/tz-${i}.webp`)
export const logoSrc = IMG + 'logo.svg'
