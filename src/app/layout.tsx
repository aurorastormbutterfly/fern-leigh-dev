import type { Metadata } from "next";
import Link from "next/link";
import "./globals.scss";
import styles from "./layout.module.scss";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Fern Leigh | Portfolio",
  description: "Senior Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <header className={styles.header}>
          <div className={styles.brand}>
            <Link href="/">
              <h1 className={styles.title}>FERN-LEIGH.DEV</h1>
              <p className={styles.subtitle}>WEB DEV / CONSULTANT / MENTOR</p>
            </Link>
          </div>
          <nav className={styles.nav}>
            <Navbar />
            <ThemeToggle />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}