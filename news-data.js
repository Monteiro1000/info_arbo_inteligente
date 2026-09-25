/**
 * ====================================================================
 * BASE DE DADOS DO BLOG / NOTÍCIAS - ARBORIZAÇÃO INTELIGENTE
 * ====================================================================
 * 
 * Para publicar uma nova notícia no site, basta adicionar um novo objeto
 * no início do array `BLOG_POSTS` abaixo!
 * 
 * Campos disponíveis para cada publicação:
 * - id: Identificador único (usado no link direto, ex: "meu-novo-post")
 * - title: Título da notícia
 * - category: Categoria em minúsculas ("tecnologia", "sustentabilidade", "inovacao", "comunidade", "pesquisa")
 * - badge: Nome de exibição da categoria (ex: "Tecnologia", "Sustentabilidade")
 * - date: Data da publicação (ex: "20 de Setembro, 2024")
 * - readTime: Estimativa de leitura (ex: "3 min de leitura")
 * - author: Nome do autor ou equipe (ex: "Equipe Arbo", "Laboratório de IA")
 * - image: Caminho da imagem (ex: "assets/logo.png" ou URL externa)
 * - featured: true se for o destaque principal, false se for post padrão
 * - excerpt: Resumo curto para o card (máx. 2 a 3 frases)
 * - content: Conteúdo completo em HTML (parágrafos, subtítulos, listas, citações)
 */

