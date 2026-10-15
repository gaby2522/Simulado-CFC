import React, { useState, useMemo } from 'react';
import { SubjectId, QuizMode } from '../types/quiz';
import { subjectsList } from '../data/allQuestions';
import {
  FileSpreadsheet,
  Scale,
  ShieldCheck,
  HardHat,
  Award,
  BookOpen,
  GraduationCap,
  Play,
  Clock,
  BookCheck,
  AlertCircle,
  SlidersHorizontal,
  Sparkles,
  Shuffle,
  Trophy,
  BarChart3,
  Filter
} from 'lucide-react';
import { FabBadge } from './FabBadge';

interface SubjectSelectorProps {
  onStartQuiz: (subjectId: SubjectId, mode: QuizMode, questionLimit?: number, shuffle?: boolean) => void;
  wrongCount: number;
  totalAnsweredCount: number;
  overallAccuracy: number;
  onOpenRanking?: () => void;
  onOpenPerformance?: () => void;
  onOpenNormFilter?: () => void;
}

const getSubjectIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileSpreadsheet':
      return <FileSpreadsheet className="w-5 h-5 text-[#002D62] dark:text-blue-400" />;
    case 'Scale':
      return <Scale className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    case 'HardHat':
      return <HardHat className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    case 'Award':
      return <Award className="w-5 h-5 text-[#D4AF37]" />;
    case 'BookOpen':
      return <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    default:
      return <GraduationCap className="w-5 h-5 text-[#002D62] dark:text-blue-400" />;
  }
};

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  onStartQuiz,
  wrongCount,
  totalAnsweredCount,
  overallAccuracy,
  onOpenRanking,
  onOpenPerformance,
  onOpenNormFilter,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('simulado_geral');
  const [selectedMode, setSelectedMode] = useState<QuizMode>('study');
  const [selectedLimit, setSelectedLimit] = useState<number | 'all'>('all');
  const [isShuffle, setIsShuffle] = useState<boolean>(false);

  const currentSubjectInfo = useMemo(() => {
    return subjectsList.find((s) => s.id === selectedSubject) || subjectsList[0];
  }, [selectedSubject]);

  const limitOptions = useMemo(() => {
    const total = currentSubjectInfo.questionCount;
    if (total >= 400) return ['all', 30, 60, 120] as const;
    if (total >= 200) return ['all', 25, 50, 100] as const;
    if (total >= 50) return ['all', 15, 25, 50] as const;
    return ['all', 10, 20, 30] as const;
  }, [currentSubjectInfo.questionCount]);

  const handleStart = () => {
    const limit = selectedLimit === 'all' ? undefined : Number(selectedLimit);
    onStartQuiz(selectedSubject, selectedMode, limit, isShuffle);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner Oficial FAB do CFC - SAD */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#002D62] via-[#0B192C] to-[#001738] text-white p-6 sm:p-8 shadow-xl border border-[#D4AF37]/30">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              FORÇA AÉREA BRASILEIRA &middot; CURSO DE FORMAÇÃO DE CABOS (CFC)
            </div>
            <span className="text-[11px] font-black text-[#0B192C] bg-[#D4AF37] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Especialidade SAD
            </span>
          </div>

          <div className="flex items-start gap-4">
            <FabBadge size="lg" />
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
                Simulado CFC - SAD Oficial
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Preparatório de alta precisão com o <strong>Simulado Geral com todas as 416 questões literais da banca</strong>.
                Treinamento focado em Legislação Militar, RCONT, Ética, Segurança do Trabalho e SAD Específico.
              </p>
            </div>
          </div>

          {/* Botões de Acesso Rápido às Novas Ferramentas Comerciais */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            {onOpenRanking && (
              <button
                onClick={onOpenRanking}
                type="button"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-400/15 hover:bg-amber-400/25 border border-[#D4AF37]/60 text-amber-300 text-xs font-bold transition-all shadow-2xs hover:scale-[1.02]"
              >
                <Trophy className="w-4 h-4 text-[#D4AF37]" />
                <span>Simulado Oficial da Semana (Ranking)</span>
              </button>
            )}

            {onOpenPerformance && (
              <button
                onClick={onOpenPerformance}
                type="button"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/40 text-blue-200 text-xs font-bold transition-all shadow-2xs hover:scale-[1.02]"
              >
                <BarChart3 className="w-4 h-4 text-cyan-300" />
                <span>Desempenho por Matéria</span>
              </button>
            )}

            {onOpenNormFilter && (
              <button
                onClick={onOpenNormFilter}
                type="button"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 text-xs font-bold transition-all shadow-2xs hover:scale-[1.02]"
              >
                <Filter className="w-4 h-4 text-emerald-300" />
                <span>Filtrar por Norma / Legislação</span>
              </button>
            )}
          </div>

          {/* KPI Strip */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-700/60">
            <div>
              <span className="text-xs text-slate-400 block">Simulado Geral</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-[#D4AF37] tabular-nums">416</span>
              <span className="text-[11px] text-slate-400 block">questões (mix integral)</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">SAD Específico</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-sky-400 tabular-nums">256</span>
              <span className="text-[11px] text-slate-400 block">questões específicas</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Respondidas</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tabular-nums">{totalAnsweredCount}</span>
              <span className="text-[11px] text-slate-400 block">nesta sessão</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Aproveitamento</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-cyan-300 tabular-nums">{overallAccuracy.toFixed(1)}%</span>
              <span className="text-[11px] text-slate-400 block">taxa de acertos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Principal: Seleção de Disciplinas + Painel de Configuração */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Coluna Esquerda: Lista de Matérias (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                1. Selecione o Simulado ou Disciplina
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Escolha o Simulado Geral Integrado (416 Q) ou treine por disciplina individual
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
              {subjectsList.length} Opções
            </span>
          </div>

          <div className="space-y-3">
            {subjectsList.map((subject) => {
              const isSelected = selectedSubject === subject.id;
              const isGeral = subject.id === 'simulado_geral';

              return (
                <div
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject.id)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                    isSelected
                      ? 'border-[#002D62] dark:border-blue-500 bg-blue-50/80 dark:bg-blue-950/40 shadow-sm ring-2 ring-[#002D62]/20 dark:ring-blue-500/30'
                      : isGeral
                      ? 'border-amber-300 dark:border-amber-700/80 bg-amber-50/30 dark:bg-amber-950/20 hover:border-amber-400'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C]/50 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 mt-0.5">
                      {getSubjectIcon(subject.iconName)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                          {subject.title}
                        </h3>
                        <span
                          className={`shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            isGeral
                              ? 'text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-900/60 font-bold border border-amber-300 dark:border-amber-700'
                              : 'text-[#002D62] dark:text-blue-300 bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800'
                          }`}
                        >
                          {subject.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {subject.description}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        <span>Banca Examinadora FAB</span>
                        <span>&middot;</span>
                        <span>4 Alternativas (A, B, C, D)</span>
                        <span>&middot;</span>
                        <span className="text-slate-700 dark:text-slate-300 font-bold">
                          {subject.questionCount} Questões
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coluna Direita: Modo de Execução e Início (5 cols) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0B192C] border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                2. Configurar Simulado
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Selecione o modo de resolução e a quantidade de questões
              </p>
            </div>

            {/* Seleção de Modo */}
            <div className="space-y-3">
              <label
                onClick={() => setSelectedMode('study')}
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  selectedMode === 'study'
                    ? 'border-[#002D62] dark:border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 ring-1 ring-[#002D62]/30'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <input
                  type="radio"
                  name="quizMode"
                  checked={selectedMode === 'study'}
                  onChange={() => setSelectedMode('study')}
                  className="mt-1 text-[#002D62] focus:ring-blue-500"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <BookCheck className="w-4 h-4 text-[#002D62] dark:text-blue-400" />
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      Modo Estudo / Treinamento
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Gabarito e fundamentação oficial da apostila exibidos imediatamente a cada resposta.
                  </p>
                </div>
              </label>

              <label
                onClick={() => setSelectedMode('exam')}
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  selectedMode === 'exam'
                    ? 'border-[#002D62] dark:border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 ring-1 ring-[#002D62]/30'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <input
                  type="radio"
                  name="quizMode"
                  checked={selectedMode === 'exam'}
                  onChange={() => setSelectedMode('exam')}
                  className="mt-1 text-[#002D62] focus:ring-blue-500"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      Modo Prova Oficial / Simulado
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Cronômetro com alertas inteligentes (15 min amarelo, 5 min vermelho).
                  </p>
                </div>
              </label>

              {wrongCount > 0 && (
                <label
                  onClick={() => setSelectedMode('mistakes')}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    selectedMode === 'mistakes'
                      ? 'border-red-600 bg-red-50/60 dark:bg-red-950/40 ring-1 ring-red-600/30'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="quizMode"
                    checked={selectedMode === 'mistakes'}
                    onChange={() => setSelectedMode('mistakes')}
                    className="mt-1 text-red-600 focus:ring-red-500"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        Caderno de Erros ({wrongCount})
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Refaça apenas as questões que você errou em simulados anteriores.
                    </p>
                  </div>
                </label>
              )}
            </div>

            {/* Quantidade de Questões */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Quantidade de Questões
              </label>
              <div className="grid grid-cols-4 gap-2">
                {limitOptions.map((opt) => (
                  <button
                    key={String(opt)}
                    type="button"
                    onClick={() => setSelectedLimit(opt)}
                    className={`py-2 text-xs font-semibold rounded-xl border transition-colors ${
                      selectedLimit === opt
                        ? 'border-[#002D62] bg-[#002D62] text-white shadow-2xs'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {opt === 'all' ? `Todas (${currentSubjectInfo.questionCount})` : `${opt} Qs`}
                  </button>
                ))}
              </div>
            </div>

            {/* Opção de Embaralhar Questões */}
            <div className="pt-1">
              <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={isShuffle}
                  onChange={(e) => setIsShuffle(e.target.checked)}
                  className="rounded text-[#002D62] focus:ring-blue-500 h-4 w-4"
                />
                <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <Shuffle className="w-3.5 h-3.5 text-[#002D62] dark:text-blue-400" />
                  <span className="font-semibold">Embaralhar ordem das alternativas e questões</span>
                </div>
              </label>
            </div>

            {/* Resumo da Seleção */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
              <div className="flex justify-between">
                <span>Simulado Selecionado:</span>
                <strong className="text-slate-900 dark:text-white font-medium truncate max-w-[200px]">
                  {currentSubjectInfo.shortTitle}
                </strong>
              </div>
              <div className="flex justify-between">
                <span>Formato da Prova:</span>
                <span className="font-medium text-slate-900 dark:text-white">Padrão FAB (A, B, C, D)</span>
              </div>
              <div className="flex justify-between">
                <span>Total a Resolver:</span>
                <span className="font-bold text-[#002D62] dark:text-blue-400">
                  {selectedLimit === 'all'
                    ? `${currentSubjectInfo.questionCount} questões`
                    : `${Math.min(Number(selectedLimit), currentSubjectInfo.questionCount)} questões`}
                </span>
              </div>
            </div>

            {/* Botão de Iniciar */}
            <button
              onClick={handleStart}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#002D62] to-[#0B192C] hover:opacity-95 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
            >
              <Play className="w-5 h-5 fill-current" />
              INICIAR SIMULADO AGORA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
