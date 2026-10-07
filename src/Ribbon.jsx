export default function Ribbon() {
  return (
    <h1 className="ribbon-title">
      <svg className="ribbon" viewBox="0 0 340 84" role="img" aria-label="Jalisco">
        <polygon className="rib-d" points="0,26 32,26 32,72 0,72 14,49" />
        <polygon className="rib-d" points="340,26 308,26 308,72 340,72 326,49" />
        <polygon className="rib-d" points="24,58 38,58 38,72" />
        <polygon className="rib-d" points="316,58 302,58 302,72" />
        <rect className="rib" x="24" y="8" width="292" height="50" />
        <text className="rib-text" x="170" y="48" textAnchor="middle" textLength="250" lengthAdjust="spacingAndGlyphs">
          JALISCO
        </text>
      </svg>
    </h1>
  );
}
