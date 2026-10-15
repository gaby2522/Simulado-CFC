import React from 'react';
import { Question, OptionKey, QuizMode } from '../types/quiz';
import { Flag, CheckCircle2, XCircle, LayoutGrid, X } from 'lucide-react';

interface QuestionGridProps {
  questions: Question[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  answers: Record<string, OptionKey>;
  flagged: Record<string, boolean>;
  mode: QuizMode;
  isExamFinished: boolean;
  onClose?: () => void;
}

export const QuestionGrid: React.FC<QuestionGridProps> = ({
  questions,
  currentIndex,
  onSelectIndex,
  answers,
  flagged,
  mode,
  isExamFinished,
  onClose,
}) => {
  const answeredCount = Object.keys(answers).length;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">
            Grade de Respostas
          </h3>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Legenda Resumida */}
      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-blue-600" />
          <span>Respondidas: {answeredCount}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700" />
          <span>Em branco: {questions.length - answeredCount}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-amber-400" />
          <span>Revisão: {flaggedCount}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded border-2 border-blue-600" />
          <span>Atual: #{currentIndex + 1}</span>
        </div>
      </div>

      {/* Grid com scroll vertical controlado */}
      <div className="max-h-[380px] overflow-y-auto pr-1 grid grid-cols-5 sm:grid-cols-6 gap-1.5 pt-1">
        {questions.map((q, idx) => {
          const isCurrent = idx === currentIndex;
          const isAnswered = q.id in answers;
          const isFlagged = Boolean(flagged[q.id]);
          const showEvaluation = mode === 'study' ? isAnswered : isExamFinished;
          const isCorrect = answers[q.id] === q.correctAnswer;

          let btnClass = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200';

          if (isAnswered) {
            btnClass = 'bg-blue-600 text-white font-bold';
          }

          if (showEvaluation && isAnswered) {
            btnClass = isCorrect
              ? 'bg-emerald-600 text-white font-bold'
              : 'bg-red-600 text-white font-bold';
          }

          if (isCurrent) {
            btnClass += ' ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900';
          }

          return (
            <button
              key={q.id}
              onClick={() => onSelectIndex(idx)}
              type="button"
              className={`relative h-9 rounded-lg text-xs font-mono transition-all flex items-center justify-center ${btnClass}`}
              title={`Questão ${idx + 1}${isAnswered ? ` (Marcada: ${answers[q.id]?.toUpperCase()})` : ' (Não respondida)'}`}
            >
              <span>{idx + 1}</span>
              {isFlagged && (
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 border border-white dark:border-slate-900 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
