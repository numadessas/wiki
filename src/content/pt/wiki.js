// Conteúdo do wiki em Português
export const wikiSections = [
  {
    id: 'introduction',
    slug: 'introduction',
    title: 'Introdução',
    subtitle: 'Sobre este wiki',
    tags: ['visão geral', 'web3', 'nft'],
    description: 'O que é Computadores Fazem Arte e por que este conhecimento importa.',
    related: ['glossary', 'internet-generations'],
    content: `
# Introdução

Para começar a conversar sobre NFTs, precisamos pensar antes em alguns termos-chave que fazem parte deste universo. Nesta formação, tem conteúdo das técnicas e práticas para criar obras de arte no mercado de NFTs.

Esse projeto tem como principal objetivo incentivar mais pessoas a aprenderem a utilizar tecnologia Blockchain — também encorajar uma conversa séria sobre como as comunidades virtuais devem ser mais conscientes e dessa forma contribuir socialmente para o espaço físico.

---

Vamos falar sobre **Blockchain**, **cripto**, **comunidades digitais** e outros conceitos básicos para que você tenha autonomia e encorajamento inicial para criar suas obras e projetos NFTs.

> "Computadores avançam / Artistas pegam carona / Cientistas criam o novo / Artistas levam a fama" — *Fred Zero Quatro*

## Por que isso importa

Este não é apenas um manual técnico. É um convite para pensar criticamente sobre tecnologia, arte e comunidade. O espaço das NFTs ainda é uma terra fértil — pouco explorada. Cabe a nós navegar nela de forma consciente: plantando boas ideias, sem desmatar.

## Quem fez isso?

Este material didático foi desenvolvido por **Numa** como parte integrante da pesquisa de mestrado em Design de Artefatos Digitais na Universidade Federal de Pernambuco (UFPE), financiada pelo programa MAI/DAI do Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq) e apoio da comunidade artística de NFTs.

O conteúdo está disponível para **distribuição livre e gratuita**.
    `
  },
  {
    id: 'glossary',
    slug: 'glossary',
    title: 'Glossário',
    subtitle: 'Termos essenciais',
    tags: ['referência', 'terminologia'],
    description: 'Vocabulário essencial para navegar no espaço Web3 e NFTs.',
    related: ['introduction', 'blockchain'],
    isGlossary: true,
    content: `
Vocabulário essencial para navegar no espaço Web3 e NFTs. Clique em qualquer termo para expandir sua definição.
    `,
    glossaryTerms: [
      { term: 'DYOR', definition: '"Do Your Own Research" — expressão para falar que cada um precisa fazer sua pesquisa, pois investir em cripto é algo muito volátil. O que dá certo para uma pessoa não necessariamente é o que dá para outra.' },
      { term: 'FOMO', definition: '"Fear Of Missing Out" — medo de perder uma oportunidade. Muito comum em mercados voláteis, pode levar a decisões impulsivas.' },
      { term: 'WAGMI', definition: '"We\'re All Gonna Make It" — expressão otimista usada nas comunidades NFT, algo como "nós vamos conseguir".' },
      { term: 'Genesis', definition: 'Primeira NFT que alguém lança em alguma rede/plataforma. Termo inspirado pelo "genesis block", que é o primeiro bloco minerado de uma blockchain.' },
      { term: 'Hash', definition: 'Sequência única de caracteres gerada a partir de dados de transações usando uma função matemática especial. Nas blockchains, os hashes verificam a integridade dos dados e conectam os blocos de forma segura.' },
      { term: 'Node / Nó', definition: 'Computador que faz parte da estrutura de uma rede Blockchain. Cada nó tem uma cópia idêntica de todas as transações que ocorreram na rede.' },
      { term: 'Nonce', definition: 'Abreviação de "número usado uma vez" — número gerado aleatoriamente e usado uma só vez em uma transação criptográfica.' },
      { term: 'Queimar / Burn NFT', definition: 'Processo para tornar uma NFT inutilizada. Não é possível deletar uma NFT da blockchain, então essa ação é usada quando existe necessidade de "remover" uma NFT de circulação.' },
      { term: 'Scam', definition: 'Termo em inglês para golpe, fraude. Muito comum no espaço cripto — desconfie sempre de propostas boas demais.' },
      { term: 'Phishing', definition: 'Tipo de golpe virtual que rouba informações pessoais e financeiras, geralmente através de sites falsos ou mensagens que imitam serviços legítimos.' },
      { term: 'NFA', definition: '"No Financial Advice" — expressão usada quando alguém fala sobre algum projeto/moeda, indicando que cada pessoa deve ter sua própria avaliação financeira.' },
      { term: 'IRL', definition: '"In Real Life" — na vida real. Usado para a vida que acontece fora da internet.' },
      { term: 'Navegador de Blocos', definition: 'Plataforma onde é possível acessar uma blockchain publicamente em tempo real. Cada rede possui um ou mais navegadores de blocos (ex: Solscan para Solana).' },
      { term: 'Whitepaper', definition: 'Documento que explica os objetivos e tecnologias de um projeto cripto. É uma necessidade crucial para que projetos sejam considerados genuínos e profissionais.' },
      { term: 'Mintagem / Minting', definition: 'Processo de criar e registrar uma NFT em uma blockchain — tornando-a um ativo digital oficial e verificável.' },
      { term: 'GM / GN', definition: '"Good Morning" / "Good Night" — saudações comuns nas comunidades NFT e cripto para criar conexão diária.' },
      { term: 'Flood', definition: 'Mandar muitas mensagens sobre uma mesma coisa, chegando a ser uma poluição visual em chats e servidores.' },
    ]
  },
  {
    id: 'internet-generations',
    slug: 'internet-generations',
    title: 'Gerações da Internet',
    subtitle: 'Web1, Web2, Web3',
    tags: ['web3', 'história', 'tecnologia'],
    description: 'Das páginas estáticas às redes semânticas e descentralizadas.',
    related: ['blockchain', 'introduction'],
    content: `
# Gerações da Internet

Antes de tudo, é importante aprender sobre as três gerações existentes (até o momento) da internet e que categorizam como a interação nesse espaço acontece.

É possível encontrar conteúdo sobre isso se referindo como "eras", em um sentido mais temporal. Mas é interessante pensar não sobre um determinado espaço de tempo, pois vivemos em um momento onde a Web 2 e a Web3 existem simultaneamente — cada geração não são coisas à parte, mas apenas continuações da web que já conhecemos.

---

## Web 1.0 — A Internet Simples

A primeira fase da Internet surgiu nos **anos 90** e consistia em páginas com hiperlinks. Os sites eram principalmente informativos com layouts muito básicos, pouquíssimos recursos multimídia e a maioria do conteúdo baseado em texto.

Só era possível acessar, ler e mudar de página — com pouca ou nenhuma interação ou ferramenta de feedback. *Read-only.*

**Características:** largura de banda limitada · dispositivos limitados (somente desktop) · nenhuma interação real

## Web 2.0 — A Internet Social

Surgiu por volta de **2004** — é a fase da Internet que trouxe mais conteúdo gerado pelo usuário e recursos visuais. Os usuários puderam compartilhar mais informações entre si e se conectar mais facilmente.

A Web 2.0 é marcada por maior interatividade e colaboração entre usuários. Essa fase viu o crescimento de plataformas de mídia social, blogs e outras ferramentas — mas com **plataformas centralizadas** (Google, Facebook, Instagram) detendo os dados dos usuários.

## Web3 — A Internet Semântica

A partir de **2008**, quando a tecnologia Blockchain entrou em ação através do Bitcoin. Os princípios da Web3 têm a intenção de permitir que os usuários possuam seus próprios dados, ao invés de empresas.

Conhecida também como **Web Semântica**, pois tem o objetivo de tornar a informação "compreensível" para o computador — através do machine learning.

A ideia de **trustless** das Blockchains é: ao invés de confiar em pessoas ou instituições, confiar totalmente na tecnologia.

> ⚠️ Apesar disso, muitos discursos sobre Blockchain estão ligados a ideias neoliberais. Mesmo com o ideal sobre descentralização e promessas antiautoritárias, as Blockchains na prática concentram poder nas mãos de poucos desenvolvedores e mineradores. — *MENOTTI, 2021*
    `
  },
  {
    id: 'blockchain',
    slug: 'blockchain',
    title: 'Tecnologia Blockchain',
    subtitle: 'Como funciona',
    tags: ['blockchain', 'tecnologia', 'história'],
    description: 'Livros digitais descentralizados, mecanismos de consenso, estrutura de blocos e aplicações.',
    related: ['security', 'nfts', 'internet-generations'],
    content: `
# Tecnologia Blockchain

## O que é Blockchain?

As Blockchains são como **"livros de registros" digitais e descentralizados**. Redes online onde os dados são salvos nos computadores de cada usuário da Blockchain, não apenas em um só servidor, como as plataformas da web 2.0.

Uma analogia útil: a blockchain é como uma grande **planilha compartilhada** replicada em milhares de computadores. Cada linha representa uma transação (um bloco). Essa planilha é atualizada constantemente e cada nó verifica cada nova entrada.

---

## História

A tecnologia Blockchain teve suas origens em **1991**, quando Stuart Haber e W. Scott Stornetta publicaram um artigo sobre como colocar um carimbo de data e hora em documentos digitais de forma segura. Em 2008, *Satoshi Nakamoto* publicou o artigo do Bitcoin, e em 2009 o primeiro bloco foi minerado.

---

## Como funciona uma Blockchain?

**1. Usuário Solicita Transação** — codificada em um bloco com remetente, destinatário e valor.

**2. Transação transmitida para a rede** — todos os nós verificam a validade.

**3. Processo de consenso** — os nós concordam qual bloco adicionar (mineração/validação).

**4. Transação finalizada** — adicionada imutavelmente à cadeia. Não pode ser alterada ou revertida.

---

## Mecanismos de Consenso

| Mecanismo | Descrição | Exemplos |
|-----------|-----------|---------|
| **Prova de Trabalho (PoW)** | Mineradores competem para resolver problemas matemáticos complexos | Bitcoin, Litecoin |
| **Prova de Participação (PoS)** | Validadores escolhidos pela quantidade de cripto em stake | Ethereum, Solana, Cardano |
| **Prova de Autoridade (PoA)** | Validadores pré-selecionados e autorizados | Binance Coin, XRP |

---

## Propriedades da Blockchain

**Descentralização:** Sem autoridade central — o controle é distribuído entre todos os participantes da rede.

**Transparência:** Todas as transações são públicas e rastreáveis via navegadores de blocos.

**Imutabilidade:** Uma vez registrado, o dado não pode ser alterado. Erros exigem criar um novo registro e queimar o incorreto.

**Anonimato:** Usuários têm endereços públicos (não identidade pessoal). O anonimato existe sem comprometer a transparência.

---

## Camadas das Blockchains

| Camada | Função | Exemplos |
|--------|--------|---------|
| L0 | Infraestrutura, interoperabilidade | Polkadot, Cosmos |
| L1 | Blockchains principais, consenso | Bitcoin, Ethereum, Solana |
| L2 | Escalabilidade, redução de taxas | Optimism, Polygon, Arbitrum |
| L3 | Camada de aplicação cross-chain | IBC Protocol, Quant |
    `
  },
  {
    id: 'security',
    slug: 'security',
    title: 'Segurança',
    subtitle: 'Carteiras e proteção',
    tags: ['segurança', 'carteiras', 'golpe'],
    description: 'Carteiras de criptomoedas, chaves privadas e como se proteger de golpes.',
    related: ['blockchain', 'nfts'],
    content: `
# Segurança

## Carteiras de Criptomoedas

A **carteira (wallet)** é como uma conta bancária para suas moedas digitais. Feita para armazenar cripto obtida através de compra, transferência ou mineração/validação. É o principal meio de interagir com sites e aplicativos da Web3.

---

## Chaves de Segurança

**Chaves Públicas:** Como os números das contas bancárias — uma sequência de números e letras gerada aleatoriamente ao criar uma carteira. É a informação necessária para transferir ou receber ativos digitais. Seguro compartilhar.

**Chaves Privadas / Frase-Semente:** Devem ser mantidas em sigilo e local físico seguro. A *frase-semente* é a parte mais importante da segurança — com ela é possível recuperar a mesma conta em diferentes dispositivos.

> ⚠️ **Crítico:** Essas chaves não devem ser mantidas de maneira nenhuma em arquivos digitais ou e-mails. Uma vez que você perder a seed-phrase, é **impossível** resgatar sua carteira. Não existe sistema de recuperação.

---

## Tipos de Carteiras

**Carteira Digital (Hot Wallet):** Software usado em desktop e mobile, conectado à internet. Indicada para interações e operações casuais. Exemplos: Phantom (Solana), MetaMask (Ethereum), Temple (Tezos).

**Carteira de Hardware (Cold Wallet):** Dispositivo físico que se assemelha a um pen drive, não conectado à internet. Recomendado para armazenamento de longo prazo. Marcas: Ledger, Trezor, Ngrave.

---

## Golpes Comuns

**Perfis Falsos no Instagram:** Se passam por colecionadores e oferecem preços altos pela sua obra, depois pedem uma "taxa" para finalizar a venda — que nunca acontece.

**Propostas de Trabalho Falsas:** Oferecem comissões ou testes de jogos com arquivos infectados com malware que vasculham o computador para invadir carteiras.

**Sites Fraudulentos:** Clones de projetos populares. Quando você conecta sua carteira, drenam todos os fundos.

---

## Medidas de Segurança

✓ Não clique em links desconhecidos &nbsp;·&nbsp; ✓ Não abra anexos de perfis desconhecidos &nbsp;·&nbsp; ✓ Não conecte sua carteira em qualquer site &nbsp;·&nbsp; ✓ Duvide de propostas muito exorbitantes &nbsp;·&nbsp; ✓ Nunca compartilhe suas chaves &nbsp;·&nbsp; ✓ Armazene em local físico seguro &nbsp;·&nbsp; ✓ Use extensões anti-phishing (Pocket Universe, Wallet Guard)
    `
  },
  {
    id: 'nfts',
    slug: 'nfts',
    title: 'NFTs',
    subtitle: 'Tokens não fungíveis',
    tags: ['nft', 'arte', 'blockchain'],
    description: 'O que são NFTs, como funcionam, metadados, NFTs dinâmicos e como criar um.',
    related: ['blockchain', 'platforms', 'communities'],
    content: `
# NFTs

## O que são NFTs?

Podemos entender **NFT** como o **certificado digital de propriedade de um item**. Esse certificado é criado e registrado em uma rede Blockchain e pode conter arquivos, links, texto ou códigos. Como um ativo digital único, não pode ser substituído por outro.

NFT significa **Non-Fungible Token** (ficha não fungível).

> **Fungível** é um termo jurídico para definir coisas substituíveis — como automóveis, móveis e dinheiro. **Infungível** é o que não se pode substituir: obras de arte, bens imóveis, ou objetos raros dos quais restam um único exemplar.

---

## Metadados

Metadados NFT são como etiquetas com as propriedades ou detalhes de um ativo digital: descrição do arquivo, nome, categorias, histórico de transações, data e hora.

**On-chain:** A informação fica diretamente na rede Blockchain, integrada ao próprio NFT — mais permanente.

**Off-chain:** A informação fica em servidores ou sistemas de armazenamento em nuvem (IPFS). A maioria dos metadados é armazenada off-chain como arquivo JSON.

---

## NFTs Dinâmicos (dNFTs)

NFTs cujas características podem *mudar* — também conhecidos como "semi fungíveis" ou "NFT vivo." Bastante usados em jogos DeFi (insígnias que evoluem) e nas artes (peças que mudam conforme regras definidas pelo artista).

Exemplo: Os NFTs do jogador de basquete **LaMelo Ball** incorporam dados esportivos na rede e mudam dependendo do resultado dos jogos.

---

## NFTs Comprimidos (cNFTs)

Um tipo único de token na Blockchain Solana que permite agrupar vários tokens únicos em uma única conta, reduzindo muito os custos de criação. Uma alternativa econômica para mintagem em massa.

---

## Como fazer NFT

**Passo 1:** Escolher a Blockchain (Ethereum, Solana, Tezos...)

**Passo 2:** Escolher a Plataforma (veja seção Plataformas)

**Passo 3:** Gerar um arquivo (sua arte, música, vídeo, código...)

**Passo 4:** Mintar o arquivo na Plataforma

**Passo 5:** Listar a NFT (preço, edição, condições)

**Passo 6:** Divulgação — construa visibilidade pela sua comunidade
    `
  },
  {
    id: 'communities',
    slug: 'communities',
    title: 'Comunidades NFT',
    subtitle: 'Construindo conexões',
    tags: ['comunidade', 'nft', 'cultura'],
    description: 'Tipos de comunidades, como participar, iniciativas sociais e perspectiva crítica.',
    related: ['platforms', 'communication', 'marketing'],
    content: `
# Comunidades NFT

Uma **comunidade NFT** é um grupo digital de pessoas interessadas em NFTs, que se reúnem para discutir, criar, comprar, vender e trocar esses tokens.

As comunidades são cruciais em qualquer projeto relacionado à NFT — é impossível prosperar sem comunidade nesse ambiente. Também servem como incubadoras para inovação e fóruns para educação e governança.

---

## Tipos de Comunidades NFT

**Comunidades de projeto:** Centradas em torno de um projeto NFT específico, como uma coleção de arte digital.

**Comunidades de colecionadores:** Reúnem pessoas interessadas em colecionar NFTs, independentemente do projeto.

**Comunidades de artistas:** Focadas em artistas digitais que criam NFTs.

**Comunidades de investidores:** Compostas por pessoas que investem em NFTs com fins lucrativos.

---

## Como participar

1. Utilize as plataformas sociais comuns: Discord, Twitter/X e Warpcast
2. Mantenha contato com os usuários — compartilhe novidades, responda perguntas, estimule conversas
3. Seja consistente e paciente — construir uma comunidade leal leva tempo e esforço
4. Seja autêntico e transparente sobre seus objetivos

---

## Dicas para iniciantes

1. Não confie em dinheiro fácil — não espere ser milionário em 2 semanas
2. Use NFT como uma ferramenta para mostrar seu trabalho
3. Não acredite em postagens do tipo "deixe seu NFT aqui" (engagement farm)
4. Nunca crie a mesma arte em Blockchains diferentes
5. Não inunde bate-papos com mensagens demais
6. Não salve suas chaves no e-mail ou telefone
7. Não saia do seu emprego 😅

---

## Iniciativas Sociais

As NFTs estão sendo exploradas não apenas como ferramentas de criação, mas também como **agentes de impacto social positivo**.

A iniciativa **Balot NFT**, liderada pela Congolese Plantation Workers Art League (CATPC), usou a tecnologia NFT para reivindicar o patrimônio cultural e comprar de volta terras roubadas pelo plantation no Congo. Cada NFT Balot representa um hectare de terra, e os fundos são usados para replantar florestas.

---

## Perspectiva Crítica

> O ambiente virtual é apenas uma extensão do nosso mundo físico — obviamente reflete e reproduz os problemas sociais existentes na vida real. O cenário das NFTs não é isento de política. Toda tecnologia é uma ferramenta. O resultado do seu uso vai de quem estiver utilizando-a.
    `
  },
  {
    id: 'platforms',
    slug: 'platforms',
    title: 'Plataformas',
    subtitle: 'Marketplaces de NFT',
    tags: ['nft', 'plataformas', 'ferramentas'],
    description: 'Uma visão geral das plataformas de NFT em diferentes blockchains.',
    related: ['nfts', 'communication', 'blockchain'],
    content: `
# Plataformas de NFTs

Abaixo está uma visão geral de plataformas disponíveis em diferentes blockchains. Explore o **DappRadar** para descobrir plataformas em muitas outras redes.

---

## Ethereum e suas L2s
- **Zora** — focada em criadores, mintagem gratuita
- **Super Rare** — marketplace curado de obras 1/1
- **Foundation** — plataforma curada por convite
- **Manifold** — ferramentas para contratos inteligentes personalizados
- **Rarible** — multi-chain, foco em royalties para criadores

## Solana
- **3.land** — comunidade e exposições
- **Exchange Art** — arte digital curada
- **Magic Eden** — maior marketplace de Solana
- **Tensor** — trading e análises

## Tezos
- **Objkt** — maior marketplace de Tezos
- **(fx)hash** — arte generativa
- **teia** — community-owned, centrada em artistas

## Bitcoin Ordinals
- **Gamma** · **Magic Eden** · **Ordzaa**

---

## Como escolher uma plataforma?

**Taxas:** Tezos e Solana têm taxas muito baixas; Ethereum é mais alta.

**Comunidade:** Diferentes plataformas atraem diferentes comunidades de colecionadores.

**Curadoria:** Abertas (Objkt, Magic Eden) vs. curadas (Super Rare, Foundation).

**Missão:** teia é community-owned; outras plataformas são comerciais.

> Lembre-se: plataformas podem mudar e até fechar — mas as NFTs permanecem na blockchain. Esteja sempre preparada para se adaptar.
    `
  },
  {
    id: 'communication',
    slug: 'communication',
    title: 'Plataformas de Comunicação',
    subtitle: 'Onde as comunidades vivem',
    tags: ['comunidade', 'social', 'ferramentas'],
    description: 'As redes sociais e ferramentas de comunicação que as comunidades NFT usam.',
    related: ['communities', 'marketing'],
    content: `
# Plataformas de Comunicação

As comunidades NFTs se constroem em redes sociais essenciais. Estes espaços são necessários para conectar artistas e colecionadores. Embora o Instagram não seja tão utilizado para essa finalidade, a audiência dessas plataformas pode se estender para lá.

---

## X (Antigo Twitter)

Uma das plataformas mais usadas para divulgar NFTs. Muitos artistas, traders e pessoas do meio cripto têm perfis dedicados a esse assunto. Apesar das mudanças recentes, ainda é uma rede importante para o mundo das NFTs — especialmente para descobrir projetos, seguir artistas e participar de conversas.

**Boas práticas:**
- Poste consistentemente sobre seu trabalho e processo
- Engaje autenticamente com posts de outras pessoas
- Use hashtags relevantes (#NFTart, #Web3, #SolanaNFT)
- Compartilhe bastidores e processo criativo

---

## Discord

Outro lugar essencial para as comunidades de NFTs. Artistas, investidores e colecionadores podem se conectar, organizar e conversar. Muitas plataformas de NFTs, artistas e projetos têm seus próprios servidores no Discord.

**Estrutura típica de servidor:** canais de anúncios · compartilhamento de arte · discussão e perguntas · eventos e drops · cargos de time/colecionadores

---

## Warpcast / Farcaster

Aplicativo feito pela equipe do projeto Farcaster — uma **rede social descentralizada**. Pode ser usado em celulares e computadores e tem foco em usuários do meio cripto.

- Valor anual para usar a plataforma
- Descentralizado — seus dados não pertencem à plataforma
- Forte engajamento de builders e artistas Web3
- "Canais" para tópicos organizados

---

## Nostr

Protocolo simples e aberto que permite mídias sociais globais, descentralizadas e resistentes à censura. Existem várias redes que utilizam esse protocolo.

---

## Escolhendo suas plataformas

Você não precisa estar em todo lugar. Comece com 1-2 plataformas e construa conexões genuínas antes de expandir. **Consistência e autenticidade importam mais do que volume.**
    `
  },
  {
    id: 'marketing',
    slug: 'marketing',
    title: 'Marketing',
    subtitle: 'Divulgando seu trabalho',
    tags: ['marketing', 'comunidade', 'estratégia'],
    description: 'Estratégias para promover seu trabalho NFT de forma ética e eficaz.',
    related: ['communities', 'communication', 'platforms'],
    content: `
# Marketing

## 1. Crie uma Identidade Sólida

Desenvolva uma identidade visual e tenha um discurso consistente que representem sua personalidade. Inclui: foto de perfil, bio nas plataformas, estética e paleta visual, sua narrativa artística/de pesquisa.

---

## 2. Seja Ativo nas Redes Sociais

Manter uma presença ativa nas redes sociais relevantes é muito importante. Interaja com sua audiência, compartilhe seu trabalho e participe de conversas relacionadas à sua área.

**O que compartilhar:** obras em processo · bastidores · reflexões sobre tecnologia e arte · curadoria de conteúdo de quem você admira · anúncios de drops e eventos

---

## 3. Organização é Fundamental

Para gerenciar efetivamente sua presença no mercado de NFTs, é importante se organizar. Utilize ferramentas de agendamento de postagens, mantenha um calendário de lançamentos e esteja sempre atento aos prazos e oportunidades.

---

## 4. Construa Conexões Importantes

Estabelecer conexões significativas com outros usuários é fundamental. Comente genuinamente no trabalho de outras pessoas. Participe de projetos compartilhados. Apareça consistentemente em comunidades que você se importa. Ofereça ajuda antes de pedir.

---

## 5. Frequência de Lançamentos

É possível lançar trabalhos com diferentes frequências — seja projetos mais elaborados que demandam tempo ou criações rápidas de picos de inspiração. Ambos exigem energia, mas de formas distintas.

Encontre um ritmo sustentável para você. **Burnout não ajuda ninguém.**

---

## 6. Estratégias de Precificação

**Não se desvalorize!** Desenvolva estratégias de precificação adequadas para você e suas NFTs. Fatores que impactam diretamente nas vendas: escassez, demanda, valor da moeda e seu tempo e ofício.

---

## 7. Mantenha-se Criativo e Conectado

Mesmo em períodos de vendas mais lentas, continue criando e mantendo-se conectado com sua audiência. A constância e a experimentação são essenciais no mercado de NFTs.

---

## 8. Esteja Preparado para Mudanças

Explore diferentes plataformas. Muitas podem mudar e até fechar — o que não faz que as NFTs sumam, afinal estão na blockchain. As próprias moedas podem ter mudanças drásticas. É crucial estar sempre experimentando novas possibilidades.

> Bom marketing no espaço NFT é sobre ser genuinamente presente, compartilhar autenticamente, construir relações antes de transações e manter consistência ao longo do tempo.
    `
  },
  {
    id: 'references',
    slug: 'references',
    title: 'Referências',
    subtitle: 'Bibliografia',
    tags: ['pesquisa', 'bibliografia'],
    description: 'Referências acadêmicas e online utilizadas neste wiki.',
    related: ['introduction'],
    content: `
# Referências

## Obras Acadêmicas

**MENOTTI, Gabriel.** Criptoarte: A Metafísica do NFT e a Tecnocolonização da Autenticidade. 2021, Revista do Centro de Pesquisa e Formação / No 13.

**ASSANGE, Julian et al.** Cypherpunks: Liberdade e o Futuro da Internet. Tradução Cristina Yamagami. São Paulo: Boitempo, 2013.

**PANDA, Sandeep Kumar et al.** Bitcoin and Blockchain: History and Current Applications. 2020, CRC Press.

**AL-SAQAF, Walid; SEIDLER, Nicolas.** Blockchain technology for social impact: opportunities and challenges ahead. 2017, Journal of Cyber Policy.

**KENT, Charlotte.** Blockchain manifestos: fighting for the imagination of a culture. 2021, Burlington Contemporary Journal.

**LIMA, Júnior César de; CARVALHO, Cedric L. de.** Uma Visão da Web Semântica. 2004, UFG.

---

## Recursos Online

- [Glossário CoinMarketCap](https://coinmarketcap.com/academy/en/glossary)
- [Web3 Foundation](https://web3.foundation/)
- [Chainlink — O que é um NFT Dinâmico?](https://chain.link/education-hub/what-is-dynamic-nft)
- [DappRadar — Plataformas NFT](https://dappradar.com/)

---

## Sobre este Projeto

Este wiki foi desenvolvido por **Numa** ([@numadessas](https://twitter.com/numadessas)) como parte integrante da pesquisa de mestrado em Design de Artefatos Digitais na UFPE, financiada pelo programa MAI/DAI do CNPq.

Contato: [contato@numadessas.com.br](mailto:contato@numadessas.com.br) &nbsp;·&nbsp; Conteúdo disponível para distribuição livre e gratuita.
    `
  }
]

export const allTags = [...new Set(wikiSections.flatMap(s => s.tags))]
export const getSectionBySlug = (slug) => wikiSections.find(s => s.slug === slug)
export const getRelatedSections = (slugs) => slugs.map(slug => wikiSections.find(s => s.slug === slug)).filter(Boolean)
