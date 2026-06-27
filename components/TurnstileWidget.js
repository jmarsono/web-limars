'use client';

import Script from 'next/script';
import { useEffect, useRef, useCallback } from 'react';

export default function TurnstileWidget({ siteKey, onSuccess }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onSuccessRef = useRef(onSuccess);

  // Keep the callback ref updated without triggering re-renders
  useEffect(() => {
    onSuccessRef.current = onSuccess;
  }, [onSuccess]);

  const renderWidget = useCallback(() => {
    if (window.turnstile && containerRef.current && !widgetIdRef.current) {
      try {
        const id = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token) => {
            onSuccessRef.current?.(token);
          },
        });
        widgetIdRef.current = id;
      } catch (err) {
        console.error('Error rendering Turnstile:', err);
      }
    }
  }, [siteKey]);

  useEffect(() => {
    if (window.turnstile) {
      renderWidget();
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        } catch (err) {
          // Ignore removal error on unmount
        }
      }
    };
  }, [siteKey, renderWidget]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => {
          renderWidget();
        }}
      />
      <div ref={containerRef} />
    </>
  );
}
