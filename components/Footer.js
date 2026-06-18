import { Link } from '../i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

const quickLinks = [
  { href: '/', labelKey: 'Navigation.home' },
  { href: '/about', labelKey: 'Navigation.about' },
  { href: '/products', labelKey: 'Navigation.products' },
  { href: '/projects', labelKey: 'Navigation.projects' },
  { href: '/blog', labelKey: 'Navigation.blog' },
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

          <div className={styles.footerCol}>
            <h4 className={styles.footerTitle}>{t('Footer.contact')}</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span>Jl. Raden Saleh II/6 No. 70C, DKI Jakarta, Indonesia</span>
              </li>
              <li>
                <a href="tel:+6281212671289" className={styles.contactLinkWithIcon}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <span>+62 812 1267 1289</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@limarsteknik.com" className={styles.contactLinkWithIcon}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <span>info@limarsteknik.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281212671289" target="_blank" rel="noopener noreferrer" className={styles.contactLinkWithIcon}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginTop: '2px' }}>
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.86.002-2.636-1.023-5.114-2.887-6.978C16.58 1.902 14.1 .879 11.47.879c-5.442 0-9.866 4.422-9.87 9.861a9.82 9.82 0 0 0 1.51 5.163l-.995 3.63 3.738-.98zm11.383-7.53c-.37-.185-2.18-1.077-2.52-1.2-.34-.125-.588-.185-.835.185-.246.37-.956 1.2-1.17 1.45-.216.25-.432.282-.803.096-.37-.185-1.564-.577-2.98-1.842-1.101-.982-1.844-2.194-2.06-2.564-.216-.37-.022-.57.163-.755.166-.165.37-.43.555-.646.185-.216.246-.37.37-.616.123-.246.06-.462-.03-.647-.09-.185-.835-2.01-1.144-2.754-.3-.722-.605-.624-.835-.636-.216-.01-.463-.013-.71-.013-.247 0-.648.093-.987.462-.34.37-1.297 1.27-1.297 3.1 0 1.83 1.328 3.597 1.513 3.844.185.247 2.61 3.986 6.323 5.59 1.096.473 1.95.757 2.616.967.876.277 1.673.238 2.3.145.7-.104 2.18-.89 2.488-1.753.308-.862.308-1.603.216-1.753-.093-.15-.34-.242-.71-.427z"/>
                    </svg>
                  </span>
                  <span>WhatsApp: +62 812 1267 1289</span>
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