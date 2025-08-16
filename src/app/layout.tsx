import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Save the Date - Evento MIPIM México",
  description: "Un encuentro estratégico para líderes del sector inmobiliario. 10 de Septiembre 2025, 8:30 AM. Evento exclusivo con cupo limitado.",
  keywords: "MIPIM, México, real estate, inmobiliario, evento, networking, Cannes",
  authors: [{ name: "Growth BD México" }],
  openGraph: {
    title: "Save the Date - Evento MIPIM México",
    description: "Un encuentro estratégico para líderes del sector inmobiliario",
    url: "https://mipim.growthbdm.com",
    siteName: "Evento MIPIM México",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="mipim">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
