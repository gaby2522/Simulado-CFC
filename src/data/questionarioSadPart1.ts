import { Question } from '../types/quiz';

export const questionsSadPart1: Question[] = [
  {
    id: 'sad-1',
    number: 1,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Hardware',
    text: 'É o nome dado a parte física, é o equipamento em si, é tudo aquilo que podemos tocar em um computador... é tudo o que há de concreto num computador:',
    options: {
      a: 'Software.',
      b: 'Mindset.',
      c: 'CPU.',
      d: 'Hardware.'
    },
    correctAnswer: 'd',
    explanation: 'Hardware é o nome dado à parte física, ao equipamento em si, tudo o que podemos tocar no computador (concreto).',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Introdução à Informática (pág. 23)'
  },
  {
    id: 'sad-2',
    number: 2,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Hardware',
    text: 'O Monitor é a televisão do computador. É através dele que visualizamos na tela os trabalhos que realizamos. Os monitores podem ser classificados basicamente de duas formas, são estas:',
    options: {
      a: 'Quanto à apresentação e resolução.',
      b: 'Quanto à apresentação e o desempenho.',
      c: 'Quanto à nitidez de imagem e o processamento.',
      d: 'Quanto a sua qualidade gráfica e sua taxa de quadros.'
    },
    correctAnswer: 'a',
    explanation: 'Os monitores podem ser classificados basicamente de duas formas: quanto à apresentação (quantidade de cores) e quanto à resolução (nitidez de imagem).',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Introdução à Informática (pág. 23)'
  },
  {
    id: 'sad-3',
    number: 3,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Hardware',
    text: 'O teclado é um dispositivo que possui uma série de botões ou teclas que é utilizado para inserir dados no computador. A comunicação é efetuada por meio das informações que digitamos no teclado. O teclado é dividido em três partes são estas:',
    options: {
      a: 'Números, letras e comandos.',
      b: 'Numeral, alfabeto, funcional.',
      c: 'Numérico, alfanumérico, funcional.',
      d: 'Algarismos, alfanumérico, funcional.'
    },
    correctAnswer: 'c',
    explanation: 'O teclado é dividido em três partes: numérico, alfanumérico e funcional (teclas F1 a F12).',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Introdução à Informática (pág. 23-24)'
  },
  {
    id: 'sad-4',
    number: 4,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Hardware',
    text: 'É um componente de hardware que é o principal responsável pela computação em um dispositivo. A (....) ou (....) é o responsável por todos os processamentos de dados e informações do computador.',
    options: {
      a: 'Placa mãe, CPU.',
      b: 'Memória rom, processador.',
      c: 'Placa mãe, Memória ram.',
      d: 'CPU, processador.'
    },
    correctAnswer: 'd',
    explanation: 'A CPU (Unidade Central de Processamento) ou processador é o responsável por todos os processamentos de dados e informações do computador.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Introdução à Informática (pág. 24)'
  },
  {
    id: 'sad-5',
    number: 5,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Memórias',
    text: 'As informações processadas no computador são armazenadas em dispositivos chamados de memória. Internamente, existem dois tipos de memória:',
    options: {
      a: 'Memórias rom, e ram.',
      b: 'Memórias hd, e ssd.',
      c: 'Memórias room, e ram.',
      d: 'Memórias de acesso, e leitura.'
    },
    correctAnswer: 'a',
    explanation: 'Internamente existem dois tipos de memória: ROM (Read Only Memory) e RAM (Random Access Memory).',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Tipos de memórias (pág. 25)'
  },
  {
    id: 'sad-6',
    number: 6,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Hardware',
    text: 'Nos microcomputadores, a CPU é representada pela (...), que é uma grande placa com componentes eletrônicos integrados. Nela, são conectados a (....), o processador e compartimentos para conectar todos os dispositivos que compõem o computador (discos, CDs e DVDs, bem como os dispositivos de entrada e de saída de dados).',
    options: {
      a: 'Placa mãe, memória rom.',
      b: 'Placa mãe, memória ram.',
      c: 'Central de processamento, memória rom.',
      d: 'Memória ram, rom.'
    },
    correctAnswer: 'b',
    explanation: 'Nos microcomputadores a CPU é representada pela placa-mãe, onde são conectados a memória RAM, o processador e conexões para periféricos.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 CPU (pág. 24)'
  },
  {
    id: 'sad-7',
    number: 7,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Memórias',
    text: 'Usada somente para leitura é uma memória que já vem gravada do fabricante e, é usada somente quando ligamos o computador, para carregamento de funções básicas para o seu funcionamento. O conteúdo da memória.... não pode ser modificado. O usuário não tem um contato direto com esse tipo de memória quando está trabalhando no computador.',
    options: {
      a: 'Memória volátil.',
      b: 'Memória ram.',
      c: 'Memória rom.',
      d: 'Memória de iniciação.'
    },
    correctAnswer: 'c',
    explanation: 'A memória ROM (Read Only Memory) vem gravada do fabricante e não pode ser modificada.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Memória ROM (pág. 25)'
  },
  {
    id: 'sad-8',
    number: 8,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Unidades de Medida',
    text: 'O (...) é a menor unidade de informação em informática; O (...) pode ser representado por dois valores lógicos: 0 (zero) ou 1 (um). O (...) é a unidade de informação mais usual em informática. Um (...) é equivalente a 8 bits.',
    options: {
      a: 'bit, byte/ byte, bit.',
      b: 'bit, bit/ byte, byte.',
      c: 'byte, byte/ bit, bit.',
      d: 'byte, bit/ bit, byte.'
    },
    correctAnswer: 'b',
    explanation: 'O bit é a menor unidade, representado por 0 ou 1. O byte é a unidade mais usual, equivalente a 8 bits.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Unidades de medida (pág. 25)'
  },
  {
    id: 'sad-9',
    number: 9,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Armazenamento',
    text: 'Trata-se de um disco com superfície magnetizável. Ele é blindado e fica dentro do gabinete do computador. Ainda é o equipamento mais duradouro e confiável do mundo da computação, em função de suportar armazenamento de dados de alta atividade (ações frequentes de remover e incluir dados).',
    options: {
      a: 'Pen drive.',
      b: 'Usb.',
      c: 'Ssd.',
      d: 'Hd.'
    },
    correctAnswer: 'd',
    explanation: 'O HD (disco rígido ou Hard Disk) possui superfície magnetizável blindada dentro do gabinete.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 HD (pág. 26)'
  },
  {
    id: 'sad-10',
    number: 10,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Armazenamento',
    text: 'Os dados do Hd são armazenados em sua superfície na forma de círculos concêntricos, aos quais chamamos de (...), estas, por sua vez, são divididas em segmentos chamados (...).',
    options: {
      a: 'Trilhas, setores.',
      b: 'Trilhos, seções.',
      c: 'Setores, Trilhas.',
      d: 'Caminhos, Gravadores.'
    },
    correctAnswer: 'a',
    explanation: 'Os dados no HD são armazenados em círculos concêntricos chamados trilhas, divididos em segmentos chamados setores.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 HD (pág. 26)'
  },
  {
    id: 'sad-11',
    number: 11,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Armazenamento Óptico',
    text: 'Antigamente chamados de discos óticos, são dispositivos usados para armazenamento de dados de pouca ou nenhuma atividade (frequência de regravações de dados). O princípio de leitura e gravação entre eles é o mesmo: através de feixes de luz. A diferença entre eles é basicamente no tamanho dos pontos de gravação de dados. Quanto menor os pontos, maior é a quantidade de dados a ser gravada.',
    options: {
      a: 'Memory card, fita vhs, cd’s.',
      b: 'Disket, pen drive, cartão de memória.',
      c: 'Cd’s, dvd’s, blu-ray.',
      d: 'Dvd’s, Cd’s, gravador.'
    },
    correctAnswer: 'c',
    explanation: 'Discos ópticos com gravação por feixe de luz: CDs, DVDs e Blu-ray.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Cds/DVDs/Blu-ray (pág. 27)'
  },
  {
    id: 'sad-12',
    number: 12,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Memórias',
    text: 'Armazena as informações processadas pelo programa que o usuário está utilizando. Alguns programas necessitam de uma quantidade específica de memória para trabalhar. Quanto mais (....................) um computador tiver, menos problema terá para trabalhar com os softwares.',
    options: {
      a: 'Memória rom.',
      b: 'Memória hd.',
      c: 'Memória ram.',
      d: 'Memória de acesso.'
    },
    correctAnswer: 'c',
    explanation: 'A memória RAM armazena as informações em uso e quanto maior sua capacidade, melhor o desempenho dos softwares.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Memória RAM (pág. 25)'
  },
  {
    id: 'sad-13',
    number: 13,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Memórias',
    text: 'A memória RAM é conhecida também por (............), pois tem a função de armazenar temporariamente todas as informações que serão usadas pelo processador (basicamente instruções dos programas e dados que essas instruções precisam para resolver as tarefas). Só armazena dados enquanto o computador estiver ligado (dispositivo .......).',
    options: {
      a: 'Memória principal, volteável.',
      b: 'Memória principal, volátil.',
      c: 'Memória secundária, volátil.',
      d: 'Memória permanente, votável.'
    },
    correctAnswer: 'b',
    explanation: 'A memória RAM é a memória principal do computador e é um dispositivo volátil (apaga quando desliga).',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Memória RAM (pág. 25)'
  },
  {
    id: 'sad-14',
    number: 14,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Armazenamento Portátil',
    text: 'Este equipamento é, atualmente, a mídia portátil mais utilizada pelos usuários de computadores. O que contribuiu para sua aceitação é o fato dele não precisar recarregar energia para manter os dados armazenados. Isso o torna seguro e estável, ao contrário dos antigos disquetes.',
    options: {
      a: 'Hd externo.',
      b: 'Ssd.',
      c: 'Cartão de memória.',
      d: 'Pen drive.'
    },
    correctAnswer: 'd',
    explanation: 'Pen drive é a mídia portátil mais utilizada descrita na apostila que não requer recarga de energia para manter os dados.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Pen drive (pág. 27)'
  },
  {
    id: 'sad-15',
    number: 15,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Periféricos',
    text: 'As impressoras são classificadas em quatro categorias, são elas:',
    options: {
      a: 'Impacto ou matricial, jato de tinta, laser, 3D.',
      b: 'Compacto ou matricial, jato de tinta, laser, 3D.',
      c: 'Térmica, ploter, laser, jato de tinta.',
      d: 'Fax, 3D, jato de tinta, laser.'
    },
    correctAnswer: 'a',
    explanation: 'As quatro categorias listadas na apostila são: Impacto ou matricial; Jato de tinta; Laser; e 3D.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Impressora (pág. 27)'
  },
  {
    id: 'sad-16',
    number: 16,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Software',
    text: 'Parte lógica usada no computador, São os chamados programas de computador. Você não consegue tocar neles, mas eles existem! São conjuntos de instruções logicamente sequenciadas que executam as tarefas que você solicita no computador.',
    options: {
      a: 'Software.',
      b: 'Hardware.',
      c: 'Sistema Operacional.',
      d: 'Processador.'
    },
    correctAnswer: 'a',
    explanation: 'Software é o termo que representa a parte lógica, os programas de computador formados por conjuntos de instruções.',
    sourceDoc: 'Apostila SAD - Tópico 3.2 Software (pág. 28)'
  },
  {
    id: 'sad-17',
    number: 17,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Sistema Operacional',
    text: 'É o software operacional que gerencia o hardware de um dispositivo e permite que os programas e aplicativos sejam executados. É uma espécie de administrador do ambiente computacional: gerencia a memória, as operações de entrada e saída e a execução dos demais programas.',
    options: {
      a: 'Sistema organizacional.',
      b: 'Sistema desenvolvedor.',
      c: 'Sistema operacional.',
      d: 'Sistemas administrativo.'
    },
    correctAnswer: 'c',
    explanation: 'Sistema operacional é o software fundamental que gerencia a memória, E/S e a execução de todos os programas.',
    sourceDoc: 'Apostila SAD - Tópico 3.2 Sistemas operacionais (pág. 28)'
  },
  {
    id: 'sad-18',
    number: 18,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Software',
    text: 'São programas utilizados para construir outros programas. Funcionam como uma espécie de validador do que se escreve no corpo dos programas, em uma determinada linguagem de programação, verificando se a sintaxe está correta. Um programa depois de construído, precisa ser compilado, ou seja, passar pela validação do compilador.',
    options: {
      a: 'Compactadores e interpretadores.',
      b: 'Compensadores e desenvolvedores.',
      c: 'Compactadores e leitores.',
      d: 'Compiladores e interpretadores.'
    },
    correctAnswer: 'd',
    explanation: 'Compiladores e interpretadores são softwares usados para construir e validar outros programas.',
    sourceDoc: 'Apostila SAD - Tópico 3.2 Compiladores e interpretadores (pág. 28)'
  },
  {
    id: 'sad-19',
    number: 19,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Aplicativos',
    text: 'Aplicativos são softwares que têm a finalidade de desempenhar tarefas específicas, ligadas ao trabalho de uma empresa. Os softwares aplicativos são divididos em:',
    options: {
      a: 'Aplicativos de uso inespecífico e genérico.',
      b: 'Aplicativos de uso específico e genérico.',
      c: 'Aplicativos de uso direto e indireto.',
      d: 'Aplicativos de uso moderado e variável.'
    },
    correctAnswer: 'b',
    explanation: 'Os softwares aplicativos são divididos em: Aplicativos de uso específico e Aplicativos de uso genérico.',
    sourceDoc: 'Apostila SAD - Tópico 3.2 Aplicativos (pág. 29)'
  },
  {
    id: 'sad-20',
    number: 20,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Banco de Dados',
    text: 'São programas que permitem guardar informações de uma forma ordenada, permitindo um acesso rápido. Exemplo: Dbase, Access, BrOffice Base...etc',
    options: {
      a: 'Gerenciadores de edição.',
      b: 'Gerenciadores de armazenamento.',
      c: 'Gerenciadores de banco de dados.',
      d: 'Gerenciadores de informação.'
    },
    correctAnswer: 'c',
    explanation: 'Gerenciadores de banco de dados guardam informações ordenadas permitindo acesso rápido (ex: Access, Base).',
    sourceDoc: 'Apostila SAD - Tópico 3.2 Gerenciadores de banco de dados (pág. 30)'
  },
  {
    id: 'sad-21',
    number: 21,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Planilhas',
    text: 'São programas que permitem efetuar cálculos e construir gráficos comerciais. Exemplos: Lotus 123, Excel, BrOffice Calc...etc.',
    options: {
      a: 'Planilhas eletrônicas.',
      b: 'Planilhas de controle.',
      c: 'Planilhas de organização.',
      d: 'Planilhas de cálculo.'
    },
    correctAnswer: 'a',
    explanation: 'Planilhas eletrônicas permitem efetuar cálculos e construir gráficos comerciais (Excel, Calc, Lotus 123).',
    sourceDoc: 'Apostila SAD - Tópico 3.2 Planilhas eletrônicas (pág. 30)'
  },
  {
    id: 'sad-22',
    number: 22,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Aplicativos Específicos',
    text: 'São aplicativos de uso (.........) exemplos: sistemas de controle de estoque, sistemas de folha de pagamento, de vendas de uma empresa pela internet, sistemas de automação comercial.',
    options: {
      a: 'Específico.',
      b: 'Genérico.',
      c: 'Moderado.',
      d: 'Cotidiano.'
    },
    correctAnswer: 'a',
    explanation: 'Aplicativos de uso específico atendem a tarefas de controle de estoque, folha de pagamento, automação comercial, etc.',
    sourceDoc: 'Apostila SAD - Tópico 3.2 Aplicativos de uso específico (pág. 29)'
  },
  {
    id: 'sad-23',
    number: 23,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Editores de Texto',
    text: 'Trata-se de um programa básico de edição de (......), que não possui muitos recursos de formatação. Sua finalidade é permitir que sejam criados e acessados documentos de (........), como se fossem rascunhos. Os (.......) criados podem ser salvos (gravados) e recuperados (abertos em outra ocasião), como qualquer outro programa que cria e mantém arquivos. Exemplos: BrOffice Writer, Word...etc.',
    options: {
      a: 'Programas, textos, documentos.',
      b: 'Planilhas, edição, arquivos.',
      c: 'Textos, PDF, arquivos.',
      d: 'Textos, textos simples, textos.'
    },
    correctAnswer: 'd',
    explanation: 'A apostila define editores de texto como programa de edição de textos para criação de documentos de textos simples.',
    sourceDoc: 'Apostila SAD - Tópico 3.2 Editores de texto (pág. 30)'
  },
  {
    id: 'sad-24',
    number: 24,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Aplicativos Genéricos',
    text: 'Exemplos de uso em escritório: editores de texto (Word, Writer), controladores de planilhas eletrônicas (Excel, Calc), editores de apresentações (Power Point e Impress), diagramação eletrônica (Publisher, Adobe InDesign), leitores de arquivos-imagem (Adobe Reader), gerenciadores de bancos de dados (Access). Exemplos de uso no próprio computador: compactadores de arquivo (WinZip, Winrar), desfragmentador de disco, programas anti-vírus. Os exemplos representam aplicativos de uso:',
    options: {
      a: 'Rotineiro.',
      b: 'Geral.',
      c: 'Genérico.',
      d: 'Específico.'
    },
    correctAnswer: 'c',
    explanation: 'Os exemplos citados na apostila configuram aplicativos de uso genérico.',
    sourceDoc: 'Apostila SAD - Tópico 3.2 Aplicativos de uso genérico (pág. 29)'
  },
  {
    id: 'sad-25',
    number: 25,
    subjectId: 'sad_especifico_256',
    topic: 'Atos e Documentos Oficiais - NSCA 10-2',
    text: 'Esta apostila apresenta a (......), que é Norma de Sistema que tem por finalidade padronizar a elaboração dos principais documentos oficiais e arquivísticos, utilizados no cotidiano de todas as Organizações do Comando da Aeronáutica, visando à sua indispensável uniformização e eficiência.',
    options: {
      a: 'NASCA 10-2.',
      b: 'NSCA 10-9.',
      c: 'NSCA 10-2.',
      d: 'NSCA 10-5.'
    },
    correctAnswer: 'c',
    explanation: 'A NSCA 10-2 padroniza a confecção de correspondência e atos oficiais no Comando da Aeronáutica.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Correspondência e Atos Oficiais (pág. 31)'
  },
  {
    id: 'sad-26',
    number: 26,
    subjectId: 'sad_especifico_256',
    topic: 'Atos Administrativos - Ato Normativo',
    text: 'É uma espécie de ato administrativo que estabelece procedimentos a serem observados pela Administração.',
    options: {
      a: 'Ato informativo.',
      b: 'Ato atualizado.',
      c: 'Ato padronizado.',
      d: 'Ato normativo.'
    },
    correctAnswer: 'd',
    explanation: 'Ato Normativo: espécie de ato administrativo que estabelece procedimentos a serem observados pela Administração.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Conceitos (pág. 31)'
  },
  {
    id: 'sad-27',
    number: 27,
    subjectId: 'sad_especifico_256',
    topic: 'Correspondência - Particular',
    text: 'É a espécie de correspondência informal utilizada por pessoas físicas para comunicação entre si ou direcionada a órgãos públicos.',
    options: {
      a: 'Correspondência habitual.',
      b: 'Correspondência particular.',
      c: 'Correspondência oficial.',
      d: 'Correspondência de rotina.'
    },
    correctAnswer: 'b',
    explanation: 'Correspondência Particular é a comunicação informal utilizada por pessoas físicas entre si ou para órgãos públicos.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Conceitos (pág. 31)'
  },
  {
    id: 'sad-28',
    number: 28,
    subjectId: 'sad_especifico_256',
    topic: 'Atos Oficiais - Despacho',
    text: 'É a decisão proferida pela autoridade administrativa no caso que lhe é submetido à apreciação. O (......) pode ser favorável ou desfavorável à pretensão solicitada.',
    options: {
      a: 'Despacho.',
      b: 'Processo.',
      c: 'Parecer.',
      d: 'Objeto.'
    },
    correctAnswer: 'a',
    explanation: 'Despacho é a decisão proferida pela autoridade no caso sob sua apreciação (favorável ou desfavorável).',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Despacho (pág. 32)'
  },
  {
    id: 'sad-29',
    number: 29,
    subjectId: 'sad_especifico_256',
    topic: 'Informação Classificada - Sigilo',
    text: 'Atribuição, pela autoridade competente, de grau de sigilo a dado, informação, documento, material, área ou instalação que requeiram medidas especiais de salvaguarda.',
    options: {
      a: 'Classificação quanto ao grau de proteção.',
      b: 'Classificação quanto ao grau de seriedade.',
      c: 'Classificação quanto ao grau de segredo.',
      d: 'Classificação quanto ao grau de sigilo.'
    },
    correctAnswer: 'd',
    explanation: 'Classificação quanto ao Grau de Sigilo é a atribuição pela autoridade de grau que demande salvaguarda.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Conceitos (pág. 32)'
  },
  {
    id: 'sad-30',
    number: 30,
    subjectId: 'sad_especifico_256',
    topic: 'Atos Administrativos - Ato Ordinatório',
    text: 'É aquele que determina uma ação da Administração Pública. Visa disciplinar o funcionamento da administração e a conduta funcional de seus agentes. Tais atos podem ser expedidos por qualquer chefe de serviço aos seus subordinados. Não criam, normalmente, direitos e obrigações para os administrados, mas geram deveres e prerrogativas para os agentes administrados a que se dirigem.',
    options: {
      a: 'Ato decisivo.',
      b: 'Ato descritivo.',
      c: 'Ato ordinatório.',
      d: 'Ato imparcial.'
    },
    correctAnswer: 'c',
    explanation: 'Ato Ordinatório: determina ação, disciplina conduta de agentes e funcionamento dos serviços.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Conceitos (pág. 31)'
  },
  {
    id: 'sad-31',
    number: 31,
    subjectId: 'sad_especifico_256',
    topic: 'Processos - Distribuição',
    text: 'É a remessa do processo às Organizações Militares (OM) ou aos órgãos que decidirão sobre a matéria nele tratada.',
    options: {
      a: 'Distribuição.',
      b: 'Separação.',
      c: 'Prosseguimento.',
      d: 'Ajuntamento.'
    },
    correctAnswer: 'a',
    explanation: 'Distribuição: remessa do processo às OM ou órgãos competentes para deliberar.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Conceitos (pág. 32)'
  },
  {
    id: 'sad-32',
    number: 32,
    subjectId: 'sad_especifico_256',
    topic: 'Arquivologia - Documento',
    text: 'É a informação registrada em um suporte material suscetível de consulta, estudo, prova e pesquisa, pois comprova fatos, fenômenos e pensamentos do homem numa determinada época e lugar.',
    options: {
      a: 'Registro.',
      b: 'Processo.',
      c: 'Arquivo.',
      d: 'Documento.'
    },
    correctAnswer: 'd',
    explanation: 'Documento é a informação registrada em suporte material suscetível de consulta, prova e pesquisa.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Documento (pág. 32)'
  },
  {
    id: 'sad-33',
    number: 33,
    subjectId: 'sad_especifico_256',
    topic: 'Protocolo - NUP',
    text: 'É o número atribuído aos documentos, avulsos ou processos, na Unidade Protocolizadora. Os procedimentos relativos à sua utilização devem ser observados em norma específica relativa a atividades de protocolo no COMAER. é o padrão oficial de numeração utilizada para controle dos documentos, produzidos ou recebidos pelos órgãos e entidades da Administração Pública Federal.',
    options: {
      a: 'NUB.',
      b: 'NUP.',
      c: 'MUP.',
      d: 'SIGAD.'
    },
    correctAnswer: 'b',
    explanation: 'NUP significa Número Único de Protocolo, padrão oficial de numeração federal.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Número Único De Protocolo (pág. 32)'
  },
  {
    id: 'sad-34',
    number: 34,
    subjectId: 'sad_especifico_256',
    topic: 'Atos Oficiais - Conceito',
    text: 'É a decisão emanada de autoridade administrativa competente mediante documento.',
    options: {
      a: 'Ato autoritário.',
      b: 'Ato ordinatório.',
      c: 'Ato oficial.',
      d: 'Ato oficialato.'
    },
    correctAnswer: 'c',
    explanation: 'Ato Oficial: decisão emanada de autoridade administrativa competente mediante documento.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Ato Oficial (pág. 31)'
  },
  {
    id: 'sad-35',
    number: 35,
    subjectId: 'sad_especifico_256',
    topic: 'Correspondência - Conceito',
    text: 'É toda espécie de comunicação escrita que circula entre os órgãos da Administração e/ou pessoas físicas.',
    options: {
      a: 'Correspondência.',
      b: 'SIGADAER.',
      c: 'E-mail.',
      d: 'Informação.'
    },
    correctAnswer: 'a',
    explanation: 'Correspondência é toda espécie de comunicação escrita que circula entre órgãos e/ou pessoas.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Correspondência (pág. 31)'
  },
  {
    id: 'sad-36',
    number: 36,
    subjectId: 'sad_especifico_256',
    topic: 'Arquivologia - Documento Arquivístico',
    text: 'São todos aqueles produzidos e/ou recebidos por pessoa física ou jurídica, pública ou privada, no exercício de suas atividades, constituindo elementos de prova ou informação. Formam um conjunto orgânico, refletindo as ações a que estão vinculados, expressando os atos de seus produtores no exercício de suas funções.',
    options: {
      a: 'Documento arquivístico.',
      b: 'Documento rotineiro.',
      c: 'Documento de acesso.',
      d: 'Documento comprobatório.'
    },
    correctAnswer: 'a',
    explanation: 'Documento Arquivístico: produzidos/recebidos no exercício de atividades, formam conjunto orgânico e constituem prova.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Documento Arquivístico (pág. 32)'
  },
  {
    id: 'sad-37',
    number: 37,
    subjectId: 'sad_especifico_256',
    topic: 'Protocolo - NUP Sigla',
    text: 'O NUP tem uma função de grande relevância, pois viabiliza a padronização na gestão documental, desde a produção ao arquivamento dos documentos, assim como facilita as comunicações entre as unidades administrativas dos órgãos e entidades ou destas com a sociedade, promovendo a simplificação do acesso às informações sobre os documentos públicos federais. NUP é a abreviação para:',
    options: {
      a: 'Numeral único de protocolo.',
      b: 'Número único de protocolo.',
      c: 'Número unilateral de protocolo.',
      d: 'Numeração única de protocolo.'
    },
    correctAnswer: 'b',
    explanation: 'NUP = Número Único de Protocolo.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 NUP (pág. 32)'
  },
  {
    id: 'sad-38',
    number: 38,
    subjectId: 'sad_especifico_256',
    topic: 'Correspondência Oficial',
    text: 'É a espécie de comunicação formal mantida entre os órgãos públicos ou destes para empresas privadas ou pessoas físicas.',
    options: {
      a: 'Correspondência autoritária.',
      b: 'Correspondência formal.',
      c: 'Correspondência direta.',
      d: 'Correspondência oficial.'
    },
    correctAnswer: 'd',
    explanation: 'Correspondência Oficial é a comunicação formal interórgãos ou para entidades privadas/cidadãos.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Correspondência Oficial (pág. 31)'
  },
  {
    id: 'sad-39',
    number: 39,
    subjectId: 'sad_especifico_256',
    topic: 'Documento Oficial',
    text: 'É o registro padronizado do Ato Oficial que emana de autoridade administrativa no exercício legal de suas funções, abrangendo documentos administrativos e normativos.',
    options: {
      a: 'Arquivo oficial.',
      b: 'Documento ordinatório.',
      c: 'Documento oficial.',
      d: 'Processo oficial.'
    },
    correctAnswer: 'c',
    explanation: 'Documento Oficial: registro padronizado do ato oficial no exercício legal de suas funções.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Documento Oficial (pág. 32)'
  },
  {
    id: 'sad-40',
    number: 40,
    subjectId: 'sad_especifico_256',
    topic: 'Processos - Procedência',
    text: 'A Instituição, OM ou pessoa que originou o processo/documento.',
    options: {
      a: 'Primazia.',
      b: 'Primícia.',
      c: 'Proveniência.',
      d: 'Procedência.'
    },
    correctAnswer: 'd',
    explanation: 'Procedência: a instituição, OM ou pessoa que originou o processo ou documento.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Procedência (pág. 33)'
  },
  {
    id: 'sad-41',
    number: 41,
    subjectId: 'sad_especifico_256',
    topic: 'Processos - Definição',
    text: 'É o conjunto de documentos oficialmente reunidos no decurso de uma ação administrativa ou judicial que constitui uma unidade de arquivamento. Documentos que exigem um estudo mais detalhado, bem como procedimentos expressos por despachos, pareceres, anexos ou, ainda, instruções para pagamento de despesas; assim, o documento é protocolado e autuado pelos órgãos autorizados a executar tais procedimentos.',
    options: {
      a: 'Procedimento.',
      b: 'Processo.',
      c: 'Proveniência.',
      d: 'Critérios.'
    },
    correctAnswer: 'b',
    explanation: 'Processo é o conjunto de documentos oficialmente reunidos que constitui uma unidade de arquivamento.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Processo (pág. 33)'
  },
  {
    id: 'sad-42',
    number: 42,
    subjectId: 'sad_especifico_256',
    topic: 'Protocolo - Registro',
    text: 'É a reprodução dos dados do documento, feita em controle próprio, destinado a controlar a sua movimentação e fornecer dados de suas características fundamentais aos interessados.',
    options: {
      a: 'Registro.',
      b: 'Descrição.',
      c: 'Relatórios.',
      d: 'Representações.'
    },
    correctAnswer: 'a',
    explanation: 'Registro: reprodução dos dados em controle próprio para acompanhamento da movimentação.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Registro (pág. 33)'
  },
  {
    id: 'sad-43',
    number: 43,
    subjectId: 'sad_especifico_256',
    topic: 'Protocolo - Tramitação',
    text: 'É o curso do documento, avulso ou processo, desde a sua produção ou recepção, até o cumprimento de sua função administrativa.',
    options: {
      a: 'Transcrição.',
      b: 'Direcionamento.',
      c: 'Tramitação.',
      d: 'Transportação.'
    },
    correctAnswer: 'c',
    explanation: 'Tramitação é o curso do documento desde a sua produção/recepção até o cumprimento funcional.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Tramitação (pág. 33)'
  },
  {
    id: 'sad-44',
    number: 44,
    subjectId: 'sad_especifico_256',
    topic: 'Protocolo - Unidade Protocolizadora',
    text: 'É a unidade administrativa que tenha, dentre suas competências, independentemente de sua denominação e posição hierárquica, a responsabilidade do recebimento, classificação, registro, distribuição, controle da tramitação e expedição de documentos, avulsos ou processos, bem como seja responsável pela autuação de documentos avulsos para formação de processos e pela atribuição de Número Único de Protocolo (NUP) aos documentos, avulsos ou processos.',
    options: {
      a: 'CENDOC.',
      b: 'Unidade numeradora de protocolo.',
      c: 'Unidade única de protocolo.',
      d: 'Unidade Protocolizadora.'
    },
    correctAnswer: 'd',
    explanation: 'Unidade Protocolizadora (UP) é a unidade com competência de protocolo, autuação e atribuição de NUP.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Unidade Protocolizadora (pág. 33)'
  },
  {
    id: 'sad-45',
    number: 45,
    subjectId: 'sad_especifico_256',
    topic: 'COMAER - CENDOC',
    text: 'No âmbito do COMAER, caberá ao (...............) o fornecimento e o controle de número de codificação de Unidade Protocolizadora às OM solicitantes, mediante a análise técnica do pleito, bem como o cancelamento da reserva desse número de codificação.',
    options: {
      a: 'Grupamento de Apoio (GAP).',
      b: 'Terceiro Comando Aéreo Regional (III Comar).',
      c: 'Centro de Documentação da Aeronáutica (CENDOC).',
      d: 'Comando de Preparo (COMPREP).'
    },
    correctAnswer: 'c',
    explanation: 'O CENDOC fornece e controla o número de codificação de Unidade Protocolizadora no COMAER.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Unidade Protocolizadora (pág. 33)'
  },
  {
    id: 'sad-46',
    number: 46,
    subjectId: 'sad_especifico_256',
    topic: 'Classificação de Documentos - Âmbito',
    text: 'Quanto ao âmbito dos documentos: (......) é o documento que tramita no âmbito do COMAER (entre OM, de pessoa física para OM e vice-versa); e (.......) é o documento que tramita para fora do âmbito do COMAER (de OM para órgão externo ou pessoa física estranha ao COMAER).',
    options: {
      a: 'Interno e externo.',
      b: 'Internacional e nacional.',
      c: 'Pessoal e impessoal.',
      d: 'Interior e Internamente.'
    },
    correctAnswer: 'a',
    explanation: 'Quanto ao âmbito, os documentos classificam-se em interno e externo.',
    sourceDoc: 'Apostila SAD - Tópico 3.4 Classificação de Documentos (pág. 33)'
  },
  {
    id: 'sad-47',
    number: 47,
    subjectId: 'sad_especifico_256',
    topic: 'Classificação de Documentos - Natureza Ostensiva',
    text: 'É aquele que não possui restrição de acesso, ou seja, sua divulgação não prejudica o órgão ou entidade, nem seus membros, podendo ser de domínio público:',
    options: {
      a: 'Livre acesso.',
      b: 'Rotineiro.',
      c: 'Orgânico.',
      d: 'Ostensivo.'
    },
    correctAnswer: 'd',
    explanation: 'Documento ostensivo: não possui restrição de acesso e pode ser de domínio público.',
    sourceDoc: 'Apostila SAD - Tópico 3.4 Natureza do assunto (pág. 34)'
  },
  {
    id: 'sad-48',
    number: 48,
    subjectId: 'sad_especifico_256',
    topic: 'Classificação de Documentos - Natureza Sigilosa',
    text: 'É aquele que, pela natureza do seu conteúdo, o acesso é restrito a um determinado grupo de pessoas, necessitando de medidas especiais de salvaguarda para custódia e divulgação..., dados ou informações cujo conhecimento irrestrito ou divulgação possa acarretar qualquer risco à segurança da sociedade e do Estado, bem como aqueles necessários ao resguardo da inviolabilidade da intimidade da vida privada, da honra e da imagem das pessoas.',
    options: {
      a: 'Secreto.',
      b: 'Sigiloso.',
      c: 'Restrito.',
      d: 'Inviolável.'
    },
    correctAnswer: 'b',
    explanation: 'Documento sigiloso requer medidas especiais de salvaguarda para proteção de seu conteúdo.',
    sourceDoc: 'Apostila SAD - Tópico 3.4 Natureza do assunto (pág. 34)'
  },
  {
    id: 'sad-49',
    number: 49,
    subjectId: 'sad_especifico_256',
    topic: 'Graus de Sigilo - LAI e ICA 205-47',
    text: 'Quanto aos graus de sigilo devendo esses serem observados segundo a lei, decreto bem como a ICA 205-47 “Instrução para a Salvaguarda de Assuntos Sigilosos da Aeronáutica (ISAS)”, para aposição correta do grau de sigilo e paginação. São os graus de sigilo:',
    options: {
      a: 'Inviolável, secreto, ultrassecreto.',
      b: 'Secreto, ultrassecreto, restrito.',
      c: 'Reservado, secreto, ultrassecreto.',
      d: 'Sigiloso, secreto, ultrassecreto.'
    },
    correctAnswer: 'c',
    explanation: 'Os graus legais de sigilo são Reservado, Secreto e Ultrassecreto (Lei 12.527/2011).',
    sourceDoc: 'Apostila SAD - Tópico 3.4 Natureza do assunto (pág. 34)'
  },
  {
    id: 'sad-50',
    number: 50,
    subjectId: 'sad_especifico_256',
    topic: 'Informação Pessoal',
    text: 'É aquela relacionada à pessoa natural identificada ou identificável, relativa à intimidade, vida privada, honra e imagem.',
    options: {
      a: 'Informação pessoal.',
      b: 'Informação impessoal.',
      c: 'Informação restrita.',
      d: 'Informação privada.'
    },
    correctAnswer: 'a',
    explanation: 'Informação pessoal diz respeito à intimidade, honra, vida privada e imagem da pessoa natural identificada/identificável.',
    sourceDoc: 'Apostila SAD - Tópico 3.4 Informação pessoal (pág. 34)'
  },
  {
    id: 'sad-51',
    number: 51,
    subjectId: 'sad_especifico_256',
    topic: 'Prioridade dos Documentos - Rotina',
    text: 'É aquele cujo encaminhamento, estudo e expedição são feitos regularmente, devendo ser observado o prazo máximo de oito dias úteis para despacho ou conclusão:',
    options: {
      a: 'Cotidiano.',
      b: 'Rotina.',
      c: 'Regular.',
      d: 'Frequente.'
    },
    correctAnswer: 'b',
    explanation: 'Documento de rotina: prazo máximo de 8 dias úteis para despacho ou conclusão.',
    sourceDoc: 'Apostila SAD - Tópico 3.4 Prioridade (pág. 34)'
  },
  {
    id: 'sad-52',
    number: 52,
    subjectId: 'sad_especifico_256',
    topic: 'Pronomes de Tratamento - Decreto 9.758/2019',
    text: 'Sendo assim, o único pronome de tratamento utilizado na comunicação com agentes públicos federais é, independentemente do nível hierárquico, da natureza do cargo ou da função ou da ocasião, podendo ser flexionado para o feminino e para o plural.',
    options: {
      a: 'Vossa excelência.',
      b: 'Vossa senhoria.',
      c: 'Doutor.',
      d: 'Senhor.'
    },
    correctAnswer: 'd',
    explanation: 'Pelo Decreto nº 9.758/2019, o único pronome de tratamento no Poder Executivo Federal é "Senhor" (Sr.).',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Formas de Tratamentos (pág. 35)'
  },
  {
    id: 'sad-53',
    number: 53,
    subjectId: 'sad_especifico_256',
    topic: 'Formas de Tratamento - Outros Poderes',
    text: 'É a forma de tratamento mais elevada, utilizada para outros níveis de autoridade, como as autoridades dos Poderes Legislativo, Judiciário e do Ministério Público da União.',
    options: {
      a: 'Vossa reverência.',
      b: 'Vossa reverendíssima.',
      c: 'Vossa excelência.',
      d: 'Vossa magnificência.'
    },
    correctAnswer: 'c',
    explanation: 'Para Chefes de outros poderes e membros do Judiciário/Legislativo/MPU utiliza-se Vossa Excelência.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Formas de Tratamentos (pág. 35)'
  },
  {
    id: 'sad-54',
    number: 54,
    subjectId: 'sad_especifico_256',
    topic: 'Vocativo - Chefes de Poderes',
    text: 'O vocativo a ser empregado em comunicações dirigidas aos Chefes dos Poderes Legislativo e Judiciário é (......), seguido do cargo respectivo.',
    options: {
      a: 'Digníssimo.',
      b: 'Excelentíssimo senhor.',
      c: 'Respeitável.',
      d: 'Ilustríssimo.'
    },
    correctAnswer: 'b',
    explanation: 'O vocativo para Chefes de Poderes é "Excelentíssimo Senhor", seguido do cargo respectivo.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Formas de Tratamento (pág. 35)'
  },
  {
    id: 'sad-55',
    number: 55,
    subjectId: 'sad_especifico_256',
    topic: 'Prioridade dos Documentos - Urgente',
    text: 'É aquele cujo encaminhamento, estudo e expedição devem ocorrer com precedência sobre os demais.',
    options: {
      a: 'Urgente.',
      b: 'Emergência.',
      c: 'Prioritário.',
      d: 'Importante.'
    },
    correctAnswer: 'a',
    explanation: 'Documento urgente deve ter tramitação com precedência sobre os demais.',
    sourceDoc: 'Apostila SAD - Tópico 3.4 Prioridade (pág. 34)'
  },
  {
    id: 'sad-56',
    number: 56,
    subjectId: 'sad_especifico_256',
    topic: 'Redação Oficial - Siglas',
    text: 'As siglas de identificação de OM e documentos serão estabelecidas no ato de criação da OM ou de aprovação do documento, sendo distinguidas pelo emprego preferencial de letras (......).',
    options: {
      a: 'Corrida.',
      b: 'Extensas.',
      c: 'Minúsculas.',
      d: 'Maiúsculas.'
    },
    correctAnswer: 'd',
    explanation: 'As siglas são distinguidas pelo emprego preferencial de letras maiúsculas.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Padronização (pág. 34-35)'
  },
  {
    id: 'sad-57',
    number: 57,
    subjectId: 'sad_especifico_256',
    topic: 'Redação Oficial - Linguagem',
    text: 'A redação para a correspondência oficial requer (......), sendo essencial uma linguagem (......) e (......), sem, contudo, prescindir da utilização do padrão culto da língua, isto é, a observação das regras da gramática formal e o emprego de um vocabulário comum ao conjunto dos usuários do idioma.',
    options: {
      a: 'Formalidade, objetiva, concreta.',
      b: 'Objetividade, clara, simples.',
      c: 'Autoritariedade, rápida, simples.',
      d: 'Atenção, formal, elaborada.'
    },
    correctAnswer: 'b',
    explanation: 'Requer objetividade, sendo essencial uma linguagem clara e simples no padrão culto da língua.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 / NSCA 10-2 (pág. 34)'
  },
  {
    id: 'sad-58',
    number: 58,
    subjectId: 'sad_especifico_256',
    topic: 'Redação Oficial - Princípios',
    text: 'A redação oficial apresentará caráter de:',
    options: {
      a: 'Autoritário.',
      b: 'Geral.',
      c: 'Impessoalidade.',
      d: 'Pessoalidade.'
    },
    correctAnswer: 'c',
    explanation: 'A impessoalidade é traço fundamental da redação de correspondências oficiais da Administração Pública.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Formas de Tratamentos e Manual da PR (pág. 34-35)'
  },
  {
    id: 'sad-59',
    number: 59,
    subjectId: 'sad_especifico_256',
    topic: 'Diagramação de Documentos - Margens',
    text: 'Os documentos oficiais do COMAER serão confeccionados por sistemas informatizados (editores de texto), observadas as seguintes medidas:',
    options: {
      a: 'Margem superior - 2,0 cm; margem inferior - mínimo 2,0 cm; margem esquerda - 3,0 cm; direita - 2,0 cm.',
      b: 'Margem superior - 4,0 cm; margem inferior - mínimo 2,0 cm; margem esquerda - 5,0 cm; direita - 2,0 cm.',
      c: 'Margem superior - 3,0 cm; margem inferior - mínimo 2,0 cm; margem esquerda - 2,0 cm; direita - 2,0 cm.',
      d: 'Margem superior - 2,0 cm; margem inferior - mínimo 2,0 cm; margem esquerda - 4,0 cm; direita - 3,0 cm.'
    },
    correctAnswer: 'a',
    explanation: 'Medidas padronizadas na NSCA 10-2: superior 2,0 cm; inferior mínimo 2,0 cm; esquerda 3,0 cm; direita 2,0 cm.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Diagramação e Anexos (pág. 35-36)'
  },
  {
    id: 'sad-60',
    number: 60,
    subjectId: 'sad_especifico_256',
    topic: 'Diagramação - Fontes e Símbolos',
    text: 'Nos documentos oficiais do COMAER para símbolos não existentes na fonte Times New Roman, poder-se-á utilizar as fontes (......) e (......), ou correspondentes dos softwares livres.',
    options: {
      a: 'Calibri, Wingdings.',
      b: 'Symbol,Wingdings.',
      c: 'Symbol, Webdings.',
      d: 'Symbol, Arial.'
    },
    correctAnswer: 'b',
    explanation: 'Para símbolos ausentes no Times New Roman são aceitas as fontes Symbol e Wingdings.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Formatação de Documentos (pág. 35)'
  },
  {
    id: 'sad-61',
    number: 61,
    subjectId: 'sad_especifico_256',
    topic: 'Diagramação - Formatação Excessiva',
    text: '(..............................) o uso excessivo de negrito, itálico, sublinhado, letras maiúsculas, sombreadas, sombra, relevo, bordas, caixas de texto, ou qualquer outra forma de formatação que afete a elegância e a sobriedade dos documentos.',
    options: {
      a: 'É proibido.',
      b: 'É vedado.',
      c: 'É recomendável.',
      d: 'Não é recomendável.'
    },
    correctAnswer: 'd',
    explanation: 'Na NSCA 10-2 não é recomendável o uso excessivo de destaques que afetem a sobriedade do documento.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Sobriedade documental (pág. 35)'
  },
  {
    id: 'sad-62',
    number: 62,
    subjectId: 'sad_especifico_256',
    topic: 'Publicações Oficiais - DOU',
    text: 'Quando se tratar de atos que devam ser publicados no Diário Oficial da União (DOU), serão observadas as normas da:',
    options: {
      a: 'Imprensa Nacional.',
      b: 'Imprensa Internacional.',
      c: 'Emprensa Nacional.',
      d: 'Linguagem culta gramatical.'
    },
    correctAnswer: 'a',
    explanation: 'Atos destinados ao DOU seguem os padrões e normas da Imprensa Nacional.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Publicações (pág. 35)'
  },
  {
    id: 'sad-63',
    number: 63,
    subjectId: 'sad_especifico_256',
    topic: 'Redação Oficial - Citações Legais',
    text: 'Quando for necessária a remissão a texto legal, observar-se-á para que a primeira referência indique o seu número, seguido da data, sem abreviar mês e ano (Exemplo: Lei nº 12.527, de 18 de novembro de 2011).',
    options: {
      a: 'Transcrições.',
      b: 'Publicações.',
      c: 'Informativo.',
      d: 'Descrição.'
    },
    correctAnswer: 'a',
    explanation: 'Regra expressa de transcrições e remissões a textos normativos na NSCA 10-2.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Transcrições legais (pág. 35)'
  },
  {
    id: 'sad-64',
    number: 64,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos do COMAER - Anexos',
    text: 'Documento, avulso ou processo, juntado em caráter definitivo, a outro documento ou processo, eventualmente de mesma procedência (autoria), por afinidade de conteúdo, constituindo uma unidade de arquivamento, que serve de fundamentação, comprovação ou ilustração, para dar continuidade a uma ação administrativa. Pode ser em meio físico ou em mídias removíveis.',
    options: {
      a: 'Relatório.',
      b: 'Referência.',
      c: 'Anexos.',
      d: 'Citações.'
    },
    correctAnswer: 'c',
    explanation: 'Anexo é o documento ou processo juntado em caráter definitivo para fundamentar, comprovar ou ilustrar.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Anexos (pág. 35-36)'
  },
  {
    id: 'sad-65',
    number: 65,
    subjectId: 'sad_especifico_256',
    topic: 'Identificação de Anexos',
    text: 'Os anexos são identificados por letras (......), ponto e pelos respectivos títulos. Utilizam-se letras (......) dobradas na identificação dos anexos, quando esgotadas as 26 letras do alfabeto.',
    options: {
      a: 'Minúsculas diferentes, maiúsculas.',
      b: 'Maiúsculas diferentes, minúsculas.',
      c: 'Minúsculas consecutivas, minúsculas.',
      d: 'Maiúsculas consecutivas, maiúsculas.'
    },
    correctAnswer: 'd',
    explanation: 'Anexos são identificados por letras maiúsculas consecutivas (A, B, C... e depois AA, BB, CC).',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Anexos (pág. 36)'
  }
];
