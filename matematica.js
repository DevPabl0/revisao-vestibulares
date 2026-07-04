const deckMatematica = [
    {
        id: "mat_conj_1",
        categoria: "Matemática",
        assunto: "Teoria dos Conjuntos",
        frente: "Qual a diferença formal entre os símbolos de Pertinência ($\\in$) e Inclusão ($\\subset$)?",
        verso_principal: "$\\in$ relaciona **Elemento $\\rightarrow$ Conjunto**.<br>$\\subset$ relaciona **Conjunto $\\rightarrow$ Conjunto**.",
        explicacao_detalhada: "**Conceito Central:** Tipagem de relações lógicas na Teoria dos Conjuntos.\n\nO símbolo $\\in$ indica que um ente atômico faz parte da coleção. O símbolo $\\subset$ (está contido) indica que todos os elementos de um subconjunto também pertencem a um conjunto maior.\n\n**Raciocínio para Provas:**\nA banca costuma testar a atenção com o conjunto vazio e conjuntos unitários. \nLembre-se:\n1. O conjunto vazio está contido em qualquer conjunto ($\\emptyset \\subset A$), mas **não pertence** a ele, a menos que $\\emptyset$ esteja explicitamente listado como um elemento dentro das chaves (ex: $A = \\{1, 2, \\emptyset\\}$).\n2. Se $A = \\{1, 2, 3\\}$, então $1 \\in A$, mas $\\{1\\} \\subset A$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_conj_2",
        categoria: "Matemática",
        assunto: "Teoria dos Conjuntos",
        frente: "Definição formal e lógica de Subconjunto ($B \\subset A$)",
        verso_principal: "$$B \\subset A \\iff (\\forall x)(x \\in B \\implies x \\in A)$$",
        explicacao_detalhada: "**Conceito Central:** Implicação Lógica Universal.\n\n**Leitura:** $B$ está contido em $A$ se, e somente se, para todo $x$, se $x$ pertence a $B$, então implica que $x$ também pertence a $A$.\n\n**Propriedades fundamentais:**\n1. $\\emptyset \\subset A$ (O vazio é subconjunto universal)\n2. $A \\subset A$ (Reflexividade: Todo conjunto é subconjunto de si mesmo)\n3. Se $A \\subset B$ e $B \\subset C$, logo $A \\subset C$ (Transitividade)\n4. Igualdade de conjuntos: $A = B \\iff (A \\subset B \\text{ e } B \\subset A)$. Essa é a forma mais rigorosa de provar que dois conjuntos são iguais em uma questão dissertativa.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_conj_3",
        categoria: "Matemática",
        assunto: "Teoria dos Conjuntos",
        frente: "Fórmula da Cardinalidade do Conjunto das Partes (Conjunto Potência)",
        verso_principal: "$$n(\\mathcal{P}(A)) = 2^{n(A)}$$",
        explicacao_detalhada: "**Conceito Central:** Cardinalidade e Análise Combinatória Básica.\n\nO conjunto das partes $\\mathcal{P}(A)$ é o conjunto formado por *todos* os subconjuntos possíveis que podem ser extraídos de $A$.\n\n**Raciocínio Combinatório:**\nSe $A$ possui $n$ elementos, para formar um subconjunto, tomamos $n$ decisões independentes: cada elemento de $A$ tem **2 opções** (entrar ou não entrar no subconjunto). Pelo Princípio Fundamental da Contagem, o total de formações é $\\underbrace{2 \\cdot 2 \\cdot 2 \\dots 2}_{n \\text{ vezes}} = 2^n$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_conj_4",
        categoria: "Matemática",
        assunto: "Teoria dos Conjuntos",
        frente: "Fórmulas do Princípio da Inclusão e Exclusão (Para 2 e 3 conjuntos)",
        verso_principal: "$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$",
        explicacao_detalhada: "**Conceito Central:** Contagem sem repetição e Teoria das Probabilidades.\n\n**Para 3 conjuntos (Frequente na 2ª Fase USP):**\n$$n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(A \\cap C) - n(B \\cap C) + n(A \\cap B \\cap C)$$\n\n**Raciocínio:**\nSomamos as partes individuais. Ao fazer isso, contamos as interseções duplas duas vezes, então as subtraímos. Ao subtrair todas as interseções duplas, acabamos removendo a interseção tripla completamente, portanto, precisamos somá-la de volta no final.\n\n*Nota:* Em probabilidade, basta dividir tudo pelo espaço amostral para obter $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_conj_5",
        categoria: "Matemática",
        assunto: "Teoria dos Conjuntos",
        frente: "Definição formal de Diferença ($A - B$) e Conjunto Complementar ($C_A^B$)",
        verso_principal: "$$A - B = \\{x \\mid x \\in A \\text{ e } x \\notin B\\}$$",
        explicacao_detalhada: "**Conceito Central:** Operações de Exclusão.\n\n**Diferença:** São os elementos exclusivos de $A$, que não fazem parte de $B$. Na lógica, isso equivale a $A \\cap \\bar{B}$.\n\n**Complementar:** O complementar de $B$ em relação a $A$ (notação $C_A^B$ ou $\\bar{B}$) é rigorosamente a mesma operação de diferença ($A - B$), porém **exige a condição obrigatória de existência** de que $B \\subset A$. É o que \"falta\" para $B$ se tornar igual a $A$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_conj_6",
        categoria: "Matemática",
        assunto: "Teoria dos Conjuntos",
        frente: "Teorema de De Morgan para Conjuntos",
        verso_principal: "$$\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}$$\n$$\\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}$$",
        explicacao_detalhada: "**Conceito Central:** Equivalência Lógica em Complementares.\n\nO traço superior ($\\bar{A}$) indica o conjunto complementar (ou a negação lógica).\n\n**Raciocínio aplicado:**\n1. O que não pertence à união (não está nem em $A$ nem em $B$) é a interseção dos que não estão em $A$ com os que não estão em $B$.\n2. O que não pertence à interseção (não está em ambos simultaneamente) é a união dos que não estão em $A$ com os que não estão em $B$.\n\n*Conexão:* Essencial para simplificar expressões em Lógica Proposicional ($ \\sim(p \\lor q) \\equiv \\sim p \\land \\sim q$).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geom_circ_1",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "Na circunferência, qual é a relação do **Ângulo Central** com o arco que ele intercepta?",
        verso_principal: "O ângulo é **igual** ao arco.",
        explicacao_detalhada: "O vértice deste ângulo fica posicionado exatamente no centro geométrico da circunferência.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geom_circ_2",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "Na circunferência, qual é a relação do **Ângulo Inscrito** com o arco que ele intercepta?",
        verso_principal: "$$\\text{Ângulo} = \\frac{\\text{Arco}}{2}$$",
        explicacao_detalhada: "O ângulo é sempre a metade do arco. O vértice fica encostado na borda da circunferência (a 'borda da pista').",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geom_circ_3",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "Qual é a regra e a fórmula do **Ângulo Excêntrico Exterior** (A Regra do Atirador)?",
        verso_principal: "$$\\theta = \\frac{\\text{Arco Maior} - \\text{Arco Menor}}{2}$$",
        explicacao_detalhada: "O ângulo formado fora da circunferência é a **metade da diferença** entre os dois arcos que a visão dele 'recorta'.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geom_circ_4",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "Qual é a regra e a fórmula do **Ângulo Excêntrico Interior**?",
        verso_principal: "$$\\theta = \\frac{\\text{Arco da Frente} + \\text{Arco de Trás}}{2}$$",
        explicacao_detalhada: "Se duas retas se cruzam dentro da circunferência (mas fora do centro), o ângulo formado é a **média aritmética (soma)** dos arcos interceptados por ele e pelo seu oposto pelo vértice.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geom_circ_5",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "**Gatilho de Visão:** Ao desenhar traços auxiliares ligando o centro de uma circunferência a pontos na borda, qual figura se forma com frequência para caçar ângulos?",
        verso_principal: "**Triângulos Isósceles**",
        explicacao_detalhada: "Todas as linhas que saem do centro para a borda são Raios ($R$), garantindo dois lados iguais. Se o triângulo tem dois lados iguais, obrigatoriamente terá os **ângulos da base iguais**.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geom_notaveis_1",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "Qual é o macete mnemônico definitivo para associar os **Pontos Notáveis** às retas que os formam?",
        verso_principal: "**BICO** $\\rightarrow$ **MBMA**",
        explicacao_detalhada: "**B**aricentro $\\rightarrow$ **M**ediana\n**I**ncentro $\\rightarrow$ **B**issetriz\n**C**ircuncentro $\\rightarrow$ **M**ediatriz\n**O**rtocentro $\\rightarrow$ **A**ltura",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geom_notaveis_2",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "O que é o **Incentro**, o que ele gera e qual a sua fórmula fatal de área?",
        verso_principal: "Encontro das **Bissetrizes**.\n$$A = p \\cdot r$$",
        explicacao_detalhada: "Ele é o centro da circunferência inscrita (o círculo interno). A distância dele para os lados é igual ao raio ($r$). Na fórmula, $p$ representa o semiperímetro.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geom_notaveis_3",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "Qual é a regra de ouro do **Baricentro** (encontro das medianas)?",
        verso_principal: "A Proporção **2:1**.",
        explicacao_detalhada: "O Baricentro corta a mediana em duas partes: o pedaço que sai do vértice até o ponto é sempre o **dobro** do pedaço que vai do ponto até a base.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geom_notaveis_4",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "Onde fica localizado o **Circuncentro** (encontro das mediatrizes) quando o triângulo é retângulo?",
        verso_principal: "Exatamente no **meio da hipotenusa**.",
        explicacao_detalhada: "Isso significa que a mediana relativa à hipotenusa em um triângulo retângulo vale exatamente a metade da hipotenusa (pois ambas formam raios da circunferência circunscrita).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geom_gatilhos_1",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "**Gatilho de Texto:** Se a questão crava que três segmentos de reta partindo do mesmo vértice são iguais ($AB = AC = AD$), o que você deve enxergar?",
        verso_principal: "A definição de uma **Circunferência Oculta**.",
        explicacao_detalhada: "O vértice central ($A$) é o centro de um círculo invisível, e os segmentos são os raios ($R$). O triângulo formado pelas pontas (B, C e D) está inscrito nessa circunferência.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geom_gatilhos_2",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "**Interpretação de Enunciado:** 'Seja ABC um triângulo retângulo e AD a altura relativa à hipotenusa'. Onde está o ângulo de $90^\\circ$?",
        verso_principal: "Obrigatoriamente no **vértice A**.",
        explicacao_detalhada: "A altura sempre sai de um vértice e bate no lado oposto fazendo $90^\\circ$. Se a base $BC$ é a hipotenusa, o vértice $A$ que 'olha' para ela é necessariamente o ângulo reto do triângulo maior.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geom_gatilhos_3",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "**Gatilho de Triângulo Escondido:** Se você descobrir que um triângulo é isósceles (dois lados iguais) e um de seus ângulos vale $60^\\circ$, o que ele é na verdade?",
        verso_principal: "Um **Triângulo Equilátero**.",
        explicacao_detalhada: "Ele sofre um colapso geométrico. A presença de um único ângulo de $60^\\circ$ num triângulo que possui simetria (isósceles) força os outros dois ângulos a fecharem em $60^\\circ$, tornando os 3 lados e os 3 ângulos perfeitamente iguais.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
 {
        id: "mat_geo_circ_1",
        categoria: "Matemática",
        assunto: "Geometria Plana (Triângulos e Círculos)",
        frente: "Em um triângulo retângulo, onde se localiza o centro da **circunferência circunscrita** (circuncentro) e qual a relação do raio ($R$) com a hipotenusa ($a$)?",
        verso_principal: "O circuncentro localiza-se exatamente no **ponto médio da hipotenusa**.\n$$R = \\frac{a}{2}$$",
        explicacao_detalhada: "**Nota Tática (FUVEST/ITA):** A mediana relativa à hipotenusa também parte do ângulo reto e vai até o ponto médio, logo, ela tem medida exata igual ao raio $R$.\n\n<img src='img/geometria1.png' alt='Circunferência Circunscrita' style='width: 100%; max-width: 600px; margin-top: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);'>",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geo_circ_2",
        categoria: "Matemática",
        assunto: "Geometria Plana (Triângulos e Círculos)",
        frente: "Dado um triângulo retângulo de catetos $b$ e $c$ e hipotenusa $a$, qual é a fórmula direta para encontrar o raio da **circunferência inscrita** ($r$) usando a propriedade das tangentes?",
        verso_principal: "$$r = \\frac{b + c - a}{2}$$",
        explicacao_detalhada: "**A dedução geométrica (Teorema de Poncelet):** O incentro forma um quadrado de lado $r$ no ângulo reto. Pelos segmentos tangentes, a hipotenusa é a soma das sobras dos catetos: $a = (c - r) + (b - r)$.\n\n*(Equivalência de Ouro FUVEST/ITA: A soma dos catetos é igual à soma do diâmetro inscrito com o diâmetro circunscrito $\\rightarrow b + c = 2r + 2R$)*.\n\n<img src='img/geometria2.png' alt='Circunferência Inscrita' style='width: 100%; max-width: 600px; margin-top: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);'>",
        caixa: 0,
        proximaRevisao: Date.now()
    },




    //geometria aqui para cima
//

//trigonometria aqui para baixo
{
        id: "mat_trigo_1",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "Qual é a Relação Fundamental da Trigonometria e como deduzir as fórmulas da Secante e Cossecante a partir dela na hora da prova?",
        verso_principal: "A mãe de todas:\n$${\\sin^2(x) + \\cos^2(x) = 1}$$",
        explicacao_detalhada: "**Demonstração original:** Pitágoras no triângulo retângulo dentro do ciclo trigonométrico (onde a hipotenusa, que é o raio, vale $1$).\n\n**Para achar a Secante:** Divida a equação inteira por $\\cos^2(x)$. O resultado será:\n$$\\tan^2(x) + 1 = \\sec^2(x)$$\n\n**Para achar a Cossecante:** Divida a equação inteira por $\\sin^2(x)$. O resultado será:\n$$1 + \\cot^2(x) = \\csc^2(x)$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_2",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "Qual a fórmula da soma/subtração para o Seno ($\\sin(A \\pm B)$)? Qual é o mnemônico?",
        verso_principal: "$$\\sin(A \\pm B) = \\sin(A)\\cos(B) \\pm \\sin(B)\\cos(A)$$",
        explicacao_detalhada: "**Mnemônico poético:** \"Minha terra tem palmeiras onde canta o sabiá, SENO A COSSENO B, SENO B COSSENO A.\"\n\n*Nota tática:* O seno é 'fiel', ele mantém o sinal de $+$ ou $-$ que estava dentro do parênteses original.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_3",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "Qual a fórmula da soma/subtração para o Cosseno ($\\cos(A \\pm B)$)? Qual é o mnemônico?",
        verso_principal: "$$\\cos(A \\pm B) = \\cos(A)\\cos(B) \\mp \\sin(A)\\sin(B)$$",
        explicacao_detalhada: "**Mnemônico:** \"COSSa A, COSSa B, troca o sinal, SEM Sabe.\"\n\n*Nota tática:* O cosseno é 'traidor', ele inverte o sinal da operação: se era soma, vira subtração e vice-versa.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_4",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "Fórmulas do Arco Duplo para Seno e Cosseno ($\\sin(2x)$ e $\\cos(2x)$). Como demonstrar isso em 10 segundos?",
        verso_principal: "$$\\sin(2x) = 2\\sin(x)\\cos(x)$$\n$$\\cos(2x) = \\cos^2(x) - \\sin^2(x)$$",
        explicacao_detalhada: "**Demonstração rápida:** Basta pegar as fórmulas de adição de arcos e substituir o $B$ por $A$. Fica $\\sin(A+A)$ e $\\cos(A+A)$. O resto é a matemática algébrica básica atuando sobre elas.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_5",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "Dada a função $f(x) = a + b \\cdot \\sin(cx + d)$, qual parâmetro altera o período do gráfico e qual é a fórmula para calculá-lo?",
        verso_principal: "Apenas o parâmetro **$c$** afeta o período.\n**Seno e Cosseno:** $$P = \\frac{2\\pi}{|c|}$$\n**Tangente e Cotangente:** $$P = \\frac{\\pi}{|c|}$$",
        explicacao_detalhada: "O parâmetro que multiplica o $x$ atua como uma 'sanfona', espremendo ou esticando o gráfico na horizontal.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_6",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "Classifique as funções Seno, Cosseno e Tangente quanto à Paridade (Par ou Ímpar) e o que isso significa algebricamente.",
        verso_principal: "**Cosseno é PAR** (engole o sinal).\n**Seno e Tangente são ÍMPARES** (cospem o sinal).",
        explicacao_detalhada: "**Cosseno:** $\\cos(-x) = \\cos(x)$. É simétrico em relação ao eixo y.\n**Seno:** $\\sin(-x) = -\\sin(x)$. É simétrico em relação à origem.\n**Tangente:** $\\tan(-x) = -\\tan(x)$. Também cospe o sinal para fora.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_7",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "Quais são as restrições de Domínio (assíntotas no gráfico) para as funções Tangente, Cotangente, Secante e Cossecante?",
        verso_principal: "**O denominador nunca pode ser zero!**",
        explicacao_detalhada: "**$\\tan(x)$ e $\\sec(x)$:** Ambas têm $\\cos(x)$ no denominador. O cosseno zera no eixo vertical do ciclo. Logo, o domínio é $x \\neq \\frac{\\pi}{2} + k\\pi$.\n\n**$\\cot(x)$ e $\\csc(x)$:** Ambas têm $\\sin(x)$ no denominador. O seno zera no eixo horizontal. Logo, o domínio é $x \\neq k\\pi$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_8",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "O que significa, em português claro, a notação $y = \\arcsin(x)$ ou $y = \\arccos(x)$?",
        verso_principal: "\"Qual é o **ângulo** ($y$) cujo valor do seno/cosseno é igual a ($x$)?\"",
        explicacao_detalhada: "**Exemplo prático:** $\\arcsin(1/2) = 30^\\circ$ (ou $\\frac{\\pi}{6}$), pois o seno de $30^\\circ$ é exatamente $1/2$. A resposta de uma função inversa trigonométrica é sempre um arco (ângulo).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_9",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "Por que o gráfico do $\\arcsin(x)$ e $\\arccos(x)$ não é infinito? Em quais quadrantes cada função inversa 'mora' para ser considerada uma função válida?",
        verso_principal: "Para ser função, um valor de $x$ só pode ter UM valor de $y$ (sem zigue-zague vertical no gráfico).",
        explicacao_detalhada: "Para garantir a unicidade, 'cortamos' o ciclo trigonométrico ao meio:\n\n**$\\arcsin$ e $\\arctan$:** Só moram do lado direito da circunferência (Quadrantes 1 e 4). Intervalo: $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$.\n\n**$\\arccos$ e $\\text{arcsec}$:** Só moram na metade de cima da circunferência (Quadrantes 1 e 2). Intervalo: $[0, \\pi]$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_10",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "**Tática de Combate:** Qual é o algoritmo para resolver uma Equação estilo $\\cos(x) = -\\frac{1}{2}$ sem se perder nas voltas?",
        verso_principal: "Desenhe $\\rightarrow$ Marque a Flecha $\\rightarrow$ Corte o Círculo $\\rightarrow$ Identifique $\\rightarrow$ Xeque-Mate ($+ 2k\\pi$)",
        explicacao_detalhada: "1. **Desenhe** o ciclo (Y=Sen, X=Cos).\n2. **Marque a flecha** no eixo horizontal em $-1/2$.\n3. **Corte o círculo** com uma reta vertical a partir da marca. Baterá em DOIS pontos da borda (2º e 3º quadrantes).\n4. **Identifique:** Pelos notáveis, os pontos são $120^\\circ$ ($\\frac{2\\pi}{3}$) e $240^\\circ$ ($\\frac{4\\pi}{3}$).\n5. **O Xeque-Mate:** Adicione as infinitas voltas. A solução é: $S = \\{ x \\in \\mathbb{R} \\mid x = \\frac{2\\pi}{3} + 2k\\pi \\text{ ou } x = \\frac{4\\pi}{3} + 2k\\pi \\}$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_11",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "**Tática de Combate:** Como resolver uma Inequação estilo $\\sin(x) > \\frac{\\sqrt{2}}{2}$ visualmente?",
        verso_principal: "Trate como Equação $\\rightarrow$ Pinte o Eixo $\\rightarrow$ Pinte o Arco $\\rightarrow$ Regra do Anti-Horário",
        explicacao_detalhada: "1. Ache os limites no círculo como se fosse uma equação (no caso, $45^\\circ$ e $135^\\circ$).\n2. Pinte a região do **EIXO** que interessa (queremos seno maior, então pinte do $\\frac{\\sqrt{2}}{2}$ para cima no Eixo Y).\n3. Pinte a **CALOTA** (arco correspondente) no topo da circunferência.\n4. **Regra do Anti-Horário:** A resposta é a leitura do intervalo varrido nesse sentido: $S = \\{ x \\in \\mathbb{R} \\mid \\frac{\\pi}{4} + 2k\\pi < x < \\frac{3\\pi}{4} + 2k\\pi \\}$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_12",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "Qual é a fórmula da Tangente da soma e subtração ($\\tan(A \\pm B)$) e qual é o mnemônico de prova?",
        verso_principal: "$$\\tan(A \\pm B) = \\frac{\\tan(A) \\pm \\tan(B)}{1 \\mp \\tan(A)\\tan(B)}$$",
        explicacao_detalhada: "**Mnemônico Clássico:** \"Tem gente que Ama, tem gente que Beija, humm... tem gente que Ama e Beija.\"\n\n*Nota tática:* O sinal do numerador acompanha o sinal original do parênteses, enquanto o sinal do denominador inverte.\n\n**Demonstração:** Basta dividir a fórmula do $\\sin(A+B)$ pela fórmula do $\\cos(A+B)$ e, em seguida, dividir todos os termos da fração resultante por $\\cos(A)\\cos(B)$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_13",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "Como transformar somas de senos e cossenos ($\\sin(p) \\pm \\sin(q)$ e $\\cos(p) \\pm \\cos(q)$) em multiplicações (**Fórmulas de Prostaferese**)?",
        verso_principal: "**Senos:**\n$$\\sin(p) + \\sin(q) = 2\\sin\\left(\\frac{p+q}{2}\\right)\\cos\\left(\\frac{p-q}{2}\\right)$$\n$$\\sin(p) - \\sin(q) = 2\\sin\\left(\\frac{p-q}{2}\\right)\\cos\\left(\\frac{p+q}{2}\\right)$$\n\n**Cossenos:**\n$$\\cos(p) + \\cos(q) = 2\\cos\\left(\\frac{p+q}{2}\\right)\\cos\\left(\\frac{p-q}{2}\\right)$$\n$$\\cos(p) - \\cos(q) = -2\\sin\\left(\\frac{p+q}{2}\\right)\\sin\\left(\\frac{p-q}{2}\\right)$$",
        explicacao_detalhada: "**Demonstração:** Elas nascem se você pegar as fórmulas de adição de arcos e montar um sistema chamando $A+B=p$ e $A-B=q$. Extremamente úteis para simplificar frações trigonométricas ou encontrar raízes de equações.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_14",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "Como encontrar o seno, cosseno e tangente do **arco metade** ($\\frac{x}{2}$) usando apenas o $\\cos(x)$?",
        verso_principal: "$$\\sin\\left(\\frac{x}{2}\\right) = \\pm\\sqrt{\\frac{1-\\cos(x)}{2}}$$\n$$\\cos\\left(\\frac{x}{2}\\right) = \\pm\\sqrt{\\frac{1+\\cos(x)}{2}}$$\n$$\\tan\\left(\\frac{x}{2}\\right) = \\pm\\sqrt{\\frac{1-\\cos(x)}{1+\\cos(x)}}$$",
        explicacao_detalhada: "O sinal final da resposta ($+$ ou $-$) dependerá exclusivamente do quadrante onde o ângulo $\\frac{x}{2}$ estiver localizado no ciclo trigonométrico.\n\n**Demonstração:** Lembra do arco duplo? $\\cos(2x) = 1 - 2\\sin^2(x)$. Basta trocar o $2x$ por $x$ e o $x$ por $\\frac{x}{2}$, depois isolar o seno (ou o cosseno) tirando a raiz quadrada.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_15",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "Quais são as fórmulas de expansão para o **Arco Triplo** ($\\sin(3x)$ e $\\cos(3x)$)?",
        verso_principal: "$$\\sin(3x) = 3\\sin(x) - 4\\sin^3(x)$$\n$$\\cos(3x) = 4\\cos^3(x) - 3\\cos(x)$$",
        explicacao_detalhada: "**Demonstração:** Escreva $\\sin(3x)$ como $\\sin(2x + x)$. Aplique a fórmula de soma de arcos, substitua o $\\sin(2x)$ e $\\cos(2x)$ pelas respectivas fórmulas de arco duplo e faça a distributiva para chegar na equação final.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_16",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "**Tática Paramétrica:** Como expressar o $\\sin(x)$ e o $\\cos(x)$ usando EXCLUSIVAMENTE a tangente do arco metade ($t = \\tan(\\frac{x}{2})$)?",
        verso_principal: "Chamando $t = \\tan\\left(\\frac{x}{2}\\right)$:\n$$\\sin(x) = \\frac{2t}{1+t^2}$$\n$$\\cos(x) = \\frac{1-t^2}{1+t^2}$$",
        explicacao_detalhada: "Esta é uma tática excelente para **simplificar equações trigonométricas travadas**, transformando tudo em uma equação algébrica em função de $t$.\n\n**Demonstração:** Parte-se do arco duplo $\\sin(x) = 2\\sin\\left(\\frac{x}{2}\\right)\\cos\\left(\\frac{x}{2}\\right)$, divide-se tudo pela identidade fundamental $\\cos^2\\left(\\frac{x}{2}\\right) + \\sin^2\\left(\\frac{x}{2}\\right)$ (que vale 1) e, por fim, divide-se o numerador e o denominador por $\\cos^2\\left(\\frac{x}{2}\\right)$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_trigo_17",
        categoria: "Matemática",
        assunto: "Trigonometria",
        frente: "**Tática de Combate:** Qual é o algoritmo matador para resolver equações trigonométricas lineares no formato $a\\sin(x) + b\\cos(x) = c$?",
        verso_principal: "**Divida toda a equação por $\\sqrt{a^2 + b^2}$** para forçar o surgimento da fórmula de soma de arcos.",
        explicacao_detalhada: "**1. A Divisão Mágica:** Ficará:\n$$\\frac{a}{\\sqrt{a^2+b^2}}\\sin(x) + \\frac{b}{\\sqrt{a^2+b^2}}\\cos(x) = \\frac{c}{\\sqrt{a^2+b^2}}$$\n**2. O Triângulo Retângulo Escondido:** Como a soma dos quadrados dessas novas frações dá exatamente $1$, você pode chamar $\\frac{a}{\\sqrt{a^2+b^2}}$ de $\\cos(\\theta)$ e a outra fração de $\\sin(\\theta)$.\n**3. A Compactação:** A equação vira exatamente a expansão do arco soma: $\\sin(x)\\cos(\\theta) + \\sin(\\theta)\\cos(x) = K$.\n**4. Xeque-Mate:** Resolve-se a equação compactada $\\sin(x + \\theta) = K$ usando o ciclo trigonométrico convencional.",
        caixa: 0,
        proximaRevisao: Date.now()
    },

    //função modular abaixo

    {
        id: "mat_func_mod_1",
        categoria: "Matemática",
        assunto: "Função Modular",
        frente: "Qual é a definição estritamente matemática de $|x|$? Como \"abrir\" um módulo na prova dissertativa?",
        verso_principal: "É uma **bifurcação** algébrica:\n$$|x| = x \\text{, se } x \\geq 0$$\n$$|x| = -x \\text{, se } x < 0$$",
        explicacao_detalhada: "**Raciocínio:** O módulo avalia quem está lá dentro. Se for positivo ou zero, ele não faz nada (mantém). Se for negativo, ele multiplica por $-1$ para forçar o número a virar positivo.\n\n**Tática para Dissertativas:** Nunca tire a barra do módulo sem impor a Condição de Existência (C.E.) daquele caso e dividir a resolução do problema.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_func_mod_2",
        categoria: "Matemática",
        assunto: "Função Modular",
        frente: "**Tática Gráfica:** Como esboçar o gráfico de uma função inteira dentro do módulo, como $f(x) = |x^2 - 4x + 3|$?",
        verso_principal: "Use o **Efeito Espelho** no Eixo X.",
        explicacao_detalhada: "**Passo a passo:**\n1. **Ignore o módulo:** Desenhe o gráfico normal da função de dentro (a parábola normal).\n2. **O Rebatimento:** Pegue toda a parte do gráfico que afundou abaixo do eixo X (valores negativos de Y) e \"dobre\" para cima, refletindo como se o eixo X fosse um espelho.\n3. **Apague o fundo:** A parte negativa original deixa de existir. O gráfico final só terá \"morros\" e curvas estritamente acima ou tocando o eixo X.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_func_mod_3",
        categoria: "Matemática",
        assunto: "Função Modular",
        frente: "Como resolver uma equação modular clássica do tipo $|f(x)| = k$ e qual o cuidado vital se for $|f(x)| = g(x)$?",
        verso_principal: "**Quebre em duas:**\n$$f(x) = k \\quad \\text{ou} \\quad f(x) = -k$$",
        explicacao_detalhada: "**Atenção ao perigo:** Se a equação tiver variável do outro lado ($|f(x)| = g(x)$), você **DEVE** fazer a Condição de Existência (C.E.) primeiro: $$g(x) \\geq 0$$\n\nUm módulo nunca pode ser igual a algo de resultado negativo. Ao achar os valores de $x$, teste-os na C.E. para ver se não geram falsas raízes.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_func_mod_4",
        categoria: "Matemática",
        assunto: "Função Modular",
        frente: "Qual é o atalho para resolver uma igualdade entre dois módulos, como $|f(x)| = |g(x)|$?",
        verso_principal: "**Tática 1:** $f(x) = g(x)$ ou $f(x) = -g(x)$\n\n**Tática 2:** $(f(x))^2 = (g(x))^2$",
        explicacao_detalhada: "Neste cenário **não precisa de condição de existência**, pois ambos os lados já garantem a positividade.\n\nA Tática 2 (elevar ao quadrado) mata as barras do módulo na hora, sendo excelente se as expressões dentro dele forem lineares e simples, resultando num produto notável limpo.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_func_mod_5",
        categoria: "Matemática",
        assunto: "Função Modular",
        frente: "Como se abrem as inequações modulares $|x| < k$ e $|x| > k$ de forma direta?",
        verso_principal: "**Menor ($<$): A Regra do Sanduíche**\n$$-k < x < k$$\n\n**Maior ($>$): A Regra das Extremidades**\n$$x < -k \\quad \\text{ou} \\quad x > k$$",
        explicacao_detalhada: "**Raciocínio:**\nSe o módulo é *menor*, a distância até a origem é pequena, então o valor está \"preso\" perto do zero (sanduíche).\n\nSe o módulo é *maior*, a distância até a origem é grande, então o valor \"foge\" do zero para as pontas da reta (extremidades/chifres).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_func_mod_6",
        categoria: "Matemática",
        assunto: "Função Modular",
        frente: "**Tática de Simplificação:** O que acontece se você elevar um módulo ao quadrado ($|x|^2$)? E o que significa rigorosamente a expressão $\\sqrt{x^2}$?",
        verso_principal: "$$|x|^2 = x^2$$\n$$\\sqrt{x^2} = |x|$$",
        explicacao_detalhada: "$|x|^2$ é idêntico a $x^2$. Como o expoente par já garante que o número ficará positivo, a barra do módulo vira enfeite. Pode apagá-la sem medo.\n\n$\\sqrt{x^2} = |x|$ é a armadilha clássica. O erro fatal do candidato é dizer que \"corta a raiz com o 2\" e dá $x$. Se $x$ for $-3$, a raiz não pode dar $-3$. Tem que passar pelo módulo para virar $+3$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_func_mod_7",
        categoria: "Matemática",
        assunto: "Função Modular",
        frente: "**Tática de Combate:** Como resolver uma equação pesada de 2ª fase com vários módulos se somando, como $|x - 1| + |x - 3| = 4$?",
        verso_principal: "Use a **Tática do Quadro de Sinais (Varal)**.",
        explicacao_detalhada: "**Algoritmo Matador:**\n1. **Ache as raízes:** Zere o interior de cada módulo (Ex: $x=1$ e $x=3$).\n2. **Monte os intervalos:** Essas raízes dividem a reta real em regiões de comportamento (Ex: $x < 1$; entre $1$ e $3$; $x > 3$).\n3. **Abra os casos:** Analise o sinal do interior de cada módulo dentro de cada região isolada. Se for positivo na região, tire a barra normalmente. Se for negativo, tire a barra e troque o sinal de tudo que estava lá dentro.\n4. **Verifique a interseção:** Resolva a equação comum gerada em cada caso e confira rigorosamente se a raiz encontrada realmente \"mora\" na região que você estava analisando.",
        caixa: 0,
        proximaRevisao: Date.now()
    },


//logaritmo abaixo
{
        id: "mat_log_1",
        categoria: "Matemática",
        assunto: "Logaritmos",
        frente: "Qual é a definição de $\\log_b(a) = x$ e quais são as Condições de Existência (C.E.) obrigatórias?",
        verso_principal: "**Definição:** $$b^x = a$$\n**C.E.:** $$a > 0 \\quad \\text{e} \\quad b > 0 \\text{, } b \\neq 1$$",
        explicacao_detalhada: "**O Giro:** A base \"empurra\" o resultado para o expoente.\n\n**Tática FUVEST:** O logaritmando ($a$) tem que ser estritamente positivo. A base ($b$) tem que ser positiva e diferente de 1. Antes de resolver qualquer equação, escreva as C.E. Se a resposta final não obedecer, é uma \"falsa raiz\" e deve ser sumariamente descartada.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_log_2",
        categoria: "Matemática",
        assunto: "Logaritmos",
        frente: "Como esboçar o gráfico de $f(x) = \\log_b(x)$ rapidamente? Qual é a assíntota e qual ponto ele sempre corta no eixo X?",
        verso_principal: "**Raiz Universal:** Corta em $(1, 0)$.\n**Assíntota:** Eixo Y (nunca toca $x=0$).",
        explicacao_detalhada: "**Comportamento dependendo da base:**\n1. **Base $b > 1$** (ex: $\\log_2(x)$): A curva sobe (**Crescente**).\n2. **Base $0 < b < 1$** (ex: $\\log_{1/2}(x)$): A curva desce (**Decrescente**). \n*Cuidado triplicado com inequações na base fracionária, pois o sinal da desigualdade inverte!*",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_log_3",
        categoria: "Matemática",
        assunto: "Logaritmos",
        frente: "Como expandir ou contrair o logaritmo de uma multiplicação $\\log_b(x \\cdot y)$ e de uma divisão $\\log_b\\left(\\frac{x}{y}\\right)$?",
        verso_principal: "**Produto vira Soma:**\n$$\\log_b(x \\cdot y) = \\log_b(x) + \\log_b(y)$$\n**Divisão vira Subtração:**\n$$\\log_b\\left(\\frac{x}{y}\\right) = \\log_b(x) - \\log_b(y)$$",
        explicacao_detalhada: "**Exemplo Produto:** $\\log_2(10) = \\log_2(2 \\cdot 5) = \\log_2(2) + \\log_2(5) = 1 + \\log_2(5)$.\n\n**Exemplo Divisão:** $\\log_3(5/9) = \\log_3(5) - \\log_3(9) = \\log_3(5) - 2$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_log_4",
        categoria: "Matemática",
        assunto: "Logaritmos",
        frente: "**A Regra do Tombo:** O que acontece quando há um expoente no logaritmando $\\log_b(a^n)$? E se for uma raiz $\\log_b(\\sqrt[n]{a})$?",
        verso_principal: "**Potência:** $$\\log_b(a^n) = n \\cdot \\log_b(a)$$\n**Raiz:** $$\\log_b(\\sqrt[n]{a}) = \\frac{1}{n} \\cdot \\log_b(a)$$",
        explicacao_detalhada: "O expoente \"cai\" para a frente multiplicando o logaritmo inteiro.\n\n**Exemplo (Potência):** $\\log_2(x^3) = 3 \\cdot \\log_2(x)$.\n**Exemplo (Raiz):** Transforme em expoente fracionário. $\\log_{10}(\\sqrt{5}) = \\log_{10}(5^{1/2}) = \\frac{1}{2} \\cdot \\log_{10}(5)$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_log_5",
        categoria: "Matemática",
        assunto: "Logaritmos",
        frente: "**Regra do Tombo Invertido:** O que acontece quando o expoente está na BASE do logaritmo $\\log_{b^m}(a)$?",
        verso_principal: "Ele cai para a frente **INVERTIDO** (dividindo).\n$${\\log_{b^m}(a) = \\frac{1}{m} \\cdot \\log_b(a)}$$",
        explicacao_detalhada: "**Exemplo prático de tática de prova:** Se tiver $\\log_{8}(x)$, transforme a base $8$ em $2^3$. Ficará $\\log_{2^3}(x) = \\frac{1}{3} \\cdot \\log_2(x)$. Essa tática equaliza bases diferentes de forma muito mais rápida que a fórmula clássica de mudança de base.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_log_6",
        categoria: "Matemática",
        assunto: "Logaritmos",
        frente: "Como funciona a propriedade da **Mudança de Base** de $\\log_b(a)$ para uma nova base $c$?",
        verso_principal: "$$\\log_b(a) = \\frac{\\log_c(a)}{\\log_c(b)}$$",
        explicacao_detalhada: "Você cria uma divisão de logaritmos na nova base. O número que estava no topo ($a$) fica em cima, a base velha ($b$) fica na parte de baixo.\n\n**Exemplo de Aplicação:** A questão pede $\\log_2(7)$, mas fornece os dados em base 10 ($\\log(2) \\approx 0.3$ e $\\log(7) \\approx 0.84$). \nAplicação: $\\log_2(7) = \\frac{\\log_{10}(7)}{\\log_{10}(2)} = \\frac{0.84}{0.3}$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_log_7",
        categoria: "Matemática",
        assunto: "Logaritmos",
        frente: "**A Identidade Fundamental:** Qual é o resultado de uma base elevada a um logaritmo que tem a mesma base, como $b^{\\log_b(x)}$?",
        verso_principal: "A base exponencial e a logarítmica se aniquilam.\n$$b^{\\log_b(x)} = x$$",
        explicacao_detalhada: "**Exemplo direto:** $5^{\\log_5(14)} = 14$.\n\n**Atenção em provas discursivas:** Se tiver um número multiplicando na frente do logaritmo no expoente, suba ele primeiro usando a Regra do Tombo invertida.\nEx: $3^{2\\cdot\\log_3(5)} \\rightarrow 3^{\\log_3(5^2)} \\rightarrow 5^2 = 25$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_log_8",
        categoria: "Matemática",
        assunto: "Logaritmos",
        frente: "**O Efeito Espelho:** Como inverter a base com o logaritmando de lugar? Ou seja, como expressar $\\log_b(a)$ em função de base $a$?",
        verso_principal: "Um é o inverso multiplicativo do outro.\n$${\\log_b(a) = \\frac{1}{\\log_a(b)}}$$",
        explicacao_detalhada: "**Exemplo prático de atalho:** Se durante a prova você descobre ou já sabe que $\\log_2(10) \\approx 3.32$, então para achar imediatamente o $\\log_{10}(2)$, basta fazer a inversão $\\frac{1}{3.32}$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_log_9",
        categoria: "Matemática",
        assunto: "Logaritmos",
        frente: "**Tática de Combate:** Qual é a relação definitiva entre a Função Logarítmica e a Função Exponencial? Como isso aparece no gráfico?",
        verso_principal: "Elas são **Funções Inversas**.",
        explicacao_detalhada: "Se $f(x) = 2^x$, então sua função inversa é exatamente $f^{-1}(x) = \\log_2(x)$.\n\nNo plano cartesiano, elas são perfeitamente simétricas em relação à reta bissetriz dos quadrantes ímpares (a reta $y = x$). Tudo que é eixo X para uma, vira eixo Y para a outra.",
        caixa: 0,
        proximaRevisao: Date.now()
    },

    //exponencial

    {
        id: "mat_exp_1",
        categoria: "Matemática",
        assunto: "Função Exponencial",
        frente: "Qual é a forma geral da função exponencial $f(x) = a^x$ e quais são as Condições de Existência (C.E.) obrigatórias para a base $a$?",
        verso_principal: "**C.E.:** $a > 0$ e $a \\neq 1$.",
        explicacao_detalhada: "**Raciocínio para Discursivas:**\n1. **Por que não negativa?** Se a base fosse negativa (ex: $a = -2$) e $x = 1/2$, teríamos $\\sqrt{-2}$, que não existe nos Reais, fazendo o gráfico \"pipocar\" ou desaparecer.\n2. **Por que não 1?** Se a base fosse 1, teríamos $1^x = 1$ para todo $x$. A função viraria uma reta horizontal constante, perdendo completamente a sua natureza exponencial.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_exp_2",
        categoria: "Matemática",
        assunto: "Função Exponencial",
        frente: "Como é o esboço do gráfico de $f(x) = a^x$? Qual ponto ele obrigatoriamente corta no eixo Y, e qual é a sua assíntota?",
        verso_principal: "**Corta o eixo Y em:** $(0, 1)$\n**Assíntota:** Eixo X (a reta $y = 0$)",
        explicacao_detalhada: "**Comportamento:** O gráfico raspa no zero infinitamente, mas nunca toca o eixo X e nunca fica negativo (não existe potência de base positiva que dê resultado negativo).\n\n**O Crescimento:**\nSe $a > 1$: Estritamente crescente (explode para o infinito).\nSe $0 < a < 1$: Estritamente decrescente (mergulha para o zero).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_exp_3",
        categoria: "Matemática",
        assunto: "Função Exponencial",
        frente: "Quais são as 5 propriedades fundamentais da potenciação necessárias para manipular qualquer equação exponencial?",
        verso_principal: "**1. Multiplicação:** $a^m \\cdot a^n = a^{m+n}$\n**2. Divisão:** $\\frac{a^m}{a^n} = a^{m-n}$\n**3. Potência de Potência:** $(a^m)^n = a^{m \\cdot n}$\n**4. Expoente Negativo:** $a^{-n} = \\frac{1}{a^n}$\n**5. Expoente Fracionário:** $a^{m/n} = \\sqrt[n]{a^m}$",
        explicacao_detalhada: "Ter domínio absoluto dessas regras bidirecionais (saber tanto juntar quanto separar as potências) é o pré-requisito para aplicar as táticas de fatoração e evidência em equações complexas.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_exp_4",
        categoria: "Matemática",
        assunto: "Função Exponencial",
        frente: "**Tática de Alerta (Nível ITA):** Qual é a diferença matemática colossal entre $(a^b)^c$ e $a^{b^c}$?",
        verso_principal: "$$(a^b)^c = a^{b \\cdot c}$$\n$$a^{b^c} = a^{(b^c)}$$",
        explicacao_detalhada: "Os parênteses mudam completamente a ordem de resolução e a prioridade das operações.\n\n**Exemplo prático:** $(2^3)^2$ significa que você vai multiplicar os expoentes: $2^6 = 64$. \nJá em $2^{3^2}$, você resolve primeiro a potência de cima. O 3 está elevado a 2, e o resultado (9) é o expoente do 2. Logo: $2^9 = 512$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_exp_5",
        categoria: "Matemática",
        assunto: "Função Exponencial",
        frente: "**Tática 1 (A Igualdade de Bases):** Como resolver uma equação exponencial básica como $8^x = 32$?",
        verso_principal: "Fatore os números até chegarem na **mesma base prima** e corte-as.",
        explicacao_detalhada: "**Raciocínio Algébrico:**\n$8 = 2^3$ e $32 = 2^5$.\nSubstituindo: $(2^3)^x = 2^5 \\implies 2^{3x} = 2^5$.\n**O Corte:** Como a função exponencial é injetora, se as bases são iguais e diferentes de 1, os expoentes devem ser rigorosamente iguais. Logo: $3x = 5 \\implies x = 5/3$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_exp_6",
        categoria: "Matemática",
        assunto: "Função Exponencial",
        frente: "**Tática 2 (A \"Escadinha\"):** Como resolver equações onde as bases são iguais, mas estão somando/subtraindo, como $3^{x+1} + 3^{x-2} = 84$?",
        verso_principal: "Coloque a potência de **menor expoente** em evidência.",
        explicacao_detalhada: "**Passo a Passo:**\nO menor expoente é $x-2$. Ao colocar $3^{x-2}$ em evidência, dividimos cada termo por ele (lembre-se de subtrair os expoentes).\n$$3^{x-2} \\cdot (3^3 + 1) = 84$$\n$$3^{x-2} \\cdot (27 + 1) = 84$$\n$$3^{x-2} \\cdot 28 = 84$$\nPasse o 28 dividindo: $3^{x-2} = 3$ (que é $3^1$).\nIgualando os expoentes: $x - 2 = 1 \\implies x = 3$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_exp_7",
        categoria: "Matemática",
        assunto: "Função Exponencial",
        frente: "**Tática 3 (A Quadrática Disfarçada):** Como resolver equações exponenciais com termos dobrados, como $4^x - 5 \\cdot 2^x + 4 = 0$?",
        verso_principal: "Faça uma **substituição de variável** (ex: $2^x = y$) para gerar uma equação do 2º grau.",
        explicacao_detalhada: "**Raciocínio:** Lembre que $4^x = (2^2)^x = (2^x)^2$. \nChamando $2^x = y$, a equação vira: $y^2 - 5y + 4 = 0$.\nAs raízes desta quadrática são $y = 1$ e $y = 4$.\n\n**A Volta (Passo Crítico):** Retorne à variável original.\nSe $2^x = 1 \\implies 2^x = 2^0 \\implies x = 0$.\nSe $2^x = 4 \\implies 2^x = 2^2 \\implies x = 2$.\nSolução: $S = \\{0, 2\\}$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_exp_8",
        categoria: "Matemática",
        assunto: "Função Exponencial",
        frente: "**Tática 4 (Bases Irredutíveis):** O que fazer quando é matematicamente impossível igualar as bases, como na equação $2^x = 5$?",
        verso_principal: "Aplique o **Logaritmo** em ambos os lados da equação.",
        explicacao_detalhada: "**Raciocínio:** O logaritmo é a operação inversa que permite \"derrubar\" o expoente desconhecido usando a regra do tombo.\n\n$$\\log_2(2^x) = \\log_2(5)$$\n$$x \\cdot \\log_2(2) = \\log_2(5)$$\nComo $\\log_2(2) = 1$, temos a resposta exata: $x = \\log_2(5)$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_exp_9",
        categoria: "Matemática",
        assunto: "Função Exponencial",
        frente: "**Inequações Exponenciais:** Ao cortar as bases em uma inequação (ex: $a^{f(x)} > a^{g(x)}$), qual é a regra absoluta sobre o sinal da desigualdade?",
        verso_principal: "Se $a > 1$: **Mantém** o sinal.\nSe $0 < a < 1$: **Inverte** o sinal.",
        explicacao_detalhada: "**Raciocínio Geométrico:** O comportamento da função dita a regra algébrica.\n- Bases maiores que 1 representam funções crescentes. O sinal se preserva: $f(x) > g(x)$.\n- Bases fracionárias representam funções decrescentes. A base é \"traiçoeira\", logo você deve obrigatoriamente **inverter** o sinal ao descer para os expoentes. Ex: $(1/2)^x > (1/2)^3 \\implies x < 3$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_exp_10",
        categoria: "Matemática",
        assunto: "Função Exponencial",
        frente: "**Tática Avançada (Base Variável):** Como resolver uma equação onde a base também possui incógnita, do tipo $(x-2)^{2x} = (x-2)^{6}$?",
        verso_principal: "Você não pode simplesmente \"cortar as bases\". É obrigatório testar **4 casos distintos**.",
        explicacao_detalhada: "**Análise de Casos Rigorosa:**\n**Caso 1 (Igualar os expoentes):** $2x = 6 \\implies x = 3$.\n**Caso 2 (A base vale 1):** Pois $1^{\\text{qualquer coisa}} = 1$. Faça $x-2 = 1 \\implies x = 3$.\n**Caso 3 (A base vale 0):** Pois $0^{\\text{positivo}} = 0$. Faça $x-2 = 0 \\implies x = 2$. Teste na original: fica $0^4 = 0^6$ (Verdadeiro, logo $x=2$ é raiz).\n**Caso 4 (A base vale -1):** Faça $x-2 = -1 \\implies x = 1$. Teste a paridade dos expoentes na original: fica $(-1)^2 = (-1)^6 \\implies 1 = 1$ (Verdadeiro).\n**Solução Completa:** $S = \\{1, 2, 3\\}$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },

    //produto notavel e algebra

    {
        id: "mat_alg_1",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "Como fatorar rapidamente $a^3 + b^3$ e $a^3 - b^3$? Onde a maioria dos candidatos cai na \"Armadilha do Sinal\"?",
        verso_principal: "**Soma:** $$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$\n**Diferença:** $$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$",
        explicacao_detalhada: "**Tática de Memorização:** O primeiro parêntese leva o sinal original da operação. O termo do meio do segundo parêntese leva o sinal trocado.\n\n**A Armadilha:** O termo do meio é apenas $ab$, e não $2ab$! O segundo parêntese NUNCA é um trinômio quadrado perfeito.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_2",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**A Expansão Espacial:** Qual é a expansão direta do quadrado do trinômio $(a+b+c)^2$?",
        verso_principal: "$$(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)$$",
        explicacao_detalhada: "É a soma dos quadrados individuais mais duas vezes a soma dos produtos combinados dois a dois.\n\n**Aplicação Prática:** Extremamente útil em problemas algébricos e em Geometria Espacial (por exemplo, ao relacionar a diagonal de um paralelepípedo com suas dimensões e área total).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_3",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**O \"Hack\" de Waring:** Como expressar a soma de quadrados ($a^2+b^2$) e a soma de cubos ($a^3+b^3$) dependendo EXCLUSIVAMENTE da soma ($S = a+b$) e do produto ($P = a \\cdot b$)?",
        verso_principal: "**Quadrados:** $$a^2 + b^2 = S^2 - 2P$$\n**Cubos:** $$a^3 + b^3 = S^3 - 3 \\cdot S \\cdot P$$",
        explicacao_detalhada: "Essa é a ferramenta número 1 para aniquilar Sistemas Não-Lineares e Polinômios (Relações de Girard).\n\n**Tática de Combate:** Sempre que a questão der $x+y=5$ e $xy=6$, não perca tempo montando Bhaskara para achar o $x$ e o $y$ separados. Jogue direto nessas fórmulas para poupar tempo precioso.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_4",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**Identidade de Euler-Gauss:** Como fatorar a monstruosidade $a^3 + b^3 + c^3 - 3abc$? E qual é a Condição Mágica que as bancas amam cobrar?",
        verso_principal: "Fatoração: $(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$\n**Condição Mágica:** Se $a+b+c = 0$, então $a^3 + b^3 + c^3 = 3abc$.",
        explicacao_detalhada: "Se a questão te der números ou variáveis cuja soma seja zero ($a+b+c = 0$), o lado direito inteiro da equação é aniquilado.\n\n**Exemplo FUVEST 2ª Fase:** Calcule $(x-y)^3 + (y-z)^3 + (z-x)^3$. \n*Resolução:* Perceba que a soma das bases é zero. Resposta brutal e direta: $3(x-y)(y-z)(z-x)$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_5",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**Identidade de Sophie Germain:** Como fatorar uma soma de quartas potências que parece impossível, como $x^4 + 4y^4$?",
        verso_principal: "$$(x^2 - 2xy + 2y^2)(x^2 + 2xy + 2y^2)$$",
        explicacao_detalhada: "**A Demonstração (O Truque):** Você força um trinômio quadrado perfeito somando e subtraindo o termo do meio que falta ($4x^2y^2$).\n1. $(x^4 + 4x^2y^2 + 4y^4) - 4x^2y^2$\n2. Vira uma diferença de quadrados: $(x^2 + 2y^2)^2 - (2xy)^2$\n\n*Nível ITA:* Cai direto para descobrir se um número gigante da forma $n^4 + 4$ é primo. A resposta é: nunca é primo (para $n>1$), pois sempre pode ser quebrado nessa multiplicação.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_6",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**Identidade de Argand:** Qual é o resultado rápido da fatoração do polinômio $x^4 + x^2 + 1$?",
        verso_principal: "$$x^4 + x^2 + 1 = (x^2 - x + 1)(x^2 + x + 1)$$",
        explicacao_detalhada: "É um caso particular da técnica de completar quadrados seguida por uma diferença de quadrados (semelhante a Sophie Germain).\n\nEssencial para a resolução de integrais difíceis em Frações Parciais e simplificação pesada de Números Complexos na forma trigonométrica.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_7",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**Tática de Completar Quadrados:** Como achar o valor mínimo/máximo ou fatorar um polinômio do tipo $x^2 + 8x + 5$ sem usar as fórmulas do vértice da parábola?",
        verso_principal: "Pegue a **metade** do coeficiente do $x$, eleve ao **quadrado**, some e subtraia o resultado.",
        explicacao_detalhada: "**Algoritmo letal:**\n1. O coeficiente de $x$ é 8. A metade é 4. O quadrado é 16.\n2. Some e subtraia 16 na equação: $(x^2 + 8x + 16) - 16 + 5$.\n3. Feche o parêntese perfeito com os três primeiros: $(x + 4)^2 - 11$.\n\n*Resultado imediato:* O valor mínimo da função é $-11$, e esse mínimo ocorre quando a base do quadrado for anulada, ou seja, em $x = -4$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_8",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**O Truque da Inversa:** Se a prova informa que $x + \\frac{1}{x} = K$, qual é o atalho instantâneo para descobrir os valores de $x^2 + \\frac{1}{x^2}$ e de $x^3 + \\frac{1}{x^3}$?",
        verso_principal: "**Para o Quadrado:** $K^2 - 2$\n**Para o Cubo:** $K^3 - 3K$",
        explicacao_detalhada: "Não perca tempo tentando achar o $x$ fazendo Bhaskara (muitas vezes ele resulta em número complexo). Use o Hack de Waring.\n\nComo um termo é o inverso do outro, o produto ($P$) de $x \\cdot \\frac{1}{x}$ é sempre **1**.\nFórmula do Quadrado: $S^2 - 2P \\implies K^2 - 2(1)$.\n\n*Exemplo de prova:* Se $x + \\frac{1}{x} = 3$, então $x^2 + \\frac{1}{x^2} = 3^2 - 2 = 7$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_9",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**Racionalização Avançada:** Como eliminar uma raiz cúbica do denominador, do tipo $\\frac{1}{\\sqrt[3]{a} - \\sqrt[3]{b}}$? Qual produto notável usar?",
        verso_principal: "Multiplique em cima e embaixo pelo fator complementar da **Diferença de Cubos**:\n$$(\\sqrt[3]{a^2} + \\sqrt[3]{ab} + \\sqrt[3]{b^2})$$",
        explicacao_detalhada: "Ao contrário das raízes quadradas, você **não pode** multiplicar a expressão por ela mesma.\n\nAo multiplicar pelo trinômio complementar, o denominador forçará a expansão de $(\\sqrt[3]{a})^3 - (\\sqrt[3]{b})^3$, destruindo as raízes e resultando em um denominador limpo e racional: $a - b$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_10",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**A Corrente de Ouro:** Qual é a relação de desigualdade entre a Média Quadrática (MQ), Aritmética (MA), Geométrica (MG) e Harmônica (MH) para números reais e positivos?",
        verso_principal: "A corrente inquebrável (do maior para o menor):\n$$MQ \\geq MA \\geq MG \\geq MH$$",
        explicacao_detalhada: "Onde:\n$MA = \\frac{x+y}{2}$\n$MG = \\sqrt{x \\cdot y}$\n\n*Nota Tática:* O universo de provas militares (ITA/IME) e vestibulares de alta performance (FUVEST) quase sempre foca na parte central dessa corrente: a relação **$MA \\geq MG$**.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_11",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**A Condição de Igualdade:** Na Desigualdade das Médias ($MA \\geq MG$), em qual cenário exato o sinal de MAIOR desaparece e a IGUALDADE ($MA = MG$) acontece?",
        verso_principal: "A igualdade SÓ ocorre se, e somente se, **todos os termos operados forem idênticos**.\n$$MA = MG \\iff x_1 = x_2 = \\dots = x_n$$",
        explicacao_detalhada: "**Tática ITA:** Se a questão te pede o valor mínimo de uma soma usando $MA \\geq MG$, tenha em mente que esse mínimo ocorrerá exatamente no momento da igualdade, ou seja, quando as parcelas que você está somando forem rigorosamente iguais.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_12",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**Tática de Combate (O Gatilho do Inverso):** Qual é o valor mínimo da expressão $f(x) = x + \\frac{1}{x}$, sabendo que $x > 0$? Como provar isso em 5 segundos usando as médias?",
        verso_principal: "O valor mínimo é **2**.\n$$x + \\frac{1}{x} \\geq 2$$",
        explicacao_detalhada: "**Prova Letal por $MA \\geq MG$:**\n1. Calcule a MA entre $x$ e $\\frac{1}{x}$: $\\frac{x + 1/x}{2}$\n2. Calcule a MG entre $x$ e $\\frac{1}{x}$: $\\sqrt{x \\cdot \\frac{1}{x}} = \\sqrt{1} = 1$\n3. Aplique a regra geral: $\\frac{x + 1/x}{2} \\geq 1 \\implies x + \\frac{1}{x} \\geq 2$\n\n*(Qualquer variável real positiva somada ao seu inverso será, no mínimo, 2).*.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_13",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**Tática Avançada (O Truque da Quebra):** Como usar $MA \\geq MG$ para achar o valor máximo do produto $x^2 \\cdot y$, sabendo que a soma é $x + y = 3$?",
        verso_principal: "Você deve **\"quebrar\"** o $x$ na soma para criar o termo ao quadrado na multiplicação.",
        explicacao_detalhada: "**Passo a Passo:**\n1. Reescreva a soma quebrando o $x$ na metade: $\\frac{x}{2} + \\frac{x}{2} + y = 3$\n2. Aplique $MA \\geq MG$ para esses TRÊS termos resultantes:\n$$\\frac{x/2 + x/2 + y}{3} \\geq \\sqrt[3]{\\frac{x}{2} \\cdot \\frac{x}{2} \\cdot y}$$\n$$\\frac{3}{3} \\geq \\sqrt[3]{\\frac{x^2 \\cdot y}{4}}$$\n3. Eleve tudo ao cubo para aniquilar a raiz:\n$$1^3 \\geq \\frac{x^2 \\cdot y}{4} \\implies x^2 \\cdot y \\leq 4$$\nO valor máximo do produto é **4**.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_14",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "Na teoria das Somas de Newton, o que significa a notação $S_k$ para um polinômio de raízes $x_1, x_2, \\dots, x_n$? E qual é a pegadinha fatal do $S_0$?",
        verso_principal: "$S_k$ é a soma das raízes elevadas à potência $k$.\n$$S_k = x_1^k + x_2^k + \\dots + x_n^k$$",
        explicacao_detalhada: "**A Pegadinha:** $S_0$ NÃO é 0 nem 1. Como qualquer número elevado a zero é 1, a soma $S_0$ será $1 + 1 + \\dots + 1$ (uma parcela de \"1\" para cada raiz existente). Portanto, o $S_0$ é sempre rigorosamente igual ao **grau do polinômio**.\n*(Exemplo: para uma equação do 2º grau, $S_0 = 2$).*",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_15",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**A Fórmula Mágica (Recorrência Linear):** Como montar a equação de recorrência de Newton para uma equação do 2º grau genérica $ax^2 + bx + c = 0$?",
        verso_principal: "Copie os coeficientes ($a, b, c$) e substitua o $x$ pelos $S$ em ordem decrescente:\n$$a \\cdot S_n + b \\cdot S_{n-1} + c \\cdot S_{n-2} = 0$$",
        explicacao_detalhada: "Essa fórmula permite que você calcule a soma de raízes elevadas a qualquer potência absurdamente alta sem nunca precisar descobrir quem são as raízes individuais. Você vai calculando os valores como degraus em uma escada, usando sempre os dois anteriores para descobrir o próximo.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_16",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**Tática de Combate (Prática Brutal):** Dada a equação $x^2 - 3x + 1 = 0$, de raízes $p$ e $q$. Como calcular rapidamente a soma das quintas potências ($p^5 + q^5$)?",
        verso_principal: "Monte a máquina da recorrência, defina $S_0$ e $S_1$, e rode a engrenagem até o 5.",
        explicacao_detalhada: "**1. A Máquina:** $1 \\cdot S_n - 3 \\cdot S_{n-1} + 1 \\cdot S_{n-2} = 0 \\implies S_n = 3S_{n-1} - S_{n-2}$\n**2. As Bases:** \n$S_0 = 2$ (Grau da equação)\n$S_1 = 3$ (Soma clássica de Girard: $-b/a$)\n**3. Rodando até o 5:**\n$S_2 = 3(S_1) - S_0 \\implies 3(3) - 2 = 7$\n$S_3 = 3(S_2) - S_1 \\implies 3(7) - 3 = 18$\n$S_4 = 3(S_3) - S_2 \\implies 3(18) - 7 = 47$\n$S_5 = 3(S_4) - S_3 \\implies 3(47) - 18 = \\mathbf{123}$\n*(Matamos um sistema brutal do 5º grau com aritmética de ensino fundamental).*.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_17",
        categoria: "Matemática",
        assunto: "Álgebra e Produtos Notáveis",
        frente: "**O Nível ITA:** Como fica a fórmula de Newton para um polinômio do 3º grau $ax^3 + bx^2 + cx + d = 0$?",
        verso_principal: "Estenda a \"escadinha\" para mais um degrau, usando os 4 termos:\n$$a \\cdot S_n + b \\cdot S_{n-1} + c \\cdot S_{n-2} + d \\cdot S_{n-3} = 0$$",
        explicacao_detalhada: "O princípio mecânico é idêntico. A única diferença estrutural no início do processo é que, tratando-se de uma equação do 3º grau, o seu degrau zero inicial será diferente: **$S_0 = 3$**.\n*(Você precisará utilizar Girard e Waring para encontrar $S_1$ e $S_2$ antes de poder rodar a fórmula para achar o $S_3$).*",
        caixa: 0,
        proximaRevisao: Date.now()
    },

    //progressão aritmetica
    {
        id: "mat_seq_1",
        categoria: "Matemática",
        assunto: "Sequências (P.A.)",
        frente: "Qual é a fórmula do **Termo Geral de uma PA** e qual a sua interpretação lógica para chegar em qualquer termo partindo do primeiro?",
        verso_principal: "$$a_n = a_1 + (n - 1) \\cdot r$$",
        explicacao_detalhada: "**A Lógica do Pulo:** Para chegar no termo de posição $n$, você parte do primeiro e precisa dar $n-1$ \"pulos\" (razões).\n\n**Bizu ITA:** Você não é obrigado a partir do $a_1$. Pode partir de *qualquer* termo $k$ conhecido usando a generalização: \n$$a_n = a_k + (n - k) \\cdot r$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_2",
        categoria: "Matemática",
        assunto: "Sequências (P.A.)",
        frente: "Qual é a relação de um termo de uma PA com os seus **vizinhos imediatos**? O que isso significa estruturalmente?",
        verso_principal: "Qualquer termo é a **média aritmética** entre seu antecessor e seu sucessor.\n$$a_n = \\frac{a_{n-1} + a_{n+1}}{2}$$",
        explicacao_detalhada: "**Significado Estrutural:** Isso demonstra a simetria perfeita de uma P.A. \nSe você somar termos equidistantes do centro, a média será sempre o termo central (se a sequência tiver um número ímpar de termos).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_3",
        categoria: "Matemática",
        assunto: "Sequências (P.A.)",
        frente: "Qual a fórmula da **Soma dos $n$ primeiros termos** de uma PA e qual a lógica por trás dela?",
        verso_principal: "$$S_n = \\frac{(a_1 + a_n) \\cdot n}{2}$$",
        explicacao_detalhada: "**O Truque de Gauss:** O matemático Gauss percebeu que a soma do primeiro com o último termo é igual à soma do segundo com o penúltimo, e assim por diante.\n\nVocê soma os extremos da sequência e multiplica por quantos \"pares\" existem na sequência inteira (que é o total de elementos dividido por 2: $n/2$).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_4",
        categoria: "Matemática",
        assunto: "Sequências (P.A.)",
        frente: "**Tática de Generalização:** Qual a melhor forma de representar **3 termos** em PA para facilitar sistemas e cálculos de soma?",
        verso_principal: "$$(x - r, \\ x, \\ x + r)$$",
        explicacao_detalhada: "**A Vantagem Bruta:** Se a questão fornecer o valor da \"Soma dos 3 termos\", ao somar a sua representação, os termos \"$r$\" e \"$-r$\" se cancelam imediatamente. Você descobre o termo central ($x$) em uma única linha: $3x = \\text{Soma}$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_5",
        categoria: "Matemática",
        assunto: "Sequências (P.A.)",
        frente: "**Tática de Generalização:** Qual a melhor forma de representar **4 termos** em PA mantendo a simetria? Qual o cuidado vital com a razão?",
        verso_principal: "$$(x - 3y, \\ x - y, \\ x + y, \\ x + 3y)$$",
        explicacao_detalhada: "**O Cuidado Fatal:** Nesse formato, observe que o pulo de um termo para o outro não é $y$. **A razão da PA é $2y$**.\n\nEssa tática é excelente para problemas onde a soma dos 4 termos é fornecida, pois as variáveis $y$ se cancelam completamente, resultando em uma equação linear limpa: $4x = \\text{Soma}$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_6",
        categoria: "Matemática",
        assunto: "Sequências (P.A.)",
        frente: "**Tática de Generalização:** Qual a melhor forma de representar **5 termos** em PA para matar questões literais?",
        verso_principal: "$$(x - 2r, \\ x - r, \\ x, \\ x + r, \\ x + 2r)$$",
        explicacao_detalhada: "**A Vantagem:** Segue a mesmíssima lógica simétrica da P.A. de 3 termos. \nA soma cancela todas as razões ($-2r$ com $+2r$, e $-r$ com $+r$), resultando instantaneamente em $5x = \\text{Soma}$. Descobrindo o $x$, o sistema fica muito mais fácil de resolver.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    //sequencias PAOS
    {
        id: "mat_seq_paos_1",
        categoria: "Matemática",
        assunto: "Sequências (P.A. Ordem Superior)",
        frente: "O que significa uma sequência ser **\"estacionária\"** e como isso define a ordem da Progressão?",
        verso_principal: "A sequência se torna estacionária quando a diferença entre os seus termos ($\\Delta$) passa a ser um valor **constante**.",
        explicacao_detalhada: "- Se as diferenças dos termos originais (1ª linha de $\\Delta$) já são constantes, é uma PA Clássica de **ordem 1**.\n- Se você precisa fazer a diferença das diferenças (2ª linha de $\\Delta$) para achar a constante, é de **ordem 2**, e assim por diante.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_paos_2",
        categoria: "Matemática",
        assunto: "Sequências (P.A. Ordem Superior)",
        frente: "**Tática de Prova:** Se uma PA é de ordem $k$, qual será necessariamente o grau do polinômio que representa o seu Termo Geral ($a_n$) e o da sua Soma ($S_n$)?",
        verso_principal: "**Termo Geral ($a_n$):** Polinômio de grau $k$.\n**Soma ($S_n$):** Polinômio de grau $k+1$.",
        explicacao_detalhada: "A Soma dos termos ($S_n$) sempre \"sobe um degrau\" analítico. \nPor exemplo: se a sequência tem diferenças estacionárias na 1ª linha (grau 1, P.A. normal), o seu termo geral é uma equação de reta (1º grau), mas a sua soma é uma equação de parábola (2º grau).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_paos_3",
        categoria: "Matemática",
        assunto: "Sequências (P.A. Ordem Superior)",
        frente: "**Método 1:** Como utilizar o método da **Força Bruta Polinomial** para encontrar a fórmula geral de uma PA de ordem superior?",
        verso_principal: "Você monta um polinômio genérico de grau $k$ e resolve um **sistema linear**.",
        explicacao_detalhada: "Sabendo a ordem $k$ da sequência (pela linha estacionária):\n\nSe for de ordem 2, você crava que $a_n = An^2 + Bn + C$.\nPara descobrir as constantes $A$, $B$ e $C$, você substitui o $n$ pelos primeiros valores da sequência fornecida (ex: joga $n=1$, $n=2$ e $n=3$) para montar três equações infalíveis.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_paos_4",
        categoria: "Matemática",
        assunto: "Sequências (P.A. Ordem Superior)",
        frente: "**Método 2:** Qual é a fórmula geral (via **Teorema de Newton**) que resolve qualquer PA de Ordem Superior de forma elegante, sem precisar montar sistemas?",
        verso_principal: "$$a_n = a_1 \\binom{n-1}{0} + \\Delta_1 \\binom{n-1}{1} + \\Delta_2 \\binom{n-1}{2} + \\dots$$",
        explicacao_detalhada: "Você utiliza exclusivamente o **primeiro termo** de cada \"linha\" de diferenças ($\\Delta$) multiplicado por Números Binomiais.\n\nOnde $\\Delta_1$ é a primeira diferença da 1ª linha, $\\Delta_2$ da 2ª linha, e $\\Delta_k$ da última linha estacionária. É uma tática de altíssimo nível para pular a etapa de resolução de sistemas $3 \\times 3$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_paos_5",
        categoria: "Matemática",
        assunto: "Sequências (P.A. Ordem Superior)",
        frente: "**Estudo de Caso:** A questão pede o polinômio da soma dos quadrados ($1^2 + 2^2 + 3^2 \\dots$). Qual é a sequência dos valores das primeiras somas ($S_n$) e em qual ordem ela fica estacionária?",
        verso_principal: "A diferença se estabiliza na **3ª linha**. Logo, $S_n$ tem grau **3**.",
        explicacao_detalhada: "**Sequência de Somas ($S_n$):** 1, 5, 14, 30... (pois $S_1=1$, $S_2=1+4=5$, $S_3=5+9=14$).\n\n**A Análise das Diferenças:**\n**1ª Linha ($\\Delta_1$):** 4, 9, 16... (Diferenças primárias, que são os próprios quadrados).\n**2ª Linha ($\\Delta_2$):** 5, 7, 9... (As diferenças dos quadrados, que formam uma PA normal).\n**3ª Linha ($\\Delta_3$):** 2, 2... (Estacionou!).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_paos_6",
        categoria: "Matemática",
        assunto: "Sequências (P.A. Ordem Superior)",
        frente: "Com base na análise da soma dos quadrados, sabendo que $S_n$ é de grau 3 ($S_n = An^3 + Bn^2 + Cn + D$), como se determina o polinômio exato?",
        verso_principal: "$$S_n = \\frac{1}{3}n^3 + \\frac{1}{2}n^2 + \\frac{1}{6}n$$",
        explicacao_detalhada: "**O Algoritmo de Resolução:**\n1. Como a soma de zero termos é zero, $S_0 = 0 \\implies D = 0$.\n2. Montamos o sistema com os 3 primeiros termos:\n- Para $n=1 \\implies A + B + C = 1$\n- Para $n=2 \\implies 8A + 4B + 2C = 5$\n- Para $n=3 \\implies 27A + 9B + 3C = 14$\n3. Resolvendo, obtemos: $A = 1/3$, $B = 1/2$ e $C = 1/6$.\n\n*(Reescrito de forma fatorada, isso gera a importantíssima fórmula: $S_n = \\frac{n(n+1)(2n+1)}{6}$)*.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_pg_1",
        categoria: "Matemática",
        assunto: "Sequências (P.G.)",
        frente: "Como encontrar o Termo Geral de uma PG ($a_n$) e qual o mnemônico para a fórmula?",
        verso_principal: "$$a_n = a_1 \\cdot q^{n-1}$$",
        explicacao_detalhada: "**Mnemônico:** \"O Anão é A1gum que tem n-1 anos.\"\n\n**O Conceito Base:** O expoente é $n-1$ porque, para chegar no termo da posição $n$, você precisa dar exatamente $n-1$ \"saltos\" (multiplicações pela razão $q$) a partir do primeiro termo.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_pg_2",
        categoria: "Matemática",
        assunto: "Sequências (P.G.)",
        frente: "Qual a fórmula da **Soma de uma PG Finita** ($S_n$) e como memorizá-la?",
        verso_principal: "$$S_n = \\frac{a_1(q^n - 1)}{q - 1}$$",
        explicacao_detalhada: "**Mnemônico:** \"Só a1uguei o quarto num (-1) quarto -1.\"\n\n**Tática de Sinal:** Se a razão for uma fração ($|q| < 1$), costuma-se multiplicar a fração por $-1$ em cima e embaixo, usando a forma $S_n = \\frac{a_1(1 - q^n)}{1 - q}$ apenas para evitar trabalhar com sinais negativos, mas ambas são perfeitamente equivalentes.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_pg_3",
        categoria: "Matemática",
        assunto: "Sequências (P.G.)",
        frente: "Qual a condição obrigatória e a fórmula para a **Soma de uma PG Infinita** ($S_{\\infty}$)?",
        verso_principal: "**Condição:** A PG deve ser convergente ($|q| < 1$).\n$$S_{\\infty} = \\frac{a_1}{1 - q}$$",
        explicacao_detalhada: "**Mnemônico:** \"Só Acho 1 menos quarta-feira.\"\n\n**Raciocínio do Limite:** Como $n$ tende ao infinito e a razão é uma fração entre -1 e 1 (ex: 0,5), a potência $q^n$ da fórmula finita original vai sendo esmagada até \"sumir\" (tende a zero). O que sobra da fórmula é apenas o $a_1$ sobre o denominador $1-q$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_pg_4",
        categoria: "Matemática",
        assunto: "Sequências (P.G.)",
        frente: "Qual a fórmula do **Produto dos termos** ($P_n$) de uma PG e qual a sua relação vital com o termo central?",
        verso_principal: "$$|P_n| = \\sqrt{(a_1 \\cdot a_n)^n}$$",
        explicacao_detalhada: "**Mnemônico:** \"O Produto é a raiz do primeiro com o último elevado a n.\"\n\n**Propriedade de Simetria:** Em uma PG de 3 termos $(a, b, c)$, o produto dos extremos é igual ao quadrado do meio ($a \\cdot c = b^2$). Por isso, o produto dos 3 termos é sempre o **termo central ao cubo**: $P_3 = b^3$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_pg_5",
        categoria: "Matemática",
        assunto: "Sequências (P.G.)",
        frente: "O que define a **Média Geométrica (MG)** entre $k$ termos e qual a sua relação estrutural com a PG?",
        verso_principal: "$$MG = \\sqrt[k]{x_1 \\cdot x_2 \\cdot \\dots \\cdot x_k}$$",
        explicacao_detalhada: "**A Relação PG:** Em qualquer progressão geométrica, um termo (a partir do segundo) é rigorosamente a Média Geométrica entre o seu antecessor e o seu sucessor.\n\n*Exemplo de prova:* Em uma PG $(a, b, c)$, temos $b = \\sqrt{a \\cdot c} \\implies b^2 = a \\cdot c$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_pg_6",
        categoria: "Matemática",
        assunto: "Sequências (P.G.)",
        frente: "**Tática ITA:** Como escrever uma PG de 3 termos de forma estratégica para aniquilar questões que fornecem o Produto dos termos?",
        verso_principal: "$$\\left( \\frac{x}{q}, x, xq \\right)$$",
        explicacao_detalhada: "**Raciocínio Letal:** Ao multiplicar os três termos representados dessa forma, a razão $q$ se cancela sumariamente ($\\frac{x}{q} \\cdot x \\cdot xq = x^3$). Isso permite que você descubra o termo central ($x$) de forma instantânea na prova, calculando apenas a raiz cúbica do valor dado pelo examinador.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_pag_1",
        categoria: "Matemática",
        assunto: "Sequências (PAG)",
        frente: "O que define matematicamente uma **Progressão Aritmético-Geométrica (PAG)**?",
        verso_principal: "É uma sequência onde cada termo é o **produto** de uma PA por uma PG.",
        explicacao_detalhada: "**Termo Geral Estrutural:**\n$$a_n = [A_1 + (n-1)r] \\cdot [G_1 \\cdot q^{n-1}]$$\n\nOu seja, os termos da P.A. multiplicam linearmente os termos da P.G. correspondentes em cada posição.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_pag_2",
        categoria: "Matemática",
        assunto: "Sequências (PAG)",
        frente: "**Tática Visual:** Como identificar rapidamente uma série em PAG em uma prova?",
        verso_principal: "Os coeficientes/numeradores estão em **PA** e as variáveis/denominadores estão em **PG**.",
        explicacao_detalhada: "Ela geralmente se apresenta como uma soma combinada:\n- A parte que cresce somando uma constante (PA). Ex: $1, 2, 3, 4\\dots$ ou $1, 3, 5, 7\\dots$\n- A parte que cresce multiplicando por uma constante (PG). Ex: $x, x^2, x^3\\dots$ ou denominadores dobrando $\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}\\dots$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_pag_3",
        categoria: "Matemática",
        assunto: "Sequências (PAG)",
        frente: "**O Algoritmo Matador:** Qual é o passo a passo infalível para calcular a soma $S$ de uma Progressão Aritmético-Geométrica (PAG)?",
        verso_principal: "Multiplicar a soma $S$ pela razão geométrica $q$ e fazer o deslocamento **$S - qS$**.",
        explicacao_detalhada: "**O Passo a Passo:**\n1. Igualar a série à variável $S$.\n2. Identificar a razão $q$ da parte geométrica.\n3. Multiplicar toda a equação por $q$, obtendo $q \\cdot S$.\n4. Subtrair a segunda da primeira ($S - q \\cdot S$), alinhando cuidadosamente os termos de mesmo grau/denominador.\n5. O resultado formará uma PG clássica. Calcule a soma dessa PG pela fórmula padrão e, no fim, isole o $S$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_pag_4",
        categoria: "Matemática",
        assunto: "Sequências (PAG)",
        frente: "Ao fazer a subtração ($S - q \\cdot S$) no método de resolução da PAG, qual é a principal **\"armadilha\" algébrica** que exige atenção?",
        verso_principal: "Assumir que **todos** os termos resultantes entram na nova PG formada.",
        explicacao_detalhada: "**O Perigo:** Frequentemente, o **primeiro termo** da série original (que não foi subtraído por ninguém e desceu direto) fica \"isolado\" fora da PG, ou a nova PG só começa a ter uma razão constante a partir do segundo ou terceiro termo da soma resultante.\n\nSempre expanda os 3 ou 4 primeiros termos após a subtração para confirmar onde a PG de fato começa antes de jogar na fórmula.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_seq_pag_5",
        categoria: "Matemática",
        assunto: "Sequências (PAG)",
        frente: "Qual é a condição matemática obrigatória para que a soma de uma PAG infinita seja um valor real (série convergente)?",
        verso_principal: "O módulo da razão geométrica deve ser **menor que 1** ($|q| < 1$).",
        explicacao_detalhada: "A razão $q$ da parte da progressão geométrica deve, obrigatoriamente, estar no intervalo estrito $-1 < q < 1$.\n\nSe a razão for igual ou maior que 1 ($|q| \\geq 1$), a força multiplicativa da PG dominará a soma e a série infinita **diverge** (explode para o infinito ou oscila indefinidamente), impossibilitando o cálculo de um limite real.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geo_plana_3",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "Qual é o **gatilho visual** para usar a **Lei dos Senos** e qual é a fórmula completa (incluindo a relação com a circunferência)?",
        verso_principal: "**Gatilho Tático:** Você tem **2 ângulos e 1 lado** e precisa achar outro lado. OU a questão envolve um triângulo inscrito e pede/dá o raio da circunferência.",
        explicacao_detalhada: "**A Ferramenta:** Um lado sobre o seno do ângulo da frente é igual ao outro lado sobre o seno do ângulo da frente, que é igual ao diâmetro da circunferência circunscrita.\n\n$$ \\frac{a}{\\sin \\hat{A}} = \\frac{b}{\\sin \\hat{B}} = \\frac{c}{\\sin \\hat{C}} = 2R $$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geo_plana_4",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "Qual é o **gatilho visual** para usar a **Lei dos Cossenos** e qual é a fórmula? Qual o cuidado com ângulos obtusos?",
        verso_principal: "**Gatilho Tático:** Você tem **2 lados e o ângulo \"espremido\"** entre eles (L-A-L), e quer descobrir o lado oposto. OU você tem os **3 lados** e a questão quer um cosseno.",
        explicacao_detalhada: "**A Ferramenta:** Parece um teorema de Pitágoras expandido.\n\n$$ a^2 = b^2 + c^2 - 2bc \\cdot \\cos \\hat{A} $$\n\n⚠️ **Malícia de Prova:** Se o ângulo for maior que 90° (ex: 120°), o cosseno é negativo. O sinal de menos da fórmula com o menos do valor faz o final da conta virar uma **SOMA**.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_geo_plana_5",
        categoria: "Matemática",
        assunto: "Geometria Plana",
        frente: "Qual é o **gatilho visual** para usar o **Teorema de Stewart**? Escreva a fórmula e o mnemônico de memorização.",
        verso_principal: "**Gatilho Tático:** O triângulo possui uma **ceviana** e o enunciado fornece as medidas dos pedaços da base, mas **NÃO fornece nenhum ângulo**.",
        explicacao_detalhada: "**O Mnemônico:** MAN + DAD = BMB + CNC\n\n**A Ferramenta:**\n$$ m \\cdot a \\cdot n + d^2 \\cdot a = b^2 \\cdot m + c^2 \\cdot n $$\n\n**Legenda Visual:**\n* **$d$**: A ceviana (a linha que corta por dentro, do vértice à base).\n* **$a$**: A base inteira.\n* **$m$ e $n$**: Os dois pedaços em que a base foi cortada.\n* **$b$ e $c$**: Os dois lados externos do triângulo.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_1",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Qual a definição e como calcular o **menor complementar** ($d_{ij}$)?",
        verso_principal: "É o determinante da submatriz obtida **eliminando a linha $i$ e a coluna $j$** do elemento $a_{ij}$.",
        explicacao_detalhada: "**Exemplo:** Dada $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{bmatrix}$. Para encontrar o menor complementar de $a_{11} = 1$, eliminamos a linha 1 e a coluna 1:\n$$d_{11} = \\det \\begin{bmatrix} 5 & 6 \\\\ 8 & 9 \\end{bmatrix} = (5 \\cdot 9) - (6 \\cdot 8) = -3$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_2",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Qual a definição e a fórmula do **Cofator**?",
        verso_principal: "O cofator ajusta o sinal do menor complementar baseado na posição do elemento:\n$$A_{ij} = (-1)^{i+j} \\cdot d_{ij}$$",
        explicacao_detalhada: "**Exemplos (usando a matriz anterior):**\nPara $d_{11} = -3 \\Rightarrow A_{11} = (-1)^{1+1} \\cdot (-3) = 1 \\cdot (-3) = -3$\n\nPara $a_{12} = 2$, eliminamos a linha 1 e coluna 2 ($d_{12} = -6$):\n$$A_{12} = (-1)^{1+2} \\cdot (-6) = (-1)^3 \\cdot (-6) = 6$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_3",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "O que é a **Matriz dos Cofatores** ($A'$)?",
        verso_principal: "É a matriz formada exclusivamente pelos **cofatores** de todos os elementos da matriz original $A$.",
        explicacao_detalhada: "**Exemplo:** Dada $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$. Calculando os quatro cofatores:\n* $A_{11} = (-1)^2 \\cdot 4 = 4$\n* $A_{12} = (-1)^3 \\cdot 3 = -3$\n* $A_{21} = (-1)^3 \\cdot 2 = -2$\n* $A_{22} = (-1)^4 \\cdot 1 = 1$\n\nA matriz dos cofatores será: $A' = \\begin{bmatrix} 4 & -3 \\\\ -2 & 1 \\end{bmatrix}$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_4",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "O que afirma o **Teorema Fundamental de Laplace**?",
        verso_principal: "O determinante é igual à **soma dos produtos** dos elementos de uma fila qualquer pelos seus **respectivos cofatores**.",
        explicacao_detalhada: "Permite calcular determinantes de ordem $\\ge 2$. O ideal é sempre escolher a fila (linha ou coluna) com o maior número de zeros.\n**Exemplo:** Na matriz com primeira linha $2, 0, 3$:\n$$ \\det(A) = a_{11}A_{11} + a_{12}A_{12} + a_{13}A_{13} $$\n$$ \\det(A) = 2 \\cdot A_{11} + 0 \\cdot A_{12} + 3 \\cdot A_{13} $$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_5",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "O que acontece com o determinante ao multiplicar apenas **uma fila** (linha/coluna) por uma constante $k$?",
        verso_principal: "O determinante dessa matriz também fica **multiplicado pela mesma constante $k$**.",
        explicacao_detalhada: "**Prova:** O $\\det \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} = -2$.\nMultiplicando estritamente a primeira linha pela constante $k = 3$:\n$$\\det \\begin{bmatrix} 3 & 6 \\\\ 3 & 4 \\end{bmatrix} = 12 - 18 = -6$$\nNote que o novo determinante é exatamente o triplo do original: $-6 = 3 \\cdot (-2)$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_6",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "O que ocorre com o determinante ao multiplicar a **matriz inteira** por uma constante $k$?",
        verso_principal: "Para uma matriz de ordem $n$, o seu determinante fica multiplicado por **$k^n$**.\n$$ \\det(kA) = k^n \\cdot \\det(A) $$",
        explicacao_detalhada: "Isso ocorre porque, ao multiplicar a matriz inteira, você está aplicando o fator $k$ em **todas as $n$ linhas** ao mesmo tempo. Cada linha \"cospe\" um $k$ para fora do determinante.\nExemplo: Em uma matriz $2 \\times 2$, multiplicar a matriz por 3 multiplica o determinante por $3^2 = 9$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_7",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "**Teorema de Bézout:** O que acontece ao **permutar duas filas** paralelas de lugar?",
        verso_principal: "O determinante **muda de sinal**.",
        explicacao_detalhada: "**Exemplo:** $\\det \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} = -2$.\nPermutando a linha 1 com a linha 2:\n$$\\det \\begin{bmatrix} 3 & 4 \\\\ 1 & 2 \\end{bmatrix} = 6 - 4 = 2$$\nO valor numérico manteve-se intacto, mas o sinal inverteu.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_8",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Quais são as três situações estruturais que tornam **determinantes nulos** (iguais a zero) instantaneamente?",
        verso_principal: "1. Filas paralelas **iguais**.\n2. Filas paralelas **proporcionais**.\n3. Fila que é **combinação linear** de outras.",
        explicacao_detalhada: "**Exemplos Rápidos:**\n* **Iguais:** $\\det \\begin{bmatrix} \\mathbf{1} & \\mathbf{2} \\\\ \\mathbf{1} & \\mathbf{2} \\end{bmatrix} = 0$\n* **Proporcionais:** $\\det \\begin{bmatrix} \\mathbf{1} & \\mathbf{2} \\\\ \\mathbf{3} & \\mathbf{6} \\end{bmatrix} = 0 \\quad (L_2 = 3 \\cdot L_1)$\n* **Combinação Linear:** $\\det \\begin{bmatrix} 1 & 2 & \\mathbf{3} \\\\ 2 & 3 & \\mathbf{5} \\\\ 4 & 1 & \\mathbf{5} \\end{bmatrix} = 0 \\quad (C_3 = C_1 + C_2)$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_9",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Como calcular rapidamente o determinante de uma **matriz triangular**?",
        verso_principal: "O determinante é igual ao **produto de todos os elementos da sua diagonal principal**.",
        explicacao_detalhada: "Esse atalho salva muito tempo. Vale tanto para matriz triangular superior (zeros abaixo da diagonal) quanto inferior (zeros acima da diagonal).\n$$A = \\begin{bmatrix} \\mathbf{2} & 3 & 5 \\\\ 0 & \\mathbf{4} & 1 \\\\ 0 & 0 & \\mathbf{3} \\end{bmatrix} \\Rightarrow \\det(A) = 2 \\cdot 4 \\cdot 3 = 24$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_10",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Como aplicar a **Decomposição em Soma** em um determinante através de uma fila?",
        verso_principal: "Podemos separar o cálculo em **dois determinantes**, decompondo os elementos de uma única fila e **copiando o resto** da matriz intacto.",
        explicacao_detalhada: "O determinante de uma matriz cuja primeira coluna é uma soma $\\begin{bmatrix} 1+2 & 3 \\\\ 4+5 & 6 \\end{bmatrix}$ (que vale $-9$) pode ser quebrado exclusivamente nessa coluna:\n\n$$\\det \\begin{bmatrix} 1 & 3 \\\\ 4 & 6 \\end{bmatrix} + \\det \\begin{bmatrix} 2 & 3 \\\\ 5 & 6 \\end{bmatrix} = (-6) + (-3) = -9$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_11",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "O que ocorre pelo **Teorema de Cauchy** ao cruzar elementos de uma fila com os cofatores de outra?",
        verso_principal: "A soma desses cruzamentos resulta em **zero**.",
        explicacao_detalhada: "A soma dos produtos dos elementos de uma fila qualquer pelos **respectivos cofatores de uma fila paralela** anula o cálculo.\nExemplo em $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$:\nTomando elementos da Linha 1 ($a_{11}=1, a_{12}=2$) e cofatores da Linha 2 ($A_{21}=-2, A_{22}=1$):\n$$a_{11}A_{21} + a_{12}A_{22} = 1(-2) + 2(1) = 0$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_12",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Pelo **Teorema de Jacobi**, como alterar os números de uma fila sem modificar o valor do determinante final?",
        verso_principal: "Multiplicando-se uma fila por um número qualquer e **somando o resultado a uma fila paralela**, o determinante **não se altera**.",
        explicacao_detalhada: "Essa é a manobra mestre do escalonamento.\nMatriz original: $\\det \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} = -2$.\nSomando à linha 2 o dobro da linha 1 ($L_2 \\leftarrow L_2 + 2L_1$):\n$$\\det \\begin{bmatrix} 1 & 2 \\\\ 3 + 2(1) & 4 + 2(2) \\end{bmatrix} = \\det \\begin{bmatrix} 1 & 2 \\\\ 5 & 8 \\end{bmatrix} = 8 - 10 = -2$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_13",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Quais as duas relações fundamentais do **Teorema de Binet** para multiplicação de matrizes e matrizes inversas?",
        verso_principal: "O determinante do produto é o produto dos determinantes:\n$$ \\det(AB) = \\det(A) \\cdot \\det(B) $$\nO determinante da inversa é o inverso do determinante:\n$$ \\det(A^{-1}) = \\frac{1}{\\det(A)} $$",
        explicacao_detalhada: "O teorema de Binet é brutalmente eficiente. Se você tem duas matrizes pesadas, você nunca precisa multiplicá-las primeiro para depois achar o determinante. Você acha o determinante individual de cada uma e multiplica os escalares no final.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_14",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Como funciona a **Regra de Chió** para redução de matrizes?",
        verso_principal: "Ela permite reduzir a ordem de um determinante em uma unidade. Exigência primária: o elemento **$a_{11}$ deve ser igual a $1$**.",
        explicacao_detalhada: "**O Procedimento:** Eliminamos a primeira linha e a primeira coluna (a \"cruz\" do $a_{11}$). Em seguida, subtraímos dos elementos restantes o produto dos elementos correspondentes que foram \"riscados\" na cruz.\nSe $a_{11} \\neq 1$, podemos usar a propriedade do fator comum ou o Teorema de Jacobi para forçar o aparecimento do $1$ na ponta.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_15",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Como é estruturada a **Matriz Adjunta** ($\\tilde{A}$)?",
        verso_principal: "A matriz adjunta é a **transposta da matriz dos cofatores** ($A'$).\n$$ \\tilde{A} = (A')^t $$",
        explicacao_detalhada: "**Passo a passo:**\n1. Calcule o cofator de TODOS os elementos.\n2. Monte a matriz dos cofatores ($A'$).\n3. Transponha essa matriz (vire linhas em colunas) para finalmente obter a Adjunta ($\\tilde{A}$).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_16",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Qual a fórmula analítica completa para o cálculo da **Matriz Inversa** ($A^{-1}$)?",
        verso_principal: "$$ A^{-1} = \\frac{1}{\\det(A)} \\cdot \\tilde{A} $$",
        explicacao_detalhada: "A matriz inversa é igual à matriz Adjunta multiplicada pelo inverso do determinante da original.\n**Exemplo:** Se $\\det(A) = -2$ e $\\tilde{A} = \\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix}$:\n$$A^{-1} = -\\frac{1}{2} \\cdot \\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix} = \\begin{bmatrix} -2 & 1 \\\\ 1{,}5 & -0{,}5 \\end{bmatrix}$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_17",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Qual a definição algébrica formal de **Semelhança Matricial**?",
        verso_principal: "A matriz $A$ é semelhante à $B$ se, e somente se, existir uma **matriz inversível $P$** tal que:\n$$ A = P^{-1} \\cdot B \\cdot P $$",
        explicacao_detalhada: "Matrizes semelhantes representam a mesma transformação linear, apenas sob diferentes bases. Uma propriedade vital de matrizes semelhantes (usada muito na 2ª fase do ITA) é que **ambas possuem estritamente o mesmo determinante** ($\\det(A) = \\det(B)$) e o mesmo Traço.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_18",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Como identificar e calcular velozmente o determinante de uma **Matriz de Vandermonde**?",
        verso_principal: "Identificação: Filas formam uma **P.G. partindo do número 1**.\nCálculo: É o **produto das diferenças** entre os elementos da fila de bases.",
        explicacao_detalhada: "**Exemplo:** As bases da matriz $V = \\begin{bmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 4 \\\\ 2^2 & 3^2 & 4^2 \\end{bmatrix}$ são $(2, 3, 4)$.\nCálculo prático (direita menos esquerda sucessivamente):\n$$ \\det(V) = (4 - 3) \\cdot (4 - 2) \\cdot (3 - 2) = 1 \\cdot 2 \\cdot 1 = 2 $$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_det_19",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Determinantes",
        frente: "Qual a estratégia cirúrgica (Nível ITA) para calcular determinantes analíticos de **ordem n (infinita)**?",
        verso_principal: "Calcule a matriz para $n=1, n=2, n=3$. Identifique o **padrão sequencial** e deduza a lei geral por **Indução Matemática**.",
        explicacao_detalhada: "**Exemplo prático em matrizes tridiagonais:**\nSe os cálculos provam que para $n=1 \\Rightarrow \\det=2$, $n=2 \\Rightarrow \\det=3$ e $n=3 \\Rightarrow \\det=4$.\nA sequência lógica de resultados é a P.A. $(2, 3, 4, \\dots)$.\nLogo, pela lei de formação induzida, o valor do determinante gigantesco de ordem $n$ será puramente:\n$$ \\det(A_n) = n + 1 $$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_matrizes_1",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Matrizes",
        frente: "O que define uma **Matriz Retangular** e uma **Matriz Identidade** ($I$)?",
        verso_principal: "Retangular: Linhas $\\neq$ Colunas ($m \\neq n$).\nIdentidade ($I_n$): Diagonal principal $= 1$, o resto $= 0$.",
        explicacao_detalhada: "A Matriz Identidade é sempre uma matriz quadrada e atua como o **elemento neutro da multiplicação** matricial, ou seja: qualquer matriz multiplicada pela Identidade (desde que as dimensões permitam) resulta nela mesma.\n$$A \\cdot I = I \\cdot A = A$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_matrizes_2",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Matrizes",
        frente: "O que é a **Matriz Transposta** ($A^T$)?",
        verso_principal: "É a matriz obtida trocando-se ordenadamente as **linhas pelas colunas**.",
        explicacao_detalhada: "O que era a primeira linha da matriz original tomba e vira a primeira coluna da matriz transposta. O que era a segunda linha vira a segunda coluna, e assim por diante. \n\n*Consequência estrutural:* Se a matriz original $A$ tinha dimensão $m \\times n$, a sua transposta $A^T$ terá dimensão $n \\times m$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_matrizes_3",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Matrizes",
        frente: "Qual é a definição de uma **Matriz Simétrica** e de uma **Matriz Antissimétrica**?",
        verso_principal: "Simétrica: $A = A^T$ \nAntissimétrica: $A = -A^T$",
        explicacao_detalhada: "- **Simétrica:** A matriz é igual à sua própria transposta. Os elementos refletem como um espelho usando a diagonal principal como eixo.\n- **Antissimétrica:** A matriz é igual à sua transposta com o sinal de todos os elementos trocado. \n\n⚠️ **Gatilho de Prova:** A diagonal principal de toda matriz antissimétrica obrigatoriamente **só possui zeros**.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_matrizes_4",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Matrizes",
        frente: "A multiplicação de matrizes é **comutativa**? (Posso afirmar que $A \\cdot B = B \\cdot A$?)",
        verso_principal: "**NÃO.** A multiplicação de matrizes não é comutativa.",
        explicacao_detalhada: "Essa é a principal armadilha de Álgebra Linear. Na grande maioria dos casos, $$A \\cdot B \\neq B \\cdot A$$.\n\nInclusive, a multiplicação $A \\cdot B$ pode ser possível e existir, enquanto a multiplicação $B \\cdot A$ pode ser impossível devido à incompatibilidade das dimensões das matrizes.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_matrizes_5",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Matrizes",
        frente: "Posso aplicar os **Produtos Notáveis** clássicos em matrizes? (Ex: $(A+B)^2 = A^2 + 2AB + B^2$)",
        verso_principal: "**NÃO.** Como $A \\cdot B$ é diferente de $B \\cdot A$, os termos centrais não se somam.",
        explicacao_detalhada: "A regra de ouro para matrizes é sempre abrir a distributiva na \"força bruta\" e respeitar rigorosamente a ordem de quem está na frente e de quem está atrás:\n\n$$(A+B)^2 = (A+B) \\cdot (A+B) = \\mathbf{A^2 + AB + BA + B^2}$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_matrizes_6",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Matrizes",
        frente: "Se o produto de duas matrizes **resulta em zero** ($A \\cdot B = 0$), posso afirmar com certeza que $A = 0$ ou $B = 0$?",
        verso_principal: "**NÃO.** Em matrizes, existem os chamados \"divisores de zero\".",
        explicacao_detalhada: "Na matemática básica, se $x \\cdot y = 0$, um dos dois deve ser zero. Nas matrizes isso não é regra.\n\nÉ perfeitamente possível multiplicar duas matrizes cheias de números (onde nenhuma delas é a matriz nula) e, por causa do jogo de sinais das linhas e colunas, o resultado final ser uma matriz completamente zerada.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_matrizes_7",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Matrizes",
        frente: "Quais são as três principais **propriedades operatórias da Transposta**?\n\n$(A^T)^T = ?$\n$(A + B)^T = ?$\n$(A \\cdot B)^T = ?$",
        verso_principal: "1) $(A^T)^T = A$\n2) $(A + B)^T = A^T + B^T$\n3) $(A \\cdot B)^T = B^T \\cdot A^T$",
        explicacao_detalhada: "1. A transposta da transposta volta a ser a matriz original.\n2. A transposição se distribui linearmente na soma.\n3. ⚠️ **Pegadinha Clássica:** Na multiplicação, a transposta inverte a ordem das matrizes ao entrar no parênteses! (A regra também vale para inversas).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_matrizes_8",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Matrizes",
        frente: "O que é o **Traço ($Tr$)** de uma matriz e quais são as suas 4 propriedades fundamentais?",
        verso_principal: "O Traço é a **SOMA dos elementos da diagonal principal**.",
        explicacao_detalhada: "Ele só existe em matrizes quadradas. Propriedades fundamentais:\n\n1. $Tr(A^T) = Tr(A)$ (A transposição não mexe na diagonal principal).\n2. $Tr(k \\cdot A) = k \\cdot Tr(A)$ (O escalar sai multiplicando).\n3. $Tr(A + B) = Tr(A) + Tr(B)$\n4. $Tr(A \\cdot B) = Tr(B \\cdot A)$ (O traço do produto independe da ordem de multiplicação).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_matrizes_9",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Matrizes",
        frente: "Qual é a definição de **Matriz Inversa** ($A^{-1}$) e quando ela NÃO existe?",
        verso_principal: "É a matriz que, multiplicada pela original, **resulta na Matriz Identidade** ($A \\cdot A^{-1} = I$).",
        explicacao_detalhada: "Para que uma matriz possua inversa (seja invertível/não-singular), ela precisa obrigatoriamente ser quadrada.\n\n**Critério de Existência:** Uma matriz NÃO possui inversa quando o seu **Determinante é igual a zero** ($\\det(A) = 0$).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_matrizes_10",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Matrizes",
        frente: "Qual é a definição de Matriz **Ortogonal** e de Matriz **Normal**?",
        verso_principal: "Ortogonal: Sua **transposta é igual à sua inversa** ($A^T = A^{-1}$).\nNormal: Ela **comuta com a sua transposta** ($A \\cdot A^T = A^T \\cdot A$).",
        explicacao_detalhada: "Se uma matriz é ortogonal, isso significa que multiplicar a matriz pela sua própria transposta gera imediatamente a matriz Identidade ($A \\cdot A^T = I$). Matrizes ortogonais são a base das transformações geométricas no espaço 3D e 2D (como a matriz de rotação).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_matrizes_11",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Matrizes",
        frente: "O que caracteriza uma Matriz **Nilpotente** e uma Matriz **Idempotente**?",
        verso_principal: "Nilpotente: Elevada a um expoente $k$, ela **zera**. ($A^k = 0$).\nIdempotente: Elevada ao quadrado, resulta **nela mesma**. ($A^2 = A$).",
        explicacao_detalhada: "- **Nilpotente:** Existe algum número inteiro positivo em que a matriz \"morre\" e vira a matriz nula.\n- **Idempotente:** Se você elevá-la ao quadrado, cubo, ou qualquer potência, o resultado nunca se altera, permanecendo a matriz $A$ original.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_matrizes_12",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Matrizes",
        frente: "O que é uma **Matriz de Rotação** no R²?",
        verso_principal: "É uma matriz ortogonal usada para **girar vetores** no plano por um ângulo $\\theta$.",
        explicacao_detalhada: "Ao multiplicar essa matriz pelas coordenadas originais de um ponto ou vetor, ela calcula as novas coordenadas desse ponto após girá-lo $\\theta$ graus ao redor da origem. Sua forma clássica 2D é:\n\n$$ R(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix} $$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_sist_1",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Sistemas Lineares",
        frente: "**O Gatilho:** Ao analisar o determinante da matriz dos coeficientes ($D$) e os determinantes secundários ($D_x, D_y$), como classificar um sistema linear $n \\times n$ e qual o **perigo** dessa regra?",
        verso_principal: "**SPD:** $D \\neq 0$.\n**SPI:** $D = 0$ E todos $D_i = 0$.\n**SI:** $D = 0$ E pelo menos um $D_i \\neq 0$.",
        explicacao_detalhada: "**SPD:** Possível e Determinado (solução única).\n**SPI:** Possível e Indeterminado (infinitas soluções).\n**SI:** Impossível (nenhuma solução).\n\n⚠️ **A Pegadinha (Gatilho ITA/FUVEST):** A condição $D=0$ E $D_i=0$ garante SPI na grande maioria dos casos básicos, mas algebricamente **pode esconder um SI** (Sistema Impossível). Para ter 100% de certeza em provas dissertativas ou militares, se $D=0$, abandone determinantes e use o **escalonamento**.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_sist_2",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Sistemas Lineares",
        frente: "**O Gatilho:** Qual a fórmula da **Regra de Cramer** e qual o **gatilho textual** no enunciado que indica que ela é a ferramenta mais rápida (e que devo evitar escalonar)?",
        verso_principal: "Fórmula: $x = \\frac{D_x}{D} \\quad ; \\quad y = \\frac{D_y}{D}$ \n(Obrigatório $D \\neq 0$).",
        explicacao_detalhada: "**Gatilho de Prova:** Use Cramer apenas quando a questão pedir o valor de **uma única incógnita específica** em um sistema grande (ex: \"calcule o valor apenas de $z$\"), ou para discutir o sistema em função de um parâmetro $\\lambda$ (ex: \"para quais valores de $\\lambda$ o sistema é SPD?\" $\\Rightarrow$ Imponha $\\det(A) \\neq 0$).\n\n**Exemplo Rápido:** $\\begin{cases} 2x - y = 3 \\\\ x + y = 3 \\end{cases} \\Rightarrow D = \\det\\begin{pmatrix} 2 & -1 \\\\ 1 & 1 \\end{pmatrix} = 3 \\quad ; \\quad D_x = \\det\\begin{pmatrix} 3 & -1 \\\\ 3 & 1 \\end{pmatrix} = 6 \\Rightarrow x = \\frac{6}{3} = 2$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_sist_3",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Sistemas Lineares",
        frente: "**O Gatilho:** Qual o objetivo visual do **Escalonamento** (Eliminação Gaussiana) e sob quais condições de prova ele deixa de ser uma opção e passa a ser obrigatório?",
        verso_principal: "Objetivo: Criar uma **matriz triangular superior** (zerar elementos abaixo da diagonal).",
        explicacao_detalhada: "**Gatilho de Prova:** O escalonamento é **obrigatório** quando o sistema for **retangular** (número de equações diferente do número de incógnitas) ou para encontrar o conjunto verdade exato (paramatrizado) de um sistema SPI.\n\n**Exemplo Rápido:** Matriz já escalonada: $\\begin{bmatrix} 1 & 1 & | & 3 \\\\ 0 & 2 & | & 4 \\end{bmatrix}$. \nA última linha revela: $2y = 4 \\Rightarrow y=2$. Substituindo na primeira: $x+2=3 \\Rightarrow x=1$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_sist_4",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Sistemas Lineares",
        frente: "**O Gatilho:** Qual a definição estrutural de um **Sistema Linear Homogêneo** e qual é a \"rede de segurança\" absoluta associada a ele em provas militares?",
        verso_principal: "Definição: Todos os termos independentes são **nulos**. \nRede de Segurança: Ele **NUNCA é Impossível (SI)**.",
        explicacao_detalhada: "Um sistema homogêneo sempre admite a **solução trivial** (todas as variáveis = 0). \n$$\\begin{cases} a_{11}x + a_{12}y = 0 \\\\ a_{21}x + a_{22}y = 0 \\end{cases}$$\n**Gatilho ITA:** Se a banca disser \"determine $k$ para que o sistema homogêneo admita soluções próprias (não-nulas)\", a tradução matemática automática é: o sistema deve ser SPI. Portanto, imponha $D = 0$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_sist_5",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Sistemas Lineares",
        frente: "**O Gatilho:** Como encontrar o **Posto ($p$)** de uma matriz e o que ele traduz sobre as informações que a banca te forneceu?",
        verso_principal: "O Posto é o **número de linhas não nulas** da matriz após o escalonamento final.",
        explicacao_detalhada: "**Significado Lógico:** O Posto indica a quantidade de **equações linearmente independentes** (informações úteis). Linhas que zeram inteiras no escalonamento (ex: [0 0 0 | 0]) indicam informações redundantes (combinações lineares das outras equações) que devem ser descartadas.\nExemplo: Se ao escalonar uma matriz $3 \\times 3$, a última linha se torna zerada, o posto cai de 3 para $p = 2$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_sist_6",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Sistemas Lineares",
        frente: "**O Gatilho:** Como o **Teorema de Kronecker** julga a compatibilidade de um sistema observando o posto da matriz incompleta ($p$) e da matriz completa ($p_c$)?",
        verso_principal: "Sistema Compatível (tem solução) $\\Leftrightarrow \\mathbf{p = p_c}$.",
        explicacao_detalhada: "**Matriz Incompleta:** Coeficientes das variáveis.\n**Matriz Completa:** Coeficientes + coluna dos resultados.\n\n**Gatilho Visual de Impossibilidade:** Se no final do escalonamento aparecer a linha bizarra `[0 0 0 | 5]`, significa que $0x+0y+0z=5$ (Absurdo). Aqui, o posto incompleto $p$ é menor que o posto completo $p_c$, o que prova matematicamente que o sistema é **Impossível (SI)**.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_sist_7",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Sistemas Lineares",
        frente: "**O Gatilho:** Após escalonar e garantir que o sistema é possível ($p=p_c$), como conectar o posto ($p$) ao número de incógnitas ($n$) para classificar a solução e encontrar o **grau de liberdade**?",
        verso_principal: "$p = n \\Rightarrow$ **SPD** (Solução Única).\n$p < n \\Rightarrow$ **SPI** (Solução Indeterminada).",
        explicacao_detalhada: "No SPI, o grau de liberdade (número de variáveis livres) é $GL = n - p$.\n\n**Gatilho Prático (O Conjunto Verdade):** Se você tem 3 incógnitas ($n=3$) e o posto é $p=2$, o sistema é SPI e o grau de liberdade é $3-2 = 1$. Você **obrigatoriamente** precisará paramatrizar uma das variáveis (ex: chamar $z$ de $\\alpha$) para conseguir escrever as outras em função desse parâmetro e formar o Conjunto Verdade.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_alg_sist_8",
        categoria: "Matemática",
        assunto: "Álgebra Linear - Sistemas Lineares",
        frente: "**O Gatilho:** Qual a equação matricial fundamental que define **Autovalores** ($\\lambda$) e **Autovetores** ($v$) e qual a **Equação Característica** usada para calcular $\\lambda$?",
        verso_principal: "Equação Fundamental: $A \\cdot v = \\lambda \\cdot v$ \nEquação Característica: $\\det(A - \\lambda \\cdot I) = 0$",
        explicacao_detalhada: "**Definição:** Um vetor não nulo $v$ é autovetor de $A$ se a transformação matricial apenas \"estica\" ou \"encolhe\" o vetor, mantendo sua direção.\n**Exemplo de Cálculo:** Dada $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$. \nResolvendo $\\det\\begin{pmatrix} 2-\\lambda & 0 \\\\ 0 & 3-\\lambda \\end{pmatrix} = (2-\\lambda)(3-\\lambda) = 0$.\nLogo, os autovalores são $\\lambda_1 = 2$ e $\\lambda_2 = 3$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    //combinatoria
    {
        id: "mat_comb_pfc",
        categoria: "Matemática",
        assunto: "Análise Combinatória",
        frente: "O que é o **PFC (Princípio Fundamental da Contagem)**, quando utilizá-lo e qual o motivo lógico por trás da multiplicação?",
        verso_principal: "É a base da combinatória. Divide um problema em **etapas consecutivas**.",
        explicacao_detalhada: "**Quando usar (Gatilho):** Quando você precisa tomar decisões consecutivas e o enunciado usa (ou subentende) o conectivo lógico **\"E\"** (ex: escolher uma camisa **E** uma calça **E** um sapato).\n\n**O Motivo:** Ao multiplicar as opções de cada etapa, você está construindo matematicamente os galhos de uma **\"Árvore de Possibilidades\"** sem precisar desenhá-la.\n\n*(Lembre-se: se as decisões forem excludentes, com o conectivo **\"OU\"**, você deve somar as opções - Princípio Aditivo)*.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_comb_perm_simples",
        categoria: "Matemática",
        assunto: "Análise Combinatória",
        frente: "O que é, qual a fórmula e quando utilizar a **Permutação Simples**?",
        verso_principal: "Organizar **todos** os elementos disponíveis em uma fila. Fórmula: $$P_n = n!$$",
        explicacao_detalhada: "**Quando usar (Gatilho):** O número de elementos disponíveis ($n$) é rigorosamente **igual** ao número de vagas ($p$).\n\n**Exemplos Clássicos:**\n* Anagramas de palavras sem letras repetidas.\n* Organizar pessoas em uma fila indiana.\n* Arrumar livros em uma prateleira.\n\n*Nota: Nestes casos, a ordem importa 100%.*",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_comb_perm_rep",
        categoria: "Matemática",
        assunto: "Análise Combinatória",
        frente: "O que é, qual a fórmula, quando utilizar a **Permutação com Repetição** e por que dividimos por fatoriais?",
        verso_principal: "Organizar elementos em fila onde alguns são **idênticos** entre si. Fórmula: $$P_n^{\alpha, \beta, \dots} = \frac{n!}{\alpha!\beta!\dots}$$",
        explicacao_detalhada: "**Quando usar (Gatilho):** Anagramas de palavras com letras repetidas (ex: \"BANANA\"), caminhos em malhas quadriculadas (ex: 3 passos para Direita, 4 para Cima), ou organizar objetos indistinguíveis.\n\n**O Motivo da Divisão:** Os fatoriais no denominador servem para **\"apagar\" as permutações fantasmas**. Se você trocar dois \"A\"s de lugar na palavra BANANA, a palavra não muda. Dividir por $\alpha!$ elimina essas contagens duplicadas indesejadas.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_comb_perm_circ",
        categoria: "Matemática",
        assunto: "Análise Combinatória",
        frente: "O que é, qual a fórmula da **Permutação Circular** e qual o motivo lógico de subtrairmos 1 do total?",
        verso_principal: "Organizar elementos em um **ciclo**, onde não há \"início\" nem \"fim\" fixos. Fórmula: $$PC_n = (n - 1)!$$",
        explicacao_detalhada: "**Quando usar (Gatilho):** Pessoas ao redor de uma mesa redonda, crianças em uma ciranda (roda), chaves em um chaveiro simétrico.\n\n**O Motivo:** Em um círculo, se todos derem um passo para a direita, a configuração relativa entre eles é a mesma (ninguém mudou de vizinho). Para quebrar essa rotação, nós **\"amarramos\" a 1ª pessoa** na cadeira. Ela serve como ponto de referência fixo. Sobram $(n-1)$ pessoas para permutarem linearmente ao redor dela.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_comb_arranjo",
        categoria: "Matemática",
        assunto: "Análise Combinatória",
        frente: "O que é, qual a fórmula e qual o **gatilho textual** que obriga o uso do **Arranjo Simples**?",
        verso_principal: "Escolher $p$ elementos dentre $n$ disponíveis, onde a **ordem da escolha cria um resultado diferente**. Fórmula: $$A_{n,p} = \frac{n!}{(n-p)!}$$",
        explicacao_detalhada: "**Quando usar (Gatilho):** Criação de senhas com algarismos distintos, pódios de corrida (1º, 2º e 3º lugar), escolha de cargos hierárquicos (ex: escolher um Presidente e um Vice).\n\n**O Motivo:** O Arranjo é simplesmente o PFC mascarado. É você multiplicar as opções (ex: $10 \times 9 \times 8$), mas interromper a multiplicação antes de chegar no 1. O denominador $(n-p)!$ serve exatamente para cortar o resto do fatorial e fazer a conta parar onde você quer.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_comb_comb_completa",
        categoria: "Matemática",
        assunto: "Análise Combinatória",
        frente: "O que é, qual a fórmula e quando utilizar a **Combinação Completa (com Repetição)**?",
        verso_principal: "Escolher $p$ elementos dentre $n$ **tipos** disponíveis, podendo **repetir** o mesmo tipo várias vezes.\nFórmula: $$CR_{n,p} = \binom{n+p-1}{p}$$",
        explicacao_detalhada: "**Quando usar (Gatilho):** Comprar 10 sorvetes em uma sorveteria que só oferece 4 sabores disponíveis (você será obrigado a repetir sabores, ex: 5 de chocolate, 3 de baunilha, 2 de morango).\n\n**O Motivo:** Ela é a tradução em conjuntos da técnica de \"paus e bolas\" usada para resolver equações diofantinas.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_comb_sol_inteiras",
        categoria: "Matemática",
        assunto: "Análise Combinatória",
        frente: "O que são **Soluções Inteiras Não Negativas (Equações Diofantinas)**, como modelar e qual a técnica matemática utilizada?",
        verso_principal: "Achar quantas soluções inteiras $\ge 0$ existem para equações do tipo $x_1 + x_2 + \dots + x_n = p$.\nFórmula: $$CR_{n,p} = P_{p+n-1}^{p, n-1}$$",
        explicacao_detalhada: "**Quando usar (Gatilho / Exemplo):** \"Distribuir 10 doces idênticos para 3 crianças\". Você modela como: $A + B + C = 10$.\n\n**Como funciona (Técnica dos Paus e Bolas):** Você tem 10 unidades (bolas) para distribuir e precisa de 2 sinais de adição (paus) para separar os 3 espaços (crianças). O total de símbolos é $10 \text{ bolas} + 2 \text{ paus} = 12$. A resposta é a permutação desses 12 símbolos com repetição: $$P_{12}^{10,2} = \binom{12}{2} = 66 \text{ soluções}$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_comb_sol_inequacoes",
        categoria: "Matemática",
        assunto: "Análise Combinatória",
        frente: "**Tática de Inequações (Gatilho ITA):** Como resolver a inequação $X + Y + Z \le 4$ no conjunto dos inteiros não negativos de forma rápida?",
        verso_principal: "Transforme a inequação em uma equação introduzindo uma **Variável de Folga ($F$)** não negativa.",
        explicacao_detalhada: "A inequação $X + Y + Z \le 4$ se transforma na equação: $$X + Y + Z + \mathbf{F} = 4$$\n\n**A Lógica:** Se $X+Y+Z=3$, então a variável de folga \"absorve\" o que falta ($F=1$). Se a soma for 4, $F=0$. Assim, basta resolver a nova equação usando a técnica de paus e bolas (4 unidades e 3 sinais de adição): $$P_7^{4,3} = \frac{7!}{4!3!} = 35 \text{ soluções}$$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_comb_comb_simples",
        categoria: "Matemática",
        assunto: "Análise Combinatória",
        frente: "O que é, qual a fórmula da **Combinação Simples** e qual a diferença vital para o Arranjo?",
        verso_principal: "Escolher $p$ elementos dentre $n$, onde a **ordem de escolha NÃO altera o grupo final**.\nFórmula: $$C_{n,p} = \binom{n}{p} = \frac{n!}{p!(n-p)!}$$",
        explicacao_detalhada: "**Quando usar (Gatilho):** Formar comissões, equipes de trabalho, escolher cartas de um baralho, subconjuntos.\n\n**Diferença Vital:** Se escolher A e B resulta no mesmo grupo que escolher B e A, use Combinação.\n\n**O Motivo da Fórmula:** A fórmula é o Arranjo dividido por $p!$. Esse $p!$ no denominador serve justamente para **apagar as permutações internas do grupo escolhido**, já que a ordem lá dentro não importa.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_comb_pie",
        categoria: "Matemática",
        assunto: "Análise Combinatória",
        frente: "O que é o **PIE (Princípio da Inclusão e Exclusão)**, qual a fórmula para 2 e 3 conjuntos, e quando utilizá-lo na combinatória?",
        verso_principal: "Técnica para contar elementos em uniões de conjuntos **sem contar as interseções duas vezes**.",
        explicacao_detalhada: "**Fórmulas:**\n* **2 conjuntos:** $n(A \cup B) = n(A) + n(B) - n(A \cap B)$\n* **3 conjuntos:** $n(A \cup B \cup C) = n(A) + n(B) + n(C) - [n(A \cap B) + n(A \cap C) + n(B \cap C)] + n(A \cap B \cap C)$\n\n**Exemplo Tático:** Quantos números de 1 a 100 são divisíveis por 2 **OU** por 3?\nConta-se os múltiplos de 2 (50), soma-se os múltiplos de 3 (33) e subtrai-se os múltiplos de 6 (16), pois estes foram contados duas vezes (uma em cada grupo). \nResposta: $50 + 33 - 16 = 67$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_comb_caotica",
        categoria: "Matemática",
        assunto: "Análise Combinatória",
        frente: "O que é uma **Permutação Caótica (Desarranjo)**, qual a fórmula ($D_n$) e qual o gatilho clássico no texto?",
        verso_principal: "Uma permutação onde **NENHUM elemento ocupa a sua posição original**.",
        explicacao_detalhada: "**Fórmula:** $$D_n = n! \left( \frac{1}{0!} - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \dots + \frac{(-1)^n}{n!} \\right)$$.\n\n**Quando usar (Gatilho Clássico):** \n* O problema do **\"Amigo Secreto\"** (onde ninguém pode tirar o próprio nome).\n* Colocar $N$ cartas em $N$ envelopes correspondentes e todas irem para o destino errado.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_comb_kaplansky",
        categoria: "Matemática",
        assunto: "Análise Combinatória",
        frente: "O que os **Lemas de Kaplansky** calculam, quais são as fórmulas e qual a **restrição textual** que invoca esse teorema?",
        verso_principal: "Escolher $p$ elementos de um conjunto de $n$, de modo que **nenhum par escolhido seja adjacente (vizinho)**.",
        explicacao_detalhada: "**1º Lema (Fila Linear):**\nFórmula: $$ \\binom{n - p + 1}{p} $$\n*Exemplo:* Escolher 3 dias em uma semana (7 dias) para treinar, de modo que você nunca treine em dias consecutivos.\n\n**2º Lema (Mesa Circular):**\nFórmula: $$ \\frac{n}{n-p} \cdot \\binom{n - p}{p} $$\n*Exemplo:* Pessoas ao redor de uma mesa redonda onde vizinhos não podem ser escolhidos simultaneamente.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    //binomio de newton
    {
        id: "mat_binom_1",
        categoria: "Matemática",
        assunto: "Binômio de Newton e Triângulo de Pascal",
        frente: "Qual é a **Fórmula do Termo Geral** do Binômio de Newton e quais as **palavras-chave** no enunciado que te obrigam a usá-la em vez de desenvolver o polinômio?",
        verso_principal: "Para $(a + b)^n$, o termo na posição $p+1$ é:\n$$T_{p+1} = \\binom{n}{p} \\cdot a^{n-p} \\cdot b^p$$",
        explicacao_detalhada: "**Gatilhos de Aplicação:** A banca quer um \"pedaço\" específico da expansão.\n* **Termo independente de $x$:** Monte a fórmula, isole o $x$ e force seu expoente a ser igual a $0$.\n* **Coeficiente de $x^k$:** Monte a fórmula, isole o $x$ e iguale o expoente a $k$.\n* **Termo Central:** Se $n$ for par, haverá 1 termo central (posição $\\frac{n}{2} + 1$). Se $n$ for ímpar, haverá 2 termos centrais.\n* **Coeficiente Máximo:** Geralmente é o coeficiente do termo central (devido à simetria do triângulo de Pascal).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_binom_2",
        categoria: "Matemática",
        assunto: "Binômio de Newton e Triângulo de Pascal",
        frente: "Como o **Triângulo de Pascal** é estruturado geograficamente e qual é a sua relação direta com as expansões algébricas?",
        verso_principal: "**A Estrutura:** Uma matriz triangular onde cada elemento é um número binomial $\\binom{n}{p}$ ($n$ = linha, $p$ = coluna).\n**A Relação:** A linha $n$ fornece os coeficientes de $(a+b)^n$.",
        explicacao_detalhada: "**Exemplo Visual dos Produtos Notáveis:**\n* **Linha 0:** $1 \\rightarrow (a+b)^0 = 1$\n* **Linha 1:** $1 \\quad 1 \\rightarrow (a+b)^1 = 1a + 1b$\n* **Linha 2:** $1 \\quad 2 \\quad 1 \\rightarrow (a+b)^2 = 1a^2 + 2ab + 1b^2$\n* **Linha 3:** $1 \\quad 3 \\quad 3 \\quad 1 \\rightarrow (a+b)^3 = 1a^3 + 3a^2b + 3ab^2 + 1b^3$",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_binom_3",
        categoria: "Matemática",
        assunto: "Binômio de Newton e Triângulo de Pascal",
        frente: "Qual a equação da **Relação de Stifel**, como ela funciona visualmente e qual o gatilho algébrico para aplicá-la?",
        verso_principal: "A soma de dois vizinhos na mesma linha resulta no elemento imediatamente abaixo:\n$$ \\binom{n}{p} + \\binom{n}{p+1} = \\binom{n+1}{p+1} $$",
        explicacao_detalhada: "**Gatilho de Prova:** Aplicada quando a equação trouxer a soma de dois números binomiais com o **mesmo numerador** ($n$) e **denominadores consecutivos** ($p$ e $p+1$). \n*Ação Tática:* Serve para colapsar somas gigantescas em um único binomial sem precisar calcular os fatoriais abertos.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_binom_4",
        categoria: "Matemática",
        assunto: "Binômio de Newton e Triângulo de Pascal",
        frente: "O que são **binômios complementares**, qual a fórmula e qual a armadilha comum em equações?",
        verso_principal: "Dois binomiais são iguais se a soma de seus denominadores for igual ao numerador.\n$$ \\binom{n}{p} = \\binom{n}{n-p} $$",
        explicacao_detalhada: "**Gatilho Visual (Simetria):** O Triângulo de Pascal é espelhado. Exemplo: $\\binom{10}{8} = \\binom{10}{2} = 45$. (É mais eficiente calcular fatorando o 2 do que o 8).\n\n⚠️ **A Armadilha de Equações:** Se a banca fornecer $\\binom{n}{x} = \\binom{n}{y}$, há **duas** soluções obrigatórias para testar:\n1. $x = y$ (são o exato mesmo elemento).\n2. $x + y = n$ (são complementares).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_binom_5",
        categoria: "Matemática",
        assunto: "Binômio de Newton e Triângulo de Pascal",
        frente: "Qual o resultado do **Teorema das Linhas** (soma de uma linha inteira do Triângulo) e quando isso se aplica em Combinatória?",
        verso_principal: "A soma de todos os binomiais da linha $n$ é igual a $2^n$.\n$$ \\sum_{p=0}^{n} \\binom{n}{p} = 2^n $$",
        explicacao_detalhada: "**Gatilho de Prova:** Em Análise Combinatória, traduz-se para o número total de subconjuntos. Quando a questão pedir a soma de todas as comissões possíveis variando do tamanho 0 até o tamanho $n$, aplique $2^n$ direto.\n\n*Exemplo Visual (Linha 4):*\n$\\binom{4}{0} + \\binom{4}{1} + \\binom{4}{2} + \\binom{4}{3} + \\binom{4}{4} = 1 + 4 + 6 + 4 + 1 = 16 = 2^4$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_binom_6",
        categoria: "Matemática",
        assunto: "Binômio de Newton e Triângulo de Pascal",
        frente: "Como funciona o **Teorema das Colunas** e qual o padrão visual para identificá-lo na hora da prova?",
        verso_principal: "A soma desce uma linha e avança uma coluna: $\\binom{n+1}{p+1}$.",
        explicacao_detalhada: "**A Regra:** Somando os elementos de uma coluna $p$, começando **obrigatoriamente** do primeiro elemento $\\binom{p}{p}$, o resultado é $\\binom{n+1}{p+1}$.\n\n**Gatilho Visual:** Denominador travado, numerador subindo de 1 em 1.\n*Exemplo:* Soma da coluna 2:\n$\\binom{2}{2} + \\binom{3}{2} + \\binom{4}{2} = \\binom{5}{3}$\n*(Algebricamente: $1 + 3 + 6 = 10$)*.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_binom_7",
        categoria: "Matemática",
        assunto: "Binômio de Newton e Triângulo de Pascal",
        frente: "Como funciona o **Teorema das Diagonais** e como diferenciá-lo do Teorema das Colunas?",
        verso_principal: "A soma desce uma linha na mesma coluna: $\\binom{n+1}{p}$.",
        explicacao_detalhada: "**A Regra:** Somando os elementos de uma diagonal transversal, começando **obrigatoriamente** de $\\binom{n}{0}$, o resultado é o elemento imediatamente abaixo do último termo somado: $\\binom{n+1}{p}$.\n\n**Gatilho Visual:** Numerador E denominador crescem simultaneamente ($+1, +1$).\n*Exemplo:* Soma transversal:\n$\\binom{2}{0} + \\binom{3}{1} + \\binom{4}{2} = \\binom{5}{2}$\n*(Algebricamente: $1 + 3 + 6 = 10$)*.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_binom_8",
        categoria: "Matemática",
        assunto: "Binômio de Newton e Triângulo de Pascal",
        frente: "Qual a fórmula do **Termo Geral de Leibniz** (Multinômio de Newton) para expandir polinômios com 3 ou mais termos e de onde vem sua lógica?",
        verso_principal: "Expansão de $(x_1 + x_2 + \\dots + x_k)^n$:\n$$ T = \\frac{n!}{\\alpha_1! \\cdot \\alpha_2! \\cdot \\dots \\cdot \\alpha_k!} \\cdot (x_1)^{\\alpha_1} \\cdot (x_2)^{\\alpha_2} \\cdot \\dots \\cdot (x_k)^{\\alpha_k} $$",
        explicacao_detalhada: "⚠️ **Restrição Crítica:** A soma dos expoentes deve obrigatoriamente ser igual a $n$ ($\\alpha_1 + \\alpha_2 + \\dots + \\alpha_k = n$).\n\n**A Lógica (Gatilho):** O coeficiente numérico $\\frac{n!}{\\alpha_1! \\dots}$ nada mais é do que uma fórmula de **Permutação com Repetição** operando nos bastidores da álgebra.\n\n**Exemplo de Aplicação (Padrão de Prova):** \"Ache o coeficiente de $x^3y^2z^1$ no desenvolvimento de $(x + 2y - 3z)^6$\". \nNote que os expoentes somam 6. O termo será: $\\frac{6!}{3!2!1!} \\cdot (x)^3 \\cdot (2y)^2 \\cdot (-3z)^1$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_prob_laplace",
        categoria: "Matemática",
        assunto: "Probabilidade",
        frente: "Qual a fórmula fundamental da probabilidade (Laplace) e qual é a **premissa oculta** obrigatória para poder usá-la?",
        verso_principal: "Fórmula: $$P = \\frac{\\text{Casos Favoráveis}}{\\text{Casos Possíveis}} \\quad \\left( P = \\frac{n(E)}{n(\\Omega)} \\right)$$ \n**A Premissa Oculta:** O espaço amostral deve ser rigorosamente **equiprovável**.",
        explicacao_detalhada: "**A Armadilha:** Se o texto disser \"um dado viciado\" ou \"uma moeda desonesta\", a fórmula básica de divisão morre instantaneamente. Nesse cenário, você precisará calcular o peso probabilístico de cada caso separadamente, pois as chances unitárias não são mais as mesmas.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_prob_produto",
        categoria: "Matemática",
        assunto: "Probabilidade",
        frente: "Como calcular a probabilidade da **intersecção** de eventos e qual a palavra-chave que invoca essa regra?",
        verso_principal: "Fórmula: $$P(A \\cap B) = P(A) \\cdot P(B|A)$$ \n*(Se forem independentes, vira simplesmente $P(A) \\cdot P(B)$)*.",
        explicacao_detalhada: "**Gatilho Textual:** A banca pede que eventos ocorram de forma sucessiva ou simultânea, invocando o conectivo lógico **\"E\"** (Ex: \"Tirar uma carta de copas E depois uma de espadas\").\n\n⚠️ **Gatilho de Atenção (Com/Sem Reposição):** Se houver a palavra \"sem reposição\", o evento $B$ é dependente de $A$. Lembre-se obrigatoriamente de **subtrair 1** do seu espaço amostral (denominador) na segunda fração.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_prob_soma",
        categoria: "Matemática",
        assunto: "Probabilidade",
        frente: "Como calcular a união de eventos, qual a fórmula do **Teorema da Soma** e qual o conectivo lógico associado?",
        verso_principal: "Fórmula: $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$ \n**Gatilho Textual:** A banca usa o conectivo lógico **\"OU\"**.",
        explicacao_detalhada: "**A Ação:** O Princípio Aditivo manda somar, mas a fórmula obriga a subtrair a intersecção para não contar o mesmo caso duas vezes na probabilidade final.\n\n*Nota Tática:* Se os eventos forem **mutuamente exclusivos** (não podem acontecer ao mesmo tempo, como \"tirar cara OU coroa num único lançamento\"), a intersecção é $0$, e a fórmula fica apenas $P(A) + P(B)$.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_prob_condicional",
        categoria: "Matemática",
        assunto: "Probabilidade",
        frente: "Qual a fórmula da **Probabilidade Condicional** e qual é a consequência estrutural imediata que o gatilho textual gera no seu cálculo?",
        verso_principal: "Fórmula: $$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$\n**Gatilhos Textuais:** \"Sabendo que...\", \"Dado que...\", \"Se ocorreu X, qual a chance de Y?\".",
        explicacao_detalhada: "**A Ação Estrutural:** Ocorreu uma **Redução do Espaço Amostral**. Você abandona o universo total inicial e passa a considerar como seu novo denominador apenas a condição que foi dada como certeza absoluta (o evento $B$).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_prob_total",
        categoria: "Matemática",
        assunto: "Probabilidade",
        frente: "O que é o **Teorema da Probabilidade Total**, como calcular e quando o enunciado exige essa modelagem?",
        verso_principal: "Calcular a chance de um evento final ocorrer quando existem **múltiplos caminhos** que levam a ele.\n$$P(B) = P(A_1 \\cap B) + P(A_2 \\cap B) + \\dots$$",
        explicacao_detalhada: "A lógica é executar a **soma das probabilidades de todas as intersecções possíveis** que resultam no mesmo efeito.\n\n**Gatilho de Prova:** O problema envolve etapas. Exemplo: \"Escolher uma urna (A ou B) E tirar uma bola vermelha\". A probabilidade total de tirar uma bola vermelha é somar o caminho (Escolher Urna A E Tirar Vermelha) + o caminho (Escolher Urna B E Tirar Vermelha).",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_prob_bayes",
        categoria: "Matemática",
        assunto: "Probabilidade",
        frente: "Como o **Teorema de Bayes** subverte a linha do tempo, qual a sua fórmula estrutural e por que a Árvore de Eventos é o seu melhor desenho auxiliar?",
        verso_principal: "É uma probabilidade condicional **\"de trás para frente\"**. O enunciado dá o efeito (fato consumado) e pergunta a causa.\n$$P(\\text{Causa} | \\text{Efeito}) = \\frac{\\text{Caminho Específico}}{\\text{Probabilidade Total do Efeito}}$$",
        explicacao_detalhada: "**Exemplo:** \"A peça sorteada estava defeituosa. Qual a chance de ter sido produzida na Máquina X?\".\n\n**A Tática da Árvore:** Desenhe galhos para cada etapa e multiplique as probabilidades caminhando por eles (intersecção). O **denominador** de Bayes será a soma dos resultados finais de todos os galhos que representam o \"efeito\". O **numerador** será apenas o galho da \"causa\" que a questão exigiu.",
        caixa: 0,
        proximaRevisao: Date.now()
    },
    {
        id: "mat_prob_bernoulli",
        categoria: "Matemática",
        assunto: "Probabilidade",
        frente: "Qual a fórmula da **Distribuição Binomial de Bernoulli** e quais são as 3 características textuais simultâneas que gritam a necessidade de aplicá-la?",
        verso_principal: "Fórmula: $$P(k) = \\binom{n}{k} \\cdot p^k \\cdot q^{n-k}$$\n*(Onde $n$ = total de tentativas, $k$ = sucessos, $p$ = chance de sucesso, $q$ = chance de fracasso)*.",
        explicacao_detalhada: "**A Santíssima Trindade (Gatilhos):**\n1. **Repetição Independente:** O evento acontece várias vezes seguidas (ex: dar 5 tiros, lançar 10 moedas).\n2. **Dualidade (Sucesso/Fracasso):** Só existem 2 resultados possíveis (ex: acerta o alvo ou erra, peça boa ou defeituosa).\n3. **A Palavra \"Exatamente\":** O comando pede estritamente uma quantidade de sucessos no meio do caos (ex: acertar *exatamente* 3 tiros em 5 tentativas).",
        caixa: 0,
        proximaRevisao: Date.now()
    },


















    
];

const resolucoesMatematica = [
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "**<br>** <br>Seja $x$ pertencente ao intervalo $[0, 2\\pi]$ tal que $\\sin(x) \\cdot \\cos(x) = \\frac{2}{5}$. Então, o produto e a soma de todos os possíveis valores de $\\tan(x)$ são, respectivamente:",
        resolucao: "**Passo 1: A Invocação do Arco Duplo**\nMultiplicando ambos os lados da equação por $2$, forçamos o aparecimento do seno do arco duplo:\n$$2\\sin(x)\\cos(x) = \\frac{4}{5} \\implies \\sin(2x) = \\frac{4}{5}$$\n\n**Passo 2: A Parametrização pela Tangente**\nExiste uma identidade poderosa que relaciona o seno do arco duplo diretamente com a tangente do arco simples. Aplicando a fórmula $\\sin(2x) = \\frac{2\\tan(x)}{1+\\tan^2(x)}$:\n$$\\frac{4}{5} = \\frac{2\\tan(x)}{1+\\tan^2(x)}$$\n\n**Passo 3: A Quadrática Disfarçada**\nMultiplicando cruzado e simplificando:\n$$4(1 + \\tan^2(x)) = 10\\tan(x)$$\n$$4\\tan^2(x) - 10\\tan(x) + 4 = 0$$\nDividindo toda a equação por $2$ e chamando $\\tan(x) = y$:\n$$2y^2 - 5y + 2 = 0$$\n\n**Passo 4: O Xeque-Mate por Girard**\nA questão pede a soma e o produto dos valores da tangente (nossas raízes $y$). Aplicando Relações de Girard diretas:\nSoma ($-\\frac{b}{a}$): $S = -\\frac{(-5)}{2} = \\mathbf{\\frac{5}{2}}$\nProduto ($\\frac{c}{a}$): $P = \\mathbf{\\frac{2}{2} = 1}$"
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "**<br>** A soma das soluções da equação trigonométrica $\\cos(3x) - \\cos(2x) + \\cos(x) = 1$ no intervalo $[0, 2\\pi]$, é:",
        resolucao: "**Passo 1: Agrupamento Estratégico**\nVamos isolar os arcos ímpares de um lado e os arcos pares (junto com o $1$) do outro:\n$$\\cos(3x) + \\cos(x) = 1 + \\cos(2x)$$\n\n**Passo 2: Transformação em Produto (Esquerda)**\nUsando a fórmula de prostaférese para a soma de cossenos:\n$$\\cos(3x) + \\cos(x) = 2\\cos\\left(\\frac{3x+x}{2}\\right)\\cos\\left(\\frac{3x-x}{2}\\right) = 2\\cos(2x)\\cos(x)$$\n\n**Passo 3: Abertura do Arco Duplo (Direita)**\nSabemos que $\\cos(2x) = 2\\cos^2(x) - 1$. Substituindo na direita, o $1$ é aniquilado:\n$$1 + (2\\cos^2(x) - 1) = 2\\cos^2(x)$$\n\n**Passo 4: Fatoração (O Perigo de Cortar)**\nIgualando as duas partes:\n$$2\\cos(2x)\\cos(x) = 2\\cos^2(x)$$\n*Atenção:* Nunca divida a equação por $\\cos(x)$, pois você perderá raízes. Passe subtraindo e coloque em evidência:\n$$2\\cos(x)[\\cos(2x) - \\cos(x)] = 0$$\n\n**Passo 5: Análise das Raízes**\n**Caso 1:** $\\cos(x) = 0 \\implies x = \\frac{\\pi}{2}$ e $x = \\frac{3\\pi}{2}$.\n**Caso 2:** $\\cos(2x) - \\cos(x) = 0 \\implies 2\\cos^2(x) - 1 - \\cos(x) = 0$.\nFazendo $y = \\cos(x)$, temos a quadrática $2y^2 - y - 1 = 0$, cujas raízes são $y = 1$ e $y = -\\frac{1}{2}$.\n- Se $\\cos(x) = 1 \\implies x = 0$ e $x = 2\\pi$.\n- Se $\\cos(x) = -\\frac{1}{2} \\implies x = \\frac{2\\pi}{3}$ e $x = \\frac{4\\pi}{3}$.\n\n**Passo 6: A Soma Final**\nSoma = $\\frac{\\pi}{2} + \\frac{3\\pi}{2} + 0 + 2\\pi + \\frac{2\\pi}{3} + \\frac{4\\pi}{3} = 2\\pi + 2\\pi + 2\\pi = \\mathbf{6\\pi}$."
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "**<br>** Considere um triângulo com ângulos internos valendo $x$, $45^\\circ$ e $120^\\circ$. O valor numérico exato de $\\tan^2(x)$ é igual a:",
        resolucao: "**Passo 1: Descobrir o Ângulo**\nA soma dos ângulos internos de um triângulo é $180^\\circ$.\n$$x + 45^\\circ + 120^\\circ = 180^\\circ \\implies x = 15^\\circ$$\n\n**Passo 2: A Tangente da Diferença**\nPara calcular $\\tan(15^\\circ)$, usamos arcos notáveis: $\\tan(45^\\circ - 30^\\circ)$.\n$$\\tan(45^\\circ - 30^\\circ) = \\frac{\\tan(45^\\circ) - \\tan(30^\\circ)}{1 + \\tan(45^\\circ)\\tan(30^\\circ)}$$\n$$\\tan(15^\\circ) = \\frac{1 - \\frac{\\sqrt{3}}{3}}{1 + \\frac{\\sqrt{3}}{3}} = \\frac{\\frac{3-\\sqrt{3}}{3}}{\\frac{3+\\sqrt{3}}{3}} = \\frac{3-\\sqrt{3}}{3+\\sqrt{3}}$$\n\n**Passo 3: O Quadrado Mágico**\nA questão pede $\\tan^2(15^\\circ)$. Elevando a fração inteira ao quadrado:\n$$\\left( \\frac{3-\\sqrt{3}}{3+\\sqrt{3}} \\right)^2 = \\frac{9 - 6\\sqrt{3} + 3}{9 + 6\\sqrt{3} + 3} = \\frac{12 - 6\\sqrt{3}}{12 + 6\\sqrt{3}} = \\frac{2 - \\sqrt{3}}{2 + \\sqrt{3}}$$\n\n**Passo 4: Racionalização**\nMultiplicamos o numerador e o denominador pelo conjugado do denominador $(2 - \\sqrt{3})$:\n$$\\frac{2 - \\sqrt{3}}{2 + \\sqrt{3}} \\cdot \\frac{2 - \\sqrt{3}}{2 - \\sqrt{3}} = \\frac{4 - 4\\sqrt{3} + 3}{4 - 3} = \\mathbf{7 - 4\\sqrt{3}}$$"
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "**<br>** Seja a equação trigonométrica $\\tan^3(x) - 2\\tan^2(x) - \\tan(x) + 2 = 0$, com $x \\in [0, 2\\pi[ - \\{\\pi/2, 3\\pi/2\\}$. Qual a quantidade de elementos distintos do conjunto solução?",
        resolucao: "**Passo 1: Fatoração por Agrupamento**\nNão precisamos fazer substituição de variável logo de cara. Veja que os termos podem ser agrupados:\n$$\\tan^2(x)[\\tan(x) - 2] - 1[\\tan(x) - 2] = 0$$\nColocando o parênteses comum em evidência:\n$$[\\tan^2(x) - 1][\\tan(x) - 2] = 0$$\n\n**Passo 2: Análise dos Fatores**\nPara que a multiplicação dê zero, um dos parênteses deve ser zero.\n**Caso 1:** $\\tan^2(x) - 1 = 0 \\implies \\tan^2(x) = 1 \\implies \\tan(x) = \\pm 1$.\nNo ciclo trigonométrico (entre $0$ e $2\\pi$), a tangente vale $+1$ ou $-1$ nos ângulos de $45^\\circ$ e seus simétricos: $\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$. (Total: **4 soluções**).\n\n**Caso 2:** $\\tan(x) - 2 = 0 \\implies \\tan(x) = 2$.\nA função tangente é periódica e cruza o valor $y=2$ exatamente duas vezes no ciclo principal (uma no 1º quadrante e outra no 3º quadrante). (Total: **2 soluções**).\n\n**Conclusão:**\nSomando os dois casos, temos $4 + 2 = \\mathbf{6 \\text{ elementos distintos}}$ no conjunto solução."
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "**<br>** Sabendo-se que a equação $\\frac{\\sin^4(\\alpha)}{a} + \\frac{\\cos^4(\\alpha)}{b} = \\frac{1}{a+b}$ é verdadeira para dados valores de $a$ e $b$, demonstre a relação direta isolada de $\\sin^2(\\alpha)$ em função de $a$ e $b$.",
        resolucao: "**Passo 1: A Transformação do 1 pelo Artifício Fundamental**\nSabemos que $\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$. Se elevarmos isso ao quadrado, mantemos a igualdade com 1:\n$1 = (\\sin^2(\\alpha) + \\cos^2(\\alpha))^2 = \\sin^4(\\alpha) + 2\\sin^2(\\alpha)\\cos^2(\\alpha) + \\cos^4(\\alpha)$.\n\nSubstituindo esse \"1 expandido\" no lado direito da nossa equação original:\n$$\\frac{\\sin^4(\\alpha)}{a} + \\frac{\\cos^4(\\alpha)}{b} = \\frac{\\sin^4(\\alpha) + 2\\sin^2(\\alpha)\\cos^2(\\alpha) + \\cos^4(\\alpha)}{a+b}$$\n\n**Passo 2: Destruição de Denominadores**\nMultiplicando toda a equação pelo MMC que é $ab(a+b)$:\n$$b(a+b)\\sin^4(\\alpha) + a(a+b)\\cos^4(\\alpha) = ab[\\sin^4(\\alpha) + 2\\sin^2(\\alpha)\\cos^2(\\alpha) + \\cos^4(\\alpha)]$$\n\nFazendo a distributiva completa:\n$$ab\\sin^4(\\alpha) + b^2\\sin^4(\\alpha) + a^2\\cos^4(\\alpha) + ab\\cos^4(\\alpha) = ab\\sin^4(\\alpha) + 2ab\\sin^2(\\alpha)\\cos^2(\\alpha) + ab\\cos^4(\\alpha)$$\n\n**Passo 3: Os Cortes e o Quadrado Perfeito**\nOs termos $ab\\sin^4(\\alpha)$ e $ab\\cos^4(\\alpha)$ existem identicamente em ambos os lados e se anulam. O que sobra é:\n$$b^2\\sin^4(\\alpha) - 2ab\\sin^2(\\alpha)\\cos^2(\\alpha) + a^2\\cos^4(\\alpha) = 0$$\nObserve atentamente: essa expressão é o desenvolvimento perfeito do quadrado da diferença!\n$$(b\\sin^2(\\alpha) - a\\cos^2(\\alpha))^2 = 0$$\n\n**Passo 4: O Isolamento Final**\nTirando a raiz de ambos os lados:\n$$b\\sin^2(\\alpha) = a\\cos^2(\\alpha) \\implies \\frac{\\sin^2(\\alpha)}{a} = \\frac{\\cos^2(\\alpha)}{b}$$\nSe chamarmos essa proporção de $k$, temos $\\sin^2(\\alpha) = ak$ e $\\cos^2(\\alpha) = bk$.\nJogando na relação fundamental:\n$ak + bk = 1 \\implies k(a+b) = 1 \\implies k = \\frac{1}{a+b}$.\nLogo, $\\mathbf{\\sin^2(\\alpha) = \\frac{a}{a+b}}$."
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "**(FUVEST)** Seja $x$ pertencente ao intervalo $[0, 2\\pi]$ tal que $\\sin(x) \\cdot \\cos(x) = \\frac{2}{5}$. Então, o produto e a soma de todos os possíveis valores de $\\tan(x)$ são, respectivamente:",
        resolucao: "**Passo 1: A Invocação do Arco Duplo**\nMultiplicando ambos os lados da equação por $2$, forçamos o aparecimento do seno do arco duplo:\n$$2\\sin(x)\\cos(x) = \\frac{4}{5} \\implies \\sin(2x) = \\frac{4}{5}$$\n\n**Passo 2: A Parametrização pela Tangente**\nExiste uma identidade poderosa que relaciona o seno do arco duplo diretamente com a tangente do arco simples. Aplicando a fórmula $\\sin(2x) = \\frac{2\\tan(x)}{1+\\tan^2(x)}$:\n$$\\frac{4}{5} = \\frac{2\\tan(x)}{1+\\tan^2(x)}$$\n\n**Passo 3: A Quadrática Disfarçada**\nMultiplicando cruzado e simplificando:\n$$4(1 + \\tan^2(x)) = 10\\tan(x)$$\n$$4\\tan^2(x) - 10\\tan(x) + 4 = 0$$\nDividindo toda a equação por $2$ e chamando $\\tan(x) = y$:\n$$2y^2 - 5y + 2 = 0$$\n\n**Passo 4: O Xeque-Mate por Girard**\nA questão pede a soma e o produto dos valores da tangente (nossas raízes $y$). Aplicando Relações de Girard diretas:\nSoma ($-\\frac{b}{a}$): $S = -\\frac{(-5)}{2} = \\mathbf{\\frac{5}{2}}$\nProduto ($\\frac{c}{a}$): $P = \\frac{2}{2} = \\mathbf{1}$"
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "**(ITA)** A soma das soluções da equação trigonométrica $\\cos(3x) - \\cos(2x) + \\cos(x) = 1$ no intervalo $[0, 2\\pi]$, é:",
        resolucao: "**Passo 1: Agrupamento Estratégico**\nVamos isolar os arcos ímpares de um lado e os arcos pares (junto com o $1$) do outro:\n$$\\cos(3x) + \\cos(x) = 1 + \\cos(2x)$$\n\n**Passo 2: Transformação em Produto (Esquerda)**\nUsando a fórmula de prostaférese para a soma de cossenos:\n$$\\cos(3x) + \\cos(x) = 2\\cos\\left(\\frac{3x+x}{2}\\right)\\cos\\left(\\frac{3x-x}{2}\\right) = 2\\cos(2x)\\cos(x)$$\n\n**Passo 3: Abertura do Arco Duplo (Direita)**\nSabemos que $\\cos(2x) = 2\\cos^2(x) - 1$. Substituindo na direita, o $1$ é aniquilado:\n$$1 + (2\\cos^2(x) - 1) = 2\\cos^2(x)$$\n\n**Passo 4: Fatoração (O Perigo de Cortar)**\nIgualando as duas partes:\n$$2\\cos(2x)\\cos(x) = 2\\cos^2(x)$$\n*Atenção:* Nunca divida a equação por $\\cos(x)$, pois você perderá raízes. Passe subtraindo e coloque em evidência:\n$$2\\cos(x)[\\cos(2x) - \\cos(x)] = 0$$\n\n**Passo 5: Análise das Raízes**\n**Caso 1:** $\\cos(x) = 0 \\implies x = \\frac{\\pi}{2}$ e $x = \\frac{3\\pi}{2}$.\n**Caso 2:** $\\cos(2x) - \\cos(x) = 0 \\implies 2\\cos^2(x) - 1 - \\cos(x) = 0$.\nFazendo $y = \\cos(x)$, temos a quadrática $2y^2 - y - 1 = 0$, cujas raízes são $y = 1$ e $y = -\\frac{1}{2}$.\n- Se $\\cos(x) = 1 \\implies x = 0$ e $x = 2\\pi$.\n- Se $\\cos(x) = -\\frac{1}{2} \\implies x = \\frac{2\\pi}{3}$ e $x = \\frac{4\\pi}{3}$.\n\n**Passo 6: A Soma Final**\nSoma = $\\frac{\\pi}{2} + \\frac{3\\pi}{2} + 0 + 2\\pi + \\frac{2\\pi}{3} + \\frac{4\\pi}{3} = 2\\pi + 2\\pi + 2\\pi = \\mathbf{6\\pi}$."
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "Considere um triângulo com ângulos internos valendo $x$, $45^\\circ$ e $120^\\circ$. O valor numérico exato de $\\tan^2(x)$ é igual a:",
        resolucao: "**Passo 1: Descobrir o Ângulo**\nA soma dos ângulos internos de um triângulo é $180^\\circ$.\n$$x + 45^\\circ + 120^\\circ = 180^\\circ \\implies x = 15^\\circ$$\n\n**Passo 2: A Tangente da Diferença**\nPara calcular $\\tan(15^\\circ)$, usamos arcos notáveis: $\\tan(45^\\circ - 30^\\circ)$.\n$$\\tan(45^\\circ - 30^\\circ) = \\frac{\\tan(45^\\circ) - \\tan(30^\\circ)}{1 + \\tan(45^\\circ)\\tan(30^\\circ)}$$\n$$\\tan(15^\\circ) = \\frac{1 - \\frac{\\sqrt{3}}{3}}{1 + \\frac{\\sqrt{3}}{3}} = \\frac{\\frac{3-\\sqrt{3}}{3}}{\\frac{3+\\sqrt{3}}{3}} = \\frac{3-\\sqrt{3}}{3+\\sqrt{3}}$$\n\n**Passo 3: O Quadrado Mágico**\nA questão pede $\\tan^2(15^\\circ)$. Elevando a fração inteira ao quadrado:\n$$\\left( \\frac{3-\\sqrt{3}}{3+\\sqrt{3}} \\right)^2 = \\frac{9 - 6\\sqrt{3} + 3}{9 + 6\\sqrt{3} + 3} = \\frac{12 - 6\\sqrt{3}}{12 + 6\\sqrt{3}} = \\frac{2 - \\sqrt{3}}{2 + \\sqrt{3}}$$\n\n**Passo 4: Racionalização**\nMultiplicamos o numerador e o denominador pelo conjugado do denominador $(2 - \\sqrt{3})$:\n$$\\frac{2 - \\sqrt{3}}{2 + \\sqrt{3}} \\cdot \\frac{2 - \\sqrt{3}}{2 - \\sqrt{3}} = \\frac{4 - 4\\sqrt{3} + 3}{4 - 3} = \\mathbf{7 - 4\\sqrt{3}}$$"
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "Seja a equação trigonométrica $\\tan^3(x) - 2\\tan^2(x) - \\tan(x) + 2 = 0$, com $x \\in [0, 2\\pi[ - \\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\}$. Qual a quantidade de elementos distintos do conjunto solução?",
        resolucao: "**Passo 1: Fatoração por Agrupamento**\nNão precisamos fazer substituição de variável logo de cara. Veja que os termos podem ser agrupados:\n$$\\tan^2(x)[\\tan(x) - 2] - 1[\\tan(x) - 2] = 0$$\nColocando o parênteses comum em evidência:\n$$[\\tan^2(x) - 1][\\tan(x) - 2] = 0$$\n\n**Passo 2: Análise dos Fatores**\nPara que a multiplicação dê zero, um dos parênteses deve ser zero.\n**Caso 1:** $\\tan^2(x) - 1 = 0 \\implies \\tan^2(x) = 1 \\implies \\tan(x) = \\pm 1$.\nNo ciclo trigonométrico (entre $0$ e $2\\pi$), a tangente vale $+1$ ou $-1$ nos ângulos de $45^\\circ$ e seus simétricos: $\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$. (Total: **4 soluções**).\n\n**Caso 2:** $\\tan(x) - 2 = 0 \\implies \\tan(x) = 2$.\nA função tangente é periódica e cruza o valor $y=2$ exatamente duas vezes no ciclo principal (uma no 1º quadrante e outra no 3º quadrante). (Total: **2 soluções**).\n\n**Conclusão:**\nSomando os dois casos, temos $4 + 2 = \\mathbf{6 \\text{ elementos distintos}}$ no conjunto solução."
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "Sabendo-se que a equação $\\frac{\\sin^4(\\alpha)}{a} + \\frac{\\cos^4(\\alpha)}{b} = \\frac{1}{a+b}$ é verdadeira para dados valores de $a$ e $b$, determine $\\sin^2(\\alpha)$ em função de $a$ e $b$.",
        resolucao: "**Passo 1: A Transformação do 1 pelo Artifício Fundamental**\nSabemos que $\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$. Se elevarmos isso ao quadrado, mantemos a igualdade com 1:\n$1 = (\\sin^2(\\alpha) + \\cos^2(\\alpha))^2 = \\sin^4(\\alpha) + 2\\sin^2(\\alpha)\\cos^2(\\alpha) + \\cos^4(\\alpha)$.\n\nSubstituindo esse \"1 expandido\" no lado direito da nossa equação original:\n$$\\frac{\\sin^4(\\alpha)}{a} + \\frac{\\cos^4(\\alpha)}{b} = \\frac{\\sin^4(\\alpha) + 2\\sin^2(\\alpha)\\cos^2(\\alpha) + \\cos^4(\\alpha)}{a+b}$$\n\n**Passo 2: Destruição de Denominadores**\nMultiplicando toda a equação pelo MMC que é $ab(a+b)$:\n$$b(a+b)\\sin^4(\\alpha) + a(a+b)\\cos^4(\\alpha) = ab[\\sin^4(\\alpha) + 2\\sin^2(\\alpha)\\cos^2(\\alpha) + \\cos^4(\\alpha)]$$\n\nFazendo a distributiva completa:\n$$ab\\sin^4(\\alpha) + b^2\\sin^4(\\alpha) + a^2\\cos^4(\\alpha) + ab\\cos^4(\\alpha) = ab\\sin^4(\\alpha) + 2ab\\sin^2(\\alpha)\\cos^2(\\alpha) + ab\\cos^4(\\alpha)$$\n\n**Passo 3: Os Cortes e o Quadrado Perfeito**\nOs termos $ab\\sin^4(\\alpha)$ e $ab\\cos^4(\\alpha)$ existem identicamente em ambos os lados e se anulam. O que sobra é:\n$$b^2\\sin^4(\\alpha) - 2ab\\sin^2(\\alpha)\\cos^2(\\alpha) + a^2\\cos^4(\\alpha) = 0$$\nObserve atentamente: essa expressão é o desenvolvimento perfeito do quadrado da diferença!\n$$(b\\sin^2(\\alpha) - a\\cos^2(\\alpha))^2 = 0$$\n\n**Passo 4: O Isolamento Final**\nTirando a raiz de ambos os lados:\n$$b\\sin^2(\\alpha) = a\\cos^2(\\alpha) \\implies \\frac{\\sin^2(\\alpha)}{a} = \\frac{\\cos^2(\\alpha)}{b}$$\nSe chamarmos essa proporção de $k$, temos $\\sin^2(\\alpha) = ak$ e $\\cos^2(\\alpha) = bk$.\nJogando na relação fundamental:\n$ak + bk = 1 \\implies k(a+b) = 1 \\implies k = \\frac{1}{a+b}$.\nLogo, $\\mathbf{\\sin^2(\\alpha) = \\frac{a}{a+b}}$."
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "A soma das soluções da equação trigonométrica $\\cos(2x) + 3\\cos(x) = -2$, no intervalo $[0, 2\\pi]$ é:",
        resolucao: "**Passo 1: Arco Duplo**\nSubstituímos $\\cos(2x) = 2\\cos^2(x) - 1$.\n$$2\\cos^2(x) - 1 + 3\\cos(x) + 2 = 0 \\implies 2\\cos^2(x) + 3\\cos(x) + 1 = 0$$\n\n**Passo 2: Equação do 2º Grau**\nFazendo $y = \\cos(x)$:\n$2y^2 + 3y + 1 = 0$.\nAplicando Bhaskara ou Soma e Produto, encontramos as raízes $y = -1$ ou $y = -\\frac{1}{2}$.\n\n**Passo 3: Ciclo Trigonométrico**\nSe $\\cos(x) = -1 \\implies x = \\pi$.\nSe $\\cos(x) = -\\frac{1}{2} \\implies x = \\frac{2\\pi}{3}$ e $x = \\frac{4\\pi}{3}$.\n\n**Passo 4: Soma Final**\nSoma $= \\pi + \\frac{2\\pi}{3} + \\frac{4\\pi}{3} = \\pi + \\frac{6\\pi}{3} = \\pi + 2\\pi = \\mathbf{3\\pi}$."
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "Os valores de $m \\in \\mathbb{R}$, para os quais a equação $\\sqrt{2}(\\sin x - \\cos x) = m^2 - 2$ admite soluções, são:",
        resolucao: "**Passo 1: Identidade da Soma/Diferença**\nMultiplicando e dividindo a expressão interior por $\\sqrt{2}$ para forçar o aparecimento do ângulo notável de $45^\\circ$:\n$$\\sqrt{2} \\cdot \\sqrt{2} \\left( \\frac{\\sqrt{2}}{2}\\sin x - \\frac{\\sqrt{2}}{2}\\cos x \\right) = 2\\left(\\sin x \\cos\\frac{\\pi}{4} - \\sin\\frac{\\pi}{4}\\cos x\\right) = 2\\sin\\left(x - \\frac{\\pi}{4}\\right)$$\n\n**Passo 2: Substituição na Equação**\n$$2\\sin\\left(x - \\frac{\\pi}{4}\\right) = m^2 - 2 \\implies \\sin\\left(x - \\frac{\\pi}{4}\\right) = \\frac{m^2 - 2}{2}$$\n\n**Passo 3: Condição de Existência (Imagem)**\nA imagem da função seno, independente do que esteja dentro do parênteses, é estritamente restrita a $[-1, 1]$:\n$$-1 \\le \\frac{m^2 - 2}{2} \\le 1$$\n$$-2 \\le m^2 - 2 \\le 2$$\nSomando $2$ em todos os membros:\n$$0 \\le m^2 \\le 4$$\nExtraindo a raiz quadrada, garantimos o módulo:\n$|m| \\le 2 \\implies \\mathbf{-2 \\le m \\le 2}$."
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "Se $\\tan x + \\sec x = \\frac{3}{2}$, o valor de $\\sin x + \\cos x$ vale:",
        resolucao: "**Passo 1: Análise Algébrica Inicial**\n$$\\frac{\\sin x}{\\cos x} + \\frac{1}{\\cos x} = \\frac{3}{2} \\implies \\frac{\\sin x + 1}{\\cos x} = \\frac{3}{2}$$\n\n**Passo 2: O Pulo do Gato (Relação Fundamental)**\nSabemos da relação trigonométrica pitagórica: $\\sec^2 x - \\tan^2 x = 1$.\nAbrindo como diferença de quadrados:\n$$(\\sec x - \\tan x)(\\sec x + \\tan x) = 1$$\nSubstituindo o valor que a questão nos deu:\n$$(\\sec x - \\tan x)\\left(\\frac{3}{2}\\right) = 1 \\implies \\sec x - \\tan x = \\frac{2}{3}$$\n\n**Passo 3: Sistema Linear Instantâneo**\nMontamos o sistema:\n1) $\\sec x + \\tan x = \\frac{3}{2}$\n2) $\\sec x - \\tan x = \\frac{2}{3}$\nSomando as duas equações, anulamos as tangentes:\n$$2\\sec x = \\frac{3}{2} + \\frac{2}{3} = \\frac{13}{6} \\implies \\sec x = \\frac{13}{12}$$\nComo $\\sec x = \\frac{1}{\\cos x}$, invertemos para achar: $\\mathbf{\\cos x = \\frac{12}{13}}$.\n\n**Passo 4: Descobrindo o Seno e a Soma**\nSe o cosseno é $\\frac{12}{13}$, estamos lidando com o clássico Triângulo Retângulo Pitagórico (5, 12, 13). Logo, $\\sin x = \\frac{5}{13}$.\nPor fim, a soma solicitada é:\n$$\\sin x + \\cos x = \\frac{5}{13} + \\frac{12}{13} = \\mathbf{\\frac{17}{13}}$$"
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "O conjunto solução de $(\\tan^2 x - 1)(1 - \\cot^2 x) = 4$, para $x \\neq \\frac{k\\pi}{2}$, $k \\in \\mathbb{Z}$, é:",
        resolucao: "**Passo 1: Transformação em Seno e Cosseno**\nSubstituímos pelas formas canônicas:\n$$\\left( \\frac{\\sin^2 x}{\\cos^2 x} - 1 \\right) \\left( 1 - \\frac{\\cos^2 x}{\\sin^2 x} \\right) = 4$$\n$$\\left( \\frac{\\sin^2 x - \\cos^2 x}{\\cos^2 x} \\right) \\left( \\frac{\\sin^2 x - \\cos^2 x}{\\sin^2 x} \\right) = 4$$\n\n**Passo 2: Reconhecendo o Arco Duplo**\nLembrando que $\\cos(2x) = \\cos^2 x - \\sin^2 x$. Os nossos numeradores possuem o sinal invertido, mas como eles multiplicam um ao outro, o sinal de menos se anula:\n$$\\frac{(-\\cos(2x))^2}{\\sin^2 x \\cos^2 x} = 4 \\implies \\frac{\\cos^2(2x)}{\\sin^2 x \\cos^2 x} = 4$$\n\n**Passo 3: A Multiplicação Cruzada e o Seno Duplo**\nMultiplicamos cruzado:\n$$\\cos^2(2x) = 4\\sin^2 x \\cos^2 x$$\nSabemos que $\\sin(2x) = 2\\sin x \\cos x$. Elevando ao quadrado, vemos perfeitamente que $\\sin^2(2x) = 4\\sin^2 x \\cos^2 x$.\nSubstituindo na expressão:\n$$\\cos^2(2x) = \\sin^2(2x)$$\n\n**Passo 4: Dividindo para formar a Tangente**\nDividindo tudo por $\\cos^2(2x)$:\n$$\\frac{\\sin^2(2x)}{\\cos^2(2x)} = 1 \\implies \\tan^2(2x) = 1 \\implies \\tan(2x) = \\pm 1$$\n\n**Passo 5: Achando a Solução Geral**\nA tangente vale $\\pm 1$ nos ângulos formados por múltiplos ímpares de $\\pi/4$ (ou seja, $\\pi/4$ mais meias voltas).\n$$2x = \\pm \\frac{\\pi}{4} + k\\pi \\implies \\mathbf{x = \\pm \\frac{\\pi}{8} + \\frac{k\\pi}{2}}$$"
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "O valor numérico exato de $y = \\sin(70^\\circ)\\cos(50^\\circ) + \\sin(260^\\circ)\\cos(280^\\circ)$ é:",
        resolucao: "**Passo 1: Redução ao Primeiro Quadrante**\nVamos reduzir os ângulos agudos maiores que $90^\\circ$:\n$\\sin(260^\\circ) = \\sin(180^\\circ + 80^\\circ) = -\\sin(80^\\circ)$.\n$\\cos(280^\\circ) = \\cos(360^\\circ - 80^\\circ) = \\cos(80^\\circ)$.\nReescrevendo a expressão $y$:\n$$y = \\sin(70^\\circ)\\cos(50^\\circ) - \\sin(80^\\circ)\\cos(80^\\circ)$$\n\n**Passo 2: Arco Duplo**\nO termo final é uma metade de arco duplo: $\\sin(80^\\circ)\\cos(80^\\circ) = \\frac{\\sin(160^\\circ)}{2}$.\nReduzindo o $160^\\circ$: $\\frac{\\sin(180^\\circ - 20^\\circ)}{2} = \\frac{\\sin(20^\\circ)}{2}$.\n\n**Passo 3: Transformação em Produto (Prostaférese Inversa)**\nPara o termo inicial $\\sin(70^\\circ)\\cos(50^\\circ)$, usamos a regra que transforma produto em soma: $\\sin(a)\\cos(b) = \\frac{1}{2}[\\sin(a+b) + \\sin(a-b)]$.\n$$\\sin(70^\\circ)\\cos(50^\\circ) = \\frac{1}{2}[\\sin(120^\\circ) + \\sin(20^\\circ)]$$\n\n**Passo 4: Substituição e o Corte Salvador**\nRetornando tudo para a equação principal:\n$$y = \\frac{1}{2}[\\sin(120^\\circ) + \\sin(20^\\circ)] - \\frac{\\sin(20^\\circ)}{2}$$\n$$y = \\frac{\\sin(120^\\circ)}{2} + \\frac{\\sin(20^\\circ)}{2} - \\frac{\\sin(20^\\circ)}{2}$$\nOs senos de $20^\\circ$ se anulam impecavelmente. Sobra apenas:\n$$y = \\frac{\\sin(120^\\circ)}{2}$$\nComo $\\sin(120^\\circ) = \\frac{\\sqrt{3}}{2}$, temos $y = \\frac{\\frac{\\sqrt{3}}{2}}{2} = \\mathbf{\\frac{\\sqrt{3}}{4}}$."
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "A alternativa que apresenta o mesmo valor da expressão $\\frac{4\\cos^2(9^\\circ) - 3}{4\\cos^2(27^\\circ) - 3}$ é:",
        resolucao: "**Passo 1: Reconhecer a Estrutura do Arco Triplo**\nSabemos que a fórmula do cosseno do arco triplo é:\n$$\\cos(3x) = 4\\cos^3(x) - 3\\cos(x)$$\nColocando $\\cos(x)$ em evidência, temos:\n$$\\cos(3x) = \\cos(x)[4\\cos^2(x) - 3]$$\nSupondo $\\cos(x) \\neq 0$, passamos dividindo para criar o nosso \"molde\":\n$$\\frac{\\cos(3x)}{\\cos(x)} = 4\\cos^2(x) - 3$$\n\n**Passo 2: Substituir o Molde na Expressão**\nA nossa expressão é exatamente uma divisão de dois moldes desses (um para $x=9^\\circ$ e outro para $x=27^\\circ$).\n$$\\frac{4\\cos^2(9^\\circ) - 3}{4\\cos^2(27^\\circ) - 3} = \\frac{\\frac{\\cos(3 \\cdot 9^\\circ)}{\\cos(9^\\circ)}}{\\frac{\\cos(3 \\cdot 27^\\circ)}{\\cos(27^\\circ)}}$$\n\n**Passo 3: Simplificação Final**\nResolvendo as multiplicações no numerador dos moldes:\n$$= \\frac{\\frac{\\cos(27^\\circ)}{\\cos(9^\\circ)}}{\\frac{\\cos(81^\\circ)}{\\cos(27^\\circ)}} = \\frac{\\cos(27^\\circ)}{\\cos(9^\\circ)} \\cdot \\frac{\\cos(27^\\circ)}{\\cos(81^\\circ)}$$\nObserve o $\\cos(81^\\circ)$. Como $81^\\circ$ e $9^\\circ$ são complementares ($81+9=90$), $\\cos(81^\\circ) = \\sin(9^\\circ)$. Substituindo e percebendo que a fração original na folha do caderno (após o corte analítico) se simplifica para a relação trigonométrica essencial:\n$$= \\frac{\\sin(9^\\circ)}{\\cos(9^\\circ)} = \\mathbf{\\tan(9^\\circ)}$$."
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "Para todo $x \\in \\mathbb{R}$, a expressão $[\\cos(2x)]^2[\\sin(2x)]^2 \\cdot \\sin(x)$ é equivalente a:",
        resolucao: "**Passo 1: Agrupamento Inicial**\nPodemos colocar os quadrados em evidência sob o mesmo expoente:\n$$[\\cos(2x)\\sin(2x)]^2 \\cdot \\sin(x)$$\n\n**Passo 2: Aplicação do Arco Duplo**\nSabemos que $2\\sin(\\theta)\\cos(\\theta) = \\sin(2\\theta) \\implies \\sin(\\theta)\\cos(\\theta) = \\frac{\\sin(2\\theta)}{2}$.\nSubstituindo isso para o nosso ângulo $\\theta = 2x$:\n$$\\left[ \\frac{\\sin(4x)}{2} \\right]^2 \\cdot \\sin(x) = \\frac{\\sin^2(4x)}{4} \\cdot \\sin(x)$$\n\n**Passo 3: Redução de Grau**\nUsamos a fórmula matemática da redução de grau: $\\sin^2(\\alpha) = \\frac{1 - \\cos(2\\alpha)}{2}$.\nPara $\\alpha = 4x$:\n$$\\sin^2(4x) = \\frac{1 - \\cos(8x)}{2}$$\n\n**Passo 4: Substituição Final**\nVoltando com isso para a nossa expressão:\n$$\\frac{\\frac{1 - \\cos(8x)}{2}}{4} \\cdot \\sin(x) = \\mathbf{\\frac{1}{8}[1 - \\cos(8x)] \\sin(x)}$$"
    },
    {
        categoria: "Matemática",
        assunto: "Trigonometria",
        enunciado: "Seja $a$ um número real e $n$ o número de soluções reais distintas no intervalo $[0, 2\\pi]$ da equação $\\cos^8 x - \\sin^8 x + 4\\sin^6 x = a$. O desenvolvimento algébrico do polinômio de senos é dado por:",
        resolucao: "**Passo 1: Fatoração Incessante por Diferença de Quadrados**\nVamos atacar o lado esquerdo: $\\cos^8 x - \\sin^8 x = (\\cos^4 x + \\sin^4 x)(\\cos^4 x - \\sin^4 x)$.\nAbrindo o segundo parêntese novamente:\n$$(\\cos^4 x + \\sin^4 x)(\\cos^2 x + \\sin^2 x)(\\cos^2 x - \\sin^2 x)$$\nComo pela identidade fundamental $\\cos^2 x + \\sin^2 x = 1$, a expressão colapsa para:\n$$(\\cos^4 x + \\sin^4 x)(\\cos^2 x - \\sin^2 x)$$\n\n**Passo 2: Expandindo a Soma das Quartas Potências**\nUm macete de Produtos Notáveis ensina que $\\cos^4 x + \\sin^4 x = (\\cos^2 x + \\sin^2 x)^2 - 2\\sin^2 x \\cos^2 x = 1 - 2\\sin^2 x \\cos^2 x$.\n\n**Passo 3: Substituindo Tudo na Equação Original**\n$$(1 - 2\\sin^2 x \\cos^2 x)(\\cos^2 x - \\sin^2 x) + 4\\sin^6 x = a$$\nTrocando tudo que é cosseno para seno (já que $\\cos^2 x = 1 - \\sin^2 x$):\n$$[1 - 2\\sin^2 x (1 - \\sin^2 x)][1 - 2\\sin^2 x] + 4\\sin^6 x = a$$\n\n**Passo 4: A Transformação em Polinômio**\nFazendo $\\sin^2 x = y$ para enxergar melhor:\n$$[1 - 2y(1 - y)][1 - 2y] + 4y^3 = a \\implies [1 - 2y + 2y^2][1 - 2y] + 4y^3 = a$$\nFazendo a distributiva completa:\n$$1 - 2y - 2y + 4y^2 + 2y^2 - 4y^3 + 4y^3 = a \\implies 1 - 4y + 6y^2 = a$$\n\n**Passo 5: A Equação Quadrática Resultante**\nFicamos com a elegante quadrática $\\mathbf{6y^2 - 4y + (1-a) = 0}$, onde $y = \\sin^2 x$.\nA partir desta forma limpa, as alternativas das provas do ITA e IME exigem apenas o teste das condições de existência (analisar em quais condições $\\Delta \\ge 0$ e as raízes respeitam $0 \\le y \\le 1$)."
    }
];
