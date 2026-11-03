import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Azril AI Asisten',
  description:
    'Azril AI Asisten membantu menjawab pertanyaan dengan tampilan modern dan ramah.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Azril AI Asisten',
  },
  icons: {
    icon: '/azril-icon.svg',
    apple: '/azril-icon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1d4ed8" />
        <meta name="description" content={metadata.description as string} />
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/azril-icon.svg" type="image/svg+xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Azril AI Asisten" />
        <link rel="apple-touch-icon" href="/azril-icon.svg" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
