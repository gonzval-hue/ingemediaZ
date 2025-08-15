import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ingemedia - Contenido de Noticias con Inteligencia Artificial",
  description: "Revolucionamos tu contenido con Inteligencia Artificial. Creamos contenido de noticias de alta calidad, personalizado y atractivo para potenciar tu marca.",
  keywords: ["Ingemedia", "Inteligencia Artificial", "Contenido", "Noticias", "Marketing", "Periodismo"],
  authors: [{ name: "Ingemedia Team" }],
  openGraph: {
    title: "Ingemedia - Contenido de Noticias con IA",
    description: "Revolucionamos tu contenido con Inteligencia Artificial para potenciar tu marca",
    siteName: "Ingemedia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingemedia - Contenido de Noticias con IA",
    description: "Revolucionamos tu contenido con Inteligencia Artificial para potenciar tu marca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
