import type { Metadata } from "next";
import { Nunito, Marck_Script } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const marckScript = Marck_Script({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Боки и Кроко-РОКодилоси",
  description:
    "Музичко-сценска представа за децу. Последњи рокер на планети у потрази за рокенролом.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${nunito.variable} ${marckScript.variable}`}>
        {children}
      </body>
    </html>
  );
}