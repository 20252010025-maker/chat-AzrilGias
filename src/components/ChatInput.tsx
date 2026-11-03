'use client';

import { useState, useRef, useEffect } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => Promise<void>;
  isLoading: boolean;
}

export default function ChatInput({
  onSendMessage,
  isLoading,
}: ChatInputProps) {
  const [input, setInput] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = async () => {
    if (!input.trim() || isLoading || isComposing) return;

    const message = input.trim();
    setInput('');

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    // Blur textarea to hide mobile keyboard
    if (textareaRef.current) {
      textareaRef.current.blur();
    }

    await onSendMessage(message);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Tombol Enter sekarang hanya berfungsi untuk baris baru
    // Fitur kirim via Enter telah dimatikan sesuai permintaan user
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(
        textareaRef.current.scrollHeight,
        120
      ) + 'px';
    }
  }, [input]);



  return (
    <div className="border-t border-gray-200 dark:border-slate-800 pt-4">
      <div className="relative flex items-end gap-3">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          placeholder="Tulis pertanyaanmu untuk Azril AI Asisten..."
          disabled={isLoading}
          rows={1}
          className="flex-1 p-3 text-sm md:text-base rounded-2xl border border-blue-200 dark:border-sky-800 bg-white/90 dark:bg-slate-900/80 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-sky-500 resize-none max-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_22px_rgba(37,99,235,0.08)]"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 dark:from-blue-500 dark:to-sky-400 dark:hover:from-blue-400 dark:hover:to-sky-300 text-white rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-blue-500/25"
        >
          {isLoading ? (
            <i className="fas fa-spinner animate-spin"></i>
          ) : (
            <i className="fas fa-paper-plane"></i>
          )}
        </button>
      </div>
      <div className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center space-y-1">
        <p>“Azril AI Asisten can make mistakes, so please double-check important information.”</p>
        <p>© 2026 Hak Cipta Dilindungi.</p>
        <p>
          Developed by{' '}
          <a
            href="https://adi-muhamad.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-sky-300 hover:text-blue-800 dark:hover:text-sky-200 hover:underline transition-colors"
          >
            adi-muhamad.my.id
          </a>
        </p>
      </div>
    </div>
  );
}
