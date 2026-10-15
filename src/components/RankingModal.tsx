import React, { useEffect, useState } from 'react';
import { X, Trophy, Medal, Clock, Award, Play, RefreshCw, UserCheck, AlertCircle, LogIn } from 'lucide-react';
import { fetchTopRankings, RankingItem, UserProfile } from '../utils/firebase';
import { FabBadge } from './FabBadge';

interface RankingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartOfficialExam: () => void;
  currentUser: UserProfile | null;
  onOpenAuth?: () => void;
}

export const RankingModal: React.FC<RankingModalProps> = ({
  isOpen,
  onClose,
  onStartOfficialExam,
  currentUser,
  onOpenAuth,
}) => {
  const [rankings, setRankings] = useState<RankingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const res = await fetchTopRankings();
      setRankings(res.data);
      if (res.errorMsg && res.data.length === 0) {
        setErrorMessage(res.errorMsg);
      }
    } catch (e: any) {
      console.warn('Erro ao carregar dados do ranking:', e);
      setErrorMessage('O ranking oficial está em sincronização. Você ainda pode realizar o simulado normalmente.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white dark:bg-[#0B192C] w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header FAB */}
        <div className="p-5 bg-gradient-to-r from-[#002D62] to-[#0B192C] text-white flex items-center justify-between border-b border-[#D4AF37]/40 shrink-0">
          <div className="flex items-center gap-3">
            <FabBadge size="md" />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold tracking-tight">
                  Ranking Oficial do Simulado Semanal
                </h2>
                <span className="text-[10px] font-extrabold text-[#0B192C] bg-[#D4AF37] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  CFC - SAD
                </span>
              </div>
              <p className="text-xs text-blue-200">
                Quadro de Honra e classificação geral dos alunos da Força Aérea
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

        {/* Mensagem amigável de erro de permissão ou sincronização caso ocorra */}
        {errorMessage && (
          <div className="p-3.5 bg-blue-50/90 dark:bg-blue-950/60 border-b border-blue-200 dark:border-blue-900/60 flex items-center justify-between gap-3 text-xs text-[#002D62] dark:text-blue-300 shrink-0">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
            {!currentUser && onOpenAuth && (
              <button
                onClick={() => {
                  onClose();
                  onOpenAuth();
                }}
                className="px-2.5 py-1 rounded-lg bg-[#002D62] text-white font-bold text-[11px] hover:bg-blue-900 transition-colors shrink-0 flex items-center gap-1"
              >
                <LogIn className="w-3 h-3" />
                <span>Entrar</span>
              </button>
            )}
          </div>
        )}

        {/* Barra de Ação Rápida: Iniciar Simulado Oficial da Semana */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
            <Trophy className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Faça o Simulado Oficial da Semana e dispute o topo do ranking!</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              disabled={loading}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors text-xs font-semibold"
              title="Atualizar ranking"
              aria-label="Atualizar ranking"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => {
                onClose();
                onStartOfficialExam();
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#002D62] to-[#0B192C] hover:opacity-95 shadow-sm flex items-center gap-1.5 transition-all active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Realizar Simulado Oficial</span>
            </button>
          </div>
        </div>

        {/* Lista de Classificação */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {loading ? (
            <div className="py-16 text-center text-slate-400 space-y-3">
              <RefreshCw className="w-8 h-8 mx-auto animate-spin text-[#002D62] dark:text-blue-400" />
              <p className="text-sm font-medium">Carregando quadro de honra dos alunos...</p>
            </div>
          ) : rankings.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <Award className="w-12 h-12 mx-auto text-[#D4AF37] opacity-80" />
              <h3 className="font-bold text-slate-800 dark:text-slate-200">Nenhum simulado registrado nesta semana</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Seja o primeiro aluno a concluir o Simulado Oficial e liderar o ranking do CFC SAD!
              </p>
              <button
                onClick={() => {
                  onClose();
                  onStartOfficialExam();
                }}
                className="mt-2 px-4 py-2 rounded-xl font-bold text-xs text-white bg-[#002D62] hover:bg-blue-900 shadow-sm"
              >
                Iniciar Agora
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              {rankings.map((item, index) => {
                const isTop1 = index === 0;
                const isTop2 = index === 1;
                const isTop3 = index === 2;
                const isMe = currentUser && currentUser.id === item.userId;

                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                      isTop1
                        ? 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 shadow-sm'
                        : isTop2
                        ? 'bg-slate-50 dark:bg-slate-800/80 border-slate-300 dark:border-slate-700'
                        : isTop3
                        ? 'bg-amber-50/30 dark:bg-amber-950/20 border-amber-200/80 dark:border-amber-900/60'
                        : isMe
                        ? 'bg-blue-50/80 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    {/* Posição e Identificação */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0 shadow-2xs ${
                          isTop1
                            ? 'bg-gradient-to-br from-amber-300 to-amber-500 text-slate-950 ring-2 ring-amber-300/50'
                            : isTop2
                            ? 'bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900 ring-2 ring-slate-300/50'
                            : isTop3
                            ? 'bg-gradient-to-br from-amber-600 to-amber-800 text-white ring-2 ring-amber-700/50'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {isTop1 ? <Medal className="w-4 h-4 fill-current" /> : `${index + 1}º`}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-slate-900 dark:text-white">
                            {item.userName}
                          </span>
                          {isMe && (
                            <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 px-1.5 py-0.2 rounded flex items-center gap-1">
                              <UserCheck className="w-3 h-3" /> Você
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {formatTime(item.timeSpentSeconds)}
                          </span>
                          <span>&middot;</span>
                          <span>{item.score} de {item.totalQuestions} acertos</span>
                        </div>
                      </div>
                    </div>

                    {/* Nota Percentual */}
                    <div className="text-right">
                      <div
                        className={`font-black text-base sm:text-lg tabular-nums tracking-tight ${
                          item.percentage >= 70
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : item.percentage >= 50
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-red-600 dark:text-red-400'
                        }`}
                      >
                        {item.percentage}%
                      </div>
                      <span className="text-[10px] font-mono uppercase text-slate-400">
                        {item.percentage >= 70 ? 'Apto' : 'Revisar'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
