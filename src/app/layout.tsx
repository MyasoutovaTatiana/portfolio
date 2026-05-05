import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import CookieBanner from "@/components/CookieBanner";
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
      <body className={`${inter.className} ${inter.variable}`}>
        <a href="#main-content" className="skipLink">
          Перейти к основному содержимому
        </a>
        {children}
        <CookieBanner />
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "w4f55k3pvn");`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4KTBMEMEBJ"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4KTBMEMEBJ');`}
        </Script>
        <AnalyticsEvents />
      </body>
    </html>
  );
}
