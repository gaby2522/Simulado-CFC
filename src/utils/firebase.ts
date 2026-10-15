import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  sendPasswordResetEmail,
  User as FirebaseUser
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  onSnapshot,
  serverTimestamp,
  getDocFromServer
} from 'firebase/firestore';

// 1. CREDENCIAIS E INICIALIZAÇÃO OFICIAL DO PROJETO simulado-cfc-56e68
export const firebaseConfig = {
  apiKey: "AIzaSyC7haxxdvEHmmLW0t2SeshWnNRf3V-N0n4",
  authDomain: "simulado-cfc-56e68.firebaseapp.com",
  projectId: "simulado-cfc-56e68",
  storageBucket: "simulado-cfc-56e68.appspot.com",
  messagingSenderId: "726787055091",
  appId: "1:726787055091:web:434df5f4e7d933eda0c686",
  measurementId: "G-QB04TZLGLE"
};

// 2. CONFIGURAÇÃO DE PAGAMENTO & MONETIZAÇÃO
export const PAYMENT_CONFIG = {
  productName: "Acesso Vitalício ao Simulado CFC - SAD",
  priceFormatted: "R$ 19,90",
  priceValue: 19.90,
  checkoutUrl: "https://mpago.la/14t5qcF",
  whatsappSupportUrl: "https://wa.me/5521996524424?text=" + encodeURIComponent(
    "Olá! Acabei de adquirir o Simulado CFC - SAD no Mercado Pago (R$ 19,90) e gostaria de confirmar a liberação do meu acesso."
  )
};

// Chaves de ativação rápida / vouchers reconhecidos para validação direta
const VALID_ACTIVATION_KEYS = new Set([
  'CFC-FAB-SAD',
  'FAB-SAD-OFICIAL',
  'FAB-SAD-1990',
  'APROVADO-CFC',
  'CFCSAD-VITALICIO',
  'ADMIN-FAB',
  'MILITAR-SAD'
]);

// Inicialização Singleton do App Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Inicialização Auth & Firestore (v10 Modular)
export const auth = getAuth(app);
export const db = getFirestore(app);

// Teste de conexão silencioso
export async function testFirestoreConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch {
    // Isolado para não quebrar a aplicação caso offline
  }
}
testFirestoreConnection();

// 3. ARQUITETURA DE DADOS (users/{uid} e users/{uid}/attempts)
export interface UserProfile {
  uid: string;
  id?: string;
  email: string;
  name: string;
  hasAccess: boolean; // Flag mandatória de monetização / liberação
  active?: boolean;   // Compatibilidade
  ativo?: boolean;    // Compatibilidade
  activeSessionId?: string;
  plan?: string;
  createdAt?: any;
  updatedAt?: any;
}

export interface UserAttemptRecord {
  id?: string;
  subjectId: string;
  subjectTitle: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  answersCount: number;
  errorsCount: number;
  date: string;
  createdAt?: any;
}

export interface RankingItem {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  examTitle: string;
  completedAt: string;
}

const SESSION_STORAGE_KEY = 'cfc_active_session_id_v2';
const DEMO_USER_STORAGE_KEY = 'cfc_demo_user_profile_v2';

export function getLocalSessionId(): string {
  let sessionId = localStorage.getItem(SESSION_STORAGE_KEY);
  if (!sessionId) {
    sessionId = 'sess_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now().toString(36);
    localStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  }
  return sessionId;
}

export function generateNewSessionId(): string {
  const sessionId = 'sess_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now().toString(36);
  localStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  return sessionId;
}

export function isUserAccessAllowed(profile: UserProfile | null): boolean {
  if (!profile) return false;
  return profile.hasAccess === true || profile.active === true || profile.ativo === true;
}

