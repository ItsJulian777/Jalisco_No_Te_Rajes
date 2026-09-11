export default function Mariachi() {
  return (
    <svg className="mariachi" width="110" height="124" viewBox="0 0 64 72" aria-hidden="true">
      {/* guitarra */}
      <g transform="translate(2 30) rotate(-18)">
        <path d="M8 20c-4 0-7-4-7-9s3-9 7-9 7 3 7 6-2 4-2 7 2 3 2 6-3 9-7 9Z" fill="#7a4a22" stroke="#4a2a10" strokeWidth="1.2" />
        <circle cx="8" cy="8" r="2.6" fill="#4a2a10" />
        <line x1="8" y1="-10" x2="8" y2="20" stroke="#3a1f0c" strokeWidth="1.4" />
      </g>

      {/* cuerpo / sarape */}
      <path d="M14 72V52c0-8 8-13 18-13s18 5 18 13v20Z" fill="#c8342a" />
      <path d="M14 60h36M14 66h36" stroke="#f4ecd8" strokeWidth="2" />
      <path d="M18 72V56c0-7 6-11 14-11s14 4 14 11v16Z" fill="#2e7d46" opacity="0.85" />

      {/* cabeza */}
      <circle cx="32" cy="34" r="12" fill="#c98a4b" />
      <path d="M22 34c0-6 4-10 10-10s10 4 10 10" fill="none" stroke="#4a2a10" strokeWidth="0" />
      <path d="M25 37c1.5 2.5 4 4 7 4s5.5-1.5 7-4" fill="none" stroke="#3a1f0c" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M24 32c1-1.5 3-2 4-2M40 32c-1-1.5-3-2-4-2" stroke="#3a1f0c" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M23 35c3-2.5 6.5-3.5 9-3.5s6 1 9 3.5" fill="none" stroke="#241608" strokeWidth="2.6" strokeLinecap="round" />

      {/* sombrero */}
      <ellipse cx="32" cy="24" rx="22" ry="6.5" fill="#dba746" stroke="#6b430f" strokeWidth="1.6" />
      <path d="M20 24c0-8 5.5-14 12-14s12 6 12 14Z" fill="#c8912f" stroke="#6b430f" strokeWidth="1.6" />
      <path d="M24 21c0-4.5 3.5-8 8-8s8 3.5 8 8" fill="none" stroke="#8a611f" strokeWidth="1.6" />
      <rect x="22" y="21.5" width="20" height="2.2" fill="#c8342a" />
      <rect x="22" y="23.7" width="20" height="1.6" fill="#f4ecd8" />
    </svg>
  );
}
