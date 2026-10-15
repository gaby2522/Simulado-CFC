import React from 'react';
import { Question, OptionKey, QuizMode } from '../types/quiz';
import { FontSizePreference } from '../utils/storage';
import { Flag, EyeOff, BookOpen, MessageSquare } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer?: OptionKey;
  onSelectAnswer: (option: OptionKey) => void;
  eliminatedOptions: OptionKey[];
  onToggleEliminate: (option: OptionKey) => void;
  isFlagged: boolean;
  onToggleFlag: () => void;
  mode: QuizMode;
  isExamFinished: boolean;
  fontSize: FontSizePreference;
  onAskAI?: (question: Question) => void;
}

const optionLetters: OptionKey[] = ['a', 'b', 'c', 'd'];

const QuestionCardComponent: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  eliminatedOptions,
  onToggleEliminate,
  isFlagged,
  onToggleFlag,
  mode,
  isExamFinished,
  fontSize,
  onAskAI,
}) => {
  const showFeedback = mode === 'study' ? Boolean(selectedAnswer) : isExamFinished;
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors">
      {/* Top Bar da Questão no Padrão Militar FAB */}
      <div className="px-5 py-3.5 bg-slate-50 dark:bg-[#0B192C]/70 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-sm text-[#002D62] dark:text-blue-300 bg-blue-100/80 dark:bg-blue-950/80 px-3 py-1 rounded-lg border border-blue-200 dark:border-blue-800 shadow-2xs">
            Questão {currentIndex + 1} de {totalQuestions}
          </span>
          {question.topic && (
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300 hidden sm:inline-block max-w-md truncate">
              {question.topic}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Botão Contextual Rápido do Tutor IA */}
          {onAskAI && (
            <button
              onClick={() => onAskAI(question)}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-[#002D62] dark:text-blue-300 bg-blue-50 dark:bg-blue-950/70 hover:bg-blue-100 dark:hover:bg-blue-900 border border-blue-200 dark:border-blue-800 transition-colors shadow-2xs"
              title="Tirar dúvida sobre esta questão com o Tutor IA Especialista"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#002D62] dark:text-blue-400" />
              <span>Tutor IA</span>
            </button>
          )}

          {/* Botão de Marcar para Revisão com Destaque Dourado Militar */}
          <button
            onClick={onToggleFlag}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-2xs ${
              isFlagged
                ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-600'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
            title="Marcar questão para revisar antes de finalizar"
          >
            <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current text-[#D4AF37]' : ''}`} />
            <span>{isFlagged ? 'Marcada para Revisão' : 'Marcar para Revisão'}</span>
          </button>
        </div>
      </div>

      {/* Corpo do Enunciado */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#002D62] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 rounded-md border border-blue-200/60 dark:border-blue-900/60">
              {question.sourceDoc || 'CFC SAD - FAB'}
            </span>
          </div>
          <p
            className={`font-medium text-slate-900 dark:text-slate-100 leading-relaxed ${
              fontSize === 'small'
                ? 'text-sm sm:text-base'
                : fontSize === 'large'
                ? 'text-lg sm:text-xl'
                : 'text-base sm:text-lg'
            }`}
          >
            {question.text}
          </p>
        </div>

        {/* Lista de Alternativas (A, B, C, D) */}
        <div className="space-y-3 pt-1">
          {optionLetters.map((key) => {
            const optionText = question.options[key];
            if (!optionText) return null;

            const isSelected = selectedAnswer === key;
            const isEliminated = eliminatedOptions.includes(key);
            const isThisCorrect = question.correctAnswer === key;

            // Cores conforme feedback e estado
            let borderClass = 'border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 bg-white dark:bg-[#0B192C]/40';
            let indicatorBg = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';

            if (isSelected) {
              borderClass = 'border-[#002D62] dark:border-blue-500 bg-blue-50/80 dark:bg-blue-950/60 ring-2 ring-[#002D62]/20 dark:ring-blue-500/30';
              indicatorBg = 'bg-[#002D62] dark:bg-blue-600 text-white shadow-2xs';
            }

            if (showFeedback) {
              if (isThisCorrect) {
                borderClass = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/50 ring-2 ring-emerald-500/30';
                indicatorBg = 'bg-emerald-600 text-white shadow-2xs';
              } else if (isSelected && !isThisCorrect) {
                borderClass = 'border-red-500 bg-red-50/80 dark:bg-red-950/50 ring-2 ring-red-500/30';
                indicatorBg = 'bg-red-600 text-white shadow-2xs';
              }
            }

            if (isEliminated && !isSelected) {
              borderClass = 'border-dashed border-slate-300 dark:border-slate-800 opacity-40 bg-slate-50 dark:bg-slate-900/30';
            }

            return (
              <div
                key={key}
                className={`relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer min-h-[52px] sm:min-h-[48px] active:scale-[0.995] touch-manipulation ${borderClass}`}
                onClick={() => onSelectAnswer(key)}
              >
                {/* Indicador de Letra (A, B, C, D) */}
                <div
                  className={`w-9 h-9 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-xs uppercase shrink-0 transition-colors shadow-2xs ${indicatorBg}`}
                >
                  {key}
                </div>

                {/* Texto da Alternativa */}
                <div className="flex-1 min-w-0">
                  <span
                    className={`block leading-snug ${
                      isEliminated ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-200'
                    } ${
                      fontSize === 'small'
                        ? 'text-xs sm:text-sm'
                        : fontSize === 'large'
                        ? 'text-base sm:text-lg'
                        : 'text-sm sm:text-base'
                    }`}
                  >
                    {optionText}
                  </span>
                </div>

                {/* Botão de Riscar Alternativa (Eliminar) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleEliminate(key);
                  }}
                  className={`p-1.5 rounded-lg text-xs transition-colors shrink-0 ${
                    isEliminated
                      ? 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60'
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  title={isEliminated ? 'Restaurar alternativa' : 'Riscar alternativa para focar nas restantes'}
                  aria-label={isEliminated ? 'Restaurar alternativa' : 'Riscar alternativa'}
                >
                  <EyeOff className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Caixa de Feedback Comentado / Fundamentação do CFC - SAD com Acesso ao Tutor IA */}
        {showFeedback && (
          <div
            className={`p-5 rounded-2xl border text-sm transition-all shadow-sm ${
              isCorrect
                ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
                : 'bg-amber-50/80 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-100'
            }`}
          >
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 shrink-0 mt-0.5 text-[#002D62] dark:text-blue-400" />
              <div className="space-y-2 flex-1">
                <div className="font-bold flex items-center gap-2">
                  <span>Gabarito Oficial: Letra ({question.correctAnswer.toUpperCase()})</span>
                  {selectedAnswer && (
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                        isCorrect
                          ? 'bg-emerald-200 text-emerald-900 dark:bg-emerald-900/80 dark:text-emerald-200'
                          : 'bg-red-200 text-red-900 dark:bg-red-900/80 dark:text-red-200'
                      }`}
                    >
                      {isCorrect ? 'Resposta Correta' : 'Resposta Incorreta'}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {question.explanation}
                </p>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Referência Oficial: {question.sourceDoc}
                </div>

                {/* Botão Contextual de Ativação do Tutor IA */}
                {onAskAI && (
                  <div className="pt-1.5">
                    <button
                      type="button"
                      onClick={() => onAskAI(question)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#002D62] to-[#0B192C] hover:opacity-95 shadow-sm transition-all active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Tirar dúvida sobre esta questão com o Tutor IA</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Memoização para evitar re-renderizações desnecessárias
export const QuestionCard = React.memo(QuestionCardComponent);
