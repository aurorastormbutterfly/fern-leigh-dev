import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.scss";
import styles from "./layout.module.scss";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Fern Leigh Dev | Portfolio",
  description: "Senior Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <header className={styles.header}>
          <div className={styles.brand}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo showing words 'Fern Leigh Dev - web dev / consultant / mentor'"
                width={383}
                height={112}
                className={styles.logo}
                priority
                unoptimized
              />
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
