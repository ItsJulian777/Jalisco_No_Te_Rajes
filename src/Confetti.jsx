const ITEMS = [
  { id: "petal", style: { left: "4%", top: "21%", width: 15, height: 21, transform: "rotate(-24deg)" } },
  { id: "petal", style: { right: "5%", top: "26%", width: 14, height: 20, transform: "rotate(28deg)" } },
  { id: "flw", style: { right: "4%", top: "15%", width: 22, height: 22, color: "#ff8a1f" } },
  { id: "trio", style: { left: "6%", top: "31%", width: 18, height: 16, color: "#17c3b2", transform: "rotate(14deg)" } },
  { id: "spiral", style: { right: "6%", top: "57%", width: 26, height: 26, color: "#ffc93c" } },
  { id: "trio", style: { right: "8%", top: "44%", width: 16, height: 14, color: "#ffc93c", transform: "rotate(-12deg)" } },
];

export default function Confetti() {
  return (
    <div className="conf" aria-hidden="true">
      {ITEMS.map((item, i) => (
        <svg key={i} style={item.style}>
          <use href={`#${item.id}`} />
        </svg>
      ))}
    </div>
  );
}
