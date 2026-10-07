export const TECH_ITEMS = [
  {
    num: "01",
    title: "Microcontrolador ESP32",
    desc: "Cérebro IoT para processamento local, telemetria sem fio e baixo consumo energético.",
    sourceLabel: "Espressif Systems",
    sourceUrl: "https://www.espressif.com/en/products/socs/esp32"
  },
  {
    num: "02",
    title: "Sensores DHT11 & AHT25",
    desc: "Medição precisa de temperatura e umidade relativa do ar, diagnosticando a qualidade do microclima urbano.",
    sourceLabel: "Especificação Técnica de Sensores",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health"
  },
  {
    num: "03",
    title: "Sensor de Umidade do Solo",
    desc: "Monitoramento das condições hídricas radiculares para prevenção de estresse vegetal e controle de rega.",
    sourceLabel: "Embrapa Solos",
    sourceUrl: "https://www.embrapa.br/solos"
  },
  {
    num: "04",
    title: "IA & Visão Computacional",
    desc: "Modelos preditivos para identificar espécies nativas vs exóticas invasoras e detecção preventiva de patologias.",
    sourceLabel: "ICMBio / Biodiversidade",
    sourceUrl: "https://www.gov.br/icmbio/pt-br"
  },
  {
    num: "05",
    title: "Câmeras Urbanas & Vants",
    desc: "Varredura automatizada das ruas para contagem de árvores e monitoramento da evolução da copa arbórea.",
    sourceLabel: "MCTI (Tecnologia & Inovação)",
    sourceUrl: "https://www.gov.br/mcti/pt-br"
  },
  {
    num: "06",
    title: "Educação & Ciência Cidadã",
    desc: "Palestras interativas em escolas e universidades para sensibilização e engajamento ambiental comunitário.",
    sourceLabel: "MEC / Educação Ambiental",
    sourceUrl: "https://www.gov.br/mec/pt-br"
  }
];

export const PLANS_DATA = [
  {
    id: "plano-1",
    num: "01",
    tag: "Plano 1",
    title: "Plano Base",
    summary: "Mapeamento e diagnóstico macroscópico por sensoriamento remoto via satélite.",
    features: [
      {
        text: "Imagens de satélite multiespectrais em alta resolução espacial",
        sourceLabel: null,
        sourceUrl: null
      },
      {
        text: "Cálculo de índices de vegetação (NDVI)",
        sourceLabel: "INPE / Sensoriamento Remoto",
        sourceUrl: "https://earthobservatory.nasa.gov/features/MeasuringVegetation"
      },
      {
        text: "Identificação de áreas com déficit crítico de cobertura vegetal",
        sourceLabel: null,
        sourceUrl: null
      },
      {
        text: "Relatório panorâmico municipal de cobertura verde",
        sourceLabel: null,
        sourceUrl: null
      }
    ],
    idealFor: "Diagnóstico inicial para municípios",
    isFeatured: false,
    delay: "0s"
  },
  {
    id: "plano-2",
    num: "02",
    tag: "Plano 2",
    title: "Plano Técnico",
    summary: "Ambiente interativo corporativo para técnicos e gestores mapearem e gerenciarem árvores.",
    features: [
      {
        text: "Dashboard de gestão técnica para prefeituras e secretarias",
        sourceLabel: null,
        sourceUrl: null
      },
      {
        text: "Ferramenta de geolocalização e cadastramento fitossanitário individual",
        sourceLabel: null,
        sourceUrl: null
      },
      {
        text: "Histórico completo de podas, adubações e manutenções",
        sourceLabel: null,
        sourceUrl: null
      },
      {
        text: "Classificação assistida de espécies nativas versus invasoras",
        sourceLabel: "Flora do Brasil 2020",
        sourceUrl: "http://floradobrasil.jbrj.gov.br/"
      }
    ],
    idealFor: "Secretarias de Meio Ambiente e Obras",
    isFeatured: false,
    delay: "0.1s"
  },
  {
    id: "plano-3",
    num: "03",
    tag: "Plano 3",
    title: "Plano Integrado a Drones",
    summary: "Análise avançada da cobertura vegetal e copas através de voos aéreos especializados.",
    features: [
      {
        text: "Voo automatizado com sensores de alta definição óptica",
        sourceLabel: null,
        sourceUrl: null
      },
      {
        text: "Modelagem tridimensional (3D) e ortomosaicos georreferenciados",
        sourceLabel: null,
        sourceUrl: null
      },
      {
        text: "Detecção precoce de pragas, galhos secos e risco de tombamento",
        sourceLabel: null,
        sourceUrl: null
      },
      {
        text: "Avaliação volumétrica do crescimento da copa arbórea urbana",
        sourceLabel: null,
        sourceUrl: null
      }
    ],
    idealFor: "Grandes avenidas, praças e corredores verdes",
    isFeatured: true,
    delay: "0.2s"
  },
  {
    id: "plano-4",
    num: "04",
    tag: "Plano 4",
    title: "Plano Sensores IoT",
    popularTag: "Alta Precisão",
    summary: "Monitoramento contínuo em tempo real por telemetria dedicada e Internet das Coisas.",
    features: [
      {
        text: "Estações de monitoramento IoT com microcontrolador ESP32 em vias críticas",
        sourceLabel: "Espressif IoT",
        sourceUrl: "https://www.espressif.com/en/products/socs/esp32"
      },
      {
        text: "Leitura 24/7 de microclima: umidade do ar, temperatura e umidade do solo",
        sourceLabel: null,
        sourceUrl: null
      },
      {
        text: "Alertas automáticos preditivos de estresse hídrico e risco fitossanitário",
        sourceLabel: null,
        sourceUrl: null
      },
      {
        text: "Integração futura com módulos de visão computacional em tempo real",
        sourceLabel: null,
        sourceUrl: null
      }
    ],
    idealFor: "Locais críticos com ilhas de calor e árvores históricas",
    isFeatured: false,
    delay: "0.3s"
  }
];

