const deckQuimica = [
    {
        id: "qui_geral_1",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que é **matéria**?",
        verso_principal: "Tudo o que tem **massa** e ocupa lugar no espaço (**volume**).",
        explicacao_detalhada: "*Rigor Técnico:* Não esqueça da massa! O volume sozinho indica apenas espaço. A matéria existe na forma de corpo (porção limitada, ex: um pedaço de ferro) e objeto (corpo com função útil, ex: uma faca de ferro).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_2",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que são **processos de separação**?",
        verso_principal: "São processos físicos que visam **isolar** os diferentes materiais encontrados numa mistura.",
        explicacao_detalhada: "Eles não alteram a identidade química das substâncias. Eles exploram as diferentes propriedades físicas (densidade, ponto de ebulição, solubilidade) dos componentes para separá-los (ex: destilação, decantação).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_3",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que é uma **transformação material**?",
        verso_principal: "É toda e qualquer alteração sofrida pela matéria.",
        explicacao_detalhada: "Pode ser desde uma simples mudança de estado (água fervendo), uma mudança de forma (quebrar um vidro), até uma mudança de identidade (ferrugem, explosão de fogos de artifício).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_4",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que caracteriza uma **transformação física** e uma **transformação química**?",
        verso_principal: "**Física:** Não altera a identidade (molécula) da matéria.\n**Química:** Altera a identidade (quebra/forma ligações).",
        explicacao_detalhada: "**Tática de Combate (Correção de Rumo):** Cuidado com a ideia de que \"física é reversível e química é irreversível\". Isso é um conceito de ensino fundamental que as bancas usam como pegadinha. \nExistem transformações físicas irreversíveis (rasgar papel) e inúmeras reações químicas reversíveis (fabricação de amônia, pilhas recarregáveis). O que dita se é química é a **formação de novas substâncias**.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_5",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que é **energia**? Cite 4 tipos.",
        verso_principal: "É uma propriedade do sistema que lhe permite realizar um **trabalho**.",
        explicacao_detalhada: "A energia atua na matéria para movê-la, aquecê-la ou transformá-la. \n**Exemplos:** \n1. Hidráulica (movimento da água)\n2. Térmica (calor/agitação molecular)\n3. Eólica (movimento do vento)\n4. Elétrica (movimento de elétrons livres).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_6",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "Quais são as três **camadas geológicas** principais da Terra?",
        verso_principal: "1. **Crosta** (Litosfera)\n2. **Manto** (Mesosfera)\n3. **Núcleo** (Endosfera)",
        explicacao_detalhada: "**Aplicação Mineral:** A crosta é rica em silicatos (Si e O) e alumínio. O manto é composto por rochas fundidas (magma) ricas em ferro e magnésio. O núcleo é uma liga metálica absurdamente densa, composta quase inteiramente por Níquel e Ferro (o famoso núcleo NiFe).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_7",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que são sistemas **Homogêneos** e **Heterogêneos**?",
        verso_principal: "**Homogêneo:** Uniforme, apresenta apenas **1 fase**.\n**Heterogêneo:** Não uniforme, apresenta **2 ou mais fases**.",
        explicacao_detalhada: "**Exemplos Homogêneos:** Água pura, água com sal totalmente dissolvido, ar atmosférico sem poeira, ligas metálicas (ouro 18k).\n**Exemplos Heterogêneos:** Água e óleo, granito (mica, quartzo, feldspato), sangue (visualmente parece homogêneo, mas no microscópio ou centrífuga separa em plasma e células), água líquida com gelo.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_8",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que é um **Componente** de um sistema e como identificá-lo?",
        verso_principal: "É cada **substância química pura** diferente presente na mistura.",
        explicacao_detalhada: "Identificamos os componentes por suas fórmulas químicas distintas.\n**A Pegadinha Clássica:** Um copo com água líquida e cubos de gelo tem **2 Fases** (sólido e líquido), mas apenas **1 Componente** ($H_2O$). Não confunda fase (aspecto visual) com componente (identidade química).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_9",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que são **Fases** em um sistema material?",
        verso_principal: "É cada porção com **aspecto visual/físico uniforme** de um sistema.",
        explicacao_detalhada: "As fases são separadas por superfícies de contato visíveis. \n**Exemplo de prova:** Um sistema contendo Água, Óleo, Areia de fundo e 3 cubos de gelo. \n- **Componentes:** 3 (Água, Óleo, Areia).\n- **Fases:** 4 (Fase óleo, fase líquida da água, fase sólida do gelo, fase sólida da areia). O número de cubos de gelo não importa, todos formam a mesma \"fase sólida da água\".",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_10",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "Quais são os **estados físicos** da matéria e os nomes das mudanças de estado?",
        verso_principal: "Sólido, Líquido e Gasoso.",
        explicacao_detalhada: "**Dinâmica Molecular:** A passagem depende da energia cinética (agitação) e força intermolecular.\n- Sólido $\\rightarrow$ Líquido: **Fusão**.\n- Líquido $\\rightarrow$ Gás: **Vaporização** (pode ser Ebulição, Evaporação ou Calefação).\n- Gás $\\rightarrow$ Líquido: **Condensação** ou Liquefação.\n- Líquido $\\rightarrow$ Sólido: **Solidificação**.\n- Sólido $\\rightleftarrows$ Gás: **Sublimação**.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_11",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "Como analisar um **Diagrama de Mudança de Estado Físico** (Curva de Aquecimento)? O que indica a ocorrência da mudança?",
        verso_principal: "É um gráfico de **Temperatura $\\times$ Tempo**. A mudança de estado ocorre nos **Patamares (linhas horizontais)**.",
        explicacao_detalhada: "**Análise Gráfica:** Durante um patamar, o calor fornecido é usado EXCLUSIVAMENTE para quebrar as ligações intermoleculares, e não para aumentar a temperatura.\n\n* **Substância Pura:** Possui 2 patamares perfeitamente horizontais e fixos (TF constante e TE constante).\n* **Mistura Comum:** Não possui nenhum patamar horizontal, a temperatura sobe obliquamente o tempo todo.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_12",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que é uma Mistura **Eutética** e uma Mistura **Azeotrópica**?",
        verso_principal: "**Eutética:** Funde (sólido $\\rightarrow$ líquido) em temperatura CONSTANTE.\n**Azeotrópica:** Ferve (líquido $\\rightarrow$ gás) em temperatura CONSTANTE.",
        explicacao_detalhada: "**Eutética:** Comporta-se como substância pura apenas na Fusão. Ex: Solda comum (estanho + chumbo).\n**Azeotrópica:** Comporta-se como substância pura apenas na Ebulição. Ex: Álcool etílico 96% + 4% Água. (Você não consegue destilar/separar o álcool hidratado a 96% fervendo ele, pois a mistura inteira evaporará junto na mesma temperatura).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_13",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "Como é chamada a transformação que **absorve** energia (calor) e a que **libera** energia?",
        verso_principal: "Absorve: **Endotérmica**\nLibera: **Exotérmica**",
        explicacao_detalhada: "- Fusão, Vaporização e Sublimação (para virar gás) precisam receber calor para romper ligações $\\rightarrow$ **Endotérmicas**.\n- Condensação e Solidificação precisam perder calor para as moléculas se aproximarem $\\rightarrow$ **Exotérmicas**.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_14",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "Qual a fórmula matemática da **Densidade** e qual o seu significado físico?",
        verso_principal: "$$d = \\frac{m}{V}$$",
        explicacao_detalhada: "**Significado:** É o nível de compactação da matéria. Indica quanta massa existe espremida dentro de um determinado volume. No Sistema Internacional, a densidade de sólidos e líquidos geralmente é medida em $\\text{g/cm}^3$ ou $\\text{g/mL}$, enquanto gases são medidos em $\\text{g/L}$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_15",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "**Tática Analítica:** O que é útil investigar para saber se um material é uma **substância pura**? A densidade ajuda?",
        verso_principal: "Avaliamos as **Propriedades Específicas** (Densidade, TF e TE). Sim, a densidade é crucial.",
        explicacao_detalhada: "Uma substância pura terá Ponto de Fusão (TF), Ponto de Ebulição (TE) e Densidade ($d$) com **valores constantes e tabelados** sob dada pressão. \nSe você mede a densidade ou a temperatura de fervura de uma amostra e esses valores variam durante o processo, você pode cravar com certeza que trata-se de uma mistura, e não uma substância pura.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_16",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que significa **desdobramento** ou **fracionamento**? Dê exemplos.",
        verso_principal: "Significa a **separação física** dos componentes de uma mistura.",
        explicacao_detalhada: "É o ato de fracionar um sistema complexo em suas substâncias puras originais.\n**Exemplos Práticos:**\n- **Destilação Fracionada:** Usada na refinaria para separar as frações do petróleo cru (gasolina, querosene, diesel) através da diferença no ponto de ebulição.\n- **Centrifugação/Decantação:** Fracionar o sangue humano, separando o plasma dos glóbulos vermelhos.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_17",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que diz a Lei de **Lavoisier** (A Lei de Conservação da Massa)?",
        verso_principal: "\"Na natureza, nada se cria, nada se perde, tudo se transforma.\"",
        explicacao_detalhada: "Num sistema **fechado**, a massa total dos reagentes (antes da reação) será rigorosamente igual à massa total dos produtos (após a reação). Os átomos são indestrutíveis; eles apenas trocam de parceiros e se rearranjam espacialmente para formar novas substâncias.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_18",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que dita a **Lei de Proust** (Lei das Proporções Constantes)? Dê um exemplo numérico.",
        verso_principal: "Uma substância composta é sempre formada pela **mesma proporção em massa** de seus elementos constituintes.",
        explicacao_detalhada: "Independentemente de como a água ($H_2O$) é produzida, ela sempre terá 2 gramas de Hidrogênio reagindo com 16 gramas de Oxigênio (proporção 1:8). \nSe você tentar reagir 2 gramas de Hidrogênio com 20 gramas de Oxigênio, a reação não altera a proporção. Ocorrerá o que chamamos de **Reagente em Excesso** (4 gramas de oxigênio vão sobrar no fundo do recipiente sem reagir).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_19",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que são **Substâncias Simples** e o que são Substâncias Compostas? Dê exemplos.",
        verso_principal: "**Simples:** Formadas por átomos de apenas **UM único elemento** químico.\n**Compostas:** Formadas por 2 ou mais elementos.",
        explicacao_detalhada: "**Exemplos de Simples:** Gás Oxigênio ($O_2$), Gás Hidrogênio ($H_2$), Ferro metálico ($Fe$), Gás Ozônio ($O_3$).\n**Exemplos de Compostas:** Água ($H_2O$, formada por H e O), Gás Carbônico ($CO_2$), Cloreto de Sódio ($NaCl$).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_geral_20",
        categoria: "Química",
        assunto: "Química Geral",
        frente: "O que é o fenômeno da **Alotropia**? Cite os dois casos mais famosos.",
        verso_principal: "É quando o **mesmo elemento químico** é capaz de formar substâncias simples **totalmente diferentes**.",
        explicacao_detalhada: "Essas substâncias diferentes formadas pelo mesmo elemento são chamadas de *variedades alotrópicas*.\nIsso ocorre de duas formas:\n1. **Por Atomicidade (quantidade de átomos):** O oxigênio forma o Gás Oxigênio ($O_2$, vital) e o Gás Ozônio ($O_3$, tóxico).\n2. **Por Arranjo Estrutural (geometria):** O carbono pode se cristalizar de formas diferentes formando Grafite (macio, conduz eletricidade) ou Diamante (mineral mais duro do planeta, isolante elétrico).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_1",
        categoria: "Química",
        assunto: "Atomística - Modelos Atômicos",
        frente: "Qual é o modelo atômico de **Dalton** e qual a sua principal afirmação sobre a divisão da matéria?",
        verso_principal: "Modelo da **Bola de Bilhar**.",
        explicacao_detalhada: "Afirmava que o átomo era uma esfera maciça, indestrutível, impenetrável e, principalmente, **indivisível** (a menor parte formadora da matéria). Átomos de um mesmo elemento teriam massas e propriedades idênticas.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_2",
        categoria: "Química",
        assunto: "Atomística - Modelos Atômicos",
        frente: "O experimento da ampola de raios catódicos levou à criação do modelo de **Thomson**. Qual é o apelido desse modelo e qual partícula ele introduziu?",
        verso_principal: "Modelo do **Pudim de Passas**.\nDescobriu o **Elétron**.",
        explicacao_detalhada: "Ao descobrir o elétron (partícula de carga negativa), Thomson foi o responsável por **derrubar a ideia de indivisibilidade** de Dalton. O átomo passou a ser visto como uma esfera de carga elétrica positiva, não maciça no sentido estrito, incrustada de elétrons negativos para garantir a neutralidade elétrica.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_3",
        categoria: "Química",
        assunto: "Atomística - Modelos Atômicos",
        frente: "**Gatilho FUVEST:** No modelo de **Rutherford** (Sistema Planetário), qual foi a conclusão revolucionária do experimento da lâmina de ouro sobre a estrutura física do átomo?",
        verso_principal: "Provou que o átomo é, em sua maior parte, um **imenso vazio** (a Eletrosfera).",
        explicacao_detalhada: "Ao notar que a esmagadora maioria das partículas alfa atravessava a lâmina de ouro sem desviar, Rutherford concluiu que a matéria não é compacta. O átomo possui um núcleo central minúsculo, extremamente denso e de carga positiva (onde se concentra a massa), orbitado por elétrons muito distantes na eletrosfera.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_4",
        categoria: "Química",
        assunto: "Atomística - Modelos Atômicos",
        frente: "**Tática de Prova:** Fenômenos de emissão de luz colorida (fogos de artifício, luz neon, teste de chama) são explicados exclusivamente por qual modelo atômico e através de qual conceito?",
        verso_principal: "Modelo de **Bohr**.\nConceito: **Salto Quântico**.",
        explicacao_detalhada: "Bohr postulou que os elétrons giram em órbitas circulares com níveis de energia quantizados (fixos). Quando um elétron recebe energia (calor, eletricidade), ele salta para uma camada mais externa (estado excitado). Como esse estado é instável, ele logo retorna à sua órbita de origem, **devolvendo a energia exata que absorveu na forma de luz (fóton)**.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_5",
        categoria: "Química",
        assunto: "Atomística - Estrutura Atômica",
        frente: "Qual é a equação do **Número de Massa** ($A$) de um átomo e por que os elétrons não entram nessa conta?",
        verso_principal: "$$A = Z + n$$",
        explicacao_detalhada: "Onde $Z$ é o número de Prótons e $n$ é o número de Nêutrons. \nOs elétrons não entram na soma porque a massa de um único elétron é aproximadamente 1836 vezes menor que a de um próton, sendo considerada matematicamente **desprezível** para o cálculo da massa atômica total.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_6",
        categoria: "Química",
        assunto: "Atomística - Estrutura Atômica",
        frente: "**A Trindade da Semelhança:** Como diferenciar rapidamente as relações atômicas entre Isóto**p**os, Isób**a**ros e Isóto**n**os?",
        verso_principal: "Isóto**p**os: Mesmo nº de **Prótons**.\nIsób**a**ros: Mesmo nº de **Massa** ($A$).\nIsóto**n**os: Mesmo nº de **Nêutrons**.",
        explicacao_detalhada: "Lembre-se da regra elementar: se são Isótopos (mesmo $Z$), eles **obrigatoriamente pertencem ao mesmo elemento químico** (ex: Carbono-12 e Carbono-14). Se mudou o número de prótons, mudou a identidade do elemento.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_7",
        categoria: "Química",
        assunto: "Atomística - Distribuição Eletrônica",
        frente: "**O Rascunho Implacável:** Como estruturar rapidamente as linhas e colunas do Diagrama de Pauling no rascunho da prova sem errar o alinhamento?",
        verso_principal: "Mnemônico: **SÓ PDF DE 4** + Numeração (**17, 27, 36, 45**).",
        explicacao_detalhada: "Para não errar a escadinha, anote os limites de cada subnível de cima para baixo:\n- Coluna do **s**: vai do **1** ao **7** ($1s \\dots 7s$).\n- Coluna do **p**: vai do **2** ao **7** ($2p \\dots 7p$).\n- Coluna do **d**: vai do **3** ao **6** ($3d \\dots 6d$).\n- Coluna do **f**: vai do **4** ao **5** ($4f, 5f$).\nDepois é só traçar as setas em diagonais paralelas cortando da direita para a esquerda.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_8",
        categoria: "Química",
        assunto: "Atomística - Distribuição Eletrônica",
        frente: "**A Armadilha do Cátion (2ª Fase):** Ao realizar a distribuição eletrônica de um Cátion metálico de transição (ex: $Fe^{2+}$, que perdeu 2 elétrons), de onde esses elétrons devem ser retirados obrigatoriamente?",
        verso_principal: "Da **Camada de Valência** (a camada mais externa).",
        explicacao_detalhada: "**Erro Fatal:** Nunca retire os elétrons do subnível mais energético (o último a ser preenchido pelas setas do diagrama, que geralmente é um $d$).\n**A Regra Correta:** Faça a distribuição do átomo neutro primeiro. Depois, localize o maior número quântico principal (ex: o $4s^2$) e arranque os elétrons de lá. O elétron é perdido da superfície do átomo, não do seu interior energético.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_9",
        categoria: "Química",
        assunto: "Atomística - Distribuição Eletrônica",
        frente: "Como é feita a distribuição eletrônica de um Íon Negativo (Ânion, ex: $O^{2-}$)?",
        verso_principal: "Some os elétrons ganhos ao número original e **distribua o total direto** no diagrama.",
        explicacao_detalhada: "Diferente dos cátions metálicos de transição (que exigem o rascunho do átomo neutro primeiro para não errar a camada de valência), os ânions ganham elétrons que continuam preenchendo os subníveis normalmente, seguindo a ordem energética das setas de Pauling de forma contínua.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_10",
        categoria: "Química",
        assunto: "Atomística - Modelos Atômicos",
        frente: "Qual experimento derrubou a teoria da indivisibilidade do átomo de Dalton e qual foi a conclusão do cientista?",
        verso_principal: "O experimento dos **Raios Catódicos** (Ampola de Crookes). Descobriu o **Elétron**.",
        explicacao_detalhada: "J.J. Thomson provou experimentalmente a natureza elétrica da matéria. Com o modelo do \"pudim de passas\", ele atestou que o átomo é divisível, possuindo partículas subatômicas de carga negativa (elétrons) encrustadas em uma esfera fluida positiva.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_11",
        categoria: "Química",
        assunto: "Atomística - Modelos Atômicos",
        frente: "O que o experimento da lâmina de ouro de Rutherford provou sobre a proporção geométrica do átomo?",
        verso_principal: "Provou que o átomo é majoritariamente **espaço vazio**.",
        explicacao_detalhada: "Ele demonstrou fisicamente que a eletrosfera (o espaço gigantesco e vazio onde os elétrons orbitam) é de 10.000 a 100.000 vezes maior que o núcleo. O núcleo, por sua vez, atua como um centro minúsculo, incrivelmente denso e de carga positiva.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_12",
        categoria: "Química",
        assunto: "Atomística - Modelos Atômicos",
        frente: "No modelo de Bohr, qual é a dinâmica exata do elétron para que ocorra a **emissão de luz** (teste de chama, neon, fogo de artifício)?",
        verso_principal: "A luz (fóton) SÓ é emitida no **retorno** do elétron para um nível mais interno.",
        explicacao_detalhada: "**A Regra do Salto Quântico:** \n1) O elétron absorve energia externa (calor/eletricidade) e salta para uma camada mais externa (estado excitado e instável).\n2) Quando a fonte de energia cessa, ele **retorna** para a sua órbita fundamental. É exatamente nesse ato de retorno que ele libera a cota de energia absorvida na forma de luz.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_13",
        categoria: "Química",
        assunto: "Atomística - Modelos Atômicos",
        frente: "**Tática ITA/FUVEST:** Qual é a diferença fundamental entre as trajetórias dos elétrons no modelo de Bohr e no modelo atual da Mecânica Quântica?",
        verso_principal: "Bohr usa **Órbitas** (trajetórias clássicas). Quântica usa **Orbitais** (probabilidade).",
        explicacao_detalhada: "- **Bohr:** O elétron descreve órbitas circulares rigorosas, possuindo raio e energia perfeitamente definidos (Física Clássica).\n- **Quântica:** Respeitando o Princípio da Incerteza de Heisenberg, é impossível calcular a posição e velocidade exatas do elétron. O elétron passa a ocupar os \"Orbitais\", que são nuvens matemáticas que representam a região de máxima probabilidade de se encontrar o elétron.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_14",
        categoria: "Química",
        assunto: "Atomística - Modelos Atômicos",
        frente: "Por que o modelo de Dalton era incapaz de explicar a condução de eletricidade em gases submetidos a altas tensões?",
        verso_principal: "Porque o seu modelo (Bola de Bilhar) era desprovido de **cargas elétricas**.",
        explicacao_detalhada: "Dalton concebia o átomo apenas como uma esfera maciça, neutra e compacta. Fenômenos de condução elétrica exigem o trânsito de partículas carregadas. A eletricidade só pôde ser explicada quimicamente a partir do modelo de Thomson ou posteriores.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "qui_atom_15",
        categoria: "Química",
        assunto: "Atomística - Modelos Atômicos",
        frente: "O modelo atômico de Thomson possuía **núcleo** central e **órbitas** para os elétrons?",
        verso_principal: "**Não.** Era uma esfera difusa única.",
        explicacao_detalhada: "Pegadinha de prova: Núcleo e eletrosfera não existem no modelo de Thomson. Para ele, todo o volume do átomo era uma massa positiva fluida, pontilhada por elétrons presos nela. A divisão morfológica entre \"núcleo\" e \"eletrosfera orbitante\" só surge mais tarde, com Rutherford.",
        caixa: 0,
        proximaRevisao: Date.now()
    }
];