"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents hydration issues

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1500px] mx-auto p-5 border-[3px] border-primary shadow-primary shadow-inner rounded-sm">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
