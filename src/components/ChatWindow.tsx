'use client';

import { useRef, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatWindow({ messages }: { messages: Message[] }) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      ref={scrollContainerRef}
      className="flex-1 overflow-y-auto space-y-4 pr-4 mb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700"
    >
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
              <i className="fas fa-robot text-3xl text-white"></i>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Halo, Azril di sini!</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              Saya adalah Azril AI Asisten. Saya siap membantu menjawab pertanyaan, memberikan ide, dan memudahkan aktivitasmu dengan gaya yang cepat, ramah, dan modern.
            </p>
          </div>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 animate-fadeIn ${message.role === 'user' ? 'flex-row-reverse' : ''
              }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ${message.role === 'user'
                ? 'bg-slate-700 dark:bg-sky-600'
                : 'bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-sky-500 dark:to-blue-600'
                }`}
            >
              <i
                className={`fas text-xs ${message.role === 'user' ? 'fa-user' : 'fa-robot'
                  }`}
              ></i>
            </div>
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-sm ${message.role === 'user'
                ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-tr-none'
                : 'bg-white/95 dark:bg-slate-800/95 text-slate-900 dark:text-slate-100 rounded-tl-none border border-blue-100 dark:border-slate-700'
                }`}
            >
              <div className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                {message.role === 'assistant' ? (
                  <ReactMarkdown
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1 className="text-xl font-bold mt-2 mb-1" {...props} />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2 className="text-lg font-bold mt-2 mb-1" {...props} />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3 className="text-base font-bold mt-1 mb-1" {...props} />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="list-disc list-inside my-0 space-y-0" {...props} />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol className="list-decimal list-inside my-0 space-y-0" {...props} />
                      ),
                      li: ({ node, ...props }) => <li className="ml-1 leading-snug [&>p]:mb-0 [&>p]:inline" {...props} />,
                      strong: ({ node, ...props }) => (
                        <strong className="font-bold text-gray-900 dark:text-gray-100" {...props} />
                      ),
                      p: ({ node, ...props }) => <p className="mb-2 last:mb-0 leading-snug" {...props} />,
                    }}
                  >
                    {message.content
                      // Collapse 3+ newlines to max 2 (prevent huge gaps)
                      .replace(/\n{3,}/g, '\n\n')
                      // Force single newline before any list marker (Markdown, Digit, or Bullet Char) to ensure tight lists
                      .replace(/\n+(?=[-•*] |\d+\.)/g, '\n')}
                  </ReactMarkdown>
                ) : (
                  message.content
                )}
              </div>
              <p
                className={`text-xs mt-2 ${message.role === 'user'
                  ? 'text-blue-100'
                  : 'text-gray-500 dark:text-gray-400'
                  }`}
              >
                {new Date(message.timestamp).toLocaleTimeString('id-ID', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
