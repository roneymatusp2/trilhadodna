// Dados completos do jogo "A Trilha do DNA" - VERSÃO COMPLETA E EXPANDIDA

// ==================== CARTAS DE RECURSO ====================
const RESOURCE_CARDS = [
  {
    id: 'plasmideo',
    name: 'Plasmídeo',
    description: 'Vetor de Clonagem - o "caminhãozinho" de DNA',
    icon: '🧬',
    color: 'blue',
    usage: 'Necessário para Insulina e OGM',
    trivia: 'Plasmídeos são DNAs circulares encontrados naturalmente em bactérias.'
  },
  {
    id: 'enzima',
    name: 'Enzima de Restrição',
    description: '"Tesoura Molecular" - corta o DNA',
    icon: '✂️',
    color: 'red',
    usage: 'Necessário para Insulina, OGM e Teste de Paternidade',
    trivia: 'Existem centenas de enzimas de restrição, cada uma reconhecendo sequências específicas de DNA.'
  },
  {
    id: 'pcr',
    name: 'PCR',
    description: '"Xerox do DNA" - amplifica amostras',
    icon: '🔬',
    color: 'purple',
    usage: 'Necessário para Teste de Paternidade',
    trivia: 'PCR pode criar bilhões de cópias de DNA em poucas horas! Kary Mullis ganhou o Nobel por isso.'
  },
  {
    id: 'agrobacterium',
    name: 'Agrobacterium',
    description: 'Vetor de Planta - a "injeção" natural',
    icon: '🦠',
    color: 'green',
    usage: 'Necessário para OGM',
    trivia: 'Esta bactéria naturalmente "infecta" plantas com seu DNA - perfeita para criar OGMs!'
  },
  {
    id: 'celula-tronco',
    name: 'Célula-Tronco',
    description: 'Célula "Coringa" - totipotente/pluripotente',
    icon: '🧪',
    color: 'pink',
    usage: 'Necessário para Terapia Celular',
    trivia: 'Células-tronco podem se transformar em qualquer tipo de célula do corpo!'
  }
];

