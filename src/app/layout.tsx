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
      <body
        className={twMerge(montserrat.className, "antialiased bg-[#EAEEFE]")}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
