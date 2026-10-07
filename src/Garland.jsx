const FLAGS = [
  { x: 16, y: 11, rot: -3, fill: "#17c3b2", mask: "m-flower" },
  { x: 72, y: 16, rot: 0, fill: "#ffb21f", mask: "m-zig" },
  { x: 128, y: 19, rot: 0, fill: "#ff8a1f", mask: "m-flower" },
  { x: 184, y: 19, rot: 0, fill: "#17c3b2", mask: "m-skull" },
  { x: 240, y: 16, rot: 0, fill: "#ff5d73", mask: "m-diam" },
  { x: 296, y: 11, rot: 3, fill: "#ffc93c", mask: "m-flower" },
];

export default function Garland() {
  return (
    <svg className="garland" viewBox="0 0 360 92" aria-hidden="true">
      <path d="M0 8Q180 34 360 8" fill="none" stroke="#14100c" strokeWidth="1.6" />
      {FLAGS.map((f) => (
        <g key={f.x} transform={`translate(${f.x} ${f.y}) rotate(${f.rot} 24 0)`}>
          <use href="#flag" fill={f.fill} mask={`url(#${f.mask})`} />
        </g>
      ))}
    </svg>
  );
}
