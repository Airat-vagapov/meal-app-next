
import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import Content from "@/UI/Content/Content";

import { Mulish } from 'next/font/google'
import "@/styles/global.sass";

const mulish = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Meal App",
  description: "Recipes finder service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      <body className={mulish.className}>
        <Header />
        <Content>
          {children}
        </Content>

      </body>
    </html>
  );
}
