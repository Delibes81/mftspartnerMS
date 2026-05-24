import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mattechservices.mx'), // TODO: Reemplazar con URL real
  title: {
    default: "MFTS | Mat Fleet Tech Services - Soluciones TI y Soporte Técnico Profesional",
    template: "%s | MFTS"
  },
  description: "Servicios integrales de TI para tu empresa. Soporte técnico, redes y cableado estructurado, seguridad (CCTV y biométricos), renta de equipos de impresión y soluciones oficiales de Microsoft 365.",
  keywords: [
    'infraestructura IT',
    'soporte técnico',
    'redes y cableado',
    'cctv y biométricos',
    'soluciones microsoft 365',
    'renta de equipos de impresión'
  ],
  authors: [{ name: 'MFTS', url: 'https://www.mattechservices.mx' }],
  creator: 'MFTS',
  publisher: 'MFTS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'MFTS | Mat Fleet Tech Services - Soluciones TI',
    description: 'Servicios integrales de TI para tu empresa. Soporte, redes, seguridad y licenciamiento Microsoft.',
    url: 'https://www.mattechservices.mx',
    siteName: 'MFTS',
    images: [
      {
        url: '/images/og-image.jpg', // TODO: Reemplazar con ruta real
        width: 1200,
        height: 630,
        alt: 'Soluciones TI y Soporte Técnico - MFTS',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MFTS | Soluciones de TI y Soporte Técnico',
    description: 'Optimizamos la infraestructura tecnológica de tu empresa con servicios integrales de TI.',
    creator: '@mfts_twitter', // TODO: Reemplazar
    images: ['/images/twitter-image.jpg'], // TODO: Reemplazar
  },
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
  verification: {
    google: 'tu-codigo-de-verificacion-de-google', // TODO: Reemplazar con tu código de verificación
  },
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
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