// ==================== 40 CARTAS DE CONCEITO (COMPLETAS) ====================
const CONCEPT_CARDS = [
  // CATEGORIA: BIOTECNOLOGIA CLÁSSICA (8 cartas)
  {
    id: 'q1',
    category: 'Clássica',
    difficulty: 'facil',
    question: 'Fazer pão, vinho e iogurte usa microrganismos (leveduras, bactérias). Este processo é chamado de:',
    options: ['Engenharia Genética', 'Fermentação', 'PCR'],
    correct: 1,
    explanation: 'A fermentação é um processo clássico de biotecnologia que usa microrganismos inteiros para transformar alimentos.',
    funFact: 'Humanos usam fermentação há mais de 10.000 anos!'
  },
  {
    id: 'q2',
    category: 'Clássica',
    difficulty: 'facil',
    question: 'O primeiro antibiótico, descoberto por Alexander Fleming em 1928, veio de um fungo (Penicillium). Como se chamava?',
    options: ['Insulina', 'Penicilina', 'Agrobacterium'],
    correct: 1,
    explanation: 'A Penicilina foi o primeiro antibiótico descoberto, revolucionando a medicina e salvando milhões de vidas.',
    funFact: 'Fleming descobriu a penicilina por acidente quando um fungo contaminou sua placa de bactérias!'
  },
  {
    id: 'q3',
    category: 'Clássica',
    difficulty: 'medio',
    question: 'Louis Pasteur desenvolveu o processo de "pasteurização" para eliminar microrganismos de alimentos. Em que alimento isso é mais comum?',
    options: ['Pão', 'Leite', 'Queijo'],
    correct: 1,
    explanation: 'A pasteurização do leite mata bactérias nocivas através do aquecimento controlado.',
    funFact: 'Antes da pasteurização, o leite era uma das principais causas de doenças!'
  },
  {
    id: 'q4',
    category: 'Clássica',
    difficulty: 'medio',
    question: 'Qual microrganismo é usado na produção de pão para fazer a massa crescer?',
    options: ['Bactéria E. coli', 'Levedura Saccharomyces', 'Fungo Penicillium'],
    correct: 1,
    explanation: 'A levedura Saccharomyces cerevisiae fermenta açúcares e produz CO₂, fazendo a massa crescer.',
    funFact: 'A mesma levedura do pão também é usada para fazer cerveja e vinho!'
  },
  {
    id: 'q5',
    category: 'Clássica',
    difficulty: 'facil',
    question: 'O iogurte é produzido pela fermentação do leite por qual tipo de microrganismo?',
    options: ['Vírus', 'Bactérias láticas', 'Protozoários'],
    correct: 1,
    explanation: 'Bactérias láticas (como Lactobacillus) fermentam a lactose do leite, produzindo ácido lático e criando o iogurte.',
    funFact: 'As bactérias do iogurte são probióticas e fazem bem para a saúde intestinal!'
  },
  {
    id: 'q6',
    category: 'Clássica',
    difficulty: 'dificil',
    question: 'Qual cientista desenvolveu a primeira vacina contra a raiva em 1885?',
    options: ['Robert Koch', 'Louis Pasteur', 'Alexander Fleming'],
    correct: 1,
    explanation: 'Louis Pasteur criou a vacina antirrábica, salvando a vida de um menino mordido por um cão raivoso.',
    funFact: 'Pasteur testou a vacina pela primeira vez em Joseph Meister, um menino de 9 anos!'
  },
  {
    id: 'q7',
    category: 'Clássica',
    difficulty: 'medio',
    question: 'A produção de queijo depende de qual processo biotecnológico clássico?',
    options: ['Clonagem', 'Fermentação e coagulação', 'PCR'],
    correct: 1,
    explanation: 'Bactérias fermentam a lactose e enzimas (como o coalho) coagulam as proteínas do leite, formando o queijo.',
    funFact: 'Existem mais de 2.000 tipos diferentes de queijo no mundo!'
  },
  {
    id: 'q8',
    category: 'Clássica',
    difficulty: 'medio',
    question: 'Qual bebida alcoólica é produzida pela fermentação de uvas por leveduras?',
    options: ['Cerveja', 'Vinho', 'Vodka'],
    correct: 1,
    explanation: 'O vinho é produzido quando leveduras fermentam os açúcares naturais das uvas, produzindo álcool.',
    funFact: 'Evidências de produção de vinho datam de 6.000 a.C. na Geórgia!'
  },

  // CATEGORIA: BIOTECNOLOGIA MODERNA - DNA (8 cartas)
  {
    id: 'q9',
    category: 'Moderna',
    difficulty: 'facil',
    question: 'A molécula que carrega o "manual de instruções" de um ser vivo é o:',
    options: ['DNA', 'Proteína', 'Plasmídeo'],
    correct: 0,
    explanation: 'O DNA (Ácido Desoxirribonucleico) contém todas as informações genéticas de um organismo.',
    funFact: 'Se você desenrolasse todo o DNA de uma célula humana, ele teria 2 metros de comprimento!'
  },
  {
    id: 'q10',
    category: 'Moderna',
    difficulty: 'medio',
    question: 'A estrutura do DNA foi descoberta em 1953 por quais cientistas?',
    options: ['Darwin e Mendel', 'Watson e Crick', 'Pasteur e Fleming'],
    correct: 1,
    explanation: 'James Watson e Francis Crick descobriram a estrutura de dupla hélice do DNA, com ajuda crucial de Rosalind Franklin.',
    funFact: 'Rosalind Franklin tirou a famosa "Foto 51" por difração de raios-X que revelou a estrutura helicoidal!'
  },
  {
    id: 'q11',
    category: 'Moderna',
    difficulty: 'medio',
    question: 'Quantas "letras" (bases nitrogenadas) formam o alfabeto do DNA?',
    options: ['2 (A e T)', '4 (A, T, C, G)', '20 (como aminoácidos)'],
    correct: 1,
    explanation: 'O DNA usa 4 bases: Adenina (A), Timina (T), Citosina (C) e Guanina (G).',
    funFact: 'A ordem dessas 4 letras codifica TODA a informação da vida!'
  },
  {
    id: 'q12',
    category: 'Moderna',
    difficulty: 'dificil',
    question: 'Qual é o nome do projeto internacional que mapeou todo o genoma humano, concluído em 2003?',
    options: ['Projeto Manhattan', 'Projeto Genoma Humano', 'Projeto Apollo'],
    correct: 1,
    explanation: 'O Projeto Genoma Humano mapeou os 3 bilhões de pares de bases do DNA humano.',
    funFact: 'O projeto custou US$ 3 bilhões e levou 13 anos. Hoje fazemos isso em horas por menos de US$ 1.000!'
  },
  {
    id: 'q13',
    category: 'Moderna',
    difficulty: 'facil',
    question: 'Um segmento de DNA que contém instruções para produzir uma proteína específica é chamado de:',
    options: ['Cromossomo', 'Gene', 'Ribossomo'],
    correct: 1,
    explanation: 'Genes são "receitas" no DNA que instruem a célula a produzir proteínas específicas.',
    funFact: 'Humanos têm cerca de 20.000-25.000 genes, mas compartilhamos 99,9% deles!'
  },
  {
    id: 'q14',
    category: 'Moderna',
    difficulty: 'medio',
    question: 'Qual a porcentagem de DNA que humanos compartilham com chimpanzés?',
    options: ['50%', '75%', '98-99%'],
    correct: 2,
    explanation: 'Compartilhamos 98-99% do DNA com chimpanzés, nossos parentes evolutivos mais próximos.',
    funFact: 'Também compartilhamos 60% do DNA com bananas e 50% com moscas-das-frutas!'
  },
  {
    id: 'q15',
    category: 'Moderna',
    difficulty: 'dificil',
    question: 'O que significa "DNA recombinante"?',
    options: ['DNA quebrado', 'DNA de duas ou mais fontes diferentes combinado', 'DNA que se auto-replica'],
    correct: 1,
    explanation: 'DNA recombinante é criado ao combinar DNA de diferentes organismos, base da engenharia genética.',
    funFact: 'A primeira molécula de DNA recombinante foi criada por Paul Berg em 1972!'
  },
  {
    id: 'q16',
    category: 'Moderna',
    difficulty: 'medio',
    question: 'CRISPR-Cas9 é uma nova tecnologia revolucionária para:',
    options: ['Editar genes com precisão', 'Clonar animais', 'Fazer PCR'],
    correct: 0,
    explanation: 'CRISPR-Cas9 funciona como uma "tesoura molecular" super precisa que pode cortar e editar genes específicos.',
    funFact: 'CRISPR foi adaptado de um sistema de defesa de bactérias contra vírus!'
  },

  // CATEGORIA: FERRAMENTAS DA BIOTECNOLOGIA (8 cartas)
  {
    id: 'q17',
    category: 'Ferramenta',
    difficulty: 'facil',
    question: 'Qual ferramenta é usada como uma "Tesoura Molecular" para cortar o DNA em locais específicos?',
    options: ['Enzima de Restrição', 'PCR', 'Célula-Tronco'],
    correct: 0,
    explanation: 'As Enzimas de Restrição cortam o DNA em sequências específicas, como tesouras moleculares ultra-precisas.',
    funFact: 'Cientistas ganharam o Nobel em 1978 por descobrir enzimas de restrição!'
  },
  {
    id: 'q18',
    category: 'Ferramenta',
    difficulty: 'facil',
    question: 'Qual ferramenta é usada como a "Xerox do DNA", para fazer milhões de cópias de um pedaço de DNA?',
    options: ['Eletroforese', 'PCR', 'Plasmídeo'],
    correct: 1,
    explanation: 'PCR (Reação em Cadeia da Polimerase) amplifica o DNA exponencialmente, criando bilhões de cópias em horas.',
    funFact: 'Kary Mullis inventou o PCR em 1983 e ganhou o Nobel em 1993!'
  },
  {
    id: 'q19',
    category: 'Ferramenta',
    difficulty: 'medio',
    question: 'O que é um "Plasmídeo"?',
    options: ['Uma célula coringa', 'Um DNA circular de bactéria usado como "caminhão" para levar genes', 'Uma planta modificada'],
    correct: 1,
    explanation: 'Plasmídeos são pequenos DNAs circulares encontrados em bactérias, usados como vetores na engenharia genética.',
    funFact: 'Bactérias trocam plasmídeos naturalmente - assim que ganham resistência a antibióticos!'
  },
  {
    id: 'q20',
    category: 'Ferramenta',
    difficulty: 'medio',
    question: 'Para que serve a técnica de "Eletroforese em gel"?',
    options: ['Copiar DNA', 'Separar fragmentos de DNA por tamanho', 'Destruir DNA'],
    correct: 1,
    explanation: 'A eletroforese separa fragmentos de DNA por tamanho, criando um "código de barras" genético único.',
    funFact: 'Na eletroforese, o DNA "corre" em um gel como uma corrida, com fragmentos menores correndo mais rápido!'
  },
  {
    id: 'q21',
    category: 'Ferramenta',
    difficulty: 'dificil',
    question: 'O que é um "vetor" de clonagem na engenharia genética?',
    options: ['Um inseto que transmite doenças', 'Uma molécula de DNA que transporta genes para dentro de células', 'Um tipo de microscópio'],
    correct: 1,
    explanation: 'Vetores (como plasmídeos ou vírus) são "táxis moleculares" que levam genes para dentro de células.',
    funFact: 'Vírus desarmados são excelentes vetores - eles naturalmente "invadem" células!'
  },
  {
    id: 'q22',
    category: 'Ferramenta',
    difficulty: 'medio',
    question: 'Qual técnica permite "ler" a sequência exata de letras (bases) do DNA?',
    options: ['PCR', 'Sequenciamento de DNA', 'Clonagem'],
    correct: 1,
    explanation: 'O sequenciamento de DNA determina a ordem exata das bases A, T, C, G em uma molécula de DNA.',
    funFact: 'Hoje podemos sequenciar um genoma humano completo em menos de 24 horas!'
  },
  {
    id: 'q23',
    category: 'Ferramenta',
    difficulty: 'dificil',
    question: 'A técnica de "Southern Blot" (de 1975) é usada para:',
    options: ['Detectar sequências específicas de DNA', 'Fazer café no laboratório', 'Clonar ovelhas'],
    correct: 0,
    explanation: 'Southern Blot detecta sequências específicas de DNA em uma amostra complexa.',
    funFact: 'Foi inventada por Edwin Southern. As técnicas similares posteriores foram chamadas Northern, Western e Eastern Blot (uma piada científica)!'
  },
  {
    id: 'q24',
    category: 'Ferramenta',
    difficulty: 'medio',
    question: 'Qual é a temperatura aproximada usada no PCR para separar as duas fitas do DNA?',
    options: ['37°C (temperatura corporal)', '95°C (quase fervendo)', '0°C (congelando)'],
    correct: 1,
    explanation: 'No PCR, aquecemos a 95°C para "derreter" a dupla hélice do DNA, separando as duas fitas.',
    funFact: 'O PCR usa uma enzima de bactérias que vivem em fontes termais - ela aguenta altas temperaturas!'
  },

  // CATEGORIA: SAÚDE E MEDICINA (8 cartas)
  {
    id: 'q25',
    category: 'Saúde',
    difficulty: 'facil',
    question: 'A Insulina usada por diabéticos pode ser produzida por bactérias que receberam o gene humano. Essa bactéria que produz algo de outra espécie é um organismo:',
    options: ['Transgênico', 'Decomposto', 'Fóssil'],
    correct: 0,
    explanation: 'Organismos transgênicos têm genes de outras espécies inseridos em seu DNA.',
    funFact: 'A insulina humana produzida por bactérias foi aprovada em 1982 - o primeiro remédio de DNA recombinante!'
  },
  {
    id: 'q26',
    category: 'Saúde',
    difficulty: 'facil',
    question: 'Células "coringas" que podem se transformar em outros tipos de células (pele, músculo, nervo) são chamadas:',
    options: ['Células-Tronco', 'Plasmídeos', 'Enzimas'],
    correct: 0,
    explanation: 'Células-Tronco são células não especializadas que podem se diferenciar em vários tipos celulares.',
    funFact: 'Células-tronco embrionárias podem virar QUALQUER célula do corpo - são totipotentes!'
  },
  {
    id: 'q27',
    category: 'Saúde',
    difficulty: 'medio',
    question: 'Antes da insulina recombinante, de onde vinha a insulina usada por diabéticos?',
    options: ['Pâncreas de porcos e bois', 'Plantas transgênicas', 'Síntese química'],
    correct: 0,
    explanation: 'Antigamente extraíam insulina de pâncreas de animais abatidos, um processo caro e às vezes causava reações alérgicas.',
    funFact: 'Eram necessários pâncreas de 24 porcos para produzir insulina para 1 diabético por 1 ano!'
  },
  {
    id: 'q28',
    category: 'Saúde',
    difficulty: 'dificil',
    question: 'Qual foi a primeira doença humana a ser tratada com terapia gênica (1990)?',
    options: ['Diabetes', 'SCID (deficiência imunológica)', 'Câncer'],
    correct: 1,
    explanation: 'Ashanti DeSilva, uma menina de 4 anos com SCID, recebeu o primeiro tratamento de terapia gênica em 1990.',
    funFact: 'Na terapia gênica, inserimos uma cópia funcional de um gene nas células do paciente!'
  },
  {
    id: 'q29',
    category: 'Saúde',
    difficulty: 'medio',
    question: 'O Hormônio do Crescimento humano (hGH) agora é produzido por biotecnologia. Antes, de onde vinha?',
    options: ['Glândulas pituitárias de cadáveres humanos', 'Leite de vaca', 'Síntese química'],
    correct: 0,
    explanation: 'Extraíam hGH de glândulas de cadáveres - um método perigoso que transmitiu doenças fatais.',
    funFact: 'O hGH recombinante (1985) eliminou o risco de transmitir a doença de Creutzfeldt-Jakob!'
  },
  {
    id: 'q30',
    category: 'Saúde',
    difficulty: 'dificil',
    question: 'Vacinas de mRNA (como as da COVID-19) funcionam:',
    options: ['Injetando vírus mortos', 'Fazendo suas células produzirem proteínas virais', 'Usando anticorpos prontos'],
    correct: 1,
    explanation: 'Vacinas de mRNA ensinam nossas células a produzir uma proteína viral, treinando o sistema imune.',
    funFact: 'A tecnologia de mRNA foi desenvolvida há décadas, mas só agora foi aprovada graças à COVID-19!'
  },
  {
    id: 'q31',
    category: 'Saúde',
    difficulty: 'medio',
    question: 'A "Hemofilia B" pode ser tratada com uma proteína produzida no leite de:',
    options: ['Cabras transgênicas', 'Vacas normais', 'Ovelhas clonadas'],
    correct: 0,
    explanation: 'Cabras transgênicas produzem o fator IX de coagulação no leite, usado para tratar hemofilia B.',
    funFact: 'Essas cabras são chamadas de "biorreatores" - fábricas vivas de medicamentos!'
  },
  {
    id: 'q32',
    category: 'Saúde',
    difficulty: 'medio',
    question: 'Qual biotecnologia promete regenerar tecidos danificados (coração, medula espinhal) no futuro?',
    options: ['Antibióticos', 'Terapia com Células-Tronco', 'Vacinas'],
    correct: 1,
    explanation: 'Células-tronco podem se diferenciar em células especializadas, potencialmente regenerando tecidos lesionados.',
    funFact: 'Cientistas já conseguiram fazer células-tronco virarem neurônios, células cardíacas e muito mais!'
  },

  // CATEGORIA: FORENSE E IDENTIFICAÇÃO (4 cartas)
  {
    id: 'q33',
    category: 'Forense',
    difficulty: 'facil',
    question: 'A técnica que separa os fragmentos de DNA por tamanho, criando um "código de barras" genético para testes de paternidade, chama-se:',
    options: ['Eletroforese', 'Fermentação', 'Clonagem'],
    correct: 0,
    explanation: 'A Eletroforese separa fragmentos de DNA por tamanho, permitindo comparações genéticas entre pessoas.',
    funFact: 'Cada pessoa tem um padrão único de DNA - como uma impressão digital molecular!'
  },
  {
    id: 'q34',
    category: 'Forense',
    difficulty: 'medio',
    question: 'Em um teste de paternidade, comparamos regiões do DNA chamadas "STRs". O que elas têm de especial?',
    options: ['São idênticas em todos', 'Variam muito entre pessoas', 'Não existem em crianças'],
    correct: 1,
    explanation: 'STRs (Short Tandem Repeats) são sequências repetitivas que variam muito, permitindo identificação individual.',
    funFact: 'Uma criança herda metade dos STRs do pai e metade da mãe!'
  },
  {
    id: 'q35',
    category: 'Forense',
    difficulty: 'medio',
    question: 'Qual a probabilidade de duas pessoas não relacionadas terem DNA idêntico?',
    options: ['1 em 100', '1 em 1 milhão', '1 em 1 trilhão'],
    correct: 2,
    explanation: 'Com exceção de gêmeos idênticos, a chance de duas pessoas terem DNA igual é astronomicamente pequena.',
    funFact: 'Gêmeos idênticos TÊM o mesmo DNA - mas impressões digitais diferentes!'
  },
  {
    id: 'q36',
    category: 'Forense',
    difficulty: 'dificil',
    question: 'O "DNA mitocondrial" é especial em investigações forenses porque:',
    options: ['É herdado só da mãe', 'É herdado só do pai', 'É diferente em cada célula'],
    correct: 0,
    explanation: 'DNA mitocondrial vem só da mãe, permitindo rastrear linhagens maternas por gerações.',
    funFact: 'Usaram DNA mitocondrial para identificar os restos da família real russa Romanov!'
  },

  // CATEGORIA: AGRICULTURA E OGMs (6 cartas)
  {
    id: 'q37',
    category: 'Agricultura',
    difficulty: 'facil',
    question: 'O que significa a sigla OGM?',
    options: ['Organismo Geneticamente Modificado', 'Órgão de Grande Magnitude', 'Organização de Gestão Mundial'],
    correct: 0,
    explanation: 'OGM são organismos que tiveram seu DNA alterado por técnicas de engenharia genética.',
    funFact: 'O primeiro OGM foi uma bactéria criada em 1973. O primeiro alimento OGM foi o tomate "Flavr Savr" (1994)!'
  },
  {
    id: 'q38',
    category: 'Agricultura',
    difficulty: 'medio',
    question: 'O milho "Bt" é transgênico porque contém um gene de:',
    options: ['Bactéria que produz inseticida natural', 'Tomate', 'Peixe'],
    correct: 0,
    explanation: 'O gene Bt (de Bacillus thuringiensis) faz o milho produzir uma proteína tóxica para lagartas, mas segura para humanos.',
    funFact: 'Agricultores orgânicos usam a bactéria Bt como pesticida natural há décadas!'
  },
  {
    id: 'q39',
    category: 'Agricultura',
    difficulty: 'medio',
    question: 'O "Arroz Dourado" é um OGM criado para combater a deficiência de:',
    options: ['Vitamina A', 'Vitamina C', 'Ferro'],
    correct: 0,
    explanation: 'Arroz Dourado produz beta-caroteno (precursor da vitamina A), ajudando a prevenir cegueira em crianças.',
    funFact: 'Deficiência de vitamina A causa cegueira em 250.000-500.000 crianças por ano!'
  },
  {
    id: 'q40',
    category: 'Agricultura',
    difficulty: 'dificil',
    question: 'Qual porcentagem da soja cultivada no Brasil é transgênica?',
    options: ['Menos de 10%', 'Cerca de 50%', 'Mais de 95%'],
    correct: 2,
    explanation: 'Mais de 95% da soja brasileira é transgênica, principalmente resistente a herbicidas.',
    funFact: 'Brasil é o segundo maior produtor de transgênicos do mundo, atrás apenas dos EUA!'
  },

  // CATEGORIA: BIOÉTICA E SOCIEDADE (6 cartas)
  {
    id: 'q41',
    category: 'Bioética',
    difficulty: 'facil',
    question: 'O primeiro mamífero clonado com sucesso a partir de uma célula adulta (de outra ovelha) foi a:',
    options: ['Vaca Mimosa', 'Rata de laboratório', 'Ovelha Dolly'],
    correct: 2,
    explanation: 'A Ovelha Dolly foi o primeiro mamífero clonado de uma célula adulta, nascida em 1996 na Escócia.',
    funFact: 'Dolly foi nomeada em homenagem à cantora Dolly Parton - a célula veio de glândula mamária!'
  },
  {
    id: 'q42',
    category: 'Bioética',
    difficulty: 'medio',
    question: 'A "lei" que diz que, na dúvida, é melhor prevenir e não liberar um OGM até que se prove que é seguro, chama-se:',
    options: ['Lei do Mais Forte', 'Princípio da Precaução', 'Lei do Retorno'],
    correct: 1,
    explanation: 'O Princípio da Precaução orienta que, diante de riscos incertos, devemos adotar medidas preventivas.',
    funFact: 'Este princípio é usado não só para OGMs, mas também para mudanças climáticas e novos químicos!'
  },
  {
    id: 'q43',
    category: 'Bioética',
    difficulty: 'medio',
    question: 'O que é "Fluxo Gênico" no contexto de OGMs?',
    options: ['Vazamento de DNA em laboratório', 'Transferência de genes de OGMs para plantas selvagens via pólen', 'Corrente sanguínea de genes'],
    correct: 1,
    explanation: 'Fluxo Gênico ocorre quando pólen de plantas transgênicas fertiliza plantas não-transgênicas ou selvagens.',
    funFact: 'Por isso plantam zonas de isolamento ao redor de campos de OGMs!'
  },
  {
    id: 'q44',
    category: 'Bioética',
    difficulty: 'dificil',
    question: 'Em 2018, um cientista chinês anunciou ter criado os primeiros bebês geneticamente editados (com CRISPR). Qual foi a reação da comunidade científica?',
    options: ['Celebração mundial', 'Condenação ética massiva', 'Indiferença'],
    correct: 1,
    explanation: 'He Jiankui foi condenado mundialmente e preso por violar éticas científicas ao editar embriões humanos.',
    funFact: 'Muitos países proíbem edição genética em embriões humanos que serão implantados!'
  },
  {
    id: 'q45',
    category: 'Bioética',
    difficulty: 'medio',
    question: 'Biopirataria é:',
    options: ['Roubo de conhecimento tradicional e recursos genéticos', 'Pirataria em alto mar', 'Hackers de laboratórios'],
    correct: 0,
    explanation: 'Biopirataria é a exploração ilegal de recursos biológicos e conhecimentos tradicionais sem compensação justa.',
    funFact: 'A Amazônia sofre biopirataria constante de suas plantas medicinais e conhecimentos indígenas!'
  },
  {
    id: 'q46',
    category: 'Bioética',
    difficulty: 'dificil',
    question: 'O que é "eugenia" e por que é considerado antiético?',
    options: ['Estudo de genes', 'Seleção artificial de características humanas "desejáveis"', 'Tipo de clonagem'],
    correct: 1,
    explanation: 'Eugenia busca "melhorar" a espécie humana por seleção, mas foi usada para justificar atrocidades como o Holocausto.',
    funFact: 'Programas eugênicos esterilizaram à força milhares de pessoas nos EUA e Europa no século XX!'
  }
];

