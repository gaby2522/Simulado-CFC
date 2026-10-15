import React, { useEffect, useState } from 'react';
import { Question, OptionKey, SubjectInfo } from '../types/quiz';
import confetti from 'canvas-confetti';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Flame,
  Check,
  Printer,
  Award,
  Share2
} from 'lucide-react';
import { UserProfile, submitRankingResult } from '../utils/firebase';
import { FabBadge } from './FabBadge';

interface ResultScreenProps {
  questions: Question[];
  answers: Record<string, OptionKey>;
  subjectInfo: SubjectInfo;
  timeSpentSeconds: number;
  onRestart: () => void;
  onRetryErrors: () => void;
  onGoHome: () => void;
  currentUser?: UserProfile | null;
  onOpenRanking?: () => void;
  onOpenAuth?: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  questions,
  answers,
  subjectInfo,
  timeSpentSeconds,
  onRestart,
  onRetryErrors,
  onGoHome,
  currentUser,
  onOpenRanking,
  onOpenAuth,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'correct' | 'wrong' | 'blank'>('all');
  const [rankingSubmitted, setRankingSubmitted] = useState(false);
  const [submittingRanking, setSubmittingRanking] = useState(false);

  const totalQuestions = questions.length;
  let correctCount = 0;
  let wrongCount = 0;
  let blankCount = 0;

