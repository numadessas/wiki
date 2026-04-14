/**
 * Content Adapter — Camada de Abstração
 *
 * Este módulo abstrai a fonte de dados do conteúdo do wiki.
 * Atualmente usa dados estáticos locais, mas foi projetado para
 * ser substituído por armazenamento em Blockchain/IPFS no futuro.
 *
 * Alvos de integração futura:
 * - Contratos inteligentes Tezos (registro de conteúdo)
 * - IPFS para armazenamento de conteúdo
 * - Metadados on-chain para versionamento
 *
 * A interface exposta aqui deve permanecer estável conforme
 * a fonte de dados subjacente muda.
 */

import { wikiSections as wikiEn, getSectionBySlug as getSlugEn, getRelatedSections as getRelatedEn, allTags as tagsEn } from '../content/en/wiki.js'
import { wikiSections as wikiPt, getSectionBySlug as getSlugPt, getRelatedSections as getRelatedPt, allTags as tagsPt } from '../content/pt/wiki.js'

// ─── Configuração da Fonte de Conteúdo ───────────────────────────────────────

const CONFIG = {
  source: 'local', // 'local' | 'ipfs' | 'tezos'
  // Futuro: ipfsGateway: 'https://ipfs.io/ipfs/',
  // Futuro: tezosContract: 'KT1...',
  // Futuro: tezosNetwork: 'mainnet',
}

// ─── Seleção de Idioma ────────────────────────────────────────────────────────

/**
 * Retorna o store de conteúdo correto baseado no idioma.
 * Adicione novos idiomas aqui conforme necessário.
 */
function getStore(lang) {
  return lang === 'pt'
    ? { wikiSections: wikiPt, getSectionBySlug: getSlugPt, getRelatedSections: getRelatedPt, allTags: tagsPt }
    : { wikiSections: wikiEn, getSectionBySlug: getSlugEn, getRelatedSections: getRelatedEn, allTags: tagsEn }
}

// ─── Busca de Dados ───────────────────────────────────────────────────────────

/**
 * Busca metadados de todas as seções do wiki (sem o conteúdo completo, por performance).
 * Futuro: busca do registro IPFS ou contrato Tezos.
 */
export async function fetchAllSections(lang = 'en') {
  if (CONFIG.source === 'local') {
    return getStore(lang).wikiSections.map(({ content: _, ...meta }) => meta)
  }
  throw new Error(`Fonte não suportada: ${CONFIG.source}`)
}

/**
 * Busca uma seção completa incluindo conteúdo.
 * Futuro: busca IPFS pelo CID armazenado no contrato Tezos.
 */
export async function fetchSection(slug, lang = 'en') {
  if (CONFIG.source === 'local') {
    return getStore(lang).getSectionBySlug(slug) || null
  }
}

/**
 * Busca seções relacionadas por array de slugs.
 */
export async function fetchRelated(slugs, lang = 'en') {
  if (CONFIG.source === 'local') {
    return getStore(lang).getRelatedSections(slugs)
  }
}

/**
 * Busca todas as tags disponíveis.
 */
export async function fetchTags(lang = 'en') {
  if (CONFIG.source === 'local') {
    return getStore(lang).allTags
  }
}

/**
 * Versão síncrona para uso em componentes que precisam
 * dos dados imediatamente (sidebar, busca, home).
 */
export function getAllSectionsSync(lang = 'en') {
  return getStore(lang).wikiSections
}

// ─── Estrutura de Metadados (compatível com IPFS) ─────────────────────────────

/**
 * Converte uma seção do wiki para estrutura de metadados
 * compatível com IPFS. Use ao preparar conteúdo para
 * armazenamento on-chain no futuro.
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
    // Futuro: image: 'ipfs://...' (arte de capa da seção)
  }
}

// ─── Integração com Carteira Web3 (stub) ─────────────────────────────────────

/**
 * Stub de integração com carteira para futura conexão Tezos.
 * NÃO ativar — apenas estrutural por enquanto.
 *
 * Quando pronto para conectar:
 * 1. Instalar @taquito/taquito e @airgap/beacon-sdk
 * 2. Definir CONFIG.source = 'tezos'
 * 3. Implementar fetchSection() para ler do contrato
 * 4. Ativar as funções do walletAdapter abaixo
 * 5. Construir fluxo de submissão de conteúdo
 */
export const walletAdapter = {
  // connect: async () => { /* beacon-sdk / taquito */ },
  // disconnect: async () => {},
  // getAddress: () => null,
  // signContent: async (content) => {},
  // submitContent: async (metadata) => {},
  isReady: false,
}
