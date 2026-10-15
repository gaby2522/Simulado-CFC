import React, { useState, useEffect } from 'react';
import { db, UserProfile } from '../utils/firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { Shield, CheckCircle, XCircle, Search, Users, RefreshCw, Lock } from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
}

export function AdminPanel({ isOpen, onClose, currentUser }: AdminPanelProps) {
  const [usersList, setUsersList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);

  // Validação estrita de administrador pelo e-mail
  const ADMIN_EMAIL = 'pedroalvessilva0912@gmail.com';
  const isAdmin = currentUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  const fetchUsers = async () => {
    if (!isAdmin) return;
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const list: any[] = [];
      querySnapshot.forEach((docSnap) => {
        list.push({
          uid: docSnap.id,
          ...docSnap.data(),
        });
      });
      setUsersList(list);
    } catch (error) {
      console.error('Erro ao buscar utilizadores:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && isAdmin) {
      fetchUsers();
    }
  }, [isOpen, isAdmin]);

  const handleToggleAccess = async (uid: string, currentAccess: boolean) => {
    try {
      const userRef = doc(db, 'users', uid);
      const newAccessState = !currentAccess;
      await updateDoc(userRef, {
        hasAccess: newAccessState,
        active: newAccessState,
        ativo: newAccessState,
      });
      
      // Atualizar lista local
      setUsersList((prev) =>
        prev.map((u) => (u.uid === uid ? { ...u, hasAccess: newAccessState, active: newAccessState, ativo: newAccessState } : u))
      );
      setMessage(`Acesso do aluno atualizado com sucesso para: ${newAccessState ? 'LIBERADO' : 'BLOQUEADO'}`);
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Erro ao atualizar acesso:', error);
      alert('Erro ao atualizar permissão no Firestore.');
    }
  };

  if (!isOpen) return null;

  if (!isAdmin) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <div className="bg-white dark:bg-[#0B192C] border border-red-500/30 rounded-2xl p-6 max-w-md w-full text-center space-y-4 shadow-2xl">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-950/50 text-red-600 rounded-full flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Acesso Restrito</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Esta Central de Controlo é exclusiva para o administrador do sistema. A sua conta atual não possui permissões de proprietário.
          </p>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold transition-colors"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  const filteredUsers = usersList.filter(
    (u) =>
      u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#0B192C] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Cabeçalho do Painel */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-[#071321]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#002D62] text-[#D4AF37]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white">Central de Controlo do Proprietário</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Gestão administrativa de alunos e acessos do Simulado CFC</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors font-bold text-sm"
          >
            ✕ Fechar
          </button>
        </div>

        {/* Mensagem de Feedback */}
        {message && (
          <div className="mx-6 mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs font-bold text-center">
            {message}
          </div>
        )}

        {/* Barra de Pesquisa e Ações */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Pesquisar por nome ou e-mail do aluno..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#002D62]"
            />
          </div>

          <button
            onClick={fetchUsers}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center gap-2 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Atualizar Lista</span>
          </button>
        </div>

        {/* Lista de Alunos */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {loading ? (
            <div className="text-center py-12 text-slate-500">A carregar dados dos alunos do Firestore...</div>
          ) : filteredUsers.length === 0 ? (
            <div className="text-center py-12 text-slate-500">Nenhum aluno encontrado.</div>
          ) : (
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {filteredUsers.map((user) => {
                const hasAccess = user.hasAccess === true || user.active === true || user.ativo === true;
                return (
                  <div key={user.uid} className="py-3 flex flex-wrap items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/40 px-3 rounded-xl transition-colors">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">{user.name || 'Aluno Sem Nome'}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">{user.email}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        hasAccess 
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                          : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                      }`}>
                        {hasAccess ? 'Acesso Liberado' : 'Pendente / Bloqueado'}
                      </span>

                      <button
                        onClick={() => handleToggleAccess(user.uid, hasAccess)}
                        className={`px-3.5 py-1.5 rounded-xl font-bold text-xs transition-colors flex items-center gap-1.5 ${
                          hasAccess
                            ? 'bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/20'
                            : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                        }`}
                      >
                        {hasAccess ? <XCircle className="w-3.5 h-3.5" /> : <CheckCircle className="w-3.5 h-3.5" />}
                        <span>{hasAccess ? 'Revogar Acesso' : 'Liberar Acesso'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Rodapé do Painel */}
        <div className="p-4 bg-slate-50 dark:bg-[#071321] border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
          Total de alunos registados na base: <strong className="text-slate-800 dark:text-slate-200">{usersList.length}</strong>
        </div>

      </div>
    </div>
  );
}
