const iconPaths = {
  'kitchen-sets': (
    <>
      <path d="M7 3v7M4 3v4a3 3 0 0 0 6 0V3M7 10v11" />
      <path d="M16 3v18M16 3c3 1 4 3 4 6v2h-4" />
    </>
  ),
  ducting: (
    <>
      <path d="M4 8c3-4 6 4 9 0s6 4 9 0" />
      <path d="M4 14c3-4 6 4 9 0s6 4 9 0" />
      <path d="M4 20c3-4 6 4 9 0s6 4 9 0" />
    </>
  ),
  'gas-installation': (
    <>
      <path d="M12 21c4 0 7-2.7 7-6.2 0-2.5-1.4-4.6-3.6-6.7.1 2-1 3.2-2.2 3.8.2-3.7-1.8-6.8-4.9-9.1.2 3.8-3.3 5.5-3.3 9.7C5 17.2 8.1 21 12 21Z" />
      <path d="M9.5 16.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.8-.4-1.5-1.1-2.1.1.9-.4 1.4-.9 1.7-.1-1.1-.6-1.9-1.6-2.6.1 1.4-1.4 1.7-1.4 3Z" />
    </>
  ),
  'well-drilling': (
    <>
      <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  electrical: (
    <>
      <path d="m13 2-8 12h6l-1 8 8-12h-6l1-8Z" />
    </>
  ),
};

export default function ServiceIcon({ slug, className }) {
  const path = iconPaths[slug] || iconPaths.electrical;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  );
}
