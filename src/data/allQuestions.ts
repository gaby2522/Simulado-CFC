import { Question, SubjectId, SubjectInfo } from '../types/quiz';
import { questionarioSad256 } from './questionarioSad256';
import { questoesLegislacaoDoutrina } from './questoesLegislacaoDoutrina';
import { questoesEticaMilitar } from './questoesEticaMilitar';
import { questoesSegurancaTrabalho } from './questoesSegurancaTrabalho';
import { questoesRcont } from './questoesRcont';
import { questoesSadBasico } from './questoesSadBasico';

export const subjectsList: SubjectInfo[] = [
  {
    id: 'simulado_geral',
    title: 'Simulado Geral Integrado do Edital CFC - SAD',
    shortTitle: 'Simulado Integrado Geral (416 Q)',
    description: 'Simulado geral completo com um mix balanceado de todas as 416 questões oficiais de todas as 6 disciplinas do edital.',
    questionCount: 416,
    category: 'geral',
    iconName: 'GraduationCap',
    badge: '416 Questões (Mix Integral)'
  },
  {
    id: 'sad_especifico_256',
    title: 'Questionário Geral Específico SAD',
    shortTitle: 'SAD Específico (256 Q)',
    description: 'Simulado completo com as 256 questões literais oficiais da Especialidade SAD.',
    questionCount: 256,
    category: 'especifico',
    iconName: 'FileSpreadsheet',
    badge: '256 Questões'
  },
  {
    id: 'legislacao_doutrina',
    title: 'Legislação Militar e Doutrina',
    shortTitle: 'Legislação e Doutrina (30 Q)',
    description: '30 questões sobre características da profissão militar, Lei nº 6.880 (Estatuto dos Militares), RDAER e RISAER.',
    questionCount: 30,
    category: 'basico',
    iconName: 'Scale',
    badge: '30 Questões'
  },
  {
    id: 'etica_militar',
    title: 'Ética Profissional Militar (DICA)',
    shortTitle: 'Ética Militar / DICA (30 Q)',
    description: '30 questões sobre Direito Internacional dos Conflitos Armados, Convenções de Genebra, Haia, Nova York e TPI.',
    questionCount: 30,
    category: 'basico',
    iconName: 'ShieldCheck',
    badge: '30 Questões'
  },
  {
    id: 'seguranca_trabalho',
    title: 'Noções Básicas de Higiene e Segurança do Trabalho',
    shortTitle: 'Segurança do Trabalho (20 Q)',
    description: '20 questões sobre acidentes de serviço nas Forças Armadas, atos/condições inseguras, normas NB-18, EPC e EPIs.',
    questionCount: 20,
    category: 'basico',
    iconName: 'HardHat',
    badge: '20 Questões'
  },
  {
    id: 'rcont',
    title: 'Legislação Militar I - RCONT',
    shortTitle: 'RCONT (30 Q)',
    description: '30 questões sobre a Portaria GM-MD nº 1.143/2022 (Continências, Honras, Sinais de Respeito e Cerimonial Militar).',
    questionCount: 30,
    category: 'basico',
    iconName: 'Award',
    badge: '30 Questões'
  },
  {
    id: 'sad_basico',
    title: 'Conhecimentos Básicos da Especialidade SAD',
    shortTitle: 'SAD Básico (50 Q)',
    description: '50 questões sobre comunicação, redação oficial (NSCA 10-2), gestão documental, RADA-e (RCA 12-1) e remuneração.',
    questionCount: 50,
    category: 'basico',
    iconName: 'BookOpen',
    badge: '50 Questões'
  }
];

// Monta o mix balanceado com todas as 416 questões oficiais
function buildSimuladoGeral416(): Question[] {
  const pools = {
    leg: [...questoesLegislacaoDoutrina],
    eti: [...questoesEticaMilitar],
    seg: [...questoesSegurancaTrabalho],
    rcont: [...questoesRcont],
    sadb: [...questoesSadBasico],
    sade: [...questionarioSad256],
  };

  const mixed: Question[] = [];
  while (
    pools.leg.length ||
    pools.eti.length ||
    pools.seg.length ||
    pools.rcont.length ||
    pools.sadb.length ||
    pools.sade.length
  ) {
    if (pools.leg.length) mixed.push(pools.leg.shift()!);
    if (pools.eti.length) mixed.push(pools.eti.shift()!);
    if (pools.seg.length) mixed.push(pools.seg.shift()!);
    if (pools.rcont.length) mixed.push(pools.rcont.shift()!);
    if (pools.sadb.length) mixed.push(pools.sadb.shift()!);
    if (pools.sadb.length && pools.sade.length > 80) mixed.push(pools.sadb.shift()!);
    for (let i = 0; i < 8 && pools.sade.length; i++) {
      mixed.push(pools.sade.shift()!);
    }
  }

  // Renumera ordenadamente de 1 a 416
  return mixed.map((q, idx) => ({
    ...q,
    number: idx + 1,
  }));
}

export const simuladoGeral416Questions: Question[] = buildSimuladoGeral416();

export const allQuestionsBySubject: Record<SubjectId, Question[]> = {
  sad_especifico_256: questionarioSad256,
  legislacao_doutrina: questoesLegislacaoDoutrina,
  etica_militar: questoesEticaMilitar,
  seguranca_trabalho: questoesSegurancaTrabalho,
  rcont: questoesRcont,
  sad_basico: questoesSadBasico,
  simulado_geral: simuladoGeral416Questions
};

export function getQuestionsForSubject(subjectId: SubjectId): Question[] {
  return allQuestionsBySubject[subjectId] || [];
}
