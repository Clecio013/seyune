import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Caveat } from "next/font/google";
import "./globals.css";

// Títulos - Cormorant Garamond (elegante, editorial, alta legibilidade)
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Corpo - Manrope (moderna, limpa, geométrica)
const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Citações - Caveat (manuscrita, pessoal)
const caveat = Caveat({
  variable: "--font-quote",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seyune - Nutrição Comportamental",
  description: "Transforme sua relação com a comida através da nutrição comportamental. Resultados sustentáveis sem restrições severas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorantGaramond.variable} ${manrope.variable} ${caveat.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
