
import type { Metadata } from "next";

import Header from "@/components/Header/Header";

import { Fraunces, Manrope } from 'next/font/google'
import "@/styles/global.sass";

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap'
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-fraunces',
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
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>

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
