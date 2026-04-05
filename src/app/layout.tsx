import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.scss";
import styles from "./layout.module.scss";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import Navbar from "@/components/Navbar/Navbar";
import Placeholder from "./placeholder";
import { figtree } from "./fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Fern Leigh Dev",
    default: "Fern Leigh Dev | Portfolio",
  },
  description: "Senior Software Engineer Portfolio",
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showPlaceholder = process.env.SHOW_PLACEHOLDER === "true";

  if (showPlaceholder) {
    return (
      <html
        lang="en"
        data-theme="dark"
        className={`${figtree.className} ${figtree.variable}`}
      >
        <body>
          <Placeholder />
        </body>
      </html>
    );
  }

  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${figtree.className} ${figtree.variable}`}
    >
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
        <main>{children}</main>
      </body>
    </html>
  );
}
