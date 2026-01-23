"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Send,
  Sparkles,
  User,
  Bot,
  Loader2,
  Terminal,
  Fingerprint,
} from "lucide-react";
import { useVisitorId } from "@/hooks/use-visitor-id";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function Playground() {
  const { visitorId, isLoading: isVisitorLoading } = useVisitorId();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hey there! 👋 I'm Arnab's AI assistant. Ask me anything about his skills, experience, projects, or anything else you'd like to know!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // TODO: Replace this with actual LangChain.js integration
    // The visitorId can be sent to the backend for session management
    // Example: await sendMessage(input, visitorId);
    
    // Simulate AI response delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: getPlaceholderResponse(userMessage.content),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  // Placeholder responses until LangChain is connected
  const getPlaceholderResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("skill") || lowerQuery.includes("tech")) {
      return "Arnab is skilled in Python, FastAPI, Django, React, Next.js, TypeScript, and has expertise in AI/ML with LangChain, LangGraph, AWS Bedrock, and Pipecat. He's a true full-stack Gen AI developer! 🚀";
    }
    if (lowerQuery.includes("experience") || lowerQuery.includes("work")) {
      return "Arnab has 3.5+ years of coding experience and has shipped 7+ projects. He specializes in building intelligent applications that combine robust backends with seamless user experiences.";
    }
    if (lowerQuery.includes("project")) {
      return "One of Arnab's notable projects is Builders Hut - a CLI tool that scaffolds production-ready FastAPI projects in seconds. He's always working on something new!";
    }
    if (lowerQuery.includes("contact") || lowerQuery.includes("hire") || lowerQuery.includes("reach")) {
      return "You can reach out to Arnab through the Contact section on this page. He's always open to discussing exciting opportunities and collaborations! 📬";
    }
    if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
      return "Hello! Great to meet you! 😊 What would you like to know about Arnab?";
    }
    
    return "That's a great question! Once the AI backend is connected, I'll be able to give you a detailed answer about Arnab. For now, feel free to explore the website or ask about his skills, experience, or projects!";
  };

  const suggestedQuestions = [
    "What are Arnab's main skills?",
    "Tell me about his experience",
    "What projects has he built?",
    "How can I contact him?",
  ];

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    inputRef.current?.focus();
  };

  return (
    <section id="playground" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} className="animate-pulse" />
            AI-Powered
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Chat <span className="text-primary">Playground</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about me? Chat with my AI assistant! Ask about my
            skills, experience, projects, or anything else you'd like to know.
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-xl">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-b border-border px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Arnab's AI Assistant</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    Online • Ready to chat
                  </p>
                </div>
              </div>
              
              {/* Session ID Badge */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-lg">
                <Fingerprint size={14} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-mono">
                  {isVisitorLoading ? "..." : visitorId?.slice(0, 8)}
                </span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-[400px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-background via-background to-muted/10">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                    message.role === "user"
                      ? "bg-primary/20 text-primary"
                      : "bg-gradient-to-br from-primary to-accent text-white"
                  }`}
                >
                  {message.role === "user" ? (
                    <User size={16} />
                  ) : (
                    <Bot size={16} />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[80%] ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-md"
                      : "bg-muted/50 border border-border rounded-2xl rounded-tl-md"
                  } px-4 py-3`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p
                    className={`text-[10px] mt-2 ${
                      message.role === "user"
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                    suppressHydrationWarning
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                  <Bot size={16} />
                </div>
                <div className="bg-muted/50 border border-border rounded-2xl rounded-tl-md px-4 py-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-6 pb-4 flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-border p-4 bg-muted/30">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about Arnab..."
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground"
                  disabled={isTyping}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-muted text-muted-foreground text-[10px] rounded border border-border">
                    <Terminal size={10} />
                    Enter
                  </kbd>
                </div>
              </div>
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
              >
                {isTyping ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                <span className="hidden sm:inline">Send</span>
              </button>
            </form>

            <p className="text-[10px] text-muted-foreground text-center mt-3">
              Powered by AI • Your session ID is encrypted and stored locally
            </p>
          </div>
        </div>

        {/* Integration Note */}
        <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0">
              <MessageCircle size={16} />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-amber-700 mb-1">
                Coming Soon: Full AI Integration
              </h4>
              <p className="text-xs text-amber-600/80">
                This chatbot interface is ready for LangChain.js integration.
                Currently showing placeholder responses. The visitor ID system
                is fully functional with encrypted localStorage storage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

