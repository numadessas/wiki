/**
 * Content Adapter — Abstraction Layer
 * 
 * This module abstracts the data source for wiki content.
 * Currently uses local static data, but is designed to be
 * swapped out for blockchain/IPFS storage in the future.
 * 
 * Future integration targets:
 * - Tezos smart contracts (content registry)
 * - IPFS for content storage
 * - On-chain metadata for versioning
 * 
 * The interface exposed here should remain stable as the
 * underlying data source changes.
 */

import { wikiSections, getSectionBySlug, getRelatedSections, allTags } from '../content/en/wiki.js'

// ─── Content Source Configuration ────────────────────────────────────────────

const CONFIG = {
  source: 'local', // 'local' | 'ipfs' | 'tezos'
  // Future: ipfsGateway: 'https://ipfs.io/ipfs/',
  // Future: tezosContract: 'KT1...',
  // Future: tezosNetwork: 'mainnet',
}

// ─── Data Fetching ────────────────────────────────────────────────────────────

/**
 * Fetch all wiki sections metadata (without full content for perf)
 */
export async function fetchAllSections() {
  if (CONFIG.source === 'local') {
    return wikiSections.map(({ content: _, ...meta }) => meta)
  }
  // Future: fetch from IPFS registry or Tezos contract
  throw new Error(`Unsupported source: ${CONFIG.source}`)
}

/**
 * Fetch a single section including full content
 */
export async function fetchSection(slug) {
  if (CONFIG.source === 'local') {
    return getSectionBySlug(slug) || null
  }
  // Future: IPFS fetch by CID stored in Tezos contract
}

/**
 * Fetch related sections by slug array
 */
export async function fetchRelated(slugs) {
  if (CONFIG.source === 'local') {
    return getRelatedSections(slugs)
  }
}

/**
 * Fetch all available tags
 */
export async function fetchTags() {
  if (CONFIG.source === 'local') {
    return allTags
  }
}

// ─── Metadata Structure (IPFS-compatible) ────────────────────────────────────

/**
 * Converts a wiki section to IPFS-compatible metadata JSON structure.
 * Use this when preparing content for on-chain storage.
 */
export function toIPFSMetadata(section) {
  return {
    name: section.title,
    description: section.description,
    attributes: [
      { trait_type: 'tags', value: section.tags.join(',') },
      { trait_type: 'version', value: '2.0.0' },
      { trait_type: 'language', value: 'en' },
      { trait_type: 'author', value: 'Numa' },
    ],
    content: section.content,
    related: section.related,
    // Future: image: 'ipfs://...' (section cover art)
  }
}

// ─── Web3 Wallet Integration Stub ────────────────────────────────────────────

/**
 * Wallet integration stub for future Tezos connection.
 * DO NOT activate — structural only.
 */
export const walletAdapter = {
  // connect: async () => { /* beacon-sdk / taquito */ },
  // disconnect: async () => {},
  // getAddress: () => null,
  // signContent: async (content) => {},
  // submitContent: async (metadata) => {},
  isReady: false,
}
