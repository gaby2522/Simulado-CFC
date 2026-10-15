import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Instanciar GoogleGenAI com telemetry header 'aistudio-build'
const apiKey = process.env.GEMINI_API_KEY || '';
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Endpoint de Chat com IA Gemini
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, contextQuestion } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Mensagens inválidas ou ausentes.' });
    }

    if (!ai) {
      return res.status(503).json({
        reply:
          'O assistente inteligente requer uma chave GEMINI_API_KEY configurada. Você pode consultar as explicações completas diretamente no gabarito comentado oficial de cada questão!',
      });
    }

    const systemInstruction = `Você é o "Instrutor Militar CFC - SAD", um tutor militar especializado na preparação de soldados e alunos para a prova do CURSO DE FORMAÇÃO DE CABOS (CFC - SAD) da Força Aérea Brasileira (FAB), focado nas disciplinas do edital:
1. Conhecimentos Básicos e Específicos da Especialidade SAD (Administração, Comunicação, Atos e Correspondência NSCA 10-2, Gestão de Arquivos NSCA 214-1, RADA-e RCA 12-1, RISAER RCA 34-1 e Remuneração Militar MP 2.215-10/Lei 13.954);
2. Legislação Militar e Doutrina (Estatuto dos Militares Lei 6.880/1980, RDAER Decreto 76.322/1975, características da profissão militar);
3. Ética Profissional Militar e DICA (Direito Internacional dos Conflitos Armados, Convenções de Genebra de 1949, Haia 1899/1907, Nova York e Tribunal Penal Internacional / Estatuto de Roma);
4. Noções Básicas de Higiene e Segurança do Trabalho (Acidentes de serviço nas FA, atos inseguros vs condições inseguras, normas NB-18, EPC e EPI com CA);
5. Legislação Militar I - RCONT (Portaria GM-MD nº 1.143/2022 - Sinais de Respeito, Continências, Apresentação e Cerimonial da Bandeira).

Sua missão é explicar conceitos com clareza, rigor técnico na legislação militar da FAB, dar macetes práticos para a prova de promoção a Cabo e manter o tom respeitoso, encorajador e disciplinado típico da Força Aérea Brasileira. Lema: "Ad Astra et Ultra!".
${contextQuestion ? `Contexto da questão atual que o aluno está visualizando:\n${JSON.stringify(contextQuestion, null, 2)}` : ''}`;

    // Mapear histórico de mensagens para o formato do Gemini
    const contents = messages.map((m: { role: 'user' | 'assistant'; text: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));

    // Chamar modelo gemini-3.5-flash
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || 'Não consegui formular uma resposta no momento. Tente novamente.';
    return res.json({ reply });
  } catch (err: any) {
    console.error('Erro ao chamar Gemini:', err);

    // Fallback gracioso com gemini-3.1-flash-lite se falhar
    if (ai) {
      try {
        const { messages, contextQuestion } = req.body;
        const contents = messages.map((m: { role: 'user' | 'assistant'; text: string }) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.text }],
        }));
        const responseLite = await ai.models.generateContent({
          model: 'gemini-3.1-flash-lite',
          contents,
          config: {
            systemInstruction: 'Você é um instrutor militar prestativo para alunos do Curso de Formação de Cabos (CFC - SAD) da Força Aérea Brasileira. Responda em português.',
          },
        });
        if (responseLite.text) {
          return res.json({ reply: responseLite.text });
        }
      } catch (fallbackErr) {
        console.error('Erro no fallback:', fallbackErr);
      }
    }

    return res.status(500).json({
      error: 'Erro ao processar mensagem com a IA.',
      reply: 'Desculpe, ocorreu uma instabilidade temporária na conexão com a inteligência artificial. Por favor, tente novamente.',
    });
  }
});

// Configuração do Vite middleware ou arquivos estáticos
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

startServer();