// ==================== 30 CARTAS DE DESAFIO (COMPLETAS) ====================
const CHALLENGE_CARDS = [
  // INOVAÇÕES POSITIVAS (10 cartas)
  {
    id: 'c1',
    type: 'innovation',
    title: 'INOVAÇÃO: Insulina Recombinante',
    description: 'Um paciente com diabetes tipo 1 precisa de Insulina urgentemente. A produção clássica (retirada de pâncreas de porcos) é lenta, cara e pode causar reações alérgicas.',
    effect: 'positive',
    action: 'Se você tiver 1 Plasmídeo e 1 Enzima de Restrição, pode completar a Missão Saúde agora!',
    reward: 'complete_health_mission',
    icon: '💉'
  },
  {
    id: 'c2',
    type: 'innovation',
    title: 'INOVAÇÃO: Amplificação de DNA Forense',
    description: 'Uma cena de crime tem apenas uma minúscula amostra de DNA (alguns fios de cabelo). É muito pouco para análise tradicional!',
    effect: 'positive',
    action: 'Use PCR para amplificar! Se você tiver 1 PCR, colete 2 Recursos extras como recompensa pela sua descoberta.',
    reward: 'gain_2_resources',
    icon: '🔍'
  },
  {
    id: 'c3',
    type: 'innovation',
    title: 'AVANÇO: Terapia com Células-Tronco',
    description: 'Sua pesquisa com Células-Tronco regenerou com sucesso o tecido cardíaco danificado em ratos de laboratório! A mídia científica está eufórica.',
    effect: 'positive',
    action: 'Se você tiver 1 Célula-Tronco, pode completar a Missão Saúde! Avance 5 casas como bônus.',
    reward: 'complete_health_and_advance_5',
    icon: '🎉'
  },
  {
    id: 'c4',
    type: 'innovation',
    title: 'INOVAÇÃO: Algodão Bt Resistente',
    description: 'Sua lavoura de algodão está sendo devastada por lagartas. Perda estimada: 70% da safra. Você precisa de uma solução urgente!',
    effect: 'positive',
    action: 'Crie algodão OGM com gene Bt! Se tiver 1 Plasmídeo e 1 Agrobacterium, complete a Missão Agricultura!',
    reward: 'complete_agriculture_mission',
    icon: '🌾'
  },
  {
    id: 'c5',
    type: 'innovation',
    title: 'FINANCIAMENTO: Projeto Aprovado!',
    description: 'O governo aprovou seu projeto de "Segurança Alimentar" para desenvolver alimentos biofortificados mais nutritivos. Verba liberada: R$ 5 milhões!',
    effect: 'positive',
    action: 'Colete 3 Cartas de Recurso do banco para equipar seu laboratório.',
    reward: 'gain_3_resources',
    icon: '💰'
  },
  {
    id: 'c6',
    type: 'innovation',
    title: 'DESCOBERTA: Novo Antibiótico',
    description: 'Sua equipe descobriu um novo antibiótico produzido por bactérias do solo da Amazônia! Eficaz contra superbactérias resistentes.',
    effect: 'positive',
    action: 'Avance 6 casas. Você ganhou reconhecimento internacional!',
    reward: 'advance_6',
    icon: '🏅'
  },
  {
    id: 'c7',
    type: 'innovation',
    title: 'REVOLUÇÃO: Vacina de mRNA',
    description: 'Sua vacina de mRNA contra um novo vírus foi aprovada em tempo recorde! Milhões de vidas podem ser salvas.',
    effect: 'positive',
    action: 'Escolha: Complete QUALQUER missão que ainda não terminou OU colete 4 recursos.',
    reward: 'choose_mission_or_4_resources',
    icon: '💉'
  },
  {
    id: 'c8',
    type: 'innovation',
    title: 'SUCESSO: Arroz Dourado Aprovado',
    description: 'Seu Arroz Dourado enriquecido com vitamina A foi aprovado! Vai combater a cegueira infantil em países pobres.',
    effect: 'positive',
    action: 'Complete a Missão Agricultura (se tiver os recursos) OU ganhe 3 recursos.',
    reward: 'agriculture_or_3_resources',
    icon: '🌾'
  },
  {
    id: 'c9',
    type: 'innovation',
    title: 'PRÊMIO: Publicação na Nature!',
    description: 'Seu artigo revolucionário sobre edição genética foi aceito na revista Nature - a mais prestigiada do mundo!',
    effect: 'positive',
    action: 'Avance 4 casas e jogue os dados novamente neste turno!',
    reward: 'advance_4_and_roll_again',
    icon: '📰'
  },
  {
    id: 'c10',
    type: 'innovation',
    title: 'COLABORAÇÃO: Parceria Internacional',
    description: 'Sua universidade fechou parceria com o MIT e Instituto Pasteur! Acesso a tecnologia de ponta.',
    effect: 'positive',
    action: 'Colete 2 recursos E puxe outra carta Desafio (pode ser boa ou ruim!).',
    reward: 'gain_2_and_draw_challenge',
    icon: '🤝'
  },

  // RISCOS E DESASTRES (10 cartas)
  {
    id: 'c11',
    type: 'risk',
    title: 'RISCO: Fluxo Gênico Detectado!',
    description: 'Seu campo de milho Bt foi plantado muito perto de parentes silvestres. Detectaram pólen transgênico em plantas nativas! Violação ambiental grave.',
    effect: 'negative',
    action: 'Perca 2 turnos enquanto o Comitê de Biossegurança investiga. Descarte 1 recurso.',
    penalty: 'skip_2_turns_lose_1_resource',
    icon: '⚠️'
  },
  {
    id: 'c12',
    type: 'risk',
    title: 'DESASTRE: Contaminação no Lab',
    description: 'Sua cultura de células-tronco foi contaminada por fungos! Todo o trabalho de 3 meses perdido. Esterilização emergencial necessária.',
    effect: 'negative',
    action: 'Perca 1 turno e descarte 1 Célula-Tronco (se tiver).',
    penalty: 'skip_1_turn_lose_stem_cell',
    icon: '🦠'
  },
  {
    id: 'c13',
    type: 'risk',
    title: 'FALHA: Vetor Rejeitado',
    description: 'Desastre no laboratório! O plasmídeo não aceitou o gene humano. A Enzima de Restrição cortou no lugar errado. Experimento falhou.',
    effect: 'negative',
    action: 'Descarte 1 Plasmídeo e 1 Enzima (se tiver) e volte ao Hub (Universidade).',
    penalty: 'lose_plasmid_enzyme_return_hub',
    icon: '💥'
  },
  {
    id: 'c14',
    type: 'risk',
    title: 'CRISE: Superbactéria Resistente',
    description: 'Uma superbactéria resistente a todos os antibióticos escapou do laboratório de contenção! Quarentena total do prédio.',
    effect: 'negative',
    action: 'Perca 3 turnos. TODOS os jogadores perdem 1 recurso.',
    penalty: 'skip_3_turns_all_lose_1',
    icon: '☣️'
  },
  {
    id: 'c15',
    type: 'risk',
    title: 'PROBLEMA: PCR Contaminado',
    description: 'Suas amostras de PCR foram contaminadas com DNA estranho! Os resultados forenses são inválidos. Teste de paternidade comprometido.',
    effect: 'negative',
    action: 'Descarte 1 PCR (se tiver) e perca 1 turno.',
    penalty: 'lose_pcr_skip_1',
    icon: '🔬'
  },
  {
    id: 'c16',
    type: 'risk',
    title: 'ACIDENTE: Quebra de Freezer -80°C',
    description: 'O freezer ultra-frio do laboratório quebrou durante a noite! Centenas de amostras de DNA e células perdidas.',
    effect: 'negative',
    action: 'Descarte 2 recursos quaisquer (sua escolha).',
    penalty: 'lose_2_any_resources',
    icon: '❄️'
  },
  {
    id: 'c17',
    type: 'risk',
    title: 'EMBARGO: Resistência a OGM',
    description: 'Países da União Europeia embargaram suas exportações de soja transgênica! Perdas econômicas massivas.',
    effect: 'negative',
    action: 'Volte 5 casas e perca 1 turno.',
    penalty: 'back_5_skip_1',
    icon: '🚫'
  },
  {
    id: 'c18',
    type: 'risk',
    title: 'VAZAMENTO: Dados Genéticos Hackeados',
    description: 'Hackers invadiram seu banco de dados genéticos! Dados de paternidade vazados. Processo judicial iminente.',
    effect: 'negative',
    action: 'Perca 2 turnos resolvendo o processo. Perca todos os recursos de PCR.',
    penalty: 'skip_2_lose_all_pcr',
    icon: '🔓'
  },
  {
    id: 'c19',
    type: 'risk',
    title: 'MUTAÇÃO: Efeito Inesperado',
    description: 'Seu OGM desenvolveu uma mutação não planejada! As plantas estão crescendo de forma anormal. Testes de segurança urgentes necessários.',
    effect: 'negative',
    action: 'Retorne ao Hub e perca 1 recurso Plasmídeo e 1 Agrobacterium.',
    penalty: 'return_hub_lose_ogm_resources',
    icon: '🧬'
  },
  {
    id: 'c20',
    type: 'risk',
    title: 'CORTE: Financiamento Cancelado',
    description: 'Crise econômica! O governo cortou 50% do orçamento de pesquisa. Sua bolsa de pós-doutorado foi cancelada.',
    effect: 'negative',
    action: 'Escolha: Perca 3 recursos OU perca 4 turnos trabalhando como Uber.',
    penalty: 'choose_3_resources_or_4_turns',
    icon: '💸'
  },

  // DESAFIOS E DILEMAS ÉTICOS (10 cartas)
  {
    id: 'c21',
    type: 'challenge',
    title: 'DILEMA: Teste em Humanos',
    description: 'Sua terapia gênica funcionou em ratos. Uma criança com doença terminal pede para ser voluntária. Mas os testes em humanos ainda não foram aprovados...',
    effect: 'neutral',
    action: 'Debate! Responda uma pergunta de Bioética corretamente para continuar OU perca 2 turnos considerando a ética.',
    requirement: 'answer_ethics_or_skip_2',
    icon: '⚖️'
  },
  {
    id: 'c22',
    type: 'challenge',
    title: 'DEBATE: Segurança Alimentar de OGMs',
    description: 'Ativistas ambientais questionam a segurança do seu milho transgênico. Eles pedem estudos de longo prazo (20+ anos). Você tem certeza que é seguro, mas...',
    effect: 'neutral',
    action: 'Aplique o Princípio da Precaução: Responda uma pergunta sobre OGMs OU não pode entrar na Zona de Agricultura por 2 turnos.',
    requirement: 'answer_ogm_or_block_2',
    icon: '🌽'
  },
  {
    id: 'c23',
    type: 'challenge',
    title: 'FAMA: Clonagem da Ovelha Dolly',
    description: 'Você anunciou a clonagem do primeiro mamífero (Ovelha Dolly)! A mídia mundial está em frenesi. Todos perguntam: "E clones humanos?"',
    effect: 'neutral',
    action: 'Perca 1 turno dando entrevistas. Mas todos os outros jogadores devem lhe dar 1 Recurso pela sua fama.',
    requirement: 'skip_1_gain_from_all',
    icon: '🐑'
  },
  {
    id: 'c24',
    type: 'challenge',
    title: 'POLÊMICA: Edição de Embriões',
    description: 'Um cientista chinês editou geneticamente embriões humanos com CRISPR. Você precisa se posicionar publicamente como líder da sua área.',
    effect: 'neutral',
    action: 'Escolha seu lado: A favor (ganhe 2 recursos mas pule 1 turno com críticas) OU Contra (mantenha reputação mas perca 1 recurso).',
    requirement: 'choose_side_consequences',
    icon: '👶'
  },
  {
    id: 'c25',
    type: 'challenge',
    title: 'COMITÊ: Aprovação de Biossegurança',
    description: 'PARE! Seu experimento com vírus modificados precisa passar pelo Comitê de Biossegurança. Eles avaliam riscos de duplo uso e bioterrorismo.',
    effect: 'neutral',
    action: 'Puxe uma Carta Conceito. Acerte para ser aprovado. Erre e fique parado 2 turnos reformulando o projeto.',
    requirement: 'concept_card_or_skip_2',
    icon: '🛡️'
  },
  {
    id: 'c26',
    type: 'challenge',
    title: 'PATENTEAMENTO: Disputa Legal',
    description: 'Outra empresa alega que VOCÊ roubou a técnica patenteada deles! Processo judicial por violação de propriedade intelectual.',
    effect: 'neutral',
    action: 'Defenda-se: Pague 2 recursos em custas legais OU perca 3 turnos no tribunal.',
    requirement: 'pay_2_or_skip_3',
    icon: '⚖️'
  },
  {
    id: 'c27',
    type: 'challenge',
    title: 'BIOPIRATARIA: Conhecimento Tradicional',
    description: 'Você descobriu que uma planta amazônica usada por indígenas há séculos tem propriedades anti-câncer. Mas não pediu autorização da comunidade...',
    effect: 'neutral',
    action: 'Dilema ético: Volte ao Hub e negocie repartição de benefícios (perca 2 turnos) OU seja denunciado e perca 3 recursos.',
    requirement: 'negotiate_or_lose_3',
    icon: '🌿'
  },
  {
    id: 'c28',
    type: 'challenge',
    title: 'EUGENIA: Seleção de Características',
    description: 'Um casal milionário quer usar seu laboratório para selecionar embriões com "genes superiores" (alto QI, olhos azuis, atletismo). Eles pagam muito bem...',
    effect: 'neutral',
    action: 'Escolha: Recuse por ética (mantenha integridade) OU aceite e ganhe 4 recursos mas perca 2 turnos com protestos.',
    requirement: 'ethics_or_money',
    icon: '🧬'
  },
  {
    id: 'c29',
    type: 'challenge',
    title: 'PUBLICAÇÃO: Conflito de Interesse',
    description: 'Você deve publicar dados negativos sobre um medicamento transgênico. Mas sua universidade recebe doações milionárias da empresa farmacêutica que o produz...',
    effect: 'neutral',
    action: 'Publique a verdade (perca 2 recursos de financiamento) OU esconda dados (ganhe 3 recursos mas responda pergunta de Bioética).',
    requirement: 'truth_or_hide',
    icon: '📰'
  },
  {
    id: 'c30',
    type: 'challenge',
    title: 'CONFERÊNCIA: Apresentação Internacional',
    description: 'Você foi convidado para apresentar sua pesquisa no maior congresso de biotecnologia do mundo! Mas precisa de resultados impressionantes...',
    effect: 'neutral',
    action: 'Prepare-se: Se tiver completado 2+ missões, avance 6 casas. Se não, perca 1 turno preparando slides.',
    requirement: 'check_2_missions',
    icon: '🎤'
  }
];