const BLOG_POSTS = [
  {
    id: "nova-plataforma-monitoramento-2024",
    title: "Nova plataforma de monitoramento em tempo real com IoT e IA",
    category: "tecnologia",
    badge: "Tecnologia",
    date: "15 de Agosto, 2024",
    readTime: "4 min de leitura",
    author: "Equipe de Engenharia & Software",
    image: "assets/logo.png",
    featured: true,
    excerpt: "Lançamos a versão 2.0 da nossa plataforma com dashboards avançados, integração com sensores IoT em tempo real e algoritmos preditivos para a saúde das árvores urbanas.",
    content: `
      <p>A <strong>Arborização Inteligente</strong> tem o orgulho de apresentar sua mais nova e avançada plataforma de monitoramento arbóreo. Desenvolvida para aproximar a tecnologia dos desafios climáticos urbanos, a versão 2.0 representa um salto significativo na gestão ecológica das cidades brasileiras.</p>
      
      <h3>O que há de novo na versão 2.0?</h3>
      <p>A arquitetura foi inteiramente remodelada para suportar milhares de sensores simultâneos, integrando dados meteorológicos, ambientais e biométricos das espécies mapeadas.</p>
      
      <ul>
        <li><strong>Dashboards Interativos:</strong> visualização em tempo real de índices de umidade, temperatura local e estresse hídrico arbóreo.</li>
        <li><strong>Integração IoT Contínua:</strong> telemetria automatizada com sensores de baixo consumo e conectividade de longo alcance.</li>
        <li><strong>IA Preditiva:</strong> modelos de aprendizado de máquina treinados para detectar sinais precoces de degradação vegetal.</li>
        <li><strong>Relatórios para Gestão Pública:</strong> exportação de laudos técnicos e mapas de calor para tomada de decisão em políticas urbanas.</li>
        <li><strong>API Aberta e Transparente:</strong> integração direta com secretarias municipais de meio ambiente e pesquisadores.</li>
      </ul>

      <blockquote class="blog-quote">
        "Nossa meta é transformar dados brutos em decisões verdes ágeis, reduzindo custos de manejo e salvando árvores antes de qualquer risco de queda."
      </blockquote>

      <h3>Próximos passos e cronograma</h3>
      <p>A nova plataforma já está em operação nas cidades piloto de Sergipe e será gradualmente expandida para outros estados do Nordeste ao longo do segundo semestre.</p>
    `
  },
  {
    id: "expansao-cidades-nordeste",
    title: "Expansão do projeto para 5 novos municípios do Nordeste",
    category: "sustentabilidade",
    badge: "Sustentabilidade",
    date: "08 de Agosto, 2024",
    readTime: "3 min de leitura",
    author: "Coordenação de Relações Institucionais",
    image: "material_site_arborizacao_inteligente/SAVE_20251003_225236.jpg",
    featured: false,
    excerpt: "A Arborização Inteligente chega em mais 5 municípios, consolidando nossa missão de promover cidades mais verdes, sustentáveis e resilientes ao calor extremo.",
    content: `
      <p>Com grande entusiasmo, comunicamos a ampliação do programa para mais cinco municípios da região Nordeste. A iniciativa busca mitigar as ilhas de calor e valorizar a flora nativa através de dados concretos.</p>

      <h3>Municípios Integrados:</h3>
      <ul>
        <li><strong>Aracaju (SE):</strong> expansão de pontos de sensoriamento na zona sul e centro histórico.</li>
        <li><strong>Maceió (AL):</strong> projeto piloto de corredores ecológicos urbanos.</li>
        <li><strong>Recife (PE):</strong> monitoramento de áreas litorâneas sujeitas a erosão e maré.</li>
        <li><strong>Fortaleza (CE):</strong> reflorestamento inteligente com foco em espécies tolerantes à seca.</li>
        <li><strong>Natal (RN):</strong> capacitação de equipes comunitárias de conservação.</li>
      </ul>

      <p>Cada localidade recebe assistência técnica, acesso total ao painel de controle e treinamentos comunitários para agentes de meio ambiente e estudantes.</p>
    `
  },
  {
    id: "ia-analise-preditiva-saude-arborea",
    title: "Inteligência Artificial para análise preditiva da saúde arbórea",
    category: "inovacao",
    badge: "Inovação",
    date: "01 de Agosto, 2024",
    readTime: "5 min de leitura",
    author: "Laboratório de Ciência de Dados",
    image: "assets/logo.png",
    featured: false,
    excerpt: "Implementação de modelos de machine learning que predizem com até 90 dias de antecedência a necessidade de poda, adubação e prevenção contra infestações.",
    content: `
      <p>O manejo arbóreo urbano historicamente tem sido reativo — ou seja, os cuidados ocorrem após a queda de galhos ou morte da árvore. Nosso novo sistema de inteligência artificial muda essa dinâmica para um modelo estritamente preventivo.</p>

      <h3>Como funciona a tecnologia preditiva?</h3>
      <p>Combinamos visão computacional (processamento de fotos capturadas por agentes de campo e satélite) com séries temporais de sensores de umidade do solo e oscilação de temperatura.</p>

      <ul>
        <li><strong>Deep Learning para Fitossanidade:</strong> identificação precoce de pragas, fungos e cupins através de imagens com alta precisão.</li>
        <li><strong>Previsão de Risco de Tombamento:</strong> cruzamento de velocidade do vento, inclinação de tronco e encharcamento do solo.</li>
        <li><strong>Otimização de Rotas de Poda:</strong> roteirização inteligente para caminhões de manutenção municipal, poupando combustível e tempo.</li>
      </ul>

      <blockquote class="blog-quote">
        "A tecnologia nos dá a oportunidade única de cuidar da cidade como um ecossistema vivo e integrado."
      </blockquote>
    `
  },
  {
    id: "aplicativo-mobile-comunidade",
    title: "Aplicativo mobile disponível para download gratuito",
    category: "comunidade",
    badge: "Comunidade",
    date: "25 de Julho, 2024",
    readTime: "3 min de leitura",
    author: "Equipe de Design & Produto",
    image: "material_site_arborizacao_inteligente/SAVE_20251003_225236.jpg",
    featured: false,
    excerpt: "Cidadãos agora podem participar ativamente do projeto reportando árvores em risco, sugerindo novos plantios e acompanhando o mapa ecológico do seu bairro.",
    content: `
      <p>Acreditamos que a sustentabilidade se constrói com a participação de todos. Por isso, lançamos o aplicativo oficial da <strong>Arborização Inteligente</strong>, disponível sem custos para dispositivos Android e iOS.</p>

      <h3>Principais recursos para a comunidade:</h3>
      <ul>
        <li><strong>Mapa Interativo de Árvores:</strong> descubra o nome científico, histórico e benefícios de cada árvore cadastrada em sua rua.</li>
        <li><strong>Canal de Denúncias e Alertas:</strong> envie fotos de galhos em contato com a fiação ou sinais de cupim diretamente para os técnicos.</li>
        <li><strong>Adote uma Árvore:</strong> registre o cuidado de mudas plantadas e ganhe medalhas de impacto sustentável.</li>
        <li><strong>Guia de Espécies Nativas:</strong> aprenda quais espécies são ideais para calçadas sem comprometer a tubulação ou o asfalto.</li>
      </ul>

      <p>O aplicativo já conta com mais de 5.000 downloads na primeira semana de lançamento e está disponível nas principais lojas de apps.</p>
    `
  },
  {
    id: "relatorio-impacto-tres-anos",
    title: "Relatório de Impacto: 3 anos transformando cidades sergipanas",
    category: "pesquisa",
    badge: "Pesquisa",
    date: "18 de Julho, 2024",
    readTime: "4 min de leitura",
    author: "Comitê Científico do Projeto",
    image: "assets/logo.png",
    featured: false,
    excerpt: "Dados mostram aumento de 40% na cobertura arbórea das áreas monitoradas e redução média de 2,3°C na temperatura ambiente nos microclimas mapeados.",
    content: `
      <p>Após três anos ininterruptos de pesquisa, instalação de sensores e engajamento com prefeituras locais, publicamos nosso relatório consolidado de impacto ambiental e socioeconômico.</p>

      <h3>Métricas de Destaque no Período:</h3>
      <ul>
        <li><strong>+40% de incremento</strong> na densidade de cobertura arbórea nas áreas acompanhadas.</li>
        <li><strong>-2,3°C de redução térmica</strong> em vias com adensamento vegetal inteligente nos horários de pico.</li>
        <li><strong>15% de melhora</strong> nos índices locais de dispersão de poluentes atmosféricos.</li>
        <li><strong>Mais de 12.000 árvores</strong> catalogadas digitalmente com geolocalização e histórico de podas.</li>
        <li><strong>85% de aprovação</strong> dos moradores vizinhos às intervenções do projeto.</li>
      </ul>

      <p>O relatório completo de 60 páginas está aberto para consulta de pesquisadores, universidades e gestores públicos interessados em replicar nossa metodologia.</p>
    `
  },
  {
    id: "reconhecimento-cienart-eventos",
    title: "Arborização Inteligente é destaque em feiras científicas e de inovação",
    category: "inovacao",
    badge: "Inovação",
    date: "05 de Julho, 2024",
    readTime: "3 min de leitura",
    author: "Equipe de Comunicação",
    image: "material_site_arborizacao_inteligente/IMG_20251003_163210.jpg",
    featured: false,
    excerpt: "O projeto foi reconhecido na CIENART e selecionado em programas de aceleração do Sebrae por unir ciência de dados e sustentabilidade prática nas cidades.",
    content: `
      <p>Com grande alegria, compartilhamos os recentes reconhecimentos recebidos pela equipe do Arborização Inteligente em fóruns regionais e nacionais de inovação e ciência.</p>

      <h3>Principais marcos recentes:</h3>
      <ul>
        <li><strong>CIENART:</strong> destaque na Feira Científica de Sergipe como uma das melhores soluções tecnológicas voltadas ao clima urbano.</li>
        <li><strong>Sebrae Supernova:</strong> seleção no programa de aceleração e desenvolvimento de startups sustentáveis.</li>
        <li><strong>Desafio Liga Jovem:</strong> representação sergipana com foco em impacto comunitário e empreendedorismo social.</li>
      </ul>

      <p>Agradecemos a todos os parceiros, mentores e cidadãos que acreditam na ciência sergipana como motor de transformação urbana e qualidade de vida.</p>
    `
  }
];

// Exporta para ambiente de módulos ou disponibiliza globalmente no navegador
if (typeof module !== "undefined" && module.exports) {
  module.exports = { BLOG_POSTS };
}

