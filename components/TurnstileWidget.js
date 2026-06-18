'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function TurnstileWidget({ siteKey, onSuccess }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    let active = true;

    const renderWidget = () => {
      if (active && window.turnstile && containerRef.current && !widgetIdRef.current) {
        try {
          const id = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token) => {
              if (active) onSuccess(token);
            },
          });
          widgetIdRef.current = id;
        } catch (err) {
          console.error('Error rendering Turnstile:', err);
        }
      }
    };

    if (window.turnstile) {
      renderWidget();
    }

    return () => {
      active = false;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        } catch (err) {
          // Ignore removal error on unmount
        }
      }
    };
  }, [siteKey, onSuccess]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.turnstile && containerRef.current && !widgetIdRef.current) {
            try {
              const id = window.turnstile.render(containerRef.current, {
                sitekey: siteKey,
                callback: (token) => {
                  onSuccess(token);
                },
              });
              widgetIdRef.current = id;
            } catch (err) {
              console.error('Error rendering Turnstile in onLoad:', err);
            }
          }
        }}
      />
      <div ref={containerRef} />
    </>
  );
}
