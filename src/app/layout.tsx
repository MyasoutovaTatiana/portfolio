import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Портфолио продуктового дизайнера — Татьяна Мясоутова",
  description:
    "Портфолио продуктового дизайнера Татьяны Мясоутовой: B2E сервисы, дизайн-системы, сложные интерфейсы и внутренняя аналитика.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <a href="#main-content" className="skipLink">
          Перейти к основному содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
