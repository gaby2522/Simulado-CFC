import React from 'react';
import { Moon, Sun, Search, Settings, MessageSquare, Trophy, User, LogOut } from 'lucide-react';
import { ThemeMode, FontSizePreference } from '../utils/storage';
import { UserProfile, logoutStudent, isUserAccessAllowed } from '../utils/firebase';

import fabCrestIcon from '../assets/images/fab_crest_icon_1791982746034.jpg';

interface HeaderProps {
  onGoHome: () => void;
  onOpenSearch: () => void;
  onOpenSettings: () => void;
  onOpenChat: () => void;
  onOpenRanking: () => void;
  onOpenAuth: () => void;
  currentUser: UserProfile | null;
  onLogout: () => void;
  themeMode: ThemeMode;
  effectiveDarkMode: boolean;
  onToggleTheme: () => void;
  fontSize: FontSizePreference;
  onDecreaseFontSize: () => void;
  onIncreaseFontSize: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onGoHome,
  onOpenSearch,
  onOpenSettings,
  onOpenChat,
  onOpenRanking,
  onOpenAuth,
  currentUser,
  onLogout,
  themeMode,
  effectiveDarkMode,
  onToggleTheme,
  fontSize,
  onDecreaseFontSize,
  onIncreaseFontSize,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0B192C]/95 backdrop-blur-md transition-colors shadow-2xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Zone com Brasão Oficial da FAB e Badge Alinhada */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
        >
          {/* Brasão Oficial da FAB em w-9 h-9, rounded-xl e alinhamento impecável */}
          <div className="w-9 h-9 rounded-xl overflow-hidden shadow-sm border border-[#D4AF37]/60 bg-[#002D62] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
            <img
              src={fabCrestIcon}
              alt="Brasão Oficial da Força Aérea Brasileira"
              className="w-full h-full object-cover select-none pointer-events-none"
              loading="eager"
            />
          </div>

          <div className="flex items-center gap-2.5">
            <span className="font-black text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              SIMULADO CFC - SAD
            </span>
            <span className="text-[10px] font-black text-[#002D62] dark:text-blue-300 bg-blue-100/90 dark:bg-blue-950 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800 uppercase tracking-wider hidden sm:inline shadow-2xs">
              FORÇA AÉREA BRASILEIRA - CFC SAD
            </span>
          </div>
        </button>

        {/* Center Zone - Atalhos Rápidos */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#002D62] dark:hover:text-blue-400 transition-colors text-xs font-semibold shadow-2xs"
            title="Pesquisar por assunto ou palavra-chave no banco de 416 questões"
          >
            <Search className="w-3.5 h-3.5 text-[#002D62] dark:text-blue-400" />
            <span>Buscar Questão (416 Itens)</span>
          </button>

          <button
            onClick={onOpenRanking}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-300/60 dark:border-amber-700/60 bg-amber-50/60 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-amber-900 dark:text-amber-300 text-xs font-bold transition-colors shadow-2xs"
            title="Ver Ranking dos Alunos da Semana"
          >
            <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Ranking Oficial</span>
          </button>
        </div>

        {/* Actions Zone */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Botão Tutor IA Gemini para o CFC */}
          <button
            onClick={onOpenChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 text-[#002D62] dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold transition-all shadow-2xs"
            title="Abrir Tutor IA Especialista do CFC - SAD"
          >
            <MessageSquare className="w-4 h-4 text-[#002D62] dark:text-blue-400" />
            <span className="hidden sm:inline">Tutor IA CFC</span>
          </button>

          {/* Botão Ranking no Mobile */}
          <button
            onClick={onOpenRanking}
            aria-label="Abrir Ranking"
            title="Ranking da Semana"
            className="lg:hidden p-2 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/50 rounded-xl transition-colors"
          >
            <Trophy className="w-4 h-4 text-[#D4AF37]" />
          </button>

          {/* Botão de Busca Mobile */}
          <button
            onClick={onOpenSearch}
            aria-label="Buscar questão"
            title="Buscar questão no banco de 416 itens"
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Controle de Fonte Duplo: Botão A- e Botão A+ funcionais */}
          <div className="hidden sm:flex items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-0.5" role="group" aria-label="Ajustar tamanho da fonte">
            <button
              onClick={onDecreaseFontSize}
              disabled={fontSize === 'small'}
              aria-label="Diminuir tamanho do texto"
              title="Diminuir tamanho do texto (A-)"
              className={`px-2 py-1 text-xs font-black rounded-lg transition-all ${
                fontSize === 'small'
                  ? 'opacity-35 cursor-not-allowed text-slate-400 dark:text-slate-500'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 hover:shadow-2xs active:scale-95'
              }`}
            >
              A-
            </button>
            <span className="text-[10px] font-mono px-1 text-slate-400 select-none">
              {fontSize === 'small' ? 'P' : fontSize === 'large' ? 'G' : 'M'}
            </span>
            <button
              onClick={onIncreaseFontSize}
              disabled={fontSize === 'large'}
              aria-label="Aumentar tamanho do texto"
              title="Aumentar tamanho do texto (A+)"
              className={`px-2 py-1 text-xs font-black rounded-lg transition-all ${
                fontSize === 'large'
                  ? 'opacity-35 cursor-not-allowed text-slate-400 dark:text-slate-500'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 hover:shadow-2xs active:scale-95'
              }`}
            >
              A+
            </button>
          </div>

          {/* Alternador de Tema Claro e Escuro com feedback imediato */}
          <button
            onClick={onToggleTheme}
            aria-label="Alternar tema claro/escuro"
            title={effectiveDarkMode ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro'}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
          >
            {effectiveDarkMode ? (
              <Sun className="w-4 h-4 text-[#D4AF37] hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-[#002D62] hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Botão de Autenticação / Perfil do Aluno */}
          {currentUser ? (
            <div className="flex items-center gap-1.5 pl-1">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200"
                title={`Conectado como ${currentUser.name} (${currentUser.email})`}
              >
                <User className="w-3.5 h-3.5 text-[#002D62] dark:text-blue-400" />
                <span className="hidden md:inline max-w-[120px] truncate">{currentUser.name}</span>
                {isUserAccessAllowed(currentUser) ? (
                  <span className="hidden sm:inline-block text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-300 dark:border-emerald-800 uppercase">
                    Vitalício
                  </span>
                ) : (
                  <span className="hidden sm:inline-block text-[10px] font-black text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60 px-1.5 py-0.2 rounded border border-amber-300 dark:border-amber-800 uppercase">
                    Pendente
                  </span>
                )}
              </div>
              <button
                onClick={async () => {
                  await logoutStudent();
                  onLogout();
                }}
                className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-xl transition-colors"
                title="Sair da conta"
                aria-label="Sair da conta"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#002D62] hover:bg-blue-900 text-white text-xs font-bold transition-all shadow-2xs"
            >
              <User className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden sm:inline">Entrar</span>
            </button>
          )}

          {/* Botão Configurações */}
          <button
            onClick={onOpenSettings}
            aria-label="Abrir configurações"
            title="Configurações e histórico"
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