// ==================== TABULEIRO ====================
const BOARD_SPACES = {
  classic: [
    { id: 0, name: 'Início', subname: 'Prêmio Nobel', type: 'start', icon: '🏆', color: 'gold', description: 'Bem-vindo à jornada da Biotecnologia!' },
    { id: 1, name: 'Descoberta da Levedura', type: 'history', icon: '🍞', color: 'brown', description: '8000 a.C. - Sumérios fermentam pão e cerveja' },
    { id: 2, name: 'Puxe Carta Conceito', type: 'concept', icon: '❓', color: 'blue', description: 'Teste seus conhecimentos!' },
    { id: 3, name: 'Produção de Queijo', type: 'history', icon: '🧀', color: 'yellow', description: 'Fermentação lática e coalho' },
    { id: 4, name: 'Colete Recurso', type: 'resource', icon: '🎁', color: 'green', description: 'Ganhe uma ferramenta biotecnológica' },
    { id: 5, name: 'Vacina de Pasteur', type: 'history', icon: '💉', color: 'red', description: '1885 - Primeira vacina antirrábica' },
    { id: 6, name: 'Descoberta da Penicilina', type: 'special', icon: '💊', color: 'purple', effect: 'advance3', description: '1928 - Fleming descobre antibiótico. Avance 3!' },
    { id: 7, name: 'Puxe Carta Desafio', type: 'challenge', icon: '❗', color: 'orange', description: 'Enfrente um desafio da ciência real' },
    { id: 8, name: 'Entrada para', subname: 'Universidade', type: 'hub', icon: '🎓', color: 'navy', description: 'Portal para a Biotecnologia Moderna!' }
  ],
  health: [
    { id: 'h1', name: 'Laboratório de Insulina', type: 'lab', icon: '🧬', color: 'red', description: 'Bactérias produzindo insulina humana' },
    { id: 'h2', name: 'Puxe Carta Conceito', type: 'concept', icon: '❓', color: 'blue', description: 'Teste de conhecimento sobre saúde' },
    { id: 'h3', name: 'Cultura de Células-Tronco', type: 'lab', icon: '🧪', color: 'pink', description: 'Células coringas em cultivo' },
    { id: 'h4', name: 'Colete Recurso', type: 'resource', icon: '🎁', color: 'green', description: 'Equipamento do laboratório' },
    { id: 'h5', name: 'Missão: Terapia Celular / Insulina', type: 'mission', icon: '🎯', color: 'red', mission: 'health', description: 'Complete sua inovação médica!' }
  ],
  forensic: [
    { id: 'f1', name: 'Coleta de Amostras', type: 'lab', icon: '🔬', color: 'blue', description: 'Evidências da cena do crime' },
    { id: 'f2', name: 'Laboratório de PCR', type: 'special', icon: '📊', color: 'purple', effect: 'pcr_bonus', description: 'Amplificação de DNA! Jogue novamente' },
    { id: 'f3', name: 'Eletroforese', type: 'concept', icon: '⚡', color: 'cyan', description: 'Separação de fragmentos de DNA' },
    { id: 'f4', name: 'Colete Recurso', type: 'resource', icon: '🎁', color: 'green', description: 'Ferramenta forense' },
    { id: 'f5', name: 'Missão: Teste de Paternidade', type: 'mission', icon: '🎯', color: 'blue', mission: 'forensic', description: 'Resolva o caso!' }
  ],
  agriculture: [
    { id: 'a1', name: 'Banco de Genes', type: 'lab', icon: '🌱', color: 'green', description: 'Preservação da biodiversidade' },
    { id: 'a2', name: 'Cultura de Tecidos', type: 'lab', icon: '🧫', color: 'lightgreen', description: 'Multiplicação in vitro' },
    { id: 'a3', name: 'Transformação com Agrobacterium', type: 'special', icon: '🦠', color: 'darkgreen', effect: 'agro_check', description: 'Precisa de Plasmídeo para prosseguir' },
    { id: 'a4', name: 'Puxe Carta Desafio', type: 'challenge', icon: '❗', color: 'orange', description: 'Desafio agrícola ou ético' },
    { id: 'a5', name: 'Missão: OGM Resistente', type: 'mission', icon: '🎯', color: 'green', mission: 'agriculture', description: 'Crie sua planta transgênica!' }
  ],
  bioethics: [
    { id: 'b1', name: 'Debate sobre Clonagem', type: 'challenge', icon: '🐑', color: 'yellow', description: 'Dolly e os dilemas éticos' },
    { id: 'b2', name: 'Comitê de Biossegurança', type: 'special', icon: '⚖️', color: 'orange', effect: 'ethics_stop', description: 'PARE! Avaliação ética obrigatória' },
    { id: 'b3', name: 'Princípio da Precaução', type: 'concept', icon: '⚠️', color: 'red', description: 'Na dúvida, previna!' },
    { id: 'b4', name: 'Colete Recurso', type: 'resource', icon: '🎁', color: 'green', description: 'Material de pesquisa' },
    { id: 'b5', name: 'Missão: Relatório de Ética', type: 'mission', icon: '🎯', color: 'yellow', mission: 'bioethics', description: 'Demonstre consciência ética!' }
  ]
};

