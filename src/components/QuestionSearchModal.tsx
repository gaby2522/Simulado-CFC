import React, { useState, useMemo } from 'react';
import { Question, SubjectId } from '../types/quiz';
import { allQuestionsBySubject, subjectsList } from '../data/allQuestions';
import { Search, X, BookOpen, Check, ArrowRight } from 'lucide-react';

interface QuestionSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectQuestion: (question: Question) => void;
}

export const QuestionSearchModal: React.FC<QuestionSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectQuestion,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');

  // Compilar todas as 416 questões
  const allQuestions = useMemo(() => {
    const list: Question[] = [];
    const seen = new Set<string>();

    (Object.keys(allQuestionsBySubject) as SubjectId[]).forEach((subKey) => {
      if (subKey === 'simulado_geral') return; // evita duplicatas
      allQuestionsBySubject[subKey].forEach((q) => {
        if (!seen.has(q.id)) {
          seen.add(q.id);
          list.push(q);
        }
      });
    });
    return list;
  }, []);

  const results = useMemo(() => {
    if (!searchTerm.trim() && selectedSubjectFilter === 'all') {
      return allQuestions.slice(0, 20); // primeiras 20 para início
    }

    const term = searchTerm.toLowerCase().trim();
    return allQuestions
      .filter((q) => {
        if (selectedSubjectFilter !== 'all' && q.subjectId !== selectedSubjectFilter) {
          return false;
        }
        if (!term) return true;
        return (
          q.text.toLowerCase().includes(term) ||
          (q.topic && q.topic.toLowerCase().includes(term)) ||
          q.explanation.toLowerCase().includes(term) ||
          q.sourceDoc.toLowerCase().includes(term) ||
          Object.values(q.options).some((opt) => opt.toLowerCase().includes(term))
        );
      })
      .slice(0, 50); // limita a 50 resultados para performance
  }, [allQuestions, searchTerm, selectedSubjectFilter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        {/* Header de Pesquisa */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Pesquisa no Banco de Questões do CFC - SAD
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por termo (ex: NUP, Genebra, EPI, Soldo, continência, RADA...)"
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
            </div>

            <select
              value={selectedSubjectFilter}
              onChange={(e) => setSelectedSubjectFilter(e.target.value)}
              className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 focus:outline-none"
            >
              <option value="all">Todas as Disciplinas</option>
              {subjectsList.filter(s => s.id !== 'simulado_geral').map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.shortTitle}
                </option>
              ))}
            </select>
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>Encontradas {results.length} questões (total de 416 no banco)</span>
          </div>
        </div>

        {/* Lista de Resultados */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {results.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <BookOpen className="w-10 h-10 mx-auto mb-2 opacity-50" />
              <p>Nenhuma questão encontrada com o termo "{searchTerm}".</p>
            </div>
          ) : (
            results.map((q) => (
              <div
                key={q.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-blue-300 dark:hover:border-blue-700 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-bold text-xs flex items-center justify-center">
                      #{q.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      {q.topic || 'Conhecimentos CFC - SAD'}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      onSelectQuestion(q);
                      onClose();
                    }}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1"
                  >
                    Abrir no Simulado
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                  {q.text}
                </p>

                <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg flex items-start gap-1.5">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    Gabarito: <strong>({q.correctAnswer.toUpperCase()})</strong> - {q.options[q.correctAnswer]}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
