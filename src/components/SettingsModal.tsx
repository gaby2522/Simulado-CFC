import React, { useState, useEffect } from 'react';
import { ThemeMode, FontSizePreference, isDayTime } from '../utils/storage';
import {
  Settings,
  X,
  Sun,
  Moon,
  Clock,
  Type,
  RotateCcw,
  CheckCircle2,
  Info,
  AlertTriangle,
  Smartphone,
  ExternalLink
} from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  themeMode: ThemeMode;
  onChangeThemeMode: (mode: ThemeMode) => void;
  fontSize: FontSizePreference;
  onChangeFontSize: (size: FontSizePreference) => void;
  onResetAllData: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  themeMode,
  onChangeThemeMode,
  fontSize,
  onChangeFontSize,
  onResetAllData,
}) => {
  const [currentHour, setCurrentHour] = useState<string>('');
  const [dayTimeNow, setDayTimeNow] = useState<boolean>(true);
  const [isConfirmingReset, setIsConfirmingReset] = useState<boolean>(false);
  const [resetFeedback, setResetFeedback] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentHour(now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
      setDayTimeNow(isDayTime());
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  // Limpa estados temporários ao fechar
  useEffect(() => {
    if (!isOpen) {
      setIsConfirmingReset(false);
      setResetFeedback(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExecuteReset = () => {
    onResetAllData();
    setIsConfirmingReset(false);
    setResetFeedback('Histórico de simulados e caderno de erros foram reiniciados com sucesso!');
    setTimeout(() => {
      setResetFeedback(null);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Configurações do Simulado CFC - SAD
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Personalize tema, tamanho de texto e histórico de estudos
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo das Opções */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[75vh]">
          {/* Seção de Tema Visual */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-500" />
                Tema Visual da Aplicação
              </label>
              <span className="text-[11px] font-mono text-slate-400">
                Horário local: {currentHour}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* Opção Claro */}
              <button
                type="button"
                onClick={() => onChangeThemeMode('light')}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 ${
                  themeMode === 'light'
                    ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 ring-1 ring-blue-600'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Sun className="w-5 h-5 text-amber-500" />
                  {themeMode === 'light' && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    Modo Claro
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    Fixar sempre claro
                  </span>
                </div>
              </button>

              {/* Opção Escuro */}
              <button
                type="button"
                onClick={() => onChangeThemeMode('dark')}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 ${
                  themeMode === 'dark'
                    ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 ring-1 ring-blue-600'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Moon className="w-5 h-5 text-indigo-400" />
                  {themeMode === 'dark' && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    Modo Escuro
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    Fixar sempre escuro
                  </span>
                </div>
              </button>

              {/* Opção Automático por Horário */}
              <button
                type="button"
                onClick={() => onChangeThemeMode('auto')}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 ${
                  themeMode === 'auto'
                    ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 ring-1 ring-blue-600'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  {themeMode === 'auto' && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    Automático
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    Dia / Noite por horário
                  </span>
                </div>
              </button>
            </div>

            {/* Informação sobre o Modo Automático */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p>
                  <strong>Regra Automática:</strong> Claro das <strong>06:00 às 18:00</strong> e Escuro das <strong>18:00 às 06:00</strong>.
                </p>
                {themeMode === 'auto' && (
                  <p className="mt-1 font-semibold text-blue-700 dark:text-blue-300">
                    &bull; Aplicando agora: {dayTimeNow ? '☀️ Tema Claro (Período Diurno)' : '🌙 Tema Escuro (Período Noturno)'}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Seção Tamanho de Fonte com 3 níveis (Pequena, Padrão, Grande) */}
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Type className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Tamanho do Texto das Questões
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => onChangeFontSize('small')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  fontSize === 'small'
                    ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold ring-1 ring-blue-600'
                    : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span className="block text-xs font-bold">Pequena (A-)</span>
                <span className="text-[10px] text-slate-400">14px</span>
              </button>
              <button
                type="button"
                onClick={() => onChangeFontSize('normal')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  fontSize === 'normal'
                    ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold ring-1 ring-blue-600'
                    : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span className="block text-xs font-bold">Padrão</span>
                <span className="text-[10px] text-slate-400">16px</span>
              </button>
              <button
                type="button"
                onClick={() => onChangeFontSize('large')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  fontSize === 'large'
                    ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold ring-1 ring-blue-600'
                    : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span className="block text-xs font-bold">Grande (A+)</span>
                <span className="text-[10px] text-slate-400">18px</span>
              </button>
            </div>
          </div>

          {/* Seção de Limpeza de Dados com Confirmação In-App */}
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-red-500" />
              Dados do Candidato
            </label>

            {resetFeedback && (
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>{resetFeedback}</span>
              </div>
            )}

            {!isConfirmingReset ? (
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50/40 dark:bg-red-950/20">
                <div className="pr-2">
                  <span className="text-xs font-bold text-red-700 dark:text-red-400 block">
                    Reiniciar Histórico Completo
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Limpa simulados anteriores, métricas de acertos e caderno de erros.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsConfirmingReset(true)}
                  className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors shrink-0 shadow-2xs"
                >
                  Reiniciar Dados
                </button>
              </div>
            ) : (
              <div className="p-4 rounded-xl border-2 border-red-500 bg-red-50 dark:bg-red-950/40 space-y-3 animate-in fade-in duration-150">
                <div className="flex items-start gap-2.5 text-red-700 dark:text-red-300">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-red-600 dark:text-red-400" />
                  <div>
                    <h4 className="text-xs font-bold">Confirmação de Reinicialização</h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                      Tem certeza? Todas as respostas gravadas, aproveitamento e o caderno de erros serão zerados permanentemente.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsConfirmingReset(false)}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={handleExecuteReset}
                    className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-xs"
                  >
                    Sim, Apagar Tudo
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Seção PWA & Versão Standalone HTML */}
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Progressive Web App (PWA) & Versão em Arquivo Único
            </label>
            <div className="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <p className="leading-relaxed">
                Este aplicativo está configurado com <strong>manifest.json</strong>, <strong>Service Worker</strong> para cache offline e suporte à instalação direta na tela inicial do celular ou desktop.
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  Arquivo Único HTML Standalone
                </span>
                <a
                  href="/standalone.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                >
                  <span>Abrir Versão Standalone</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-colors shadow-2xs"
          >
            Concluído
          </button>
        </div>
      </div>
    </div>
  );
};
