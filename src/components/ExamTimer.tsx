import React, { useEffect, useState } from 'react';
import { Clock, Pause, Play, AlertTriangle } from 'lucide-react';

interface ExamTimerProps {
  initialSeconds: number;
  onTimeExpired: () => void;
  isPaused: boolean;
  onTogglePause: () => void;
  onTick?: (remainingSeconds: number) => void;
}

export const ExamTimer: React.FC<ExamTimerProps> = ({
  initialSeconds,
  onTimeExpired,
  isPaused,
  onTogglePause,
  onTick,
}) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    setSecondsLeft(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (isPaused || secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeExpired();
          return 0;
        }
        const updated = prev - 1;
        if (onTick) onTick(updated);
        return updated;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, secondsLeft, onTimeExpired, onTick]);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  // Estados do Timer Inteligente
  const isCriticalRed = secondsLeft <= 300; // Últimos 5 minutos: vermelho piscante
  const isWarningYellow = secondsLeft > 300 && secondsLeft <= 900; // Últimos 15 minutos: amarelo de atenção

  return (
    <div
      className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
        isCriticalRed
          ? 'bg-red-50 dark:bg-red-950/60 border-red-500 text-red-600 dark:text-red-400 animate-pulse ring-2 ring-red-400/40 shadow-sm'
          : isWarningYellow
          ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-400 text-amber-700 dark:text-amber-300 ring-1 ring-amber-400/30 shadow-2xs'
          : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
      }`}
    >
      {isCriticalRed ? (
        <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 animate-bounce" />
      ) : isWarningYellow ? (
        <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
      ) : (
        <Clock className="w-4 h-4 text-[#002D62] dark:text-blue-400" />
      )}

      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="font-mono tabular-nums tracking-wider font-bold">
            {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </span>
          {isCriticalRed && (
            <span className="text-[10px] uppercase font-black tracking-widest text-red-600 dark:text-red-400">
              URGENTE
            </span>
          )}
          {isWarningYellow && (
            <span className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400">
              15 MIN
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={onTogglePause}
        className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors text-slate-500"
        title={isPaused ? 'Continuar tempo' : 'Pausar tempo'}
        aria-label={isPaused ? 'Continuar tempo' : 'Pausar tempo'}
      >
        {isPaused ? <Play className="w-3.5 h-3.5 fill-current text-emerald-600" /> : <Pause className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
