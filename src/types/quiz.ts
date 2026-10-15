export type OptionKey = 'a' | 'b' | 'c' | 'd';

export interface Question {
  id: string;
  number: number;
  subjectId: SubjectId;
  topic?: string;
  text: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: OptionKey;
  explanation: string;
  sourceDoc: string;
}

export type SubjectId =
  | 'sad_especifico_256'
  | 'legislacao_doutrina'
  | 'etica_militar'
  | 'seguranca_trabalho'
  | 'rcont'
  | 'sad_basico'
  | 'simulado_geral';

export interface SubjectInfo {
  id: SubjectId;
  title: string;
  shortTitle: string;
  description: string;
  questionCount: number;
  category: 'basico' | 'especifico' | 'geral';
  iconName: string;
  badge: string;
}

export type QuizMode = 'study' | 'exam' | 'mistakes';

export interface UserExamState {
  answers: Record<string, OptionKey>;
  eliminatedOptions: Record<string, OptionKey[]>; // questões onde o aluno riscou opções
  flagged: Record<string, boolean>; // marcadas para revisão
  currentQuestionIndex: number;
  startedAt: number;
  completedAt?: number;
  timeRemainingSeconds: number;
  isFinished: boolean;
}

export interface QuizHistoryEntry {
  id: string;
  subjectId: SubjectId;
  subjectTitle: string;
  date: string;
  mode: QuizMode;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  percentage: number;
  timeSpentSeconds: number;
}
