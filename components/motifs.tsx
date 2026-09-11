type MotifProps = { className?: string };

/**
 * Lotus medallion — inspired by the "nelum" (lotus) ceiling paintings found in
 * Sri Lankan temples (e.g. the Kandyan tradition). A radial arrangement of
 * petals around a seed pod. Decorative only — callers should mark it
 * aria-hidden.
 */
export function LotusMedallion({ className }: MotifProps) {
  const outer = Array.from({ length: 16 });
  const inner = Array.from({ length: 8 });
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <g stroke="currentColor" strokeWidth={1.4}>
        <circle cx="100" cy="100" r="97" />
        <circle cx="100" cy="100" r="88" />
        <circle cx="100" cy="100" r="66" />

        {/* Outer petal ring */}
        {outer.map((_, i) => (
          <path
            key={`o-${i}`}
            d="M100 22 C113 50 113 74 100 92 C87 74 87 50 100 22 Z"
            transform={`rotate(${(360 / outer.length) * i} 100 100)`}
          />
        ))}

        {/* Inner petal ring, offset */}
        {inner.map((_, i) => (
          <path
            key={`i-${i}`}
            d="M100 52 C109 70 109 84 100 98 C91 84 91 70 100 52 Z"
            transform={`rotate(${(360 / inner.length) * i + 22.5} 100 100)`}
          />
        ))}

        <circle cx="100" cy="100" r="14" />
        <circle cx="100" cy="100" r="5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}
