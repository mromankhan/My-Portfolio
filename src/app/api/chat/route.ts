import { GoogleGenAI } from "@google/genai";
import { NextRequest } from "next/server";
import { getRelevantContext } from "@/data/portfolio";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
const MODEL = process.env.GEMINI_MODEL ?? "gemini-2.5-flash-lite";

const BASE_SYSTEM_PROMPT = `You are the personal AI assistant on Muhammad Roman's developer portfolio.
Answer using ONLY the context below. Be friendly and concise (2-4 sentences).
If not in context, say you don't have that detail.
For hiring/collaboration, direct to the Contact page or chat contact form.
Only answer questions about Roman. For anything unrelated, say: "I'm here only to answer questions about Roman — feel free to ask me anything about him!"`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages ?? [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid messages" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const lastMessage = messages[messages.length - 1].content;

    // Inject only relevant context chunks (RAG-style keyword retrieval)
    const context = getRelevantContext(lastMessage);
    const systemPrompt = `${BASE_SYSTEM_PROMPT}\n\n---\n${context}\n---`;

    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const chat = ai.chats.create({
      model: MODEL,
      config: {
        systemInstruction: systemPrompt,
        maxOutputTokens: 1024,
      },
      history,
    });

    const stream = await chat.sendMessageStream({ message: lastMessage });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.text;
            if (text) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("[/api/chat]", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