// ==================== REQUISITOS DAS MISSÕES ====================
const MISSION_REQUIREMENTS = {
  health: {
    name: 'Terapia Celular / Insulina',
    options: [
      {
        name: 'Terapia Celular',
        resources: ['celula-tronco'],
        description: 'Use células-tronco para regenerar tecidos danificados'
      },
      {
        name: 'Produção de Insulina',
        resources: ['plasmideo', 'enzima'],
        description: 'Bactérias geneticamente modificadas produzem insulina humana'
      }
    ],
    color: 'red',
    icon: '💉',
    educationalGoal: 'Aplicar biotecnologia para tratamento de doenças'
  },
  forensic: {
    name: 'Teste de Paternidade',
    options: [
      {
        name: 'Teste de Paternidade',
        resources: ['pcr', 'enzima'],
        description: 'Amplifica e compara DNA para determinar parentesco'
      }
    ],
    color: 'blue',
    icon: '🔍',
    educationalGoal: 'Usar DNA para identificação individual'
  },
  agriculture: {
    name: 'OGM Resistente',
    options: [
      {
        name: 'OGM Resistente',
        resources: ['plasmideo', 'agrobacterium'],
        description: 'Planta transgênica resistente a pragas ou herbicidas'
      }
    ],
    color: 'green',
    icon: '🌾',
    educationalGoal: 'Melhorar características agrícolas por engenharia genética'
  },
  bioethics: {
    name: 'Relatório de Ética',
    options: [
      {
        name: 'Relatório de Ética',
        resources: [],
        special: 'answer_ethics_question',
        description: 'Demonstre compreensão dos dilemas éticos da biotecnologia'
      }
    ],
    color: 'yellow',
    icon: '⚖️',
    educationalGoal: 'Debater questões éticas e de biossegurança'
  }
};

