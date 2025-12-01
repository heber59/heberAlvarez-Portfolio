import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Proyecto Heber Álvarez",
  description: "Portafolio tipo carpeta de Heber  Álvarez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${inter.variable} bg-slate-200`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