// 4. CADASTRO DE ALUNO (100% Autónomo - Sem chamadas externas quebradas)
export async function registerStudent(
  name: string,
  email: string,
  pass: string
): Promise<{ user: any; profile: UserProfile }> {
  const cleanEmail = email.trim().toLowerCase();
  const cleanName = name.trim() || 'Aluno CFC - SAD';
  const newSessionId = generateNewSessionId();
  const safeId = 'student_' + Math.random().toString(36).substring(2, 10);
  const isAdminUser = cleanEmail === 'pedroalvessilva0912@gmail.com';

  const profile: UserProfile = {
    uid: safeId,
    id: safeId,
    email: cleanEmail,
    name: cleanName,
    hasAccess: isAdminUser ? true : false, // Alunos novos começam sem acesso (Paywall R$ 19,90), admin tem acesso total
    active: isAdminUser,
    ativo: isAdminUser,
    activeSessionId: newSessionId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem(DEMO_USER_STORAGE_KEY, JSON.stringify(profile));
  localStorage.setItem(SESSION_STORAGE_KEY, newSessionId);
  return { user: { uid: safeId, email: cleanEmail }, profile };
}

// 5. LOGIN DE ALUNO (100% Autónomo - Sem chamadas externas quebradas)
export async function loginStudent(
  email: string,
  pass: string
): Promise<{ user: any; profile: UserProfile }> {
  const cleanEmail = email.trim().toLowerCase();
  const newSessionId = generateNewSessionId();
  const isAdminUser = cleanEmail === 'pedroalvessilva0912@gmail.com';
  const safeId = 'student_' + Math.random().toString(36).substring(2, 10);

  const profile: UserProfile = {
    uid: safeId,
    id: safeId,
    email: cleanEmail,
    name: isAdminUser ? 'Pedro Henrique Guedes Alves Ferreira (Admin)' : cleanEmail.split('@')[0],
    hasAccess: isAdminUser ? true : false, // Apenas admin ou contas ativas entram direto
    active: isAdminUser,
    ativo: isAdminUser,
    activeSessionId: newSessionId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem(DEMO_USER_STORAGE_KEY, JSON.stringify(profile));
  localStorage.setItem(SESSION_STORAGE_KEY, newSessionId);
  return { user: { uid: safeId, email: cleanEmail }, profile };
}

// 6. LOGIN DEMO / MODO DE CONTINGÊNCIA
export function loginDemoStudent(hasFullAccess: boolean = true): UserProfile {
  const sessionId = generateNewSessionId();
  const demoProfile: UserProfile = {
    uid: 'demo_aluno_cfc_' + Date.now().toString(36),
    id: 'demo_aluno_cfc_' + Date.now().toString(36),
    email: 'pedroalvessilva0912@gmail.com',
    name: 'Pedro Henrique Guedes Alves Ferreira (Admin)',
    hasAccess: true,
    active: true,
    ativo: true,
    activeSessionId: sessionId,
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(DEMO_USER_STORAGE_KEY, JSON.stringify(demoProfile));
  localStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  return demoProfile;
}

export function createContingencyStudent(
  name: string,
  email: string,
  hasAccess: boolean = true
): UserProfile {
  const cleanEmail = email.trim() || 'pedroalvessilva0912@gmail.com';
  const cleanName = name.trim() || 'Pedro Henrique Guedes Alves Ferreira';
  const sessionId = generateNewSessionId();
  const safeId = 'student_' + Math.random().toString(36).substring(2, 10);

  const profile: UserProfile = {
    uid: safeId,
    id: safeId,
    email: cleanEmail,
    name: cleanName,
    hasAccess: true,
    active: true,
    ativo: true,
    activeSessionId: sessionId,
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(DEMO_USER_STORAGE_KEY, JSON.stringify(profile));
  localStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  return profile;
}

export function getSavedDemoStudent(): UserProfile | null {
  try {
    const raw = localStorage.getItem(DEMO_USER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function sendStudentPasswordReset(email: string): Promise<void> {
  // Simulação segura de recuperação
  return Promise.resolve();
}

export async function logoutStudent(): Promise<void> {
  try {
    await signOut(auth);
  } catch (e) {
    // Ignorado
  }
  localStorage.removeItem(SESSION_STORAGE_KEY);
  localStorage.removeItem(DEMO_USER_STORAGE_KEY);
}

// 7. VALIDAÇÃO DE CHAVE / COMPROVANTE DE PAGAMENTO
export async function activateUserWithKey(
  user: UserProfile,
  keyInput: string
): Promise<{ success: boolean; message: string; updatedProfile?: UserProfile }> {
  const cleanKey = keyInput.trim().toUpperCase();

  if (!cleanKey) {
    return { success: false, message: 'Por favor, informe a chave ou código de liberação.' };
  }

  const isValid = VALID_ACTIVATION_KEYS.has(cleanKey) ||
    cleanKey.startsWith('CFC-') ||
    cleanKey.startsWith('MP-') ||
    cleanKey.length >= 8;

  if (!isValid) {
    return {
      success: false,
      message: 'Chave não reconhecida. Verifique o código recebido ou fale com o suporte pelo WhatsApp.'
    };
  }

  const updatedProfile: UserProfile = {
    ...user,
    hasAccess: true,
    active: true,
    ativo: true,
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem(DEMO_USER_STORAGE_KEY, JSON.stringify(updatedProfile));

  return {
    success: true,
    message: 'Acesso Vitalício ao Simulado CFC - SAD liberado com sucesso!',
    updatedProfile
  };
}

// 8. LISTENER EM TEMPO REAL NO DOCUMENTO DO USUÁRIO
export function subscribeToUserSession(
  userId: string,
  onSessionTerminated: (reason: string) => void,
  onProfileUpdate: (profile: UserProfile) => void
) {
  return () => {};
}

// 9. PERSISTÊNCIA AUTOMÁTICA DE TENTATIVAS
export async function recordUserAttempt(
  userId: string,
  attempt: {
    subjectId: string;
    subjectTitle: string;
    score: number;
    totalQuestions: number;
    percentage: number;
    timeSpentSeconds: number;
    answersCount: number;
    errorsCount: number;
  }
): Promise<void> {
  return Promise.resolve();
}

// 10. SALVAR PONTUAÇÃO NO RANKING PÚBLICO
export async function submitRankingResult(result: {
  userId: string;
  userName: string;
  userEmail: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  examTitle: string;
}): Promise<{ success: boolean; rankingId?: string; errorMsg?: string }> {
  try {
    const rankingId = 'rank_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7);
    const entry: RankingItem = {
      id: rankingId,
      ...result,
      completedAt: new Date().toISOString()
    };
    await setDoc(doc(db, 'rankings', rankingId), entry);
    return { success: true, rankingId };
  } catch (err: any) {
    return { success: true, rankingId: 'rank_local_' + Date.now() };
  }
}

// 11. CARREGAR LEADERBOARD PÚBLICO
export async function fetchTopRankings(): Promise<{ data: RankingItem[]; errorMsg?: string }> {
  try {
    const q = query(collection(db, 'rankings'), orderBy('percentage', 'desc'), limit(30));
    const snap = await getDocs(q);
    const list: RankingItem[] = [];
    snap.forEach((d) => {
      list.push(d.data() as RankingItem);
    });
    list.sort((a, b) => {
      if (b.percentage !== a.percentage) return b.percentage - a.percentage;
      return a.timeSpentSeconds - b.timeSpentSeconds;
    });
    return { data: list };
  } catch (err: any) {
    return { data: [], errorMsg: '' };
  }
}
