export default function Defs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <path id="flag" d="M0 0H48V58Q42 67 36 58Q30 67 24 58Q18 67 12 58Q6 67 0 58Z" />
        <mask id="m-flower" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="68">
          <rect width="48" height="68" fill="#fff" />
          <g fill="#000">
            <circle cx="24" cy="26" r="4" />
            <ellipse cx="24" cy="15" rx="3.6" ry="6" />
            <ellipse cx="24" cy="37" rx="3.6" ry="6" />
            <ellipse cx="13" cy="26" rx="6" ry="3.6" />
            <ellipse cx="35" cy="26" rx="6" ry="3.6" />
            <circle cx="8" cy="8" r="2" />
            <circle cx="40" cy="8" r="2" />
            <circle cx="8" cy="48" r="2" />
            <circle cx="40" cy="48" r="2" />
          </g>
        </mask>
        <mask id="m-skull" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="68">
          <rect width="48" height="68" fill="#fff" />
          <path d="M24 12c-8 0-12 6-12 13 0 5 2 7 4 9v6h16v-6c2-2 4-4 4-9 0-7-4-13-12-13Z" fill="#000" />
          <circle cx="19" cy="25" r="3.4" fill="#fff" />
          <circle cx="29" cy="25" r="3.4" fill="#fff" />
          <path d="M24 29l-2 3.4h4Z" fill="#fff" />
          <path d="M19 38v4M24 38v5M29 38v4" stroke="#fff" strokeWidth="1.4" />
          <circle cx="6" cy="6" r="2" fill="#000" />
          <circle cx="42" cy="6" r="2" fill="#000" />
        </mask>
        <mask id="m-zig" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="68">
          <rect width="48" height="68" fill="#fff" />
          <path
            d="M4 14l5 6 5-6 5 6 5-6 5 6 5-6 5 6 4-5M4 26l5 6 5-6 5 6 5-6 5 6 5-6 5 6 4-5M4 38l5 6 5-6 5 6 5-6 5 6 5-6 5 6 4-5"
            fill="none"
            stroke="#000"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="52" r="2.4" fill="#000" />
          <circle cx="24" cy="52" r="2.4" fill="#000" />
          <circle cx="36" cy="52" r="2.4" fill="#000" />
        </mask>
        <mask id="m-diam" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="68">
          <rect width="48" height="68" fill="#fff" />
          <g fill="#000">
            <path d="M24 8l6 8-6 8-6-8Z" />
            <path d="M12 28l5 6-5 6-5-6ZM36 28l5 6-5 6-5-6Z" />
            <path d="M24 40l6 8-6 8-6-8Z" />
            <circle cx="24" cy="31" r="2.4" />
          </g>
        </mask>

        <symbol id="petal" viewBox="0 0 20 28">
          <path d="M10 1C17 8 18 18 10 27 2 18 3 8 10 1Z" fill="#ff8a1f" />
          <path d="M10 6C13 11 13 18 10 23" stroke="#e86a00" fill="none" strokeWidth="1" />
        </symbol>
        <symbol id="spiral" viewBox="0 0 30 30">
          <path
            d="M15 15a2 2 0 1 1 4 0a5 5 0 1 1-10 0a9 9 0 1 1 18 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="trio" viewBox="0 0 20 18">
          <path d="M10 2 18 16H2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </symbol>
        <ellipse id="fp" cx="12" cy="5" rx="2.6" ry="4.6" fill="currentColor" />
        <symbol id="flw" viewBox="0 0 24 24">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <use key={deg} href="#fp" transform={`rotate(${deg} 12 12)`} />
          ))}
          <circle cx="12" cy="12" r="2.4" fill="#ffe07a" />
        </symbol>

        <polygon id="tri" points="142,27 158,27 150,5" />
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="100%" stopColor="#ef7a1f" />
        </radialGradient>
      </defs>
    </svg>
  );
}
