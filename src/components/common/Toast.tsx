import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

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
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        backgroundColor: 'var(--text-primary)',
        color: '#FFFFFF',
        padding: '0.85rem 1.25rem',
        borderRadius: '6px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.18)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.88rem',
        fontWeight: 500,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        animation: 'slideUpFade 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}
    >
      <CheckCircle2 size={18} color="#4ADE80" />
      <span>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.6)',
          cursor: 'pointer',
          padding: '2px',
          display: 'flex',
          marginLeft: '0.5rem'
        }}
        aria-label="Close notification"
      >
        <X size={15} />
      </button>

      <style>{`
        @keyframes slideUpFade {
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
