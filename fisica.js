const deckFisica = [
    {
        id: "fis_vetores_1",
        categoria: "Física",
        assunto: "Análise Vetorial",
        frente: "O que é o Produto Escalar ($\\vec{u} \\cdot \\vec{v}$)? Quais são as duas fórmulas para calculá-lo e o que ele gera no final?",
        verso_principal: "Gera um **NÚMERO** (escalar).\n\n**Algébrica:** $$\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2 + z_1z_2$$\n**Geométrica:** $$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\theta)$$",
        explicacao_detalhada: "**Tática de Combate:** Use a fórmula geométrica sempre que a questão pedir para descobrir o ângulo $\\theta$ entre os vetores. Você calcula o produto pela forma algébrica, acha os módulos por Pitágoras, e isola o $\\cos(\\theta)$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_vetores_2",
        categoria: "Física",
        assunto: "Análise Vetorial",
        frente: "**Tática de Combate:** Se a questão da FUVEST disser que \"o vetor $\\vec{u}$ é perpendicular (ou ortogonal) ao vetor $\\vec{v}$\", qual é a ÚNICA equação que você deve escrever imediatamente?",
        verso_principal: "O Produto Escalar Zera:\n$${\\vec{u} \\cdot \\vec{v} = 0}$$",
        explicacao_detalhada: "Isso acontece rigorosamente porque o $\\cos(90^\\circ)$ é zero, anulando a fórmula geométrica.\n\nEssa é a ferramenta número 1 nas segundas fases para achar coordenadas desconhecidas (ex: quando a questão te dá um vetor e pede para achar outro vetor genérico ortogonal a ele).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_vetores_3",
        categoria: "Física",
        assunto: "Análise Vetorial",
        frente: "O que é o Produto Vetorial ($\\vec{u} \\times \\vec{v}$), como se calcula, e qual é a principal característica geométrica do resultado?",
        verso_principal: "Ele gera um **NOVO VETOR** que é estritamente perpendicular a AMBOS os originais.",
        explicacao_detalhada: "**Como calcular:** Montando o determinante de uma matriz $3 \\times 3$. A primeira linha é sempre de versores unitários ($\\hat{i}, \\hat{j}, \\hat{k}$). A segunda é o vetor $\\vec{u}$. A terceira é o vetor $\\vec{v}$.\n\n**Mágica:** É a melhor forma de criar o vetor normal (ortogonal) à superfície de um plano, essencial para a equação geral do plano no R3.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_vetores_4",
        categoria: "Física",
        assunto: "Análise Vetorial",
        frente: "Geometricamente, o que o módulo (o tamanho) do Produto Vetorial ($|\\vec{u} \\times \\vec{v}|$) representa na vida real?",
        verso_principal: "Representa a **ÁREA DO PARALELOGRAMO** formado pelos dois vetores.",
        explicacao_detalhada: "**Fórmula geométrica:** $|\\vec{u} \\times \\vec{v}| = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\sin(\\theta)$\n\n**Bizu de Ouro:** Se a questão pedir a área do triângulo formado pelas pontas dos vetores, basta fazer o produto vetorial, calcular o módulo do vetor resultante e dividir o valor por 2.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_vetores_5",
        categoria: "Física",
        assunto: "Análise Vetorial",
        frente: "Se a questão afirmar que os vetores $\\vec{u}$ e $\\vec{v}$ são **paralelos (ou colineares)**, o que acontece com o Produto Vetorial deles?",
        verso_principal: "O produto vetorial dá o **Vetor Nulo** ($\\vec{0}$).\n$${\\vec{u} \\times \\vec{v} = (0, 0, 0)}$$",
        explicacao_detalhada: "Isso ocorre porque o ângulo entre eles é $0^\\circ$ (mesmo sentido) ou $180^\\circ$ (sentidos opostos), e em ambos os casos o seno vale zero.\n\nNa visão espacial, a área do paralelogramo formado entre eles \"colapsa\" para zero.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_vetores_6",
        categoria: "Física",
        assunto: "Análise Vetorial",
        frente: "O que é o Produto Misto $(\\vec{u}, \\vec{v}, \\vec{w})$ e como calculá-lo de forma direta sem fazer contas separadas?",
        verso_principal: "É a operação misturada: $\\vec{u} \\cdot (\\vec{v} \\times \\vec{w})$. O resultado é um **NÚMERO**.",
        explicacao_detalhada: "**Como calcular rápido:** Monte uma única matriz determinante $3 \\times 3$, colocando as coordenadas (x, y, z) do $\\vec{u}$ na primeira linha, do $\\vec{v}$ na segunda e do $\\vec{w}$ na terceira. O valor real desse determinante já é a resposta do Produto Misto.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_vetores_7",
        categoria: "Física",
        assunto: "Análise Vetorial",
        frente: "Geometricamente, o que o módulo (valor absoluto) do Produto Misto $|(\\vec{u}, \\vec{v}, \\vec{w})|$ representa?",
        verso_principal: "O **VOLUME DO PARALELEPÍPEDO** formado pelos três vetores.",
        explicacao_detalhada: "**A Aplicação ITA/FUVEST:** Se a questão pedir o volume do **Tetraedro** (a pirâmide de base triangular) formado por esses 3 vetores espaciais, basta calcular o produto misto, tirar o módulo e dividir exatamente por 6: $$V = \\frac{|(\\vec{u}, \\vec{v}, \\vec{w})|}{6}$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_vetores_8",
        categoria: "Física",
        assunto: "Análise Vetorial",
        frente: "**Tática de Combate:** Se a FUVEST ou o ITA perguntarem se três vetores \"são coplanares\" (vivem no mesmo plano bidimensional), qual é a prova irrefutável que você deve testar?",
        verso_principal: "Calcule o Produto Misto. **Se der ZERO, eles são coplanares!**\n$$(\\vec{u}, \\vec{v}, \\vec{w}) = 0 \\iff \\text{São Coplanares}$$",
        explicacao_detalhada: "**Raciocínio Geométrico Rigoroso:** Se os três vetores estão \"esmagados\" na mesma folha de papel (2D), não há vetor subindo em profundidade, portanto não há altura. O volume do sólido 3D colapsa inexoravelmente para zero. Essa é a ferramenta matriz para verificar a dependência linear entre 3 vetores do R3.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_cine_1",
        categoria: "Física",
        assunto: "Cinemática",
        frente: "**O Diagnóstico de Prova:** Ao ler o enunciado, como identificar instantaneamente se a questão é de MRU ou MRUV? Quais as palavras-chave?",
        verso_principal: "**MRU:** Aceleração $a = 0$ (Velocidade constante)\n**MRUV:** Aceleração $a \\neq 0$ constante (Velocidade muda num ritmo fixo)",
        explicacao_detalhada: "**Gatilhos de Enunciado:**\n- **Para MRU:** \"mantém a velocidade\", \"velocidade de cruzeiro\", \"rapidez constante\".\n- **Para MRUV:** \"parte do repouso\" ($V_0 = 0$), \"freia até parar\" ($V_f = 0$), \"acelera a $x \\text{ m/s}^2$\".",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_cine_2",
        categoria: "Física",
        assunto: "Cinemática",
        frente: "Qual é a equação horária do espaço no **MRU**, seu mnemônico, e como deduzi-la em 5 segundos usando a definição básica de velocidade?",
        verso_principal: "$$S = S_0 + v \\cdot t$$\n*(Mnemônico: Sorvete)*",
        explicacao_detalhada: "**Dedução (A Raiz do Movimento):**\nVelocidade é a distância pelo tempo: $v = \\frac{\\Delta S}{\\Delta t}$.\nAbrindo o delta: $v = \\frac{S - S_0}{t - 0}$. Multiplicando cruzado e passando o $S_0$ somando, você chega à fórmula.\n\n**A Lógica Física:** \"Onde estou agora ($S$) = Onde comecei ($S_0$) + O quanto andei ($v \\cdot t$)\".",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_cine_3",
        categoria: "Física",
        assunto: "Cinemática",
        frente: "Qual a equação horária da velocidade no **MRUV**, seu mnemônico, e a sua dedução a partir do conceito central de aceleração?",
        verso_principal: "$$V = V_0 + a \\cdot t$$\n*(Mnemônico: Vi Você à Toa / Vovô Ateu)*",
        explicacao_detalhada: "**Dedução Matemática:**\nAceleração é o ritmo que a velocidade muda: $a = \\frac{\\Delta V}{\\Delta t}$.\nAbrindo o delta: $a = \\frac{V - V_0}{t}$. Multiplicando cruzado, temos $a \\cdot t = V - V_0$. Isolando a velocidade final, a fórmula nasce.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_cine_4",
        categoria: "Física",
        assunto: "Cinemática",
        frente: "Qual a equação horária do espaço no **MRUV**, seu mnemônico, e de onde ela vem (a demonstração gráfica cobrada na FUVEST)?",
        verso_principal: "$$S = S_0 + V_0 \\cdot t + \\frac{a \\cdot t^2}{2}$$\n*(Mnemônico: Sorvetão)*",
        explicacao_detalhada: "**A Dedução Gráfica:** A distância percorrida ($\\Delta S$) é rigorosamente igual à **Área do Gráfico $V \\times t$**.\nNo MRUV, o gráfico é uma reta inclinada, formando um **Trapézio**.\nSe você dividir esse trapézio em um Retângulo (embaixo) e um Triângulo (em cima):\n1. Área do Retângulo: $V_0 \\cdot t$\n2. Área do Triângulo: $\\frac{\\text{base} \\cdot \\text{altura}}{2} = \\frac{t \\cdot \\Delta V}{2}$. Como $\\Delta V = a \\cdot t$, a área do triângulo fica $\\frac{a \\cdot t^2}{2}$.\nSomando essas duas partes, você acha o $\\Delta S$ do Sorvetão.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_cine_5",
        categoria: "Física",
        assunto: "Cinemática",
        frente: "**Tática de Combate:** Em qual cenário você abandona as outras fórmulas e usa a **Equação de Torricelli**? Qual é a equação e como ela foi criada matematicamente?",
        verso_principal: "**Cenário Ouro:** O tempo ($t$) **NÃO** é dado e **NÃO** é pedido.\n$$V^2 = V_0^2 + 2 \\cdot a \\cdot \\Delta S$$",
        explicacao_detalhada: "*(Mnemônico: Vovô e Vovó mais 2 Amigos num Triângulo Sentados)*\n\n**A Fusão Algébrica:** Você isola o tempo na equação do \"Vovô Ateu\" ($t = \\frac{V - V_0}{a}$) e joga essa fração monstra dentro de todos os $t$ da equação do \"Sorvetão\". A álgebra fará o tempo evaporar da conta, sobrando apenas Torricelli. Salva sua vida em quedas livres e colisões.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_cine_6",
        categoria: "Física",
        assunto: "Cinemática",
        frente: "**Tática de Fuga (O Velocímetro Médio):** Se você tiver a velocidade inicial e a final de um corpo em MRUV, como achar a Velocidade Média sem usar a distância e o tempo?",
        verso_principal: "É a simples **Média Aritmética** das velocidades extremas:\n$$V_m = \\frac{V_{\\text{inicial}} + V_{\\text{final}}}{2}$$",
        explicacao_detalhada: "**Aviso:** Essa regra MÁGICA só funciona no MRUV, onde o gráfico é linear.\n\n**Uso Letal em Prova:** Calcule a $V_m$ rapidamente usando apenas as duas velocidades (ex: $10 \\text{ m/s}$ e $30 \\text{ m/s}$ dá média $20$). Depois, jogue esse valor na fórmula de criança do MRU ($V_m = \\frac{\\Delta S}{\\Delta t}$) para achar o tempo ou a distância. Você mata uma questão complexa sem precisar tocar num Sorvetão ou Bhaskara.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "fis_cine_7",
        categoria: "Física",
        assunto: "Cinemática",
        frente: "**A Proporção de Galileu:** Se um corpo parte do repouso em MRUV (ex: queda livre ou frenagem total), como as distâncias percorridas a cada segundo (ou cada intervalo fixo de tempo) se comportam?",
        verso_principal: "Crescem na proporção mágica dos **Números Ímpares**:\n$$d, 3d, 5d, 7d, \\dots$$",
        explicacao_detalhada: "**Como usar:** Se no 1º segundo a pedra caiu $d$, no 2º segundo ela cai $3d$ a mais (totalizando $4d$), no 3º segundo cai $5d$ a mais (totalizando $9d$), etc. (onde $d = \\frac{a}{2} \\cdot t^2$).\n\nEssa proporção aniquila equações difíceis, permitindo que você resolva questões visuais de gotas caindo da torneira, flashes de fotos estroboscópicas ou marcas de frenagem de pneus na pista apenas contando os blocos da figura.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
];