// Content registry - English
// Future: replace with blockchain/IPFS data source via contentAdapter

export const wikiSections = [
  {
    id: 'introduction',
    slug: 'introduction',
    title: 'Introduction',
    subtitle: 'About this wiki',
    tags: ['overview', 'web3', 'nft'],
    description: 'What is Computadores Fazem Arte and why this knowledge matters.',
    related: ['glossary', 'internet-generations'],
    content: `
# Introduction

To begin talking about NFTs, we first need to think about some key terms that make up this universe. This formation covers the techniques and practices for creating artworks in the NFT market.

This projects main objective is to encourage more people to learn how to use Blockchain technology — and also to spark a serious conversation about how virtual communities can become more conscious and thereby contribute socially to physical spaces.

---

Well cover **Blockchain**, **crypto**, **digital communities**, and other foundational concepts so that you have the autonomy and initial courage to create your NFT works and projects.

> "Computers advance / Artists hitchhike / Scientists create the new / Artists take the fame" — *Fred Zero Quatro*

## Why this matters

This is not just a technical manual. Its an invitation to think critically about technology, art, and community. The NFT space is fertile ground — still largely unexplored. Its up to us to navigate it consciously: planting good ideas without deforestation.

## Who made this?

This educational material was developed by **Numa** as part of a masters research in Digital Artifact Design at the Universidade Federal de Pernambuco (UFPE), funded by the MAI/DAI program of the Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq) with support from the NFT art community.

The content is available for free distribution.
    `
  },
  {
    id: 'glossary',
    slug: 'glossary',
    title: 'Glossary',
    subtitle: 'Key terms',
    tags: ['reference', 'terminology'],
    description: 'Essential vocabulary for navigating the Web3 and NFT space.',
    related: ['introduction', 'blockchain'],
    content: `
# Glossary

Essential vocabulary for navigating the Web3 and NFT space. Click any term to expand its definition.
    `,
    glossaryTerms: [
      { term: 'DYOR', definition: '"Do Your Own Research" — an expression reminding everyone that investing in crypto is highly volatile. What works for one person does not necessarily work for another. Always stay attentive and keep updating your knowledge.' },
      { term: 'Flood', definition: 'Sending too many messages about the same topic, creating visual pollution in chats and channels.' },
      { term: 'FOMO', definition: '"Fear Of Missing Out" — the anxiety of missing an opportunity, often driving impulsive decisions in volatile markets.' },
      { term: 'GM / GN', definition: '"Good Morning" / "Good Night" — common greetings used in NFT and crypto communities, often used to build daily connection.' },
      { term: 'Genesis', definition: 'The first NFT someone launches on a network or platform. Inspired by the "genesis block" — the first block mined on a blockchain.' },
      { term: 'Hash', definition: 'A unique sequence of characters generated from transaction data using a special mathematical function. Hashes verify data integrity, connect blockchain blocks securely, and enable mining.' },
      { term: 'IRL', definition: '"In Real Life" — used to describe life and events that happen outside the internet.' },
      { term: 'Block Explorer', definition: 'A platform where you can access and read a blockchain publicly in real time. Each network has one or more explorers.' },
      { term: 'NFA', definition: '"No Financial Advice" — similar to DYOR. Used when discussing a project/coin to clarify that each person must evaluate for themselves what is appropriate for their financial situation.' },
      { term: 'Node', definition: 'A computer that is part of a blockchain network structure. Each node holds an identical copy of all transactions that have occurred on the network.' },
      { term: 'Nonce', definition: 'Short for "number used once" — a randomly generated number used only once in a cryptographic transaction.' },
      { term: 'Burn NFT', definition: 'A process to render an NFT unusable. Since NFTs cannot be deleted from a blockchain, burning is used when one needs to effectively "remove" an NFT from circulation.' },
      { term: 'Scam', definition: 'A fraudulent scheme designed to deceive users and steal assets or information.' },
      { term: 'Phishing', definition: 'A type of cyber attack that steals personal and financial information, often through fake websites or messages that impersonate legitimate services.' },
      { term: 'WAGMI', definition: '"We\'re All Gonna Make It" — an optimistic expression of collective encouragement common in NFT and crypto communities.' },
      { term: 'Whitepaper', definition: 'A document explaining the objectives and technology of a crypto project (coins, games, collections, etc.). A crucial element for projects to be considered genuine and professional. Litepapers are shorter, less technical, and easier to understand.' },
      { term: 'Engagement Farm', definition: 'A manipulative strategy to increase visibility on social networks by encouraging people to post their content in exchanges that provide no real value.' },
      { term: 'Mintagem / Minting', definition: 'The process of creating and registering an NFT on a blockchain. Similar to how physical coins are minted, minting an NFT makes it an official, verifiable digital asset.' },
    ]
  },
  {
    id: 'internet-generations',
    slug: 'internet-generations',
    title: 'Internet Generations',
    subtitle: 'Web1, Web2, Web3',
    tags: ['web3', 'history', 'technology'],
    description: 'From static pages to semantic, decentralized networks.',
    related: ['blockchain', 'introduction'],
    content: `
# Internet Generations

Before diving into NFTs and blockchain, its important to understand the three generations (so far) of the internet and how interaction in this space has evolved.

Youll find content referring to these as "eras" in a temporal sense — but its more useful to think of them not as separate periods, but as **continuations and overlaps**. We currently live in a moment where Web2 and Web3 coexist simultaneously.

---

## Web 1.0 — The Simple Internet

The first phase of the Internet emerged in the **1990s** and consisted of pages with hyperlinks. Sites were primarily informational with very basic layouts, minimal multimedia resources, and most content was text-based.

It was only possible to access, read, and navigate — with little or no interaction or feedback tools.

**Characteristics:**
- Limited bandwidth
- Devices limited to desktop
- No real interaction — read-only
- Static pages without dynamic content

> **Bandwidth** is the concept that determines the measurement of transmission capacity, especially of a connection or network.

---

## Web 2.0 — The Social Internet

Emerged around **2004** — the phase of the Internet that brought more user-generated content and visual resources (front-end). Users could share more information with each other and connect more easily.

The Web 2.0 is marked by greater interactivity and collaboration between users, alongside a richer, more engaging user experience. This phase saw the rise of social media platforms, blogs, and other tools that allow users to create and share their own content.

**Characteristics:**
- Better bandwidth and computing power
- More devices (desktop + mobile)
- Interaction via comments, photos, and other data (read-write)
- Centralized platforms (Google, Facebook, Instagram)

### Front-end vs Back-end

**Front-end** is the part with which users interact directly: the visible and functional interface that allows users to navigate, interact, and consume content. It uses languages like HTML, CSS, and JavaScript.

**Back-end** is the part that deals with logic: data processing and storage. Its invisible to users and uses languages like PHP, Python, Ruby, Java, and Rust.

---

## Web3 — The Semantic Internet

Starting from **2008**, when Blockchain technology came into action through Bitcoin. The principles of Web3 intend to allow users to own their own data, instead of companies.

Also known as the **Semantic Web**, because it aims to make information "understandable" to computers — through machine learning, the science that focuses on using data and algorithms to imitate the way humans learn.

**Characteristics:**
- Better bandwidth and computing power
- More devices (desktop + mobile + IoT)
- **Decentralization of data**
- Interaction through comments, photos, and other data (read-write-execute)
- User ownership of digital identity and assets

The idea of **trustless** blockchains is: instead of trusting people or institutions, trust fully in technology, which is seen as impartial and capable of promoting greater political freedom.

> ⚠️ Despite this, many discourses around Blockchain are tied to neoliberal ideas. Even with the ideal of decentralization and anti-authoritarian promises, blockchains in practice concentrate power in the hands of a few developers and miners. — *MENOTTI, 2021*
    `
  },
  {
    id: 'blockchain',
    slug: 'blockchain',
    title: 'Blockchain Technology',
    subtitle: 'How it works',
    tags: ['blockchain', 'technology', 'history'],
    description: 'Digital ledgers, consensus mechanisms, block structure, and applications.',
    related: ['security', 'nfts', 'internet-generations'],
    content: `
# Blockchain Technology

## What is Blockchain?

Blockchains are like **digital, decentralized record books**. Online networks where data is saved on each users computer in the blockchain — not just on a single server, like Web 2.0 platforms.

A useful analogy: a blockchain is like a large **shared spreadsheet** replicated across thousands of computers. Each row represents a financial transaction (a block). This spreadsheet is constantly updated with new transactions, and every time a new one happens, its sent to all nodes on the network, which verify its validity before adding it.

---

## History

### Origins of Blockchain

Blockchain technology had its origins in **1991**, when Stuart Haber and W. Scott Stornetta published an article about how to securely timestamp digital documents using an encrypted series of blocks.

In **1992**, the introduction of the **Merkle Tree** (a concept created by Ralph Merkle in the 1970s) as a computer science structure allowed multiple documents to be stored in a single block.

> **Cryptography** is the transformation of readable data into encoded data, which can only be decoded with software processing. Cryptography is essential for keeping computer information secure.

### Key Timeline

| Year | Event |
|------|-------|
| 1979 | Ralph Merkle creates and patents the Merkle Tree concept |
| 1991 | Stuart Haber & Scott Stornetta publish first blockchain concept |
| 1992 | Cypherpunk movement mailing list created |
| 2008 | Satoshi Nakamoto publishes the Bitcoin whitepaper |
| 2009 | First Bitcoin is mined |
| 2010 | Bitcoin Pizza Day — first real-world purchase with crypto |
| 2013 | Bitcoin market surpasses $1M; Vitalik Buterin launches Ethereum whitepaper |
| 2015 | Ethereum network officially launches |
| 2021 | NFT market explodes; hic et nunc platform launched by Brazilian Rafael |

---

## How Does a Blockchain Work?

### 1. User Requests a Transaction
A user initiates a transaction on the blockchain — for example, sending a cryptocurrency to another person. This transaction is encoded in a block containing information such as sender, recipient, and transaction value.

### 2. Transaction is Broadcast to the Network
Once the block is created, it is broadcast to all nodes (computers) of the blockchain network. Each node verifies the validity of the transaction, ensuring the user has sufficient funds and there is no duplication.

### 3. Transaction is Confirmed and Added to the Chain
After verification, the networks nodes perform the consensus process — here is where cryptocurrency mining occurs. This process can happen in various ways and is performed to determine which block of transactions will be added to the blockchain.

### 4. Transaction Finalized
Once the block is added to the blockchain, the transaction is considered confirmed and finalized. The blockchain is **immutable**, meaning the transaction cannot be altered or reversed.

---

## Consensus Mechanisms

Consensus mechanisms are protocols that allow a decentralized network of computers to agree on the state of the blockchain — which transactions are valid and in what order they should be added.

| Mechanism | Description | Examples |
|-----------|-------------|---------|
| **Proof of Work (PoW)** | Miners compete to solve complex mathematical problems. First to solve adds the block and gets rewarded. | Bitcoin, Litecoin, Monero |
| **Proof of Stake (PoS)** | Validators are chosen based on the amount of crypto they "stake." No mining required. | Ethereum, Solana, Cardano |
| **Proof of Authority (PoA)** | Pre-selected validators are authorized to create and validate blocks. | Binance Coin, XRP |
| **Proof of History (PoH)** | Uses an immutable record of past events to determine transaction order. | Solana, Hedera |

---

## Blockchain Properties

### Decentralization
In traditional centralized systems, transactions are made through an intermediary (like a bank). In blockchain, the goal is to eliminate this central authority. Control is distributed across all network participants.

### Transparency
All transactions on a blockchain are public — anyone can see them. Even anonymous users can be observed through their public addresses.

### Immutability
Once information is recorded on a blockchain, it **cannot be altered**. This guarantees security and trust. If you make an error, you must create a new record and burn the incorrect one.

### Anonymity
Every user has a public address (public key) — a series of numbers and/or letters generated when creating a wallet. Personal data like name, documents, or address is not used. Anonymity exists without compromising system transparency.

### Auditability
All transactions can be verified and traced using a block explorer. This is the capacity to verify and track transactions due to the transparent and immutable nature of blockchain.

---

## Types of Blockchains

### Public Blockchain
Open access — anyone can participate without restrictions. Most transactions have a cost (transaction fees). Examples: Bitcoin, Ethereum, Solana.

### Private Blockchain
Access is controlled. Central question is trust and control among participants. Better performance due to limited, known participants. But more vulnerable to attacks if the controlling entity is compromised.

### Consortium Blockchain
A partnership between companies that build a shared blockchain network. Used in sectors like finance, healthcare, and logistics.

---

## Blockchain Layers

| Layer | Name | Role | Examples |
|-------|------|------|---------|
| L0 | Infrastructure | Makes blockchains possible and interoperable | Polkadot, Cosmos, Chainlink |
| L1 | Blockchains/Networks | Core networks, handle consensus and security | Bitcoin, Ethereum, Solana |
| L2 | Scalability | Reduces fees and latency, overlaid on L1 | Optimism, Polygon, Arbitrum |
| L3 | Application | Solves cross-chain interoperability | IBC Protocol, Quant, ICON |

> **Network latency** is the delay in network communication — the time data takes to be transferred. Networks with higher delays have high latency; fast networks have low latency.

---

## Applications of Blockchain

**DeFi (Decentralized Finance):** Enables global peer-to-peer financial transactions without traditional intermediaries like banks.

**Smart Contracts:** Self-executing programs that run on the blockchain. They allow agreements to be fulfilled automatically when predefined conditions are met.

**Transparent Voting & Governance:** Creating secure, fraud-proof electronic voting systems with immutable results.

**Digital Asset Ownership:** Through asset tokenization, creating decentralized markets for buying, selling, and trading digital assets (art, music, intellectual property).

**Decentralized Learning:** Platforms that connect students and educators directly, with blockchain-based certification systems.

**Digital Identity:** A more secure electronic representation of a persons identity, controlled by users themselves.
    `
  },
  {
    id: 'security',
    slug: 'security',
    title: 'Security',
    subtitle: 'Wallets & protection',
    tags: ['security', 'wallets', 'scam'],
    description: 'Cryptocurrency wallets, private keys, and how to protect yourself from scams.',
    related: ['blockchain', 'nfts'],
    content: `
# Security

## Cryptocurrency Wallets

A **wallet** is like a bank account for your digital currencies. Made to store crypto obtained through purchase, transfer, or mining/validation. Some wallets work only on a single blockchain; others support multiple networks.

Wallets are the primary way to **interact with Web3 sites and applications**.

---

## Security Keys

### Public Keys
Like bank account numbers — a sequence of numbers and letters generated randomly when creating a wallet. This is the information needed to transfer or receive digital assets. It appears in the block explorer. No one can alter or spend another users money with just this key.

### Private Keys
These are the passwords and seed phrases to access your wallets. Unlike public keys, **they must be kept secret in a safe physical location**.

**Password:** Used to log in to your wallet. Hardware wallets use PIN codes (Personal Identification Number).

**Seed Phrase (frase-semente):** The most important part of wallet security. With it, you can recover the same account on different devices — you can change the software or hardware but keep the same assets.

> ⚠️ **Critical:** This sequence of words generated when you create a wallet must be written down and stored securely. Once you lose your seed phrase, it is **impossible to recover your wallet**. There is no recovery system — you can only generate a new sequence while your wallet is accessed.

**These keys must never be stored in digital files, emails, or apps — this makes them vulnerable.**

---

## Types of Wallets

### Digital Wallet (Hot Wallet)
Software wallets used on desktop and mobile. No central institution or third party holds the funds. Commonly linked to trading platforms. Usually free and many use open-source code.

*Examples: Phantom (Solana), MetaMask (Ethereum), Temple (Tezos)*

### Hardware Wallet (Cold Wallet)
Physical devices that resemble USB drives. They also hold public and private keys for monitoring assets on blockchains. Frequently called "cold wallets" — not connected to the internet, which is the recommended state for long-term storage.

Can be purchased directly from manufacturers or specialized resellers. *Known brands: Ledger, Trezor, Ngrave, BC Vault, Ellipal.*

---

## Common Scams

Where theres money, there will always be people trying to exploit others. The key here is **prevention and constant alertness**. If something seems too good to be true, its a scam.

### Fake Collector Profiles on Instagram
Mostly targets artists without NFT experience. Fake profiles pretend to be collectors and message saying they want to buy works for a very high price, usually in Ethereum. They then ask you to pay a fee before finalizing the sale — and there was never a sale. Its a trap.

### Fake Work Proposals
Artists receive fraudulent messages disguised as work proposals (DeFi games, art commissions). The user sends a file claiming to be a game test or references. Once downloaded, it may be **malware** that scans your computer to invade the artists wallets.

### Fraudulent Sites Imitating Big Projects
Scammers create fake websites of popular projects. They spread these links on Discord and Twitter. When people try to purchase NFTs from these projects, the applications drain all the money in the wallets.

### Profiles Impersonating Artists
Fake profiles impersonate artists on NFT platforms. These can be reported directly on the platform or through official Discord channels. The NFT community usually identifies these scams as inconsistent information surfaces.

---

## Security Measures

- ✓ Dont click unknown links
- ✓ Dont open attachments from unknown profiles
- ✓ Dont connect your wallet to any site
- ✓ Be skeptical of exorbitant proposals
- ✓ Create direct, organized channels for negotiating work
- ✓ Use anti-phishing/spam browser extensions
- ✓ Research the users profile for reliable information
- ✓ If the supposed client insists they cant meet security requirements, walk away
- ✓ Never share your keys with anyone — store them in a secure physical location
- ✓ Change passwords regularly; its possible to "re-key" your wallet and generate a new seed phrase

**Recommended extensions:** Pocket Universe, Wallet Guard
    `
  },
  {
    id: 'nfts',
    slug: 'nfts',
    title: 'NFTs',
    subtitle: 'Non-fungible tokens',
    tags: ['nft', 'art', 'blockchain'],
    description: 'What NFTs are, how they work, metadata, dynamic NFTs, and how to create one.',
    related: ['blockchain', 'platforms', 'communities'],
    content: `
# NFTs

## What Are NFTs?

We can understand an NFT as the **digital certificate of ownership of an item**. This certificate is created and recorded on a blockchain network and can contain files, links, text, or code. As a unique digital asset, it cannot be replaced by another.

NFT stands for **Non-Fungible Token**.

> **Fungible** is a legal term for things that are replaceable — like cars, furniture, and money. **Non-fungible** is what cannot be replaced: artworks, real estate, or rare objects of which only a single copy remains.

---

## Metadata

NFT metadata is like labels with the properties or details of a digital asset. Common metadata includes:

- File description
- File name
- Categories
- Transaction history
- Date and time

**The metadata NFT exists as a separate entity and is not the same as the NFT itself.** Metadata is stored in a different location.

### On-chain vs Off-chain

**On-chain:** The NFTs information lives directly on the blockchain, integrated into the NFT itself.

**Off-chain:** Information lives on servers or cloud storage systems. The **InterPlanetary File System (IPFS)** is used in this case — a storage protocol that allows anyone to share files directly from their own computer. Metadata is usually stored off-chain as a JSON file.

After minting, the ID and contract address of an NFT cannot be changed. Metadata can be modified post-minting, but requires programming knowledge. Most NFTs have permanently immutable characteristics.

---

## Dynamic NFTs (dNFTs)

Dynamic NFTs, also known as "semi-fungible" or "living NFTs," are a type of NFT whose characteristics can change. Widely used in DeFi games (badges that change after completing a mission) and in art (pieces that evolve based on artist-defined rules).

**Example:** Basketball player LaMelo Balls dynamic NFTs incorporate sports data on-chain and change depending on game results.

**Real-world potential:** dNFTs could be used for the sale of physical goods — for example, a house NFT that initially shows its original characteristics, then updates after renovations and change of ownership years later.

---

## Compressed NFTs (cNFTs)

A unique type of token on the Solana Blockchain that allows multiple unique tokens to be grouped into a single account, greatly reducing creation costs. An economical alternative for mass minting of tokens, avoiding the high fees associated with traditional NFTs.

---

## How to Create an NFT

### Basic Setup Required
- A device (mobile or computer)
- Internet access

### General Step-by-Step

1. **Choose the Blockchain** — Which network fits your goals? (Ethereum, Solana, Tezos, etc.)
2. **Choose the Platform** — Where will you mint? (see Platforms section)
3. **Generate a file** — Your artwork, music, video, text, code...
4. **Mint the file on the platform** — Register it officially on-chain
5. **List the NFT** — Set price, edition, and conditions
6. **Share** — Build visibility through your community

---

## Why NFTs Matter for Artists

NFTs are an incredible tool for experimenting with new media and techniques. Since many file types can be minted, they open opportunities to produce in ways artists never could before — learning new software, digitizing physical works, and even programming are some of the paths artists are exploring.

The NFT space is also a fertile ground for **collaborative creation (collabs)** — collective artworks that seem easier to realize here than in traditional art worlds.
    `
  },
  {
    id: 'communities',
    slug: 'communities',
    title: 'NFT Communities',
    subtitle: 'Building connections',
    tags: ['community', 'nft', 'culture'],
    description: 'Types of NFT communities, how to join, social initiatives, and critical perspectives.',
    related: ['platforms', 'communication', 'marketing'],
    content: `
# NFT Communities

A **NFT community** is a digital group of people interested in NFTs, gathering to discuss, create, buy, sell, and exchange these tokens.

Communities are crucial in any NFT-related project — offering support and validation. Its impossible to thrive without community in this environment. They also serve as incubators for innovation and forums for education and NFT governance.

---

## Types of NFT Communities

**Project Communities:** Centered around a specific NFT project, like a digital art collection.

**Collector Communities:** Bring together people interested in collecting NFTs, regardless of the project.

**Artist Communities:** Focused on digital artists who create NFTs.

**Investor Communities:** Composed of people who invest in NFTs for profit.

---

## How to Participate in an NFT Community

1. Use the social platforms common in communities: Discord, Twitter/X, and Warpcast
2. Stay in contact with users — share news, answer questions, stimulate conversations. Dont be afraid to ask; seek and offer help when needed
3. Be consistent and patient — building a loyal community takes time and effort
4. Be authentic and transparent about your goals

---

## Tips for Beginners

1. **Dont trust easy money** — dont expect to become a millionaire in 2 weeks
2. Use NFT as a tool to showcase your work
3. Dont believe "drop your NFT here" posts — verify whether its a reliable collector or just time wasted (this is "engagement farming")
4. Never create the same artwork on different blockchains
5. Dont flood chats, servers, or posts with too many messages
6. Never save your keys in email or on your phone
7. Dont quit your day job 😅

---

## Artistic Experiments

The NFT space is still fertile ground — barely explored. Its up to us to uncover it consciously: planting good ideas without deforestation.

In NFT communities, its possible to promote projects virtually and in person — connecting with interested people more easily and aiming for fairer compensation.

### Collaborations (Collabs)
Something interesting about this medium: collective artworks are common. In the NFT world, this seems easier to achieve than in the physical world.

### Learning New Media
NFTs are an incredible tool for experimenting with new media and techniques. Learning new software, digitizing physical works, and even programming are some of the ways artists are learning to create.

---

## Events

NFT art events have helped many artists gain visibility more naturally than in the traditional art market. Through crypto art, its easier to exhibit works at events around the world. However, many of these events still happen in specific locations — Rio and São Paulo in Brazil, and the US and Europe in general — which can be difficult for artists from other regions, especially Latin America.

---

## Social Initiatives

NFTs are being explored not just as creative tools, but as agents of **positive social impact**.

**Example:** The **Balot NFT** initiative, led by the Congolese Plantation Workers Art League (CATPC), used NFT technology to reclaim cultural heritage and buy back lands stolen and damaged by plantation colonialism in the Congo. Each Balot NFT represents one hectare of land, and the funds raised are used to replant forests and reintroduce sustainable land governance.

---

## Utopia and Romanticism

Some artists question the social consequences of this new technology. Many blockchain users propagate utopian ideals — this can be called "toxic positivity."

The virtual environment is only an extension of our physical world — it obviously reflects and reproduces the social problems that exist in real life. The NFT scene is not exempt from politics.

> Every technology is a tool. The result of its use depends on who is using it. If there are no conscious attitudes for a more careful and ethical scene, the same problems will keep being repeated with the same people using technology in an exclusionary way.
    `
  },
  {
    id: 'platforms',
    slug: 'platforms',
    title: 'Platforms',
    subtitle: 'NFT marketplaces',
    tags: ['nft', 'platforms', 'tools'],
    description: 'An overview of NFT platforms across different blockchains.',
    related: ['nfts', 'communication', 'blockchain'],
    content: `
# NFT Platforms

Below is an overview of platforms available across different blockchains. This list is not exhaustive — explore the **DappRadar** website to discover platforms across many other networks.

---

## By Blockchain

### Ethereum & its L2s
- **Zora** — creator-focused, free minting
- **Super Rare** — curated 1/1 marketplace
- **Foundation** — invite-only curated platform
- **Manifold** — tools for creating custom smart contracts
- **Nifty Gateway** — drops and open editions
- **Rarible** — multi-chain, creator royalties focus
- **mint.fun** — simplified minting experience
- **Transient Labs** — artist-centric infrastructure

### Solana
- **3.land** — community and exhibition platform
- **Mallow** — curated art platform
- **Exchange Art** — curated digital art
- **Foster Protocol** — collaborative tools
- **Tensor** — trading and analytics
- **Magic Eden** — largest Solana marketplace
- **Truffle.wtf** — community-driven

### Tezos
- **Objkt** — largest Tezos marketplace
- **(fx)hash** — generative art platform
- **teia** — community-owned, artist-centered
- **EXA Market** — curated editions

### Algorand
- **Rand Gallery** — Algorand NFT marketplace
- **Dartroom** — curated digital art
- **Gems** — community platform

### Bitcoin Ordinals
- **Gamma** — Bitcoin NFT marketplace
- **Magic Eden** — also available on Bitcoin
- **Ordzaa** — ordinals community

### Avalanche
- **Hyperspace** — Avax NFT marketplace
- **Campfire** — social and trading
- **zeroone** — curated platform
- **Joepegs** — community marketplace

---

## How to Choose a Platform?

Consider these factors when choosing where to mint and sell:

**Blockchain Fees:** Some blockchains have very low fees (Tezos, Solana) while others are higher (Ethereum).

**Community:** Where is your audience? Different platforms attract different collector communities.

**Curation vs. Open:** Some platforms are open to anyone (Objkt, Magic Eden); others are curated and require an application process (Super Rare, Foundation).

**Type of Art:** Some platforms specialize in generative art (fx)hash), music NFTs, photography, or video.

**Mission Alignment:** Platforms like teia are community-owned and have different values than for-profit platforms.

> Remember: Platforms can change and even close — but this does not make NFTs disappear, as they exist on the blockchain. Always be experimenting with new possibilities and prepared to adapt.
    `
  },
  {
    id: 'communication',
    slug: 'communication',
    title: 'Communication Platforms',
    subtitle: 'Where communities live',
    tags: ['community', 'social', 'tools'],
    description: 'The social networks and communication tools that NFT communities use.',
    related: ['communities', 'marketing'],
    content: `
# Communication Platforms

NFT communities are built on essential social networks. These spaces are necessary to connect artists and collectors. While Instagram is not widely used for NFT community building specifically, audiences from these platforms often extend there.

---

## X (formerly Twitter)

Twitter remains one of the most used platforms to share NFTs. Many artists, traders, and crypto people have dedicated profiles and use it to interact and promote their work.

Despite Twitter stopping NFT profile pictures and making various changes that affected promotion, it remains an important network for the NFT world — especially for discovering new projects, following artists, and participating in conversations.

**Key practices:**
- Post consistently about your work and process
- Engage authentically with others posts
- Use relevant hashtags (#NFTart, #Web3, #SolanaNFT, etc.)
- Share behind-the-scenes and creative process content

---

## Discord

Discord is another essential space for NFT communities. Artists, investors, and collectors can connect, organize, and converse. Many NFT platforms, artists, and projects have their own Discord servers to communicate with their community.

**Typical server structure:**
- Announcement channels
- Art sharing channels
- Discussion and Q&A
- Events and drops
- Team/collector roles

**Tips:** Be active, helpful, and genuine. Avoid spamming your own work without engaging with others first.

---

## Warpcast / Farcaster

Warpcast is an application built by the Farcaster team — a **decentralized social network**. Warpcast can be used on mobile and desktop and focuses on crypto users.

Key characteristics:
- Annual subscription fee to use the platform
- Decentralized — your data is not owned by the platform
- Strong engagement from Web3 builders and artists
- "Channels" for organized topics (similar to subreddits)
- Growing art community

---

## Nostr

Nostr is a simple, open protocol that enables global, decentralized, censorship-resistant social media. Multiple networks use this protocol, making it a flexible foundation for community building without central control.

---

## Choosing Your Platforms

You dont need to be everywhere. Start with 1-2 platforms and build genuine connections before expanding. Consistency and authenticity matter more than volume.

| Platform | Best for | NFT Focus |
|----------|----------|-----------|
| X/Twitter | Broad reach, art sharing | High |
| Discord | Deep community building | Very High |
| Warpcast | Web3-native audience | High |
| Instagram | Visual portfolio | Medium |
| Nostr | Decentralization values | Growing |
    `
  },
  {
    id: 'marketing',
    slug: 'marketing',
    title: 'Marketing',
    subtitle: 'Sharing your work',
    tags: ['marketing', 'community', 'strategy'],
    description: 'Strategies for promoting your NFT work ethically and effectively.',
    related: ['communities', 'communication', 'platforms'],
    content: `
# Marketing

## 1. Build a Solid Identity

Develop a visual identity and maintain a consistent voice that represents your personality. Your identity should communicate: who you are, what you make, and why it matters.

This includes:
- Profile pictures (consider using your own NFT)
- Bio across platforms
- Consistent aesthetic and color palette
- Your artistic/research narrative

---

## 2. Be Active on Social Media

Maintaining an active presence on relevant networks is very important. Interact with your audience, share your work, and participate in conversations related to your field.

**What to share:**
- Works in progress
- Behind-the-scenes process
- Thoughts on technology and art
- Curated content from others you admire
- Announcements for drops and events

---

## 3. Organization is Fundamental

To effectively manage your presence in the NFT market, organization is key. Use post scheduling tools, maintain a launch calendar, and always pay attention to deadlines and opportunities.

---

## 4. Build Meaningful Connections

Establishing significant connections with other users is fundamental. Participate in groups, servers, and relevant communities. Collaborations and partnerships can expand visibility and reach.

**Authentic networking looks like:**
- Commenting genuinely on others work
- Participating in shared projects
- Showing up consistently in communities you care about
- Offering help before asking for it

---

## 5. Launch Frequency

Its possible to launch work at different frequencies — whether more elaborate projects that require time or quick creations from inspiration peaks. Both require energy but different kinds for their dissemination.

Find a rhythm thats sustainable for you. Burnout helps no one.

---

## 6. Pricing Strategies

**Dont devalue yourself!** Develop pricing strategies that are right for you and your NFTs. Factors that can directly impact sales and recognition:

- **Scarcity** — 1/1 vs. editions
- **Demand** — how developed is your audience?
- **Currency value** — crypto is volatile; price in USD equivalent can help
- **Your time and craft** — what is your work worth?

Research what artists you admire are charging. Prices will evolve as your community grows.

---

## 7. Stay Creative and Connected

Even in periods of slower sales, keep creating and staying connected with your audience. **Consistency and experimentation are essential** in the NFT market — they allow you to reinvent yourself as necessary to stay relevant.

---

## 8. Be Prepared for Change

Explore different platforms to market your NFTs. Know that many platforms may change and even close (which does not make NFTs disappear — remember, they live on the blockchain). Cryptocurrencies themselves can have drastic changes. Its crucial to keep experimenting with new possibilities and be prepared to adapt.

---

## Summary

Good marketing in the NFT space is not about shouting louder than everyone else. Its about:

- Being genuinely present in communities
- Sharing work that represents you authentically
- Building relationships before transactions
- Maintaining consistency over time
- Adapting without losing your artistic vision

> The most successful artists in this space didnt just mint and disappear. They built genuine connections, showed their process, and contributed to the community beyond their own promotion.
    `
  },
  {
    id: 'about',
    slug: 'about',
    title: 'About the Project',
    subtitle: 'Research & history',
    tags: ['research', 'ufpe', 'about'],
    description: 'The origin of the project, the research behind it, and the people who built it.',
    related: ['introduction', 'references'],
    content: `
# About the Project

**Computadores Fazem Arte** is an educational wiki about Blockchain, Web3, and NFTs — developed as part of a masters research in **Digital Artifact Design** at the Universidade Federal de Pernambuco (UFPE), funded by the MAI/DAI program of the CNPq.

---

## The Name

The projects name comes from a verse by **Fred Zero Quatro**, frontman of the legendary Recife band Mundo Livre S/A, from the song *Computadores Fazem Arte*. The verse captures something essential about the relationship between technology and artistic creation:

> "Computadores avançam / Artistas pegam carona / Cientistas criam o novo / Artistas levam a fama"

The song is both an observation and a provocation — and gave name to a project that tries to think critically about what it means for artists to inhabit technological spaces.

---

## The Song

[Ver video: https://www.youtube.com/watch?v=KZg_m0z4NLI]

---

## Scientific Initiation — Undergraduate Researchers

As part of the research, three undergraduate students were mentored across different areas of knowledge — a deliberate interdisciplinary choice that reflects the projects own values.

### Milena — Pedagogy
Brought an educational lens to the project, helping think through how complex technological concepts could be made accessible to diverse audiences.

### Vitória — Design
Contributed a visual and communicational perspective, essential for shaping how the wiki and its materials are presented.

### Artur — Computer Science · *in memoriam*
Artur joined the research as a volunteer — entirely out of his own curiosity and enthusiasm. He was one of the most engaged and active participants in the project, bringing technical rigor and genuine excitement to every meeting. His presence left a mark on this research that cannot be measured. This project carries a piece of him.

---

## Presential Course — CTG/UFPE, 2024

In 2024, a four-week presential course was held at the Centro de Tecnologia e Geociências (CTG) of UFPE — bringing together students from different areas to learn about Blockchain, NFTs, and digital art communities.

The courses closing was interrupted by the **blocking of Twitter/X in Brazil** — a moment that became part of the projects own story. Rather than a disruption, it turned into a live case study: a reminder that the same platforms that host digital art communities are subject to political decisions, regulatory pressures, and corporate power.

The regulation of social media platforms is not a secondary topic — it is central to any honest conversation about digital rights, freedom of expression, and the conditions under which artists create and distribute their work. Platforms must be held accountable for guaranteeing users fundamental rights.

---

## Publication — WebMedia 2024

The material was published and presented at **WebMedia 2024**, held at the Universidade Federal de Juiz de Fora (UFJF) — one of the most important Brazilian conferences on multimedia systems and web technologies.

[Access the publication →](https://books-sol.sbc.org.br/index.php/sbc/catalog/view/177/779/1513)

---

## Guest Lecture — Design for Web3, UFPE 2025

In 2025, an invitation from **Professor Leonardo Castillo** led to a module called *Design para Web3* within the Design undergraduate course at UFPE — bringing this projects content directly into formal design education.

---

## Contact

**Numa** · [@numadessas](https://twitter.com/numadessas) · [contato@numadessas.com.br](mailto:contato@numadessas.com.br) · [numadessas.com.br](https://numadessas.com.br)
    \`
  },
  {
    id: 'references',
    slug: 'references',
    title: 'References',
    subtitle: 'Bibliography',
    tags: ['research', 'bibliography'],
    description: 'Academic and online references used in this wiki.',
    related: ['introduction'],
    content: `
# References

## Academic Works

**BEUTIN, Nikolas; BORAN, Daniel.** The Great Web 3.0 Glossary. 2023, Fachmedien Recht und Wirtschaft.

**RENÉ G., MAPES D.** The Spatial Web: How Web 3.0 Will Connect Humans, Machines and AI to Transform the World. Author Edition, 2019.

**LIMA, Júnior César de; CARVALHO, Cedric L. de.** Uma Visão da Web Semântica. 2004, UFG.

**PANDA, Sandeep Kumar; ELNGAR, Ahmed A.; BALAS, Valentina Emilia; KAYED, Mohammed.** Bitcoin and Blockchain: History and Current Applications. 2020, CRC Press.

**MENOTTI, Gabriel.** Criptoarte: A Metafísica do NFT e a Tecnocolonização da Autenticidade. 2021, Revista do Centro de Pesquisa e Formação / No 13.

**ASSANGE, Julian et al.** Cypherpunks: Liberdade e o Futuro da Internet. Tradução Cristina Yamagami. São Paulo: Boitempo, 2013.

**KENT, Charlotte.** How Artists Are Seizing the NFT Moment to Transform the Debate About Tech and the Environment. *Artnet.*

**KENT, Charlotte.** Blockchain manifestos: fighting for the imagination of a culture. 2021, Burlington Contemporary Journal.

**AL-SAQAF, Walid; SEIDLER, Nicolas.** Blockchain technology for social impact: opportunities and challenges ahead. 2017, Journal of Cyber Policy, Routledge Taylor & Francis Group.

---

## Online Resources

- [CoinMarketCap Glossary](https://coinmarketcap.com/academy/en/glossary)
- [World Wide Web Consortium (W3C)](https://www.w3.org/)
- [Web3 Foundation](https://web3.foundation/)
- [IBM — What is Machine Learning?](https://www.ibm.com/br-pt/topics/machine-learning)
- [Chainlink — What is a Dynamic NFT?](https://chain.link/education-hub/what-is-dynamic-nft)
- [Binance — What are NFT Metadata?](https://www.binance.com/pt-BR/blog/nft/)
- [DappRadar — NFT Platform Overview](https://dappradar.com/)

---

## About this Project

This wiki was developed by **Numa** ([@numadessas](https://twitter.com/numadessas)) as part of masters research in Digital Artifact Design at UFPE, funded by CNPqs MAI/DAI program.

Contact: [contato@numadessas.com.br](mailto:contato@numadessas.com.br)

*Content is freely available for distribution.*
    `
  }
]

// Flat glossary for search
export const allTerms = wikiSections
  .filter(s => s.glossaryTerms)
  .flatMap(s => s.glossaryTerms)

export const allTags = [...new Set(wikiSections.flatMap(s => s.tags))]

export const getSectionBySlug = (slug) => wikiSections.find(s => s.slug === slug)
export const getRelatedSections = (slugs) => slugs.map(slug => wikiSections.find(s => s.slug === slug)).filter(Boolean)
