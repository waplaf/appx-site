import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Appx - Soluções Digitais Personalizadas',
  description: 'Desenvolvemos websites, apps móveis e software desktop personalizados. Serviços de DevOps, IA e chatbot em Maputo, Moçambique.',
  keywords: 'soluções digitais, desenvolvimento de software, apps móveis, IA, chatbot, Maputo, Moçambique, DevOps, websites personalizados',

  openGraph: {
    title: 'Appx - Transformação Digital Personalizada',
    description: 'A Appx oferece soluções digitais para empresas, incluindo websites e apps personalizados.',
    url: 'https://appx.kartas.pro',
    images: [
      {
        url: '/3.png',
        alt: 'Appx logo',
        height: 630,
        width: 1200
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {






  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <style>
          {`
          [toast-close] svg{
          color:white;
          width:24px;
          height:24px;
          }
          
          `}
        </style>
        <Toaster />

        {children}
      </body>
    </html>
  );
}
