import React, { useState, useRef, useEffect } from 'react';
import { Question } from '../types/quiz';
import fabCrestIcon from '../assets/images/fab_crest_icon_1791982746034.jpg';
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  BookOpen
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

interface GeminiChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentQuestion?: Question;
  autoQuestionToExplain?: Question | null;
}

export const GeminiChatDrawer: React.FC<GeminiChatDrawerProps> = ({
  isOpen,
  onClose,
  currentQuestion,
  autoQuestionToExplain,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: 'Olá, futuro Cabo da Aeronáutica! Sou seu Instrutor Virtual para a prova do Curso de Formação de Cabos (CFC - SAD). Posso esclarecer dúvidas sobre as apostilas oficiais da FAB: Especialidade SAD, Legislação Militar, Estatuto dos Militares, RDAER, RCONT, Ética/DICA e Segurança do Trabalho. Em que posso te orientar hoje? Ad Astra et Ultra!',
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastExplainedId = useRef<string | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string, questionOverride?: Question) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    const questionContext = questionOverride || currentQuestion;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, text: m.text })),
          contextQuestion: questionContext
            ? {
                number: questionContext.number,
                topic: questionContext.topic,
                text: questionContext.text,
                options: questionContext.options,
                explanation: questionContext.explanation,
                sourceDoc: questionContext.sourceDoc,
              }
            : undefined,
        }),
      });

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: String(Date.now() + 1),
        role: 'assistant',
        text: data.reply || 'Desculpe, não consegui obter resposta da IA.',
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...newMessages, assistantMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: String(Date.now() + 1),
        role: 'assistant',
        text: 'Não foi possível conectar ao servidor no momento. Verifique sua conexão e tente novamente.',
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...newMessages, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Disparo automático quando o aluno clica em "Chamar Tutor IA" na questão
  useEffect(() => {
    if (isOpen && autoQuestionToExplain && autoQuestionToExplain.id !== lastExplainedId.current) {
      lastExplainedId.current = autoQuestionToExplain.id;
      const prompt = `Instrutor, por favor me explique detalhadamente a Questão #${autoQuestionToExplain.number} (${autoQuestionToExplain.topic || 'Conhecimentos Gerais'}): "${autoQuestionToExplain.text}". Por que a alternativa oficial correta é a letra (${autoQuestionToExplain.correctAnswer.toUpperCase()}) com base na norma ${autoQuestionToExplain.sourceDoc}?`;
      handleSendMessage(prompt, autoQuestionToExplain);
    }
  }, [isOpen, autoQuestionToExplain]);

  const handleAskAboutCurrentQuestion = () => {
    if (!currentQuestion) return;
    const prompt = `Instrutor, por favor me explique a Questão #${currentQuestion.number} (${currentQuestion.topic || 'Conhecimentos Gerais'}): "${currentQuestion.text}". Por que a alternativa correta é a letra (${currentQuestion.correctAnswer.toUpperCase()})?`;
    handleSendMessage(prompt);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        text: 'Histórico reiniciado! Qual a sua dúvida sobre a prova do CFC - SAD ou o conteúdo das apostilas?',
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md sm:max-w-lg bg-white dark:bg-[#0B192C] h-full shadow-2xl flex flex-col border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-right duration-300">
        {/* Header do Chat com Brasão Oficial da FAB */}
        <div className="p-4 border-b border-[#D4AF37]/30 bg-gradient-to-r from-[#002D62] to-[#0B192C] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#D4AF37]/60 bg-[#002D62] flex items-center justify-center shrink-0 shadow-sm">
              <img
                src={fabCrestIcon}
                alt="Brasão FAB"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-sm sm:text-base leading-tight">
                  Tutor IA CFC - SAD
                </h3>
                <span className="text-[10px] bg-[#D4AF37] text-slate-950 font-black px-1.5 py-0.2 rounded font-mono uppercase">
                  FAB
                </span>
              </div>
              <p className="text-[11px] text-blue-200 leading-none">
                Especialista em Legislação e Doutrina Militar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleClearHistory}
              title="Limpar conversa"
              className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              title="Fechar chat"
              className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notificação de Contexto de Questão Ativa */}
        {currentQuestion && (
          <div className="bg-blue-50 dark:bg-blue-950/50 border-b border-blue-100 dark:border-blue-900/50 p-2.5 px-4 flex items-center justify-between gap-2 text-xs">
            <div className="truncate text-slate-700 dark:text-slate-300">
              <span className="font-bold text-[#002D62] dark:text-blue-400">Questão Ativa #{currentQuestion.number}:</span>{' '}
              {currentQuestion.text.slice(0, 50)}...
            </div>
            <button
              onClick={handleAskAboutCurrentQuestion}
              className="shrink-0 px-2.5 py-1 rounded-md bg-[#002D62] hover:bg-blue-900 text-white font-bold text-[11px] transition-colors"
            >
              Explicar esta
            </button>
          </div>
        )}

        {/* Thread de Mensagens */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-7 h-7 rounded-full bg-[#002D62] text-[#D4AF37] flex items-center justify-center shrink-0 mt-1 shadow-2xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 space-y-1.5 shadow-2xs ${
                    isUser
                      ? 'bg-[#002D62] text-white rounded-tr-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-xs border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="whitespace-pre-wrap leading-relaxed text-xs sm:text-sm">
                    {msg.text}
                  </div>
                  <div
                    className={`text-[10px] text-right font-mono ${
                      isUser ? 'text-blue-200' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
                {isUser && (
                  <div className="w-7 h-7 rounded-full bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-2.5 justify-start">
              <div className="w-7 h-7 rounded-full bg-[#002D62] text-[#D4AF37] flex items-center justify-center shrink-0 mt-1 shadow-2xs">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-xs p-3.5 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 animate-spin text-[#002D62] dark:text-blue-400" />
                  <span>Consultando normas e apostilas da FAB...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Sugestões de Perguntas Rápidas */}
        <div className="p-2 px-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 overflow-x-auto flex gap-1.5 text-[11px] shrink-0 no-scrollbar">
          <button
            onClick={() => handleSendMessage('Qual a diferença entre correspondência ostensiva e sigilosa na NSCA 10-2?')}
            className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            NSCA 10-2 Sigilo
          </button>
          <button
            onClick={() => handleSendMessage('Como funciona a continência militar individual segundo o RCONT?')}
            className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            RCONT Continência
          </button>
          <button
            onClick={() => handleSendMessage('Quais são as transgressões disciplinares e punições previstas no RDAER?')}
            className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            RDAER Punições
          </button>
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Tire dúvidas sobre a legislação ou a questão..."
            className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002D62] dark:focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="p-2.5 rounded-xl bg-[#002D62] hover:bg-blue-900 disabled:opacity-40 text-white transition-all shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