// ==================== GLOSSÁRIO DE TERMOS ====================
const GLOSSARY = {
  'DNA': {
    term: 'DNA (Ácido Desoxirribonucleico)',
    definition: 'Molécula que carrega as instruções genéticas dos seres vivos.',
    example: 'O DNA humano tem 3 bilhões de pares de bases.',
    icon: '🧬'
  },
  'Plasmídeo': {
    term: 'Plasmídeo',
    definition: 'Pequeno DNA circular encontrado em bactérias, usado como vetor na engenharia genética.',
    example: 'Inserimos o gene da insulina em um plasmídeo bacteriano.',
    icon: '🔵'
  },
  'PCR': {
    term: 'PCR (Reação em Cadeia da Polimerase)',
    definition: 'Técnica que amplifica (copia) DNA exponencialmente.',
    example: 'O PCR transforma 1 molécula de DNA em bilhões em poucas horas.',
    icon: '🔬'
  },
  'Enzima de Restrição': {
    term: 'Enzima de Restrição',
    definition: 'Proteína que corta DNA em sequências específicas, como uma tesoura molecular.',
    example: 'A enzima EcoRI corta DNA na sequência GAATTC.',
    icon: '✂️'
  },
  'OGM': {
    term: 'OGM (Organismo Geneticamente Modificado)',
    definition: 'Organismo cujo DNA foi alterado por técnicas de engenharia genética.',
    example: 'Milho Bt é um OGM com gene de bactéria que mata lagartas.',
    icon: '🌽'
  },
  'Célula-Tronco': {
    term: 'Célula-Tronco',
    definition: 'Célula não especializada que pode se diferenciar em diversos tipos celulares.',
    example: 'Células-tronco embrionárias podem virar qualquer célula do corpo.',
    icon: '🧪'
  },
  'Transgênico': {
    term: 'Transgênico',
    definition: 'Organismo que contém genes de outra espécie.',
    example: 'Bactérias transgênicas produzem insulina humana.',
    icon: '🦠'
  },
  'Eletroforese': {
    term: 'Eletroforese em Gel',
    definition: 'Técnica que separa fragmentos de DNA por tamanho.',
    example: 'Usada em testes de paternidade para comparar DNA.',
    icon: '⚡'
  },
  'Fermentação': {
    term: 'Fermentação',
    definition: 'Processo metabólico de microrganismos que transforma substâncias.',
    example: 'Leveduras fermentam açúcar em álcool e CO₂.',
    icon: '🍺'
  },
  'Gene': {
    term: 'Gene',
    definition: 'Segmento de DNA que contém instruções para produzir uma proteína.',
    example: 'O gene da insulina está no cromossomo 11 humano.',
    icon: '📖'
  },
  'Clonagem': {
    term: 'Clonagem',
    definition: 'Produção de cópias geneticamente idênticas de um organismo.',
    example: 'A ovelha Dolly foi o primeiro mamífero clonado de célula adulta.',
    icon: '🐑'
  },
  'Biossegurança': {
    term: 'Biossegurança',
    definition: 'Conjunto de medidas para prevenir riscos do uso de organismos geneticamente modificados.',
    example: 'Laboratórios de alta biossegurança estudam vírus perigosos.',
    icon: '🛡️'
  },
  'Fluxo Gênico': {
    term: 'Fluxo Gênico',
    definition: 'Transferência de genes entre populações, especialmente de OGMs para plantas selvagens.',
    example: 'Pólen de milho transgênico pode fertilizar milho nativo.',
    icon: '🌾'
  },
  'Princípio da Precaução': {
    term: 'Princípio da Precaução',
    definition: 'Diante de riscos incertos, adote medidas preventivas.',
    example: 'Testar OGMs extensivamente antes de liberar no ambiente.',
    icon: '⚠️'
  },
  'Vetor': {
    term: 'Vetor de Clonagem',
    definition: 'Molécula de DNA que transporta genes para dentro de células.',
    example: 'Plasmídeos e vírus são vetores comuns.',
    icon: '🚚'
  },
  'Agrobacterium': {
    term: 'Agrobacterium tumefaciens',
    definition: 'Bactéria que naturalmente transfere DNA para plantas, usada para criar OGMs vegetais.',
    example: 'Agrobacterium infecta plantas e insere seu DNA nelas.',
    icon: '🦠'
  }
};

