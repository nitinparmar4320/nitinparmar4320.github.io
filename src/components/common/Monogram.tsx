import React from 'react';

interface MonogramProps {
  size?: number;
  className?: string;
}

export const Monogram: React.FC<MonogramProps> = ({ size = 36, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center justify-center relative select-none ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '6px',
        backgroundColor: '#F2F1EA',
        border: '1px solid #DEDED6',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans)',
        boxShadow: '0 1px 2px rgba(32, 33, 31, 0.04)'
      }}
      aria-label="Nitin Parmar Monogram"
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 800,
          fontSize: `${size * 0.44}px`,
          color: '#20211F',
          lineHeight: 1,
          letterSpacing: '-0.05em'
        }}
      >
        N
      </span>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 600,
          fontSize: `${size * 0.48}px`,
          color: 'var(--accent-vermilion)',
          lineHeight: 1,
          marginLeft: '-1px'
        }}
      >
        P
      </span>
      <span
        style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-blue)'
        }}
      />
    </div>
  );
};
