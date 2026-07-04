const deckGeografia = [
    {
        id: "geo_agraria_1",
        categoria: "Geografia",
        assunto: "Geografia Agrária Brasileira",
        frente: "Na expansão da fronteira agrícola (especialmente na Amazônia e MATOPIBA), como se denomina a apropriação ilegal de terras públicas mediante a falsificação de documentos?",
        verso_principal: "**Grilagem**",
        explicacao_detalhada: "*(O termo tem origem na prática literal de colocar documentos falsos recém-forjados dentro de gavetas com grilos, cujas fezes e ação física amarelavam e desgastavam o papel, dando-lhe uma falsa aparência de antiguidade e validade).* ",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_agraria_2",
        categoria: "Geografia",
        assunto: "Geografia Agrária Brasileira",
        frente: "**Tática de Prova:** A FUVEST frequentemente exige o saldo socioeconômico da \"Revolução Verde\" (anos 60/70). Embora tenha modernizado e aumentado a produtividade no campo, qual foi a sua principal consequência negativa para a demografia nacional?",
        verso_principal: "Gerou brutal **Concentração Fundiária** e acelerou o **Êxodo Rural**.",
        explicacao_detalhada: "A \"Revolução Verde\" foi baseada em maquinário pesado, agrotóxicos e sementes modificadas. O pequeno produtor não tinha capital para investir nesse \"pacote tecnológico\", foi engolido pelas dívidas, vendeu suas terras baratas para os grandes latifundiários e migrou em massa para as periferias urbanas (inchando as capitais sem planejamento). ",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_agraria_3",
        categoria: "Geografia",
        assunto: "Geografia Agrária Brasileira",
        frente: "Populações tradicionais, formadas por descendentes de africanos escravizados, que possuem o direito constitucional de propriedade sobre as terras que historicamente ocupam, são chamadas de:",
        verso_principal: "**Quilombolas**",
        explicacao_detalhada: "**Atenção ao Vocabulário:** Não confundir com **Posseiro**. O posseiro é o trabalhador rural comum (muitas vezes miserável) que ocupa, limpa e trabalha uma terra que não possui título de propriedade, sendo frequentemente expulso sob a mira das armas dos jagunços a mando de Grileiros e Latifundiários. ",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_agraria_4",
        categoria: "Geografia",
        assunto: "Geografia Agrária Brasileira",
        frente: "Qual é o acrônimo da atual e principal fronteira de expansão da soja no Cerrado brasileiro, que abrange partes de quatro estados do Nordeste e Norte?",
        verso_principal: "**MATOPIBA**",
        explicacao_detalhada: "O acrônimo engloba áreas dos estados do **Ma**ranhão, **To**cantins, **Pi**auí e **Ba**hia. É a nova vedete do agronegócio exportador de *commodities*, mas sua expansão desenfreada causa imenso desmatamento e conflitos com comunidades tradicionais na região do Cerrado.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_clima_5",
        categoria: "Geografia",
        assunto: "Climatologia e Biomas",
        frente: "**A Anomalia da Amazônia:** A Massa Equatorial Continental (mEc) atua no \"coração\" da Amazônia. Qual é a sua característica única no mundo e qual fenômeno vital ela gera para o Sudeste do Brasil?",
        verso_principal: "É a única massa continental **Úmida**. Ela gera os **\"Rios Voadores\"**.",
        explicacao_detalhada: "Via de regra, massas formadas sobre continentes (longe dos oceanos) são secas (como ocorre nos desertos). A mEc é a exceção devido à intensa taxa de **evapotranspiração** da própria Floresta Amazônica. Essa umidade sobe, bate na Cordilheira dos Andes e é desviada para baixo na forma de \"Rios Voadores\", abastecendo de chuva o Centro-Oeste agropecuário e as bacias hidrográficas do Sudeste. ",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_clima_6",
        categoria: "Geografia",
        assunto: "Climatologia e Biomas",
        frente: "Quando a Massa Polar Atlântica (mPa), massa mais fria e de alta pressão, avança pela calha plana do rio Paraguai e atinge o \"caldeirão\" da Amazônia ocidental, ela provoca um fenômeno de queda brusca de temperatura conhecido como...",
        verso_principal: "**Friagem**",
        explicacao_detalhada: "A mPa ganha força extraordinária no inverno. Sem nenhuma grande cadeia de montanhas transversal no Brasil (como os Alpes nos EUA) para barrar seu avanço, o ar polar canaliza pelo corredor do Pantanal até bater em Rondônia e Acre, derrubando a temperatura em plena linha do equador. ",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_clima_7",
        categoria: "Geografia",
        assunto: "Climatologia e Biomas",
        frente: "**Tática de Prova:** Quais são as duas adaptações/características mais cobradas sobre o **Cerrado** (em relação à química do solo e à fisiologia da vegetação)?",
        verso_principal: "1. Solo **ácido** (exige **Calagem**).\n2. Vegetação adaptada ao **Fogo Natural**.",
        explicacao_detalhada: "1) Os solos do Cerrado são lixiviados e ácidos (ricos em Alumínio tóxico). Só se tornaram aptos para a megacultura da soja após a invenção da Calagem (jogar calcário em pó para neutralizar o pH).\n2) A flora possui raízes profundíssimas (busca o lençol freático na época seca) e cascas suberosas grossas que isolam o calor do fogo natural, que é essencial para quebrar a dormência de suas sementes (pirofismo). ",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_clima_8",
        categoria: "Geografia",
        assunto: "Climatologia e Biomas",
        frente: "O solo da Amazônia é, em sua esmagadora maioria, arenoso e extremamente pobre em nutrientes. Biologicamente, como a floresta consegue se manter tão densa e gigante sobre um solo quase estéril?",
        verso_principal: "Através da ciclagem ultrarrápida da **Serapilheira**.",
        explicacao_detalhada: "A floresta se autossustenta. A serapilheira é a camada superficial de folhas mortas, galhos caídos e restos de animais que cobre o chão da floresta. Devido ao calor e umidade absurdos o ano todo, as bactérias e fungos recompõem essa matéria morta em tempo recorde, e as raízes superficiais das árvores reabsorvem os nutrientes instantaneamente, sem deixar que infiltrem no fundo do solo pobre. ",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_geopol_9",
        categoria: "Geografia",
        assunto: "Geopolítica e Economia Brasileira",
        frente: "**A Era JK:** Qual foi a principal marca de infraestrutura do Plano de Metas de Juscelino Kubitschek (\"50 anos em 5\") na matriz de transportes e de onde vinha o capital para as novas indústrias?",
        verso_principal: "Prioridade ao modal **Rodoviário** e abertura brutal ao **Capital Estrangeiro**.",
        explicacao_detalhada: "JK tomou a decisão de não focar em ferrovias. O Estado gastou rios de dinheiro rasgando rodovias pelo país como um \"chamote\" para atrair as grandes Indústrias Multinacionais Automobilísticas (Ford, Volkswagen), marcando o auge da política de substituição de importações através do tripé econômico estatal-privado-estrangeiro.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_geopol_10",
        categoria: "Geografia",
        assunto: "Geopolítica e Economia Brasileira",
        frente: "Nos anos 60/70, países árabes e a Venezuela se uniram para tomar o controle do preço do petróleo, que antes era manipulado por empresas ocidentais. Qual o nome dessa organização responsável pelos temidos \"Choques do Petróleo\"?",
        verso_principal: "**OPEP** (Organização dos Países Exportadores de Petróleo).",
        explicacao_detalhada: "A OPEP atua tecnicamente como um megacartel global legalizado. Ao decidirem diminuir a produção mundial, forçaram o aumento colossal do preço do barril, gerando uma grave crise inflacionária que quebrou a economia mundial na década de 70 (o fim do \"Milagre Econômico\" no Brasil). ",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_geopol_11",
        categoria: "Geografia",
        assunto: "Geopolítica e Economia Brasileira",
        frente: "O que são as **COPs** (Conferências das Partes) no cenário geopolítico e qual foi a determinação principal do famoso Acordo de Paris?",
        verso_principal: "COPs são **Conferências da ONU sobre Mudanças Climáticas**.\nAcordo de Paris: Limitar o aumento global a bem menos de **2°C**.",
        explicacao_detalhada: "O limite de segurança vital estipulado é de preferencialmente 1,5°C em relação à era pré-industrial. O Acordo foi histórico pois fez com que praticamente todos os países assumissem compromissos voluntários (NDCs) de redução drástica nas emissões de carbono, embora não haja sanção pesada para quem descumprir. ",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_carto_12",
        categoria: "Geografia",
        assunto: "Cartografia e Demografia",
        frente: "Como se chama o método cartográfico intencional que distorce a forma e o tamanho natural dos países, inflando-os ou comprimindo-os, para que suas áreas fiquem proporcionais ao dado estatístico analisado (ex: População ou PIB)?",
        verso_principal: "**Anamorfose Geográfica**",
        explicacao_detalhada: "Em um mapa de anamorfose focado na População Absoluta, por exemplo, a Rússia (gigante territorial) e o Canadá encolherão drasticamente, enquanto a Índia e a China sofrerão uma \"inflação\" bizarra, distorcendo completamente as fronteiras geográficas para ressaltar a densidade do dado. ",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_carto_13",
        categoria: "Geografia",
        assunto: "Cartografia e Demografia",
        frente: "A partir da virada do século XX para o XXI, o êxodo histórico massivo \"Nordeste $\\rightarrow$ Sudeste\" começou a perder força, surgindo um novo fenômeno populacional impulsionado pela melhoria de vida no Nordeste e pela interiorização das indústrias. Qual o seu nome?",
        verso_principal: "**Migração de Retorno**",
        explicacao_detalhada: "A estagnação econômica nas periferias de São Paulo/Rio de Janeiro, os bolsões de pobreza, e o fomento federal na infraestrutura de polos industriais fora do Sudeste fizeram com que milhares de famílias nordestinas decidissem voltar definitivamente aos seus estados e cidades de origem.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_bio_14",
        categoria: "Geografia",
        assunto: "Saneamento e Biologia Ambiental",
        frente: "**O Sufocamento do Lago:** O esgoto despejado na água causa uma superpopulação letal de algas. Elas bloqueiam o sol, morrem, e são devoradas por bactérias aérobicas que zeram o oxigênio da água, sufocando os peixes. Qual o nome desse crime ambiental?",
        verso_principal: "**Eutrofização**",
        explicacao_detalhada: "O gatilho desse desastre é sempre um \"excesso de nutrientes\" (Nitrogênio e Fósforo), geralmente provenientes de adubos agrícolas carregados pela chuva ou lançamento contínuo de esgoto doméstico clandestino direto nos corpos hídricos fechados (lagos, represas e braços de mar). ",


        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_bio_15",
        categoria: "Geografia",
        assunto: "Saneamento e Biologia Ambiental",
        frente: "**Tática de Sanitarismo:** Doenças do trato digestivo como a Ascaridíase (lombriga), a Amebíase e a Cólera não possuem mosquitos vetores. Como o ser humano contrai essas pragas e qual é a Política Pública estrutural primária de combate a elas?",
        verso_principal: "Transmissão: **Ciclo Fecal-Oral**.\nPrevenção Estrutural: **Saneamento Básico**.",
        explicacao_detalhada: "Você é infectado exclusivamente ao ingerir ovos dos vermes ou cistos de protozoários/bactérias através de **água e alimentos contaminados com fezes infectadas**. A política que aniquila essa cadeia na fonte não é dar remédio, mas sim garantir o Saneamento Básico universal (água encanada tratada com cloro/flúor e, acima de tudo, a coleta e tratamento do esgoto bruto). ",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "geo_bio_16",
        categoria: "Geografia",
        assunto: "Saneamento e Biologia Ambiental",
        frente: "Qual é o nome do fenômeno (natural ou impulsionado por dejetos antrópicos) causado pela multiplicação hiperdescontrolada de microalgas tóxicas, que altera a cor do mar, mata peixes por asfixia e envenena os moluscos marinhos?",
        verso_principal: "**Maré Vermelha**",
        explicacao_detalhada: "O fenômeno é gerado quase exclusivamente por um grupo fitoplanctônico de algas chamado *Dinoflagelados*. Quando ocorre a floração em massa (devido a condições anômalas de temperatura e nutrientes na costa), eles expelem biotoxinas neurotóxicas fortíssimas na água. Filtros naturais, como ostras e mexilhões, concentram esse veneno em seus tecidos e causam intoxicação letal aos humanos que os consomem.",
        caixa: 0,
        proximaRevisao: Date.now()
    }
];