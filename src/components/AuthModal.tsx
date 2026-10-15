import React, { useState } from 'react';
import {
  X,
  Lock,
  Mail,
  User,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react';
import {
  loginStudent,
  registerStudent,
  sendStudentPasswordReset,
  UserProfile
} from '../utils/firebase';
import { FabBadge } from './FabBadge';
import fabGripenFighter from '../assets/images/fab_gripen_fighter_1791982748184.jpg';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (profile: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [tab, setTab] = useState<'login' | 'register' | 'forgot'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      if (tab === 'login') {
        const { profile } = await loginStudent(email, password);
        onSuccess(profile);
        onClose();
      } else if (tab === 'register') {
        if (!name.trim()) {
          setErrorMsg('Por favor, informe seu nome.');
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          setErrorMsg('A senha deve conter no mínimo 6 caracteres.');
          setLoading(false);
          return;
        }
        const { profile } = await registerStudent(name, email, password);
        onSuccess(profile);
        onClose();
      } else if (tab === 'forgot') {
        await sendStudentPasswordReset(email);
        setSuccessMsg('E-mail de recuperação enviado com sucesso!');
      }
    } catch (err: any) {
      setErrorMsg('Erro ao processar autenticação. Verifique os dados informados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto w-full h-full">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fabGripenFighter})` }}
      />
      <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-xs" />

      <div className="relative z-10 bg-white dark:bg-[#0B192C] w-full max-w-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col my-auto text-slate-900 dark:text-slate-100">
        
        {/* Top Header - Apenas "Portal do Aluno" */}
        <div className="p-5 bg-gradient-to-r from-[#002D62] to-[#0B192C] text-white flex items-center justify-between border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-3">
            <FabBadge size="md" />
            <div>
              <h2 className="text-sm sm:text-base font-bold tracking-tight">Portal do Aluno</h2>
              <p className="text-[11px] text-blue-200">Autenticação Oficial</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="p-1.5 text-white/70 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Abas de Navegação */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
          <button
            type="button"
            onClick={() => { setTab('login'); setErrorMsg(null); }}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold border-b-2 ${tab === 'login' ? 'border-[#002D62] text-[#002D62] dark:text-blue-300 bg-white dark:bg-[#0B192C]' : 'border-transparent text-slate-500'}`}
          >
            Acessar Conta
          </button>
          <button
            type="button"
            onClick={() => { setTab('register'); setErrorMsg(null); }}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold border-b-2 ${tab === 'register' ? 'border-[#002D62] text-[#002D62] dark:text-blue-300 bg-white dark:bg-[#0B192C]' : 'border-transparent text-slate-500'}`}
          >
            Criar Cadastro
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {tab === 'register' && (
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">Nome Completo</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu Nome / Nome de Guerra"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">E-mail</label>
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
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">Senha</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  title={showPassword ? 'Ocultar senha' : 'Ver senha'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#002D62] to-[#0B192C] shadow-md flex items-center justify-center gap-2 hover:opacity-95 transition-all"
          >
            {loading ? 'Processando...' : tab === 'login' ? 'Acessar Simulados' : tab === 'register' ? 'Concluir Cadastro' : 'Enviar Link'}
          </button>
        </form>
      </div>
    </div>
  );
};
