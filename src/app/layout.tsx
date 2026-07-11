import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matt Growden Magic | Strolling Close-Up Magician | Huntsville, AL",
  description: "Unforgettable strolling sleight-of-hand magic for adults in Huntsville, Alabama & the Tennessee Valley. Elevate your wedding reception, corporate event, private party, or restaurant promotions.",
  keywords: [
    "magician Huntsville AL",
    "close-up magician Alabama",
    "strolling magic Huntsville",
    "corporate event entertainment Huntsville",
    "wedding magician Huntsville",
    "strolling sleight-of-hand",
    "adult magic entertainment",
    "Tennessee Valley magician"
  ],
  authors: [{ name: "Matt Growden" }],
  creator: "Matt Growden",
  openGraph: {
    title: "Matt Growden Magic | Strolling Close-Up Magician",
    description: "Unforgettable strolling sleight-of-hand magic for adults in Huntsville, Alabama & the Tennessee Valley. Elevate your wedding reception, corporate event, private party, or restaurant promotions.",
    type: "website",
    locale: "en_US",
    siteName: "Matt Growden Magic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-zinc-100 selection:bg-gold-400 selection:text-dark-bg">
        {children}
      </body>
    </html>
  );
}
