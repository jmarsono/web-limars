'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  {
    href: '/products',
    label: 'Products',
    dropdown: [
      { href: '/products?cat=Traditional+Stoves', label: 'Traditional Stoves' },
      { href: '/products?cat=Regional+Ovens', label: 'Regional Ovens' },
      { href: '/products?cat=Modern+Ovens', label: 'Modern Ovens' },
      { href: '/products?cat=Kitchen+Equipment', label: 'Kitchen Equipment' },
    ],
  },
  {
    href: '/services',
    label: 'Services',
    dropdown: [
      { href: '/services/kitchen-sets', label: 'Kitchen Sets' },
      { href: '/services/ducting', label: 'Ducting Systems' },
      { href: '/services/gas-installation', label: 'Gas Installation' },
      { href: '/services/well-drilling', label: 'Well Drilling' },
      { href: '/services/electrical', label: 'Electrical Services' },
    ],
  },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleDropdown = (idx) => {
    setActiveDropdown(activeDropdown === idx ? null : idx);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
          <div className={styles.logoIcon}>
            <Image src="/logo.png" alt="Limars Teknik Logo" width={42} height={42} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>LIMARS TEKNIK</span>
            <span className={styles.logoSub}>INDONESIA</span>
          </div>
        </Link>

        <div className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
          {navLinks.map((link, idx) => (
            <div
              key={idx}
              className={styles.navItem}
              onMouseEnter={() => link.dropdown && setActiveDropdown(idx)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <>
                  <button
                    className={styles.navLink}
                    onClick={() => toggleDropdown(idx)}
                    aria-expanded={activeDropdown === idx}
                  >
                    {link.label}
                    <svg className={`${styles.chevron} ${activeDropdown === idx ? styles.chevronOpen : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className={`${styles.dropdown} ${activeDropdown === idx ? styles.dropdownOpen : ''}`}>
                    {link.dropdown.map((subLink, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subLink.href}
                        className={styles.dropdownLink}
                        onClick={() => { setMobileOpen(false); setActiveDropdown(null); }}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link href="/contact" className={`btn btn-primary ${styles.navCta}`} onClick={() => setMobileOpen(false)}>
            Get a Quote
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
