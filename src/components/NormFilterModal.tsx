import React, { useState, useMemo } from 'react';
import { X, Filter, BookOpen, Search, Play, CheckCircle2, ChevronRight } from 'lucide-react';
import { Question, OptionKey } from '../types/quiz';
import { simuladoGeral416Questions } from '../data/allQuestions';
import { FabBadge } from './FabBadge';

interface NormOption {
  id: string;
  name: string;
  code: string;
  description: string;
  matchPattern: RegExp;
  color: string;
}

const AVAILABLE_NORMS: NormOption[] = [
  {
    id: 'nsca_10_2',
    name: 'NSCA 10-2',
    code: 'NSCA 10-2',
    description: 'Correspondência e Atos Administrativos no Comando da Aeronáutica',
    matchPattern: /NSCA\s*10-2|Correspond[eê]ncia|Of[ií]cio|Memorando|Despacho|Portaria|Parte|Ato\s*Administrativo/i,
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'rcont',
    name: 'RCONT',
    code: 'RCONT / MD',
    description: 'Regulamento de Continências, Honras e Sinais de Respeito das Forças Armadas',
    matchPattern: /RCONT|Contin[eê]ncia|Honras|Sinais\s*de\s*Respeito|Preced[eê]ncia/i,
    color: 'from-sky-600 to-blue-800',
  },
  {
    id: 'rada',
    name: 'RADA-e / Administração',
    code: 'RADA-e',
    description: 'Regulamento de Administração da Aeronáutica e Gestão de Documentos',
    matchPattern: /RADA|Administra[çc][aã]o|Processo\s*Administrativo|Protocolo/i,
    color: 'from-emerald-600 to-teal-800',
  },
  {
    id: 'rdaer',
    name: 'RDAER / Disciplina',
    code: 'RDAER',
    description: 'Regulamento Disciplinar da Aeronáutica e Sanções Disciplinares',
    matchPattern: /RDAER|Regulamento\s*Disciplinar|Transgress[aã]o|Puni[çc][aã]o|Pris[aã]o|Deten[çc][aã]o/i,
    color: 'from-amber-600 to-orange-800',
  },
  {
    id: 'estatuto',
    name: 'Estatuto dos Militares',
    code: 'Lei 6.880',
    description: 'Deveres, Direitos, Prerrogativas e Obrigações Militares',
    matchPattern: /6\.?880|Estatuto|Dever|Hierarquia|Carreira|Licen[çc]a|Reserva/i,
    color: 'from-purple-600 to-indigo-900',
  },
  {
    id: 'etica',
    name: 'Ética & Liderança Militar',
    code: 'Doutrina FAB',
    description: 'Preceitos da Ética Militar, Espírito de Corpo e Valores da Força Aérea',
    matchPattern: /[EÉ]tica|Conduta|Moral|Camaradagem|Lideran[çc]a|Dignidade|Probidade/i,
    color: 'from-[#002D62] to-[#0B192C]',
  },
  {
    id: 'seguranca',
    name: 'Segurança do Trabalho',
    code: 'Normas de Segurança',
    description: 'Prevenção de acidentes de trabalho, EPIs e saúde ocupacional na FAB',
    matchPattern: /Seguran[çc]a\s*do\s*Trabalho|EPI|Acidente|Insalubridade|Preven[çc][aã]o/i,
    color: 'from-teal-600 to-cyan-800',
  },
  {
    id: 'sad_tecnico',
    name: 'Rotinas e Técnicas de SAD',
    code: 'SAD Prático',
    description: 'Rotinas de secretaria, redação oficial, tramitação e arquivo de documentos',
    matchPattern: /Arquivo|Reda[çc][aã]o|Tramita[çc][aã]o|Expediente|Secretaria|Protocolo/i,
    color: 'from-slate-700 to-slate-900',
  },
];

interface NormFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartFilteredQuiz: (questions: Question[], normTitle: string) => void;
}

export const NormFilterModal: React.FC<NormFilterModalProps> = ({
  isOpen,
  onClose,
  onStartFilteredQuiz,
}) => {
  const [selectedNormId, setSelectedNormId] = useState<string>('nsca_10_2');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  // Filtra as 416 questões de acordo com a norma selecionada
  const selectedNorm = AVAILABLE_NORMS.find((n) => n.id === selectedNormId) || AVAILABLE_NORMS[0];

  const matchedQuestions = useMemo(() => {
    return simuladoGeral416Questions.filter((q) => {
      const matchNorm =
        selectedNorm.matchPattern.test(q.sourceDoc) ||
        selectedNorm.matchPattern.test(q.topic || '') ||
        selectedNorm.matchPattern.test(q.text) ||
        selectedNorm.matchPattern.test(q.explanation);

      if (!matchNorm) return false;

      if (!searchTerm.trim()) return true;

      const lowerSearch = searchTerm.toLowerCase();
      return (
        q.text.toLowerCase().includes(lowerSearch) ||
        q.explanation.toLowerCase().includes(lowerSearch) ||
        q.sourceDoc.toLowerCase().includes(lowerSearch)
      );
    });
  }, [selectedNorm, searchTerm]);

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
                  Filtro por Legislação e Norma Oficial
                </h2>
                <span className="text-[10px] font-extrabold text-[#0B192C] bg-[#D4AF37] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Edital CFC SAD
                </span>
              </div>
              <p className="text-xs text-blue-200">
                Selecione uma norma específica para criar um simulado direcionado no seu ponto de estudo
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

        {/* Seleção de Normas em Grade de Botões */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 shrink-0">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#002D62] dark:text-blue-400" />
            Selecione a Legislação Desejada:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {AVAILABLE_NORMS.map((norm) => {
              const isSelected = norm.id === selectedNormId;
              return (
                <button
                  key={norm.id}
                  onClick={() => setSelectedNormId(norm.id)}
                  type="button"
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'border-[#002D62] dark:border-blue-500 bg-blue-50/90 dark:bg-blue-950/70 ring-2 ring-[#002D62]/20 dark:ring-blue-500/30 shadow-2xs'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {norm.code}
                    </span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#002D62] dark:text-blue-400" />}
                  </div>
                  <span className="font-bold text-xs text-slate-900 dark:text-white block truncate">
                    {norm.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Resumo da Norma Selecionada + Busca Opcional */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                {selectedNorm.name}
              </span>
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded-full">
                {matchedQuestions.length} questões encontradas
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {selectedNorm.description}
            </p>
          </div>

          <button
            onClick={() => {
              if (matchedQuestions.length === 0) return;
              onClose();
              onStartFilteredQuiz(matchedQuestions, selectedNorm.name);
            }}
            disabled={matchedQuestions.length === 0}
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#002D62] to-[#0B192C] hover:opacity-95 shadow-md flex items-center gap-2 transition-all active:scale-95 disabled:opacity-40"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Treinar Estas {matchedQuestions.length} Questões</span>
          </button>
        </div>

        {/* Preview das Questões Filtradas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Amostra das questões cadastradas nesta norma:
          </div>

          {matchedQuestions.slice(0, 10).map((q, idx) => (
            <div
              key={q.id}
              className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-1.5"
            >
              <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Item #{idx + 1}</span>
                <span className="truncate max-w-xs">{q.sourceDoc}</span>
              </div>
              <p className="text-xs font-medium text-slate-800 dark:text-slate-200 line-clamp-2">
                {q.text}
              </p>
            </div>
          ))}

          {matchedQuestions.length > 10 && (
            <p className="text-xs text-center text-slate-400 pt-2">
              + {matchedQuestions.length - 10} outras questões incluídas no simulado da norma.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
