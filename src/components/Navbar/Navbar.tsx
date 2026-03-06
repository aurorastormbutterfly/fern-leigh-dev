"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/about" className={styles.navLink}>About Me</Link>
        <Link href="/experience" className={styles.navLink}>Professional Experience</Link>
        <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
      </div>
    </nav>
  );
}
