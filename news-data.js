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
 * - date: Data da publicação (ex: "25 de Setembro, 2026")
 * - readTime: Estimativa de leitura (ex: "3 min de leitura")
 * - author: Nome do autor ou equipe (ex: "Equipe Arbo", "Comunicação & Design")
 * - image: Caminho da imagem (ex: "assets/logo.png" ou URL externa)
 * - featured: true se for o destaque principal, false se for post padrão
 * - excerpt: Resumo curto para o card (máx. 2 a 3 frases)
 * - content: Conteúdo completo em HTML (parágrafos, subtítulos, listas, citações)
 */

const BLOG_POSTS = [
  {
    id: "lancamento-novo-site-oficial",
    title: "Lançamento do Novo Site Oficial da Arborização Inteligente",
    category: "tecnologia",
    badge: "Lançamento Oficial",
    date: "25 de Setembro, 2026",
    readTime: "3 min de leitura",
    author: "Equipe Arborização Inteligente",
    image: "assets/equipe.jpg",
    featured: true,
    excerpt: "É com grande satisfação que apresentamos o novo portal oficial da Arborização Inteligente: um espaço moderno, acessível e transparente para conectar tecnologia IoT, IA e gestão ecológica urbana.",
    content: `
      <p>Seja muito bem-vindo ao <strong>novo portal oficial da Arborização Inteligente</strong>! Desenvolvemos esta plataforma para ser o ponto de encontro central entre a nossa pesquisa científica, a tecnologia de monitoramento ambiental e a sociedade.</p>
      
      <h3>O que você encontra no novo portal?</h3>
      <p>O site foi estruturado para apresentar com clareza e profundidade técnica cada pilar da nossa solução:</p>
      
      <ul>
        <li><strong>Diagnóstico Urbano:</strong> Contextualização do desafio urgente da cobertura vegetal no Brasil e em Sergipe, com base em dados oficiais do Censo IBGE.</li>
        <li><strong>Tecnologia & Hardware IoT:</strong> Detalhamento dos sensores em campo (ESP32, DHT11, AHT25), inteligência artificial preditiva e monitoramento aéreo por drones.</li>
        <li><strong>Alinhamento aos ODS da ONU:</strong> Nosso compromisso direto com os Objetivos de Desenvolvimento Sustentável 11 (Cidades Sustentáveis), 13 (Ação Climática) e 15 (Vida Terrestre).</li>
        <li><strong>Equipe e Reconhecimentos:</strong> Quem faz a ciência acontecer e as premiações conquistadas pelo projeto, como CIENART, ROBOT-SE e Mini COP 30.</li>
        <li><strong>Canais Abertos de Contato:</strong> Acesso direto para parcerias governamentais, acadêmicas e comunitárias.</li>
      </ul>

      <blockquote class="blog-quote">
        "Este portal representa a evolução do nosso compromisso: levar dados ambientais precisos para a palma da mão de gestores e cidadãos, transformando o futuro das nossas cidades."
      </blockquote>

      <h3>Artigos científicos e técnicos em produção</h3>
      <p>Informamos à comunidade acadêmica e aos parceiros que os <strong>artigos científicos e relatórios técnicos aprofundados</strong> sobre a metodologia de sensoriamento, calibração e algoritmos preditivos estão atualmente em fase de produção e revisão por nossos pesquisadores. Em breve, todos os artigos estarão disponíveis para leitura e download gratuito diretamente aqui nesta área do blog!</p>
    `
  },
  {
    id: "apresentacao-nova-logo-oficial",
    title: "Nova Identidade Visual: Conheça o Logotipo Oficial do Projeto",
    category: "inovacao",
    badge: "Identidade Visual",
    date: "24 de Setembro, 2026",
    readTime: "2 min de leitura",
    author: "Comunicação & Design",
    image: "assets/logo.png",
    featured: false,
    excerpt: "Apresentamos oficialmente a nova identidade visual da Arborização Inteligente. Uma marca moderna que simboliza a união entre a natureza viva das árvores urbanas e as trilhas de dados da tecnologia.",
    content: `
      <p>O projeto <strong>Arborização Inteligente</strong> dá mais um passo decisivo em sua trajetória institucional e apresenta ao público a sua <strong>nova identidade visual oficial</strong>.</p>
      
      <p>Desenvolvida para refletir a maturidade e a sofisticação tecnológica da nossa iniciativa, a nova marca traduz visualmente a essência do que pesquisamos e construímos todos os dias: a perfeita harmonia entre a biologia vegetal e a inovação computacional.</p>

      <h3>O Conceito do Novo Logotipo</h3>
      <p>Cada detalhe da nova composição foi planejado estrategicamente:</p>

      <ul>
        <li><strong>A Árvore Tecnológica:</strong> O tronco e os galhos se transformam em trilhas de circuito impresso com nós e conectores, representando os sensores IoT e os fluxos contínuos de telemetria ambiental.</li>
        <li><strong>Folhagem Viva e Sustentável:</strong> As folhas em tons verdes e esmeralda simbolizam a fotossíntese, a flora nativa e o compromisso urgente com o conforto térmico urbano.</li>
        <li><strong>Azul Profundo e Borda Dourada:</strong> O azul royal confere rigor científico, engenharia e confiabilidade aos dados, contornado por um aro que celebra a excelência e o impacto socioambiental.</li>
      </ul>

      <blockquote class="blog-quote">
        "Uma marca forte para um propósito urgente: usar inteligência artificial e robótica para proteger a vida e refrescar as cidades brasileiras."
      </blockquote>

      <p>A nova identidade já está integrada a este portal e será utilizada em todas as publicações científicas, apresentações em congressos e dispositivos de sensoriamento em campo.</p>
    `
  }
];

// Exporta para ambiente de módulos ou disponibiliza globalmente no navegador
if (typeof module !== "undefined" && module.exports) {
  module.exports = { BLOG_POSTS };
}
