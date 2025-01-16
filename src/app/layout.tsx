
import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import Content from "@/ui/Content/Content";

import { Mulish } from 'next/font/google'
import "@/styles/global.sass";

const mulish = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700']
});

export const metadata: Metadata = {
  title: "Meal App",
  description: "Recipes finder service",
  // links: [
  //   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional' }
  // ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      </head>
      <body className={mulish.className}>
        <Header />
        <Content>
          {children}
        </Content>

      </body>
    </html>
  );
}
