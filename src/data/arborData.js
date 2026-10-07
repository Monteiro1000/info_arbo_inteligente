export const ARBOR_CARDS = [
  {
    id: "o-que-e",
    title: "O que é Arborização Urbana?",
    iconType: "tree",
    desc: "Arborização urbana é o conjunto de toda a vegetação de porte arbóreo presente em vias públicas, praças, parques e calçadas das cidades. Mais do que embelezamento estético, árvores são infraestrutura verde vital:",
    bullets: [
      {
        label: "Conforto Térmico",
        text: "Redução comprovada de 2°C a 5°C na temperatura dos microclimas urbanos.",
        sourceLabel: "Embrapa Florestas",
        sourceUrl: "https://www.embrapa.br/florestas"
      },
      {
        label: "Qualidade do Ar",
        text: "Retenção de gases poluentes e particulados nocivos à saúde respiratória.",
        sourceLabel: "OMS (Organização Mundial da Saúde)",
        sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health"
      },
      {
        label: "Drenagem e Solo",
        text: "Aumento da infiltração da água da chuva, evitando alagamentos e erosões.",
        sourceLabel: "ANA (Agência Nacional de Águas)",
        sourceUrl: "https://www.gov.br/ana/pt-br"
      },
      {
        label: "Qualidade de Vida",
        text: "Redução comprovada do estresse e promoção da biodiversidade local.",
        sourceLabel: "ONU-Habitat (Cidades Sustentáveis)",
        sourceUrl: "https://brasil.un.org/pt-br/sdgs/11"
      }
    ],
    isHighlight: false,
    delay: "0s"
  },
  {
    id: "brasil-nordeste",
    title: "O Problema no Brasil e no Nordeste",
    iconType: "warning",
    desc: "Grande parte das cidades brasileiras e nordestinas se expandiu sem um planejamento ambiental preventivo. Esse descompasso gerou desafios graves:",
    bullets: [
      {
        label: "Ausência de Planejamento Técnico",
        text: "Espécies plantadas sem critérios de porte, raízes e compatibilidade com redes elétricas.",
        sourceLabel: "Ministério do Meio Ambiente (MMA)",
        sourceUrl: "https://www.gov.br/mma/pt-br"
      },
      {
        label: "Conflito com Redes Elétricas",
        text: "Quedas constantes de energia decorrentes de galhos em contato com a fiação e podas drásticas mutiladoras.",
        sourceLabel: "ANEEL (Regulação Elétrica)",
        sourceUrl: "https://www.gov.br/aneel/pt-br"
      },
      {
        label: "Espécies Invasoras",
        text: "Disseminação descontrolada de plantas exóticas invasoras que sufocam a flora nativa local.",
        sourceLabel: "ICMBio / Instituto Hórus",
        sourceUrl: "https://www.gov.br/icmbio/pt-br"
      },
      {
        label: "Falta de Dados Concretos",
        text: "Prefeituras e secretarias carecem de laudos e mapas digitais para gerir seu patrimônio verde.",
        sourceLabel: "IBGE Cidades",
        sourceUrl: "https://cidades.ibge.gov.br/"
      }
    ],
    isHighlight: false,
    delay: "0.15s"
  },
  {
    id: "sergipe-ibge",
    title: "O Desafio Crítico em Sergipe",
    iconType: "danger",
    statNum: "Menor",
    statLabel: "Índice de vias arborizadas do Brasil",
    statSourceLabel: "Censo IBGE (2022)",
    statSourceUrl: "https://censo2022.ibge.gov.br/",
    paragraphs: [
      "Segundo os dados oficiais do Censo do IBGE (2022), Sergipe é o estado brasileiro com o menor índice de vias públicas arborizadas de todo o país.",
      "Essa escassez severa potencializa diretamente o fenômeno das ilhas de calor, elevando as temperaturas nas ruas, aumentando a incidência de problemas de saúde pública e diminuindo o bem-estar da população. A Arborização Inteligente nasceu em solo sergipano exatamente para transformar essa realidade por meio da ciência e da tecnologia."
    ],
    officialSource: {
      name: "IBGE (Instituto Brasileiro de Geografia e Estatística)",
      doc: "Censo Demográfico 2022 — Características Urbanísticas do Entorno dos Domicílios",
      url: "https://censo2022.ibge.gov.br/"
    },
    isHighlight: true,
    delay: "0.3s"
  }
];
