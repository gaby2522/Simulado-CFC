import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  SubjectId,
  QuizMode,
  Question,
  OptionKey,
  QuizHistoryEntry,
} from './types/quiz';
import { subjectsList, getQuestionsForSubject, allQuestionsBySubject, simuladoGeral416Questions } from './data/allQuestions';
import {
  getQuizHistory,
  saveQuizHistory,
  getWrongQuestions,
  recordQuestionResult,
  getSavedThemeMode,
  setSavedThemeMode,
  getSavedFontSize,
  setSavedFontSize,
  ThemeMode,
  FontSizePreference,
  isDayTime,
  clearAllQuizData,
} from './utils/storage';
import {
  auth,
  UserProfile,
  subscribeToUserSession,
  getLocalSessionId,
  db,
  isUserAccessAllowed,
  recordUserAttempt,
  getSavedDemoStudent
} from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import { Header } from './components/Header';
import { SubjectSelector } from './components/SubjectSelector';
import { QuestionCard } from './components/QuestionCard';
import { QuestionGrid } from './components/QuestionGrid';
import { ExamTimer } from './components/ExamTimer';
import { ResultScreen } from './components/ResultScreen';
import { QuestionSearchModal } from './components/QuestionSearchModal';
import { SettingsModal } from './components/SettingsModal';
import { GeminiChatDrawer } from './components/GeminiChatDrawer';
import { AuthModal } from './components/AuthModal';
import { PaywallModal } from './components/PaywallModal';
import { RankingModal } from './components/RankingModal';
import { SubjectPerformanceDashboard } from './components/SubjectPerformanceDashboard';
import { NormFilterModal } from './components/NormFilterModal';
import { AdminPanel } from './components/AdminPanel';

import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Home,
  MessageSquare,
  LayoutGrid,
  ShieldAlert,
  Shield,
} from 'lucide-react';

type ScreenState = 'home' | 'quiz' | 'result';

