import type { Metadata } from "next";
import { Tenor_Sans } from "next/font/google";
import "./styles/globals.css";

const tenorSans = Tenor_Sans({
  variable: "--font-tenor-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Projet Open Fashion",
  description: "Projet Open Fashion - Boutique mode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tenorSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
