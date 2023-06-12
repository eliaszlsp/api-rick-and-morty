"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@material-tailwind/react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="pt-br">
        <body className={`${inter.className} bg-white`}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
