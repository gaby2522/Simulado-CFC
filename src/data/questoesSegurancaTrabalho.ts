import { Question } from '../types/quiz';

export const questoesSegurancaTrabalho: Question[] = [
  {
    id: 'seg-1',
    number: 1,
    subjectId: 'seguranca_trabalho',
    topic: 'Conceito de Higiene do Trabalho',
    text: 'De acordo com a apostila oficial de Noções Básicas de Higiene e Segurança do Trabalho da FAB, a Higiene do Trabalho ou higiene ocupacional consiste essencialmente em:',
    options: {
      a: 'Punir disciplinarmente os funcionários desatentos nas oficinas.',
      b: 'Um conjunto de medidas preventivas relacionadas ao ambiente de trabalho, visando combater as doenças profissionais e reduzir acidentes.',
      c: 'Apenas a limpeza dos uniformes e asseio corporal matinal dos militares.',
      d: 'A fiscalização contábil dos contratos de compras de ferramentas.',
    },
    correctAnswer: 'b',
    explanation: 'A higiene do trabalho atua no ambiente laboral prevenindo e combatendo doenças ocupacionais e profissionais.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 1.1 Definições (pág. 6)'
  },
  {
    id: 'seg-2',
    number: 2,
    subjectId: 'seguranca_trabalho',
    topic: 'Conceito de Segurança do Trabalho',
    text: 'O conjunto de medidas técnicas, médicas e educacionais empregadas para prevenir acidentes, eliminando condições inseguras e instruindo pessoas na implantação de práticas preventivas, define:',
    options: {
      a: 'Saúde Mental Coletiva.',
      b: 'Segurança do Trabalho.',
      c: 'Organização de Almoxarifado.',
      d: 'Vigilância Sanitária Portuária.'
    },
    correctAnswer: 'b',
    explanation: 'Conceito de Segurança do Trabalho: medidas técnicas, médicas e educacionais para prevenção de acidentes.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 1.1 Definições (pág. 6)'
  },
  {
    id: 'seg-3',
    number: 3,
    subjectId: 'seguranca_trabalho',
    topic: 'Acidente de Serviço nas Forças Armadas',
    text: 'Nas Forças Armadas, considera-se acidente de serviço aquele que ocorre com o militar da ativa nas seguintes circunstâncias, EXCETO:',
    options: {
      a: 'No cumprimento de ordem emanada de autoridade competente.',
      b: 'No decurso de viagem em objeto de serviço devidamente autorizada.',
      c: 'No deslocamento entre sua residência e a Organização Militar em que serve (ou vice-versa).',
      d: 'Durante a prática de atividade remunerada particular não autorizada em seu dia de folga.'
    },
    correctAnswer: 'd',
    explanation: 'Atividade remunerada particular em folga não configura serviço militar nem acidente de serviço (Art. 31 Lei 6.880/80).',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 1.1 Acidente de Serviço (pág. 7)'
  },
  {
    id: 'seg-4',
    number: 4,
    subjectId: 'seguranca_trabalho',
    topic: 'Doença Profissional x Doença do Trabalho',
    text: 'A doença ocupacional produzida diretamente pelo exercício de trabalho peculiar a determinada atividade (como a silicose em trabalhadores que manipulam areia sem proteção), onde a própria atividade basta para comprovar o nexo causal, denomina-se:',
    options: {
      a: 'Doença endêmica regional.',
      b: 'Doença profissional ou ocupacional.',
      c: 'Doença degenerativa adquirida.',
      d: 'Doença infecciosa casual.'
    },
    correctAnswer: 'b',
    explanation: 'Doença profissional ou ocupacional: decorre da própria atividade laborativa típica.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 1.1 Doenças do Trabalho (pág. 7)'
  },
  {
    id: 'seg-5',
    number: 5,
    subjectId: 'seguranca_trabalho',
    topic: 'Doença do Trabalho - Nexo Causal',
    text: 'A perda auditiva (surdez) decorrente do trabalho contínuo em ambiente ruidoso sem uso de protetor auricular é classificada como:',
    options: {
      a: 'Doença degenerativa congênita.',
      b: 'Doença do trabalho, necessitando comprovar a relação de causa e efeito entre as condições do ambiente e a patologia.',
      c: 'Acidente exclusivamente com dano patrimonial.',
      d: 'Moléstia inerente a grupo etário.'
    },
    correctAnswer: 'b',
    explanation: 'Doença do trabalho: adquirida em virtude das condições especiais em que o trabalho é realizado.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 1.1 Doenças do Trabalho (pág. 7)'
  },
  {
    id: 'seg-6',
    number: 6,
    subjectId: 'seguranca_trabalho',
    topic: 'Doenças Não Consideradas do Trabalho',
    text: 'Segundo a legislação e a apostila oficial da FAB, NÃO são consideradas doenças do trabalho:',
    options: {
      a: 'A silicose e a asbestose.',
      b: 'A doença degenerativa (diabetes), a inerente a grupo etário (reumatismo) e a que não produza incapacidade laborativa (miopia).',
      c: 'As lesões por esforços repetitivos (LER) em digitadores.',
      d: 'A surdez provocada por ruído de turbinas sem proteção.'
    },
    correctAnswer: 'b',
    explanation: 'Diabetes (degenerativa), reumatismo (grupo etário) e miopia não são enquadradas como doenças do trabalho.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 1.1 Não consideradas doenças do trabalho (pág. 7)'
  },
  {
    id: 'seg-7',
    number: 7,
    subjectId: 'seguranca_trabalho',
    topic: 'Conceito de Incidente',
    text: 'No vocabulário de Segurança do Trabalho, o evento que possui o potencial de levar a um acidente ou que quase deu origem a um acidente (sem causar danos imediatos) é conceituado como:',
    options: {
      a: 'Perigo.',
      b: 'Incidente (ou quase-acidente).',
      c: 'Risco iminente.',
      d: 'Dano moral.'
    },
    correctAnswer: 'b',
    explanation: 'Incidente: evento que tem o potencial de levar a um acidente.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 1.1 Principais Conceitos (pág. 8)'
  },
  {
    id: 'seg-8',
    number: 8,
    subjectId: 'seguranca_trabalho',
    topic: 'Conceito de Risco e Perigo',
    text: 'A "combinação da probabilidade de ocorrência e da gravidade de um determinado evento perigoso" define qual conceito?',
    options: {
      a: 'Perigo.',
      b: 'Dano.',
      c: 'Risco.',
      d: 'Incidente.'
    },
    correctAnswer: 'c',
    explanation: 'Risco = probabilidade de ocorrência combinada com a severidade/gravidade do dano potencial.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 1.1 Principais Conceitos (pág. 8)'
  },
  {
    id: 'seg-9',
    number: 9,
    subjectId: 'seguranca_trabalho',
    topic: 'Avaliação Qualitativa x Quantitativa',
    text: 'A avaliação preliminar dos riscos ambientais que utiliza apenas a sensibilidade dos órgãos dos sentidos do avaliador (exemplo: sentir cheiro de gás vazando de um botijão) é denominada:',
    options: {
      a: 'Avaliação quantitativa.',
      b: 'Avaliação qualitativa.',
      c: 'Avaliação instrumental.',
      d: 'Avaliação laboratorial.'
    },
    correctAnswer: 'b',
    explanation: 'Avaliação qualitativa (preliminar): apoia-se na sensibilidade e percepção sensorial do avaliador.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 1.1 Avaliação de Riscos (pág. 9)'
  },
  {
    id: 'seg-10',
    number: 10,
    subjectId: 'seguranca_trabalho',
    topic: 'Avaliação Quantitativa',
    text: 'O uso de instrumentos calibrados como termômetros para medir o calor de fornos e decibelímetros para aferir o nível de ruído em decibéis corresponde à:',
    options: {
      a: 'Avaliação subjetiva.',
      b: 'Avaliação qualitativa.',
      c: 'Avaliação quantitativa.',
      d: 'Avaliação aleatória.'
    },
    correctAnswer: 'c',
    explanation: 'Avaliação quantitativa: utiliza método científico e instrumentos para mensuração exata do risco.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 1.1 Avaliação de Riscos (pág. 9)'
  },
  {
    id: 'seg-11',
    number: 11,
    subjectId: 'seguranca_trabalho',
    topic: 'Faixa Etária Crítica de Acidentes',
    text: 'Estatísticas apresentadas na apostila oficial da FAB alertam que os acidentes de trabalho atingem principalmente pessoas em qual faixa etária e condição:',
    options: {
      a: 'Dos 14 aos 18 anos em fase de aprendizagem escolar.',
      b: 'Dos 20 aos 30 anos, justamente quando estão em plena condição física.',
      c: 'Acima de 65 anos na fase pré-aposentadoria.',
      d: 'Exclusivamente crianças em áreas de creches comunitárias.'
    },
    correctAnswer: 'b',
    explanation: 'Os acidentes atingem expressivamente jovens de 20 a 30 anos em plena força de trabalho.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 1.2 Danos Causados (pág. 10)'
  },
  {
    id: 'seg-12',
    number: 12,
    subjectId: 'seguranca_trabalho',
    topic: 'Causas de Acidentes - Negligência',
    text: 'A omissão voluntária do cuidado com falta de atenção (por exemplo, realizar a limpeza de uma máquina mantendo-a em pleno funcionamento) caracteriza:',
    options: {
      a: 'Imperícia.',
      b: 'Imprudência.',
      c: 'Negligência.',
      d: 'Caso fortuito.'
    },
    correctAnswer: 'c',
    explanation: 'Negligência: omissão do dever de cuidado e falta de atenção elementar.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 2.1 Causas do Acidente (pág. 11)'
  },
  {
    id: 'seg-13',
    number: 13,
    subjectId: 'seguranca_trabalho',
    topic: 'Causas de Acidentes - Imprudência',
    text: 'A falta de observação das medidas de segurança previsíveis por excesso de confiança (como empilhar caixas pesadas sem obedecer aos limites de altura recomendados) caracteriza:',
    options: {
      a: 'Negligência.',
      b: 'Imprudência.',
      c: 'Imperícia.',
      d: 'Insubordinação.'
    },
    correctAnswer: 'b',
    explanation: 'Imprudência: ação precipitada, com excesso de confiança e desrespeito às precauções cabíveis.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 2.1 Causas do Acidente (pág. 11)'
  },
  {
    id: 'seg-14',
    number: 14,
    subjectId: 'seguranca_trabalho',
    topic: 'Causas de Acidentes - Imperícia',
    text: 'A falta de aptidão técnica, habilidade, experiência ou curso para operar um equipamento específico (exemplo: conduzir empilhadeira ou trator sem possuir habilitação e treinamento) configura:',
    options: {
      a: 'Imperícia.',
      b: 'Condição ambiental adversa.',
      c: 'Negligência pura.',
      d: 'Ato de bravura militar.'
    },
    correctAnswer: 'a',
    explanation: 'Imperícia: falta de aptidão técnica, capacitação, treino ou habilidade no exercício da função.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 2.1 Causas do Acidente (pág. 11)'
  },
  {
    id: 'seg-15',
    number: 15,
    subjectId: 'seguranca_trabalho',
    topic: 'Ato Inseguro',
    text: 'As causas de acidentes de trabalho que residem EXCLUSIVAMENTE no fator humano, decorrentes da execução de tarefas contrárias às normas de segurança, denominam-se:',
    options: {
      a: 'Condições inseguras.',
      b: 'Atos inseguros.',
      c: 'Sinistros prediais.',
      d: 'Fatores geoclimáticos.'
    },
    correctAnswer: 'b',
    explanation: 'Ato inseguro provém exclusivamente da ação ou omissão do comportamento humano.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 2.1 Ato Inseguro (pág. 11)'
  },
  {
    id: 'seg-16',
    number: 16,
    subjectId: 'seguranca_trabalho',
    topic: 'Condição Insegura',
    text: 'Assinale a alternativa que apresenta tipicamente uma CONDIÇÃO INSEGURA no ambiente de trabalho:',
    options: {
      a: 'Brincadeiras e correrias no chão de fábrica durante o expediente.',
      b: 'Teimosia em operar sem ler as instruções de segurança.',
      c: 'Iluminação deficiente, pisos escorregadios e fiação elétrica defeituosa e exposta.',
      d: 'Exibicionismo e vaidade de um operário ao saltar de uma bancada.'
    },
    correctAnswer: 'c',
    explanation: 'Condição insegura diz respeito ao ambiente material, instalações físicas e equipamentos defeituosos.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 2.1 Condição Insegura (pág. 13)'
  },
  {
    id: 'seg-17',
    number: 17,
    subjectId: 'seguranca_trabalho',
    topic: 'Equipamento de Proteção Coletiva (EPC)',
    text: 'Toda medida ou dispositivo, sinal, imagem, som ou equipamento destinado à proteção de uma ou mais pessoas durante o trabalho é classificado como EPC. São exemplos de EPC:',
    options: {
      a: 'Óculos de proteção e protetor auricular tipo concha.',
      b: 'Sistema de exaustão de gases, aterramento elétrico de máquinas e corrimão com piso antiderrapante em escadas.',
      c: 'Luva de raspa e botina de couro com biqueira.',
      d: 'Avental de raspa para soldador.'
    },
    correctAnswer: 'b',
    explanation: 'EPC protege o coletivo de pessoas: exaustores, corrimãos, aterramento elétrico, sinalização.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 2.2 Equipamentos de Proteção Coletiva (pág. 14)'
  },
  {
    id: 'seg-18',
    number: 18,
    subjectId: 'seguranca_trabalho',
    topic: 'Hierarquia das Medidas de Proteção',
    text: 'Quanto ao uso de Equipamento de Proteção Individual (EPI), a regra de segurança do trabalho determina que o EPI deve ser utilizado:',
    options: {
      a: 'Sempre em substituição aos equipamentos coletivos para baratear custos.',
      b: 'Quando não for possível eliminar os riscos por medidas ou equipamentos de proteção coletiva (EPC), ou para complementá-los em trabalhos eventuais/emergenciais.',
      c: 'Apenas quando o trabalhador desejar usá-lo voluntariamente.',
      d: 'Exclusivamente por supervisores e oficiais da unidade.'
    },
    correctAnswer: 'b',
    explanation: 'O EPI é adotado prioritariamente quando o EPC não puder neutralizar o perigo ou em caráter complementar.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 2.2 EPI (pág. 14-15)'
  },
  {
    id: 'seg-19',
    number: 19,
    subjectId: 'seguranca_trabalho',
    topic: 'Especificação de Luvas de Proteção',
    text: 'De acordo com as especificações da apostila oficial da FAB, as luvas de RASPA e as luvas de BORRACHA são indicadas, respectivamente, para:',
    options: {
      a: 'Trabalho em alta voltagem sem aterramento; manuseio de folhas de papel limpas.',
      b: 'Proteção contra agentes abrasivos e escoriantes; manuseio de combustíveis, agentes químicos e biológicos.',
      c: 'Proteção contra calor radiante no sol; digitação em computadores.',
      d: 'Cozinha e manuseio de louça; pintura de paredes com cal.'
    },
    correctAnswer: 'b',
    explanation: 'Raspa de couro protege contra abrasão/atrito; borracha protege contra agentes químicos e biológicos.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 2.2 Membros Superiores (pág. 15)'
  },
  {
    id: 'seg-20',
    number: 20,
    subjectId: 'seguranca_trabalho',
    topic: 'Responsabilidades sobre o EPI',
    text: 'Em relação ao uso do EPI, cabe à CHEFIA e ao EMPREGADO (trabalhador), respectivamente:',
    options: {
      a: 'Comprar o EPI com recurso próprio do soldado; reembolsar a OM no mês seguinte.',
      b: 'Fornecer o EPI aprovado com Certificado de Aprovação (CA) e orientar/tornar obrigatório o uso; usá-lo apenas para a finalidade prevista, zelar por sua guarda e comunicar qualquer defeito.',
      c: 'Guardar todos os EPIs trancados na seção; utilizá-los apenas em caso de fiscalização do Ministério.',
      d: 'Assinar o termo de dispensa do EPI; trabalhar sem proteção para agilizar o serviço.'
    },
    correctAnswer: 'b',
    explanation: 'Chefia fornece EPI com CA e exige uso; trabalhador usa na finalidade correta e zela pela conservação.',
    sourceDoc: 'Apostila Higiene e Segurança do Trabalho - Tópico 2.2 Responsabilidades (pág. 16)'
  }
];
