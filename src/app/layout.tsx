import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from '@vercel/analytics/next';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spalatorie covoare Timisoara - MOCHETINO",
  description: "Spalatorie covoare Timisoara - MOCHETINO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MOCHETINO - Spalatorie covoare Timișoara" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={twMerge(montserrat.className, "antialiased bg-[#EAEEFE]")}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