export const AUDIENCE_SEGMENTS = [
  {
    id: "prefeituras",
    icon: "government",
    title: "Prefeituras & Secretarias Municipais",
    badge: "Gestão Pública",
    desc: "Obtenção de relatórios técnicos embasados em dados reais para subsidiar planos diretores, inventários florestais urbanos e cumprir diretrizes do Ministério do Meio Ambiente."
  },
  {
    id: "comunidade",
    icon: "community",
    title: "População Urbana & Bairros",
    badge: "Sociedade",
    desc: "Acesso a ruas mais frescas, amenização de ilhas de calor, melhoria da qualidade do ar respirável e cidades mais arborizadas e acolhedoras para o pedestre."
  },
  {
    id: "engenheiros",
    icon: "engineering",
    title: "Planejadores Urbanos & Engenheiros",
    badge: "Urbanismo",
    desc: "Subsídios técnicos para compatibilizar o plantio de espécies adequadas com calçadas, tubulações subterrâneas e fiação elétrica aérea, prevenindo danos estruturais."
  },
  {
    id: "saude",
    icon: "health",
    title: "Setor de Saúde Coletiva",
    badge: "Qualidade de Vida",
    desc: "Redução de doenças cardiovasculares e respiratórias associadas à poluição e ao calor extremo através do aumento planejado da cobertura vegetal sombreada."
  },
  {
    id: "energia",
    icon: "energy",
    title: "Setor Elétrico & Infraestrutura",
    badge: "Segurança de Redes",
    desc: "Prevenção sistemática de quedas de galhos sobre a fiação elétrica durante temporais, diminuindo apagões e evitando podas drásticas que condenam espécimes."
  },
  {
    id: "academico",
    icon: "academic",
    title: "Universidades, Escolas & ONGs",
    badge: "Ciência & Educação",
    desc: "Plataforma viva para pesquisa acadêmica, extensão comunitária, educação climática e monitoramento participativo de indicadores de biodiversidade urbana."
  }
];

export const AUDIENCE_TAGS = AUDIENCE_SEGMENTS.map(s => s.title);
