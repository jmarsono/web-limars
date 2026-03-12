import { Link } from '../i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

const quickLinks = [
  { href: '/', labelKey: 'Navigation.home' },
  { href: '/about', labelKey: 'Navigation.about' },
  { href: '/products', labelKey: 'Navigation.products' },
  { href: '/projects', labelKey: 'Navigation.projects' },
  { href: '/faq', labelKey: 'Navigation.faq' },
  { href: '/contact', labelKey: 'Navigation.contact' },
];

const serviceLinks = [
  { href: '/services/kitchen-sets', labelKey: 'Navigation.services_kitchen' },
  { href: '/services/ducting', labelKey: 'Navigation.services_ducting' },
  { href: '/services/gas-installation', labelKey: 'Navigation.services_gas' },
  { href: '/services/well-drilling', labelKey: 'Navigation.services_well' },
  { href: '/services/electrical', labelKey: 'Navigation.services_electrical' },
];

export default function Footer() {
  const t = useTranslations();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              <div className={styles.logoIcon}>
                <Image src="/logo.png" alt="Limars Teknik Logo" width={42} height={42} />
              </div>
              <div>
                <div className={styles.logoName}>LIMARS TEKNIK</div>
                <div className={styles.logoSub}>INDONESIA</div>
              </div>
            </div>
            <p className={styles.footerDesc}>
              {t('Footer.desc')}
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/cv.limarsteknik/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/limarstek" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.youtube.com/@limarsteknik" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerTitle}>{t('Footer.quickLinks')}</h4>
            <ul className={styles.footerLinks}>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{t(link.labelKey)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerTitle}>{t('Footer.services')}</h4>
            <ul className={styles.footerLinks}>
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{t(link.labelKey)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerTitle}>{t('Footer.contact')}</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>📍</span>
                <span>Jl. Raden Saleh II/6 No. 70C, DKI Jakarta, Indonesia</span>
              </li>
              <li>
                <span className={styles.contactIcon}>📞</span>
                <span>+62 812 1267 1289</span>
              </li>
              <li>
                <span className={styles.contactIcon}>✉️</span>
                <span>info@limarsteknik.com</span>
              </li>
              <li>
                <span className={styles.contactIcon}>💬</span>
                <a href="https://wa.me/6281212671289" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +62 812 1267 1289
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container ${styles.footerBottomInner}`}>
          <p>&copy; {new Date().getFullYear()} {t('Footer.rights')}</p>
          <div className={styles.footerBottomLinks}>
            <Link href="/privacy-policy" className={styles.footerBottomLink}>
              {t('Navigation.privacyPolicy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
