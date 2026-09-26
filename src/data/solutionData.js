export const TECH_ITEMS = [
  {
    num: "01",
    title: "Microcontrolador ESP32",
    desc: "Cérebro IoT para processamento local, telemetria sem fio e baixo consumo energético."
  },
  {
    num: "02",
    title: "Sensores DHT11 & AHT25",
    desc: "Medição precisa de temperatura e umidade relativa do ar, diagnosticando a qualidade do microclima."
  },
  {
    num: "03",
    title: "Sensor de Umidade do Solo",
    desc: "Monitoramento das condições hídricas radiculares para prevenção de estresse vegetal."
  },
  {
    num: "04",
    title: "IA & Visão Computacional",
    desc: "Modelos preditivos para identificar espécies nativas vs invasoras e detecção preventiva de doenças."
  },
  {
    num: "05",
    title: "Câmeras Urbanas Futuras",
    desc: "Varredura automatizada das ruas para contagem de árvores e monitoramento da copa arbórea."
  },
  {
    num: "06",
    title: "Ações com a Comunidade",
    desc: "Palestras interativas em escolas e universidades para sensibilização e educação ambiental."
  }
];

export const PLANS_DATA = [
  {
    id: "plano-1",
    num: "01",
    tag: "Plano 1",
    title: "Plano Base",
    summary: "Mapeamento e diagnóstico macroscópico por satélite.",
    features: [
      "Imagens de satélite multiespectrais em alta resolução",
      "Cálculo de índices de vegetação (NDVI)",
      "Identificação de áreas com déficit crítico de arborização",
      "Relatório panorâmico municipal de cobertura verde"
    ],
    idealFor: "Diagnóstico inicial",
    isFeatured: false,
    delay: "0s"
  },
  {
    id: "plano-2",
    num: "02",
    tag: "Plano 2",
    title: "Plano Técnico",
    summary: "Área interativa onde técnicos e gestores mapeiam árvores por conta própria.",
    features: [
      "Dashboard de gestão para prefeituras e secretarias",
      "Ferramenta de cadastramento e geolocalização de árvores",
      "Histórico de podas, adubações e manutenção fitossanitária",
      "Classificação digital de espécies nativas e invasoras"
    ],
    idealFor: "Secretarias e prefeituras",
    isFeatured: false,
    delay: "0.1s"
  },
  {
    id: "plano-3",
    num: "03",
    tag: "Plano 3",
    title: "Plano Integrado a Drones",
    summary: "Análise da cobertura vegetal e copas através de voos aéreos especializados.",
    features: [
      "Voo automatizado com câmeras de alta definição",
      "Modelagem 3D e ortomosaicos da vegetação urbana",
      "Detecção precoce de pragas, galhos secos e risco de queda",
      "Avaliação volumétrica do crescimento da copa arbórea"
    ],
    idealFor: "Avenidas e corredores verdes",
    isFeatured: true,
    delay: "0.2s"
  },
  {
    id: "plano-4",
    num: "04",
    tag: "Plano 4",
    title: "Plano Sensores IoT",
    popularTag: "Alta Precisão",
    summary: "Monitoramento contínuo em tempo real por telemetria e internet das coisas.",
    features: [
      "Estações IoT com microcontrolador ESP32 em vias estratégicas",
      "Leitura 24/7 de umidade do ar, solo e temperatura (DHT11/AHT25)",
      "Alertas automáticos de estresse hídrico e risco fitossanitário",
      "Integração futura com câmeras de visão computacional"
    ],
    idealFor: "Monitoramento crítico 24/7",
    isFeatured: false,
    delay: "0.3s"
  }
];

export const AUDIENCE_TAGS = [
  "Prefeituras e Secretarias Municipais",
  "População Urbana e Bairros",
  "Planejadores Urbanos e Engenheiros",
  "Setor de Saúde Pública (Qualidade do Ar)",
  "Setor Energético (Menos Quedas de Rede)",
  "Escolas e Universidades",
  "ONGs e Organizações Ambientais",
  "Comerciantes e Vias Comerciais"
];
