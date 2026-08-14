const iconPaths = {
  star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" fill="currentColor" stroke="none" />,
  handshake: <><path d="m3 8 3-3 4 2 2-1 3 2 3-2 3 3-3 3-2-1-2 2-2-1-2 2-4-4Z" /><path d="m8 11 2 2m2-2 2 2m-4 0 2 2" /></>,
  lightbulb: <><path d="M9 18h6m-5 3h4" /><path d="M8.5 14.5A6 6 0 1 1 15.5 14c-.8.7-1.5 1.5-1.5 2.5h-4c0-1-.7-1.4-1.5-2Z" /></>,
  shield: <path d="M12 3 20 6v5c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-3Z" />,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></>,
  leaf: <><path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-6 10-16Z" /><path d="M4 20c3-4 6-7 11-10" /></>,
  telescope: <><path d="m6 4 11 6-3 5L3 9l3-5Z" /><path d="m14 15 3 6M9 13l-3 8M4 21h12" /></>,
  package: <><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="M4 7v10l8 4 8-4V7M12 11v10" /></>,
  building: <><path d="M4 21V5l8-3 8 3v16M2 21h20M8 8h2m4 0h2M8 12h2m4 0h2M8 16h2m4 0h2" /></>,
  question: <><circle cx="12" cy="12" r="9" /><path d="M9.8 9a2.3 2.3 0 1 1 3.8 1.7c-1 .7-1.6 1.1-1.6 2.3M12 16h.01" /></>,
  location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  check: <path d="m5 12 4 4L19 6" />,
};

export default function UiIcon({ name, className, size = 20 }) {
  const icon = iconPaths[name];
  if (!icon) return null;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icon}
    </svg>
  );
}
