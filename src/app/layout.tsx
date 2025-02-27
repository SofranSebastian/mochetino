import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from 'next/script';

const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mochetino.ro'),
  title: "Servicii profesionale de spalare covoare in Timisoara",
  description: 'Servicii profesionale de spalare covoare in Timisoara. Curatare, igienizare si livrare gratuita la domiciliu.',
  keywords: ["spalatorie covoare timisoara", "curatare covoare", "spalare covoare", "mochetino", "livrare gratuita", "servicii profesionale"],
  alternates: {
    canonical: 'https://www.mochetino.ro',
  },
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
        url: 'https://www.mochetino.ro/opengraph-image?1236a763f49d59e1',
        width: 512,
        height: 512,
        alt: 'Spalatorie covoare Timisoara MOCHETINO - Servicii profesionale de curatare',
      },
      {
        url: 'https://www.mochetino.ro/opengraph-image?f7d41ac8be2c3310',
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
    images: ['https://www.mochetino.ro/opengraph-image?1e57153d8c7716c2'],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-765082855"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-765082855');

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-765082855/I8SGCN3mgJoaEOf56OwC',
                  'value': 0.2,
                  'currency': 'EUR',
                  'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
        <Script id="structured-data" type="application/ld+json">
          {`
            [{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "MOCHETINO - Spălătorie covoare Timișoara",
              "image": "https://www.mochetino.ro/android-chrome-512x512.png",
              "description": "Servicii profesionale de spalare covoare in Timisoara. Curatare, igienizare si livrare gratuita la domiciliu.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Timișoara",
                "addressRegion": "Timiș",
                "addressCountry": "RO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.7489",
                "longitude": "21.2087"
              },
              "url": "https://www.mochetino.ro",
              "telephone": "+40725629585",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61569051051211",
                "https://www.tiktok.com/@mochetino"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicii spălare covoare",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Spălare covoare",
                      "description": "Serviciu profesional de spălare covoare cu livrare gratuită"
                    }
                  }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Procesul nostru de curățare",
              "description": "Vezi cum îți putem transforma covorul - Procesul de curățare profesională MOCHETINO",
              "thumbnailUrl": "https://www.mochetino.ro/web-app-manifest-512x512.png",
              "uploadDate": "2024-01-01",
              "contentUrl": "https://www.mochetino.ro/spalare.mp4",
              "embedUrl": "https://www.mochetino.ro/spalare.mp4",
              "publisher": {
                "@type": "Organization",
                "name": "MOCHETINO",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.mochetino.ro/web-app-manifest-512x512.png"
                }
              }
            }]
          `}
        </Script>
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
