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
  description: 'Servicii profesionale de spalare covoare in Timisoara. Curatare, igienizare si livrare gratuita la domiciliu.',
  keywords: ["spalatorie covoare timisoara", "curatare covoare", "spalare covoare", "mochetino", "livrare gratuita", "servicii profesionale"],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Spalatorie covoare Timisoara: MOCHETINO',
    description: 'Servicii profesionale de spalare covoare in Timisoara. Curatare, igienizare si livrare gratuita la domiciliu.',
    url: 'https://www.mochetino.ro',
    siteName: 'MOCHETINO',
    images: [
      {
        url: '../web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Spalatorie covoare Timisoara MOCHETINO - Servicii profesionale de curatare',
      },
      {
        url: '../web-app-manifest-192x192.png',
        width: 192,
        height: 192,
        alt: 'MOCHETINO Logo',
      }
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Spalatorie covoare Timisoara: MOCHETINO',
    description: 'Servicii profesionale de spalare covoare in Timisoara. Curatare, igienizare si livrare gratuita la domiciliu.',
    images: ['../web-app-manifest-512x512.png'],
  },
  icons: {
    icon: [
      { url: './icon.ico', sizes: 'any' },
      { url: '../favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '../favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '../favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '../web-app-manifest-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '../web-app-manifest-512x512.png', type: 'image/png', sizes: '512x512' },
      { url: '../favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: ['./icon.ico'],
    apple: [
      { url: '../apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: './icon.ico',
        color: '#FF0000'
      }
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
        <link rel="icon" href="./icon.ico" sizes="any"/>
        {/* <link rel="icon" type="image/png" href="../favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="../favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="../favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="../web-app-manifest-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="../web-app-manifest-512x512.png" sizes="512x512" />
        <link rel="icon" type="image/svg+xml" href="../favicon.svg" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png" />
        <link rel="mask-icon" href="../favicon.svg" color="#FF0000" />
        <link rel="manifest" href="../site.webmanifest" />
        <meta name="theme-color" content="#FF0000" />
        <meta name="google-site-verification" content="zHwsyHb3ILIJQmKES5iQu4i9E5sNxUKLnJfNLgTRzJA" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
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
