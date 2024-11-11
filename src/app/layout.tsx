import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/Header';
import SocialMedia from "@/components/SocialMedia";

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
  title: "Pague Bem Brasil",
  description: "Pague Bem Brasil é uma empresa líder em soluções financeiras digitais, especializada em prevenção, controle e combate à inadimplência. A plataforma unifica diversas funcionalidades, como cobrança, meios de pagamento, negativação e negociação, permitindo que nossos clientes tenham controle total sobre o processo de cobrança, otimizando o tempo e os recursos das equipes financeiras. A Pague Bem Brasil se dedica a transformar a maneira como empresas gerenciam suas finanças, proporcionando resultados mensuráveis e estratégicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <SocialMedia color="green"/>
        {children}
      </body>
    </html>
  );
}