const LOCAL_DRAFT_EXAM_KEY = 'cfc_active_exam_draft_v2';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('home');
  const [themeMode, setThemeMode] = useState<ThemeMode>(getSavedThemeMode);
  const [fontSize, setFontSize] = useState<FontSizePreference>(getSavedFontSize);
  const [isDay, setIsDay] = useState<boolean>(isDayTime());
  const [storageVersion, setStorageVersion] = useState<number>(0);

  // Autenticação Firebase e Perfil de Acesso
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => getSavedDemoStudent());
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [sessionTerminatedNotice, setSessionTerminatedNotice] = useState<string | null>(null);

  // Modais e Painel Admin
  const [isRankingOpen, setIsRankingOpen] = useState<boolean>(false);
  const [isPerformanceOpen, setIsPerformanceOpen] = useState<boolean>(false);
  const [isNormFilterOpen, setIsNormFilterOpen] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [questionToExplain, setQuestionToExplain] = useState<Question | null>(null);

  const [isGridOpenMobile, setIsGridOpenMobile] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [showFinishConfirm, setShowFinishConfirm] = useState<boolean>(false);

  // Estado da Prova / Simulado
  const [currentSubjectId, setCurrentSubjectId] = useState<SubjectId>('simulado_geral');
  const [quizMode, setQuizMode] = useState<QuizMode>('study');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, OptionKey>>({});
  const [eliminated, setEliminated] = useState<Record<string, OptionKey[]>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [isExamFinished, setIsExamFinished] = useState<boolean>(false);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);

  const activeQuestionsRef = useRef<Question[]>(activeQuestions);
  activeQuestionsRef.current = activeQuestions;

  // Verificação do Administrador
  const ADMIN_EMAIL = 'pedroalvessilva0912@gmail.com';
  const isAdmin = currentUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  useEffect(() => {
    let unsubscribeSession: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        try {
          const userDocRef = doc(db, 'users', fbUser.uid);
          const snap = await getDoc(userDocRef);
          if (snap.exists()) {
            const data = snap.data();
            const hasAccess = data.hasAccess === true || data.active === true || data.ativo === true;
            setCurrentUser({
              uid: fbUser.uid,
              id: fbUser.uid,
              email: data.email || fbUser.email || '',
              name: data.name || fbUser.displayName || 'Aluno CFC - SAD',
              hasAccess,
              active: hasAccess,
              ativo: hasAccess,
              activeSessionId: data.activeSessionId,
              createdAt: data.createdAt
            });
          } else {
            const fallbackProfile: UserProfile = {
              uid: fbUser.uid,
              id: fbUser.uid,
              email: fbUser.email || '',
              name: fbUser.displayName || fbUser.email?.split('@')[0] || 'Aluno CFC - SAD',
              hasAccess: false,
              active: false,
              ativo: false,
              activeSessionId: getLocalSessionId(),
              plan: 'aluno_cfc',
            };
            setCurrentUser(fallbackProfile);
          }

          if (unsubscribeSession) unsubscribeSession();
          unsubscribeSession = subscribeToUserSession(
            fbUser.uid,
            (reason) => {
              setSessionTerminatedNotice(reason);
              setCurrentUser(null);
            },
            (updatedProfile) => {
              setCurrentUser(updatedProfile);
            }
          );
        } catch (e) {
          console.warn('Aviso seguro ao carregar perfil do Firebase:', e);
        }
      } else {
        const demo = getSavedDemoStudent();
        if (demo) {
          setCurrentUser(demo);
        } else {
          setCurrentUser(null);
        }
        if (unsubscribeSession) {
          unsubscribeSession();
          unsubscribeSession = null;
        }
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeSession) unsubscribeSession();
    };
  }, []);

  // Recuperar rascunho de prova em andamento
  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem(LOCAL_DRAFT_EXAM_KEY);
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);
        if (parsed.questionIds && parsed.questionIds.length > 0 && !parsed.isExamFinished) {
          const idMap = new Map<string, Question>();
          simuladoGeral416Questions.forEach((q) => idMap.set(q.id, q));

          const restoredQuestions: Question[] = [];
          parsed.questionIds.forEach((id: string) => {
            const found = idMap.get(id);
            if (found) restoredQuestions.push(found);
          });

          if (restoredQuestions.length > 0) {
            setActiveQuestions(restoredQuestions);
            setCurrentSubjectId(parsed.subjectId || 'simulado_geral');
            setQuizMode(parsed.quizMode || 'study');
            setCurrentIndex(parsed.currentIndex || 0);
            setAnswers(parsed.answers || {});
            setEliminated(parsed.eliminated || {});
            setFlagged(parsed.flagged || {});
            setTimeSpentSeconds(parsed.timeSpentSeconds || 0);
            setIsExamFinished(false);
            setScreen('quiz');
          }
        }
      }
    } catch (e) {
      console.warn('Não foi possível restaurar o rascunho:', e);
    }
  }, []);

  useEffect(() => {
    if (screen === 'quiz' && !isExamFinished && activeQuestions.length > 0) {
      const draftData = {
        subjectId: currentSubjectId,
        quizMode,
        questionIds: activeQuestions.map((q) => q.id),
        currentIndex,
        answers,
        eliminated,
        flagged,
        timeSpentSeconds,
        isExamFinished: false,
        timestamp: Date.now(),
      };
      localStorage.setItem(LOCAL_DRAFT_EXAM_KEY, JSON.stringify(draftData));
    } else if (screen !== 'quiz' || isExamFinished) {
      localStorage.removeItem(LOCAL_DRAFT_EXAM_KEY);
    }
  }, [screen, isExamFinished, activeQuestions, currentIndex, answers, eliminated, flagged, timeSpentSeconds, currentSubjectId, quizMode]);

  useEffect(() => {
    const checkDay = () => setIsDay(isDayTime());
    checkDay();
    const interval = setInterval(checkDay, 30000);
    return () => clearInterval(interval);
  }, []);

  const effectiveDarkMode = useMemo(() => {
    if (themeMode === 'dark') return true;
    if (themeMode === 'light') return false;
    return !isDay;
  }, [themeMode, isDay]);

  useEffect(() => {
    if (effectiveDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [effectiveDarkMode]);

  useEffect(() => {
    document.documentElement.classList.remove('font-small', 'font-normal', 'font-large');
    document.documentElement.classList.add(`font-${fontSize}`);
  }, [fontSize]);

  const handleChangeThemeMode = (mode: ThemeMode) => {
    setThemeMode(mode);
    setSavedThemeMode(mode);
  };

  const handleToggleTheme = () => {
    const nextMode: ThemeMode = effectiveDarkMode ? 'light' : 'dark';
    handleChangeThemeMode(nextMode);
  };

  const handleDecreaseFontSize = () => {
    const newSize: FontSizePreference = fontSize === 'large' ? 'normal' : 'small';
    setFontSize(newSize);
    setSavedFontSize(newSize);
  };

  const handleIncreaseFontSize = () => {
    const newSize: FontSizePreference = fontSize === 'small' ? 'normal' : 'large';
    setFontSize(newSize);
    setSavedFontSize(newSize);
  };

  const wrongQuestionsMap = useMemo(() => {
    return getWrongQuestions();
  }, [storageVersion, answers]);
  const wrongCount = Object.keys(wrongQuestionsMap).length;

  const history = useMemo(() => {
    return getQuizHistory();
  }, [storageVersion, screen]);

  const totalAnsweredCount = history.reduce((acc, h) => acc + h.answeredCount, 0);
  const totalCorrectCount = history.reduce((acc, h) => acc + h.correctCount, 0);
  const overallAccuracy = totalAnsweredCount > 0 ? (totalCorrectCount / totalAnsweredCount) * 100 : 0;

  useEffect(() => {
    if (screen !== 'quiz' || isExamFinished || isTimerPaused) return;

    const interval = setInterval(() => {
      setTimeSpentSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [screen, isExamFinished, isTimerPaused]);

  const handleStartQuiz = (subjectId: SubjectId, mode: QuizMode, questionLimit?: number, shuffle?: boolean) => {
    if (!currentUser) {
      setIsAuthOpen(true);
      return;
    }
    if (!isUserAccessAllowed(currentUser)) {
      return;
    }

    let questionsPool: Question[] = [];

    if (mode === 'mistakes') {
      const wrongIds = new Set(Object.keys(wrongQuestionsMap));
      const all: Question[] = [];
      (Object.keys(allQuestionsBySubject) as SubjectId[]).forEach((subKey) => {
        if (subKey === 'simulado_geral') return;
        allQuestionsBySubject[subKey].forEach((q) => {
          if (wrongIds.has(q.id)) all.push(q);
        });
      });
      questionsPool = all;
    } else {
      questionsPool = [...getQuestionsForSubject(subjectId)];
    }

    if (shuffle) {
      questionsPool.sort(() => Math.random() - 0.5);
    }

    if (questionLimit && questionLimit > 0 && questionLimit < questionsPool.length) {
      questionsPool = questionsPool.slice(0, questionLimit);
    }

    if (questionsPool.length === 0) {
      return;
    }

    setCurrentSubjectId(subjectId);
    setQuizMode(mode);
    setActiveQuestions(questionsPool);
    setCurrentIndex(0);
    setAnswers({});
    setEliminated({});
    setFlagged({});
    setIsExamFinished(false);
    setTimeSpentSeconds(0);
    setIsTimerPaused(false);
    setScreen('quiz');
  };

  const handleSelectAnswer = useCallback((option: OptionKey) => {
    if (isExamFinished) return;

    const currentQ = activeQuestionsRef.current[currentIndex];
    if (!currentQ) return;

    setAnswers((prev) => {
      const next = { ...prev, [currentQ.id]: option };
      const isCorrect = option === currentQ.correctAnswer;
      recordQuestionResult(currentQ.id, currentSubjectId, isCorrect, option);
      return next;
    });
  }, [currentIndex, currentSubjectId, isExamFinished]);

  const handleToggleEliminate = useCallback((option: OptionKey) => {
    const currentQ = activeQuestionsRef.current[currentIndex];
    if (!currentQ) return;

    setEliminated((prev) => {
      const currentElim = prev[currentQ.id] || [];
      const updated = currentElim.includes(option)
        ? currentElim.filter((o) => o !== option)
        : [...currentElim, option];
      return { ...prev, [currentQ.id]: updated };
    });
  }, [currentIndex]);

  const handleToggleFlag = useCallback(() => {
    const currentQ = activeQuestionsRef.current[currentIndex];
    if (!currentQ) return;

    setFlagged((prev) => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id],
    }));
  }, [currentIndex]);

  const handleFinishExam = () => {
    setShowFinishConfirm(false);
    setIsExamFinished(true);
    localStorage.removeItem(LOCAL_DRAFT_EXAM_KEY);

    let correct = 0;
    let wrong = 0;
    activeQuestions.forEach((q) => {
      const userAns = answers[q.id];
      if (userAns === q.correctAnswer) {
        correct++;
      } else if (userAns) {
        wrong++;
      }
    });

    const subInfo = subjectsList.find((s) => s.id === currentSubjectId);
    const historyEntry: QuizHistoryEntry = {
      id: String(Date.now()),
      subjectId: currentSubjectId,
      subjectTitle: subInfo ? subInfo.title : 'Simulado CFC - SAD',
      date: new Date().toLocaleDateString('pt-BR'),
      mode: quizMode,
      totalQuestions: activeQuestions.length,
      answeredCount: Object.keys(answers).length,
      correctCount: correct,
      incorrectCount: wrong,
      percentage: activeQuestions.length > 0 ? (correct / activeQuestions.length) * 100 : 0,
      timeSpentSeconds,
    };

    saveQuizHistory(historyEntry);

    const studentUid = currentUser?.uid || currentUser?.id;
    if (studentUid) {
      recordUserAttempt(studentUid, {
        subjectId: currentSubjectId,
        subjectTitle: subInfo ? subInfo.title : 'Simulado CFC - SAD',
        score: correct,
        totalQuestions: activeQuestions.length,
        percentage: activeQuestions.length > 0 ? (correct / activeQuestions.length) * 100 : 0,
        timeSpentSeconds,
        answersCount: Object.keys(answers).length,
        errorsCount: wrong,
      });
    }

    setStorageVersion((v) => v + 1);
    setScreen('result');
  };

  const handleRetryErrorsOnly = () => {
    const wrongQs = activeQuestions.filter((q) => answers[q.id] && answers[q.id] !== q.correctAnswer);
    if (wrongQs.length === 0) {
      setScreen('home');
      return;
    }
    setActiveQuestions(wrongQs);
    setCurrentIndex(0);
    setAnswers({});
    setEliminated({});
    setFlagged({});
    setIsExamFinished(false);
    setTimeSpentSeconds(0);
    setQuizMode('study');
    setScreen('quiz');
  };

  const handleRestartCurrent = () => {
    setCurrentIndex(0);
    setAnswers({});
    setEliminated({});
    setFlagged({});
    setIsExamFinished(false);
    setTimeSpentSeconds(0);
    setScreen('quiz');
  };

  const currentSubjectInfo = useMemo(() => {
    return subjectsList.find((s) => s.id === currentSubjectId) || subjectsList[0];
  }, [currentSubjectId]);

  const currentQuestion = activeQuestions[currentIndex];
  const answeredTotal = Object.keys(answers).length;
  const progressPercent = activeQuestions.length > 0 ? (answeredTotal / activeQuestions.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-[#002D62] selection:text-white">
      {/* Top Bar Institucional FAB */}
      <Header
        onGoHome={() => setScreen('home')}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
        onOpenRanking={() => setIsRankingOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        currentUser={currentUser}
        onLogout={() => setCurrentUser(null)}
        themeMode={themeMode}
        effectiveDarkMode={effectiveDarkMode}
        onToggleTheme={handleToggleTheme}
        fontSize={fontSize}
        onDecreaseFontSize={handleDecreaseFontSize}
        onIncreaseFontSize={handleIncreaseFontSize}
      />

      {/* Botão Flutuante de Acesso Exclusivo do Administrador */}
      {isAdmin && (
        <div className="bg-[#002D62] border-b border-blue-900 px-4 py-2 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-2 font-medium">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span>Painel Administrativo do Proprietário Ativo</span>
          </div>
          <button
            onClick={() => setIsAdminOpen(true)}
            className="px-3 py-1 rounded-lg bg-[#D4AF37] hover:bg-yellow-600 text-slate-950 font-bold transition-colors shadow-sm flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Abrir Painel Admin</span>
          </button>
        </div>
      )}

      {/* Main Content Area - Otimizado com largura fluida */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {screen === 'home' && (
          <SubjectSelector
            onStartQuiz={handleStartQuiz}
            wrongCount={wrongCount}
            totalAnsweredCount={totalAnsweredCount}
            overallAccuracy={overallAccuracy}
            onOpenRanking={() => setIsRankingOpen(true)}
            onOpenPerformance={() => setIsPerformanceOpen(true)}
            onOpenNormFilter={() => setIsNormFilterOpen(true)}
          />
        )}

        {screen === 'quiz' && currentQuestion && (
          <div className="space-y-6 pb-20">
            {/* Barra de Status e Controle da Prova */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0B192C] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setScreen('home')}
                  className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                  title="Voltar ao menu inicial"
                  aria-label="Voltar ao menu inicial"
                >
                  <Home className="w-5 h-5" />
                </button>
                <div>
                  <h2 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate max-w-xs sm:max-w-md">
                    {currentSubjectInfo.shortTitle}
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-mono">
                      {answeredTotal} de {activeQuestions.length} respondidas ({progressPercent.toFixed(0)}%)
                    </span>
                    <span>&middot;</span>
                    <span className="uppercase text-[10px] tracking-wider font-semibold text-[#002D62] dark:text-blue-400">
                      {quizMode === 'exam' ? 'Modo Prova' : quizMode === 'mistakes' ? 'Caderno de Erros' : 'Modo Estudo'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                {quizMode === 'exam' && (
                  <ExamTimer
                    initialSeconds={activeQuestions.length * 90}
                    onTimeExpired={handleFinishExam}
                    isPaused={isTimerPaused}
                    onTogglePause={() => setIsTimerPaused(!isTimerPaused)}
                  />
                )}

                <button
                  onClick={() => setIsChatOpen(true)}
                  className="p-2 text-[#002D62] dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-bold border border-blue-200 dark:border-blue-800"
                  title="Tirar dúvida sobre esta questão"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="hidden sm:inline">Dúvida com IA</span>
                </button>

                <button
                  onClick={() => setIsGridOpenMobile(!isGridOpenMobile)}
                  className="lg:hidden p-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-semibold"
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span>Grade</span>
                </button>

                <button
                  onClick={() => setShowFinishConfirm(true)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Entregar Simulado</span>
                </button>
              </div>
            </div>

            {/* Barra de Progresso */}
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#002D62] to-[#D4AF37] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Layout 2 Colunas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8 space-y-6">
                <QuestionCard
                  question={currentQuestion}
                  currentIndex={currentIndex}
                  totalQuestions={activeQuestions.length}
                  selectedAnswer={answers[currentQuestion.id]}
                  onSelectAnswer={handleSelectAnswer}
                  eliminatedOptions={eliminated[currentQuestion.id] || []}
                  onToggleEliminate={handleToggleEliminate}
                  isFlagged={Boolean(flagged[currentQuestion.id])}
                  onToggleFlag={handleToggleFlag}
                  mode={quizMode}
                  isExamFinished={isExamFinished}
                  fontSize={fontSize}
                  onAskAI={(q) => {
                    setQuestionToExplain(q);
                    setIsChatOpen(true);
                  }}
                />

                <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#0B192C] border border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Anterior
                  </button>

                  <div className="flex flex-col items-center">
                    <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      {currentIndex + 1} / {activeQuestions.length}
                    </span>
                  </div>

                  <button
                    onClick={() => setCurrentIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
                    disabled={currentIndex === activeQuestions.length - 1}
                    className="py-2.5 px-4 rounded-xl bg-[#002D62] hover:bg-blue-900 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Próxima
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24">
                <QuestionGrid
                  questions={activeQuestions}
                  currentIndex={currentIndex}
                  onSelectIndex={(idx) => setCurrentIndex(idx)}
                  answers={answers}
                  flagged={flagged}
                  mode={quizMode}
                  isExamFinished={isExamFinished}
                />
              </div>
            </div>
          </div>
        )}

        {screen === 'result' && (
          <ResultScreen
            questions={activeQuestions}
            answers={answers}
            subjectInfo={currentSubjectInfo}
            timeSpentSeconds={timeSpentSeconds}
            onRestart={handleRestartCurrent}
            onRetryErrors={handleRetryErrorsOnly}
            onGoHome={() => setScreen('home')}
            currentUser={currentUser}
            onOpenRanking={() => setIsRankingOpen(true)}
            onOpenAuth={() => setIsAuthOpen(true)}
          />
        )}
      </main>

      {/* Modais e Painel Admin */}
      {isAuthOpen && (
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onSuccess={(profile) => {
            setCurrentUser(profile);
            setIsAuthOpen(false);
          }}
        />
      )}

      {isRankingOpen && (
        <RankingModal
          isOpen={isRankingOpen}
          onClose={() => setIsRankingOpen(false)}
        />
      )}

      {isAdminOpen && (
        <AdminPanel
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}
