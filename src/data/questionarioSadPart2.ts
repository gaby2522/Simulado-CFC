import { Question } from '../types/quiz';

export const questionsSadPart2: Question[] = [
  {
    id: 'sad-66',
    number: 66,
    subjectId: 'sad_especifico_256',
    topic: 'Redação Oficial - Menção a Pessoal',
    text: 'Na menção a (.......), constarão posto ou graduação, quadro ou especialidade, número de ordem, nome completo em letras maiúsculas, OM a que pertencer e o cargo.',
    options: {
      a: 'Autoridade.',
      b: 'Militar.',
      c: 'Servidor Público.',
      d: 'Encarregado.'
    },
    correctAnswer: 'b',
    explanation: 'Na menção a militar constam: posto/graduação, quadro/especialidade, SARAM, nome em maiúsculas, OM e cargo.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Padronização (pág. 35)'
  },
  {
    id: 'sad-67',
    number: 67,
    subjectId: 'sad_especifico_256',
    topic: 'Redação Oficial - Menção a Servidor Civil',
    text: 'Na menção a (......), constarão cargo, código, nome completo em letras maiúsculas e número de ordem e de matrícula (Sistema Integrado de Administração de Recursos Humanos - SIAPE).',
    options: {
      a: 'Agente.',
      b: 'Funcionário.',
      c: 'Servidor civil.',
      d: 'Servidor militar.'
    },
    correctAnswer: 'c',
    explanation: 'Na menção ao servidor civil constam o cargo, código, nome completo e matrícula SIAPE.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Padronização (pág. 35)'
  },
  {
    id: 'sad-68',
    number: 68,
    subjectId: 'sad_especifico_256',
    topic: 'Redação Oficial - Citação de Autoridade',
    text: 'Na correspondência oficial, quando for citado o nome da (......), este será precedido do pronome de tratamento, do posto e do quadro; em seguida será mencionado o cargo da referida (......).',
    options: {
      a: 'Chefia.',
      b: 'Autoridade.',
      c: 'Organização.',
      d: 'Pessoa.'
    },
    correctAnswer: 'b',
    explanation: 'Ao citar autoridade, precede-se do pronome de tratamento, posto e quadro, seguido de seu cargo.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Padronização (pág. 35)'
  },
  {
    id: 'sad-69',
    number: 69,
    subjectId: 'sad_especifico_256',
    topic: 'Redação Oficial - Fecho de Cortesia',
    text: 'O fecho de cortesia poderá ser usado quando a correspondência for dirigida a destinatários externos ao COMAER da seguinte forma: para autoridades superiores, inclusive o Presidente da República - “..........................”; para autoridades da mesma hierarquia ou de hierarquia inferior - “..........................”.',
    options: {
      a: 'Respeitosamente, atenciosamente.',
      b: 'Respeitavelmente, agradecidamente.',
      c: 'Atenciosamente, respeitosamente.',
      d: 'Atenciosamente, agradavelmente.'
    },
    correctAnswer: 'a',
    explanation: 'Superiores = "Respeitosamente"; Mesma hierarquia ou subordinados = "Atenciosamente".',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Fecho de cortesia (pág. 35)'
  },
  {
    id: 'sad-70',
    number: 70,
    subjectId: 'sad_especifico_256',
    topic: 'Redação Oficial - Comunicação Interna COMAER',
    text: 'Na correspondência oficial, o fecho de cortesia entre OM do COMAER (.....................................) empregado.',
    options: {
      a: 'Precisa ser.',
      b: 'Obrigatoriamente é.',
      c: 'Deve ser.',
      d: 'Não deve ser.'
    },
    correctAnswer: 'd',
    explanation: 'Entre Organizações Militares do COMAER não se emprega fecho de cortesia.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Fecho de cortesia (pág. 35)'
  },
  {
    id: 'sad-71',
    number: 71,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos do COMAER - Timbres',
    text: 'Os timbres utilizados no âmbito do COMAER são os tipos a seguir: Timbre (...)- impresso em preto, composto do emblema S2 e dos dizeres “MINISTÉRIO DA DEFESA” e “COMANDO DA AERONÁUTICA”. Timbre (...)- impresso em preto, composto do emblema S3 e dos dizeres “MINISTÉRIO DA DEFESA” e “COMANDO DA AERONÁUTICA”. Timbre (...)- impresso em preto, sem emblema, composto de uma linha com os dizeres “MINISTÉRIO DA DEFESA” e “COMANDO DA AERONÁUTICA”, separados entre si por um traço. Sobre os timbres acima suas numerações corretas são:',
    options: {
      a: 'Timbre: 1,2,3.',
      b: 'Timbre: 6,7,8.',
      c: 'Timbre: 4,5,6.',
      d: 'Timbre: 5,6,7.'
    },
    correctAnswer: 'a',
    explanation: 'Na NSCA 10-2, os timbres oficiais básicos são designados como Timbre 1, Timbre 2 e Timbre 3.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Timbres (pág. 35-36)'
  },
  {
    id: 'sad-72',
    number: 72,
    subjectId: 'sad_especifico_256',
    topic: 'Partes do Documento - Preâmbulo',
    text: 'É a parte do documento em que consta o cargo do remetente e do destinatário, seguido do nome da organização. Pode ser endereçado diretamente à OM.',
    options: {
      a: 'Menção.',
      b: 'Preâmbulo.',
      c: 'Priâmbolo.',
      d: 'Referência.'
    },
    correctAnswer: 'b',
    explanation: 'Preâmbulo é a parte do documento onde constam o remetente (Do...) e o destinatário (Ao...).',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Partes do documento (pág. 36)'
  },
  {
    id: 'sad-73',
    number: 73,
    subjectId: 'sad_especifico_256',
    topic: 'Partes do Documento - Epígrafe',
    text: 'É a parte do documento em que constam: 1- Nome, em letras maiúsculas da OM expedidora, sublinhado; 2- Linha de numeração e data. Começa horizontalmente na margem esquerda e é composta de: numeração; localidade e data; e 3- Identificação do Protocolo do COMAER. As informações acima fazem menção a parte do documento chamada:',
    options: {
      a: 'Enunciado.',
      b: 'Epígrafo.',
      c: 'Epígrafe.',
      d: 'Especificação.'
    },
    correctAnswer: 'c',
    explanation: 'A epígrafe identifica a OM expedidora, o número do documento, local, data e protocolo NUP.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Epígrafe (pág. 36)'
  },
  {
    id: 'sad-74',
    number: 74,
    subjectId: 'sad_especifico_256',
    topic: 'Partes do Documento - Ementa',
    text: 'É a parte do documento que sintetiza o conteúdo deste, a fim de permitir, de modo imediato, o conhecimento do objeto tratado. Da (......), constarão o resumo do assunto, a(s) referência(s) e a discriminação do(s) anexo(s), se houver, terminada com ponto final.',
    options: {
      a: 'Emenda.',
      b: 'Ementa.',
      c: 'Descrição.',
      d: 'Desenvolvimento.'
    },
    correctAnswer: 'b',
    explanation: 'Ementa: síntese do assunto, referências e anexos, proporcionando ciência imediata da matéria.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Ementa (pág. 36)'
  },
  {
    id: 'sad-75',
    number: 75,
    subjectId: 'sad_especifico_256',
    topic: 'Estrutura do Texto',
    text: 'O texto é a parte principal do documento. De forma geral, o texto é estruturado da seguinte forma:',
    options: {
      a: 'Introdução, desenvolvimento, conclusão.',
      b: 'Introdução, descrição, finalização.',
      c: 'Interlocução, desenvolvimento, conclusão.',
      d: 'Entrodução, desenvolvimento, conclusão.'
    },
    correctAnswer: 'a',
    explanation: 'O texto divide-se classicamente em Introdução, Desenvolvimento e Conclusão.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Estrutura do texto (pág. 36)'
  },
  {
    id: 'sad-76',
    number: 76,
    subjectId: 'sad_especifico_256',
    topic: 'Divisões do Texto',
    text: 'O texto dos documentos, sempre que necessário, será dividido em: - (......): são as principais divisões do texto; - (......): são as divisões dos parágrafos; - (......): são as divisões dos itens; e - (......): são as divisões das alíneas. Sobre as divisões a opção correta é:',
    options: {
      a: 'Parágrafos, itens, alíneas, subalíneas.',
      b: 'Parágrafos, itens, subalíneas, alíneas.',
      c: 'Itens, parágrafos, alíneas, subalíneas.',
      d: 'Subalíneas, alíneas, parágrafos, itens.'
    },
    correctAnswer: 'a',
    explanation: 'Ordem de desdobramento do texto oficial: Parágrafos -> Itens -> Alíneas -> Subalíneas.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Divisões textuais (pág. 36)'
  },
  {
    id: 'sad-77',
    number: 77,
    subjectId: 'sad_especifico_256',
    topic: 'Rubrica de Documentos',
    text: 'Todas as páginas, exceto a (......) em que consta a assinatura, serão rubricadas pela autoridade remetente, no canto inferior (......).',
    options: {
      a: 'Primeira, esquerdo.',
      b: 'Primeira, direito.',
      c: 'Última, esquerdo.',
      d: 'Última, direito.'
    },
    correctAnswer: 'd',
    explanation: 'Todas as páginas são rubricadas, exceto a última (onde está a assinatura), no canto inferior direito.',
    sourceDoc: 'Apostila SAD - Tópico 3.5 Regras de Assinatura (pág. 36)'
  },
  {
    id: 'sad-78',
    number: 78,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos Tramitáveis',
    text: 'São documentos tramitáveis no COMAER:',
    options: {
      a: 'Despacho, apostila.',
      b: 'Despacho, ofício.',
      c: 'Ofício, ata.',
      d: 'Ofício, apostila.'
    },
    correctAnswer: 'b',
    explanation: 'Documentos tramitáveis são aqueles que circulam entre setores ou OMs: Despacho e Ofício.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Documentos tramitáveis (pág. 36-37)'
  },
  {
    id: 'sad-79',
    number: 79,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos do COMAER - Despacho',
    text: 'É o documento de natureza interlocutória pelo qual a autoridade competente determina, solicita ou informa o que for de sua alçada em determinado processo; nesse contexto, é expedido em continuação a outro documento, geralmente a um Ofício ou Requerimento, de qualquer origem ou natureza, que venha a exigir a abertura de um processo administrativo para o seu equacionamento.',
    options: {
      a: 'Determinatório.',
      b: 'Ordinatório.',
      c: 'Despacho.',
      d: 'Ata.'
    },
    correctAnswer: 'c',
    explanation: 'Despacho: ato interlocutório que dá andamento ao processo em continuação a documento anterior.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Despacho (pág. 36)'
  },
  {
    id: 'sad-80',
    number: 80,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos do COMAER - Ofício',
    text: 'O (......) é o documento padrão de comunicação administrativa no âmbito do Comando da Aeronáutica, que segue, no que couber, o estabelecido pelo Manual de Redação da Presidência da República, que uniformizou a nomenclatura e a diagramação, abolindo, por exemplo, o Memorando. Seus tipos são diferenciados mais pelo destinatário e pela finalidade que pela formatação.',
    options: {
      a: 'Ato.',
      b: 'Ofício.',
      c: 'Apostila.',
      d: 'Parte.'
    },
    correctAnswer: 'b',
    explanation: 'O Ofício é o documento padrão de comunicação administrativa, absorvendo funções do memorando e parte.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Ofício (pág. 36)'
  },
  {
    id: 'sad-81',
    number: 81,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos do COMAER - Despacho Instruindo Processo',
    text: 'É expedido em continuação a outro documento, geralmente a um Ofício ou Requerimento, de qualquer origem ou natureza, que venha a exigir a abertura de um processo administrativo para o seu equacionamento; através deste, a autoridade informa, consulta, indica ou propõe medidas em relação ao assunto do documento principal, inicial do processo. O (.......) instruindo processo permite manter junto ao documento principal (inicial) toda a correspondência trocada entre as Organizações pelas quais o expediente tramita, até a resolução final. As informações acima fazem referência ao:',
    options: {
      a: 'Ato.',
      b: 'Anexo.',
      c: 'Processo.',
      d: 'Despacho.'
    },
    correctAnswer: 'd',
    explanation: 'O Despacho instruindo processo mantém todo o histórico de trocas junto ao documento inicial.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Despacho (pág. 36)'
  },
  {
    id: 'sad-82',
    number: 82,
    subjectId: 'sad_especifico_256',
    topic: 'Substituição Documental - Parte e Parte Pessoal',
    text: 'Ressalta-se que a (......) e a (......) foram suprimidas e substituídas pelo Ofício, no trâmite interno da informação no âmbito de cada OM.',
    options: {
      a: 'Parte, parte pessoal.',
      b: 'Parte, parte impessoal.',
      c: 'Memorando, parte processual.',
      d: 'Parte formal, parte informal.'
    },
    correctAnswer: 'a',
    explanation: 'A Parte e a Parte Pessoal foram suprimidas e incorporadas pelo Ofício no âmbito interno da OM.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Ofício (pág. 37)'
  },
  {
    id: 'sad-83',
    number: 83,
    subjectId: 'sad_especifico_256',
    topic: 'Ofício - Tipos de Caráter',
    text: 'O Ofício também poderá ser endereçado simultaneamente a vários destinatários, adotando o caráter de (.......) ou, ainda, ser encaminhado a uma coletividade pré-definida de destinatários, em caráter de (.......), por meio das funcionalidades e dos procedimentos disponibilizados pelo SIGADAER. São os dois tipos de caráter que um ofício possui:',
    options: {
      a: 'Ostensivo, restrito.',
      b: 'Difral, circular.',
      c: 'Geral, circulatório.',
      d: 'Circular, Difral.'
    },
    correctAnswer: 'd',
    explanation: 'O ofício com múltiplos destinatários pode ter caráter Circular ou Difral (via SIGADAER).',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Ofício Circular e Difral (pág. 37)'
  },
  {
    id: 'sad-84',
    number: 84,
    subjectId: 'sad_especifico_256',
    topic: 'Ofício - Restrição ao CMTAER',
    text: 'O Ofício, em caráter de (......), não poderá ser endereçado ao CMTAER. Nesse caso, deverá ser confeccionado um documento específico para a referida autoridade.',
    options: {
      a: 'Controle.',
      b: 'Restrição.',
      c: 'Circular.',
      d: 'Difral.'
    },
    correctAnswer: 'c',
    explanation: 'Ofício em caráter Circular não pode ser endereçado ao Comandante da Aeronáutica.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Ofício Circular (pág. 37)'
  },
  {
    id: 'sad-85',
    number: 85,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos Não Tramitáveis',
    text: 'São documentos não tramitáveis, os seguintes documentos:',
    options: {
      a: 'Apostila, ato, aviso externo, certidão, declaração, despacho, requerimento.',
      b: 'Apostila, ata, aviso interno, certidão, declaração, parecer, requerimento.',
      c: 'Ata, aviso interno, certidão, declaração, comparecer, requerimento, apostila.',
      d: 'Apostila, ata, aviso interno, certificação, comprovação, parecer, requerimento.'
    },
    correctAnswer: 'b',
    explanation: 'Documentos não tramitáveis: Apostila, Ata, Aviso Interno, Certidão, Declaração, Parecer e Requerimento.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Documentos do COMAER (pág. 37-38)'
  },
  {
    id: 'sad-86',
    number: 86,
    subjectId: 'sad_especifico_256',
    topic: 'RADA-e RCA 12-1 - Estrutura',
    text: 'O RCA 12-1 “Regulamento de Administração da Aeronáutica, na forma eletrônica (RADA-e), tem a finalidade de estabelecer as normas gerais para suas organizações e as suas atribuições e responsabilidades de seus agentes, bem como as dos detentores de bens e valores públicos do Comando da Aeronáutica (COMAER). É constituído de duas partes são estas:',
    options: {
      a: 'Parte inespecífica, parte geral.',
      b: 'Parte específica, parte genérica.',
      c: 'Parte específica, parte geral.',
      d: 'Parte específica, parte total.'
    },
    correctAnswer: 'c',
    explanation: 'O RADA-e é composto de duas partes: parte específica (manuais eletrônicos) e parte geral.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Regulamento de Administração (pág. 44)'
  },
  {
    id: 'sad-87',
    number: 87,
    subjectId: 'sad_especifico_256',
    topic: 'Competência RADA-e',
    text: 'A competência para acompanhar, atualizar, alterar, revogar, modificar e divulgar os manuais eletrônicos de procedimentos e incluir novos manuais fica delegada ao (......................................................), permitida a subdelegação.',
    options: {
      a: 'Secretário de Economia, Finanças e Administração da Aeronáutica.',
      b: 'Secretário de Segurança e Defesa da Aeronáutica.',
      c: 'Comandante da Aeronáutica.',
      d: 'Secretário de Economia, Infraestrutura e Administração da Aeronáutica.'
    },
    correctAnswer: 'a',
    explanation: 'A competência é delegada ao Secretário de Economia, Finanças e Administração da Aeronáutica (SEFA).',
    sourceDoc: 'Apostila SAD - Tópico 4.1 RADA-e (pág. 44)'
  },
  {
    id: 'sad-88',
    number: 88,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos Oficiais - Apostila',
    text: 'É a averbação feita no texto de documentos normativos ou ordinatórios no sentido de corrigir alguma inexatidão do texto original (desde que essa correção não venha a alterar a substância do ato já publicado), ou acrescentar informação nova a esse registro (informação essa que faltava e deixava o registro incompleto).',
    options: {
      a: 'Retratação.',
      b: 'Correção.',
      c: 'Aprovação.',
      d: 'Apostila.'
    },
    correctAnswer: 'd',
    explanation: 'Apostila é a averbação feita no texto para corrigir inexatidão ou acrescentar dado faltante.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Apostila (pág. 37)'
  },
  {
    id: 'sad-89',
    number: 89,
    subjectId: 'sad_especifico_256',
    topic: 'Apostila em Diploma Oficial',
    text: 'O registro, em diploma oficial, de ato baixado por autoridade competente que venha a atualizar o documento também constitui uma:',
    options: {
      a: 'Apostila.',
      b: 'Retratação.',
      c: 'Atualização.',
      d: 'Ata.'
    },
    correctAnswer: 'a',
    explanation: 'O registro em diploma oficial que atualiza o documento é uma apostila.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Apostila (pág. 37)'
  },
  {
    id: 'sad-90',
    number: 90,
    subjectId: 'sad_especifico_256',
    topic: 'Bens Patrimoniais - Abandono',
    text: 'É a renúncia ao direito de propriedade de material classificado como irrecuperável, depois de verificada a impossibilidade ou a inconveniência de sua alienação. O (.......) também poderá ocorrer por motivo de força maior ou em casos fortuitos, como, por exemplo: acidente aeronáutico, enchente, incêndio ou outros.',
    options: {
      a: 'Dissídio.',
      b: 'Abandono.',
      c: 'Alienação.',
      d: 'Desistência.'
    },
    correctAnswer: 'b',
    explanation: 'Abandono é a renúncia ao direito de propriedade de bem irrecuperável inalienável ou perdido em sinistro.',
    sourceDoc: 'Apostila SAD - Tópico 4.3 Gestão Patrimonial (pág. 48)'
  },
  {
    id: 'sad-91',
    number: 91,
    subjectId: 'sad_especifico_256',
    topic: 'Agentes da Administração - ACI',
    text: 'É o Agente da Administração especificamente designado pelo Comandante de Organização Militar (OM) para verificar, avaliar e supervisionar os atos e os fatos executados pela Administração, observando os Princípios da Administração Pública e os Constitucionais basilares que norteiam a Administração Pública. É o responsável designado para verificar, avaliar e supervisionar os atos e os fatos administrativos, em conformidade com os princípios da legalidade, impessoalidade, moralidade, publicidade, eficiência e eficácia. Estamos falando sobre:',
    options: {
      a: 'Agente de controle oficial.',
      b: 'Agente de controle interino.',
      c: 'Agente de controle externo.',
      d: 'Agente de controle interno.'
    },
    correctAnswer: 'd',
    explanation: 'Agente de Controle Interno (ACI) assessora o Comandante e verifica a lisura dos atos e fatos administrativos.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Agente de Controle Interno (pág. 45)'
  },
  {
    id: 'sad-92',
    number: 92,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos do COMAER - Ata',
    text: 'É o registro de fatos ou ocorrências verificadas e resoluções tomadas por seus membros, numa assembleia, sessão ou reunião. A (......) possui estrutura própria e pode conter anexos, mencionados em seu corpo. A (.......) é composta de: timbre, epígrafe e título (onde constará: “......”, em letras maiúsculas, centralizado).',
    options: {
      a: 'Apreciação.',
      b: 'Certidão.',
      c: 'Ata.',
      d: 'Documentação.'
    },
    correctAnswer: 'c',
    explanation: 'A Ata registra ocorrências e decisões tomadas em reunião ou assembleia com formato padronizado.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Ata (pág. 37)'
  },
  {
    id: 'sad-93',
    number: 93,
    subjectId: 'sad_especifico_256',
    topic: 'Cargos e Funções - Adjunto',
    text: 'É o agente público responsável por assessorar e auxiliar os titulares de cargos de chefia em processo de tomada de decisão, com atribuições definidas em Regimento Interno ou em normas específicas.',
    options: {
      a: 'Auxiliador geral.',
      b: 'Adjunto.',
      c: 'Encarregado.',
      d: 'Relator.'
    },
    correctAnswer: 'b',
    explanation: 'O Adjunto assessora e auxilia os titulares de cargos de chefia no processo decisório.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Conceituações RADA-e (pág. 45)'
  },
  {
    id: 'sad-94',
    number: 94,
    subjectId: 'sad_especifico_256',
    topic: 'Patrimônio Público - Alienação',
    text: 'É toda a transferência de propriedade ou de administração, onerosa ou gratuita, sob a forma de venda, permuta, doação, devolução ao doador, dação em pagamento, legitimação de posse ou concessão de domínio ou reversão à Secretaria do Patrimônio da União (SPU).',
    options: {
      a: 'Alienação.',
      b: 'Alinhamento.',
      c: 'Movimentação.',
      d: 'Redirecionamento.'
    },
    correctAnswer: 'a',
    explanation: 'Alienação: transferência de propriedade/administração de bem público nas formas legais.',
    sourceDoc: 'Apostila SAD - Tópico 4.3 Gestão Patrimonial (pág. 48)'
  },
  {
    id: 'sad-95',
    number: 95,
    subjectId: 'sad_especifico_256',
    topic: 'Improbidade Administrativa - Dano ao Erário',
    text: 'É o ato de improbidade administrativa que causa lesão ao erário, ou seja, qualquer ação ou omissão, dolosa ou culposa, que enseje perda patrimonial, desvio, apropriação, malbaratamento ou dilapidação dos bens ou haveres da União.',
    options: {
      a: 'Dano ao erário.',
      b: 'Dano ao itinerário.',
      c: 'Culpa.',
      d: 'Dolo.'
    },
    correctAnswer: 'a',
    explanation: 'Dano ao Erário é o ato de improbidade que causa lesão aos bens ou haveres da União.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Dano ao Erário (pág. 46)'
  },
  {
    id: 'sad-96',
    number: 96,
    subjectId: 'sad_especifico_256',
    topic: 'Regras da Ata - Assinaturas',
    text: 'As assinaturas da ata serão dispostas em ordem de (......), com exceção do (......), que será o último nome constante da lista. Serão ainda organizadas em duas colunas no final da ata, com o texto centralizado dentro de cada coluna. Caso o número de assinaturas seja ímpar, a última assinatura ficará localizada do lado (.......).',
    options: {
      a: 'Antiguidade, secretário, direito.',
      b: 'Nominal, chefe, esquerdo.',
      c: 'Antiguidade, secretário, esquerdo.',
      d: 'Posto, secretário, direito.'
    },
    correctAnswer: 'c',
    explanation: 'Na ata as assinaturas seguem antiguidade, o secretário assina por último e assinatura ímpar fica à esquerda.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Ata (pág. 37)'
  },
  {
    id: 'sad-97',
    number: 97,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos do COMAER - Aviso Interno',
    text: 'É o documento de uso exclusivo do CMTAER, que tem como função baixar determinações, interpretar dispositivos regulamentares, fazer recomendações ou determinar a execução de providências necessárias ao serviço.',
    options: {
      a: 'Aviso direto.',
      b: 'Aviso externo.',
      c: 'Aviso geral.',
      d: 'Aviso interno.'
    },
    correctAnswer: 'd',
    explanation: 'O Aviso Interno é privativo do Comandante da Aeronáutica (CMTAER).',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Aviso Interno (pág. 38)'
  },
  {
    id: 'sad-98',
    number: 98,
    subjectId: 'sad_especifico_256',
    topic: 'Administração Pública - Conceito',
    text: 'A (.......) ou, simplesmente, (......), em sentido concreto e orgânico, pode ser entendida como o conjunto formado pelos órgãos, serviços e agentes públicos (Administração Direta), bem como pelas demais pessoas coletivas públicas (Administração Indireta), com competência legal para o exercício da função administrativa sob a responsabilidade do Estado.',
    options: {
      a: 'Administração gerencial, administrar.',
      b: 'Administração pública, administração.',
      c: 'Administração privada, administração.',
      d: 'Administração pública, administrador.'
    },
    correctAnswer: 'b',
    explanation: 'Administração Pública ou Administração em sentido concreto e orgânico.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Conceituações RADA-e (pág. 44-45)'
  },
  {
    id: 'sad-99',
    number: 99,
    subjectId: 'sad_especifico_256',
    topic: 'Prestação de Contas',
    text: 'É o ato formal por meio do qual é realizada a justificação dos atos e fatos administrativos ocorridos numa determinada gestão; é a demonstração a uma autoridade delegante se os objetivos propostos foram cumpridos e se o processo para atingi-los teve adequação com as regras e princípios estabelecidos. A (......) poderá ocorrer de forma cotidiana ou ao final de determinados ciclos.',
    options: {
      a: 'Prestação de verbas.',
      b: 'Processo de prestação.',
      c: 'Prestação de contas.',
      d: 'Prestação de dados.'
    },
    correctAnswer: 'c',
    explanation: 'Prestação de Contas é a demonstração justificada da aplicação de recursos e cumprimento de metas.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 / RADA-e (pág. 45-46)'
  },
  {
    id: 'sad-100',
    number: 100,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos do COMAER - Certidão',
    text: 'É o documento legal que certifica algo já registrado e de que se tem provas. A (......) expressa o conteúdo de outro documento oficial e original. É fornecida mediante requerimento do interessado; O requerente deve informar se é a primeira vez que requer. No caso de reiteração, deve ser esclarecido o motivo.',
    options: {
      a: 'Certidão.',
      b: 'Requerimento.',
      c: 'Certificação.',
      d: 'Autorização.'
    },
    correctAnswer: 'a',
    explanation: 'Certidão reproduz formalmente registro existente do qual se tem prova documental.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Certidão (pág. 38)'
  },
  {
    id: 'sad-101',
    number: 101,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos do COMAER - Declaração',
    text: 'É o documento de natureza testemunhal pelo qual um servidor, em razão do cargo, fornece informação, afirmando, ou não, a veracidade de um fato ou de uma situação de que tenha conhecimento. É, em geral, a favor de uma pessoa e confeccionado a seu pedido.',
    options: {
      a: 'Comprovação.',
      b: 'Declaração.',
      c: 'Solicitação.',
      d: 'Comprobatório.'
    },
    correctAnswer: 'b',
    explanation: 'Declaração: documento de natureza testemunhal emitido pelo servidor em razão do cargo.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Declaração (pág. 38)'
  },
  {
    id: 'sad-102',
    number: 102,
    subjectId: 'sad_especifico_256',
    topic: 'Agentes da Administração',
    text: 'É todo indivíduo que, investido de atribuições e de responsabilidades definidas em ato próprio, realiza atividades administrativas de gestão orçamentária, financeira, contábil, patrimonial e de recursos humanos do COMAER. O Agente da Administração é uma espécie de Agente Público, militar ou servidor civil, que atua no COMAER.',
    options: {
      a: 'Agente de administração.',
      b: 'Agente de regulamentação.',
      c: 'Agente de supervisão.',
      d: 'Agente responsável.'
    },
    correctAnswer: 'a',
    explanation: 'Agente da Administração realiza atividades de gestão orçamentária, financeira, contábil e de pessoal.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Agente da Administração (pág. 45)'
  },
  {
    id: 'sad-103',
    number: 103,
    subjectId: 'sad_especifico_256',
    topic: 'Bens Patrimoniais - Cessão',
    text: 'Modalidade de movimentação de bens patrimoniais, com transferência gratuita de posse e troca de responsabilidade, entre Órgãos ou Entidades da Administração Pública Federal Direta, Autárquica e Fundacional do Poder Executivo, ou dentre estes e outros integrantes de quaisquer dos demais Poderes da União.',
    options: {
      a: 'Desprendimento.',
      b: 'Cedimento.',
      c: 'Cessão.',
      d: 'Cesarão.'
    },
    correctAnswer: 'c',
    explanation: 'Cessão: modalidade de transferência gratuita de posse e responsabilidade de bem entre órgãos públicos.',
    sourceDoc: 'Apostila SAD - Tópico 4.3 Gestão Patrimonial (pág. 48)'
  },
  {
    id: 'sad-104',
    number: 104,
    subjectId: 'sad_especifico_256',
    topic: 'Características da Declaração',
    text: 'A (......) possui duração transitória, devendo constar no texto o prazo de validade do mesmo, bem como o fim a que se presta. Como normalmente se destina a um órgão externo ao COMAER, o posto e o cargo do signatário serão impressos, obrigatoriamente, por extenso.',
    options: {
      a: 'Escrituração.',
      b: 'Formulaçâo.',
      c: 'Solicitação.',
      d: 'Declaração.'
    },
    correctAnswer: 'd',
    explanation: 'A Declaração possui validade transitória e nela o posto/cargo do signatário vai por extenso.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Declaração (pág. 38)'
  },
  {
    id: 'sad-105',
    number: 105,
    subjectId: 'sad_especifico_256',
    topic: 'Governança no COMAER',
    text: 'As (.......) do COMAER exercem a governança por meio das funções de Decisão, Direcionamento, Supervisão, Controle e Integração.',
    options: {
      a: 'OM’s.',
      b: 'Chefias.',
      c: 'Entidades.',
      d: 'Autoridades.'
    },
    correctAnswer: 'a',
    explanation: 'As Organizações Militares (OMs) do COMAER exercem governança nessas cinco vertentes funcionais.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Governança RADA-e (pág. 45)'
  },
  {
    id: 'sad-106',
    number: 106,
    subjectId: 'sad_especifico_256',
    topic: 'Autoridade Máxima Administrativa',
    text: 'O (.......) é a mais alta autoridade administrativa do Comando da Aeronáutica (COMAER) e é o principal responsável pelo cumprimento deste Manual.',
    options: {
      a: 'Comandante do GAP.',
      b: 'Comandante da aeronáutica.',
      c: 'Ministro da defesa.',
      d: 'Secretário de economia, fianças, e administração da aeronáutica.'
    },
    correctAnswer: 'b',
    explanation: 'O Comandante da Aeronáutica é a mais alta autoridade administrativa do COMAER.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 RADA-e (pág. 44-45)'
  },
  {
    id: 'sad-107',
    number: 107,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos do COMAER - Parecer',
    text: 'É o documento pelo qual o signatário emite uma opinião especializada fundamentada, técnica ou científica, sobre determinado assunto, que poderá dar suporte à tomada de decisão. Os Pareceres recebem numeração corrida dentro de cada órgão, seguindo-se a indicação do ano.',
    options: {
      a: 'Requerimento.',
      b: 'Esclarecimento.',
      c: 'Parecer.',
      d: 'Apreciação.'
    },
    correctAnswer: 'c',
    explanation: 'Parecer: opinião técnica/científica fundamentada que subsidia a tomada de decisão.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Parecer (pág. 38)'
  },
  {
    id: 'sad-108',
    number: 108,
    subjectId: 'sad_especifico_256',
    topic: 'Agentes da Administração - Agente Diretor',
    text: 'É a autoridade, Agente da Administração, responsável pela execução, ajuste ou revisão do planejamento da Organização Militar sob seu Comando, Chefia ou Direção, e pela organização e direção das atividades administrativas necessárias à sua implementação e controle; se responsabiliza pelos atos e pelos fatos administrativos praticados na sua OM.',
    options: {
      a: 'Agente diretor.',
      b: 'Agente de chefia.',
      c: 'Agente ordinatório.',
      d: 'Agente de execução.'
    },
    correctAnswer: 'a',
    explanation: 'Agente Diretor: autoridade máxima responsável pela gestão e direção administrativa da OM.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Agente Diretor (pág. 45)'
  },
  {
    id: 'sad-109',
    number: 109,
    subjectId: 'sad_especifico_256',
    topic: 'Excludentes de Responsabilidade',
    text: 'São os acontecimentos imprevisíveis e inevitáveis que se encontram fora do âmbito do domínio da vontade humana. Quando não há vontade humana, não há dolo nem culpa.',
    options: {
      a: 'Caso importuno ou de força maior.',
      b: 'Caso fortuito ou de força maior.',
      c: 'Caso fortuito ou de força menor.',
      d: 'Caso importuno de força menor.'
    },
    correctAnswer: 'b',
    explanation: 'Caso fortuito e força maior são eventos imprevisíveis/inevitáveis fora do controle da vontade.',
    sourceDoc: 'Apostila SAD - Tópico 4.4 Responsabilidade (pág. 50)'
  },
  {
    id: 'sad-110',
    number: 110,
    subjectId: 'sad_especifico_256',
    topic: 'Parecer Excepcional',
    text: 'Quando o parecer, excepcionalmente, não puder se encaixar nas especificidades acima mencionadas, poderá ser apresentado em forma de (......).',
    options: {
      a: 'Documento.',
      b: 'Arquivo.',
      c: 'Anexo.',
      d: 'Ofício.'
    },
    correctAnswer: 'd',
    explanation: 'Quando o parecer não seguir o formato padrão da NSCA 10-2, pode ser encaminhado na forma de Ofício.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Parecer (pág. 38)'
  },
  {
    id: 'sad-111',
    number: 111,
    subjectId: 'sad_especifico_256',
    topic: 'Documentos do COMAER - Requerimento',
    text: 'É o documento pelo qual o peticionário dirige-se a uma autoridade para pleitear direitos ou benefícios, buscando a satisfação de uma pretensão que, via de regra, esteja prevista em legislação vigente. O (......) é redigido em linguagem simples, comedida e dirigido à autoridade competente, com base em fatos e fundamentos relatados.',
    options: {
      a: 'Requerimento.',
      b: 'Petição.',
      c: 'Reconciliação.',
      d: 'Regulamentação.'
    },
    correctAnswer: 'a',
    explanation: 'Requerimento é a petição do militar pleiteando direito ou benefício previsto na legislação.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Requerimento (pág. 38)'
  },
  {
    id: 'sad-112',
    number: 112,
    subjectId: 'sad_especifico_256',
    topic: 'Agentes da Administração - Agente Executor',
    text: 'É o Agente da Administração que tem atribuições e funções definidas em leis, regulamentos, regimentos ou outras disposições ou normativos legais. Qualquer pessoa física a que se tenha atribuído competência para exercer atividade administrativa, de acordo com a legislação em vigor, é um agente (......) e, nesta condição, responde pelos atos e pelos fatos administrativos resultantes de sua ação ou sua omissão.',
    options: {
      a: 'Agente executor ou gestor.',
      b: 'Agente extrator ou gestor.',
      c: 'Agente interino ou executor.',
      d: 'Agente responsável ou organizador.'
    },
    correctAnswer: 'a',
    explanation: 'Agente Executor (ou Gestor) tem atribuições operacionais definidas e responde por ação ou omissão.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Agente Executor (pág. 45)'
  },
  {
    id: 'sad-113',
    number: 113,
    subjectId: 'sad_especifico_256',
    topic: 'Estrutura da OM - Cargo',
    text: 'É a posição, dentro da estrutura organizacional de uma OM, definida por lei, regulamento ou regimento, ocupada por Agente Público, ao qual correspondem atribuições gerais e específicas definidas em normativo.',
    options: {
      a: 'Titular.',
      b: 'Nomeação.',
      c: 'Cargo.',
      d: 'Encargo.'
    },
    correctAnswer: 'c',
    explanation: 'Cargo: posição na estrutura da OM com atribuições previstas em regulamento ou regimento.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Conceituações RADA-e (pág. 46)'
  },
  {
    id: 'sad-114',
    number: 114,
    subjectId: 'sad_especifico_256',
    topic: 'Competência do CMTAER',
    text: 'Compete ao (......) propor a organização e providenciar o preparo da Força Aérea Brasileira (FAB). Ele é o principal responsável pelas atividades administrativas do COMAER.',
    options: {
      a: 'Secretário de Economia, Finanças e Administração da Aeronáutica.',
      b: 'Comandante do comprep.',
      c: 'Ministro da defesa.',
      d: 'Comandante da aeronáutica.'
    },
    correctAnswer: 'd',
    explanation: 'Compete ao Comandante da Aeronáutica preparar a Força e responder pelas diretrizes administrativas máximas.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 RADA-e (pág. 44-45)'
  },
  {
    id: 'sad-115',
    number: 115,
    subjectId: 'sad_especifico_256',
    topic: 'Regras de Requerimento',
    text: 'O (......) deve declarar ser a primeira vez que requer no respectivo processo; quando (......), após a primeira vez, apresentará, nas vezes posteriores, argumentos ou fatos novos que justifiquem a revisão do despacho anterior.',
    options: {
      a: 'Requerente, solicitar.',
      b: 'Requerente, requerer.',
      c: 'Indivíduo, solicitar.',
      d: 'Militar, recorrer.'
    },
    correctAnswer: 'b',
    explanation: 'O requerente declara se é a 1ª vez; ao requerer novamente, deve apresentar fatos novos.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Requerimento (pág. 38)'
  },
  {
    id: 'sad-116',
    number: 116,
    subjectId: 'sad_especifico_256',
    topic: 'Atividades Administrativas',
    text: 'Trata-se do conjunto de ações e de tarefas realizadas pelas OM, constituídas pelos atos e pelos fatos administrativos resultantes da atuação de seus Agentes da Administração, em todos os níveis considerados e no pleno exercício de suas atribuições, respeitadas suas competências legais.',
    options: {
      a: 'Atividades coordenadoras.',
      b: 'Atividades administrativas.',
      c: 'Atividades gerenciais.',
      d: 'Atividades de cooperação.'
    },
    correctAnswer: 'b',
    explanation: 'Atividades Administrativas: conjunto de atos e fatos materiais que concretizam o funcionamento da OM.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Conceituações RADA-e (pág. 44-45)'
  },
  {
    id: 'sad-117',
    number: 117,
    subjectId: 'sad_especifico_256',
    topic: 'Agente Responsável - Conceito',
    text: 'É todo aquele que utilize, arrecade, guarde, gerencie ou responda por dinheiros, bens e valores públicos da União ou que, em seu nome, assuma obrigação de natureza pecuniária, bem como o gestor de quaisquer recursos repassados pela União:',
    options: {
      a: 'Agente responsável.',
      b: 'Agente irrepreensível.',
      c: 'Agente transponível.',
      d: 'Agente gerenciador.'
    },
    correctAnswer: 'a',
    explanation: 'Agente Responsável: quem gerencia, guarda ou responde por valores e bens públicos federais.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Agente Responsável (pág. 46)'
  },
  {
    id: 'sad-118',
    number: 118,
    subjectId: 'sad_especifico_256',
    topic: 'Processos de Gestão no COMAER',
    text: 'A definição e o atendimento das necessidades da Administração no COMAER decorrem de três processos de gestão distintos:',
    options: {
      a: 'Laboratorial, técnico, financeiro.',
      b: 'Gerencial, liberal, organizacional.',
      c: 'Operacional, científico, econômico-financeiro.',
      d: 'Operacional, técnico, econômico-financeiro.'
    },
    correctAnswer: 'd',
    explanation: 'Processos de gestão da Aeronáutica: operacional, técnico e econômico-financeiro.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Processos de Gestão RADA-e (pág. 45)'
  },
  {
    id: 'sad-119',
    number: 119,
    subjectId: 'sad_especifico_256',
    topic: 'Reiteração de Requerimento',
    text: 'Em casos de repetições de (......) sobre o mesmo assunto, a autoridade que indeferir o último requerimento poderá declará-lo encerrado na esfera (......); os requerimentos encaminhados em desacordo com a presente publicação poderão ser restituídos aos interessados, sendo estes informados do motivo da (......). É vedado ao militar ou civil dirigir o mesmo pedido, simultaneamente, a mais de uma (.......) administrativa.',
    options: {
      a: 'Solicitações, processual, devolução, autoridade.',
      b: 'Processos, administrativa, anulação, organização.',
      c: 'Requerimentos, administrativa, devolução, autoridade.',
      d: 'Requerimentos, atual, decisão, procuradoria.'
    },
    correctAnswer: 'c',
    explanation: 'Repetição de requerimentos encerra na esfera administrativa com devolução fundamentada.',
    sourceDoc: 'Apostila SAD - Tópico 3.6 Requerimento (pág. 38)'
  },
  {
    id: 'sad-120',
    number: 120,
    subjectId: 'sad_especifico_256',
    topic: 'Agente Público - Conceito Legal',
    text: 'Todo indivíduo, servidor ou não, que exerça, ainda que transitoriamente ou sem remuneração, por eleição, nomeação, designação, contratação ou qualquer outra forma de investidura ou vínculo, mandato, cargo, encargo, emprego, comissão ou função nas entidades da Administração Direta, Indireta ou Fundacional:',
    options: {
      a: 'Agente público.',
      b: 'Agente federal.',
      c: 'Agente temporário.',
      d: 'Agente atípico.'
    },
    correctAnswer: 'a',
    explanation: 'Conceito amplo de Agente Público adotado pela Lei 8.429/1992 e pelo RADA-e.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Agente Público (pág. 45)'
  },
  {
    id: 'sad-121',
    number: 121,
    subjectId: 'sad_especifico_256',
    topic: 'Sistemas do Governo - SIAFI',
    text: 'É o sistema informatizado instituído pelo Governo Federal para o acompanhamento da execução orçamentária, financeira e patrimonial dos Órgãos da Administração Federal.',
    options: {
      a: 'SILOMS.',
      b: 'SIAFI.',
      c: 'SICAF.',
      d: 'SIGAD.'
    },
    correctAnswer: 'b',
    explanation: 'SIAFI: Sistema Integrado de Administração Financeira do Governo Federal.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Sistemas Informatizados (pág. 45)'
  },
  {
    id: 'sad-122',
    number: 122,
    subjectId: 'sad_especifico_256',
    topic: 'Administração Financeira - Suprimento de Fundos',
    text: 'É a entrega de numerário a um Agente da Administração, sempre precedida de empenho na dotação própria para atendimento de despesas que não possam subordinar-se ao processo normal de aplicação dos créditos ou que não possam ser atendidas pela via bancária.',
    options: {
      a: 'Suplementos de fundos.',
      b: 'Suprimentos de erário.',
      c: 'Suprimentos de renda.',
      d: 'Suprimentos de fundos.'
    },
    correctAnswer: 'd',
    explanation: 'Suprimento de Fundos é adiantamento em dinheiro precedido de empenho para despesas excepcionais.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Suprimento de Fundos (pág. 46)'
  },
  {
    id: 'sad-123',
    number: 123,
    subjectId: 'sad_especifico_256',
    topic: 'Unidade Administrativa - UA',
    text: 'É a OM, ou fração de OM, encarregada, por atos legais, da gerência de patrimônio e de recursos creditícios ou financeiros a ela especificamente atribuídos, no todo ou em parte.',
    options: {
      a: 'Unidade de fiscalização.',
      b: 'Unidade de supervisão.',
      c: 'Unidade administrativa.',
      d: 'Unidade de gerenciamento.'
    },
    correctAnswer: 'c',
    explanation: 'Unidade Administrativa (UA): OM ou fração encarregada da gestão de patrimônio e créditos.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Unidade Administrativa (pág. 45)'
  },
  {
    id: 'sad-124',
    number: 124,
    subjectId: 'sad_especifico_256',
    topic: 'Direito Administrativo - Ato Administrativo',
    text: 'É toda manifestação unilateral de vontade da Administração Pública, que, agindo nesta qualidade, tenha por fim imediato adquirir, resguardar, transferir, modificar, extinguir ou declarar direitos, impor obrigações aos administrados ou a si própria, respeitados os princípios legais, tendo como requisitos necessários à sua formação: a competência, a finalidade, a forma, o motivo e o objeto.',
    options: {
      a: 'Ato parcial.',
      b: 'Ato imparcial.',
      c: 'Ato ordinatório.',
      d: 'Ato administrativo.'
    },
    correctAnswer: 'd',
    explanation: 'Conceito clássico de Ato Administrativo e seus 5 requisitos de validade (competência, finalidade, forma, motivo, objeto).',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Ato Administrativo (pág. 45)'
  },
  {
    id: 'sad-125',
    number: 125,
    subjectId: 'sad_especifico_256',
    topic: 'Agentes da Administração - Comissão',
    text: 'São agentes da administração que recebem, na forma de (......), a atribuição temporária e específica, designada pela autoridade competente, para o exercício de determinada tarefa ou encargo definido em ato próprio pela Administração, não catalogados na estrutura regimental da OM.',
    options: {
      a: 'Comissão.',
      b: 'Comitiva.',
      c: 'Assembleia.',
      d: 'Concessão.'
    },
    correctAnswer: 'a',
    explanation: 'Comissão: grupo de agentes com atribuição temporária e específica para tarefa não catalogada no regimento.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Comissões (pág. 45-46)'
  },
  {
    id: 'sad-126',
    number: 126,
    subjectId: 'sad_especifico_256',
    topic: 'Responsabilidade - Culpa',
    text: 'Caracteriza-se (......) quando o agente, deixando de empregar cautela, atenção ou diligência ordinária ou especial, a que estava obrigado em face das circunstâncias, não prevê o resultado que podia prever ou, prevendo-o, supõe levianamente que não se realizaria ou que poderia evitá-lo. A conduta (........) pode se exteriorizar sob três formas: negligência, imprudência e imperícia. Tal ação refere-se a:',
    options: {
      a: 'Culpa, dolosa.',
      b: 'Dolo, dolosa.',
      c: 'Culpa, culposa.',
      d: 'Dolo, culposa.'
    },
    correctAnswer: 'c',
    explanation: 'A conduta culposa decorre de negligência, imprudência ou imperícia.',
    sourceDoc: 'Apostila SAD - Tópico 4.4 Culpa e Dolo (pág. 50)'
  },
  {
    id: 'sad-127',
    number: 127,
    subjectId: 'sad_especifico_256',
    topic: 'Comandante da OM',
    text: 'É a designação genérica equivalente a cargo de Comando, Chefia, Direção ou outra denominação, dada a militar que, investido de autoridade competente, for responsável pela administração, emprego, instrução e disciplina de uma Organização Militar (OM), podendo ainda ser responsável pela emissão de processo de prestação de contas; o (.......) é o Dirigente Máximo da Unidade Administrativa (UA).',
    options: {
      a: 'Chefe imediato.',
      b: 'Comandante.',
      c: 'Chefe.',
      d: 'Diretor.'
    },
    correctAnswer: 'b',
    explanation: 'Comandante é a designação genérica para o titular da OM / UA.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Comandante (pág. 45)'
  },
  {
    id: 'sad-128',
    number: 128,
    subjectId: 'sad_especifico_256',
    topic: 'Funções da Administração no COMAER',
    text: 'A Administração no COMAER tem como finalidade o (......), a (......), a (.......) e o (......) inerentes ao emprego de recursos de toda ordem, com o propósito de permitir o cumprimento da destinação constitucional do COMAER e a realização de suas atribuições subsidiárias definidas em lei.',
    options: {
      a: 'Objetivação, aprimoração, direção, controle.',
      b: 'Planejamento, organização, direção, controle.',
      c: 'Gerenciamento, padronização, organização, empenho.',
      d: 'Controle, operação, aprimoração, desempenho.'
    },
    correctAnswer: 'b',
    explanation: 'Quatro funções clássicas da administração no RADA: planejamento, organização, direção e controle.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 RADA-e Finalidade (pág. 44)'
  },
  {
    id: 'sad-129',
    number: 129,
    subjectId: 'sad_especifico_256',
    topic: 'Processos de Gestão - Operacional',
    text: 'O (......) é determinado pela autoridade competente, em função da missão definida ou do programa de trabalho atribuído a cumprir, e tem por objetivo a estimativa das necessidades de toda ordem, a disponibilização de recursos humanos capacitados e integrados à realidade da FAB:',
    options: {
      a: 'Processo ordinatório.',
      b: 'Processo organizacional.',
      c: 'Processo gerencial.',
      d: 'Processo operacional.'
    },
    correctAnswer: 'd',
    explanation: 'Processo Operacional: visa estimar necessidades e prover meios para o cumprimento da missão.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Processos de Gestão (pág. 45)'
  },
  {
    id: 'sad-130',
    number: 130,
    subjectId: 'sad_especifico_256',
    topic: 'Delegação de Competência',
    text: 'É o ato administrativo pelo qual uma autoridade superior transfere competências, no todo ou em parte, a Agente da Administração, para assegurar maior rapidez, transparência e objetividade nas tomadas de decisões, adequando-as e situando-as na proximidade dos fatos, das pessoas ou dos problemas a atender.',
    options: {
      a: 'Delegação de Competência.',
      b: 'Título de Competência.',
      c: 'Cargo de Competência.',
      d: 'Nomeação de Competência.'
    },
    correctAnswer: 'a',
    explanation: 'Delegação de Competência transfere atribuições decisórias para maior celeridade e eficiência.',
    sourceDoc: 'Apostila SAD - Tópico 4.1 Delegação de Competência (pág. 45)'
  }
];
