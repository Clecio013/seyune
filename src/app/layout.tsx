import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Caveat } from "next/font/google";
import "./globals.css";

// Títulos - Similar à Recoleta Alt (elegante, orgânica, curvas suaves)
const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Corpo - Similar à Nexa (moderna, limpa, geométrica)
const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Citações - Similar à Dreaming Outloud Sans (manuscrita, pessoal)
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
        className={`${cormorant.variable} ${manrope.variable} ${caveat.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
