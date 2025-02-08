import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1500px] mx-auto p-5 border-[3px] border-primary shadow-primary shadow-inner rounded-sm ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

{
  /* <div className="bg-[#141414] text-[#dbd9d9] max-w-[1500px] mx-auto p-5 border-[2px] border-[#6EEB83] shadow-[#6EEB83] shadow-inner rounded-sm "> */
}
