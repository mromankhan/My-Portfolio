"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Bot, Trash2, Loader2, Mic, MicOff, CheckCircle2 } from "lucide-react";
import { TbMessageChatbotFilled } from "react-icons/tb";
import emailjs from "@emailjs/browser";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

type ContactStep = null | "name" | "email" | "message" | "sending" | "done";

interface ContactData {
  name: string;
  email: string;
  message: string;
}

// ── Speech Recognition type shim ──────────────────────────────────────────────

interface ISpeechRecognition extends EventTarget {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  onresult: ((e: ISpeechRecognitionEvent) => void) | null;
}

interface ISpeechRecognitionEvent {
  results: { [index: number]: { [index: number]: { transcript: string } } };
}

declare global {
  interface Window {
    SpeechRecognition: new () => ISpeechRecognition;
    webkitSpeechRecognition: new () => ISpeechRecognition;
  }
}

// ── Constants ─────────────────────────────────────────────────────────────────

const STARTER_PROMPTS = [
  "What are Roman's skills?",
  "Tell me about his projects",
  "I want to contact Roman",
];

const CONTACT_INTENT_RE =
  /\b(contact|hire|reach|email me|message you|get in touch|work with|collaborate|send.*message)\b/i;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Component ─────────────────────────────────────────────────────────────────

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  // Voice
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  // Contact flow
  const [contactStep, setContactStep] = useState<ContactStep>(null);
  const [contactData, setContactData] = useState<ContactData>({ name: "", email: "", message: "" });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // ── Effects ───────────────────────────────────────────────────────────────

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    if (isOpen) inputRef.current?.focus();
  }, [messages, isOpen]);

  // Cleanup recognition on unmount
  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
    };
  }, []);

  // ── Helpers ───────────────────────────────────────────────────────────────

  function addAssistantMessage(content: string) {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "assistant", content },
    ]);
  }

  function addUserMessage(content: string) {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", content },
    ]);
  }

  // ── Voice Input ───────────────────────────────────────────────────────────

  const toggleVoice = useCallback(() => {
    const SR = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!SR) {
      addAssistantMessage("Sorry, your browser doesn't support voice input. Try Chrome or Edge.");
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const rec = new SR();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    rec.onstart = () => setIsListening(true);

    rec.onresult = (e: ISpeechRecognitionEvent) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };

    rec.onerror = () => setIsListening(false);
    rec.onend = () => setIsListening(false);

    recognitionRef.current = rec;
    rec.start();
  }, [isListening]);

  // ── Contact Flow ──────────────────────────────────────────────────────────

  function startContactFlow() {
    setContactStep("name");
    setContactData({ name: "", email: "", message: "" });
    addAssistantMessage(
      "Sure! I'll help you send Roman a message. 📩\n\nFirst, what's your name?"
    );
  }

  async function handleContactStep(text: string) {
    addUserMessage(text);
    setInput("");

    if (contactStep === "name") {
      setContactData((d) => ({ ...d, name: text }));
      setContactStep("email");
      addAssistantMessage(`Nice to meet you, ${text}! 👋\n\nWhat's your email address?`);
      return;
    }

    if (contactStep === "email") {
      if (!EMAIL_RE.test(text)) {
        addAssistantMessage("That doesn't look like a valid email. Please try again.");
        return;
      }
      setContactData((d) => ({ ...d, email: text }));
      setContactStep("message");
      addAssistantMessage("Got it! Now write your message to Roman:");
      return;
    }

    if (contactStep === "message") {
      const finalData = { ...contactData, message: text };
      setContactData(finalData);
      setContactStep("sending");
      addAssistantMessage("Sending your message... ⏳");

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            name: finalData.name,
            email: finalData.email,
            message: finalData.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        setContactStep("done");
        addAssistantMessage(
          `✅ Message sent, ${finalData.name}! Roman will get back to you at ${finalData.email} soon.\n\nIs there anything else I can help you with?`
        );
      } catch {
        setContactStep(null);
        addAssistantMessage(
          "❌ Something went wrong while sending. Please try the Contact page directly or email mromankhan005@gmail.com"
        );
      }
      return;
    }

    // After done — back to normal chat
    setContactStep(null);
    sendToAI(text);
  }

  // ── AI Chat ───────────────────────────────────────────────────────────────

  async function sendToAI(trimmed: string) {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    const updated = [...messages, userMsg];
    setMessages(updated);
    setIsLoading(true);

    const assistantId = crypto.randomUUID();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "" },
    ]);

    abortRef.current = new AbortController();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated.map(({ role, content }) => ({ role, content })),
        }),
        signal: abortRef.current.signal,
      });

      if (!res.ok) throw new Error("API error");

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const lines = decoder.decode(value).split("\n");
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") break;

          try {
            const parsed = JSON.parse(data);
            const delta = parsed.text;
            if (delta) {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, content: m.content + delta }
                    : m
                )
              );
              if (!isOpen) setHasUnread(true);
            }
          } catch {
            // ignore malformed chunks
          }
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return;
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? { ...m, content: "Sorry, something went wrong. Please try again." }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  }

  // ── Main send handler ─────────────────────────────────────────────────────

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    setInput("");

    // In contact flow — handle steps locally
    if (contactStep && contactStep !== "done") {
      handleContactStep(trimmed);
      return;
    }

    // Detect contact intent
    if (CONTACT_INTENT_RE.test(trimmed)) {
      addUserMessage(trimmed);
      startContactFlow();
      return;
    }

    // Normal AI chat
    sendToAI(trimmed);
  }

  function clearChat() {
    abortRef.current?.abort();
    recognitionRef.current?.abort();
    setMessages([]);
    setIsLoading(false);
    setIsListening(false);
    setContactStep(null);
    setContactData({ name: "", email: "", message: "" });
  }

  // ── Input placeholder ─────────────────────────────────────────────────────

  const placeholder =
    contactStep === "name"
      ? "Enter your name..."
      : contactStep === "email"
      ? "Enter your email..."
      : contactStep === "message"
      ? "Type your message to Roman..."
      : "Ask me anything...";

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Floating Toggle Button ── */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {hasUnread && !isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 z-10"
            />
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          aria-label={isOpen ? "Close chat" : "Open chat"}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl shadow-blue-600/40 flex items-center justify-center border border-blue-400/30 hover:shadow-blue-500/60 transition-shadow duration-300"
        >
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
          )}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <TbMessageChatbotFilled size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] h-[520px] flex flex-col rounded-2xl border border-white/10 bg-[#0a1628]/95 backdrop-blur-2xl shadow-2xl shadow-black/60 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-gradient-to-r from-blue-600/15 to-transparent shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Bot size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-none">
                    Roman&apos;s Assistant
                  </p>
                  <p className="text-xs text-blue-400 mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    title="Clear chat"
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
                  >
                    <Trash2 size={15} />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/8 transition-all duration-200"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Contact step indicator */}
            <AnimatePresence>
              {contactStep && contactStep !== "done" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 py-2 bg-blue-600/10 border-b border-blue-500/20 shrink-0"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-blue-400 font-medium">Sending message to Roman</p>
                    <div className="flex items-center gap-1.5">
                      {(["name", "email", "message"] as const).map((step, i) => (
                        <div
                          key={step}
                          className={`w-5 h-1.5 rounded-full transition-all duration-300 ${
                            contactStep === step
                              ? "bg-blue-400"
                              : i <
                                ["name", "email", "message"].indexOf(
                                  contactStep === "sending" ? "message" : contactStep
                                )
                              ? "bg-blue-600"
                              : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-5 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-700/10 border border-blue-500/20 flex items-center justify-center">
                    <Bot size={26} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-200 font-semibold text-sm">
                      Hi! I&apos;m Roman&apos;s AI
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Ask me anything about Roman
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    {STARTER_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => sendMessage(prompt)}
                        className="text-xs text-left px-3 py-2.5 rounded-xl border border-white/8 bg-white/[0.03] text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/8 transition-all duration-200"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                      {msg.role === "assistant" && (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                          {contactStep === "done" ? (
                            <CheckCircle2 size={13} className="text-white" />
                          ) : (
                            <Bot size={13} className="text-white" />
                          )}
                        </div>
                      )}
                      <div
                        className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                          msg.role === "user"
                            ? "bg-blue-600 text-white rounded-tr-sm shadow-lg shadow-blue-600/20"
                            : "bg-white/[0.05] border border-white/8 text-slate-200 rounded-tl-sm"
                        }`}
                      >
                        {msg.content === "" && msg.role === "assistant" ? (
                          <span className="flex items-center gap-1 py-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0ms]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:150ms]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:300ms]" />
                          </span>
                        ) : (
                          msg.content
                        )}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-white/8 bg-[#050d1a]/60 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                {/* Voice button */}
                <button
                  type="button"
                  onClick={toggleVoice}
                  title={isListening ? "Stop listening" : "Voice input"}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isListening
                      ? "bg-red-500/20 border border-red-500/50 text-red-400 animate-pulse"
                      : "bg-white/[0.05] border border-white/10 text-slate-500 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/8"
                  }`}
                >
                  {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                </button>

                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={placeholder}
                  disabled={isLoading || contactStep === "sending"}
                  className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all duration-200 disabled:opacity-50"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || contactStep === "sending"}
                  className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
                >
                  {isLoading || contactStep === "sending" ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
