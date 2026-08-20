'use client';

import { trackWhatsAppClick } from '../lib/analytics';

export default function TrackedWhatsAppLink({ href, label, className, children }) {
  const handleClick = () => {
    trackWhatsAppClick({ label: label || 'cta_button' });
  };

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