// ==================== CONFIGURAÇÕES DO JOGO ====================
const GAME_CONFIG = {
  minPlayers: 2,
  maxPlayers: 5,
  initialResources: 1,
  resourceDeckSize: 60,
  conceptCardCount: 40,
  challengeCardCount: 30,
  zones: ['classic', 'health', 'forensic', 'agriculture', 'bioethics'],
  zoneNames: {
    classic: 'Biotecnologia Clássica',
    health: 'Zona de Saúde',
    forensic: 'Zona Forense',
    agriculture: 'Zona de Agricultura',
    bioethics: 'Zona de Bioética'
  },
  zoneColors: {
    classic: '#FFD700',
    health: '#FF6B6B',
    forensic: '#4ECDC4',
    agriculture: '#95E1D3',
    bioethics: '#FFE66D'
  },
  difficultyLevels: {
    facil: { name: 'Fácil', color: 'green', resourceReward: 1 },
    medio: { name: 'Médio', color: 'orange', resourceReward: 2 },
    dificil: { name: 'Difícil', color: 'red', resourceReward: 3 }
  },
  achievements: [
    { id: 'first_mission', name: 'Primeira Descoberta', description: 'Complete sua primeira missão', icon: '🏆' },
    { id: 'all_missions', name: 'Nobel de Biotecnologia', description: 'Complete todas as 4 missões', icon: '🥇' },
    { id: 'resource_collector', name: 'Colecionador', description: 'Acumule 10+ recursos', icon: '💎' },
    { id: 'question_master', name: 'Mestre do Conhecimento', description: 'Acerte 10 perguntas', icon: '🧠' },
    { id: 'ethics_champion', name: 'Campeão da Ética', description: 'Complete a missão de Bioética', icon: '⚖️' },
    { id: 'speed_runner', name: 'Cientista Relâmpago', description: 'Vença em menos de 30 turnos', icon: '⚡' },
    { id: 'comeback_king', name: 'A Reviravolta', description: 'Vença depois de estar em último', icon: '👑' },
    { id: 'perfect_game', name: 'Perfeição Científica', description: 'Vença sem errar nenhuma pergunta', icon: '💯' }
  ],
  soundEffects: {
    diceRoll: '🎲',
    cardDraw: '🃏',
    resourceGain: '✨',
    missionComplete: '🎉',
    challengeFail: '💥',
    victory: '🏆'
  }
};

