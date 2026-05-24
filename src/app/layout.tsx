import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MFTS | Mat Fleet Tech Services - Soluciones TI y Soporte Técnico Profesional",
  description: "Servicios integrales de TI para tu empresa. Soporte técnico, redes y cableado estructurado, seguridad (CCTV y biométricos), renta de equipos de impresión y soluciones oficiales de Microsoft 365.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 selection:bg-tech-blue/10 selection:text-tech-blue">
        {children}
      </body>
    </html>
  );
}
