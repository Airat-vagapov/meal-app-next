
import type { Metadata } from "next";

import Header from "@/components/Header/Header";

import { Literata, Onest } from 'next/font/google'
import "@/styles/global.sass";

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-onest',
  display: 'swap'
});

const literata = Literata({
  subsets: ['latin', 'cyrillic'],
  weight: ['600', '700', '800'],
  variable: '--font-literata',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Mealler",
  description: "Easy meal recipe finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} ${literata.variable}`}>

      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <Header />
          {children}
      </body>
    </html>
  );
}
