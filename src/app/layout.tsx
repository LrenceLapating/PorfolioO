import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Archivo } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // Update with your actual domain
  title: {
    default: "Marc Laurence A. Lapating - Tech Support & Vibe Coder",
    template: "%s | Marc Laurence Lapating"
  },
  description: "IT Graduate specializing in tech support, AI automation, and AI-assisted development. Building functional applications with modern tools and technologies.",
  keywords: [
    "tech support specialist",
    "AI automation",
    "vibe coder",
    "IT support",
    "system troubleshooting",
    "Marc Laurence Lapating",
    "web developer",
    "AI-assisted development",
    "n8n workflows",
    "Zapier integration",
    "React developer",
    "Next.js developer"
  ],
  authors: [{ name: "Marc Laurence A. Lapating" }],
  creator: "Marc Laurence A. Lapating",
  publisher: "Marc Laurence A. Lapating",
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Marc Laurence A. Lapating - Tech Support & Vibe Coder',
    description: 'IT Graduate specializing in tech support, AI automation, and AI-assisted development.',
    siteName: 'Marc Laurence Lapating Portfolio',
    images: [
      {
        url: '/og-image.png', // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Marc Laurence A. Lapating Portfolio',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Marc Laurence A. Lapating - Tech Support & Vibe Coder',
    description: 'IT Graduate specializing in tech support, AI automation, and AI-assisted development.',
    images: ['/og-image.png'],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add your verification codes)
  // verification: {
  //   google: 'your-google-verification-code',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${archivo.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased cursor-none bg-background text-foreground transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
