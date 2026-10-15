import { OptionKey, QuizHistoryEntry } from '../types/quiz';

const HISTORY_KEY = 'cfc_quiz_history_v1';
const WRONG_QUESTIONS_KEY = 'cfc_wrong_questions_v1';
const THEME_MODE_KEY = 'cfc_theme_mode_v1';
const FONT_SIZE_KEY = 'cfc_font_size_v1';

export type ThemeMode = 'light' | 'dark' | 'auto';
export type FontSizePreference = 'small' | 'normal' | 'large';

export function isDayTime(): boolean {
  const hours = new Date().getHours();
  // Considera dia das 06:00 às 17:59
  return hours >= 6 && hours < 18;
}

export function getQuizHistory(): QuizHistoryEntry[] {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveQuizHistory(entry: QuizHistoryEntry): void {
  try {
    const current = getQuizHistory();
    const updated = [entry, ...current].slice(0, 50); // salva até 50 históricos
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Erro ao salvar histórico:', e);
  }
}

export function clearQuizHistory(): void {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (e) {
    console.error('Erro ao limpar histórico:', e);
  }
}

export function getWrongQuestions(): Record<string, { subjectId: string; userChoice: OptionKey; date: string }> {
  try {
    const data = localStorage.getItem(WRONG_QUESTIONS_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function recordQuestionResult(questionId: string, subjectId: string, isCorrect: boolean, userChoice: OptionKey): void {
  try {
    const wrong = getWrongQuestions();
    if (!isCorrect) {
      wrong[questionId] = {
        subjectId,
        userChoice,
        date: new Date().toISOString()
      };
    } else {
      delete wrong[questionId];
    }
    localStorage.setItem(WRONG_QUESTIONS_KEY, JSON.stringify(wrong));
  } catch (e) {
    console.error('Erro ao gravar resultado:', e);
  }
}

export function clearWrongQuestions(): void {
  try {
    localStorage.removeItem(WRONG_QUESTIONS_KEY);
  } catch (e) {
    console.error('Erro ao limpar questões erradas:', e);
  }
}

export function clearAllQuizData(): void {
  try {
    localStorage.removeItem(HISTORY_KEY);
    localStorage.removeItem(WRONG_QUESTIONS_KEY);
    // Remove também chaves de migração prévia se houverem
    localStorage.removeItem('eear_quiz_history_v1');
    localStorage.removeItem('eear_wrong_questions_v1');
  } catch (e) {
    console.error('Erro ao limpar todos os dados de simulado:', e);
  }
}

export function getSavedThemeMode(): ThemeMode {
  try {
    const mode = localStorage.getItem(THEME_MODE_KEY);
    if (mode === 'light' || mode === 'dark' || mode === 'auto') {
      return mode;
    }
    return 'auto'; // padrão automático por horário
  } catch {
    return 'auto';
  }
}

export function setSavedThemeMode(mode: ThemeMode): void {
  try {
    localStorage.setItem(THEME_MODE_KEY, mode);
  } catch (e) {
    console.error('Erro ao salvar modo de tema:', e);
  }
}

export function getSavedFontSize(): FontSizePreference {
  try {
    const size = localStorage.getItem(FONT_SIZE_KEY);
    if (size === 'small' || size === 'normal' || size === 'large') {
      return size;
    }
    return 'normal';
  } catch {
    return 'normal';
  }
}

export function setSavedFontSize(size: FontSizePreference): void {
  try {
    localStorage.setItem(FONT_SIZE_KEY, size);
  } catch (e) {
    console.error('Erro ao salvar tamanho de fonte:', e);
  }
}
