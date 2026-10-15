import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Isolamento de avisos internos de ambiente (WebSocket Vite / HMR / unhandled rejections)
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const msg = String(event.reason?.message || event.reason || '');
    if (
      msg.includes('WebSocket') ||
      msg.includes('vite') ||
      msg.includes('HMR') ||
      msg.includes('client is offline')
    ) {
      event.preventDefault();
    }
  });
}

createRoot(document.getElementById('root')!).render(<App />);
