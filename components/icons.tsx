import type { ReactNode } from "react";

type IconProps = { className?: string };

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 1.82c2.16 0 4.18.84 5.71 2.37a8.03 8.03 0 012.37 5.72c0 4.45-3.62 8.08-8.08 8.08h-.01a8.2 8.2 0 01-4.18-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.05 8.05 0 01-1.24-4.3c0-4.46 3.63-8.09 8.08-8.09zm-3.7 4.42c-.17 0-.45.06-.69.31-.24.24-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.87 4.44 3.92 2.2.87 2.65.7 3.13.65.48-.04 1.55-.63 1.77-1.25.22-.61.22-1.14.15-1.25-.06-.11-.24-.17-.5-.31s-1.55-.76-1.79-.85c-.24-.09-.42-.13-.59.13-.17.24-.68.85-.83 1.02-.15.17-.31.2-.57.07-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.31.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.06-.13-.57-1.4-.79-1.92-.2-.5-.4-.43-.55-.44l-.47-.01z" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path
        d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z"
        fill="currentColor"
        fillOpacity={0.15}
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity={0.15} />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" fill="currentColor" fillOpacity={0.15} />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

const featurePaths: Record<string, ReactNode> = {
  users: (
    <>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" fill="currentColor" fillOpacity={0.15} />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9.5" fill="currentColor" fillOpacity={0.12} />
      <path
        d="M16 8l-2.6 5.4L8 16l2.6-5.4L16 8z"
        fill="currentColor"
        fillOpacity={0.3}
      />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  bed: (
    <>
      <path
        d="M3 11a2 2 0 012-2h6v3h9a1 1 0 011 1v4H3z"
        fill="currentColor"
        fillOpacity={0.12}
        stroke="none"
      />
      <path d="M3 18V8" />
      <path d="M3 12h17a1 1 0 011 1v5" />
      <path d="M3 12v-1a2 2 0 012-2h5a2 2 0 012 2v1" />
      <path d="M3 18h18" />
    </>
  ),
  leaf: (
    <>
      <path
        d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 01-7 7h-3z"
        fill="currentColor"
        fillOpacity={0.14}
      />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
      <path d="M9 13c2-2 4-3 6.5-3.5" />
    </>
  ),
  star: (
    <path
      d="M12 3l2.9 5.88 6.1.89-4.4 4.3 1.04 6.06L12 17.77 6.36 20.13 7.4 14.07 3 9.77l6.1-.89L12 3z"
      fill="currentColor"
      fillOpacity={0.15}
    />
  ),
  calendar: (
    <>
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2.5"
        fill="currentColor"
        fillOpacity={0.12}
      />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <circle cx="8" cy="14" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="14" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="16" cy="14" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
};

export function FeatureIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {featurePaths[name] ?? featurePaths.compass}
    </svg>
  );
}
