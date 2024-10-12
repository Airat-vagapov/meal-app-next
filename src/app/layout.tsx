
import type { Metadata } from "next";

import Header from "@/components/Header/Header";

import { Mulish } from 'next/font/google'

import "@/styles/global.sass";

const mulish = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Meal App",
  description: "Recipes finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
