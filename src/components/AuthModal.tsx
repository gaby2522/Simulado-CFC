import React, { useState } from 'react';
import {
  X,
  Lock,
  Mail,
  User,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  KeyRound,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import {
  loginStudent,
  registerStudent,
  sendStudentPasswordReset,
  loginDemoStudent,
  createContingencyStudent,
  UserProfile
} from '../utils/firebase';
import { FabBadge } from './FabBadge';
import fabGripenFighter from '../assets/images/fab_gripen_fighter_1791982748184.jpg';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (profile: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthSuccess }) => {
  const [tab, setTab] = useState<'login' | 'register' | 'forgot'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isOperationNotAllowed, setIsOperationNotAllowed] = useState(false);

  if (!isOpen) return null;

  const handleDemoAccess = (withFullAccess: boolean = true) => {
    try {
      const demoProfile = loginDemoStudent(withFullAccess);
      onAuthSuccess(demoProfile);
      onClose();
    } catch (e) {
      console.error('Erro no login demo:', e);
      setErrorMsg('Não foi possível iniciar a sessão de teste. Tente novamente.');
    }
  };

  const handleContingencyAccess = () => {
    try {
      const contingencyProfile = createContingencyStudent(name, email, true);
      onAuthSuccess(contingencyProfile);
      onClose();
    } catch (e) {
      console.error('Erro na contingência:', e);
      setErrorMsg('Erro ao entrar em modo contingência.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsOperationNotAllowed(false);
    setLoading(true);

    try {
      if (tab === 'login') {
        const { profile } = await loginStudent(email, password);
        onAuthSuccess(profile);
        onClose();
      } else if (tab === 'register') {
        if (!name.trim()) {
          setErrorMsg('Por favor, informe seu nome ou nome de guerra.');
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          setErrorMsg('A senha deve conter no mínimo 6 caracteres.');
          setLoading(false);
          return;
        }
        const { profile } = await registerStudent(name, email, password);
        onAuthSuccess(profile);
        onClose();
      } else if (tab === 'forgot') {
        await sendStudentPasswordReset(email);
        setSuccessMsg('E-mail de recuperação enviado com sucesso! Verifique sua caixa de entrada.');
      }
    } catch (err: any) {
      console.warn('Erro na autenticação Firebase:', err?.code || err?.message);

      if (err.code === 'auth/operation-not-allowed') {
        setIsOperationNotAllowed(true);
        setErrorMsg(
          'O provedor de E-mail/Senha está desativado no Firebase Console. Para entrar agora sem burocracia, utilize o botão de Aluno Teste abaixo.'
        );
      } else if (
        err.code === 'auth/user-not-found' ||
        err.code === 'auth/wrong-password' ||
        err.code === 'auth/invalid-credential'
      ) {
        setErrorMsg('E-mail ou senha incorretos. Verifique suas credenciais.');
      } else if (err.code === 'auth/email-already-in-use') {
        setErrorMsg('Este e-mail já está cadastrado. Tente entrar ou recupere sua senha.');
      } else if (err.code === 'auth/invalid-email') {
        setErrorMsg('O e-mail digitado é inválido.');
      } else if (err.code === 'auth/weak-password') {
        setErrorMsg('A senha precisa ter pelo menos 6 caracteres.');
      } else {
        setErrorMsg(err.message || 'Erro ao realizar operação. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto w-full h-full">
      {/* Fundo Imersivo de Elite com Caça Gripen F-39 da FAB */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url(${fabGripenFighter})` }}
      />
      {/* Camada escura de sobreposição e leve desfoque para legibilidade total */}
      <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-xs" />

      {/* Conteúdo do Modal */}
      <div className="relative z-10 bg-white dark:bg-[#0B192C] w-full max-w-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200 text-slate-900 dark:text-slate-100">
        
        {/* Top Header com Brasão Oficial da FAB */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#002D62] to-[#0B192C] text-white flex items-center justify-between border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-3">
            <FabBadge size="md" />
            <div>
              <h2 className="text-sm sm:text-base font-bold tracking-tight">Portal do Aluno CFC SAD</h2>
              <p className="text-[11px] text-blue-200">Autenticação Oficial & Sessão Única</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Abas de Navegação (Entrar / Cadastrar) */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
          <button
            type="button"
            onClick={() => { setTab('login'); setErrorMsg(null); setIsOperationNotAllowed(false); }}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              tab === 'login'
                ? 'border-[#002D62] dark:border-blue-400 text-[#002D62] dark:text-blue-300 bg-white dark:bg-[#0B192C]'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Acessar Conta
          </button>
          <button
            type="button"
            onClick={() => { setTab('register'); setErrorMsg(null); setIsOperationNotAllowed(false); }}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              tab === 'register'
                ? 'border-[#002D62] dark:border-blue-400 text-[#002D62] dark:text-blue-300 bg-white dark:bg-[#0B192C]'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Criar Cadastro
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs space-y-2">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{errorMsg}</span>
              </div>

              {isOperationNotAllowed && (
                <div className="pt-2 border-t border-red-200/60 dark:border-red-800/60 flex flex-col gap-2">
                  {email && (
                    <button
                      type="button"
                      onClick={handleContingencyAccess}
                      className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                      <span>Continuar com {email} (Modo Contingência)</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleDemoAccess(true)}
                    className="w-full py-2.5 px-3 rounded-lg bg-[#002D62] hover:bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <span>Entrar como Aluno Teste (Acesso Total)</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {successMsg && (
            <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {tab === 'register' && (
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Nome Completo ou Nome de Guerra
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: 3S Silva / Candidato CFC"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
              E-mail do Aluno
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#002D62]"
              />
            </div>
          </div>

          {tab !== 'forgot' && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Senha
                </label>
                {tab === 'login' && (
                  <button
                    type="button"
                    onClick={() => { setTab('forgot'); setErrorMsg(null); }}
                    className="text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Esqueceu a senha?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                />
              </div>
            </div>
          )}

          {tab === 'forgot' && (
            <div className="pt-1">
              <button
                type="button"
                onClick={() => { setTab('login'); setErrorMsg(null); }}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                &larr; Voltar para a tela de login
              </button>
            </div>
          )}

          {/* Botão de Ação */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#002D62] to-[#0B192C] hover:opacity-95 shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50"
          >
            {loading ? (
              <span>Processando...</span>
            ) : tab === 'login' ? (
              <>
                <span>Acessar Simulados</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : tab === 'register' ? (
              <>
                <span>Concluir Cadastro</span>
                <ShieldCheck className="w-4 h-4" />
              </>
            ) : (
              <span>Enviar Link de Recuperação</span>
            )}
          </button>

          {/* Botão Direto de Aluno Teste */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-center">
            <button
              type="button"
              onClick={() => handleDemoAccess(true)}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900 text-[#002D62] dark:text-blue-300 font-bold text-xs border border-blue-200 dark:border-blue-800 flex items-center justify-center gap-2 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Entrar como Aluno Teste (Acesso Completo Imediato)</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
