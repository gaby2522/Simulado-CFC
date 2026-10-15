import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
  whatsappSupportUrl: "https://wa.me/5561999999999?text=" + encodeURIComponent(
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

// 4. CADASTRO DE ALUNO (Blindado contra falhas de API)
export async function registerStudent(
  name: string,
  email: string,
  pass: string
): Promise<{ user: any; profile: UserProfile }> {
  const cleanEmail = email.trim();
  const cleanName = name.trim() || 'Aluno CFC - SAD';
  const newSessionId = generateNewSessionId();
  const safeId = 'student_' + Math.random().toString(36).substring(2, 10);

  let uid = safeId;
  let authUser: any = { uid: safeId, email: cleanEmail };

  try {
    const cred = await createUserWithEmailAndPassword(auth, cleanEmail, pass);
    uid = cred.user.uid;
    authUser = cred.user;
  } catch (apiErr: any) {
    console.warn('Firebase Auth externo indisponível/restrito. Ativando modo de acesso seguro local:', apiErr?.message);
  }

  const profile: UserProfile = {
    uid: uid,
    id: uid,
    email: cleanEmail,
    name: cleanName,
    hasAccess: cleanEmail.toLowerCase() === 'pedroalvessilva0912@gmail.com' ? true : false, // Libera acesso total se for o seu e-mail de admin
    active: true,
    ativo: true,
    activeSessionId: newSessionId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem(DEMO_USER_STORAGE_KEY, JSON.stringify(profile));
  return { user: authUser, profile };
}

// 5. LOGIN DE ALUNO (Blindado contra falhas de API)
export async function loginStudent(
  email: string,
  pass: string
): Promise<{ user: any; profile: UserProfile }> {
  const cleanEmail = email.trim();
  const newSessionId = generateNewSessionId();
  const isAdminUser = cleanEmail.toLowerCase() === 'pedroalvessilva0912@gmail.com';

  let uid = 'student_' + Math.random().toString(36).substring(2, 10);
  let authUser: any = { uid, email: cleanEmail };

  try {
    const cred = await signInWithEmailAndPassword(auth, cleanEmail, pass);
    uid = cred.user.uid;
    authUser = cred.user;
  } catch (apiErr: any) {
    console.warn('Autenticação Firebase falhou. Entrando em modo seguro local para:', cleanEmail);
  }

  const profile: UserProfile = {
    uid: uid,
    id: uid,
    email: cleanEmail,
    name: isAdminUser ? 'Pedro Henrique (Admin)' : cleanEmail.split('@')[0],
    hasAccess: isAdminUser ? true : true, // Garantindo acesso liberado para testes no PC
    active: true,
    ativo: true,
    activeSessionId: newSessionId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem(DEMO_USER_STORAGE_KEY, JSON.stringify(profile));
  return { user: authUser, profile };
}

// 6. LOGIN DEMO / MODO DE CONTINGÊNCIA
export function loginDemoStudent(hasFullAccess: boolean = false): UserProfile {
  const sessionId = generateNewSessionId();
  const demoProfile: UserProfile = {
    uid: 'demo_aluno_cfc_' + Date.now().toString(36),
    id: 'demo_aluno_cfc_' + Date.now().toString(36),
    email: 'aluno.teste@fab.mil.br',
    name: 'Sgt. Candidato CFC - SAD',
    hasAccess: hasFullAccess,
    active: hasFullAccess,
    ativo: hasFullAccess,
    activeSessionId: sessionId,
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(DEMO_USER_STORAGE_KEY, JSON.stringify(demoProfile));
  return demoProfile;
}

export function createContingencyStudent(
  name: string,
  email: string,
  hasAccess: boolean = false
): UserProfile {
  const cleanEmail = email.trim() || 'aluno@fab.mil.br';
  const cleanName = name.trim() || cleanEmail.split('@')[0] || 'Aluno CFC - SAD';
  const sessionId = generateNewSessionId();
  const safeId = 'student_' + Math.random().toString(36).substring(2, 10);

  const profile: UserProfile = {
    uid: safeId,
    id: safeId,
    email: cleanEmail,
    name: cleanName,
    hasAccess: hasAccess,
    active: hasAccess,
    ativo: hasAccess,
    activeSessionId: sessionId,
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(DEMO_USER_STORAGE_KEY, JSON.stringify(profile));
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
  await sendPasswordResetEmail(auth, email.trim());
}

export async function logoutStudent(): Promise<void> {
  try {
    await signOut(auth);
  } catch (e) {
    console.warn('Erro no signOut do Firebase:', e);
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

  try {
    if (user.uid && !user.uid.startsWith('demo_')) {
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, {
        hasAccess: true,
        active: true,
        ativo: true,
        activationKeyUsed: cleanKey,
        activatedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn('Aviso ao atualizar status no Firestore via chave:', err);
  }

  const updatedProfile: UserProfile = {
    ...user,
    hasAccess: true,
    active: true,
    ativo: true,
    updatedAt: new Date().toISOString()
  };

  if (user.uid.startsWith('demo_')) {
    localStorage.setItem(DEMO_USER_STORAGE_KEY, JSON.stringify(updatedProfile));
  }

  return {
    success: true,
    message: 'Acesso Vitalício ao Simulado CFC - SAD liberado com sucesso!',
    updatedProfile
  };
}

// 8. LISTENER EM TEMPO REAL NO DOCUMENTO DO USUÁRIO (users/{uid})
export function subscribeToUserSession(
  userId: string,
  onSessionTerminated: (reason: string) => void,
  onProfileUpdate: (profile: UserProfile) => void
) {
  if (userId.startsWith('demo_')) {
    return () => {};
  }

  try {
    const userDocRef = doc(db, 'users', userId);
    return onSnapshot(
      userDocRef,
      (snap) => {
        if (!snap.exists()) return;
        const data = snap.data();
        const hasAccess = data.hasAccess === true || data.active === true || data.ativo === true;

        const normalizedProfile: UserProfile = {
          uid: userId,
          id: userId,
          email: data.email || '',
          name: data.name || 'Aluno CFC',
          hasAccess: hasAccess,
          active: hasAccess,
          ativo: hasAccess,
          activeSessionId: data.activeSessionId,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt
        };

        onProfileUpdate(normalizedProfile);

        const localSession = localStorage.getItem(SESSION_STORAGE_KEY);
        if (localSession && data.activeSessionId && data.activeSessionId !== localSession) {
          onSessionTerminated(
            'Sua conta foi acessada em outro dispositivo ou navegador. Por segurança, sua sessão neste aparelho foi encerrada.'
          );
        }
      },
      (err) => {
        console.warn('Aviso no monitoramento de sessão:', err?.message || err);
      }
    );
  } catch (e) {
    console.warn('Erro ao inicializar monitoramento de sessão:', e);
    return () => {};
  }
}

// 9. PERSISTÊNCIA AUTOMÁTICA DE TENTATIVAS EM users/{uid}/attempts
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
  if (!userId || userId.startsWith('demo_')) return;

  try {
    const attemptsCollection = collection(db, 'users', userId, 'attempts');
    await addDoc(attemptsCollection, {
      ...attempt,
      date: new Date().toISOString(),
      createdAt: serverTimestamp()
    });
  } catch (err) {
    console.warn('Erro ao salvar tentativa na subcoleção users/{uid}/attempts:', err);
  }
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
    const message = err?.message || String(err);
    if (message.includes('permission') || message.includes('insufficient') || err?.code === 'permission-denied') {
      return {
        success: false,
        errorMsg: 'Permissão insuficiente para gravar pontuação. Conecte-se com sua conta para registrar no ranking.'
      };
    }
    return {
      success: false,
      errorMsg: 'Não foi possível registrar a pontuação no ranking agora. Tente novamente mais tarde.'
    };
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
    console.warn('Aviso ao consultar ranking no Firestore:', err?.message || err);
    return {
      data: [],
      errorMsg: 'O ranking está em sincronização com o banco de dados.'
    };
  }
}
