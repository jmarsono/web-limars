'use client';

import styles from './WhatsAppButton.module.css';
import { trackWhatsAppClick } from '../lib/analytics';

export default function WhatsAppButton() {
  const handleClick = () => {
    trackWhatsAppClick({ label: 'floating_widget' });
  };

  return (
    <a
      href="https://wa.me/6281212671289?text=Halo%20Limars%20Teknik%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20dan%20layanan%20Anda."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
      aria-label="Chat on WhatsApp"
      id="whatsapp-fab"
      onClick={handleClick}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.927 15.927 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.35 22.614c-.394 1.108-1.946 2.03-3.2 2.298-.858.182-1.978.328-5.752-1.236-4.832-2.002-7.936-6.906-8.176-7.224-.23-.318-1.942-2.586-1.942-4.932 0-2.346 1.23-3.5 1.666-3.978.394-.432 1.032-.644 1.644-.644.198 0 .376.01.536.018.434.02.652.046 .938.724.356.846 1.224 2.99 1.33 3.208.108.218.216.516.066.816-.14.308-.264.5-.482.768-.218.268-.458.598-.654.802-.218.228-.444.476-.19.934.254.452 1.13 1.862 2.426 3.018 1.666 1.488 3.07 1.95 3.504 2.168.434.218.688.182.942-.11.262-.3 1.112-1.296 1.41-1.742.29-.446.588-.372.988-.224.404.152 2.546 1.2 2.98 1.418.434.218.724.328.832.51.106.182.106 1.054-.288 2.162z"/>
      </svg>
      <span className={styles.tooltip}>Chat with us</span>
    </a>
  );
}
