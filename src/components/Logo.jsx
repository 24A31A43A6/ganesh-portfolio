import React from 'react';

export default function Logo({ size = 64, variant = 'gradient', className = '' }) {
  const height = (size * 100) / 200;

  if (variant === 'gold') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width={size} height={height} className={className} role="img" aria-label="SG gold logo">
        <defs>
          <linearGradient id="goldGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#f6e27a" />
            <stop offset="0.4" stopColor="#ffd26a" />
            <stop offset="0.7" stopColor="#d4a017" />
            <stop offset="1" stopColor="#a66e00" />
          </linearGradient>
          <radialGradient id="gloss" cx="30%" cy="20%" r="60%">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="transparent" />

        <g transform="translate(0,0)" fill="url(#goldGrad)" stroke="#6f4a00" strokeWidth="1">
          <path d="M28 22 C28 12,62 12,62 22 C62 30,40 30,40 36 C40 44,62 44,62 52 C62 64,28 64,28 52" />
          <path d="M140 50 a30 30 0 1 0 0.1 0" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M148 50 L132 50" stroke="#6f4a00" strokeWidth="10" strokeLinecap="round" />
          <path d="M20 10 C50 0,90 0,110 14 C130 28,160 24,170 12 L170 8 C153 20,124 26,104 14 C84 2,50 2,20 22 C40 42,12 46,12 32 Z" fill="url(#gloss)" opacity="0.45" />
        </g>
      </svg>
    );
  }

  if (variant === 'wordmark') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 120" width={(size * 600) / 200} height={(size * 120) / 200} className={className} role="img" aria-label="SG wordmark">
        <defs>
          <linearGradient id="wmGold" x1="0" x2="1">
            <stop offset="0" stopColor="#f6e27a" />
            <stop offset="1" stopColor="#b8860b" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="transparent" />
        <g transform="translate(24,12)">
          <rect width="96" height="96" rx="18" fill="url(#wmGold)" stroke="#6f4a00" strokeWidth="2" />
          <g transform="translate(14,12)" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 24 C8 14,30 14,30 24 C30 34,8 34,8 44" />
            <path d="M66 24 A18 18 0 1 0 66 60" />
            <path d="M54 42 L66 42" stroke="#fff" strokeWidth="8" />
          </g>
          <rect x="136" y="22" width="2" height="56" fill="#b8860b" opacity="0.9" rx="1" />
          <g transform="translate(156,30)" fill="#f3d68a">
            <text x="0" y="34" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="36">SAI GANESH</text>
          </g>
        </g>
      </svg>
    );
  }

  if (variant === 'professional') {
    const w = (size * 600) / 200;
    const h = (size * 120) / 200;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 120" width={w} height={h} className={className} role="img" aria-label="SG Professional Wordmark">
        <defs>
          <linearGradient id="profGold" x1="0" x2="1">
            <stop offset="0" stopColor="#f4d27d"/>
            <stop offset="0.5" stopColor="#e8c547"/>
            <stop offset="1" stopColor="#c9a72d"/>
          </linearGradient>
        </defs>
        <rect width="600" height="120" fill="#000000"/>
        <g transform="translate(20,12)">
          <rect width="96" height="96" rx="12" fill="url(#profGold)"/>
          <g transform="translate(24,28)" fill="#ffffff" fontFamily="Georgia, serif" fontWeight="700" fontSize="48" letterSpacing="2">
            <text x="0" y="40">SG</text>
          </g>
        </g>
        <line x1="135" y1="25" x2="135" y2="95" stroke="#c9a72d" strokeWidth="1.5" opacity="0.8"/>
        <g transform="translate(155,35)">
          <text x="0" y="0" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" letterSpacing="1.5" fill="url(#profGold)">SAI GANESH</text>
        </g>
      </svg>
    );
  }

  // default gradient monogram
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 100"
      width={size}
      height={height}
      className={className}
      role="img"
      aria-label="SG logo"
    >
      <defs>
        <linearGradient id="grad" x1="0" x2="1">
          <stop offset="0" stopColor="#00D4FF" />
          <stop offset="1" stopColor="#6A00FF" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="transparent" />

      <g transform="translate(0,0)" fill="none" stroke="url(#grad)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 25 C30 10,70 10,70 25 C70 40,30 40,30 55 C30 70,70 70,70 55" />
        <circle cx="140" cy="50" r="30" />
        <path d="M145 50 L130 50" stroke="url(#grad)" strokeWidth="10" strokeLinecap="round" />
      </g>
    </svg>
  );
}
