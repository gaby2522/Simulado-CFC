import React from 'react';
import { X, BarChart3, TrendingUp, AlertCircle, CheckCircle2, BookOpen } from 'lucide-react';
import { QuizHistoryEntry, SubjectId } from '../types/quiz';
import { subjectsList } from '../data/allQuestions';
import { FabBadge } from './FabBadge';

interface SubjectPerformanceDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  history: QuizHistoryEntry[];
  onSelectSubjectToStudy: (subjectId: SubjectId) => void;
}

export const SubjectPerformanceDashboard: React.FC<SubjectPerformanceDashboardProps> = ({
  isOpen,
  onClose,
  history,
  onSelectSubjectToStudy,
}) => {
  if (!isOpen) return null;

  // Calcula estatísticas agrupadas por disciplina a partir do histórico
  const statsBySubject: Record<
    string,
    { title: string; answered: number; correct: number; totalSessions: number }
  > = {};

  // Inicializa com as disciplinas cadastradas
  subjectsList.forEach((sub) => {
    statsBySubject[sub.id] = {
      title: sub.shortTitle || sub.title,
      answered: 0,
      correct: 0,
      totalSessions: 0,
    };
  });

  history.forEach((h) => {
    if (!statsBySubject[h.subjectId]) {
      statsBySubject[h.subjectId] = {
        title: h.subjectTitle,
        answered: 0,
        correct: 0,
        totalSessions: 0,
      };
    }
    statsBySubject[h.subjectId].answered += h.answeredCount;
    statsBySubject[h.subjectId].correct += h.correctCount;
    statsBySubject[h.subjectId].totalSessions += 1;
  });

  const subjectStatsList = Object.entries(statsBySubject).map(([id, data]) => {
    const accuracy = data.answered > 0 ? Math.round((data.correct / data.answered) * 100) : 0;
    return {
      id: id as SubjectId,
      ...data,
      accuracy,
    };
  });

  // Estatísticas gerais
  const totalAnsweredAll = subjectStatsList.reduce((acc, s) => acc + s.answered, 0);
  const totalCorrectAll = subjectStatsList.reduce((acc, s) => acc + s.correct, 0);
  const overallAccuracy = totalAnsweredAll > 0 ? Math.round((totalCorrectAll / totalAnsweredAll) * 100) : 0;

  // Ponto mais forte e ponto mais fraco (com pelo menos 5 questões respondidas)
  const evaluatedSubjects = subjectStatsList.filter((s) => s.answered >= 5);
  const strongest = evaluatedSubjects.length > 0 ? [...evaluatedSubjects].sort((a, b) => b.accuracy - a.accuracy)[0] : null;
  const weakest = evaluatedSubjects.length > 0 ? [...evaluatedSubjects].sort((a, b) => a.accuracy - b.accuracy)[0] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white dark:bg-[#0B192C] w-full max-w-3xl rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header FAB */}
        <div className="p-5 bg-gradient-to-r from-[#002D62] to-[#0B192C] text-white flex items-center justify-between border-b border-[#D4AF37]/40 shrink-0">
          <div className="flex items-center gap-3">
            <FabBadge size="md" />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold tracking-tight">
                  Painel de Desempenho por Matéria
                </h2>
                <span className="text-[10px] font-extrabold text-[#0B192C] bg-[#D4AF37] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Diagnóstico CFC
                </span>
              </div>
              <p className="text-xs text-blue-200">
                Análise analítica de taxa de acertos individualizada para focar onde você mais precisa
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Fechar"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resumo Rápido Geral */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0">
          <div className="p-3.5 rounded-xl bg-white dark:bg-[#0B192C] border border-slate-200 dark:border-slate-800 shadow-2xs">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">Aproveitamento Geral</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className={`text-2xl font-black tabular-nums ${
                overallAccuracy >= 70 ? 'text-emerald-600 dark:text-emerald-400' : overallAccuracy >= 50 ? 'text-amber-600' : 'text-slate-700 dark:text-slate-200'
              }`}>
                {overallAccuracy}%
              </span>
              <span className="text-xs text-slate-400">({totalCorrectAll}/{totalAnsweredAll} acertos)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-[#0B192C] border border-slate-200 dark:border-slate-800 shadow-2xs">
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> Matéria Mais Forte
            </span>
            <div className="mt-1">
              {strongest ? (
                <div>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-200 truncate block">
                    {strongest.title}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {strongest.accuracy}% de acerto
                  </span>
                </div>
              ) : (
                <span className="text-xs text-slate-400">Dados insuficientes (mín. 5 questões)</span>
              )}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-[#0B192C] border border-slate-200 dark:border-slate-800 shadow-2xs">
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> Requer Atenção
            </span>
            <div className="mt-1">
              {weakest ? (
                <div>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-200 truncate block">
                    {weakest.title}
                  </span>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                    {weakest.accuracy}% de acerto (reforçar)
                  </span>
                </div>
              ) : (
                <span className="text-xs text-slate-400">Dados insuficientes (mín. 5 questões)</span>
              )}
            </div>
          </div>
        </div>

        {/* Lista de Barras de Progresso por Matéria */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-[#002D62] dark:text-blue-400" />
              Taxa de Acertos por Disciplina
            </h3>
            <span className="text-xs text-slate-400">Clique na matéria para iniciar treino focado</span>
          </div>

          <div className="space-y-3">
            {subjectStatsList.map((subject) => {
              const hasData = subject.answered > 0;
              const isDanger = hasData && subject.accuracy < 50;
              const isWarning = hasData && subject.accuracy >= 50 && subject.accuracy < 70;
              const isGood = hasData && subject.accuracy >= 70;

              return (
                <div
                  key={subject.id}
                  onClick={() => {
                    onClose();
                    onSelectSubjectToStudy(subject.id);
                  }}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-sm cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#002D62] dark:text-blue-400 group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {subject.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {hasData ? (
                        <div className="flex items-baseline gap-1.5">
                          <span
                            className={`font-black text-sm tabular-nums ${
                              isGood
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : isWarning
                                ? 'text-amber-600 dark:text-amber-400'
                                : 'text-red-600 dark:text-red-400'
                            }`}
                          >
                            {subject.accuracy}%
                          </span>
                          <span className="text-[11px] text-slate-400">
                            ({subject.correct}/{subject.answered})
                          </span>
                        </div>
                      ) : (
                        <span className="text-[11px] font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                          Sem dados ainda
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Barra de Progresso com Cores Semânticas */}
                  <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        !hasData
                          ? 'w-0'
                          : isGood
                          ? 'bg-gradient-to-r from-emerald-500 to-emerald-400'
                          : isWarning
                          ? 'bg-gradient-to-r from-amber-500 to-amber-400'
                          : 'bg-gradient-to-r from-red-500 to-red-400'
                      }`}
                      style={{ width: `${hasData ? Math.max(subject.accuracy, 4) : 0}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between mt-2 text-[11px] text-slate-500 dark:text-slate-400">
                    <span>
                      {subject.totalSessions} {subject.totalSessions === 1 ? 'sessão realizada' : 'sessões realizadas'}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Treinar esta disciplina &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