  questions.forEach((q) => {
    const userAns = answers[q.id];
    if (!userAns) {
      blankCount++;
    } else if (userAns === q.correctAnswer) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const percentage = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;
  const isApproved = percentage >= 70; // critério padrão de corte de concurso militar (70%)

  useEffect(() => {
    if (isApproved) {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [isApproved]);

  const minutes = Math.floor(timeSpentSeconds / 60);
  const seconds = timeSpentSeconds % 60;
  const avgSeconds = totalQuestions > 0 ? Math.round(timeSpentSeconds / totalQuestions) : 0;

  // Filtragem das questões para revisão detalhada
  const filteredQuestions = questions.filter((q) => {
    const userAns = answers[q.id];
    if (filterMode === 'correct') return userAns === q.correctAnswer;
    if (filterMode === 'wrong') return userAns && userAns !== q.correctAnswer;
    if (filterMode === 'blank') return !userAns;
    return true;
  });

  const wrongQuestionsList = questions.filter((q) => {
    const userAns = answers[q.id];
    return userAns && userAns !== q.correctAnswer;
  });

  const handlePrintPDF = () => {
    window.print();
  };

  const handleSubmitScoreToRanking = async () => {
    if (!currentUser) {
      if (onOpenAuth) onOpenAuth();
      return;
    }
    setSubmittingRanking(true);
    try {
      const studentUid = currentUser.uid || currentUser.id || 'aluno';
      await submitRankingResult({
        userId: studentUid,
        userName: currentUser.name || 'Aluno CFC',
        userEmail: currentUser.email || '',
        score: correctCount,
        totalQuestions,
        percentage: Math.round(percentage),
        timeSpentSeconds,
        examTitle: subjectInfo.title,
      });
      setRankingSubmitted(true);
    } catch (e) {
      console.error('Erro ao enviar pontuação:', e);
    } finally {
      setSubmittingRanking(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16 animate-in fade-in duration-300">
      {/* CABEÇALHO ESPECÍFICO PARA IMPRESSÃO EM PDF DO CADERNO DE ERROS */}
      <div className="print-only mb-6 border-b-2 border-slate-900 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold uppercase tracking-tight text-slate-900">
              Força Aérea Brasileira &middot; CFC SAD
            </h1>
            <h2 className="text-sm font-semibold text-slate-700">
              Caderno de Erros e Revisão Comentada &middot; {subjectInfo.title}
            </h2>
          </div>
          <div className="text-right text-xs text-slate-600 font-mono">
            <div>Data: {new Date().toLocaleDateString('pt-BR')}</div>
            <div>Aproveitamento: {percentage.toFixed(1)}% ({correctCount}/{totalQuestions})</div>
          </div>
        </div>
      </div>

      {/* Placar Principal de Desempenho (Visível em Tela) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0B192C] border border-slate-200 dark:border-slate-800 shadow-md space-y-6 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            <FabBadge size="md" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] dark:text-blue-400">
                Resultado Oficial do Simulado
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                {subjectInfo.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`px-4 py-2.5 rounded-xl text-center border font-bold text-sm sm:text-base shadow-2xs ${
                isApproved
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700'
                  : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700'
              }`}
            >
              {isApproved ? 'Aprovado (Padrão CFC - FAB)' : 'Abaixo da Nota de Corte (70%)'}
            </div>
          </div>
        </div>

        {/* Painel de Métricas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Acertos</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
                {correctCount}
              </span>
              <span className="text-xs text-slate-400">/ {totalQuestions}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Erros</span>
              <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-red-600 dark:text-red-400 tabular-nums">
                {wrongCount}
              </span>
              <span className="text-xs text-slate-400">questões</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Aproveitamento</span>
              <Trophy className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div className="mt-2">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#002D62] dark:text-blue-400 tabular-nums">
                {percentage.toFixed(1)}%
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Tempo Total</span>
              <Clock className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="mt-2">
              <span className="text-xl sm:text-2xl font-bold font-mono text-slate-800 dark:text-slate-200 tabular-nums">
                {minutes}m {seconds}s
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                média {avgSeconds}s/questão
              </span>
            </div>
          </div>
        </div>

        {/* Banner do Ranking Oficial da Semana */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <div>
              <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white block">
                Ranking Oficial dos Alunos CFC SAD
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {rankingSubmitted
                  ? 'Sua pontuação já está registrada no ranking desta semana!'
                  : 'Envie sua nota para disputar o topo do quadro de honra.'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!rankingSubmitted ? (
              <button
                onClick={handleSubmitScoreToRanking}
                disabled={submittingRanking}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#002D62] hover:bg-blue-900 shadow-sm flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-50"
              >
                <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{submittingRanking ? 'Gravando...' : 'Publicar no Ranking'}</span>
              </button>
            ) : (
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-lg">
                Registrado com Sucesso!
              </span>
            )}

            {onOpenRanking && (
              <button
                onClick={onOpenRanking}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                Ver Ranking
              </button>
            )}
          </div>
        </div>

        {/* Ações do Simulado */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={onRestart}
            className="flex-1 min-w-[150px] py-3 px-4 rounded-xl bg-[#002D62] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Refazer Simulado
          </button>

          {wrongCount > 0 && (
            <button
              onClick={onRetryErrors}
              className="flex-1 min-w-[170px] py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <Flame className="w-4 h-4" />
              Treinar Questões Erradas ({wrongCount})
            </button>
          )}

          {/* BOTÃO EXPORTAR / IMPRIMIR CADERNO DE ERROS EM PDF */}
          <button
            onClick={handlePrintPDF}
            className="py-3 px-4 rounded-xl border border-blue-300 dark:border-blue-700 bg-blue-50/70 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 text-[#002D62] dark:text-blue-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xs transition-colors"
            title="Exportar ou Imprimir Caderno de Erros em formato PDF para estudo em papel ou tablet"
          >
            <Printer className="w-4 h-4" />
            Exportar Caderno em PDF
          </button>

          <button
            onClick={onGoHome}
            className="py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors"
          >
            Outra Disciplina
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Seção de Revisão Comentada de Todas as Questões */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 no-print">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Gabarito Comentado e Fundamentação do CFC - SAD
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Examine cada questão com o trecho de referência da apostila oficial da FAB
            </p>
          </div>

          {/* Filtros da Lista de Questões */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-medium">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterMode === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Todas ({totalQuestions})
            </button>
            <button
              onClick={() => setFilterMode('correct')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterMode === 'correct'
                  ? 'bg-emerald-600 text-white shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Acertos ({correctCount})
            </button>
            <button
              onClick={() => setFilterMode('wrong')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterMode === 'wrong'
                  ? 'bg-red-600 text-white shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Erros ({wrongCount})
            </button>
            {blankCount > 0 && (
              <button
                onClick={() => setFilterMode('blank')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filterMode === 'blank'
                    ? 'bg-slate-600 text-white shadow-2xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Em Branco ({blankCount})
              </button>
            )}
          </div>
        </div>

        {/* Lista de Itens Filtrados */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            const isBlank = !userAns;

            return (
              <div
                key={q.id}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0B192C] border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs print-page-break"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950 text-[#002D62] dark:text-blue-300 font-mono font-bold text-xs flex items-center justify-center">
                      {q.number || idx + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">
                      {q.topic || 'Conhecimentos CFC - SAD'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    {isBlank ? (
                      <span className="text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        Em branco
                      </span>
                    ) : isCorrect ? (
                      <span className="text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Acertou
                      </span>
                    ) : (
                      <span className="text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-950/60 px-2 py-0.5 rounded flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> Errou (Você marcou {userAns.toUpperCase()})
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                  {q.text}
                </p>

                {/* Alternativas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs sm:text-sm">
                  {(['a', 'b', 'c', 'd'] as OptionKey[]).map((key) => {
                    const optText = q.options[key];
                    if (!optText) return null;
                    const isGabarito = key === q.correctAnswer;
                    const isChosen = key === userAns;

                    let bgClass = 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300';

                    if (isGabarito) {
                      bgClass = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 font-semibold text-emerald-900 dark:text-emerald-200 ring-1 ring-emerald-500/30';
                    } else if (isChosen && !isGabarito) {
                      bgClass = 'bg-red-50 dark:bg-red-950/40 border-red-500 text-red-900 dark:text-red-200 line-through';
                    }

                    return (
                      <div
                        key={key}
                        className={`p-2.5 rounded-xl border flex items-center gap-2 ${bgClass}`}
                      >
                        <span className="w-5 h-5 rounded-md flex items-center justify-center font-bold text-xs uppercase bg-black/5 dark:bg-white/10 shrink-0">
                          {key}
                        </span>
                        <span className="leading-tight">{optText}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Comentário explicativo */}
                <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-900/50 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                  <div className="font-bold text-[#002D62] dark:text-blue-300 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    Fundamentação da Banca (Gabarito {q.correctAnswer.toUpperCase()}):
                  </div>
                  <p className="leading-relaxed">{q.explanation}</p>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Fonte Oficial: {q.sourceDoc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
