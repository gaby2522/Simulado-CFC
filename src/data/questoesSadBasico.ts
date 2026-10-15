import { Question } from '../types/quiz';

export const questoesSadBasico: Question[] = [
  {
    id: 'sadb-1',
    number: 1,
    subjectId: 'sad_basico',
    topic: 'Comunicação Oral e Assertividade',
    text: 'A apostila de Conhecimentos Básicos de SAD conceitua a comunicação assertiva no trabalho. A diferença fundamental entre a comunicação assertiva e a agressiva é que:',
    options: {
      a: 'A assertiva é omissa e tímida, enquanto a agressiva é eficiente.',
      b: 'A assertiva é direta ao ponto, sem rodeios e respeitosa, enquanto o comunicador agressivo faz julgamentos de valor, ataca e impõe suas ideias.',
      c: 'A agressiva busca convencer com dados científicos e a assertiva com imposição hierárquica.',
      d: 'Não há diferença prática entre as duas no ambiente militar.'
    },
    correctAnswer: 'b',
    explanation: 'A comunicação assertiva é direta e respeitosa; a agressiva faz julgamento de valor, ataca e tenta impor ideias.',
    sourceDoc: 'Apostila SAD - Tópico 1.1 Comunicação Oral (pág. 8)'
  },
  {
    id: 'sadb-2',
    number: 2,
    subjectId: 'sad_basico',
    topic: 'Comunicação Não Verbal',
    text: 'Na comunicação não verbal no ambiente de trabalho, o contato visual adequado durante um diálogo deve ser:',
    options: {
      a: 'Evitado totalmente para não intimidar o interlocutor.',
      b: 'Olhar nos olhos de forma intermitente e franca, transmitindo segurança e confiabilidade.',
      c: 'Um olhar fixo e contínuo sem piscar durante todo o expediente.',
      d: 'Direcionado exclusivamente para os sapatos do superior.'
    },
    correctAnswer: 'b',
    explanation: 'Olhar nos olhos de forma intermitente e franca transmite segurança, veracidade e respeito.',
    sourceDoc: 'Apostila SAD - Tópico 1.2 Comunicação Não Verbal (pág. 9)'
  },
  {
    id: 'sadb-3',
    number: 3,
    subjectId: 'sad_basico',
    topic: 'Comunicação Telefônica',
    text: 'Ao atender um telefonema no setor de trabalho, a recomendação da apostila oficial da FAB para o operador é:',
    options: {
      a: 'Falar apenas "Alô" e esperar a outra pessoa se pronunciar.',
      b: 'Usar uma saudação respeitosa, identificando o setor/organização por extenso e dizendo seu nome/graduação e como pode ajudar.',
      c: 'Utilizar jargões internos e siglas para abreviar a conversa.',
      d: 'Desligar imediatamente se o interlocutor não se identificar no primeiro segundo.'
    },
    correctAnswer: 'b',
    explanation: 'Usar saudação respeitosa e esclarecedora, nome do setor por extenso, nome do operador e oferta de ajuda.',
    sourceDoc: 'Apostila SAD - Tópico 1.2 Falando ao Telefone (pág. 10)'
  },
  {
    id: 'sadb-4',
    number: 4,
    subjectId: 'sad_basico',
    topic: 'Transmissão de Recados',
    text: 'Ao receber um recado para a chefia, quais são os dados essenciais que devem ser anotados de imediato para evitar esquecimentos e falhas na mensagem?',
    options: {
      a: 'Apenas o nome do interlocutor em rascunho.',
      b: 'Horário, quem está transmitindo, de que lugar, telefone/e-mail para contato e o teor exato e objetivo da mensagem.',
      c: 'A opinião pessoal do soldado sobre o assunto tratado.',
      d: 'O número de série do aparelho telefônico utilizado.'
    },
    correctAnswer: 'b',
    explanation: 'Dados básicos: data/horário, quem ligou, localidade, contato telefônico/e-mail e mensagem detalhada.',
    sourceDoc: 'Apostila SAD - Tópico 1.3 Transmissão de Recados (pág. 12)'
  },
  {
    id: 'sadb-5',
    number: 5,
    subjectId: 'sad_basico',
    topic: 'Ética no Trabalho - Deontologia',
    text: 'A teoria que estuda o conjunto de regras de conduta geralmente aceita pelos membros de determinada profissão, tratando de deveres e obrigações, denomina-se:',
    options: {
      a: 'Ontologia.',
      b: 'Epistemologia.',
      c: 'Deontologia (ou Teoria do Dever).',
      d: 'Hermeneutica.'
    },
    correctAnswer: 'c',
    explanation: 'Deontologia (Teoria do Dever) é o conjunto de deveres ético-profissionais.',
    sourceDoc: 'Apostila SAD - Tópico 1.4 Ética no Trabalho (pág. 15)'
  },
  {
    id: 'sadb-6',
    number: 6,
    subjectId: 'sad_basico',
    topic: 'Organização de Arquivos Correntes',
    text: 'Na rotina da seção administrativa, os documentos do arquivo do ano corrente e os regulamentos de consulta frequente devem ser guardados:',
    options: {
      a: 'Amontoados horizontalmente sobre a bancada de café.',
      b: 'Na posição vertical, dentro de pastas firmes etiquetadas, nas prateleiras de mais fácil acesso.',
      c: 'Em caixas lacradas no depósito do subsolo.',
      d: 'Descartados diariamente na lixeira de reciclagem.'
    },
    correctAnswer: 'b',
    explanation: 'Guardados na posição vertical, em pastas etiquetadas e nas prateleiras mais acessíveis do setor.',
    sourceDoc: 'Apostila SAD - Tópico 2 Higiene e Organização no Trabalho (pág. 20)'
  },
  {
    id: 'sadb-7',
    number: 7,
    subjectId: 'sad_basico',
    topic: 'Conservação de Equipamentos e Energia',
    text: 'Para promover o consumo sustentável e a economia de energia no uso de computadores na seção, a recomendação é:',
    options: {
      a: 'Deixar todos os monitores ligados permanentemente com protetor de tela 3D.',
      b: 'Configurar os computadores para entrar em modo de espera após 10 minutos e hibernação após 30 minutos de inatividade, desligando periféricos ao fim do expediente.',
      c: 'Nunca desligar as impressoras para não descalibrar o cartucho.',
      d: 'Manter aparelhos elétricos expostos diretamente à luz solar.'
    },
    correctAnswer: 'b',
    explanation: 'Espera aos 10 minutos, hibernação aos 30 minutos e desligamento completo de periféricos ao fim do dia.',
    sourceDoc: 'Apostila SAD - Tópico 2 Cuidados com os Equipamentos (pág. 22-23)'
  },
  {
    id: 'sadb-8',
    number: 8,
    subjectId: 'sad_basico',
    topic: 'Informática Básica - Memória Volátil',
    text: 'A memória principal do computador cuja característica essencial é ser volátil (perde todos os dados armazenados temporariamente quando o computador é desligado) é a:',
    options: {
      a: 'Memória ROM.',
      b: 'Memória Flash.',
      c: 'Memória RAM.',
      d: 'Memória de disco rígido (HD).'
    },
    correctAnswer: 'c',
    explanation: 'A memória RAM é volátil: necessita de energia para reter seus dados em processamento.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Memória RAM (pág. 25)'
  },
  {
    id: 'sadb-9',
    number: 9,
    subjectId: 'sad_basico',
    topic: 'Informática Básica - Teclado ABNT',
    text: 'No teclado de padrão ABNT utilizado no Brasil, as teclas funcionais correspondem a:',
    options: {
      a: 'Às teclas de números do lado direito.',
      b: 'Às teclas alfanuméricas centrais.',
      c: 'Às 12 teclas de F1 a F12 localizadas na parte superior.',
      d: 'Apenas à barra de espaço e tecla Enter.'
    },
    correctAnswer: 'c',
    explanation: 'Teclado funcional: conjunto das 12 teclas (F1 a F12) na parte superior do teclado.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Teclado (pág. 24)'
  },
  {
    id: 'sadb-10',
    number: 10,
    subjectId: 'sad_basico',
    topic: 'Informática Básica - Byte',
    text: 'Em computação, a reunião lógica de 8 bits que representa um caractere (como uma letra ou número) denomina-se:',
    options: {
      a: 'Megabit.',
      b: 'Byte.',
      c: 'Pixel.',
      d: 'Gigabyte.'
    },
    correctAnswer: 'b',
    explanation: '1 byte é composto por uma sequência de 8 bits.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Unidades de Medida (pág. 25)'
  },
  {
    id: 'sadb-11',
    number: 11,
    subjectId: 'sad_basico',
    topic: 'Informática Básica - Sistema Operacional',
    text: 'O software fundamental que gerencia os recursos de hardware, a memória, o fluxo de entrada e saída e permite que outros programas sejam executados é o:',
    options: {
      a: 'Navegador de internet.',
      b: 'Sistema Operacional.',
      c: 'Editor de planilha.',
      d: 'Banco de dados.'
    },
    correctAnswer: 'b',
    explanation: 'Sistema Operacional é o administrador do ambiente computacional (ex: Windows, Linux).',
    sourceDoc: 'Apostila SAD - Tópico 3.2 Sistema Operacional (pág. 28)'
  },
  {
    id: 'sadb-12',
    number: 12,
    subjectId: 'sad_especifico_256',
    topic: 'Informática Básica - Categorias de Impressora',
    text: 'As impressoras são classificadas em quatro categorias na apostila da especialidade SAD. Assinale a alternativa que traz as quatro categorias corretas:',
    options: {
      a: 'Térmica, plotter, offset e digital.',
      b: 'Impacto ou matricial, jato de tinta, laser e 3D.',
      c: 'LED, sublimática, fotográfica e cera.',
      d: 'Fax, xerox, scanner e plotter.'
    },
    correctAnswer: 'b',
    explanation: 'Categorias: Impacto ou matricial; Jato de tinta; Laser; e 3D.',
    sourceDoc: 'Apostila SAD - Tópico 3.1 Impressoras (pág. 27)'
  },
  {
    id: 'sadb-13',
    number: 13,
    subjectId: 'sad_basico',
    topic: 'Redação Oficial - Norma Padronizadora',
    text: 'A elaboração de documentos oficiais e arquivísticos no âmbito do Comando da Aeronáutica é padronizada e disciplinada por qual publicação oficial?',
    options: {
      a: 'RCA 34-1.',
      b: 'NSCA 10-2.',
      c: 'RADA-e RCA 12-1.',
      d: 'ICA 205-47.'
    },
    correctAnswer: 'b',
    explanation: 'A NSCA 10-2 é a Norma de Sistema que padroniza os documentos oficiais no COMAER.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Conceitos (pág. 31)'
  },
  {
    id: 'sadb-14',
    number: 14,
    subjectId: 'sad_basico',
    topic: 'Atos Administrativos - Ato Ordinatório',
    text: 'O ato que determina uma ação da Administração Pública, expedido por chefes aos seus subordinados para disciplinar a rotina e funcionamento dos serviços sem criar direitos para terceiros, é o:',
    options: {
      a: 'Ato normativo.',
      b: 'Ato oficial.',
      c: 'Ato ordinatório.',
      d: 'Ato regulamentar.'
    },
    correctAnswer: 'c',
    explanation: 'Ato Ordinatório disciplina condutas e serviços internos.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Conceitos (pág. 31)'
  },
  {
    id: 'sadb-15',
    number: 15,
    subjectId: 'sad_basico',
    topic: 'Protocolo - Conceito de NUP',
    text: 'O padrão oficial de numeração atribuído aos documentos avulsos ou processos na Unidade Protocolizadora para controle em toda a Administração Pública Federal é o:',
    options: {
      a: 'SARAM.',
      b: 'NUP (Número Único de Protocolo).',
      c: 'CNPJ.',
      d: 'SIAPE.'
    },
    correctAnswer: 'b',
    explanation: 'NUP = Número Único de Protocolo, padrão oficial de controle documental.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 NUP (pág. 32)'
  },
  {
    id: 'sadb-16',
    number: 16,
    subjectId: 'sad_basico',
    topic: 'Protocolo - Competência do CENDOC',
    text: 'No Comando da Aeronáutica, o órgão competente pelo fornecimento e controle dos números de codificação de Unidades Protocolizadoras às OM solicitantes é o:',
    options: {
      a: 'COMGEP.',
      b: 'CENDOC (Centro de Documentação da Aeronáutica).',
      c: 'DIRAP.',
      d: 'GAP-SP.'
    },
    correctAnswer: 'b',
    explanation: 'O CENDOC controla e fornece a codificação de UP no COMAER.',
    sourceDoc: 'Apostila SAD - Tópico 3.3 Unidade Protocolizadora (pág. 33)'
  },
  {
    id: 'sadb-17',
    number: 17,
    subjectId: 'sad_basico',
    topic: 'Graus de Sigilo - Prazos e Níveis',
    text: 'De acordo com a Lei de Acesso à Informação (Lei nº 12.527/2011) e a ICA 205-47, as informações sigilosas podem ser classificadas nos seguintes graus:',
    options: {
      a: 'Interno, reservado e restrito.',
      b: 'Confidencial, secreto e indevassável.',
      c: 'Reservado, secreto e ultrassecreto.',
      d: 'Ostensivo, particular e pessoal.'
    },
    correctAnswer: 'c',
    explanation: 'Os três graus de sigilo legais são: Reservado, Secreto e Ultrassecreto.',
    sourceDoc: 'Apostila SAD - Tópico 3.4 Graus de Sigilo (pág. 34)'
  },
  {
    id: 'sadb-18',
    number: 18,
    subjectId: 'sad_basico',
    topic: 'Tratamento de Agentes Federais - Decreto 9.758/2019',
    text: 'O Decreto nº 9.758/2019 estabelece que o único pronome de tratamento a ser empregado na comunicação com agentes públicos federais (civis e militares) é:',
    options: {
      a: 'Vossa Excelência.',
      b: 'Vossa Senhoria.',
      c: 'Senhor (Sr.).',
      d: 'Doutor.'
    },
    correctAnswer: 'c',
    explanation: 'O único pronome é "Senhor" (Sr.), independentemente do nível hierárquico.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Formas de Tratamentos (pág. 35)'
  },
  {
    id: 'sadb-19',
    number: 19,
    subjectId: 'sad_basico',
    topic: 'Documentos do COMAER - Ofício',
    text: 'No âmbito do COMAER, qual documento substituiu formalmente o antigo Memorando, a Parte e a Parte Pessoal na tramitação interna de informações?',
    options: {
      a: 'O Despacho.',
      b: 'A Nota de Serviço.',
      c: 'O Ofício.',
      d: 'A Apostila.'
    },
    correctAnswer: 'c',
    explanation: 'O Ofício absorveu e substituiu o Memorando, a Parte e a Parte Pessoal.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Ofício (pág. 36-37)'
  },
  {
    id: 'sadb-20',
    number: 20,
    subjectId: 'sad_basico',
    topic: 'Documentos do COMAER - Apostila',
    text: 'A averbação feita no próprio texto ou no verso de documento normativo ou ordinatório para sanar inexatidão ou acrescentar dado faltante sem alterar a substância do ato publicado é a:',
    options: {
      a: 'Certidão.',
      b: 'Apostila.',
      c: 'Ementa.',
      d: 'Declaração.'
    },
    correctAnswer: 'b',
    explanation: 'Apostila é a averbação corretiva ou integradora que não altera a substância do direito criado.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Apostila (pág. 37)'
  },
  {
    id: 'sadb-21',
    number: 21,
    subjectId: 'sad_basico',
    topic: 'Documentos do COMAER - Aviso Interno',
    text: 'O documento oficial de uso exclusivo do Comandante da Aeronáutica (CMTAER) para baixar determinações e recomendações administrativas é o:',
    options: {
      a: 'Aviso Interno.',
      b: 'Despacho Decisório.',
      c: 'Ata de Julgamento.',
      d: 'Nota de Empenho.'
    },
    correctAnswer: 'a',
    explanation: 'O Aviso Interno é privativo do Comandante da Aeronáutica.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Aviso Interno (pág. 38)'
  },
  {
    id: 'sadb-22',
    number: 22,
    subjectId: 'sad_basico',
    topic: 'Documentos do COMAER - Certidão',
    text: 'Para que seja fornecida uma Certidão a requerimento do interessado, a administração exige os seguintes pressupostos:',
    options: {
      a: 'Pagamento de taxa de urgência e anuência verbal de dois oficiais.',
      b: 'Legítimo interesse, ausência de sigilo (critérios da LAI) e indicação expressa da finalidade.',
      c: 'Autorização prévia do Ministério da Justiça.',
      d: 'Publicação no Diário Oficial da União.'
    },
    correctAnswer: 'b',
    explanation: 'Pressupostos da certidão: legítimo interesse, ausência de sigilo e indicação da finalidade.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Certidão (pág. 38)'
  },
  {
    id: 'sadb-23',
    number: 23,
    subjectId: 'sad_basico',
    topic: 'Documentos do COMAER - Declaração',
    text: 'A Declaração emitida por servidor em razão do cargo possui qual característica quanto à sua eficácia temporal?',
    options: {
      a: 'Validade permanente e imprescritível.',
      b: 'Duração transitória, devendo constar expressamente no texto o prazo de validade e o fim a que se presta.',
      c: 'Validade fixada automaticamente em dez anos.',
      d: 'Validade apenas enquanto o militar estiver em serviço de guarda.'
    },
    correctAnswer: 'b',
    explanation: 'A Declaração possui duração transitória com prazo de validade estipulado no texto.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Declaração (pág. 38)'
  },
  {
    id: 'sadb-24',
    number: 24,
    subjectId: 'sad_basico',
    topic: 'Documentos do COMAER - Ordem do Dia',
    text: 'A Ordem do Dia exalta datas históricas ou fatos meritórios. Em sua identificação no âmbito do COMAER, ela:',
    options: {
      a: 'Recebe numeração ordinal progressiva perpétua.',
      b: 'Não recebe número, sendo identificada pela data de sua publicação no Boletim Interno da OM apoiadora.',
      c: 'Recebe número no SIGADAER com código de barras obrigatório.',
      d: 'É assinada exclusivamente por praças formandos.'
    },
    correctAnswer: 'b',
    explanation: 'A Ordem do Dia não recebe número; identifica-se pela data de publicação em Boletim Interno.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Ordem do Dia (pág. 39)'
  },
  {
    id: 'sadb-25',
    number: 25,
    subjectId: 'sad_basico',
    topic: 'Gestão de Documentos - Teoria das Três Idades',
    text: 'Na Gestão Documental e Arquivologia (NSCA 214-1), a Teoria das Três Idades classifica os arquivos em:',
    options: {
      a: 'Passado, presente e futuro.',
      b: 'Corrente (1ª idade), Intermediário (2ª idade) e Permanente (3ª idade).',
      c: 'Ativo, inativo e descartado.',
      d: 'Local, regional e nacional.'
    },
    correctAnswer: 'b',
    explanation: 'As três idades dos arquivos: corrente, intermediária e permanente.',
    sourceDoc: 'Apostila SAD - Tópico 3.7 Teoria das Três Idades (pág. 41)'
  },
  {
    id: 'sadb-26',
    number: 26,
    subjectId: 'sad_basico',
    topic: 'Arquivologia - Arquivo Permanente',
    text: 'Os documentos recolhidos ao Arquivo Permanente do Comando da Aeronáutica são inalienáveis e imprescritíveis, vedada sua destruição. Onde fica sediado o Arquivo Permanente do COMAER?',
    options: {
      a: 'No Ministério da Defesa em Brasília.',
      b: 'Nas instalações do Centro de Documentação da Aeronáutica (CENDOC), no Rio de Janeiro.',
      c: 'Na Escola de Especialistas de Aeronáutica (EEAR).',
      d: 'Na Academia da Força Aérea (AFA).'
    },
    correctAnswer: 'b',
    explanation: 'O Arquivo Permanente do COMAER fica sediado no CENDOC.',
    sourceDoc: 'Apostila SAD - Tópico 3.7 Arquivo Permanente (pág. 42)'
  },
  {
    id: 'sadb-27',
    number: 27,
    subjectId: 'sad_basico',
    topic: 'Avaliação Documental - CPADAER e SPADAER',
    text: 'O órgão máximo multidisciplinar de avaliação e destinação de documentos no Comando da Aeronáutica denomina-se:',
    options: {
      a: 'SPADAER.',
      b: 'CPADAER (Comissão Permanente de Avaliação de Documentos da Aeronáutica).',
      c: 'GAP-DF.',
      d: 'SEFA.'
    },
    correctAnswer: 'b',
    explanation: 'CPADAER é o órgão máximo de avaliação documental do COMAER.',
    sourceDoc: 'Apostila SAD - Tópico 3.7 CPADAER (pág. 40-41)'
  },
  {
    id: 'sadb-28',
    number: 28,
    subjectId: 'sad_basico',
    topic: 'Informações Sigilosas - Necessidade de Conhecer',
    text: 'Conforme a ICA 205-47, a condição pessoal, inerente ao efetivo exercício do cargo ou função, indispensável para que uma pessoa tenha acesso à informação classificada ou sob restrição de acesso, define a:',
    options: {
      a: 'Credencial de segurança.',
      b: 'Necessidade de Conhecer.',
      c: 'Autorização temporária.',
      d: 'Imunidade funcional.'
    },
    correctAnswer: 'b',
    explanation: 'Necessidade de Conhecer é a condição funcional indispensável para acesso à informação sigilosa.',
    sourceDoc: 'Apostila SAD - Tópico 3.8 Conceitos de Sigilo (pág. 43)'
  },
  {
    id: 'sadb-29',
    number: 29,
    subjectId: 'sad_basico',
    topic: 'RADA-e RCA 12-1 - Agentes de Nível Direção',
    text: 'No Regulamento de Administração da Aeronáutica (RADA-e), são funções privativas do Nível DIREÇÃO da Organização Militar:',
    options: {
      a: 'Gestor de Contratos, Pregoeiro e Almoxarife.',
      b: 'Dirigente Máximo, Ordenador de Despesas e Controle Interno.',
      c: 'Fiscal de Contratos e Encarregado de Manutenção.',
      d: 'Motorista de viatura e Telefonista.'
    },
    correctAnswer: 'b',
    explanation: 'Nível Direção compreende Dirigente Máximo, Ordenador de Despesas e Controle Interno.',
    sourceDoc: 'Apostila SAD - Tópico 4.2 Agentes da Administração (pág. 46)'
  },
  {
    id: 'sadb-30',
    number: 30,
    subjectId: 'sad_basico',
    topic: 'Bens Patrimoniais Móveis - Critério de Durabilidade',
    text: 'Segundo os critérios do RADA-e, um bem é considerado de consumo pelo critério da DURABILIDADE quando, em uso normal, perde ou tem reduzidas as condições de funcionamento no prazo máximo de:',
    options: {
      a: 'Seis meses.',
      b: 'Um ano.',
      c: 'Dois anos.',
      d: 'Cinco anos.'
    },
    correctAnswer: 'c',
    explanation: 'Critério da durabilidade de bem de consumo: vida útil no prazo máximo de 2 anos.',
    sourceDoc: 'Apostila SAD - Tópico 4.3 Bens Móveis de Consumo (pág. 48)'
  },
  {
    id: 'sadb-31',
    number: 31,
    subjectId: 'sad_basico',
    topic: 'Bens Imóveis de Natureza Militar',
    text: 'São classificados como bens patrimoniais imóveis de natureza EXCLUSIVAMENTE MILITAR no COMAER:',
    options: {
      a: 'Os Próprios Nacionais Residenciais (PNR) de suboficiais.',
      b: 'Os clubes dos oficiais e hotéis de trânsito.',
      c: 'A OM e frações de OM, e os campos de exercício e de prova para armamentos, munições e engenhos espaciais.',
      d: 'As áreas de lazer e bosques de convivência.'
    },
    correctAnswer: 'c',
    explanation: 'Imóveis militares: OMs, frações e campos de tiro/provas de armamento e engenhos espaciais.',
    sourceDoc: 'Apostila SAD - Tópico 4.3 Bens Imóveis (pág. 48)'
  },
  {
    id: 'sadb-32',
    number: 32,
    subjectId: 'sad_basico',
    topic: 'Administração Financeira - Estágios da Despesa',
    text: 'A sequência ordenada e cronológica das três fases de execução da despesa orçamentária pública é:',
    options: {
      a: 'Pagamento, liquidação e empenho.',
      b: 'Empenho, liquidação e pagamento.',
      c: 'Arrecadação, empenho e retenção.',
      d: 'Previsão, cobrança e quitação.'
    },
    correctAnswer: 'b',
    explanation: 'A ordem legal da despesa é 1º Empenho, 2º Liquidação e 3º Pagamento.',
    sourceDoc: 'Apostila SAD - Tópico 4.3 Execução da Despesa (pág. 49)'
  },
  {
    id: 'sadb-33',
    number: 33,
    subjectId: 'sad_basico',
    topic: 'Orçamento - Tipos de Créditos Adicionais',
    text: 'Os créditos adicionais destinam-se a despesas não computadas ou insuficientemente dotadas na LOA, classificando-se em:',
    options: {
      a: 'Primários, secundários e terciários.',
      b: 'Suplementares, especiais e extraordinários.',
      c: 'Rotineiros, sazonais e definitivos.',
      d: 'Voluntários, forçados e vinculados.'
    },
    correctAnswer: 'b',
    explanation: 'Créditos adicionais classificam-se em suplementares, especiais e extraordinários.',
    sourceDoc: 'Apostila SAD - Tópico 4.3 Recursos Orçamentários (pág. 49)'
  },
  {
    id: 'sadb-34',
    number: 34,
    subjectId: 'sad_basico',
    topic: 'Responsabilidade Solidária em Comissões',
    text: 'O membro de uma comissão administrativa que discordar de ato irregular aprovado pela maioria ficará ISENTO de responsabilidade solidária se:',
    options: {
      a: 'Apenas faltar à reunião de deliberação.',
      b: 'Formalizar sua discordância expressa mediante voto vencido fundamentado e registrado nos autos.',
      c: 'Fizer um desabafo verbal aos colegas em particular.',
      d: 'Concordar tacitamente sem assinar a ata.'
    },
    correctAnswer: 'b',
    explanation: 'O voto vencido obrigatoriamente fundamentado e formalizado por escrito isenta de responsabilidade o agente.',
    sourceDoc: 'Apostila SAD - Tópico 4.4 Responsabilidade Solidária (pág. 50)'
  },
  {
    id: 'sadb-35',
    number: 35,
    subjectId: 'sad_basico',
    topic: 'RISAER - Escala de Serviço e Folga',
    text: 'De acordo com o RISAER (Art. 5.2), entre dois serviços de escala de 24 horas para o mesmo militar, deve ser observada a folga mínima regulamentar de:',
    options: {
      a: '24 horas.',
      b: '48 horas.',
      c: '72 horas.',
      d: '12 horas.'
    },
    correctAnswer: 'b',
    explanation: 'A folga mínima obrigatória entre dois serviços de escala é de 48 horas.',
    sourceDoc: 'Apostila SAD - Tópico 5.2 Escala de Serviço RISAER (pág. 51)'
  },
  {
    id: 'sadb-36',
    number: 36,
    subjectId: 'sad_basico',
    topic: 'RISAER - Atraso na Rendição de Serviço',
    text: 'Caso ocorra atraso na rendição do militar de serviço por lapso temporal igual ou superior a quatro horas, o RISAER determina que:',
    options: {
      a: 'O militar perde o direito à folga daquele dia.',
      b: 'Será computado, para efeito de folga, mais um serviço executado pelo militar não rendido no horário.',
      c: 'A escala é imediatamente anulada para todo o efetivo.',
      d: 'A falta é desconsiderada administrativamente.'
    },
    correctAnswer: 'b',
    explanation: 'Atraso >= 4h na rendição é computado como mais um serviço executado para efeito de folga.',
    sourceDoc: 'Apostila SAD - Tópico 5.2 Escala de Serviço RISAER (pág. 51)'
  },
  {
    id: 'sadb-37',
    number: 37,
    subjectId: 'sad_basico',
    topic: 'Movimentação - Prazos de Desligamento',
    text: 'O militar movimentado sem carga ou valores a passar deve ter seu desligamento efetivado no prazo de:',
    options: {
      a: 'Cinco dias úteis.',
      b: 'Oito dias úteis.',
      c: 'Dez dias úteis.',
      d: 'Quinze dias úteis.'
    },
    correctAnswer: 'b',
    explanation: 'Prazo para desligamento sem carga a passar: oito dias úteis.',
    sourceDoc: 'Apostila SAD - Tópico 5.5 Desligamento (pág. 53)'
  },
  {
    id: 'sadb-38',
    number: 38,
    subjectId: 'sad_basico',
    topic: 'Movimentação - Prazo com Carga',
    text: 'Quando o militar movimentado tiver que passar bens, carga patrimonial ou recursos financeiros, o prazo regulamentar para seu desligamento é de:',
    options: {
      a: 'Oito dias úteis.',
      b: 'Dez dias úteis.',
      c: 'Vinte e cinco dias úteis.',
      d: 'Trinta dias úteis.'
    },
    correctAnswer: 'b',
    explanation: 'Prazo com carga ou recursos a passar: dez dias úteis.',
    sourceDoc: 'Apostila SAD - Tópico 5.5 Desligamento (pág. 53)'
  },
  {
    id: 'sadb-39',
    number: 39,
    subjectId: 'sad_basico',
    topic: 'Movimentação - Prazo do ACI e Almoxarife',
    text: 'Quando se tratar de Agente de Controle Interno ou de oficial detentor de carga de Almoxarifado, o prazo para desligamento é de:',
    options: {
      a: 'Dez dias úteis.',
      b: 'Vinte e cinco dias úteis.',
      c: 'Trinta dias úteis.',
      d: 'Quarenta e cinco dias úteis.'
    },
    correctAnswer: 'b',
    explanation: 'Para ACI ou oficial detentor de almoxarifado o prazo é de 25 dias úteis.',
    sourceDoc: 'Apostila SAD - Tópico 5.5 Desligamento (pág. 53)'
  },
  {
    id: 'sadb-40',
    number: 40,
    subjectId: 'sad_basico',
    topic: 'Conceito de Adição e Agregação',
    text: 'O militar da ativa que deixa de ocupar vaga na escala hierárquica do seu Quadro ou Especialidade, nela permanecendo sem número, encontra-se na situação de:',
    options: {
      a: 'Adido.',
      b: 'Excluído.',
      c: 'Agregado.',
      d: 'Disponível.'
    },
    correctAnswer: 'c',
    explanation: 'Agregação é a situação na qual o militar deixa de ocupar vaga na escala numérica, ficando "sem número".',
    sourceDoc: 'Apostila SAD - Tópico 5.5 Agregação (pág. 53)'
  },
  {
    id: 'sadb-41',
    number: 41,
    subjectId: 'sad_basico',
    topic: 'Licença para Tratar de Interesse Particular (LTIP)',
    text: 'A Licença para Tratar de Interesse Particular (LTIP) pode ser concedida ao militar que possua mais de:',
    options: {
      a: 'Cinco anos de efetivo serviço.',
      b: 'Dez anos de efetivo serviço.',
      c: 'Quinze anos de efetivo serviço.',
      d: 'Vinte anos de efetivo serviço.'
    },
    correctAnswer: 'b',
    explanation: 'A LTIP exige mais de dez anos de efetivo serviço e é concedida a critério da administração por até 1 ano prorrogável.',
    sourceDoc: 'Apostila SAD - Tópico 5.9 LTIP (pág. 55)'
  },
  {
    id: 'sadb-42',
    number: 42,
    subjectId: 'sad_basico',
    topic: 'Licença à Gestante (LGA)',
    text: 'A Licença à Gestante (LGA) no Comando da Aeronáutica tem a duração inicial de 120 dias, podendo ser prorrogada por mais:',
    options: {
      a: 'Trinta dias.',
      b: 'Sessenta dias.',
      c: 'Noventa dias.',
      d: 'Cento e vinte dias.'
    },
    correctAnswer: 'b',
    explanation: 'A LGA tem duração de 120 dias prorrogável por mais 60 dias (totalizando 180 dias).',
    sourceDoc: 'Apostila SAD - Tópico 5.9 Licença à Gestante (pág. 56)'
  },
  {
    id: 'sadb-43',
    number: 43,
    subjectId: 'sad_basico',
    topic: 'Licença-Paternidade',
    text: 'A Licença-Paternidade concedida ao militar pelo nascimento ou adoção de filho tem a duração regulamentar de:',
    options: {
      a: 'Cinco dias consecutivos.',
      b: 'Dez dias consecutivos.',
      c: 'Vinte dias consecutivos.',
      d: 'Trinta dias consecutivos.'
    },
    correctAnswer: 'c',
    explanation: 'A Licença-Paternidade tem duração de 20 dias consecutivos.',
    sourceDoc: 'Apostila SAD - Tópico 5.9 Licença-Paternidade (pág. 57)'
  },
  {
    id: 'sadb-44',
    number: 44,
    subjectId: 'sad_basico',
    topic: 'Férias Regulamentares',
    text: 'Sobre as férias anuais do militar, o RISAER estabelece que:',
    options: {
      a: 'Podem ser negadas ou canceladas em decorrência de punição disciplinar.',
      b: 'Não podem ser negadas por acúmulo de encargos, necessidade do serviço ou punições disciplinares, tendo a duração de trinta dias.',
      c: 'Devem ser gozadas obrigatoriamente de uma só vez, sendo vedado qualquer fracionamento.',
      d: 'Dependem de prévia aprovação do Ministério da Fazenda.'
    },
    correctAnswer: 'b',
    explanation: 'Férias têm duração de 30 dias e não podem ser negadas por necessidade de serviço ou punição.',
    sourceDoc: 'Apostila SAD - Tópico 5.9 Férias (pág. 57)'
  },
  {
    id: 'sadb-45',
    number: 45,
    subjectId: 'sad_basico',
    topic: 'Afastamento por Núpcias e Luto',
    text: 'Os afastamentos totais do serviço por motivo de NÚPCIAS e de LUTO têm a duração, respectivamente, de:',
    options: {
      a: 'Cinco dias e cinco dias.',
      b: 'Oito dias e oito dias.',
      c: 'Dez dias e cinco dias.',
      d: 'Quinze dias e oito dias.'
    },
    correctAnswer: 'b',
    explanation: 'Núpcias = 8 dias a contar do matrimônio/união; Luto = 8 dias a contar do óbito de parentes previstos.',
    sourceDoc: 'Apostila SAD - Tópico 5.12 e 5.13 Núpcias e Luto (pág. 59-60)'
  },
  {
    id: 'sadb-46',
    number: 46,
    subjectId: 'sad_basico',
    topic: 'Trânsito e Instalação',
    text: 'Os afastamentos totais do serviço por motivo de TRÂNSITO e de INSTALAÇÃO têm a duração máxima, respectivamente, de:',
    options: {
      a: 'Até trinta dias; dez dias.',
      b: 'Quinze dias; quinze dias.',
      c: 'Dez dias; trinta dias.',
      d: 'Vinte dias; cinco dias.'
    },
    correctAnswer: 'a',
    explanation: 'Trânsito: até 30 dias na mudança de localidade; Instalação: 10 dias para atender às necessidades de moradia.',
    sourceDoc: 'Apostila SAD - Tópico 5.14 e 5.15 Trânsito e Instalação (pág. 60)'
  },
  {
    id: 'sadb-47',
    number: 47,
    subjectId: 'sad_basico',
    topic: 'Remuneração Militar - Soldo',
    text: 'A respeito do SOLDO militar, é juridicamente correto afirmar que:',
    options: {
      a: 'Varia conforme o desempenho individual avaliado a cada mês.',
      b: 'É a parcela básica mensal da remuneração e dos proventos, inerente ao posto ou à graduação, e é irredutível.',
      c: 'Pode ser reduzido discricionariamente por ato administrativo do Comandante da OM.',
      d: 'É extinto quando o militar entra em férias regulamentares.'
    },
    correctAnswer: 'b',
    explanation: 'O Soldo é a parcela básica irredutível inerente ao posto ou graduação.',
    sourceDoc: 'Apostila SAD - Tópico 6.2 Conceitos (pág. 64)'
  },
  {
    id: 'sadb-48',
    number: 48,
    subjectId: 'sad_basico',
    topic: 'Remuneração Militar - Adicional de Disponibilidade',
    text: 'O Adicional de Compensação por Disponibilidade Militar é devido em razão da:',
    options: {
      a: 'Participação voluntária em cursos de línguas estrangeiras.',
      b: 'Disponibilidade permanente e da dedicação exclusiva inerentes à vida militar.',
      c: 'Escalação contínua em plantões de final de semana.',
      d: 'Atuação do militar como instrutor de tiro esportivo.'
    },
    correctAnswer: 'b',
    explanation: 'Devido em razão da disponibilidade permanente e dedicação exclusiva.',
    sourceDoc: 'Apostila SAD - Tópico 6.2 Conceitos (pág. 64)'
  },
  {
    id: 'sadb-49',
    number: 49,
    subjectId: 'sad_basico',
    topic: 'Remuneração Militar - Limite Mínimo Líquido',
    text: 'Conforme a MP nº 2.215-10/2001 e o RADA-e, na aplicação de todos os descontos (obrigatórios e autorizados), o militar NÃO pode receber quantia líquida inferior a:',
    options: {
      a: '10% de sua remuneração.',
      b: '20% de sua remuneração.',
      c: '30% de sua remuneração ou proventos.',
      d: '50% de sua remuneração ou proventos.'
    },
    correctAnswer: 'c',
    explanation: 'Limite mínimo irredutível: o militar deve receber ao menos 30% de sua remuneração ou proventos.',
    sourceDoc: 'Apostila SAD - Tópico 6.4 Limite de Descontos (pág. 67)'
  },
  {
    id: 'sadb-50',
    number: 50,
    subjectId: 'sad_basico',
    topic: 'Pensão Militar - Alíquota Vigente',
    text: 'Nos termos da Lei nº 13.954/2019 regulamentada na apostila oficial da FAB, a alíquota da contribuição obrigatória para a pensão militar a partir de 1º de janeiro de 2021 passou a ser de:',
    options: {
      a: '7,5%.',
      b: '9,5%.',
      c: '10,5%.',
      d: '14,0%.'
    },
    correctAnswer: 'c',
    explanation: 'A alíquota é de 10,5% desde 1º de janeiro de 2021.',
    sourceDoc: 'Apostila SAD - Tópico 6.4 Alíquotas de Pensão (pág. 68)'
  }
];
