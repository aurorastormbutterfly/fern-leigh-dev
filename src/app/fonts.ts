import { Figtree } from "next/font/google";

/**
 * Configure the Figtree font from Google Fonts.
 *
 * This is a variable font.
 * Available weights: 300-900
 *
 * @see https://fonts.google.com/specimen/Figtree
 */
export const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree", // Define a CSS variable for Figtree
});
