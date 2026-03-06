import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
              <Image
                src="/logo.png"
                alt="Fern Leigh's logo"
                width={383} // Set the "max" width here as the base
                height={112} // Adjusted height to maintain aspect ratio for 383px
                className={styles.logo} // We will use a CSS class for the logic
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
