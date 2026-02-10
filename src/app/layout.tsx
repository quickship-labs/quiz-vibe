import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/config';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Free Personality Quizzes & Fun Tests | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['personality quiz', 'fun quiz', 'trivia', 'personality test', 'spirit animal quiz', 'love language quiz'],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Free Personality Quizzes & Fun Tests | ${siteConfig.name}`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7766226733923401" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {siteConfig.adsensePublisherId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsensePublisherId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        {siteConfig.gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${siteConfig.gaMeasurementId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