// ==================== DICAS E MENSAGENS DO TUTORIAL ====================
const TUTORIAL_TIPS = [
  {
    trigger: 'game_start',
    title: 'Bem-vindo à Trilha do DNA!',
    message: 'Você é um cientista em busca do Prêmio Nobel! Complete 4 missões de biotecnologia e volte ao início para vencer.',
    icon: '🧬'
  },
  {
    trigger: 'first_dice_roll',
    title: 'Como se Mover',
    message: 'Role os dados para mover seu peão. Diferentes casas têm diferentes efeitos!',
    icon: '🎲'
  },
  {
    trigger: 'first_concept_card',
    title: 'Cartas de Conceito',
    message: 'Acerte perguntas para ganhar recursos! Recursos são essenciais para completar missões.',
    icon: '❓'
  },
  {
    trigger: 'first_challenge_card',
    title: 'Cartas de Desafio',
    message: 'Desafios simulam a ciência real - podem ser inovações, riscos ou dilemas éticos!',
    icon: '❗'
  },
  {
    trigger: 'reached_hub',
    title: 'Hub Universitário',
    message: 'Agora você pode escolher qual zona de pesquisa explorar: Saúde, Forense, Agricultura ou Bioética!',
    icon: '🎓'
  },
  {
    trigger: 'first_resource',
    title: 'Recursos Biotecnológicos',
    message: 'Você coletou uma ferramenta! Combine recursos para completar missões científicas.',
    icon: '🧬'
  },
  {
    trigger: 'first_mission_attempt',
    title: 'Completando Missões',
    message: 'Para completar uma missão, você precisa estar na casa de missão E ter os recursos certos!',
    icon: '🎯'
  },
  {
    trigger: 'glossary_available',
    title: 'Glossário Científico',
    message: 'Clique em "📚 Glossário" para aprender mais sobre os termos da biotecnologia!',
    icon: '📖'
  }
];

// ==================== MENSAGENS EDUCACIONAIS ====================
const EDUCATIONAL_MESSAGES = {
  insulin_production: 'A insulina recombinante revolucionou o tratamento do diabetes. Antes, usávamos pâncreas de porcos!',
  dna_forensics: 'O DNA é único para cada pessoa (exceto gêmeos idênticos), tornando-o perfeito para identificação.',
  ogm_controversy: 'OGMs são controversos: podem aumentar produtividade, mas precisam de avaliação de riscos ambientais.',
  stem_cells: 'Células-tronco têm potencial revolucionário, mas levantam questões éticas sobre sua origem.',
  pcr_invention: 'Kary Mullis teve a ideia do PCR dirigindo na estrada! Ganhou o Nobel 10 anos depois.',
  dolly_clone: 'Dolly provou que células adultas podem ser reprogramadas - abrindo caminho para terapias!',
  crispr_revolution: 'CRISPR permite editar genes com precisão cirúrgica - uma revolução da biotecnologia!',
  antibiotic_resistance: 'Uso excessivo de antibióticos cria superbactérias resistentes - um grande problema atual!'
};
