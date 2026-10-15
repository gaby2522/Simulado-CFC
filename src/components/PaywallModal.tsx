import React, { useState } from 'react';
import {
  ShieldAlert,
  MessageCircle,
  LogOut,
  RefreshCw,
  CheckCircle2,
  ExternalLink,
  KeyRound,
  Lock,
  Sparkles,
  Clock,
  BookOpen,
  Trophy,
  FileText,
  AlertCircle
} from 'lucide-react';
import { UserProfile, logoutStudent, PAYMENT_CONFIG, activateUserWithKey } from '../utils/firebase';
import { FabBadge } from './FabBadge';
import fabGripenFighter from '../assets/images/fab_gripen_fighter_1791982748184.jpg';

interface PaywallModalProps {
  profile: UserProfile;
  onRefresh: () => void;
  onLogout: () => void;
  onAccessGranted?: (updatedProfile: UserProfile) => void;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  profile,
  onRefresh,
  onLogout,
  onAccessGranted
}) => {
  const [activationKey, setActivationKey] = useState('');
  const [isActivating, setIsActivating] = useState(false);
  const [keyMessage, setKeyMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showKeyInput, setShowKeyInput] = useState(false);

  const handleValidateKey = async (e: React.FormEvent) => {
    e.preventDefault();
    setKeyMessage(null);
    setIsActivating(true);

    try {
      const res = await activateUserWithKey(profile, activationKey);
      if (res.success && res.updatedProfile) {
        setKeyMessage({ type: 'success', text: res.message });
        setTimeout(() => {
          if (onAccessGranted) onAccessGranted(res.updatedProfile!);
          else onRefresh();
        }, 1200);
      } else {
        setKeyMessage({ type: 'error', text: res.message });
      }
    } catch {
      setKeyMessage({
        type: 'error',
        text: 'Erro ao validar chave. Verifique sua conexão ou tente novamente.'
      });
    } finally {
      setIsActivating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Imagem de Fundo Imersiva de Elite (Gripen F-39 da FAB) */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 scale-102"
        style={{ backgroundImage: `url(${fabGripenFighter})` }}
      />
      {/* Camada escura de sobreposição militar e leve desfoque */}
      <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-xs" />

      {/* Conteúdo do Modal */}
      <div className="relative z-10 bg-[#0F172A] w-full max-w-xl rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col my-auto text-slate-100">
        {/* Top Header Tático FAB */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#002D62] via-[#0B192C] to-[#0F172A] text-white flex items-center justify-between border-b border-[#D4AF37]/40">
          <div className="flex items-center gap-3">
            <FabBadge size="md" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black tracking-widest text-[#D4AF37] uppercase bg-black/40 px-2 py-0.5 rounded border border-[#D4AF37]/40">
                  Área Restrita do Aluno
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  CFC - SAD
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black tracking-tight mt-0.5">
                {PAYMENT_CONFIG.productName}
              </h2>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[11px] text-slate-400 block uppercase font-bold tracking-wider">Apenas</span>
            <span className="text-xl sm:text-2xl font-black text-[#D4AF37] tracking-tight">
              {PAYMENT_CONFIG.priceFormatted}
            </span>
          </div>
        </div>

        {/* Corpo do Paywall / Vendas */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Banner de Identificação do Aluno */}
          <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-900/60 flex items-center justify-center font-bold text-blue-300">
                {profile.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-bold text-white">{profile.name}</p>
                <p className="text-slate-400 font-mono text-[11px] truncate max-w-[200px] sm:max-w-xs">
                  {profile.email}
                </p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-[10px] uppercase">
              Acesso Pendente
            </span>
          </div>

          {/* Destaques do Simulado Oficial */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Recursos de Elite Inclusos no Acesso Vitalício:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">416 Questões Oficiais da Banca</strong>
                  <span className="text-slate-400 text-[11px]">SAD Específico (256 Q), Legislação, RCONT, Ética e Doutrina.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Cronômetro Inteligente FAB</strong>
                  <span className="text-slate-400 text-[11px]">Alertas visuais a 15min e 5min com simulação de tempo real.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <Trophy className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Simulado Geral com Ranking</strong>
                  <span className="text-slate-400 text-[11px]">Leaderboard oficial semanal comparando a nota dos candidatos.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <FileText className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Caderno de Erros com PDF</strong>
                  <span className="text-slate-400 text-[11px]">Exportação formatada em PDF para estudo tático impresso.</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Principal de Pagamento no Mercado Pago */}
          <div className="space-y-3 pt-1">
            <a
              href={PAYMENT_CONFIG.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-5 rounded-xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.01] active:scale-[0.99] border border-blue-400/30"
            >
              <Lock className="w-4 h-4" />
              <span>Liberar Acesso Completo - {PAYMENT_CONFIG.priceFormatted}</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </a>
            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Pagamento Seguro via Mercado Pago
              </span>
              <span>&middot;</span>
              <span>PIX ou Cartão em até 12x</span>
            </div>
          </div>

          {/* Seção Discreta: Validar Chave / Comprovante Manual */}
          <div className="pt-2 border-t border-slate-800">
            {!showKeyInput ? (
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Já efetuou o pagamento ou possui chave?</span>
                <button
                  type="button"
                  onClick={() => setShowKeyInput(true)}
                  className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 underline underline-offset-2 transition-colors"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Validar Chave / Comprovante</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleValidateKey} className="space-y-2.5 p-3.5 rounded-xl bg-slate-900/90 border border-slate-700">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Chave de Ativação / Código do Comprovante:
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowKeyInput(false)}
                    className="text-[11px] text-slate-400 hover:text-slate-200"
                  >
                    Ocultar
                  </button>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={activationKey}
                    onChange={(e) => setActivationKey(e.target.value)}
                    placeholder="Ex: CFC-FAB-SAD ou código do comprovante"
                    className="flex-1 px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 uppercase font-mono"
                  />
                  <button
                    type="submit"
                    disabled={isActivating || !activationKey.trim()}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-1"
                  >
                    {isActivating ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <span>Ativar</span>
                    )}
                  </button>
                </div>

                {keyMessage && (
                  <div
                    className={`p-2.5 rounded-lg text-xs flex items-center gap-2 ${
                      keyMessage.type === 'success'
                        ? 'bg-emerald-950/80 border border-emerald-600 text-emerald-300'
                        : 'bg-red-950/80 border border-red-700 text-red-300'
                    }`}
                  >
                    {keyMessage.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    <span>{keyMessage.text}</span>
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Links de Suporte e Ações Secundárias */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <a
              href={PAYMENT_CONFIG.whatsappSupportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Dúvidas ou PIX direto? Fale no WhatsApp</span>
            </a>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={onRefresh}
                className="px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Checar status de liberação"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Atualizar Status</span>
              </button>

              <button
                type="button"
                onClick={async () => {
                  await logoutStudent();
                  onLogout();
                }}
                className="px-3 py-1.5 rounded-lg border border-red-900/60 hover:bg-red-950/60 text-red-400 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Sair desta conta"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
