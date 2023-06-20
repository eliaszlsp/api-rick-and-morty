"use client";
import "./globals.css";

import { ThemeProvider } from "@material-tailwind/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="pt-br">
        <body className="bg-black">{children}</body>
      </html>
    </ThemeProvider>
  );
}
