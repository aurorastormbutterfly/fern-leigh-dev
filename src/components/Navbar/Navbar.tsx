import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navLink}>Home</Link>
      <Link href="/about" className={styles.navLink}>About Me</Link>
      <Link href="/experience" className={styles.navLink}>Professional Experience</Link>
      <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
    </nav>
  );
}
