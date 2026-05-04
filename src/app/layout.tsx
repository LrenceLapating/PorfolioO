import type { Metadata } from "next";
import { Space_Grotesk, Archivo } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marc Laurence A. Lapating - Tech Support & Vibe Coder",
  description: "IT Graduate specializing in tech support and AI automation. Vibe coder leveraging AI to build functional applications.",
  keywords: ["tech support", "AI automation", "vibe coder", "IT", "troubleshooting", "Marc Laurence Lapating"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${archivo.variable} dark`}>
      <body className="font-sans antialiased cursor-none bg-background text-foreground transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
