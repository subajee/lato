import type { ReactNode } from "react";

type ArtProps = { className?: string };

/** Modern line-art travel glyphs. Decorative — callers mark aria-hidden. */
const artPaths: Record<string, ReactNode> = {
  plane: (
    <path d="M10 2.5c.7 0 1.2.9 1.2 2.1v4.2l7 4.1v1.7l-7-2v3.8l1.8 1.3v1.3l-3-1-3 1v-1.3l1.8-1.3v-3.8l-7 2v-1.7l7-4.1V4.6c0-1.2.5-2.1 1.2-2.1z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <ellipse cx="12" cy="12" rx="4" ry="9.5" />
      <path d="M2.6 9h18.8M2.6 15h18.8" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1z" />
      <circle cx="12" cy="12" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  luggage: (
    <>
      <rect x="5" y="7" width="14" height="14" rx="2.5" />
      <path d="M9 7V4.5A1.5 1.5 0 0110.5 3h3A1.5 1.5 0 0115 4.5V7M12 11v6" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8.5A1.5 1.5 0 014.5 7h2l1.4-2h8.2L17.5 7h2A1.5 1.5 0 0121 8.5v9A1.5 1.5 0 0119.5 19h-15A1.5 1.5 0 013 17.5z" />
      <circle cx="12" cy="13" r="3.4" />
    </>
  ),
  mountains: (
    <>
      <path d="M2 20l6.5-11 4 6.5 2.5-4L22 20z" />
      <path d="M8.5 9l2 3.3" />
    </>
  ),
  palm: (
    <>
      <path d="M12 21V10" />
      <path d="M12 10c-3-3-7-2.5-9 0 3-1 5 0 6 1M12 10c3-3 7-2.5 9 0-3-1-5 0-6 1M12 10c-1-3.5 1-6 4-7-2 2-2.5 4-2 5.5M12 10c1-3.5-1-6-4-7 2 2 2.5 4 2 5.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  ticket: (
    <>
      <path d="M3 8a2 2 0 012-2h14a2 2 0 012 2 2 2 0 000 4 2 2 0 00-2 4H5a2 2 0 01-2-2 2 2 0 000-4 2 2 0 010-4z" />
      <path d="M14 6v12" strokeDasharray="2 2" />
    </>
  ),
};

export function TravelArt({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {artPaths[name] ?? artPaths.pin}
    </svg>
  );
}

/**
 * A scattered layer of faint travel glyphs for section backgrounds.
 * Positioned absolutely; place inside a `relative overflow-hidden` parent.
 */
export function TravelArtScatter({ className }: ArtProps) {
  const items = [
    { name: "plane", pos: "left-[6%] top-[18%]", size: "h-10 w-10", rot: "-rotate-12" },
    { name: "compass", pos: "left-[20%] bottom-[14%]", size: "h-14 w-14", rot: "rotate-6" },
    { name: "globe", pos: "right-[10%] top-[22%]", size: "h-12 w-12", rot: "rotate-0" },
    { name: "camera", pos: "right-[24%] bottom-[18%]", size: "h-10 w-10", rot: "-rotate-6" },
    { name: "mountains", pos: "left-[46%] top-[10%]", size: "h-9 w-9", rot: "rotate-0" },
    { name: "palm", pos: "right-[4%] bottom-[8%]", size: "h-12 w-12", rot: "rotate-6" },
    { name: "luggage", pos: "left-[34%] bottom-[8%]", size: "h-9 w-9", rot: "-rotate-6" },
  ];
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        className ?? ""
      }`}
      aria-hidden="true"
    >
      {items.map((it) => (
        <TravelArt
          key={it.name}
          name={it.name}
          className={`absolute ${it.pos} ${it.size} ${it.rot} text-white/[0.09]`}
        />
      ))}
    </div>
  );
}
