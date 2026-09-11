function Row({ flip }) {
  const colors = ["#2f6e3a", "#fdf8ec", "#c8342a"];
  const triangles = Array.from({ length: 12 }, (_, i) => {
    const x0 = i * 24;
    const points = flip
      ? `${x0},20 ${x0 + 24},20 ${x0 + 12},0`
      : `${x0},0 ${x0 + 24},0 ${x0 + 12},20`;
    return <polygon key={i} points={points} fill={colors[i % 3]} />;
  });
  return (
    <svg className="bunting-row" viewBox="0 0 288 20" preserveAspectRatio="none">
      {triangles}
    </svg>
  );
}

export function BuntingTop() {
  return <Row />;
}

export function BuntingBottom() {
  return <Row flip />;
}
