'use client';

import React, { useEffect } from 'react';
import { LuCircleCheck as CheckCircle2, LuX as X } from 'react-icons/lu';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  onClose,
  duration = 3200
}) => {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-[9999] bg-[#20211F] text-white px-5 py-3.5 rounded-md shadow-2xl flex items-center gap-3 font-sans text-sm font-medium border border-white/10 animate-[slideUp_0.25s_cubic-bezier(0.2,0.8,0.2,1)]"
    >
      <CheckCircle2 size={18} className="text-green-400 shrink-0" />
      <span>{message}</span>
      <button
        onClick={onClose}
        className="text-white/60 hover:text-white p-0.5 ml-2 cursor-pointer transition-colors"
        aria-label="Close notification"
      >
        <X size={15} />
      </button>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};
