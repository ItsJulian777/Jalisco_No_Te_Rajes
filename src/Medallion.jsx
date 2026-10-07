const TRI_COLORS = ["#ff8a1f", "#d62828", "#2f9e5a", "#ffc93c"];

export default function Medallion({ skull }) {
  return (
    <svg className="medal" viewBox="0 0 300 250" role="img" aria-label="Calavera con sombrero y flores">
      <circle className="ring-bg" cx="150" cy="125" r="120" />
      {Array.from({ length: 16 }, (_, i) => (
        <use
          key={i}
          href="#tri"
          fill={TRI_COLORS[i % 4]}
          transform={i === 0 ? undefined : `rotate(${i * 22.5} 150 125)`}
        />
      ))}
      <circle cx="150" cy="125" r="99" fill="url(#glow)" />
      <circle className="ring-line" cx="150" cy="125" r="99" />
      <image href={skull} x="32" y="22" width="236" height="206" preserveAspectRatio="xMidYMid meet" />
    </svg>
  );
}
