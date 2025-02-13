import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"


const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: "Servicii profesionale de spalare covoare in Timisoara",
  description: "Servicii profesionale de spalare covoare in Timisoara. Curatare, igienizare si livrare gratuita la domiciliu. Tehnologii avansate si detergenti profesionali.",
  keywords: ["spalatorie covoare timisoara", "curatare covoare", "spalare covoare", "mochetino", "livrare gratuita", "servicii profesionale"],
  openGraph: {
    title: 'Spalatorie covoare Timisoara: MOCHETINO',
    description: 'Servicii profesionale de spalare covoare in Timisoara. Curatare, igienizare si livrare gratuita la domiciliu.',
    url: 'https://mochetino.ro',
    siteName: 'MOCHETINO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spalatorie covoare Timisoara MOCHETINO - Servicii profesionale de curatare',
      }
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spalatorie covoare Timisoara: MOCHETINO',
    description: 'Servicii profesionale de spalare covoare in Timisoara. Curatare, igienizare si livrare gratuita la domiciliu.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FF0000" />
        <meta name="google-site-verification" content="zHwsyHb3ILIJQmKES5iQu4i9E5sNxUKLnJfNLgTRzJA" />
      </head>
      <body
        className={twMerge(montserrat.className, "antialiased bg-[#EAEEFE]")}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
